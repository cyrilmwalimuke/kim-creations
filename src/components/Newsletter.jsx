import React, { useState } from 'react'

export default function Newsletter() {
    const [email,setEmail] = useState('')

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const res = fetch("https://brasscraft-api.onrender.com/newsletter",{
            method:'POST',
            headers:{
              'Content-Type':'Application/json'
            },
            body:JSON.stringify({email:email})
          })

    }
   return (
    <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 max-w-xl text-center">
            <h2 className="text-2xl font-serif mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to receive updates on new collections, exclusive offers, and styling inspiration.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input type="email" id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your email address" className="rounded-none  focus:outline-none flex-grow bg-white py-2 px-4" />
              <button className="bg-black px-4 py-2 rounded-lg sm:rounded-none text-white hover:bg-gray-800 whitespace-nowrap">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>
  )
}
