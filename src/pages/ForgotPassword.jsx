import { ArrowBigLeftIcon, ArrowLeftIcon, Mail } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  const [email,setEmail] = useState('')
  const [error,setError] = useState(null)

  
 
  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(email.length<1){
      setError('please enter email address')
      return
    }
    const res  = await fetch('https://brasscraft-api.onrender.com/forgot-password-email',{
      method:'POST',
      headers:{
      'Content-Type':'Application/json'
      },
      body:JSON.stringify({email:email})
    }) 
    const data = await res.json()
    console.log(data)
 
      setError(data)
  
  

  }
  return (
   
    <div className='flex justify-center items-center h-screen '>
      <div className=''>
        <form onSubmit={handleSubmit} className='shadow-lg p-5 flex flex-col gap-7 sm:w-120 '>
          <Link to='/login' className='flex gap-1 items-center'>
            <ArrowLeftIcon/>
            <p>Back to Login</p>
          </Link>

          <div>
            <p className='text-2xl font-bold'>Reset your password</p>
            <p className='text-gray-500'>Enter your email address and we'll send you instructions to reset your password.</p>
          </div>

          <div>
            <p className='font-semibold mb-2'>Email address</p>
            <div className='flex gap-2 border-[1.2px] border-gray-500 px-5 py-2  rounded-md items-center'>
              <Mail/>
              <input type="email" placeholder='You@example.com' className='focus:outline-none' onChange={(e)=>setEmail(e.target.value)} value = {email}/>
            </div>
            
          </div>
          {
            error==='no user found' &&(<div className='bg-pink-100 py-2 px-5 border[3px] border-black rounded-md'>
              <p className='text-rose-400'>{error}</p>
              
            </div>)
          
          }
          {
            error==='check out your email to proceed' &&(<div className='bg-green-100 py-2 px-5 border[3px] border-black rounded-md'>
              <p className='text-green-400'>{error}</p>
              
            </div>)
          
          }
         
          <button className='bg-black text-white py-2 w-full rounded-md'>
            Send reset instructions
          </button>
         
          <hr />
          <div className='flex gap-1 justify-center'>
            <p className='text-gray-500'>Remember your password?</p>
            <Link to='/login'>Sign in</Link>
          </div>
        </form>

      </div>
    </div>


  )
}
