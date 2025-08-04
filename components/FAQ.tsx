'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Can I use ArchiFlow without any CAD software experience?',
      answer: 'Absolutely! ArchiFlow is designed for everyone, regardless of technical background. Simply upload your floor plan and our AI handles the rest. No CAD software installation or expertise required.',
    },
    {
      question: 'What file formats are supported for upload?',
      answer: 'We support PDF, JPG, PNG, and SVG formats. You can upload everything from professional CAD drawings to hand-drawn sketches. Our AI is trained to understand various drawing styles and quality levels.',
    },
    {
      question: 'How accurate are the generated 3D models?',
      answer: 'Our AI achieves 98% accuracy in spatial relationships and dimensions. The models include proper proportions, room layouts, and architectural details based on your input plans.',
    },
    {
      question: 'Can I edit the 3D model after it\'s generated?',
      answer: 'Yes! You can make adjustments to materials, colors, furniture placement, and lighting. Our intuitive interface allows real-time editing without technical expertise.',
    },
    {
      question: 'Is my data secure and private?',
      answer: 'Security is our top priority. All uploads are encrypted, processed securely, and stored with enterprise-grade protection. You maintain full ownership of your designs and data.',
    },
    {
      question: 'How long does the conversion process take?',
      answer: 'Most conversions complete within 2-5 minutes depending on plan complexity. Large commercial projects may take up to 15 minutes. You\'ll receive real-time progress updates.',
    },
    {
      question: 'Can I share the 3D models with clients?',
      answer: 'Yes! Generate shareable web links that work on any device, export to popular 3D formats, or use our AR mode for in-person presentations. Perfect for client meetings and approvals.',
    },
    {
      question: 'What devices support the AR feature?',
      answer: 'AR viewing works on iOS (iPhone/iPad) and Android devices with ARCore support. No additional apps needed - everything runs in your mobile browser.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about ArchiFlow's capabilities and features
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you understand how ArchiFlow can transform your workflow.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;