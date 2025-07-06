import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus,FaMinus } from "react-icons/fa6";
import { decrement, increment,deleteProduct } from '../features/productsSlice';
const Korzinka = () => {
   const state = useSelector((state) => state.products);
  const products = state?.products || [];
  const dispatch = useDispatch();

  let allPrice = 0;
  products.forEach((item) => {
    allPrice += Number(item?.price * item.count);
  });
  
  return (
    <div className='container py-5 min-h-[40vh]'>
      
      {products.length==0 && <h2 className='text-[32px] font-bold mb-5'>Sizning savatingiz bo'sh</h2> }
      {products.length!==0 && <h2 className='text-[32px] font-bold mb-5'>Sizning savatingiz</h2>}

      <div className='flex items-start justify-between gap-x-6'>
           <div className='flex-2/3'>
                {products && products?.map((item)=>{
                    return <div className='border flex w-full justify-between p-8 rounded-2xl mb-4'>
                        <div className='flex gap-x-10'>
                            <img src={`https://api.piknicuz.com/api/uploads/images/${item.image_src}`} className='w-[200px]' alt="" />
                            <div>
                                <p className='text-2xl font-bold mb-12'>{item.title}</p>
                                <p className='text-2xl font-bold'>{item.price} So'm</p>
                            </div>
                        </div>
                        <div>
                            <FaRegTrashAlt onClick={()=>dispatch(deleteProduct(item.id))} className='text-2xl cursor-pointer ml-auto text-red-500'/>
                            <button className='w-[157px] h-14 mt-10 flex items-center justify-between px-4 bg-[#F0F0F0] rounded-3xl'>
                                <span><FaMinus onClick={()=>dispatch(decrement(item.id))} className='font-bold text-xl cursor-pointer'/></span>
                                <span className='text-xl font-semibold'>{item.count}</span>
                                <span><FaPlus onClick={()=>dispatch(increment(item.id))} className='font-bold text-xl cursor-pointer'/></span>
                            </button>
                        </div>
                    </div>
                  })}
           </div>
           {products.length>0 && <div className="flex-1/3 border p-8 rounded-2xl">
             <h2 className='text-[32px] font-bold mb-10'>Buyurtma xulosasi</h2>
             <div className='flex justify-between items-center'>
                  <span>Umumiy narx</span>
                  <span>{allPrice}</span>
              </div>
             </div>}
              
          </div>
    </div>
  )
}

export default Korzinka