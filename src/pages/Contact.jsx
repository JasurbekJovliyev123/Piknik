import React from 'react'
import bgPhoto from '../assets/bgphoto.png'
const Contact = () => {
  return (
    <div className='py-6'>
       <div style={{backgroundImage:`url(${bgPhoto})`}} className='w-full pt-36 pl-24 lg:h-[535px] bg-cover'>
          <h2 className='text-white text-[50px] font-extrabold '>Biz bilan bog’laning</h2>
       </div>

       <div className="container flex items-start gap-x-10 py-16 pt-20">
          <div className='max-w-[500px] text-start'>
              <h3 className='text-[50px] font-extrabold text-[#011334] mb-4 leading-14'>Keling, siz bilan gaplashaylik</h3>
              <p className='text-[16px] font-medium text-[#011334] mb-4'>Savollar, sharhlar yoki takliflar? Shaklni to'ldiring va biz tez orada bog'lanamiz.</p>
          </div>
       </div>
    </div>
  )
}

export default Contact