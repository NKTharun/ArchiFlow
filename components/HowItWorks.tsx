'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Upload, Brain, Eye, Play } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Upload 2D Plan',
      description: 'Simply upload your floor plan in PDF, JPG, or PNG format. Our system accepts hand-drawn sketches or CAD exports.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Brain,
      title: 'AI Processing',
      description: 'Our advanced AI analyzes your plan, understands spatial relationships, and generates accurate 3D geometry.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Eye,
      title: '3D & AR View',
      description: 'Instantly view your space in stunning 3D or experience it in augmented reality on your mobile device.',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How ArchiFlow Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your 2D floor plans into immersive 3D experiences in just three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${step.bgColor} rounded-full mb-6 mt-4`}>
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Demo Preview */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">See the Magic in Action</h3>
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Play className="h-8 w-8 text-blue-600 ml-1" />
                </div>
                <p className="text-gray-700 font-medium">Interactive Demo Coming Soon</p>
                <p className="text-gray-500 text-sm mt-2">Experience real-time 2D to 3D conversion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;