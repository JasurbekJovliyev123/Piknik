import React from 'react'

const Home = () => {
  return (
    <div className='container flex items-center py-20'>
       <div className='max-w-[580px]'>
        <h2 className='text-[60px] font-extrabold leading-18'>Zo'r jihozlar bilan sarguzashtlarni kashf eting</h2>
        <p className='text-[16px] text-[#00000099] my-4'>Sarguzasht ishqibozlari uchun moʻljallangan ochiq havoda kerakli jihozlarimizni kashf eting. Yuqori sifatli chodirlardan qulay lager anjomlarigacha, hammasi sizning tajribangizni yuksaltirish uchun.</p>
        <button className='w-[210px] h-[52px] rounded-3xl cursor-pointer bg-[#245D30] flex items-center justify-center text-white text-[16px] font-medium'>
            <a href="">Xarid qiling</a>
        </button>
        <div className='flex items-center gap-x-7 mt-5'>
             <div className='text-center'>
                <h3 className='text-black text-[48px] font-bold'>2+</h3>
                <p className='text-[16px] text-[#00000099]'>Yillik tajriba</p>
             </div>
             <div className='text-center'>
                <h3 className='text-black text-[48px] font-bold'>1500+</h3>
                <p className='text-[16px] text-[#00000099]'>Yuqori Sifatli Mahsulotlar</p>
             </div>
             <div className='text-center'>
                <h3 className='text-black text-[48px] font-bold'>500+</h3>
                <p className='text-[16px] text-[#00000099] '>Baxtli mijozlar</p>
             </div>
        </div>
       </div>
       <div>
          <video className="header-video" autoPlay loop controls>
                    <source src="/assets/video-DkyKJ5E3.mp4" type="video/mp4" />
                    
                    </video>
       </div>
    </div>
  )
}

export default Home