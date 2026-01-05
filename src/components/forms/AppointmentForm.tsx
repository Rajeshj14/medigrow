"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone, User, Send } from "lucide-react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    area: "",
    skinConcern: "",
    text: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert(
        "Appointment request submitted successfully! We will call you back soon."
      );
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        area: "",
        skinConcern: "",
        text: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#B964DD] to-[#F849C1] rounded-3xl blur-xl opacity-20"></div>

      <div className="relative bg-gradient-to-br from-white to-cyan-50 rounded-3xl p-8 shadow-2xl border border-cyan-100">
        <div className="mb-6">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Get the Results You’ve Always Dreamed Of
          </h3>
          <p className="text-gray-600">
            Fill out the form and we'll call you back to schedule your
            consultation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
          {/* NAME & EMAIL */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter Your Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200
                         focus:border-[#F849C1] focus:ring-2 focus:ring-[#F849C1]
                         outline-none transition-all bg-white"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200
                         focus:border-[#F849C1] focus:ring-2 focus:ring-[#F849C1]
                         outline-none transition-all bg-white"
                />
              </div>
            </div>
          </div>

          {/* PHONE & AREA */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter The Number"
                  pattern="[0-9]{10}"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200
                         focus:border-[#F849C1] focus:ring-2 focus:ring-[#F849C1]
                         outline-none transition-all bg-white"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Mention Your Skin Concerns
              </label>
              <div className="relative">
                {/* Icon */}
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />

                <select
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-gray-200
                    focus:border-[#F849C1] focus:ring-2 focus:ring-[#F849C1]
                    outline-none transition-all bg-white appearance-none text-gray-700"
                >
                  <option value="Pigmentation & Uneven Skin Tone">
                    Pigmentation & Uneven Skin Tone
                  </option>
                  <option value="Acne & Post-Acne Marks">
                    Acne & Post-Acne Marks
                  </option>
                  <option value="Dull & Dehydrated Skin">
                    Dull & Dehydrated Skin
                  </option>
                  <option value="Open Pores & Uneven Texture">
                    Open Pores & Uneven Texture
                  </option>
                  <option value="Dark Circles & Under-Eye Concerns">
                    Dark Circles & Under-Eye Concerns
                  </option>
                  <option value="Premature Aging & Fine Lines">
                    Premature Aging & Fine Lines
                  </option>
                  <option value="Sensitive or Reactive Skin">
                    Sensitive or Reactive Skin
                  </option>
                  <option value="Other">Other</option>
                </select>

                {/* Dropdown arrow */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-sm">
                  ▼
                </div>
              </div>
            </div>
          </div>

          {/* DATE & TIME */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Area / Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="skinConcern"
                  placeholder="Your area or locality"
                  value={formData.skinConcern}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200
                         focus:border-[#F849C1] focus:ring-2 focus:ring-[#F849C1]
                         outline-none transition-all bg-white"
                />
              </div>
            </div>
          <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Message
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="text"
                  placeholder="Please describe your questions.."
                  value={formData.text}
                  onChange={handleInputChange}
                  className="w-full pl-5 pr-2 py-3.5 rounded-xl border border-gray-200
                         focus:border-[#F849C1] focus:ring-2 focus:ring-[#F849C1]
                         outline-none transition-all bg-white"
                />
              </div>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#B964DD] to-[#F849C1]
                   hover:from-[#F849C1] hover:to-[#B964DD]
                   text-white py-4 rounded-xl font-bold shadow-lg
                   hover:shadow-xl transition-all duration-300
                   transform hover:scale-105 disabled:opacity-50
                   disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                REQUEST A CALL BACK
                <Send className="w-5 h-5" />
              </>
            )}
          </button>

          <p className="text-xs text-center text-gray-500">
            We respect your privacy. Your information is 100% secure.
          </p>
        </form>
      </div>
    </div>
  );
}
