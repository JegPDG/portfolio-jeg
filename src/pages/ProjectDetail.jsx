import React, { useState } from 'react'
import { projectImage, techStack } from '../assets/assets'
import { ArrowTrendingUpIcon, ArrowUpRightIcon, FlagIcon, QueueListIcon } from '@heroicons/react/24/solid'
import { useParams } from 'react-router-dom'
import ProjectImagesModal from '../components/medium/ProjectImagesModal'
import { useModal } from '../context/ModalContext'
import { bnhImages } from '../assets/projectImages/projectimages'

const ProjectDetail = () => {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(null)
  const {openModal} = useModal();
  

  const projectItems = [
    {
        projTitle: "Crampal: An AI Powered Learning Assistant",
        projLink: "",
        projDescription: "A frontend web project that uses AI api to generate study materials to summaries, flashcards, and quizzes from uploaded PDF files. It is small school project that intigrates AI",
        video: projectImage.crampal3,
        images: [
          {image: projectImage.crampal},
          {image: projectImage.crampal1},
          {image: projectImage.crampal2},
        ],
        features: [
          {feature: "Utilizes AI APIs to automatically generate flashcards, quizzes, and summaries"},
          {feature: "Supports PDF uploads and intelligently extracts text and key information"},
        ],
        improvements: [
          {improve: "Enable user accounts for saving and organizing study materials"},
          {improve: "Enhance the UI/UX for a smoother and more modern experience"},
          {improve: "Add support for additional file types beyond PDF"},
    
        ],
        challenges: [
          {challenge: "Implemented PDF text extraction and preprocessing"},
          {challenge: "Gained hands-on experience in integrating AI into web applications"},
        ],
        technologies: [
          {tech: "CSS", icon: techStack.css_logo},
          // {tech: "HTML", icon: techStack.django_logo},
          {tech: "React.js", icon: techStack.react_logo},
          {tech: "AI/ML API", icon: techStack.ai_ml_logo},
          {tech: "Vite", icon: techStack.vite_logo},


        ]
    
      },
      {
          projTitle: "Bean and Hops: A Coffe Shop Website",
          projlink: "https://bean-and-hops.vercel.app",
          projDescription: "This is a coffee shop website that showcases its products, services and information.",
          video: bnhImages.bnh_11,
          images: [
            {image: bnhImages.bnh_1},
            {image: bnhImages.bnh_2},
            {image: bnhImages.bnh_3},
            {image: bnhImages.bnh_4},
            {image: bnhImages.bnh_5},
            {image: bnhImages.bnh_6},
            {image: bnhImages.bnh_7},
            {image: bnhImages.bnh_8},
            {image: bnhImages.bnh_9},
          ],
          features: [
            {feature: "Includes an admin dashboard where moderators can dynamically update menu items, add new posts, and manage customer reviews."},
            {feature: "Features a customer review system allowing users to leave feedback and reply to other reviews for better community engagement."},
            {feature: "Implements Google OAuth authentication, ensuring that only verified Google users can leave reviews — maintaining authenticity and credibility."},
            {feature: "Provides a  Contact Page that lists multiple communication channels including social media links, phone number, and an integrated email sender."},
            {feature: "Integrates Google Maps API to display the café’s exact location for easy navigation."},
            {feature: "Built with a fully responsive design, optimized for mobile, tablet, and desktop devices to ensure a seamless user experience."},
            {feature: "Offers a visually appealing menu showcase with categories for beverages, pastries, and signature dishes."},


          ],
          improvements: [
            {improve: "Enhance the Location Page with route suggestions and nearby landmarks using advanced Google Maps features."},
            {improve: "Add an online ordering and reservation system for customers to place orders or book tables directly through the website."},
            {improve: "Implement user accounts for saving favorite menu items and tracking reviews."},
            {improve: "Refine UI animations and transitions for smoother navigation and a more polished look."},

          ],
          challenges: [
            {challenge: "Configuring and integrating Google OAuth with Django for secure login and authentication."},
            {challenge: "Implementing a dynamic admin panel that allows real-time content updates without page reloads."},
            {challenge: "Ensuring responsive design consistency across multiple screen sizes and devices."},



          ],
          technologies: [
            {tech: "React.js", icon: techStack.react_logo},
            {tech: "Vite", icon: techStack.vite_logo},
            {tech: "Tailwind CSS", icon: techStack.tailwind_logo},
            {tech: "Django", icon: techStack.django_logo},
            {tech: "Django-REST Framework", icon: techStack.django_rest_white},

            {tech: "JWT", icon: techStack.jwt_logo},
            {tech: "Google OAuth", icon: techStack.OAuth_logo},
            {tech: "Supabase", icon: techStack.supabase},
            {tech: "Render", icon: techStack.render_logo},
            {tech: "Vercel", icon: techStack.vercel_logo},
          ]
      
        }
  ]

  return (
    <div className='relative'>
      <div className='w-full max-w-5xl m-auto p-4 fade-in-up'>
        <a href={projectItems[id].projlink} target='_blank'>
          <div className='flex items-center gap-4 cursor-pointer'>
            <p className='text-4xl font-bold'>{projectItems[id].projTitle}</p>
            <ArrowUpRightIcon className='size-6'></ArrowUpRightIcon>
          </div>
        </a>
        <p>{projectItems[id].projDescription}</p>

        {/* the video and image section  */}
        <div className='w-full'>
          <div className='mt-8 w-full bg-dark-400 grid grid-cols-6 gap-2'>

              {/* Video container  */}
              <div 
                // onClick={() => setSelectedImage(projectItems[id].video)}
                className='col-span-4 aspect-video w-full bg-amber-300'>
                <img className='w-full h-full object-cover' src={projectItems[id].video} alt="" />
              </div>

              {/* image containers  */}

              <div 
                // onClick={() => setSelectedImage(projectItems[id].images[0].image)}
                className='col-span-2 w-full '>
                <ul className='aspect-video flex gap-1 flex-col'>

                  {/* first image  */}
                  <div 
                    // onClick={() => setSelectedImage(projectItems[id].images[0].image)}
                    className='w-full h-full overflow-hidden'>
                    <img className='w-full h-full object-cover' src={projectItems[id].images[0].image} alt="" />
                  </div>

                  {/* seconf image  */}
                  <div 
                    onClick={() => openModal(projectItems[id].images, 1)}
                    className='w-full h-full relative cursor-pointer group overflow-hidden'>
                    <div className="absolute inset-0 bg-dark-400/70 opacity-50 group-hover:opacity-100 transition-opacity duration-300 flex  items-center justify-center">
                      <p className='font-bold text-3xl'>+ {projectItems[id].images.length - 2}</p>
                    </div>

                    <img className='w-full h-full object-cover' src={projectItems[id].images[1].image} alt="" />

                  </div>

                </ul>

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
                      <li 
                        className='mt-2'
                        key={index}>
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
                      <li 
                        className='mt-2'
                        key={index}>
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
                      <li 
                        className='mt-2'
                        key={index}>
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