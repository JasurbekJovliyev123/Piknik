import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ToastContainer, toast } from 'react-toastify';
const Mainlayout = () => {
  return (
    <>
        <Navbar/>
        <main>
            <Outlet/>
            <ToastContainer/>
        </main>
        <Footer/>
    </>
  )
}

export default Mainlayout