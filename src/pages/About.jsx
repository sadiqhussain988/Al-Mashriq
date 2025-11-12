import React from 'react'
import AboutSection from '../components/about/AboutSection'
import MissionVision from '../components/about/MissionVision.JSX'
import WhyChoose from '../components/about/WhyChoose'
import TeamStarted from '../components/about/TeamStarted'

const About = () => {
  return (
    <div>
      <AboutSection/>
      <MissionVision/>
      <WhyChoose/>
      <TeamStarted/>
    </div>
  )
}

export default About
