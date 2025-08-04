import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ArchiFlow - AI-Powered 2D to 3D Architectural Visualization',
  description: 'Transform your floor plans into stunning 3D models and AR experiences instantly with ArchiFlow\'s revolutionary AI technology.',
  keywords: 'architecture, 3D modeling, AI, floor plans, visualization, AR, VR, building design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}