import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'
 

const EducationSection = () => {    
    const [visibleItems, setVisibleItems] = useState({})
    const refs = useRef({
      right: null,
      education: null,
      experience: null,
    })

  // Helper function to create ref setters
    const setRef = (key) => (el) => {
      refs.current[key] = el
    }

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Find which key this element belongs to
            const key = Object.keys(refs.current).find(
              k => refs.current[k] === entry.target
            )
            
            if (key && entry.isIntersecting) {
              setVisibleItems(prev => ({ ...prev, [key]: true }))
            }
          })
        },
        { threshold: 0.1 }
      )

      // Observe all refs
      Object.values(refs.current).forEach(ref => {
        if (ref) observer.observe(ref)
      })

      return () => observer.disconnect()
    }, [])
  
  return (
    <>
      <div className='h-screen bg-white'>
        <div className='w-full max-w-5xl m-auto pl-4 pr-4'>
          <div className='grid grid-cols-2 gap-4'>
            {/* Left side  */}
            <div
              ref={setRef('right')}
              className={visibleItems.right ? 'slide-in-left': 'slide-in-left-hidden'}>
              <div className='pt-16 w-full flex flex-col items-center slide-in-left'>

                <div className='w-[350px] aspect-square bg-dark-400'>

                </div>

                <div className='flex flex-col w-full max-w-[350px] m-auto mt-2'>
                  <p className='text-black  font-bold text-2xl'>Jeg A. Paduga</p>
                  <div>
                    
                    <p className='text-dark-400'>Lezo, Aklan</p>
                  </div>

                </div>

              </div>
            </div>

            {/* Right side */}
            <div className='pt-16'>

              {/* Education section */}
              <div 
                ref={setRef('education')}
                className={visibleItems.education ? 'slide-in-right': 'slide-in-right-hidden'}>
                <p className='text-6xl font-bold text-dark-400'>education</p>

                <div className='w-full flex bg-white-grey p-4 mt-4 gap-4 items-center'>
                  <img className='size-12 rounded-[50%]' src={assets.gct_logo} alt="" />
                  <div>
                    <p className='text-dark-400 font-bold'>Garcia College of Technology</p>
                    <p className='text-dark-400'>Bachelor of Science in Computer Science</p>
                    <p className='text-dark-400'>Graduated: July 2025</p>
                  </div>
                </div>
              </div>
              

              {/* Experience section */}
              <div 
                ref={setRef('experience')}
                className={visibleItems.experience ? 'slide-in-right': 'slide-in-right-hidden'}>
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
      </div>


    </>
  )
}

export default EducationSection