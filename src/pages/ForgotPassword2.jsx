import { ArrowLeftIcon, Mail } from 'lucide-react'
import {Link, useParams} from 'react-router-dom'
import React, { useState } from 'react'

export default function ForgotPassword2() {

  const [newPassword,setNewPassword] = useState('')
  const [error,setError] = useState(null)
  const params =useParams()
  console.log(params.token)

  
 
  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(newPassword.length<1){
      setError('please enter a password')
      return
    }
    const res  = await fetch(`https://brasscraft-api.onrender.com/forgot-password-2/${params.token}`,{
      method:'POST',
      headers:{
      'Content-Type':'Application/json'
      },
      body:JSON.stringify({newPassword:newPassword})
    }) 
    const data = await res.json()
    console.log(data)
 
      setError(data)
  
  

  }
  return (
    <div className='flex justify-center items-center h-screen px-3'>
    <div className=''>
      <form onSubmit={handleSubmit} className='shadow-lg p-5 flex flex-col gap-7 sm:w-120 '>
        <Link to='/login' className='flex gap-1 items-center'>
          <ArrowLeftIcon/>
          <p>Back to Login</p>
        </Link>

        <div>
          <p className='text-2xl font-bold'>Reset your password</p>
          <p className='text-gray-500'>Enter your new password below to reset your account password</p>
        </div>

        <div>
          
          <div className='flex gap-2 border-[1.2px] border-gray-500 px-5 py-2  rounded-md items-center'>
            
            <input type="text" placeholder='Your new password' className='focus:outline-none' onChange={(e)=>setNewPassword(e.target.value)} value = {newPassword}/>
          </div>
          
        </div>
        {
          error==='please enter a password' &&(<div className='bg-pink-100 py-2 px-5 border[3px] border-black rounded-md'>
            <p className='text-rose-400'>{error}</p>
            
          </div>)
        
        }
        {
          error==='check out your email to proceed' &&(<div className='bg-green-100 py-2 px-5 border[3px] border-black rounded-md'>
            <p className='text-green-400'>{error}</p>
            
          </div>)
        
        }
       
        <button className='bg-black text-white py-2 w-full rounded-md'>
          Reset password
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
