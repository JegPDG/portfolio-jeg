import React, { useEffect, useRef, useState } from 'react'
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
          <p className='text-6xl font-bold'>tech stack</p>
        </div>

        <div>
          <ul className='flex p-4 gap-4'>
            {techstack.map((tech, index) =>
              <li
                className={`p-4 flex flex-col items-center hover:bg-white/10 
                  ${animatedItems.has(index) ? 'slide-in-right': 'slide-in-right-hidden'}
                  `}
                style={{transitionDelay: isVisible ? `${index * 100}ms` : '0ms'}}
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