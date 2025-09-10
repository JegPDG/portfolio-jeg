import React from 'react'
import { techStack } from '../assets/assets'

const TechStack = () => {
    const techstack = [
      {image: techStack.html_logo, name: "HTML"},
      {image: techStack.css_logo, name: "CSS"},
      {image: techStack.javascript, name: "JavaScript"},
      {image: techStack.react_logo, name: "React.js"},
      {image: techStack.python, name: "Python"},
      {image: techStack.django_logo, name: "Django"},
      {image: techStack.tailwind_logo, name: "Taiwind CSS"}
    ]
  


  return (
    <>
      <div className='flex flex-col' >
        <p className='text-6xl font-bold'>tech stack</p>
        
        <div>
          <ul className='flex p-4 gap-4'>
            {techstack.map((tech, index) =>
              <li
                className='p-4 flex flex-col items-center hover:bg-white/10 '
                key={index}>
                <img className='size-12' src={tech.image} alt="" />

                <p>{tech.name}</p>
              </li>
            )}
          </ul>
        </div>

      </div>
    </>
  )
}

export default TechStack