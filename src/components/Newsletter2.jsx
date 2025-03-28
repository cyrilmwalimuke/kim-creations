import React from 'react'

export default function Newsletter2() {
  return (
    <section className="w-full py-12 md:py-24 bg-[#8a5a44]">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Join Our Newsletter
          </h2>
          <p className="max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Subscribe to get updates on new products and special offers
          </p>
        </div>
        <div className="w-full max-w-md space-y-2">
          <form className="flex space-x-2">
            <input
              className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
              placeholder="Enter your email"
              type="email"
            />
            <button className="bg-white text-[#8a5a44] px-2 rounded-md hover:bg-white/90">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </section>
   
  )
}
