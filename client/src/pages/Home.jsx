import React from 'react'
import Headder from '../components/Headder'
import Steps from '../components/Steps'
import Description from '../components/Description.jsx'
import Testimonials from '../components/Testimonials.jsx'
import GenerateBtn from '../components/GenerateBtn.jsx'

const Home = () => {
  return (
    <div>
      <Headder/>
      <Steps/>
      <Description/>
      <Testimonials/>
      <GenerateBtn/>
    </div>
  )
}

export default Home