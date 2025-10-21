import React from 'react'
import { ArrowDownTrayIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { assets } from '../assets/assets'


const Landing = () => {

  const scrollToProjects = () => {
  const element = document.getElementById('projects-section');
  element?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
  };


  return (
    <>
    <div 
      id='home'
      className='gradient-bg'>
      <div className='w-full max-w-5xl m-auto pl-4 pr-4 relative overflow-hidden'>
        <div className='absolute bottom-0 right-0'>
          <img className='size-50 md:size-100' src={assets.memoji1} alt="" />
        </div>
        <div style={{height: "calc(100vh)"}} 
        className='flex flex-col justify-center max-w-[720px]'>

          <p className='text-5xl animate-[fadeInUp_0.6s_ease-out] '>hi!</p>
          <h1 className='text-5xl md:text-7xl font-bold mt-2 animate-[fadeInUp_0.8s_ease-out]'>I'm Jeg Paduga</h1>
          <p className='text-xl md:text-3xl mt-4 animate-[fadeInUp_1s_ease-out]'>Crafting modern web experiences with precision and creativity.</p>
          {/* <span className='steel-metallic font-bold'>fullstack applications.</span> */}
          <p className='text-sm md:text-lg mt-4 max-w-xl animate-[fadeInUp_1.2s_ease-out] italic'>“Passionate about clean code, responsive design, and scalable full-stack solutions.”</p>
          {/* <p className='mt-4 max-w-xl animate-[fadeInUp_1.2s_ease-out]'>I’m Jeg, a recent Computer Science graduate with a passion for full-stack web development. I build user-friendly applications using React.js, Django, and Django REST APIs.</p> */}

          <div className='mt-8 animate-[fadeInUp_1.4s_ease-out]'>
            <div className='flex gap-4 items-center'>
              <button 
                onClick={scrollToProjects}
                className='border border-white pt-2 pb-2 pl-4 pr-4 cursor-pointer flex items-center gap-2 hover:bg-white/10'
              
              >
                View my work 
                <ArrowRightIcon className='size-5'></ArrowRightIcon>
              </button>
              {/* <button className='flex gap-2'>
                <ArrowDownTrayIcon className='size-6 text-blue-400'   style={{ color: '#3b82f6' }}  ></ArrowDownTrayIcon>
                <p>Resume</p>
              </button> */}
            </div>

            {/* Links Github, Facebook, and Instagram  */}
            <div className='Links-container mt-4 flex gap-4 '>
              <a 
                href='https://github.com/JegPDG' 
                target='_blank' 
                className='inline-flex items-center gap-2 cursor-pointer '>
                  <img className='size-6 md:size-4' src={assets.github_mark_white} alt="" />
                  <p className='text-sm hidden md:block'>Github </p>
                  
              </a>

              <a 
                href='https://www.facebook.com/jeg.paduga' 
                target='_blank' 
                className='inline-flex items-center gap-2 cursor-pointer '>
                  <img className='size-6 md:size-4' src={assets.facebook_white} alt="" />
                  <p className='text-sm hidden md:block'>Facebook  </p>
              </a>

              <a 
                href='https://www.instagram.com/jegpdg?igsh=MXdneHQ1azNybWhibA==' 
                target='_blank' 
                className='inline-flex items-center gap-2 cursor-pointer '>
                  <img className='size-6 md:size-4' src={assets.instagram_white} alt="" />
                  <p className='text-sm hidden md:block'>Instagram  </p> 
              </a>
              
              <a 
                href='https://www.linkedin.com/in/paduga-jeg-a-49b629349/' 
                target='_blank' 
                className='inline-flex items-center gap-2 cursor-pointer '>
                  <img className='size-6 md:size-4' src={assets.linkedin} alt="" />
                  <p className='text-sm hidden md:block'>Linkedin </p> 
              </a>

            </div>
          </div>
        </div>
      </div>

    </div>

    </>
  )
}

export default Landing