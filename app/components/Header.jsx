import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </div>

      <h3 className='flex items-end gap-2 text-x1 md:text-2x1 mb-3 font-Ovo'>
        Hi! I'm Elyaquim Nattan <Image src={assets.hand_icon} alt=''
        className='w-6'/></h3>
      <h1 className='text-3xl  sm:text-6x1 lg:text-[50px] font-Ovo'>
        fullstack developer based in Brasil.
      </h1>
      <p className='max-w-2x1 mx-auto font-Ovo'>
          I am a fullstack developer from Pernambuco, BR with 1 year of experience in some companies.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact"
        className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
        >contact me <Image src={assets.right_arrow_white} alt='' className=' w-4'/></a>

        <a href="/sample-resume.pdf" download 
        className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
          my resume <Image src={assets.download_icon} alt='' className=' w-4'/></a>
      </div>
    </div>
  )
}

export default Header