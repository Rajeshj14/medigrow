// app/thank-you/page.tsx
import React from "react";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import Image from "next/image";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="relative w-44 h-12 transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/image.png"
                  alt="Swetika Skin Clinic"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="tel:+917829868135"
                className="flex items-center gap-2 px-5 py-2 rounded-full
                bg-gradient-to-r from-purple-600 to-pink-500
                hover:bg-gradient-to-r hover:from-[#F849C1] hover:to-[#B964DD]
                text-white font-semibold shadow-lg
                transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>+91 9600004085</span>
              </a>
              <a
                href="/"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full
                bg-gradient-to-r from-[#B964DD] to-[#F849C1]
                hover:bg-gradient-to-r hover:from-[#F849C1] hover:to-[#B964DD]
                text-white font-semibold shadow-lg
                transition-all duration-300"
              >
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Success Message Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-purple-100">
            <div className="text-center mb-10">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Thank You!
              </h2>
              <p className="text-xl text-gray-600">
                Your consultation request has been received successfully.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                What Happens Next?
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    number: "01",
                    title: "Team Contact",
                    description:
                      "Our team will contact you within 24 hours to confirm your consultation details",
                  },
                  {
                    number: "02",
                    title: "Confirmation Email",
                    description:
                      "You'll receive a confirmation email with your appointment information",
                  },
                  {
                    number: "03",
                    title: "Expert Consultation",
                    description:
                      "During your consultation, our experts will assess your needs and answer all your questions",
                  },
                  {
                    number: "04",
                    title: "Personalized Plan",
                    description:
                      "We'll create a personalized treatment plan tailored to your specific requirements",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full w-25 h-12 flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <p className="text-gray-400">
              © 2026 Radiance Elite. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThankYouPage;
