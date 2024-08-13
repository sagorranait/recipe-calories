import React from 'react'
import Salad1 from '../assets/salad-1.png'
import { AiOutlineHeart } from "react-icons/ai";

const Salades = () => {
  return (
    <div className='heroarea-right grid grid-cols-2 py-40'>
        <div className='salads px-16 grid grid-cols-2 gap-10'>
            <div className='bg-aliceblue h-max shadow-card overflow-auto rounded-3xl'>
                <img src={Salad1} alt="salad-01" className='w-80 mx-auto' />
                <h2 className='text-2xl font-semibold px-8'>Mix Salad</h2>
                <p className='py-1 px-8'>Mix Vegetables</p>
                <div className='flex items-center justify-between px-8 pt-2 pb-5'>
                    <a href="#" className='underline'>Let’s Make Together</a>
                    <AiOutlineHeart className='text-2xl cursor-pointer' />
                </div>
            </div>
            <div className='bg-aliceblue h-max shadow-card overflow-auto rounded-3xl'>
                <img src={Salad1} alt="salad-01" className='w-80 mx-auto' />
                <h2 className='text-2xl font-semibold px-8'>Mix Salad</h2>
                <p className='py-1 px-8'>Mix Vegetables</p>
                <div className='flex items-center justify-between px-8 pt-2 pb-5'>
                    <a href="#" className='underline'>Let’s Make Together</a>
                    <AiOutlineHeart className='text-2xl cursor-pointer' />
                </div>
            </div>
            <div className='bg-aliceblue h-max shadow-card overflow-auto rounded-3xl'>
                <img src={Salad1} alt="salad-01" className='w-80 mx-auto' />
                <h2 className='text-2xl font-semibold px-8'>Mix Salad</h2>
                <p className='py-1 px-8'>Mix Vegetables</p>
                <div className='flex items-center justify-between px-8 pt-2 pb-5'>
                    <a href="#" className='underline'>Let’s Make Together</a>
                    <AiOutlineHeart className='text-2xl cursor-pointer' />
                </div>
            </div>
            <div className='bg-aliceblue h-max shadow-card overflow-auto rounded-3xl'>
                <img src={Salad1} alt="salad-01" className='w-80 mx-auto' />
                <h2 className='text-2xl font-semibold px-8'>Mix Salad</h2>
                <p className='py-1 px-8'>Mix Vegetables</p>
                <div className='flex items-center justify-between px-8 pt-2 pb-5'>
                    <a href="#" className='underline'>Let’s Make Together</a>
                    <AiOutlineHeart className='text-2xl cursor-pointer' />
                </div>
            </div>
            <div className='bg-aliceblue h-max shadow-card overflow-auto rounded-3xl'>
                <img src={Salad1} alt="salad-01" className='w-80 mx-auto' />
                <h2 className='text-2xl font-semibold px-8'>Mix Salad</h2>
                <p className='py-1 px-8'>Mix Vegetables</p>
                <div className='flex items-center justify-between px-8 pt-2 pb-5'>
                    <a href="#" className='underline'>Let’s Make Together</a>
                    <AiOutlineHeart className='text-2xl cursor-pointer' />
                </div>
            </div>
            <div className='bg-aliceblue h-max shadow-card overflow-auto rounded-3xl'>
                <img src={Salad1} alt="salad-01" className='w-80 mx-auto' />
                <h2 className='text-2xl font-semibold px-8'>Mix Salad</h2>
                <p className='py-1 px-8'>Mix Vegetables</p>
                <div className='flex items-center justify-between px-8 pt-2 pb-5'>
                    <a href="#" className='underline'>Let’s Make Together</a>
                    <AiOutlineHeart className='text-2xl cursor-pointer' />
                </div>
            </div>
        </div>
        <div className='making-salad'>2</div>
    </div>
  )
}

export default Salades