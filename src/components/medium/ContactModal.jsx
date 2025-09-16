import React, { useRef } from 'react'
import { assets } from '../../assets/assets'
import { PhoneIcon, XMarkIcon } from '@heroicons/react/24/solid'
import emailjs from '@emailjs/browser'

const ContactModal = ({isOpenContact, onClose}) => {
  if (!isOpenContact) return null;
  const form = useRef()


  const sendEmail = (e) => {
  e.preventDefault();
  
  console.log('processing')
  try{
  emailjs.sendForm(
          import.meta.env.VITE_YOUR_SERVICE_ID, 
          import.meta.env.VITE_YOUR_TEMPLATE_ID, 
          form.current, 
          import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('SUCCESS', result)
        },
        (error) => {
          console.log('FAILED', error.text)
        }
      )
  } catch(error){
    console.log(error)
  }
  
}


  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 '>
        <div className='w-[600px] min-h-[600px] bg-amber-50 p-8 flex flex-col items-center relative slide-in-right'>

          {/* Closing button  */}
          <div className='bg-dark-400 size-8 rounded-full absolute top-2 right-2 cursor-pointer'
            onClick={onClose}
            >
            <XMarkIcon className='size-8'></XMarkIcon>
          </div>  
          <p className='text-3xl text-dark-500 font-bold'>Get in Touch</p>

          {/* Socials Links  */}
          <div className='flex gap-2 mt-2 '>
            <a 
              href="https://www.facebook.com/jeg.paduga"
              target='_blank'
              >
              <div className='flex items-center gap-2 p-2 border cursor-pointer hover:bg-dark-400/20'>
                <img className='size-8 ' src={assets.facebook_black} alt="" />
                <p className='text-dark-500 font-bold'>Facebook</p>
              </div>
            </a>
            
            <a 
              href="https://www.instagram.com/jegpdg/?igsh=MXdneHQ1azNybWhibA%3D%3D#"
              target='_blank'
              >
              <div className='flex items-center gap-2 p-2 border cursor-pointer hover:bg-dark-400/20'>
                <img className='size-8 ' src={assets.instagram_black} alt="" />
                <p className='text-dark-500 font-bold'>Instagram</p>
              </div>
            </a>

            <div className='flex items-center gap-2 p-2 border cursor-pointer'>
              <PhoneIcon className='size-8 ' fill='#121212'></PhoneIcon>
              <p className='text-dark-500 font-bold'>0962 593 2210</p>
            </div>

          </div>

          {/* Email links  */}
          <p className='text-dark-500 mt-4'>or email me at <span className='text-dark-500 font-bold'>padugajeg@gmail.com </span></p>

          <form
            ref={form} 
            onSubmit={sendEmail}
            className='w-full mt-2 flex flex-col gap-2'
            action="">
            <label className='text-dark-500 ' htmlFor="">
              <p className='text-dark-500 font-bold'>Name</p>
              <input 
                className='border p-2'
                type="text" 
                placeholder='Name' 
                name='name' />
            </label>

            <label className='text-dark-500 ' htmlFor="">
              <p className='text-dark-500 font-bold'>Email Address</p>
              <input 
                className='border p-2'
                type="text" 
                placeholder='Email Address' 
                name='email' />
            </label>

            <label className='text-dark-500 ' htmlFor="">
              <p className='text-dark-500 font-bold'>Subject</p>
              <input 
                className='border p-2 w-full'
                type="text" 
                placeholder='Subject' 
                name='subject' />
            </label>

            <label className='text-dark-500 ' htmlFor="">
              <p className='text-dark-500 font-bold'>Message</p>
              <textarea  
                className='w-full border p-2 max-h-[200px]'
                name="message" 
                id=""></textarea>
            </label>
            
            <div className='flex justify-center'>
              <input 
                className='border w-[84px] p-2 font-bold text-dark-500 cursor-pointer hover:bg-dark-400/20' 
                type="submit" />
            </div>

          </form>



        </div>
      </div>
    </>
  )
}

export default ContactModal