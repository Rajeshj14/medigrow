"use client"
import {
  CheckCircle,
  Award,
  Heart,
  Shield,
  Sparkles,
  Users,
  TrendingUp,
  Target,
} from 'lucide-react';
import Image from 'next/image';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Doctor-Led Treatments',
      description:
        'All treatments are either performed or supervised by Dr. Swetha. No unsupervised technicians involved.',
    },
    {
      icon: Heart,
      title: 'Truly Skin-Focused Care',
      description:
        "We don’t follow social media trends. Every treatment is based on what your skin genuinely needs.",
    },
    {
      icon: Sparkles,
      title: 'Advanced Technology',
      description:
        'We use globally trusted, safe, and effective equipment, specially suited for Indian skin types.',
    },
    {
      icon: Users,
      title: 'Complete Care for All Ages',
      description:
        'We treat everything from pediatric skin conditions to adult cosmetic concerns, offering care at every life stage.',
    },
    // {
    //   icon: Shield,
    //   title: 'Full Aftercare Support',
    //   description:
    //     'Post-treatment guidance, product support, and follow-ups to ensure the best results',
    // },
    // {
    //   icon: Target,
    //   title: 'Personalized Treatment Plans',
    //   description:
    //     'Custom solutions tailored to your unique skin type, concerns, and lifestyle',
    // },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-[#F849C1] font-bold text-sm tracking-wider uppercase">
              Why Choose Us
            </span>
            <div className="h-1 w-20 bg-gradient-to-r from-[#B964DD] to-[#F849C1] rounded-full mt-2 mx-auto"></div>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Why We're the{' '}
            <span className="bg-gradient-to-r from-[#B964DD] to-[#F849C1] bg-clip-text text-transparent">
              Best Choice
            </span>{' '}
            for Your Skin
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the difference that expertise, care, and advanced technology can make
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="group flex gap-5 p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-cyan-50 hover:to-blue-50 border border-gray-100 hover:border-cyan-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B964DD] to-[#F849C1] rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative lg:pl-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#B964DD] to-[#F849C1] rounded-full filter blur-3xl opacity-20"></div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl p-3 shadow-2xl">
                <div className="aspect-square rounded-2xl overflow-hidden relative">
                  <Image
                    src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg"
                    alt="Professional dermatology care"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent"></div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-cyan-100">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B964DD] rounded-full flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">8+</p>
                    <p className="text-xs text-gray-500">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center border border-cyan-100">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-gray-700">
                Full Aftercare Support
              </span>
            </div>

            <p className="text-lg text-gray-600">
              We provide post-treatment guidance, product support, and follow-ups to ensure the best possible results.
            </p>

            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B964DD] to-[#F849C1]
    hover:bg-gradient-to-r hover:from-[#F849C1] hover:to-[#B964DD] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>I'm Ready For Radiant Skin!</span>
              <Sparkles className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
