'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  // Function to determine active link class
  const getLinkClass = (path) => {
    return pathname === path ? 'sm:text-xl md:text-2xl font-semibold navlinks activenavlink tracking-wider' : 'sm:text-xl md:text-2xl navlinks tracking-wider text-gray-400'
  }

  return (
    <nav className='flex justify-between w-full p-4 sm:px-12 sm:py-8 md:px-28 md:py-16 items-center h-16 text-white fixed top-0 left-0 z-10 shadow-sm'>
      {/* Brand or Logo with Glow Effect */}
      <Link href='/' className='text-lg sm:text-2xl md:text-3xl tracking-wider transition ease-in-out delay-75 hover:glow home-link'>
        <span class="home-link-text">Saeed Jr.</span>
        <span class="home-link-hover-text-logo">Saeed Jr.</span>
      </Link>

      {/* Navigation Links with 3D Rotate Effect */}
      <div className='flex'>
        <Link href='/' className={getLinkClass('/') + ' home-link'}>
          <span class="home-link-text">Home</span>
          <span class="home-link-hover-text">Home</span>
        </Link>
        <Link href='/work' className={getLinkClass('/work') + ' home-link'}>
          <span class="home-link-text">Work</span>
          <span class="home-link-hover-text">Work</span>
        </Link>
        <Link href='/about' className={getLinkClass('/about') + ' home-link'}>
          <span class="home-link-text">About</span>
          <span class="home-link-hover-text">About</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
