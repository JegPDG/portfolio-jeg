import React from 'react'

const ProjectDetail = () => {
  return (
    <div className=''>
      <div className='w-full max-w-5xl m-auto p-4'>
        <p className='text-4xl font-bold'>Project Name</p>
        <p>The project description, the overview of the whole project or the gist of it. Oh yeah</p>

        <div className='mt-8 h-4 w-full bg-dark-400 grid grid-cols-6 gap-2'>
            <div className='col-span-4 aspect-video w-full bg-amber-300'>

            </div>
            <div className='col-span-2 w-full bg-white'>
              <div className='bg-white aspect-video'>

              </div>

            </div>
        </div>

      </div>
    
    </div>
  )
}

export default ProjectDetail