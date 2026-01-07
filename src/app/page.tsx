import About from '@/components/AboutSection'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import React from 'react'
import WhyChooseUs from '@/components/Whywechooseus'
import Heros from '@/components/HeroSection'
import Stats from '@/components/Stats'
import Doctor from '@/components/Doctorpage'
import FAQ from '@/components/FAQ'
import Header from '@/components/Navbar'
import HairConcernsCarousel from '@/components/Skinbefore'
import SkinBeforeAfterThreeCards from '@/components/Skinvideo'
import SkinOfferSection from '@/components/skin-offer'




const page = () => {
  return (
    <div>
      <Header />
      <Heros/>
      <Stats />
      <SkinOfferSection />
      <Services />
      <HairConcernsCarousel />
      <SkinBeforeAfterThreeCards />
      <WhyChooseUs />
      <FAQ />
       <About />
      <Footer />

      
    </div>
  )
}

export default page
