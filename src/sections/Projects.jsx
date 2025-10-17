import React, { useEffect, useRef, useState } from 'react'
import { projectImage } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { bnhImages, studyTracker } from '../assets/projectImages/projectimages';


const Projects = () => {
  const navigate = useNavigate();
  // Projects list 
  const projects = [
    {
      images: [
        {photo: bnhImages.bnh_11},
        {photo: bnhImages.bnh_1},
        {photo: bnhImages.bnh_2},
      ],
      title: "Bean and Hops: A Coffe Shop Website",
      techstacks: "React.js, Django, Django REST Framework, Tailwind CSS",
      description: "A fullstack desktop web application that lets the user create subjects and notes for note taking."
    },
    {
      images: [
        {photo: studyTracker.studytracker_1},
        {photo: studyTracker.studytracker_2},
        {photo: studyTracker.studytracker_3},

      ],
      title: "Bean and Hops: A Coffe Shop Website",
      techstacks: "React.js, Django, Django REST Framework, Tailwind CSS",
      description: "A fullstack desktop web application that lets the user create subjects and notes for note taking."
    },
    {
      images: [
        {photo: projectImage.crampal},
        {photo: projectImage.crampal1},
        {photo: projectImage.crampal2},
      ],
      title: "CramPal: AI Powered Learning Assistant",
      techstacks: "Javascript (React.js), HTML, CSS",
      description: "A frontend web project that uses AI api to generate study materials to summaries, flashcards, and quizzes from uploaded PDF files."
    },

  ]

  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState(new Set())
  const containerRef = useRef();
  //For animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Start the staggered animation
            projects.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedItems(prev => new Set(prev).add(index))
              }, index * 150) // 150ms delay between each item
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])
    

  return (
    <>
      <div>
        <div
          id="projects-section"
          ref={containerRef}
          className={`${isVisible ? 'slide-in-right' : 'slide-in-right-hidden'} mt-4`}
          >
          <p className='text-4xl font-bold'>projects</p>
        </div>
        
        {/* project container  */}
        <ul className='mt-8 grid grid-cols-2 gap-2'>
            {projects.map((project, index) =>
              <li 
                className={`flex flex-col w-full m-auto gap-4 bg-dark-400 p-2 hover hover:bg-lighter-gray 
                  cursor-pointer
                  transition-colors duration-300  
                ${animatedItems.has(index) ? 'slide-up': 'slide-up-hidden'}  
                  `}
                style={{transitionDelay: isVisible ? `${index * 100}ms` : '0ms'}}
                key={index}
                onClick={() => {
                  navigate(`/project/${index}`);
                  window.scrollTo(0, 0);
                }}
                >

                {/* image section  */}
                <ul className='grid grid-cols-2 grid-rows-2 gap-1'>
                  {project.images?.map((image, index) =>
                    <li 
                      className='first:row-span-2 '
                      key={index}>
                        <img className='w-full h-full object-cover aspect-video' src={image.photo} alt="" /> 
                    </li>
                  )}
                </ul>

                {/* description section  */}
                <div className='p-4'>
                  <p className='text-lg font-bold'>{project.title}</p>
                  <p className='italic text-sm'>{project.techstacks}</p>
                  <p className='mt-2 text-xs'>{project.description}</p>

                </div>

              </li>
            )}
        </ul>
        
      </div>

    </>
  )
}

export default Projects