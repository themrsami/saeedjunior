import React from 'react'
import Circle from './Circle'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
  {" "}
  <div className="footer container">
    {" "}
    <div className="footer__middle">
      {" "}
      <div
        className="footer__middle-border"
        style={{
          borderRadius: "2.6692rem",
          opacity: "0.8897",
          height: "103.935%",
          width: "101.822%"
        }}
      />{" "}
      <h2 data-anim="from-bottom" className="footer__middle-heading mini-text">
        {" "}
        <span className="split-wrap word">
          <span
            className="split-inner"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate3d(0px, 0px, 0px)"
            }}
          >
            Looking for a new talent?
          </span>
        </span>
      </h2>{" "}
      <span
        data-anim="from-bottom"
        className="footer__middle-email"
        data-pointer="Copy"
        data-umami-event="Copy email"
      >
        {" "}
        <span className="footer__middle-email-inner">
          <span className="split-wrap char">
            <span
              className="split-inner"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate3d(0px, 0px, 0px)"
              }}
            >
              hello@saeedjunior.com
            </span>
          </span>
        </span>{" "}
      </span>{" "}
      <div className="footer__middle-cta">
        {" "}
        <Link href='https://www.linkedin.com/in/' target="_blank" className='flex flex-row items-center space-x-2 group py-16'>
            <Circle />
            <div className='aboutme-text tracking-normal leading-tight text-lg sm:text-xl md:text-2xl tracking-wider transition ease-in-out delay-75 hover:glow home-link'>
            <span className="home-link-text text-white"> Linkedin</span>
            <span className="home-link-hover-text-logo"> Linkedin</span>
            </div>
      </Link>
      <Link href='/Saeed_CV.pdf' target="_blank" className='flex flex-row items-center space-x-2 group py-16'>
            <Circle />
            <div className='aboutme-text tracking-normal leading-tight text-lg sm:text-xl md:text-2xl tracking-wider transition ease-in-out delay-75 hover:glow home-link'>
            <span className="home-link-text text-white"> Download CV</span>
            <span className="home-link-hover-text-logo"> Download CV</span>
            </div>
      </Link>
      </div>{" "}
    </div>{" "}
    <div className="footer__bottom">
      {" "}
      <span className="footer__bottom-left mini-text">©2024 Saeed Jr.</span>{" "}
      <div className='mini-text text-center justify-center items-center'>
            <span className="split-wrap line">
              <span
                className="split-inner"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)"
                }}
              >
                <i className="available" />
              </span>
            </span> Available for a full-time position
        </div>
      <span className="footer__bottom-right mini-text">Made with ❤️ </span>{" "}
    </div>{" "}
  </div>{" "}
</footer>

  )
}

export default Footer