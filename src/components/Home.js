import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import SectionFive from './SectionFive'
import SectionFour from './SectionFour'
import SectionOne from './SectionOne'
import SectionSix from './SectionSix'
import SectionThree from './SectionThree'
import SectionTwo from './SectionTwo'

const Home = () => {
  return (
      <div className='app'>
          <Hero /> 
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <Footer />

    </div>
  )
}

export default Home