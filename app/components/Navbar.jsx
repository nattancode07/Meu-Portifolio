import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
const Navbar = ({isDarkMode, setDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full'></Image>
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dar:shadow-white/20" : ""}`}>

        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className='w-28 cursor-pointer mr-14' />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gasp-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>
          <li><a className='font-Ovo' href="#top">Inicio</a></li>
          <li><a className='font-Ovo' href="#about">Sobre mim</a></li>
          <li><a className='font-Ovo' href="#services">Serviços</a></li>
          <li><a className='font-Ovo' href="#work">Meu trabalho</a></li>
          <li><a className='font-Ovo' href="#contact">Me contate</a></li>
        </ul>

        <div className='flex items-center gap-4'>

          <button onClick={() => setDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6'></Image>
          </button>

          <a href="#contact" className='hidden sm:block lg:flex items-center gap-3 px-10 py-2.5
          border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>Contact 
          <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' alt='' /></a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6'></Image>
          </button>
        </div>

        {/*---------- mobile menu ----------*/}

        <ul ref={sideMenuRef} className='flex md:hidde flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-s cursor-pointer'></Image>
          </div>

          <li><a className='font-Ovo' onClick={closeMenu} href="#top">Inicio</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#about">Sobre mim</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#services">Meus Serviços</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#work">Meus projetos</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Me contate</a></li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar