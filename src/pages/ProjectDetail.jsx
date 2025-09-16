import React from 'react'
import { projectImage, techStack } from '../assets/assets'
import { ArrowTrendingUpIcon, ArrowUpRightIcon, FlagIcon, QueueListIcon } from '@heroicons/react/24/solid'
import { useParams } from 'react-router-dom'

const ProjectDetail = () => {
  const { id } = useParams();

  const projectItems = [
    {
        projTitle: "Crampal: An AI Powered Learning Assistant",
        projLink: "",
        projDescription: "A frontend web project that uses AI api to generate study materials to summaries, flashcards, and quizzes from uploaded PDF files.",
        video: projectImage.crampal3,
        images: [
          {image: projectImage.crampal},
          {image: projectImage.crampal1},
          {image: projectImage.crampal2},
        ],
        features: [
          {feature: "Uses AI API's to generate flashcards, quizzes, and summary"},
          {feature: "Accepts PDF files and extract information out of it"},
        ],
        improvements: [
          {improve: "Let users have an account to save their study materials"},
          {improve: "Improve the UI for better experience"},
          {improve: "Be able to accept other file formats"},
    
        ],
        challenges: [
          {challenge: "Extracting of text from pdf"},
          {challenge: "Integrating AI in the project"},
        ],
        technologies: [
          {tech: "Tailwind CSS", icon: techStack.tailwind_logo},
          {tech: "Django", icon: techStack.django_logo},
          {tech: "React.js", icon: techStack.react_logo},
    
        ]
    
      },
      {
          projTitle: "Crampal 2: An AI Powered Learning Assistant",
          projDescription: "A frontend web project that uses AI api to generate study materials to summaries, flashcards, and quizzes from uploaded PDF files.",
          video: projectImage.crampal3,
          images: [
            {image: projectImage.crampal},
            {image: projectImage.crampal1},
            {image: projectImage.crampal2},
          ],
          features: [
            {feature: "Uses AI API's to generate flashcards, quizzes, and summary"},
            {feature: "Accepts PDF files and extract information out of it"},
          ],
          improvements: [
            {improve: "Let users have an account to save their study materials"},
            {improve: "Improve the UI for better experience"},
            {improve: "Be able to accept other file formats"},
      
          ],
          challenges: [
            {challenge: "Extracting of text from pdf"},
            {challenge: "Integrating AI in the project"},
          ],
          technologies: [
            {tech: "Tailwind CSS", icon: techStack.tailwind_logo},
            {tech: "Django", icon: techStack.django_logo},
            {tech: "React.js", icon: techStack.react_logo},
      
          ]
      
        }
  ]

  return (
    <div className=''>
      <div className='w-full max-w-5xl m-auto p-4 fade-in-up'>
        <div className='flex items-center gap-4'>
          <p className='text-4xl font-bold'>{projectItems[id].projTitle}</p>
          <ArrowUpRightIcon className='size-6'></ArrowUpRightIcon>
        </div>
        <p>{projectItems[id].projDescription}</p>

        {/* the video and image section  */}
        <div className='w-full'>
          <div className='mt-8 w-full bg-dark-400 grid grid-cols-6 gap-2'>

              {/* Video container  */}
              <div className='col-span-4 aspect-video w-full bg-amber-300'>
                <img className='w-full h-full object-cover' src={projectItems[id].video} alt="" />
              </div>

              {/* image containers  */}
              


              <div className='col-span-2 w-full '>
                <ul className='aspect-video flex gap-1 flex-col'>
                  {projectItems[id].images.slice(0,2).map((image, index) =>
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
                  <ul className='list-disc'>
                    {projectItems[id].features.map((feat, index) =>
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
                  <ul className='list-disc'>
                    {projectItems[id].improvements?.map((improvement, index) =>
                      <li key={index}>
                        <p>{improvement.improve}</p>
                      </li>
                    )}
                    
                  </ul>

                </div>
              </div>

              {/* Challenges and Learnings  */}
              <div className='mb-6'>
                {/* the heading  */}
                <h1 className='text-2xl font-bold flex items-center gap-2'>
                  <span>
                    <FlagIcon className='size-6' fill='#2FE922'></FlagIcon>
                  </span>

                   Challenges and Learning</h1>
                <div className='pl-6'>
                  <ul className='list-disc'>
                    {projectItems[id].challenges?.map((challenge, index) =>
                      <li key={index}>
                        <p>{challenge.challenge}</p>
                      </li>
                    )}
                    
                  </ul>

                </div>
              </div>


            </div>

            <div className='col-span-2 '>
              <div className='min-h-20 bg-dark-400 p-4 flex flex-col'>
                <p className='font-bold text-2xl'>Technologies used</p>

                  {/* Techstack for the project  */}
                  <ul className='mt-2 flex flex-wrap gap-2'>
                    {projectItems[id].technologies?.map((tech, index) =>
                      <li 
                        className='bg-white/10 inline-flex pt-2 pb-2 pl-4 pr-4 gap-2 '
                        key={index}>
                        <img className='size-6' src={tech.icon} alt="" />
                        <p>{tech.tech}</p>
                        
                      </li>
                    )}
                  </ul>

              </div>

            </div>
          </div>
        </div>

      </div>
    
    </div>
  )
}

export default ProjectDetail