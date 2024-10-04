'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  // Function to determine active link class
  const getLinkClass = (path) => {
    return pathname === path ? 'text-base sm:text-xl md:text-2xl font-semibold navlinks activenavlink tracking-wider' : 'text-base sm:text-xl md:text-2xl navlinks tracking-wider'
  }

  return (
    <nav className='flex justify-between w-full p-4 sm:px-12 sm:py-8 md:px-24 md:py-12 items-center h-16 bg-transparent text-white fixed top-0 left-0 z-50 shadow-sm'>
      {/* Brand or Logo with Glow Effect */}
      <Link href='/' className='text-lg sm:text-2xl md:text-4xl text-[#E8495F] hover:text-[#E8495F] font-bold tracking-wider transition ease-in-out delay-75 hover:glow'>
        SAEED Jr.
      </Link>

      {/* Navigation Links with 3D Rotate Effect */}
      <div className='flex gap-4 sm:gap-6 md:gap-8'>
        <Link href='/' className={getLinkClass('/') + ' rotate3d'}>Home</Link>
        <Link href='/work' className={getLinkClass('/work') + ' rotate3d'}>Work</Link>
        <Link href='/about' className={getLinkClass('/about') + ' rotate3d'}>About</Link>
      </div>
    </nav>
  )
}

export default Navbar
