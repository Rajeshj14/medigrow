'use client'

import { CheckCircle, Award, GraduationCap, Users, Heart } from 'lucide-react';
import Image from 'next/image';

export default function Doctor() {
  const credentials = [
    'MBBS, MD (DVL)',
    'Aesthetic Dermatologist | Skin Specialist',
    '8+ Years of Experience',
    'Member of Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)',
  ];

  const expertise = [
    { icon: Award, label: 'Expert in Medical & Cosmetic Dermatology' },
    { icon: Users, label: '9000+ Satisfied Patients' },
    { icon: Heart, label: 'Personalized, Evidence-Based Care' },
    { icon: GraduationCap, label: 'Continuous Learning & Innovation' },
  ];

  return (
    <section
      id="doctor"
      className="py-10 mt-[10px] px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-sm:mb-8 space-y-4">
          <div className="inline-block">
            <span className="text-[#F849C1] font-bold text-sm tracking-wider uppercase">
              Meet Our Expert
            </span>
            <div className="h-1 w-20 bg-gradient-to-r from-[#B964DD] to-[#F849C1] rounded-full mt-2 mx-auto"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Led by{' '}
            <span className="bg-gradient-to-r from-[#B964DD] to-[#F849C1] bg-clip-text text-transparent">
              Expertise You Can Trust
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 max-sm:gap-8 gap-12 items-center bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* <div className="relative h-[500px] lg:h-155">
            <div className="absolute inset-0 bg-gradient-to-br bg-gradient-to-br bg-gradient-to-br bg-gradient-to-br from-[#B964DD] to-[#F849C1] opacity-10"></div>
            <Image
              src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
              alt="Radiance Elite"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-16 h-16 bg-gradient-to-br bg-gradient-to-br bg-gradient-to-br from-[#B964DD] to-[#F849C1] rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">8+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="relative h-[400px] lg:h-[620px] w-full">
  {/* Main Image */}
  <Image
    src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
    alt="Radiance Elite"
    fill
    className="object-contain object-center"
  />

  {/* Top gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

  {/* Bottom decorative gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#B964DD] to-[#F849C1] opacity-10"></div>

  {/* Info Card */}
  <div className="absolute bottom-8 left-8 right-8">
    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-4 mb-3">
        <div className="w-16 h-16 bg-gradient-to-br from-[#B964DD] to-[#F849C1] rounded-full flex items-center justify-center">
          <Award className="w-8 h-8 text-white" />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">8+</p>
          <p className="text-sm text-gray-600">Years Experience</p>
        </div>
      </div>
    </div>
  </div>
</div>


          <div className="p-8 max-sm:pt-0 md:p-12 space-y-8">
            <div className="max-sm:mb-4">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 max-sm:mb-0">
                Radiance Elite
              </h3>
              <p className="text-[#B964DD] font-semibold text-lg">
                MD Dermatologist | Aesthetic Expert
              </p>
            </div>

            <div className="space-y-3 max-sm:mb-5">
              {credentials.map((credential, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#B964DD] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{credential}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4 max-sm:pt-3">
              <p className="text-gray-600 leading-relaxed max-sm:mb-3">
                Radiance Elite & Hair Clinic brings over <span className="font-semibold text-gray-800">8 years of hands-on clinical expertise</span> in
                treating both medical and cosmetic skin conditions. Her approach blends evidence-based medicine with a strong aesthetic sense, ensuring every treatment plan is personalized, safe, and effective.
              </p>

              <p className="text-gray-600 leading-relaxed">
                From acne and pigmentation to advanced anti-aging treatments, she  helps{' '}
                <span className="font-semibold text-gray-800"> patients regain control over their skin </span> with compassion and precision.
              </p>

              {/* <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-5 border border-cyan-100">
                <p className="text-gray-700 italic">
                  "Her philosophy is simple: skincare should be rooted in science, not driven by trends. This is exactly why her patients trust her and why the results consistently speak for themselves."
                </p>
                <p className="text-sm text-gray-500 mt-2 font-semibold">
                  — Radiance Elite
                </p>
              </div> */}
            </div>

            {/* <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              {expertise.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#B964DD] to-[#F849C1] rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs font-medium text-gray-700 leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

