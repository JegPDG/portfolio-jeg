import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import ContactModal from './ContactModal';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';

const NavigationBar = () => {
  const [isOpenContact, setOpenContact] = useState(false);
  const [openBar, setOpenBar] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenBar = () => {
    if(openBar){
      setOpenBar(false)
    } else {
      setOpenBar(true)
    }
  }

  const placeholder = [
    {label: "Home", func: () => { navigate('/', {state: {scrollTo: 'home'}})} },
    {label: "About", func: () => { navigate('/', {state: {scrollTo: 'about'}})}  },
    {label: "Projects", func: () => navigate('/', { state: { scrollTo: 'projects-section' } })},
    {label: "Contact", func: () => setOpenContact(true)}

  ]


  return (
    <div className='w-full max-w-[800px] m-auto '>
      <div className='w-full h-16 border-white/20 border rounded-4xl bg-dark-500/60 box-shadow-anim'>
        <div className='w-full max-w-5xl h-full m-auto  pr-4 pl-4 box-border pt-2 pb-2 flex items-center justify-between'>
          {/* Right side logo and name */}
          <div 
            onClick={() => navigate('/', {state: {scrollTo: 'home'}} )}
            className='flex gap-4 items-center cursor-pointer'>
            <img className='size-12' src={assets.goi_logo} alt="" />
            <p className='text-xl font-medium'>JEG</p>
          </div>

          {/* Left side  */}
          <div className='relative'>

            <div 
              onClick={handleOpenBar}
              className='md:hidden'>
              <Bars3Icon className='size-8 '></Bars3Icon>
            </div>

            {openBar &&
              <div className='bg-dark-400/70 border border-white/20 absolute right-2 top-14 p-4 rounded-md'>
                <ul className='  flex flex-col '>
                  {placeholder.map((element, index) =>
                    <li 
                      className='pl-4 pr-4 pt-2 pb-2 cursor-pointer underline-anim'
                      key={index}
                      onClick={element.func}
                      >
                      {element.label}
                    </li>
                  )}
                </ul>
              </div>
            }

            <div className='hidden md:block'>
              <ul className='  flex '>
                {placeholder.map((element, index) =>
                  <li 
                    className='pl-4 pr-4 pt-2 pb-2 cursor-pointer underline-anim'
                    key={index}
                    onClick={element.func}
                    >
                    {element.label}
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Modal  */}
          <ContactModal
            isOpenContact={isOpenContact}
            onClose={() => setOpenContact(false)}
          ></ContactModal>


        </div>
      </div>
    </div>
  )
}

export default NavigationBar