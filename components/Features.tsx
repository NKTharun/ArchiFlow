'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Zap, 
  Smartphone, 
  FileImage, 
  Clock, 
  Shield, 
  Layers,
  Users,
  Download
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Conversion',
      description: 'Advanced machine learning algorithms instantly transform your 2D plans into accurate 3D models.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: Smartphone,
      title: 'AR Visualization',
      description: 'View your designs in augmented reality using your smartphone or tablet for an immersive experience.',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: FileImage,
      title: 'Multiple Format Support',
      description: 'Upload PDF, JPG, PNG, or even hand-drawn sketches. Our AI handles various input formats seamlessly.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Clock,
      title: 'Lightning Fast',
      description: 'Get your 3D model in minutes, not days. Our optimized processing pipeline ensures rapid results.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your designs are encrypted and stored securely. We respect your intellectual property.',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: Layers,
      title: 'Detailed 3D Models',
      description: 'Generate high-quality 3D models with accurate dimensions, materials, and architectural details.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share your 3D models with clients and team members for better communication and feedback.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      icon: Download,
      title: 'Export Options',
      description: 'Download your 3D models in popular formats like OBJ, GLB, or share via web links.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Architecture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to bring your architectural visions to life with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white group"
            >
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Value Proposition */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            No CAD Experience Required
          </h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Whether you're an architect, interior designer, or homeowner, ArchiFlow makes 3D visualization accessible to everyone. No technical expertise needed.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>No Software Installation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Cloud-Based Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Instant Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;