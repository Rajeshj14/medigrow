'use client'
import AppointmentForm from '../components/forms/AppointmentForm';
import { CheckCircle, Heart, Shield, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      text: 'Personalized Care Tailored to Your Skin',
    },
    {
      icon: Shield,
      text: 'Clinically Proven, Safe Treatments',
    },
    {
      icon: Sparkles,
      text: 'Advanced Technology & Expertise',
    },
    {
      icon: CheckCircle,
      text: 'Visible, Long-Lasting Results',
    },
  ];

  return (
    <section  className="py-15 max-sm:py-8 px-4 sm:py-10 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 max-sm:gap-8 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 mb-[10px]">
              <div className="inline-block">
                <span className="text-[#F849C1] font-bold text-sm tracking-wider uppercase">
                  About Us
                </span>
                <div className="h-1 w-20 bg-gradient-to-r from-[#B964DD] to-[#F849C1] rounded-full mt-2"></div>
              </div>

              <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
                Achieving Clear, Beautiful Skin Has Never Been{' '}
                <span className="bg-gradient-to-r from-[#B964DD] to-[#F849C1] bg-clip-text text-transparent">
                  This Easy
                </span>
              </h2>
            </div>

            <p className="text-md text-gray-600 leading-relaxed mb-[10px]">
              At <span className="font-semibold text-gray-800">Radiance Elite & Hair Clinic</span>,
             we share your passion for beautiful, healthy skin. Our advanced dermatological treatments are meticulously curated to rejuvenate you from within. We understand that every individual’s skin is unique, so we tailor each service to meet your specific needs, offering cost-effective solutions for optimal skin health
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our unwavering commitment to excellence ensures exceptional results, leaving you with renewed confidence and a radiant glow, making you fall in love with your skin all over again, because this is where every skin story finds its solution.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#B964DD] to-[#F849C1] rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 leading-snug pt-1">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-8" id="about">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
