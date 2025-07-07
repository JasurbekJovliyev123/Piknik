import React, { useState } from 'react'
import bgPhoto from '../assets/bgphoto.png'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Contact = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!", {
        position: "top-right",
      });
    } else {
      toast.success("Ma'lumotlar yuborildi!", {
        position: "top-right",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };
  return (
    <div className='py-6'>
       <div style={{backgroundImage:`url(${bgPhoto})`}} className='w-full md:pt-36 pt-20 pl-12 md:pl-24 h-[300px] lg:h-[535px] bg-cover'>
          <h2 className='text-white lg:text-[50px] md:text-[36px] text-[24px] font-extrabold '>Biz bilan bog’laning</h2>
       </div>

       <div className="container lg:flex items-start justify-between gap-x-10 py-10 md:py-16 md:pt-20">
          <div className='max-w-[500px] text-start'>
              <h3 className='lg::text-[50px] md:text-[40px] text-[28px] font-extrabold text-[#011334] mb-4 md:leading-14 leading-9'>Keling, siz bilan gaplashaylik</h3>
              <p className='md:text-[16px] text-sm font-medium text-[#011334] mb-4'>Savollar, sharhlar yoki takliflar? Shaklni to'ldiring va biz tez orada bog'lanamiz.</p>
              <NavLink to={"https://www.google.com/maps/place/41%C2%B019'38.5%22N+69%C2%B011'56.2%22E/@41.327364,69.1963761,17z/data=!3m1!4b1!4m4!3m3!8m2!3d41.327364!4d69.198951?entry=tts&g_ep=EgoyMDI1MDIxOS4xIPu8ASoASAFQAw%3D%3D"} className='flex items-start gap-x-3 mb-3'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none"><path d="M9.192 24C8.928 24 8.688 23.88 8.52 23.688C7.656 22.704 0 13.992 0 9.192C0 4.128 4.128 0 9.192 0C14.256 0 18.384 4.128 18.384 9.192C18.384 13.968 10.728 22.704 9.864 23.688C9.696 23.88 9.456 24 9.192 24ZM9.192 1.824C5.136 1.824 1.824 5.136 1.824 9.192C1.824 12.36 6.648 18.672 9.192 21.696C11.736 18.696 16.56 12.36 16.56 9.192C16.56 5.136 13.248 1.824 9.192 1.824Z" fill="url(#paint0_linear_0_786)"></path><path d="M9.19199 13.9199C6.64798 13.9199 4.58398 11.8559 4.58398 9.31186C4.58398 6.76786 6.64798 4.70386 9.19199 4.70386C11.736 4.70386 13.8 6.76786 13.8 9.31186C13.8 11.8559 11.736 13.9199 9.19199 13.9199ZM9.19199 6.52786C7.65599 6.52786 6.40799 7.77586 6.40799 9.31186C6.40799 10.8479 7.65599 12.0959 9.19199 12.0959C10.728 12.0959 11.976 10.8479 11.976 9.31186C11.976 7.77586 10.728 6.52786 9.19199 6.52786Z" fill="url(#paint1_linear_0_786)"></path><defs><linearGradient id="paint0_linear_0_786" x1="9.192" y1="0" x2="9.192" y2="24" gradientUnits="userSpaceOnUse"><stop offset="1" stop-color="#245D30"></stop></linearGradient><linearGradient id="paint1_linear_0_786" x1="9.19199" y1="4.70386" x2="9.19199" y2="13.9199" gradientUnits="userSpaceOnUse"><stop offset="1" stop-color="#245D30"></stop></linearGradient></defs></svg>
                     <p className='text-[#011334] text-sm md:text-[16px] font-semibold'>Toshkent shaxar Shayxontoxur tumani Qoʻrgʻoncha koʻchasi 48 uy</p>
              </NavLink>
              <NavLink to={'tel:+99899 069 19 91'} className='flex items-start gap-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><g clip-path="url(#clip0_0_792)"><path d="M12.8531 6.91989C14.0273 7.12145 15.1007 7.67692 15.9562 8.53004C16.807 9.38082 17.3648 10.4543 17.5664 11.6308C17.6437 12.0949 18.0422 12.43 18.5132 12.43C18.5742 12.43 18.6281 12.423 18.6656 12.416C18.6679 12.416 18.6703 12.416 18.6726 12.4136C18.9281 12.3714 19.1507 12.2332 19.2984 12.0199C19.4461 11.8089 19.5023 11.5558 19.4578 11.305C19.1906 9.73473 18.45 8.30504 17.3132 7.16832C16.1718 6.0316 14.7398 5.29098 13.1718 5.02614H13.1695C12.6468 4.93942 12.1523 5.29332 12.0656 5.81364C11.9836 6.33864 12.3351 6.83317 12.8531 6.91989Z" fill="url(#paint0_linear_0_792)"></path><path d="M18.7614 14.9656C18.2364 14.4195 17.6013 14.1312 16.9239 14.1312C16.2536 14.1312 15.6138 14.4148 15.077 14.9539L13.7435 16.2875C13.7106 16.2711 13.6778 16.2547 13.6474 16.2383L13.5794 16.2055C13.4364 16.1328 13.2724 16.0508 13.1364 15.9664C11.7677 15.0969 10.5184 13.9578 9.31376 12.4813C8.79814 11.832 8.4372 11.2812 8.17236 10.7328C8.50751 10.4164 8.81923 10.1 9.1122 9.8C9.17782 9.73437 9.24345 9.66641 9.31142 9.59844C9.37704 9.53047 9.44501 9.4625 9.51298 9.39453C10.0708 8.83672 10.3661 8.18984 10.3638 7.52422C10.3638 6.86094 10.0684 6.21641 9.51298 5.66328L8.21689 4.36719C8.14189 4.29219 8.06689 4.21719 7.99423 4.14219C7.92157 4.06719 7.84657 3.99219 7.77392 3.91953L7.67079 3.81406C7.41532 3.55391 7.15048 3.28438 6.88329 3.03828C6.36298 2.52031 5.73251 2.24609 5.06454 2.24609C4.39892 2.24609 3.76376 2.52031 3.22235 3.03828C3.22001 3.04063 3.21767 3.04062 3.21767 3.04297L1.59345 4.66484C0.930167 5.32812 0.552823 6.13672 0.470792 7.06719V7.06953C0.384073 8.17109 0.583292 9.33359 1.09892 10.7281C1.87939 12.8375 3.05126 14.7922 4.78329 16.8781C6.89736 19.3977 9.43564 21.3852 12.3255 22.7844H12.3278C13.4411 23.3164 14.9364 23.9398 16.6239 24.05C16.6263 24.05 16.6286 24.05 16.6309 24.05H16.6427C16.7388 24.0547 16.8395 24.0594 16.945 24.0594C18.1286 24.0594 19.127 23.6305 19.9099 22.7844L19.9216 22.7727C19.931 22.7633 19.938 22.7563 19.945 22.7469C20.1794 22.4656 20.4489 22.2055 20.7513 21.9148C20.9599 21.7156 21.1731 21.5117 21.3794 21.2914C21.9114 20.7359 22.1927 20.0891 22.1903 19.4211C22.188 18.7508 21.902 18.1109 21.363 17.5719L18.7614 14.9656ZM18.5036 21.4977C18.0864 21.943 17.6083 22.1422 16.9567 22.1422C16.8958 22.1422 16.8278 22.1375 16.7575 22.1328C15.4075 22.0461 14.1302 21.5117 13.1692 21.0547C10.5161 19.7773 8.1911 17.9586 6.25751 15.6477C4.67548 13.7422 3.60907 11.9656 2.9036 10.0625C2.48173 8.93047 2.32235 8.05391 2.38798 7.22656C2.43017 6.74375 2.61064 6.35938 2.95517 6.01953L4.56767 4.40703C4.73642 4.24531 4.90985 4.15859 5.07157 4.15859C5.22392 4.15859 5.38564 4.24297 5.55673 4.40938C5.55907 4.41172 5.56142 4.41406 5.56376 4.41641C5.84267 4.67891 6.11454 4.95547 6.40282 5.24609L6.4122 5.25547C6.55048 5.39844 6.70986 5.5625 6.87157 5.71953L8.16532 7.01328C8.54267 7.39062 8.54267 7.65547 8.16532 8.03281C8.02939 8.16875 7.8911 8.30703 7.75517 8.44766L7.65907 8.54609C7.29579 8.91406 6.9536 9.26094 6.58095 9.59141C6.57626 9.59609 6.56923 9.60078 6.56454 9.60781L6.54111 9.63125C6.14501 10.0273 6.0372 10.5008 6.22235 11.0352C6.22704 11.0492 6.23173 11.0609 6.23642 11.0727C6.23876 11.0797 6.24111 11.0867 6.24579 11.0938C6.59267 11.9305 7.08017 12.725 7.83017 13.6742C7.83017 13.6766 7.83251 13.6766 7.83251 13.6789C9.16376 15.3172 10.5677 16.5969 12.1263 17.5859C12.3302 17.7148 12.5411 17.8227 12.738 17.9211C12.8833 17.9937 13.0474 18.0781 13.1833 18.1602C13.1927 18.1672 13.202 18.1719 13.2114 18.1766L13.2184 18.1813C13.2325 18.1883 13.2466 18.1977 13.263 18.2047C13.4669 18.3078 13.6684 18.357 13.877 18.357C14.2333 18.357 14.5614 18.2094 14.8263 17.9305L16.4481 16.3086C16.5653 16.1914 16.7481 16.0508 16.9403 16.0508C17.1184 16.0508 17.2919 16.1891 17.4044 16.3063C17.4067 16.3086 17.4067 16.3086 17.4091 16.3109L20.027 18.9289C20.2849 19.1867 20.4606 19.4914 20.0059 19.9695L20.0036 19.9719C19.8606 20.1266 19.7083 20.2742 19.5466 20.4313C19.5114 20.4641 19.4763 20.4992 19.4411 20.5344C19.113 20.8414 18.7989 21.1461 18.5036 21.4977Z" fill="url(#paint1_linear_0_792)"></path><path d="M23.5334 11.1174C23.1021 8.57909 21.9021 6.26347 20.0623 4.42362C18.2154 2.58143 15.8998 1.38143 13.3592 0.952527C12.8365 0.865809 12.342 1.21972 12.2553 1.74003C12.1685 2.26268 12.5225 2.75722 13.0404 2.84393C15.1896 3.20956 17.1467 4.22675 18.7029 5.78065C20.2592 7.3369 21.274 9.29393 21.6396 11.4408C21.717 11.9049 22.1154 12.24 22.5865 12.24C22.5889 12.24 22.5912 12.24 22.5935 12.24C22.6521 12.24 22.7014 12.233 22.7389 12.226C22.7412 12.226 22.7435 12.226 22.7459 12.2236C23.0014 12.1814 23.224 12.0432 23.3717 11.8299C23.5217 11.6213 23.5779 11.3682 23.5334 11.1174Z" fill="url(#paint2_linear_0_792)"></path></g><defs><linearGradient id="paint0_linear_0_792" x1="15.7632" y1="5.01306" x2="15.7632" y2="12.43" gradientUnits="userSpaceOnUse"><stop offset="1" stop-color="#245D30"></stop></linearGradient><linearGradient id="paint1_linear_0_792" x1="11.3208" y1="2.24609" x2="11.3208" y2="24.0594" gradientUnits="userSpaceOnUse"><stop offset="1" stop-color="#245D30"></stop></linearGradient><linearGradient id="paint2_linear_0_792" x1="17.8952" y1="0.939453" x2="17.8952" y2="12.24" gradientUnits="userSpaceOnUse"><stop offset="1" stop-color="#245D30"></stop></linearGradient><clipPath id="clip0_0_792"><rect width="24" height="24" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>
                     <p className='text-[#011334] text-sm md:text-[16px] font-semibold'>+998 99 069 19 91</p>
              </NavLink>

              <p className='text-[#011334] text-sm md:text-[16px] font-semibold mt-3 md:mt-6 mb-2'>Ish vaqtlari</p>
                     <p className='text-sm text-[#1A202C] mb-[2px]'>Dushanba: 10:30-20:00</p>
                     <p className='text-sm text-[#1A202C] mb-[2px]'>Seshanba: 10:30-20:00</p>
                     <p className='text-sm text-[#1A202C] mb-[2px]'>Chorshanba: 10:30-20:00</p>
                     <p className='text-sm text-[#1A202C] mb-[2px]'>Payshanba: 10:30-20:00</p>
                     <p className='text-sm text-[#1A202C] mb-[2px]'>Juma: dam olish kuni</p>
                     <p className='text-sm text-[#1A202C] mb-[2px]'>Shanba: 10:30-20:00</p>
                     <p className='text-sm text-[#1A202C] mb-8 lg:mb-[2px]'>Yakshanba: 10:30-20:00</p>
          </div>

           <form onSubmit={handleSubmit} className='border border-[#bdbdbd] max-w-[730px] rounded-3xl p-5 md:p-[50px]'>
          <input
            className='w-full px-4 md:px-6 py-2 md:py-3 border border-[#bdbdbd] bg-[#F9F9F9] rounded-2xl mb-7'
            type="text"
            placeholder='Ism va familya'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className='w-full px-4 md:px-6 py-2 md:py-3 border border-[#bdbdbd] bg-[#F9F9F9] rounded-2xl mb-7'
            type="email"
            placeholder='Pochta'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className='w-full px-4 md:px-6 py-2 md:py-3 border border-[#bdbdbd] bg-[#F9F9F9] rounded-2xl mb-7'
            type="tel"
            placeholder='Telefon raqam'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            className='w-full px-4 md:px-6 py-2 md:py-3 border border-[#bdbdbd] min-h-[120px] mb-7 bg-[#F9F9F9] rounded-2xl'
            name="message"
            placeholder='Xabar'
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type='submit' className='w-full text-white font-semibold cursor-pointer bg-[#245D30] h-10 md:h-[50px] rounded-2xl flex items-center justify-center text-sm md:text-[16px]'>
            Yuborish
          </button>
        </form>
       </div>
    </div>
  )
}

export default Contact