import React from 'react'
import PageLoader from '../components/PageLoader'
const About = () => {
  return (
    <>
        <PageLoader title='About'/>
        <div className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex justify-center items-center h-[90vh]'>Motion Designer & VFX Editor</div>
    </>
  )
}

export default About