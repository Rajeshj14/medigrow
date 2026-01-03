// app/privacy-policy/page.tsx
import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, FileText, Cookie, Server, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
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
            
            <nav className="flex space-x-8">
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
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl mb-8 shadow-2xl">
            <Shield className="w-12 h-12 text-white" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Privacy Policy
          </h1>
          
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your privacy is our priority. Learn how we protect and manage your personal information.
          </p>
          
          <div className="mt-8 text-sm text-gray-500">
            Last Updated: January 1, 2026
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-12 mb-12">
          {/* Introduction */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Introduction</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to Radiance Elite. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[
                {
                  icon: <UserCheck className="w-8 h-8" />,
                  title: "Personal Information",
                  items: ["Full Name", "Email Address", "Phone Number", "Demographic Information"],
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Cookie className="w-8 h-8" />,
                  title: "Technical Data",
                  items: ["IP Address", "Browser Type", "Device Information", "Usage Data"],
                  color: "from-purple-500 to-violet-500"
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Health Information",
                  items: ["Medical History", "Treatment Preferences", "Consultation Notes", "Progress Records"],
                  color: "from-rose-500 to-pink-500"
                },
                {
                  icon: <Server className="w-8 h-8" />,
                  title: "Payment Information",
                  items: ["Billing Address", "Payment Method", "Transaction History", "Insurance Details"],
                  color: "from-amber-500 to-orange-500"
                }
              ].map((section, idx) => (
                <div key={idx} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {section.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  title: "Service Delivery",
                  description: "To provide and maintain our services, process your appointments, and deliver personalized treatment plans."
                },
                {
                  title: "Communication",
                  description: "To send appointment confirmations, treatment updates, and respond to your inquiries."
                },
                {
                  title: "Improvement",
                  description: "To analyze usage patterns and improve our website functionality and service quality."
                },
                {
                  title: "Security",
                  description: "To protect against fraudulent activities and ensure the security of our systems and your data."
                },
                {
                  title: "Legal Compliance",
                  description: "To comply with legal obligations and respond to lawful requests from authorities."
                }
              ].map((use, idx) => (
                <div key={idx} className="flex items-start space-x-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 p-6 rounded-2xl border border-blue-100/50">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {idx + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{use.title}</h4>
                    <p className="text-gray-600">{use.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Protection */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Data Protection & Security</h2>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-50/50 to-green-50/50 rounded-2xl p-8 border border-emerald-100/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Encryption",
                    description: "All sensitive data is encrypted using industry-standard protocols"
                  },
                  {
                    title: "Access Control",
                    description: "Strict access controls and authentication mechanisms"
                  },
                  {
                    title: "Regular Audits",
                    description: "Continuous security monitoring and regular vulnerability assessments"
                  },
                  {
                    title: "Data Backup",
                    description: "Regular automated backups and disaster recovery systems"
                  },
                  {
                    title: "Employee Training",
                    description: "Comprehensive privacy and security training for all staff"
                  },
                  {
                    title: "Third-Party Vetting",
                    description: "Careful selection and monitoring of third-party service providers"
                  }
                ].map((protection, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{protection.title}</h4>
                    <p className="text-gray-600 text-sm">{protection.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Your Privacy Rights</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  right: "Right to Access",
                  description: "You can request copies of your personal information."
                },
                {
                  right: "Right to Rectification",
                  description: "You can request correction of inaccurate information."
                },
                {
                  right: "Right to Erasure",
                  description: "You can request deletion of your personal information."
                },
                {
                  right: "Right to Restrict",
                  description: "You can request restriction of data processing."
                },
                {
                  right: "Right to Object",
                  description: "You can object to our processing of your personal information."
                },
                {
                  right: "Right to Data Portability",
                  description: "You can request transfer of your data to another organization."
                }
              ].map((right, idx) => (
                <div key={idx} className="bg-gradient-to-br from-white to-amber-50/30 rounded-xl p-6 border border-amber-100 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{right.right}</h4>
                  <p className="text-gray-600">{right.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-10 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
              <p className="text-blue-200 text-lg">
                For privacy-related questions or to exercise your rights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl font-bold mb-4">Email Address</h4>
                <a href="mailto:privacy@radianceelite.com" className="flex items-center space-x-3 text-lg hover:text-blue-200 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>privacy@radianceelite.com</span>
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl font-bold mb-4">Phone Number</h4>
                <a href="tel:+919600004085" className="flex items-center space-x-3 text-lg hover:text-blue-200 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+91 96000 04085</span>
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-center text-blue-200">
                We typically respond to privacy inquiries within 48 hours
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-950 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-gray-400 text-lg">
              © 2026 Radiance Elite. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 text-lg">
            <button className="text-gray-400 hover:text-blue-300 transition-all transform hover:-translate-y-0.5 font-medium">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-blue-300 transition-all transform hover:-translate-y-0.5 font-medium">
              Terms of Service
            </button>
            <button className="text-gray-400 hover:text-blue-300 transition-all transform hover:-translate-y-0.5 font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;