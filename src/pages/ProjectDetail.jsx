import React from 'react'
import { techStack } from '../assets/assets'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

const ProjectDetail = () => {
  return (
    <div className=''>
      <div className='w-full max-w-5xl m-auto p-4'>
        <div className='flex items-center gap-4'>
          <p className='text-4xl font-bold'>Project Name</p>
          <ArrowUpRightIcon className='size-6'></ArrowUpRightIcon>
        </div>
        <p>The project description, the overview of the whole project or the gist of it. Oh yeah</p>

        {/* the video and image section  */}
        <div className='w-full'>
          <div className='mt-8 w-full bg-dark-400 grid grid-cols-6 gap-2'>
              <div className='col-span-4 aspect-video w-full bg-amber-300'>

              </div>
              <div className='col-span-2 w-full '>
                <div className=' aspect-video flex gap-1 flex-col'>
                  <div className='aspect-video bg-amber-300'>

                  </div>
                  <div className='aspect-video bg-amber-300'>

                  </div>
                </div>

              </div>
          </div>
        </div>

        {/* the bottom section  */}
        <div className='w-full'>
          <div className='mt-8 w-full grid grid-cols-6 gap-2'>
            <div className='col-span-4  bg-dark-400 p-4'>

              <div className='mb-6'>
                {/* the heading  */}
                <h1 className='text-2xl font-bold'>Feature</h1>
                <div>
                  <p>Menu - showcases the shops various products such as coffees, pastries, cakes, pizza, etc. </p>
                  <p>Responsive design - Works seamlessly on mobile, tablet, and desktop.</p>
                  <p>Contacts - list of contacts and contact form for inquiries and reservations </p>
                </div>
              </div>

              <div className='mb-6'>
                {/* the heading  */}
                <h1 className='text-2xl font-bold'>Future Improvements</h1>
                <div>
                  <p>Menu - showcases the shops various products such as coffees, pastries, cakes, pizza, etc. </p>
                  <p>Responsive design - Works seamlessly on mobile, tablet, and desktop.</p>
                  <p>Contacts - list of contacts and contact form for inquiries and reservations </p>
                </div>
              </div>

              <div className='mb-6'>
                {/* the heading  */}
                <h1 className='text-2xl font-bold'>Challenges and Learning</h1>
                <div>
                  <p>Menu - showcases the shops various products such as coffees, pastries, cakes, pizza, etc. </p>
                  <p>Responsive design - Works seamlessly on mobile, tablet, and desktop.</p>
                  <p>Contacts - list of contacts and contact form for inquiries and reservations </p>
                </div>
              </div>
    

            </div>

            <div className='col-span-2 '>
              <div className='min-h-20 bg-dark-400 p-4 flex flex-col'>
                <p className='font-bold text-2xl'>Technologies used</p>
                <div className='mt-2 flex flex-wrap gap-2'>

                  {/* Techstack for the project  */}
                  <div className='bg-white/10 inline-flex pt-2 pb-2 pl-4 pr-4 gap-2 '>
                    <img className='size-6' src={techStack.react_logo} alt="" />
                    <p>React</p>
                  </div>

                  <div className='bg-white/10 inline-flex pt-2 pb-2 pl-4 pr-4 gap-2 '>
                    <img className='size-6' src={techStack.tailwind_logo} alt="" />
                    <p>Tailwind CSS</p>
                  </div>

                  <div className='bg-white/10 inline-flex pt-2 pb-2 pl-4 pr-4 gap-2 '>
                    <img className='size-6' src={techStack.django_logo} alt="" />
                    <p>Django</p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    
    </div>
  )
}

export default ProjectDetail