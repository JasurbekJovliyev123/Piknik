import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
const Navbar = () => {
  return (
    <header className='container py-5 flex items-center justify-between'>
          <NavLink to={'/'}>
            <img className='w-[60px] h-[60px]' src={logo} alt="" />
          </NavLink>
          <nav className='flex items-center gap-x-5'>
            <NavLink to={'/'} className="hover:text-[#245d30] text-black font-medium transition text-[16px]">Bosh sahifa</NavLink>
            <NavLink to={'/products'} className="hover:text-[#245d30] text-black font-medium transition text-[16px]">Mahsulotlar</NavLink>
            <NavLink to={'/contact'} className="hover:text-[#245d30] text-black font-medium transition text-[16px]">Aloqa</NavLink>
            <NavLink to={'/blog'} className="hover:text-[#245d30] text-black font-medium transition text-[16px]">Blog</NavLink>
          </nav>
        <NavLink to={'/korzinka'}>
           <PiShoppingCartSimpleBold className='text-3xl cursor-pointer'/>
        </NavLink>
    </header>
  )
}

export default Navbar