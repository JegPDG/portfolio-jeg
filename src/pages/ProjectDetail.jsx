import React from 'react'
import { techStack } from '../assets/assets'
import { ArrowTrendingUpIcon, ArrowUpRightIcon, FlagIcon, QueueListIcon } from '@heroicons/react/24/solid'

const ProjectDetail = ({project}) => {

  console.log(project)

  return (
    <div className=''>
      <div className='w-full max-w-5xl m-auto p-4'>
        <div className='flex items-center gap-4'>
          <p className='text-4xl font-bold'>{project.projTitle}</p>
          <ArrowUpRightIcon className='size-6'></ArrowUpRightIcon>
        </div>
        <p>{project.projDescription}</p>

        {/* the video and image section  */}
        <div className='w-full'>
          <div className='mt-8 w-full bg-dark-400 grid grid-cols-6 gap-2'>

              {/* Video container  */}
              <div className='col-span-4 aspect-video w-full bg-amber-300'>
                <img className='w-full h-full object-cover' src={project.video} alt="" />
              </div>

              {/* image containers  */}
              


              <div className='col-span-2 w-full '>
                <ul className='aspect-video flex gap-1 flex-col'>
                  {project.images.slice(0,2).map((image, index) =>
                    <li className='aspect-video bg-amber-300'
                      key={index}
                      >
                        <img className='w-full h-full object-cover' src={image.image} alt="" />
                    </li>
                  )}
                </ul>
                {/* 
                <div className=' aspect-video flex gap-1 flex-col'>
                  <div className='aspect-video bg-amber-300'>

                  </div>
                  <div className='aspect-video bg-amber-300'>

                  </div>
                </div> */}

              </div>
          </div>
        </div>

        {/* the bottom section  */}
        <div className='w-full'>
          <div className='mt-8 w-full grid grid-cols-6 gap-2'>
            <div className='col-span-4  bg-dark-400 p-4'>
              
              {/* Feature  */}
              <div className='mb-6'>
                {/* the heading  */}
                <h1 className='text-2xl font-bold flex items-center gap-2'>
                  <span>
                    <QueueListIcon className='size-6' fill='#E9C822'></QueueListIcon>
                  </span>

                   Feature</h1>
                <div className='pl-6'>
                  <ul>
                    {project.features.map((feat, index) =>
                      <li key={index}>
                        <p>{feat.feature}</p>
                      </li>
                    )}
                    
                  </ul>

                </div>
              </div>

              {/* Future Improvements  */}
              <div className='mb-6'>
                {/* the heading  */}
                <h1 className='text-2xl font-bold flex items-center gap-2'>
                  <span>
                    <ArrowTrendingUpIcon className='size-6' fill='#223CE9'></ArrowTrendingUpIcon>
                  </span>

                   Future Improvements</h1>
                <div className='pl-6'>
                  <ul>
                    {project.improvements.map((improvement, index) =>
                      <li key={index}>
                        <p>{improvement.improve}</p>
                      </li>
                    )}
                    
                  </ul>

                </div>
              </div>

              {/* VHallenges and Learnings  */}
              <div className='mb-6'>
                {/* the heading  */}
                <h1 className='text-2xl font-bold flex items-center gap-2'>
                  <span>
                    <FlagIcon className='size-6' fill='#2FE922'></FlagIcon>
                  </span>

                   Challenges and Learning</h1>
                <div className='pl-6'>
                  <ul>
                    {project.improvements.map((improvement, index) =>
                      <li key={index}>
                        <p>{improvement.improve}</p>
                      </li>
                    )}
                    
                  </ul>

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