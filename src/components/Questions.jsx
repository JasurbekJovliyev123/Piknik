import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { questions } from '../constans';
const Questions = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div 
      onClick={() => setOpen(!open)} 
      className={`border cursor-pointer bg-gray-100 relative max-w-[1022px] p-2.5 md:p-4 rounded-xl border-[#e2e8f0] mb-4 transition-all duration-300 ${
        open ? 'md:min-h-[120px] min-h-[180px]' : 'h-auto'
      }`}
    >
      <div className='w-full flex items-center justify-between'>
        <p className='md:text-[22px] text-[16px] text-[#151515] font-medium'>{item.question}</p>
        {!open ? (
          <IoIosArrowDown className='w-5 h-5 text-[#676767]' />
        ) : (
          <IoIosArrowUp className='w-5 h-5 text-[#676767]' />
        )}
      </div>  
      {open && (
        <div className='mt-4'>
          <p className={`text-[12px] md:text-[16px] text-[#676767] transition-all duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}>
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default Questions;