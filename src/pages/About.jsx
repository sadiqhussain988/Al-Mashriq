import React from 'react'
import HeroSection from '../components/about/HeroSection'
import AboutSection from '../components/about/AboutSection'
import MissionVision from '../components/about/MissionVision'
import WhyChoose from '../components/about/WhyChoose'
import TeamStarted from '../components/about/TeamStarted'

const About = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <MissionVision/>
      <WhyChoose/>
      <TeamStarted/>
    </div>
  )
}

export default About
