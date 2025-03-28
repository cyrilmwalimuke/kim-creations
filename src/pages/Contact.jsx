import { LocateIcon, Mail } from 'lucide-react'
import React from 'react'
import { CiLocationOn, CiTimer } from 'react-icons/ci'
import { MdOutlinePhone } from 'react-icons/md'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div cl>
      <img src="/contact.jpg" alt="" className='w-full h-[300px]'/>
      <div className='flex py-9 px-7 flex-col sm:flex-row gap-5'>
        <div className='sm:w-[50%]'>
        <p className='font-semibold text-3xl'>Get In Touch</p>
        <p className='my-6 text-gray-500'>We'd love to hear from you. Whether you have a question about our pieces, custom designs, or need assistance with an order, our team is here to help.</p>
        <form >
            <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold'>Name</p>
                <input type="text" placeholder='Your name' className='border-[1.3px] border-gray-500 px-3 py-2 rounded-md ' />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold'>Email</p>
                <input type="text" placeholder='Your email' className='border-[1.3px] border-gray-500 px-3 py-2 rounded-md ' />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold'>Phone (Optional)</p>
                <input type="text" placeholder='Your phone number' className='border-[1.3px] border-gray-500 px-3 py-2 rounded-md ' />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold'>Subject</p>
                <input type="text" placeholder='Subject of your message' className='border-[1.3px] border-gray-500 px-3 py-2 rounded-md' />
            </div>

            </div>

            <div className='mt-4'>
                <p className='font-semibold'>Message</p>
                <textarea rows='5' cols={30} name="" id="" placeholder='How can we help you?' className='focus:ouline-none border-gray-500 border-[1.3px] p-3'>

                </textarea>
            </div>
            <button className='bg-black text-white py-2 px-7 rounded-md mt-4'>
                Send message

            </button>
            
          

        </form>
        </div>

        {/* right div */}
        <div className='flex items-center justify-center sm:w-[50%]'>
            <div className='flex flex-col gap-7 items-center'>
                <div className='pl-7 pr-7 sm:pr-64 py-7 bg-gray-100 rounded-lg '>
                    <p className='font-semibold text-2xl'>Visit Our Store</p>
                    {/* collectons div */}
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-2 items-center'>
                        <CiLocationOn />
                        <div>
                            <p className='font-semibold'>Location</p>
                            <p>Syokimau,Nairobi</p>
                            
                        </div>

                            
                        </div>
                        <div className='flex gap-2 items-center'>
                        <MdOutlinePhone />
                        <div>
                            <p className='font-semibold'>Phone</p>
                            <p>+254707267531</p>
                            
                        </div>
                        
                            
                        </div>
                        <div className='flex gap-2 items-center'>
                        <Mail />
                        <div>
                            <p className='font-semibold'>Email</p>
                            <p>lauraomondi23@gmail.com</p>
                            
                        </div>
                        
                            
                        </div>
                        <div className='flex gap-2 items-center'>
                        <CiTimer/>
                        <div>
                            <p className='font-semibold'>Hours</p>
                            <p>Monday - Sunday: 10am - 7pm</p>
                            <p></p>
                        </div>
                        
                            
                        </div>
                       

                    </div>

                </div>
                <div className='w-full h-[300px] bg-gray-300 rounded-lg'>

                </div>


            </div>

        </div>
      


      </div>
      <Footer variant = 'bg-slate-100'/>
    </div>
  )
}
