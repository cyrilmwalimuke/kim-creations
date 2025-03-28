import React from 'react'

export default function Testimonials2() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8a5a44]">
            What Our Customers Say
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from people who love our handcrafted yarn products
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-[#f9f4ef] p-6 rounded-lg">
          <p className="italic text-gray-600">
            "I absolutely love my yarn hat! It's so comfortable and keeps me warm during the winter. The quality is
            amazing!"
          </p>
          <p className="font-medium mt-4">- Sarah T.</p>
        </div>
        <div className="bg-[#f9f4ef] p-6 rounded-lg">
          <p className="italic text-gray-600">
            "The yarn bikini set I purchased is beautiful and unique. I received so many compliments at the beach
            this summer!"
          </p>
          <p className="font-medium mt-4">- Jessica M.</p>
        </div>
        <div className="bg-[#f9f4ef] p-6 rounded-lg">
          <p className="italic text-gray-600">
            "My yarn dress is not only comfortable but also elegant. Perfect for both casual and semi-formal
            occasions. Highly recommend!"
          </p>
          <p className="font-medium mt-4">- Emily R.</p>
        </div>
      </div>
    </div>
  </section>
  )
}
