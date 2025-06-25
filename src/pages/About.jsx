import React from 'react'

const About = () => {
  return (
    <div className='py-16 container'>
        <h2 className='text-[#1A202C] text-[50px] font-extrabold text-center'>Sayohat va Lager Blogi</h2>
        <p className='text-[#626262] text-[18px] font-normal max-w-[731px] mx-auto my-4 text-center'>Sayohatni sevuvchilar uchun qiziqarli hikoyalar, foydali maslahatlar va lager hayoti haqida ko‘rsatmalar. Tabiatga yaqin bo‘lish va sayohatlaringizni unutilmas qilish uchun o‘z bilimlaringizni boyiting!</p>
        <div className='mt-12 flex gap-x-16'>
            <div className='max-w-[424px]'>
                <img src="https://api.piknicuz.com/api/uploads/images/23f398e0-c38d-4ccc-891a-c9ee07bf7ccf.png" alt="" />
                <p className='text-[#1A202C] mt-4 text-[18px] font-semibold text-center'>Tabiatning Qiziqarli Jihatlari:  Sarg‘aygan Amazon O‘rmonlari Haqida Qiziqarli Faktlar</p>
            </div>
            <div className='max-w-[424px]'>
                <img src="https://api.piknicuz.com/api/uploads/images/23f398e0-c38d-4ccc-891a-c9ee07bf7ccf.png" alt="" />
                <p className='text-[#1A202C] mt-4 text-[18px] font-semibold text-center'>Tabiatning Qiziqarli Jihatlari:  Sarg‘aygan Amazon O‘rmonlari Haqida Qiziqarli Faktlar</p>
            </div>
        </div>
    </div>
  )
}

export default About