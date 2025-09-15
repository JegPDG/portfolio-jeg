import React from 'react'
import { projectImage } from '../assets/assets'
import ProjectDetail from '../pages/ProjectDetail'

const Project1 = () => {
  const projDetails = {
    projTitle: "Crampal: An AI Powered Learning Assistant",
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
      {tech: "Tailwind CSS"},
      {tech: "Django"},
      {tech: "React.js"},

    ]

  }


  return (
    <>
      <ProjectDetail
        project={projDetails}
      ></ProjectDetail>
    
    </>
  )
}

export default Project1