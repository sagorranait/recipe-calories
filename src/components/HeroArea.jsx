import React from 'react';
import Banner from '../assets/banner.png'
import Salad1 from '../assets/salad-1.png'
import { AiOutlineHeart } from "react-icons/ai";

const HeroArea = () => {
  return (
    <div className='recipedia-heroarea'>
      <div className="container mx-auto">
        <div className="heroarea-content grid grid-cols-2 gap-3">
          <div className='heroarea-left py-12'>
            <h1 className='text-7xl leading-tight'><span className='font-bold'>Fresh Healthy</span> Delicious Salads</h1>
            <p className='text-xl text-secondary pl-1 pt-2'>Let’s made fresh and healthy foods</p>
            <img className='pt-14' width={458} src={Banner} alt="Banner Image" />
          </div>
          <div className='heroarea-right grid grid-cols-2'>
            <div className='right-primary px-10 pt-20 grid grid-cols-1 gap-16'>
              <div className='salad-card bg-aliceblue h-80 relative shadow-card rounded-3xl'>
                <div className='card-content relative -top-12'>
                  <img src={Salad1} alt="salad-01" className='w-64 mx-auto' />
                  <div className='px-10'>
                    <h2 className='text-2xl font-semibold'>Mix Salad</h2>
                    <p className='py-1'>Mix Vegetables</p>
                    <a href="#" className='underline'>Let’s Make</a>
                    <AiOutlineHeart className='text-2xl mr-auto cursor-pointer' />
                  </div>
                </div>
              </div>
              <div className='salad-card bg-aliceblue h-80 relative shadow-card rounded-3xl'>
                <div className='card-content relative -top-12'>
                  <img src={Salad1} alt="salad-01" className='w-64 mx-auto' />
                  <div className='px-10'>
                    <h2 className='text-2xl font-semibold'>Mix Salad</h2>
                    <p className='py-1'>Mix Vegetables</p>
                    <a href="#" className='underline'>Let’s Make</a>
                    <AiOutlineHeart className='text-2xl mr-auto cursor-pointer' />
                  </div>
                </div>
              </div>
            </div>
            <div className='right-secondary'>2</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroArea