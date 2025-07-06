import React from 'react'
import Products from './Products'
import HomeProducts from '../components/HomeProducts'
import { questions } from '../constans'
import Questions from '../components/Questions'
const Home = () => {
  return (
    <div>
        <div className='container flex items-center px-2 py-7 md:py-20'>
       <div className='max-w-[580px]'>
        <h2 className='lg:text-[60px] md:text-[40px] text-[28px] font-extrabold leading-10 md:leading-11 lg:leading-18'>Zo'r jihozlar bilan sarguzashtlarni kashf eting</h2>
        <p className='md:text-[16px] w-[96%]  md:w-auto text-sm text-[#00000099] my-4'>Sarguzasht ishqibozlari uchun moʻljallangan ochiq havoda kerakli jihozlarimizni kashf eting. Yuqori sifatli chodirlardan qulay lager anjomlarigacha, hammasi sizning tajribangizni yuksaltirish uchun.</p>
        <button className='md:w-[210px] w-[150px] h-11 md:h-[52px] rounded-3xl cursor-pointer bg-[#245D30] flex items-center justify-center text-white text-sm md:text-[16px] font-medium'>
            <a href="#product">Xarid qiling</a>
        </button>
        <div className='flex items-center gap-x-7 mt-5'>
             <div className='text-center'>
                <h3 className='text-black text-3xl md:text-[48px] font-bold'>2+</h3>
                <p className='md:text-[16px] text-sm text-[#00000099]'>Yillik tajriba</p>
             </div>
             <div className='text-center'>
                <h3 className='text-black text-3xl md:text-[48px] font-bold'>1500+</h3>
                <p className='md:text-[16px] text-sm text-[#00000099]'>Yuqori Sifatli Mahsulotlar</p>
             </div>
             <div className='text-center'>
                <h3 className='text-black text-3xl md:text-[48px] font-bold'>500+</h3>
                <p className='md:text-[16px] text-sm text-[#00000099] '>Baxtli mijozlar</p>
             </div>
        </div>
       </div>
       <div className='lg:block hidden'>
          <video className="header-video" autoPlay loop controls>
                    <source src="/assets/video-DkyKJ5E3.mp4" type="video/mp4" />
                    
                    </video>
       </div>
       
    </div>
    <section id='product'>
        <HomeProducts/>
    </section>
     <h2 className='lg:text-[52px] text-center md:text-[40px] text-[20px] font-extrabold leading-10 md:leading-11 lg:leading-18 md:my-6'>Tez-tez beriladigan savollar</h2>
    <div className='container max-w-[792px] pt-3 pb-10 flex flex-col justify-center mx-auto'>
       
      {questions && questions.map((item)=>{
        return <Questions item={item}/>
      })}
    </div>
    </div>
  )
}

export default Home