import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import logo from '../assets/logo.svg'
const Footer = () => {
  return (
    <footer className='w-full px-5 py-20 bg-[#245d30]'>
        <div className='flex items-start justify-between container'>
            <div>
              <NavLink to={'/'}>
                <img className='w-[100px] h-[100px] mb-4' src={logo} alt="" />
              </NavLink>
              <div className='flex items-center justify-center gap-x-4'>
                <NavLink to={'https://www.instagram.com/Piknic_uz/#'} className='p-2 bg-white rounded-full'>
                    <FaInstagram className='text-xl'/>
                </NavLink>
                  <NavLink to={'https://t.me/Piknicuzz'} className='p-2 bg-white rounded-full'>
                    <PiTelegramLogo className='text-xl'/>
                </NavLink>
              </div>
            </div>
            <div className='text-start'>
              <p className='text-white text-[22px] font-semibold mb-4'>Kompaniya</p>
              <nav className='flex flex-col items-start justify-start gap-y-3'>
                <NavLink to={'/'} className="text-[#FFFFFF99] font-medium transition text-[16px]">Bosh sahifa</NavLink>
                <NavLink to={'/products'} className="text-[#FFFFFF99] font-medium transition text-[16px]">Mahsulotlar</NavLink>
                <NavLink to={'/contact'} className="text-[#FFFFFF99] font-medium transition text-[16px]">Aloqa</NavLink>
                <NavLink to={'/blog'} className="text-[#FFFFFF99] font-medium transition text-[16px]">Blog</NavLink>
              </nav>
            </div>

            <div className='max-w-[440px] text-start'>
                  <p className='text-white text-[22px] font-semibold mb-4'>Aloqa</p>
                  <nav className='flex flex-col items-start justify-start gap-y-3'>
                    <NavLink
                      to={
                        "https://www.google.com/maps/place/41%C2%B019'38.5%22N+69%C2%B011'56.2%22E/@41.327364,69.1963761,17z/data=!3m1!4b1!4m4!3m3!8m2!3d41.327364!4d69.198951?entry=tts&g_ep=EgoyMDI1MDIxOS4xIPu8ASoASAFQAw%3D%3D"
                      }
                      className="text-[#FFFFFF99] font-medium transition text-[16px]"
                    >
                      Toshkent shaxar Shayxontoxur tumani Qoʻrgʻoncha koʻchasi 48 uy
                    </NavLink>
                    <NavLink
                      to={''}
                      className="text-[#FFFFFF99] font-medium transition text-[16px]"
                    >
                      +998 99 069 19 91
                    </NavLink>
                  </nav>
                </div>

    </div>
    </footer>
  )
}

export default Footer