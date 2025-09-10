import React from 'react'
import { assets, projectImage, techStack } from '../assets/assets'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import EducationSection from '../sections/EducationSection'
import TechStack from '../sections/TechStack'

const Home = () => {
  const techstack = [
    {image: techStack.html_logo, name: "HTML"},
    {image: techStack.css_logo, name: "CSS"},
    {image: techStack.javascript, name: "JavaScript"},
    {image: techStack.react_logo, name: "React.js"},
    {image: techStack.python, name: "Python"},
    {image: techStack.django_logo, name: "Django"},
    {image: techStack.tailwind_logo, name: "Taiwind CSS"}
  ]

  const projects = [
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
    {
      images: [
        {photo: projectImage.study_tracker1},
        {photo: projectImage.study_tracker2},
        {photo: projectImage.study_tracker3},
      ],
      title: "StudBud: A Personalized Study Companion App",
      techstacks: "React.js, Django, Django REST Framework, PostgreSQL",
      description: "A fullstack desktop web application that lets the user create subjects and notes for note taking."
    },
    {
      images: [
        {photo: projectImage.crampal},
        {photo: projectImage.crampal1},
        {photo: projectImage.crampal2},
      ],
      title: "StudBud: A Personalized Study Companion App",
      techstacks: "React.js, Django, Django REST Framework, PostgreSQL",
      description: "A fullstack desktop web application that lets the user create subjects and notes for note taking."
    },


  ]


  return (
    <div className='w-full '>

      {/* Home landing page  */}
      <div className='w-full max-w-5xl m-auto pl-4 pr-4 '>
        <div style={{height: "calc(100vh - 64px)"}} 
        className='flex  flex-col justify-center'>

          <p className='text-5xl '>hi!</p>
          <p className='text-7xl font-bold mt-2'>I'm Jeg Paduga</p>
          <p className='text-4xl mt-4'>an spiring fullstack developer</p>
          <p className='mt-4 max-w-xl'>I’m Jeg, a recent Computer Science graduate with a passion for full-stack web development. I build user-friendly applications using React.js, Django, and Django REST APIs.</p>

          <div className='mt-4'>
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

      {/* Other eleemnst */}
      <EducationSection></EducationSection>

      {/* Another Element */}
      <div className='h-screen'>
        <div className='w-full max-w-5xl m-auto pl-4 pr-4 pt-16'>

          {/* Tech stack  */}
          <TechStack></TechStack>

          {/* Projects section  */}

          <div>
            <p className='text-6xl font-bold'>projects</p>
            
            {/* project container  */}
            <ul className='mt-8 flex flex-col gap-2'>
                {projects.map((project, index) =>
                  <li 
                    className='flex flex-col max-w-3xl m-auto gap-4 bg-dark-400 border border-white hover hover:bg-lighter-gray transition-colors duration-300'
                    key={index}>
                      {/* image section  */}

                    <ul className='grid grid-cols-2 grid-rows-2 bg-white shrink-0'>
                      {project.images?.map((image, index) =>
                        <li 
                          className='first:row-span-2'
                          key={index}>
                           <img className='w-full h-full object-cover' src={image.photo} alt="" /> 
                        </li>
                      )}
                    </ul>

                    {/* description section  */}
                    <div className='p-4'>
                      <p className='text-2xl font-bold'>{project.title}</p>
                      <p className='italic'>{project.techstacks}</p>
                      <p className='mt-2'>{project.description}</p>

                    </div>

                  </li>
                )}
            </ul>
            
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home