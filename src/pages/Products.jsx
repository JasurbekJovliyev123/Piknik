import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Products = () => {
  const { isPending: pending1, error: error1, data: data1 } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.piknicuz.com/api/categories').then((res) =>
        res.json()
      ),
  });
  console.log(data1);
  
 

  return (
    <div className='container min-h-[80vh] py-16'>
      <Carousel>
        <div className='w-full  ml-auto flex items-center justify-end gap-x-3'>
            <CarouselNext className='p-2 bg-[#245d30] rounded-full text-xl text-white cursor-pointer'> <MdOutlineKeyboardArrowLeft/></CarouselNext>
            <CarouselPrevious className='p-2 bg-[#245d30] rounded-full text-xl text-white cursor-pointer'><MdOutlineKeyboardArrowRight/></CarouselPrevious>
        </div>
          <CarouselContent className="grid1 md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-x-3 md:gap-x-6 w-full">
            {data1 &&
              data1.data.map((item) => {
                return (
                  <div>
                      <CarouselItem
                    className="flex hover:border w-[140px] md:w-[200px] rounded-full md:p-4 p-3 items-center justify-center flex-shrink-0"
                    key={item.id}
                  >
                    {/* <img src={item.image_src} alt={item.name} className="w-full" /> */}
                    <div className='text-sm md:text-[18px]'>{item.name}</div>
                  </CarouselItem>
                  </div>

                );
              })}
          </CarouselContent>
</Carousel>


    </div>
  );
};

export default Products;
