'use client'

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I know which treatment I need?',
      answer:
        'You don’t need to decide that yourself. That’s what your consultation is for. We assess your skin medically and suggest the best-fit options for your concern and skin type.',
    },
    {
      question: 'Is it safe for sensitive skin or first-timers?',
      answer:
        'Absolutely. Dr. Swetha takes a conservative and safe approach, especially if you’re new to dermatological treatments.',
    },
    {
      question: 'Will there be downtime or side effects?',
      answer:
        'That depends on the treatment, but many of our procedures are non-invasive with minimal or no downtime. You’ll be informed clearly before anything starts.',
    },
    {
      question: 'What if my concern returns?',
      answer:
        'Skin health can be ongoing. That’s why we guide you not just through the treatment but also with prevention tips, a proper skincare routine, and follow-ups.',
    },
    {
      question: 'Do you treat children?',
      answer:
        'Yes, we offer expert pediatric dermatology for common and chronic skin conditions in children and teens.',
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white pt-15 max-sm:pt-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 max-sm:mb-8 space-y-4">
          <div className="inline-block">
            <span className="text-[#F849C1] font-bold text-sm tracking-wider uppercase">
              Got Questions?
            </span>
            <div className="h-1 w-20 bg-gradient-to-r from-[#B964DD] to-[#F849C1] rounded-full mt-2 mx-auto"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#B964DD] to-[#F849C1] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-xl text-gray-600">
            Everything you need to know about our treatments and services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-start gap-4 p-6 text-left transition-all duration-300 hover:bg-gray-50"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#B964DD] to-[#F849C1] rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg pr-8">
                    {faq.question}
                  </h3>
                </div>

                <ChevronDown
                  className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pl-18">
                  <div className="pl-12 pt-2 border-l-2 border-cyan-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            We're here to help! Give us a call or book a consultation to discuss your concerns.
          </p>
          <a
            href="tel:+917829868135"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B964DD] to-[#F849C1] hover:from-[#B964DD] hover:to-[#F849C1] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Call Us Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
