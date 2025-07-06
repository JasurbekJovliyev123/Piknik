import React from 'react'

const About = () => {
  return (
    <div className='md:py-16 py-8 container'>
        <h2 className='text-[#1A202C] lg:text-[50px] md:text-[40px] text-[28px] font-bold md:font-extrabold text-center'>Sayohat va Lager Blogi</h2>
        <p className='text-[#626262] text-md md:text-[18px] font-normal max-w-[731px] mx-auto my-2 md:my-4 text-center'>Sayohatni sevuvchilar uchun qiziqarli hikoyalar, foydali maslahatlar va lager hayoti haqida ko‘rsatmalar. Tabiatga yaqin bo‘lish va sayohatlaringizni unutilmas qilish uchun o‘z bilimlaringizni boyiting!</p>
        <div className='md:mt-12 mt-6 lg:flex gap-x-16'>
            <div className='max-w-[424px]'>
                <img src="https://api.piknicuz.com/api/uploads/images/23f398e0-c38d-4ccc-891a-c9ee07bf7ccf.png" alt="" />
                <p className='text-[#1A202C] md:mt-4 mt-3  mb-8 lg:mb-0 text-sm md:text-[18px] font-semibold text-center'>Tabiatning Qiziqarli Jihatlari:  Sarg‘aygan Amazon O‘rmonlari Haqida Qiziqarli Faktlar</p>
            </div>
            <div className='max-w-[424px]'>
                <img src="https://api.piknicuz.com/api/uploads/images/23f398e0-c38d-4ccc-891a-c9ee07bf7ccf.png" alt="" />
                <p className='text-[#1A202C] mt-4 text-sm md:text-[18px] font-semibold text-center'>Tabiatning Qiziqarli Jihatlari:  Sarg‘aygan Amazon O‘rmonlari Haqida Qiziqarli Faktlar</p>
            </div>
        </div>
    </div>
  )
}

export default About