import React, { useEffect, useRef, useState } from 'react'
import { techStack } from '../assets/assets'

const TechStack = () => {
    const techstack = [
      {image: techStack.html_logo, name: "HTML"},
      {image: techStack.css_logo, name: "CSS"},
      {image: techStack.javascript, name: "JavaScript"},
      {image: techStack.react_logo, name: "React.js"},
      {image: techStack.vite_logo, name: "Vite"},
      {image: techStack.tailwind_logo, name: "Taiwind CSS"},
      {image: techStack.python, name: "Python"},
      {image: techStack.django_logo, name: "Django"},
      {image: techStack.django_rest_white, name: "Django REST Framework"},
      {image: techStack.github_mark_white, name: "Github"},

    ]

    const [isVisible, setIsVisible] = useState(false);
    const [animatedItems, setAnimatedItems] = useState(new Set())
    const containerRef = useRef() 
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true)
              // Start the staggered animation
              techstack.forEach((_, index) => {
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
      <div className='flex flex-col' >
        <div 
          ref={containerRef}
          className={isVisible ? 'slide-in-right' : 'slide-in-right-hidden'}>
          <p className='text-4xl font-bold'>tech stack / skills</p>
        </div>

        <div>
          <ul className='grid grid-cols-2 mt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {techstack.map((tech, index) =>
              <li
                className={`p-4 flex flex-col w-full h-24 items-center border bg-dark-500 border-white/10 box-shadow-anim-2
                  ${animatedItems.has(index) ? 'slide-in-right': 'slide-in-right-hidden'}
                  `}
                style={{transitionDelay: isVisible ? `${index * 100}ms` : '0ms'}}
                key={index}>
                <img className='size-8' src={tech.image} alt="" />

                <p className='text-xs mt-2 text-center'>{tech.name}</p>
              </li>
            )}
          </ul>
        </div>

      </div>
    </>
  )
}

export default TechStack