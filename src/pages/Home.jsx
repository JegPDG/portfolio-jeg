import React from 'react'
import { assets, projectImage, techStack } from '../assets/assets'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import EducationSection from '../sections/EducationSection'
import TechStack from '../sections/TechStack'
import Projects from '../sections/Projects'
import Landing from '../sections/Landing'

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

  const scrollToProjects = () => {
  const element = document.getElementById('projects-section');
  element?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
  };


  return (
    <div className='w-full '>

      {/* Home landing page  */}
      <Landing scrollToProjects={scrollToProjects}></Landing>

      {/* Other eleemnst */}
      <EducationSection></EducationSection>

      {/* Another Element */}
      <div className='h-screen'>
        <div className='w-full max-w-5xl m-auto pl-4 pr-4 pt-16'>

          {/* Tech stack  */}
          <TechStack></TechStack>

          {/* Projects section  */}
          <Projects></Projects>

        </div>
      </div>

    </div>
  )
}

export default Home