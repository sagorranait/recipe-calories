import React from 'react'
import Logo from '../assets/logo.png'
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <header className='recipe-header py-14'>
      <div className='container mx-auto'>
        <div className='header-content flex items-center justify-between'>
          <div className='recipe-logo flex items-center justify-center gap-3'>
            <img src={Logo} alt="recipe-logo" className='w-16' />
            <p className='text-xl font-bold'>Recipe Calories</p>
          </div>
          <div className='recipe-menu'>
            <ul className='flex items-center justify-center gap-12 cursor-pointer'>
              <li>Home</li>
              <li>Recipes</li>
              <li>About</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className='recipe-icons flex items-center justify-center gap-4'>
            <form className='search relative'>
              <BiSearch className='absolute top-3 left-4 text-eerieblack-75 text-2xl' />
              <input className='pl-12 pr-6 py-3 bg-eerieblack-5 placeholder-eerieblack-75 text-eerieblack-75 rounded-full focus:outline-none' type="text" name='search' placeholder='Search' />
            </form>
            <div className='user'>
              <img className='w-11 h-11 rounded-full p-[2px] cursor-pointer bg-primary' src="https://avatars.githubusercontent.com/u/60606778?v=4&size=64" alt="user-avatar" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;