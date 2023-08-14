import React from 'react';
import Nav from './compoents/Nav';
import Features from './compoents/Features';
import Testimonials from './compoents/Testimonials';

const Home = () => {
  return (
    <div className='max-w-9xl'>
      <Nav/>
      <div className="flex flex-col md:flex-row py-20 md:py-28 items-center">
        <div className="flex-1 space-y-10 md:space-y-0 md:mr-10">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold">
            <span className="text-black relative">
              Quality-Safety-Security
              <span className="absolute w-full h-1/3 bg-red-400 bottom-1 left-0 z-[-1]"></span>
            </span>
            <br />
            <span className="text-red-400">always stay safe</span>
          </h1>
          <p className="text-gray-500">
            Quality-Safety-Security(QSS for short) is an online tool that, with the help of an API, scans links, phone numbers
            and email addresses to tell you if they're trust worthy or not
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row">
            <button
              className="rounded-full bg-red-400 text-white py-3 px-6 hover:bg-red-500"
            >
              Get started
            </button>
            <button
              className="rounded-full bg-red-400 text-white py-3 px-6 border border-gray-300 flex items-center justify-center">
              How It Works
            </button>
          </div>
        </div>

        <div className='flex-1 relative w-full shadow-xl'>
          <div className='absolute top-[-20] left-40 z-10'>
            <div className='relative h-72 sm:h-96 rounde-3xl shadow-2xl overflow-hidden'>
              <img src='./logo.png' alt='Logo' className='w-full h-full object-cover'/>
            </div>
          </div>
        </div>
      </div>
      <Features/>
      
      <div>
        <Testimonials/>
      </div>
    </div>
  )
}

export default Home;
