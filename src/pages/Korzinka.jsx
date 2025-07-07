import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus,FaMinus } from "react-icons/fa6";
import { decrement, increment,deleteProduct } from '../features/productsSlice';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '../components/ui/dialog';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Korzinka = () => {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const { name, email, phone, message } = formData;
  if (!name || !email || !phone || !message) {
    toast.error("Iltimos, barcha maydonlarni to'ldiring!");
    return;
  }

  console.log("Yuborilgan ma'lumotlar:", formData);
  toast.success("Ma'lumotlar muvaffaqiyatli yuborildi ✅");
  setFormData({ name: '', email: '', phone: '', message: '' });
};

   const state = useSelector((state) => state.products);
  const products = state?.products || [];
  const dispatch = useDispatch();

  let allPrice = 0;
  products.forEach((item) => {
    allPrice += Number(item?.price * item.count);
  });
  
  return (
   <Dialog>
        <div className='container py-5 min-h-[40vh]'>
      
      {products.length==0 && <h2 className='md:text-[32px] text-2xl font-bold mb-5'>Sizning savatingiz bo'sh</h2> }
      {products.length!==0 && <h2 className='md:text-[32px] text-2xl font-bold mb-5'>Sizning savatingiz</h2>}

      <div className='lg::flex items-start justify-between gap-x-6'>
           <div className='lg:flex-2/3'>
                {products && products?.map((item)=>{
                    return <div className='border lg:flex w-full justify-between p-3 md:p-8 rounded-2xl mb-4'>
                        <div className='lg:flex gap-x-10'>
                            <img src={`https://api.piknicuz.com/api/uploads/images/${item.image_src}`} className='w-[200px]' alt="" />
                            <div>
                                <p className='md:text-2xl text-xl font-bold mb-3 lg:mb-12'>{item.title}</p>
                                <p className='md:text-2xl text-xl font-bold'>{item.price} So'm</p>
                            </div>
                        </div>
                        <div className='flex flex-row-reverse items-center justify-between w-full lg:mt-0 mt-6'>
                            <FaRegTrashAlt onClick={()=>dispatch(deleteProduct(item.id))} className='text-2xl cursor-pointer lg:ml-auto text-red-500'/>
                            <button className='md:w-[157px] w-32 h-12 md:h-14 lg:mt-10 flex items-center justify-between px-4 bg-[#F0F0F0] rounded-3xl'>
                                <span><FaMinus onClick={()=>dispatch(decrement(item.id))} className='font-bold md:text-xl text-lg cursor-pointer'/></span>
                                <span className='md:text-xl text-lg font-semibold'>{item.count}</span>
                                <span><FaPlus onClick={()=>dispatch(increment(item.id))} className='font-bold md:text-xl text-lg cursor-pointer'/></span>
                            </button>
                        </div>
                    </div>
                  })}
           </div>
           {products.length>0 && <div className="flex-1/3 border p-8 rounded-2xl">
             <h2 className='md:text-[32px] text-[24px] font-bold mb-6 md:mb-10'>Buyurtma xulosasi</h2>
             <div className='flex justify-between items-center'>
                  <span className='md:text-xl text-lg font-semibold'>Umumiy narx</span>
                  <span className='md:text-xl text-lg font-semibold'>{allPrice}</span>
              </div>
              <DialogTrigger className='w-full'>
                 <button className='w-full text-white font-semibold cursor-pointer bg-[#245D30] h-10 md:h-[50px] rounded-2xl flex items-center justify-center text-sm md:text-[16px] mt-8'>Buyurtma berish</button>
              </DialogTrigger>
             </div>}
              
          </div>
    </div>
    <DialogContent>
          <form onSubmit={handleSubmit} className='max-w-[730px] rounded-3xl p-2 md:p-[50px]'>
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

  <button
    type='submit'
    className='w-full text-white font-semibold cursor-pointer bg-[#245D30] h-10 md:h-[50px] rounded-2xl flex items-center justify-center text-sm md:text-[16px]'
  >
    Yuborish
  </button>
</form>


    </DialogContent>
   </Dialog>
  )
}

export default Korzinka