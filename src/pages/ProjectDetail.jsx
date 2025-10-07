import React, { useState } from 'react'
import { projectImage, techStack } from '../assets/assets'
import { ArrowTrendingUpIcon, ArrowUpRightIcon, FlagIcon, QueueListIcon } from '@heroicons/react/24/solid'
import { useParams } from 'react-router-dom'

const ProjectDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null)

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % projectItems[id].images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? projectItems[id].images.length - 1 : prev - 1
    );
  };

  const closeModal = () => setCurrentIndex(null);

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
          projDescription: "This is a coffee shop website that showcases its products, services and information.",
          video: projectImage.crampal3,
          images: [
            {image: projectImage.crampal},
            {image: projectImage.crampal1},
            {image: projectImage.crampal2},
          ],
          features: [
            {feature: "It has an admin page, where in the moderator can dynamically change their menu and add posts"},
            {feature: "It has a review function where customers can leave a review and also reply on reviews."},
            {feature: "To have credebility on the reviews, the website uses Google OAuth and uses their gmail to leave their reviews and also verify that a real person is reviewing the item"},
            {feature: "It showcases a contact page where it displays the contact modes such as social media, phone number, and email (built in email sender)"},
            {feature: "It features a Google map to show the exact location of the shop."},
            {feature: "It has a responsive design and compatible to mobile, medium devices, and desktop sizes"},


          ],
          improvements: [
            {improve: "Add more features"},
            {improve: "Improve Location page, add more features for the map"},

          ],
          challenges: [
            {challenge: "Setting up Google OAth and JWT"},
          ],
          technologies: [
            {tech: "React.js", icon: techStack.react_logo},
            {tech: "Vite", icon: techStack.vite_logo},
            {tech: "Tailwind CSS", icon: techStack.tailwind_logo},
            {tech: "Django", icon: techStack.django_logo},
            {tech: "Django-REST Framework", icon: techStack.django_rest_white},

            {tech: "JWT", icon: techStack.django_rest_white},
            {tech: "Google OAuth", icon: techStack.django_rest_white},
            {tech: "Supabase", icon: techStack.django_rest_white},
            {tech: "Render", icon: techStack.django_rest_white},
            {tech: "Vercel", icon: techStack.django_rest_white},
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
                    className='w-full h-full'>
                    <img className='w-full h-full object-cover' src={projectItems[id].images[0].image} alt="" />
                  </div>

                  {/* seconf image  */}
                  <div 
                    onClick={() => setCurrentIndex(0)}
                    className='w-full h-full relative cursor-pointer group'>
                    <div className="absolute inset-0 bg-dark-400/70 opacity-50 group-hover:opacity-100 transition-opacity duration-300 flex  items-center justify-center">
                      <p className='font-bold text-3xl'>+ {projectItems[id].images.length}</p>
                    </div>

                    <img className='w-full h-full object-cover' src={projectItems[id].images[1].image} alt="" />

                  </div>



                  {/* {projectItems[id].images.slice(0,2).map((image, index) =>
                    <li className='aspect-video bg-amber-300'
                      key={index}
                      >
                        <img className='w-full h-full object-cover' src={image.image} alt="" />
                    </li>
                  )} */}
                </ul>

                  {currentIndex !== null && (
                  <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    onClick={closeModal}
                  >
                    <div className="relative flex items-center justify-center w-full h-full">
                      {/* Previous Button */}
                      <button
                        onClick={handlePrev}
                        className="absolute left-12 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full text-2xl"
                      >
                        &#10094;
                      </button>

                      {/* Image */}
                      <img
                        src={projectItems[id].images[currentIndex].image}
                        alt="Full view"
                        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                      />

                      {/* Next Button */}
                      <button
                        onClick={handleNext}
                        className="absolute right-12 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full text-2xl"
                      >
                        &#10095;
                      </button>

                      {/* Close Button */}
                      <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300"
                      >
                        &times;
                      </button>

                      {/* Image Counter */}
                      <div className="absolute bottom-6 text-white text-sm bg-black/50 px-4 py-1 rounded-full">
                        {currentIndex + 1} / {projectItems[id].images.length}
                      </div>
                    </div>
                  </div>
                )}

                {/* Fullscreen modal
                {selectedImage && (
                  <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                  >
                    <img
                      src={selectedImage}
                      alt="Full view"
                      className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                    />
                    

                    <button
                      className="absolute top-6 right-6 text-white text-3xl font-bold cursor-pointer"
                      onClick={() => setSelectedImage(null)}
                    >
                      &times;
                    </button>
                  </div>
                )} */}

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