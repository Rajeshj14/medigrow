"use client";
import AppointmentForm from "../components/forms/AppointmentForm";
import { CheckCircle, Heart, Shield, Sparkles } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Heart,
      text: "Personalized Care Tailored to Your Skin",
    },
    {
      icon: Shield,
      text: "Clinically Proven, Safe Treatments",
    },
    {
      icon: Sparkles,
      text: "Advanced Technology & Expertise",
    },
    {
      icon: CheckCircle,
      text: "Visible, Long-Lasting Results",
    },
  ];

  return (
    <section className="py-10 max-sm:pt-2 max-sm:py-0 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 max-sm:mb-0 sm:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gray-900">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#B964DD] to-[#F849C1] bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Reach out to our skin care experts for personalized consultations
            and treatment plans tailored to your unique skin concerns and beauty
            goals.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 max-sm:gap-6 gap-12 items-center">
          <div className="w-full max-w-[1250px] h-[500px] sm:h-[400px] md:h-[585px] bg-[#00162A] mt-0 max-sm:mt-5 mx-auto rounded shadow-lg shadow-black/50 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2774336248353!2d80.16355291028961!3d13.081595587190757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526358e4b5ad39%3A0x49727befdef08f72!2sThe%20Radiance%20Elite%20Hair%20%26%20Skin%20Aesthetic%20Clinic!5e0!3m2!1sen!2sin!4v1767622157816!5m2!1sen!2sin"
              loading="lazy"
              title="Embedded Frame"
              className="w-full h-full rounded"
              frameBorder="0"
              allowFullScreen
            />
          </div>

          <div className="lg:pl-8" id="about">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
