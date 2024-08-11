import React from 'react'
import Logo from '../assets/logo.png'
import User from '../assets/user.png'

const Header = () => {
  return (
    <header className='recipedia-header px-2 py-10'>
      <div className='container mx-auto'>
        <div className='header-content flex items-center justify-between'>
          <div className='recipedia-logo flex items-center justify-center gap-3'>
            <img src={Logo} alt="recipedia-logo" className='w-14' />
            <p className='text-xl font-bold'>Recipedia</p>
          </div>
          <div className='recipedia-menu'>
            <ul className='flex items-center justify-center gap-12'>
              <li className='font-semibold cursor-pointer'>Home</li>
              <li className='font-semibold cursor-pointer'>Salads</li>
              <li className='font-semibold cursor-pointer'>About</li>
              <li className='font-semibold cursor-pointer'>Blogs</li>
              <li className='font-semibold cursor-pointer'>Contact</li>
            </ul>
          </div>
          <div className='recipedia-icons flex items-center justify-center gap-4'>
            <div className='user'>
              <img className='w-10 h-10 rounded-full p-[1px] cursor-pointer bg-primary' src={User} alt="user-avatar" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;