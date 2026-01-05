'use client'
import { Sparkles, Zap, Shield, Target, TrendingUp, Heart } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'HydraFacial',
      description:
        'A deep-cleaning and hydrating facial that refreshes dull, tired skin and leaves it glowing in just 45 minutes.',
      icon: Sparkles,
      image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg',
    },
    {
      title: 'Chemical Peels',
      description:
        'Improve uneven skin tone, smooth out rough texture, and reduce dark spots for a clearer, brighter look.',
      icon: Zap,
      image: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg',
    },
    {
      title: 'MNRF',
      description:
        'Boost collagen, tighten loose skin, and reduce acne scars for a firmer, smoother, more even appearance.',
      icon: Target,
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg',
    },
    {
      title: 'Laser Hair Reduction',
      description:
        'Get long-lasting, smooth skin with safe and painless laser technology that works well on Indian skin types.',
      icon: Shield,
      image: 'https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg',
    },
    {
      title: 'RF Cautery',
      description:
        'Gently remove warts, moles, and skin tags with high-precision technology and quick, no-downtime healing.',
      icon: TrendingUp,
      image: 'https://images.pexels.com/photos/3985345/pexels-photo-3985345.jpeg',
    },
    {
      title: 'Mesotherapy',
      description:
        "Bring back your skin's glow and softness by deeply feeding it with vitamins and nutrients it truly needs.",
      icon: Heart,
      image: 'https://images.pexels.com/photos/3997376/pexels-photo-3997376.jpeg',
    },
  ];

  return (
    <section
      id="services"
      className="py-10 max-sm:py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-sm:mb-8 space-y-4">
          <div className="inline-block">
            <span className="text-[#F849C1] font-bold text-sm tracking-wider uppercase">
              Our Services
            </span>
            <div className="h-1 w-20 bg-gradient-to-r from-[#B964DD] to-[#F849C1] rounded-full mt-2 mx-auto"></div>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Tailored Solutions for Your{' '}
            <span className="bg-gradient-to-r  from-[#B964DD] to-[#F849C1] bg-clip-text text-transparent">
              Beauty Goals
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience world-class treatments designed specifically for your skin's unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                <a href="#about" className="mt-4 text-[#B964DD] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B964DD] to-[#F849C1]
    hover:bg-gradient-to-r hover:from-[#F849C1] hover:to-[#B964DD] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            <span>I'm Ready For Radiant Skin!</span>
          </a>
        </div>
      </div>
    </section>
  );
}
