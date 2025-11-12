import React from 'react'
import Hero from '../components/home/Hero'
import FeaturesSection from '../components/home/FeaturesSection'
import InfoSection from '../components/home/InfoSection'
import BasicTrading from '../components/home/BasicTrading'
import Trade from '../components/home/Trade'
import CenteredSection from '../components/home/CenterSection'


function Home() {
  return (
    <div>
        <Hero/>
        <FeaturesSection/>
        <InfoSection/>
        <BasicTrading/>
        <Trade/>
        <CenteredSection/>
    </div>
  )
}

export default Home