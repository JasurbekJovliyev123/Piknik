import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../features/productsSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomeProducts = () => {
  const data11 = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [categ, setCate] = useState(null);
 const getRandomProducts = (products, min = 16, max = 24) => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  return shuffled.slice(0, count);
};


  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.piknicuz.com/api/products').then((res) =>
        res.json()
      ),
  });
 const [selectedCategoryId, setSelectedCategoryId] = useState(null); 
  useEffect(() => {
    fetch('https://api.piknicuz.com/api/categories')
      .then((res) => res.json())
      .then((datas) => setCate(datas));
  }, []);

    const filteredProducts = selectedCategoryId
    ? data?.data?.filter((item) => item.category_id === selectedCategoryId)
    : getRandomProducts(data?.data || []);
   const addProducts=(item)=>{
        dispatch(addProduct(item))
        toast.success("Mahsulot savatga qo'shildi!")
    }
  return (
    <div className='container min-h-[80vh] pb-8 md:pb-16 py-4'>
      <h1 className='text-center text-black lg:text-[42px] md:text-[36px] text-[22px] w-full mb-8 font-bold'>Kategoriya va Mahsulotlar</h1>
      <Carousel className='w-full min-w-0'>
        <div className='w-full  ml-auto flex items-center justify-end gap-x-3'>
          {/* <CarouselNext className='p-2 bg-[#245d30] rounded-full text-xl text-white cursor-pointer'> <MdOutlineKeyboardArrowLeft/></CarouselNext> */}
          {/* <CarouselPrevious className='p-2 bg-[#245d30] rounded-full text-xl text-white cursor-pointer'></CarouselPrevious> */}
        </div>
        <CarouselContent className="flex overflow-x-scroll scrollbar-hide gap-3 md:gap-6 w-full px-2 ">
          {categ &&
            categ.data.map((item) => {
              return (
                <div key={item.id} className="flex-shrink-0">
                  <CarouselItem
                    onClick={() => setSelectedCategoryId(item.id)}
                    className="hover:border w-[140px] md:w-[230px] rounded-full md:p-4 p-3 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <img className='w-10 md:block hidden h-10' src={`https://api.piknicuz.com/api/uploads/images/${item.image_src}`} alt="" />
                    <div className="text-sm md:text-[18px] text-center  whitespace-wrap">{item.name}</div>
                  </CarouselItem>
                </div>
              );
            })}
        </CarouselContent>
      </Carousel>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-10 gap-y-12 grid-cols-1 pt-12'>
        {error && <h1 className='text-xl font-semibold w-full'>Mahsulotlar topilmadi</h1>}
        {isPending && <h1 className='text-xl font-semibold w-full'>Mahsulotlar yuklanmoqda...</h1>}
        {
          filteredProducts && filteredProducts.map((item) => {
            return <div key={item.id} className='rounded-3xl'>
              <NavLink to={`/product/${item.id}`}>
                <p className='px-2.5 bg-[#E9F8EC] py-8 cursor-pointer rounded-2xl'>
                  <img src={`https://api.piknicuz.com/api/uploads/images/${item.image_src}`} className='w-[220px] h-[220px] mx-auto rounded-2xl' alt="" />
                </p>
              </NavLink>
              <p className='m-3 mb-2 text-[20px] font-bold'>{item.title}</p>
              <div className='w-full flex items-center justify-between px-3'>
                <p className='text-[22px] font-bold'>{item.price} so'm</p>
                <button type="button" onClick={() => addProducts(item)} className="chakra-button css-mo10m1 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M8.66663 17.3333L18.1134 16.5461C21.0693 16.2998 21.7328 15.6542 22.0604 12.7063L22.75 6.5" stroke="#141B34" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M6.5 6.5H7.04167M23.8333 6.5H21.125" stroke="#141B34" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M10.2916 6.50004H17.875M14.0833 10.2917V2.70837" stroke="#141B34" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M6.50004 23.8333C7.69666 23.8333 8.66671 22.8633 8.66671 21.6667C8.66671 20.47 7.69666 19.5 6.50004 19.5C5.30342 19.5 4.33337 20.47 4.33337 21.6667C4.33337 22.8633 5.30342 23.8333 6.50004 23.8333Z" stroke="#141B34" strokeWidth="2"></path>
                    <path d="M18.4167 23.8333C19.6133 23.8333 20.5833 22.8633 20.5833 21.6667C20.5833 20.47 19.6133 19.5 18.4167 19.5C17.22 19.5 16.25 20.47 16.25 21.6667C16.25 22.8633 17.22 23.8333 18.4167 23.8333Z" stroke="#141B34" strokeWidth="2"></path>
                    <path d="M8.66663 21.6666H16.25" stroke="#141B34" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M2.16663 2.16663H3.21313C4.23653 2.16663 5.12861 2.84327 5.37682 3.8078L8.60002 16.3328C8.7629 16.9658 8.62351 17.6363 8.22055 18.1584L7.18477 19.5" stroke="#141B34" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                </button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default HomeProducts;
