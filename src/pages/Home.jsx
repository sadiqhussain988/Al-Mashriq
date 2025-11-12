import React from 'react'
import Hero from '../components/Home/Hero'
import FeaturesSection from '../components/Home/FeaturesSection'
import InfoSection from '../components/Home/InfoSection'
import BasicTrading from '../components/Home/BasicTrading'
import Trade from '../components/Home/Trade'
import CenteredSection from '../components/Home/CenterSection'


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