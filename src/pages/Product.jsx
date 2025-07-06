import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Product = () => {
  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.piknicuz.com/api/products').then((res) =>
        res.json()
      ),
  });


  const product = data?.data?.find((item) => item.id === id);
  const images = product?.product_images?.map((item) => item.images_src) || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='container'>
      {isPending && <h1   >Mahsulot yuklanmoqda</h1>}
      {error && <h1 className='text-2xl font-bold'>Mahsulot topilmadi</h1>}
  {data && <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-24 px-4 md:px-0 py-10">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="hidden md:flex flex-col gap-2">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`p-1 w-[90px] h-[70px] bg-[#E9F8EC] rounded-xl md:block hidden cursor-pointer border 
              ${index === currentIndex ? 'border-green-600' : 'border-transparent'}`}
            >
              <img
                className="w-full h-full object-cover rounded-lg"
                src={`https://api.piknicuz.com/api/uploads/images/${img}`}
                alt={`thumb-${index}`}
              />
            </div>
          ))}
        </div>


        <div className="relative w-full flex justify-center items-center">
          <button
            onClick={handlePrev}
            className="absolute cursor-pointer left-2 md:left-[-20px] bg-white p-2 rounded-full shadow-md z-10"
          >
            <MdChevronLeft className="text-2xl text-[#245d30]" />
          </button>

          <div className="p-4 rounded-2xl bg-[#E9F8EC] w-full md:w-[449px]">
            <img
              className="w-full h-[300px] md:h-[500px] object-contain"
              src={`https://api.piknicuz.com/api/uploads/images/${images[currentIndex]}`}
              alt="product"
            />
          </div>

          <button
            onClick={handleNext}
            className="absolute cursor-pointer right-2 md:right-[-20px] bg-white p-2 rounded-full shadow-md z-10"
          >
            <MdChevronRight className="text-2xl text-[#245d30]" />
          </button>
        </div>
      </div>

      <div>
        <p className="text-[28px] font-bold mb-3">{product?.title}</p>
        <p className="text-[24px] font-bold text-[#245D30] mb-2">{product?.price} so'm</p>
        <div
          dangerouslySetInnerHTML={{ __html: product?.description }}
          className="text-[16px] text-[#727272] font-medium mb-4"
        ></div>
        <button className="w-full md:w-[300px] h-[45px] flex items-center justify-center text-white font-medium bg-[#245D30] rounded-3xl cursor-pointer">
          Savatga qo'shish
        </button>
      </div>
    </div>}
    </div>
  );
};

export default Product;
