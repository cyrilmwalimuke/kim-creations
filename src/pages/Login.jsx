import { Facebook } from 'lucide-react'
import React, { use, useState } from 'react'
import { BsGoogle, BsGooglePlay } from 'react-icons/bs'
import { FaGoogle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signInFailure, signInStart, signInSuccess } from '../features/user/userSlice'

export default function Login() {
    const [formData, setFormData] = useState({});
//   const { loading, error } = useSelector((state) => state.user);
const [error,setError] = useState(null)
console.log(error)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   dispatch(signInStart());
    //   const res = await fetch('http://localhost:10000/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await res.json();
    //   console.log(data);
    //   if (data.success === false) {
    //     dispatch(signInFailure(data.message));
    //     return;
    //   }
    //   dispatch(signInSuccess(data));
    //   navigate('/');
    // } catch (error) {
    //   dispatch(signInFailure(error.message));
    // }
    try {
        const res = await fetch('https://brasscraft-api.onrender.com/login', {
            method: 'POST',
            headers: {
         'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
         const data = await res.json();
         console.log(data);
         if(data.success===false){
             
             return 
         }
         dispatch(signInSuccess(data));
         setError(null)
         navigate('/')

        
    } catch (error) {
        setError('user not found!')
        console.log(error)
    }

   

    
  };
  return (
    <div>
        <div className='flex justify-center w-full'>
            <div className='bg-slate-200 hidden sm:flex justify-center items-center w-[50%] h-screen '>
                <div className='flex-col items-center flex gap-1'>
                    <Link to='/' className='text-2xl font-serif tracking-wider'>BARSSCRAFT</Link>
                    <p className='font-bold text-lg'>Welcome back to BrassCraft</p>
                    <p className='text-center'>Log in to access your account, view your orders, and continue shopping with your saved items.

</p>
                    

                </div>
            

            </div>
            {/* second div */}

            <div className='flex justify-center items-center w-[50%] h-screen'>
                <div className='flex flex-col'>
                <Link to='/' className='h-16 text-tracking text-2xl sm:hidden flex items-center justify-center w-full'>
                    BRASSCRAFT

                  </Link>
                    <p className='font-bold text-center text-2xl'>Sign in to your account</p>
                    <p className='mb-5 text-gray-500 text-center tex-xs sm:text-lg'>Enter your details below to access your account</p>
                    <form onSubmit={handleSubmit}>
                        <p className='font-semibold '>Email</p>
                        <input onChange={handleChange} id='email' type="text" placeholder='name@example.com' className='my-2 focus:outline-none border-[1.3px] border-gray-500 p-2 w-full rounded-lg' />
                        <div className='flex justify-between font-semibold'>
                            <p>Password</p>
                            <p>Forgot password?</p>

                        </div>
                        <input id='password' type="text" placeholder= '*******' className='my-2 focus:outline-none border-[1.3px] p-2 border-gray-500 w-full rounded-lg' />
                        <div className='flex gap-2'>
                            <input type="checkbox" name="" id="" />
                            <p className='font-semibold'>Remember Me</p>
                        </div>
                        <button className='mt-4 bg-black text-center text-white flex items-center justify-center w-full p-2 rounded-lg cursor-pointer'>Sign in</button>
                        <p className='text-rose-400 mb-4'>{error}</p>
                        <div className='flex items-center justify-between text-gray-500'>
                            <div className='bg-gray-500 h-[1.2px] w-[28%]'></div>
                            <p className='text-sm'>OR CONTINUE WITH</p>
                            <div className='bg-gray-500 h-[1.2px] w-[28%]' ></div>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <div className='flex gap-2 items-center border-[1.3px] border-gray-500 py-2 px-5 rounded-md'>
                                <Facebook/>
                                <p>Facebook</p>

                            </div>

                            <div className='flex gap-2 items-center border-[1.3px] border-gray-500 py-2 rounded-md px-5'>
                                <FaGoogle/>
                                <p>Google</p>

                            </div>
                        </div>

                        <div className='flex justify-center mt-4 gap-1'>
                            <p className='text-gray-500'>Dont have an account?</p>
                            <Link to='/register'>Sign up</Link>
                        </div>
                    </form>

                </div>


            </div>

        </div>
      
    </div>
  )
}
