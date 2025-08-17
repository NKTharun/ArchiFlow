from flask import Flask, render_template, request
import cv2
import numpy as np
from skimage.morphology import skeletonize
import plotly.graph_objects as go
from PIL import Image
import io

app = Flask(__name__)

def plot_solid_transparent_walls_from_bytes(image_bytes, wall_height=100, wall_width=10):
    pil_image = Image.open(io.BytesIO(image_bytes)).convert('RGB')
    img = cv2.cvtColor(np.array(pil_image), cv2.COLOR_RGB2BGR)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, binary = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY_INV)
    skeleton = skeletonize(binary // 255).astype(np.uint8) * 255
    edges = cv2.Canny(skeleton, 50, 150, apertureSize=3)
    lines = cv2.HoughLinesP(edges, 1, np.pi / 180, threshold=80, minLineLength=40, maxLineGap=5)

    fig = go.Figure()
    if lines is not None:
        for line in lines:
            x1, y1, x2, y2 = line[0]
            dx, dy = x2 - x1, y2 - y1
            length = np.sqrt(dx**2 + dy**2)
            if length == 0:
                continue
            perp_dx = -dy / length
            perp_dy = dx / length
            offset_x = perp_dx * wall_width / 2
            offset_y = perp_dy * wall_width / 2
            x1a, y1a = x1 + offset_x, y1 + offset_y
            x1b, y1b = x1 - offset_x, y1 - offset_y
            x2a, y2a = x2 + offset_x, y2 + offset_y
            x2b, y2b = x2 - offset_x, y2 - offset_y
            xs = [x1a, x2a, x2b, x1b]
            ys = [y1a, y2a, y2b, y1b]
            zs = [0, 0, 0, 0] + [wall_height] * 4

            fig.add_trace(go.Mesh3d(
                x=xs * 2,
                y=ys * 2,
                z=zs,
                i=[0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3],
                j=[1, 2, 3, 0, 5, 6, 7, 4, 4, 5, 6, 7],
                k=[5, 6, 7, 4, 1, 2, 3, 0, 1, 2, 3, 0],
                color='blue',
                opacity=0.85,
                flatshading=True,
                name="Wall"
            ))

    contours, _ = cv2.findContours(skeleton, cv2.RETR_LIST, cv2.CHAIN_APPROX_NONE)
    for cnt in contours:
        points = [(p[0][0], p[0][1]) for p in cnt]
        if len(points) < 2:
            continue
        x, y = zip(*points)
        z = [0] * len(points)
        fig.add_trace(go.Scatter3d(
            x=x, y=y, z=z,
            mode="lines",
            line=dict(color='black', width=1),
            name="2D Detail"
        ))

    fig.update_layout(
        scene=dict(
            xaxis=dict(visible=False),
            yaxis=dict(visible=False),
            zaxis=dict(visible=False),
            aspectmode="data"
        ),
        title=f"Solid Transparent Walls (Width={wall_width}px, Height={wall_height}px)",
        showlegend=False
    )
    return fig.to_html(full_html=True)

@app.route("/", methods=["GET", "POST"])
def upload_page():
    if request.method == "POST":
        file = request.files["image"]
        if not file:
            return "No file uploaded", 400
        image_bytes = file.read()
        wall_height = int(request.form.get("height", 100))
        wall_width = int(request.form.get("width", 10))
        html = plot_solid_transparent_walls_from_bytes(image_bytes, wall_height, wall_width)
        return html
    return """
<!DOCTYPE html>
<html>
<head><title>Upload Floor Plan</title></head>
<body>
  <h2>Upload Floor Plan Image</h2>
  <form method="post" enctype="multipart/form-data">
    <label>Image File:</label>
    <input type="file" name="image" accept="image/*" required><br><br>
    <label>Wall Height (px):</label>
    <input type="number" name="height" value="100"><br><br>
    <label>Wall Width (px):</label>
    <input type="number" name="width" value="10"><br><br>
    <input type="submit" value="Render 3D View">
  </form>
</body>
</html>
"""

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
