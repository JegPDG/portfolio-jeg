import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import { assets } from '../assets/assets'


const Landing = () => {

  return (
    <>
      <div className='w-full max-w-5xl m-auto pl-4 pr-4 '>
        <div style={{height: "calc(100vh - 64px)"}} 
        className='flex  flex-col justify-center'>

          <p className='text-5xl animate-[fadeInUp_0.6s_ease-out] '>hi!</p>
          <p className='text-7xl font-bold mt-2 animate-[fadeInUp_0.8s_ease-out]'>I'm Jeg Paduga</p>
          <p className='text-4xl mt-4 animate-[fadeInUp_1s_ease-out]'>an aspiring fullstack developer</p>
          {/* <p className='mt-4 max-w-xl animate-[fadeInUp_1.2s_ease-out]'>I’m Jeg, a recent Computer Science graduate with a passion for full-stack web development. I build user-friendly applications using React.js, Django, and Django REST APIs.</p> */}

          <div className='mt-8 animate-[fadeInUp_1.4s_ease-out]'>
            <div className='flex gap-4 items-center'>
              <button className='border border-white pt-2 pb-2 pl-4 pr-4 cursor-pointer hover:bg-white/10'>See projects</button>
              <button className='flex gap-2'>
                <ArrowDownTrayIcon className='size-6 text-blue-400'   style={{ color: '#3b82f6' }}  ></ArrowDownTrayIcon>
                <p>Resume</p>
              </button>
            </div>

            {/* Links Github, Facebook, and Instagram  */}
            <div className='Links-container mt-4 flex gap-4 '>
              <a 
                href='https://github.com/JegPDG' 
                target='_blank' 
                className='inline-flex items-center gap-2 cursor-pointer '>
                  <img className='size-4' src={assets.github_mark_white} alt="" />
                  <p className='text-sm'>Github </p>
                  
              </a>

              <a 
                href='https://github.com/JegPDG' 
                target='_blank' 
                className='inline-flex items-center gap-2 cursor-pointer '>
                  <img className='size-4' src={assets.facebook_white} alt="" />
                  <p className='text-sm'>Facebook  </p>
              </a>

              <a 
                href='https://github.com/JegPDG' 
                target='_blank' 
                className='inline-flex items-center gap-2 cursor-pointer '>
                  <img className='size-4' src={assets.instagram_white} alt="" />
                  <p className='text-sm'>Instagram  </p> 
              </a>


            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Landing