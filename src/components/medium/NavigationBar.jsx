import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import ContactModal from './ContactModal';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const [isOpenContact, setOpenContact] = useState(false);
  const navigate = useNavigate();


  const placeholder = [
    {label: "About", func: () => navigate('/') },
    // {label: "Home", },
    {label: "Projects", func: () => navigate('/', { state: { scrollTo: 'projects' } })},

    {label: "Contact", func: () => setOpenContact(true)}

  ]


  return (
    <div className='w-full '>
      <div className='w-full h-16 border-b-white/20 border-b bg-dark-500/60'>
        <div className='w-full max-w-5xl h-full m-auto  pr-4 pl-4 box-border pt-2 pb-2 flex items-center justify-between'>
          {/* Right side logo and name */}
          <div 
            onClick={() => navigate('/')}
            className='flex gap-4 items-center cursor-pointer'>
            <img className='size-12' src={assets.goi_logo} alt="" />
            <p className='text-xl font-medium'>JEG</p>
          </div>

          {/* Left side  */}
          <div>
            <ul className='flex'>
              {placeholder.map((element, index) =>
                <li 
                  className='pl-4 pr-4 pt-2 pb-2 rounded-xl hover:bg-white/10 cursor-pointer'
                  key={index}
                  onClick={element.func}
                  >
                  {element.label}
                </li>
              )}
            </ul>
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