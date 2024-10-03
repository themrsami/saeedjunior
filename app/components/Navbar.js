'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  
  const getLinkClass = (path) => {
    return pathname === path ? 'text-2xl navlinks activenavlink' : 'text-2xl navlinks'
  }

  return (
    <nav className='flex justify-between w-full px-36 py-20 items-center h-16 text-white fixed shadow-sm' role='navigation'>
        <Link href='/' className='text-4xl text-[#E8495F] hover:text-[#E8495F] transition ease-in-out delay-550'>SAEED Jr.</Link>
        <div className='flex gap-4'>
            <Link href='/' className={getLinkClass('/')}>Home</Link>
            <Link href='/work' className={getLinkClass('/work')}>Work</Link>
            <Link href='/about' className={getLinkClass('/about')}>About</Link>
        </div>
    </nav>
  )
}

export default Navbar
