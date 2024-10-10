import React from 'react'

const Skillsheading = () => {
  return (
    <>
    <div className='divider divider--center'>
      <div
          className="divider__line divider__line--left"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate3d(0px, 0px, 0px)"
          }}
        />
      <div className='text-white text-subheadingclamp flex justify-center items-center'>
        Explore my creative expertise
      </div>
      <div
          className="divider__line divider__line--right"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate3d(0px, 0px, 0px)"
          }}
        />
    </div>
    <div className='text-white text-sm sm:text-md md:text-lg mini-text flex justify-center items-center'>
        Check out some of my projects by area of expertise
      </div>
    </>    
  )
}

export default Skillsheading