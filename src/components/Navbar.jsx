import React from 'react';
import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '../components/ui/dialog';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const {products}=useSelector((state)=>state.products)
  console.log(products);
  
  return (
    <header className='container py-5 px-3 flex items-center justify-between'>
      <NavLink to={'/'}>
        <img className='w-[60px] h-[60px]' src={logo} alt="Logo" />
      </NavLink>
      <nav className='md:flex hidden items-center gap-x-5'>
        <NavLink 
          to={'/'} 
          className="hover:text-[#245d30] text-black font-medium transition text-[16px]"
        >
          Bosh sahifa
        </NavLink>
        <NavLink 
          to={'/products'} 
          className="hover:text-[#245d30] text-black font-medium transition text-[16px]"
        >
          Mahsulotlar
        </NavLink>
        <NavLink 
          to={'/contact'} 
          className="hover:text-[#245d30] text-black font-medium transition text-[16px]"
        >
          Aloqa
        </NavLink>
        <NavLink 
          to={'/blog'} 
          className="hover:text-[#245d30] text-black font-medium transition text-[16px]"
        >
          Blog
        </NavLink>
      </nav>

      <div className='flex items-center gap-x-4'>
        <div className='relative'>
            <NavLink to={'/korzinka'}>
              <PiShoppingCartSimpleBold className='text-3xl cursor-pointer'/>
            </NavLink>
            <p className='absolute -top-2 -right-1 px-1 p-[2px] rounded-full font-semibold bg-red-500 text-white text-sm'>{products?.length}</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <button className='p-2 bg-[#245D30] md:hidden block rounded-md cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 27 25">
                <path fill="#FFF" fillRule="evenodd" d="M2.5 0h22a2.5 2.5 0 1 1 0 5h-22a2.5 2.5 0 1 1 0-5zm0 10h22a2.5 2.5 0 1 1 0 5h-22a2.5 2.5 0 1 1 0-5zm0 10h22a2.5 2.5 0 1 1 0 5h-22a2.5 2.5 0 1 1 0-5z"></path>
              </svg>
            </button>
          </DialogTrigger>

          {/* Modal Content */}
           <DialogContent className='absolute top-72 h-[60vh] bg-[#245D30] py-12'>
  <nav className='flex flex-col md:hidden items-start gap-y-3'>
    <DialogClose asChild>
      <NavLink to={'/'} className="text-white font-medium transition text-[18px]">
        Bosh sahifa
      </NavLink>
    </DialogClose>
    <DialogClose asChild>
      <NavLink to={'/products'} className="text-white font-medium transition text-[18px]">
        Mahsulotlar
      </NavLink>
    </DialogClose>
    <DialogClose asChild>
      <NavLink to={'/contact'} className="text-white font-medium transition text-[18px]">
        Aloqa
      </NavLink>
    </DialogClose>
    <DialogClose asChild>
      <NavLink to={'/blog'} className="text-white font-medium transition text-[18px]">
        Blog
      </NavLink>
    </DialogClose>
  </nav>
</DialogContent>
        </Dialog>
      </div>
    </header>
  );
}

export default Navbar;
