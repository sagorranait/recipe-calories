import React from 'react';
import Banner from '../assets/banner.png'

const HeroArea = () => {
  return (
    <div className='recipedia-heroarea'>
      <div className="container mx-auto">
        <div className='heroarea-left grid grid-cols-2 gap-3 py-12'>
          <div className='flex items-start justify-center flex-col gap-2'>
            <h1 className='text-7xl leading-tight'><span className='font-bold'>Fresh Healthy</span> Delicious Salads</h1>
            <p className='text-xl text-secondary pl-1'>Let’s made fresh and healthy foods</p>
            <div>
              <button className='py-3 px-5 bg-primary text-white mt-5'>Discover More</button>
              <button className='py-3 px-5 border border-primary text-primary mt-5 ml-5'>Contact Us</button>
            </div>
          </div>
          <img className='pt-14 w-[550px] mx-auto' src={Banner} alt="Banner Image" />
        </div>
      </div>
    </div>
  )
}

export default HeroArea