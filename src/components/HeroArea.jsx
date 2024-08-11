import React from 'react';
import Banner from '../assets/banner.png'

const HeroArea = () => {
  return (
    <div className='recipedia-heroarea'>
      <div className="container mx-auto">
        <div className="heroarea-content grid grid-cols-2 gap-3">
          <div className='heroarea-left py-16'>
            <h1 className='text-7xl leading-tight'><span className='font-bold'>Fresh Healthy</span> Delicious Salads</h1>
            <p className='text-xl text-secondary pl-1 pt-2'>Let’s made fresh and healthy foods</p>
            <img className='pt-14' width={425} src={Banner} alt="Banner Image" />
          </div>
          <div className='heroarea-right'>2</div>
        </div>
      </div>
    </div>
  )
}

export default HeroArea