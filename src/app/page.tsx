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




const page = () => {
  return (
    <div>
      <Header />
      <Heros/>
      <Stats />
      <About />
      <Services />
      <WhyChooseUs />
      <Doctor/>
      <HairConcernsCarousel />
      <SkinBeforeAfterThreeCards />
      <FAQ />
      <Footer />

      
    </div>
  )
}

export default page
