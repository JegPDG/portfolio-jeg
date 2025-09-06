import React from 'react'
import { assets, techStack } from '../assets/assets'

const Home = () => {
  return (
    <div className='w-full '>

      {/* Home landing page  */}
      <div className='w-full max-w-5xl m-auto pl-4 pr-4'>
        <div style={{height: "calc(100vh - 64px)"}} 
        className='flex  flex-col justify-center'>

          <p className='text-5xl '>hi!</p>
          <p className='text-7xl font-bold mt-2'>I'm Jeg Paduga</p>
          <p className='text-4xl mt-4'>an spiring fullstack developer</p>
          <p className='mt-4 max-w-xl'>I’m Jeg A. Paduga, a recent Computer Science graduate with a passion for full-stack web development. I build user-friendly applications using React.js, Django, and Django REST APIs.</p>

          <div className='mt-4'>
            <button className='border border-white pt-2 pb-2 pl-4 pr-4 cursor-pointer hover:bg-white/10'>See projects</button>
          </div>
        </div>
      </div>

      {/* Other eleemnst */}
      <div className='h-screen bg-white'>
        <div className='w-full max-w-5xl m-auto pl-4 pr-4'>
          <div className='grid grid-cols-2 gap-4'>

            {/* Left side  */}
            <div className='pt-16 w-full flex flex-col items-center'>
              <div className='w-[350px] aspect-square bg-dark-400'>

              </div>

              <div className='flex flex-col w-full max-w-[350px] m-auto mt-2'>
                <p className='text-black  font-bold text-2xl'>Jeg A. Paduga</p>
                <div>
                  
                  <p className='text-dark-400'>Lezo, Aklan</p>
                </div>

              </div>

            </div>

            {/* Right side */}
            <div className='pt-16'>

              {/* Education section */}
              <p className='text-6xl font-bold text-dark-400'>education</p>

              <div className='w-full flex bg-white-grey p-4 mt-4 gap-4 items-center'>
                <img className='size-12 rounded-[50%]' src={assets.gct_logo} alt="" />
                <div>
                  <p className='text-dark-400 font-bold'>Garcia College of Technology</p>
                  <p className='text-dark-400'>Bachelor of Science in Computer Science</p>
                  <p className='text-dark-400'>Graduated: July 2025</p>
                </div>
              </div>

               {/* Experience section */}
              <p className='text-6xl font-bold text-dark-400 mt-4'>experience</p>

              <div className='w-full flex bg-white-grey p-4 mt-4 gap-4 flex-col'>

                <div className='w-full flex gap-4 items-center'>
                  <img className='h-6' src={assets.apicto} alt="" />
                  <div>
                    <p className='text-dark-400 font-bold'>On-the-Job Trainee</p>
                    <p className='text-dark-400 font-bold '>Aklan Provincial ICT Office</p>
                    <p className='text-dark-400 italic'>January 2025-March 2025</p>
                  </div>
                </div>

                <ul className='list-disc pl-4 pr-4'>
                  <li className='text-dark-400 text-sm'> Assisted in backend development projects using Django </li>
                  <li className='text-dark-400 text-sm'> Helped maintain and troubleshoot company-wide computer systems </li>
                  <li className='text-dark-400 text-sm'> Gained hands-on experience with IT support and basic networking issues </li>

                </ul>
              </div>




            </div>

          </div>

        </div>
      </div>

      {/* Another Element */}
      <div className='h-screen'>
        <div className='w-full max-w-5xl m-auto pl-4 pr-4 pt-16'>

          {/* Tech stack  */}
          <div className='flex flex-col' >
            <p className='text-6xl font-bold'>tech stack</p>

            
            <div>
              <img className='size-12' src={techStack.python} alt="" />
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Home