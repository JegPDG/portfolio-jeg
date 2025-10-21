import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'
import { AcademicCapIcon, ChevronDownIcon, IdentificationIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/solid'
 

const EducationSection = () => {    
    const [educOpen, setEducOpen] = useState(false);
    const [expopen, setExpOpen] = useState(false)
    const [visibleItems, setVisibleItems] = useState({})
    const refs = useRef({
      right: null,
      education: null,
      experience: null,
      about: null,
    })

  //Handling openning of educ section
  const handleEduc = () =>{
    setEducOpen(prev => !prev)
  }

  //Handling openning of exp section 
  const handleExp = () => {
    setExpOpen(prev => !prev)
  }

  //Animation
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
  // End of Scroll Animation logic
  return (
    <>
      <div 
        id='about'
        className='min-h-screen pb-8 '>
        <div className='w-full max-w-5xl m-auto pl-4 pr-4 relative'>
          <div className='md:grid md:grid-cols-3 gap-6 '>
            {/* Left side  */}
            <div
              ref={setRef('right')}
              className={`${visibleItems.right ? 'slide-in-left': 'slide-in-left-hidden'} col-span-1 `}>
              <div className='pt-16 w-full flex gap-4 md:flex-col md:items-center slide-in-left '>

                {/* Profile picture  */}
                <div className='w-full   bg-dark-400 border'>
                  <img className='w-full h-full object-cover ' src={assets.jeg_pfp1} alt="" />
                </div>

                <div className='flex flex-col w-full max-w-[350px] m-auto mt-2'>
                  <p className='  font-bold text-lg md:text-2xl'>Jeg A. Paduga</p>
                  <div className='inline-flex items-center'>
                    <MapPinIcon className='size-4 md:size-6  ' fill='#4B4B4B'></MapPinIcon>
                    <p className='text-sm'>Lezo, Aklan</p>
                  </div>

                  <div>Hobies</div>

                </div>

              </div>


            </div>

            {/* Right side */}
            <div className='pt-4 md:pt-16 col-span-2'>

              {/* Education section */}
              {/* About section  */}
              <div>
                <div 
                  ref={setRef('about')}
                  className={visibleItems.right ? 'slide-in-right': 'slide-in-right-hidden'}>
                  <div className='flex items-center gap-2 '>
                    {/* <IdentificationIcon className='size-12' fill='#4B4B4B'></IdentificationIcon> */}
                    <p className='text-4xl font-bold  '> about</p>
                  </div>

                  <div className='w-full flex   p-4 mt-2 gap-4 flex-col border bg-dark-500 border-white/40 text-sm box-shadow-anim-2' >
                    <p className=''>I graduated with a <span className=' font-bold'>Bachelor’s degree in Computer Science</span>  from  <span className=' font-bold'>Garcia College of Technology </span>and I'm a <span className=' font-bold'>full-stack developer </span> passionate about creating useful websites. While I’m still continuously learning and improving, I am committed to growing my skills and reaching that goal.</p>  

                    <p className=''> On the frontend, I have a solid foundation in <span className=' font-bold'>HTML, CSS, and JavaScript </span>, and I’ve worked with modern frameworks like <span className=' font-bold'>React.js and Tailwind CSS</span>. As I advanced, I also explored the <span className=' font-bold'>backend </span>, learning <span className=' font-bold'> </span> and building <span className=' font-bold'>RESTful APIs with Django REST Framework</span>.</p>

                    <p className=''>My strength lies in frontend development, though I still consider myself at the beginner-to-intermediate stage. I enjoy tackling challenges, building projects, and sharpening my craft one step at a time.</p>
                  </div>
                </div>

              </div>

              {/* Experience section */}
              <div 
                ref={setRef('experience')}
                className={visibleItems.experience ? 'slide-in-right': 'slide-in-right-hidden'}>
                <div className='flex items-center mt-4'>
                  {/* <StarIcon className='size-12' fill='#4B4B4B'></StarIcon> */}
                  <p className='text-4xl font-bold '>experience</p>
                </div>

                <div className='w-full flex  mt-4 gap-4 flex-col relative border bg-dark-500  box-shadow-anim-2 border-white/40 '>

                  <div className=' p-4'> 
                    <div>
                      <div className='w-full flex gap-4 items-center'>
                        <img className='h-6' src={assets.apicto} alt="" />
                        <div>
                          <p className=' font-bold'>On-the-Job Trainee</p>
                          <p className=' font-bold '>Aklan Provincial ICT Office</p>
                          <p className=' italic'>January 2025-March 2025</p>
                        </div>
                      </div>

                      <ul className='list-disc pl-4 pr-4 mt-2 space-y-2'>
                        <li className=' text-sm'> Designed and developed a Django-based backend system to practice database modeling and REST API creation. </li>
                        <li className=' text-sm'> Assisted in server setup and configuration, including Ubuntu installation, Docker environment setup, and Git version control. </li>
                        <li className=' text-sm'> Supported day-to-day IT operations by diagnosing and resolving software and hardware issues on office computers. </li>

                      </ul>
                    </div>

                    {/* Hidden part 
                    <div
                      className={`
                          overflow-hidden transition-all duration-500 ease-in-out
                          ${expopen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                        `}
                    >
                      <div className='space-y-0'>

                        <div className='JUST A GLOB'>
                          <div className='flex flex-col items-center'>
                            <div className='rounded-[100%] size-3 bg-dark-400/20'></div>
                            <div className='h-8 w-1 bg-dark-400/20'></div>
                            <div className='rounded-[100%] size-3 bg-dark-400/20'></div>
                          </div>
                        </div>

                        <div className='flex justify-center p-4'>
                          <p className='text-dark-400 font-bold'>No other Experience</p>
                        </div>

                      </div>
                    </div> */}

                  </div>

                  {/* <div className='absolute bottom-0 h-8 w-full flex justify-center bg-linear-to-t from-dark-400/10 to-dark-400/0 '>
                    <div 
                      onClick={handleExp}
                      className='flex cursor-pointer'>
                      <ChevronDownIcon className={`size-6 transition-transform duration-300 ${expopen && 'rotate-180'}`} fill=''></ChevronDownIcon>
                      <p className='text-dark-400 font-bold pl-2'>{expopen ? 'See Less' : 'See More'}</p>
                    </div>
                  </div> */}
                </div>

                </div>
              
              {/* Education section  */}
              <div 
                ref={setRef('education')}
                className={`${visibleItems.education ? 'slide-in-right': 'slide-in-right-hidden'} mt-8 `}>
                <div className='flex gap-2 items-center' >
                  {/* <AcademicCapIcon className='size-12' fill='#4B4B4B'></AcademicCapIcon> */}
                  <p className=' text-4xl font-bold'>education</p>
                </div>

                <div className='w-full flex flex-col  relative mt-4 border bg-dark-500  box-shadow-anim-2 border-white/40'>

                  <div className='mb-12 p-2'>
                    <div className='flex gap-4 p-4 '>
                      <img className='size-12 rounded-[50%]' src={assets.gct_logo} alt="" />
                      <div className='space-y-1'>
                        <p className='font-bold text-md md:text-lg'>Garcia College of Technology</p>
                        <p className='text-[12px] md:text-lg'>Bachelor of Science in Computer Science</p>
                        <p className='text-[12px] md:text-sm italic'>Graduated: July 2025</p>
                      </div>
                    </div>

                    {/* Hidden parts  */}
                    <div
                      className={`
                        overflow-hidden transition-all duration-500 ease-in-out
                        ${educOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                      `}
                    >
                      <div className='space-y-0'>

                        <div className='JUST A GLOB'>
                          <div className='flex flex-col items-center'>
                            <div className='rounded-[100%] size-3 bg-white'></div>
                            <div className='h-8 w-1 bg-white/20'></div>
                            <div className='rounded-[100%] size-3 bg-white'></div>
                          </div>
                        </div>
                        
                        <div className={`flex gap-4 p-4  
                            transform transition-all duration-300 ease-out
                            ${educOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                          `}
                          style={{
                            transitionDelay: educOpen ? '100ms' : '0ms'
                          }}
                          >
                          <img className='size-12 rounded-[50%]' src={assets.rshs_logo} alt="" />
                          <div className='space-y-1'>
                            <p className=' font-bold text-md  md:text-lg'>Regional Science High School for Region VI</p>
                            <div className='flex justify-between'>
                              <p className='text-[12px] md:text-lg'>Junior High School</p>
                              <p className='text-[12px] md:text-lg'>2015-2019</p>
                            </div>
                            <div className='flex justify-between'>
                              <p className='text-[12px] md:text-lg'>Senior High School</p>
                              <p className='text-[12px] md:text-lg'>2019-2020</p>
                            </div>
                              <p className='text-[12px] italic md:text-sm'>Science Technology Engineering and Math (STEM)</p>
                          </div>
                        </div>

                        <div className='JUST A GLOB'>
                          <div className='flex flex-col items-center'>
                            <div className='rounded-[100%] size-3 bg-white'></div>
                            <div className='h-8 w-1 bg-white/20'></div>
                            <div className='rounded-[100%] size-3 bg-white'></div>
                          </div>
                        </div>

                        <div className={`flex gap-4 p-4
                            ${educOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                          `}
                          style={{
                            transitionDelay: educOpen ? '200ms' : '0ms'
                          }}
                          >
                          <img className='size-12 rounded-[50%]' src={assets.lis_logo} alt="" />
                          <div>
                            <p className=' font-bold text-md md:text-lg'>Lezo Integrated School</p>
                            <p className='text-[12px] md:text-lg'>Elementary</p>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>

                  <div className='absolute bottom-0 h-8 w-full flex justify-center bg-linear-to-t from-white/10 to-white/0 '>
                    <div 
                      onClick={handleEduc}
                      className='flex cursor-pointer'>
                      <ChevronDownIcon className={`size-6 transition-transform duration-300 ${educOpen && 'rotate-180'}`} fill='white'></ChevronDownIcon>
                      <p className=' font-bold pl-2'>{educOpen ? 'See Less' : 'See More'}</p>
                    </div>
                  </div>
                </div>


              </div>
              


            </div>

          </div>


          {/* Memoji  */}
          <div className='absolute hidden  md:bottom-[-32px] md:block'>
            <img className='size-60' src={assets.memoji3} alt="" />
          </div>

        </div>

      </div>


    </>
  )
}

export default EducationSection