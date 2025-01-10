import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import image from '../../public/assests/image.png'
import Image from 'next/image';

export default function Sentiment() {
    const swiperRef = useRef(null);

    // Move to the next slide
    const goNext = () => {
      if (swiperRef.current) swiperRef.current.swiper.slideNext();
    };
  
    // Move to the previous slide
    const goPrev = () => {
      if (swiperRef.current) swiperRef.current.swiper.slidePrev();
    };
  
  return (
    <div className='sm:p-6 p-4 pt-4 pb-8 bg-white rounded-xl my-6'>
            <div className="text-[24px] font-semibold text-[#0F1629]">Sentiment</div>
            <div className="text-[19px] text-[#44475B] py-2">Key Events</div>
            <div className='flex items-center'>
<button onClick={goPrev} className='bg-gray-100 p-2 w-12 rounded-full'>{"<"}</button>
              <Swiper
              ref={swiperRef} // Attach ref to Swiper
              spaceBetween={15}
              slidesPerView={1}
              pagination={{ clickable: true }} // Enable pagination
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1150: { slidesPerView: 2 },
              }}
              className="mySwiper"
            >
<SwiperSlide>
        <div className="p-4 w-[100%] flex bg-[#E8F4FD] rounded-xl">
          <Image src={image} className='bg-[#0082FF] h-12 w-12 p-2 rounded-full'/>
          <div className='px-2'>
          <div className='font-semibold'>Lorem ipsum dolor sit amet consectetur. mattis enim tincidunt.</div>
          <div>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
          </div>
           </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 w-[100%] flex bg-[#EBF9F4] rounded-xl">
          <Image src={image} className='bg-[#0082FF] h-12 w-12 p-2 rounded-full'/>
          <div className='px-2'>
          <div className='font-semibold'>Lorem ipsum dolor sit amet consectetur. mattis enim tincidunt.</div>
          <div>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
          </div>
           </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 w-[100%] flex bg-[#E8F4FD] rounded-xl">
          <Image src={image} className='bg-[#0082FF] h-12 w-12 p-2 rounded-full'/>
          <div className='px-2'>
          <div className='font-semibold'>Lorem ipsum dolor sit amet consectetur. mattis enim tincidunt.</div>
          <div>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
          </div>
           </div>
      </SwiperSlide>

            </Swiper>
             <button onClick={goNext} className='bg-gray-100 p-2 w-12 rounded-full'>{">"}</button>
            </div>
            <div className="text-[19px] text-[#44475B] py-6">Analyst Estimates</div>
<div className='flex'>
    <div className='p-8 sm:mr-16 mr-6 rounded-full bg-[#EBF9F4] text-[#0FBA83] flex items-center'><span className='text-[36px]'>76</span><span className='text-[15px]'>%</span></div>
    <div>
        <div className='flex w-[45vw] items-center py-2'>
        <div className='text-[#7C7E8C] text-[15px]'>Buy </div>
        <div className='h-[5px] rounded-xl mx-9 bg-green-500 w-[76%]'></div>
        <div className='text-[#7C7E8C] text-[15px]'>76%</div>
         </div>
         <div className='flex w-[45vw] items-center py-2'>
        <div className='text-[#7C7E8C] text-[15px]'>Hold</div>
        <div className='h-[5px] rounded-xl mx-9 bg-gray-300 w-[8%]'></div>
        <div className='text-[#7C7E8C] text-[15px]'>8%</div>
         </div>
         <div className='flex w-[45vw] items-center py-2'>
        <div className='text-[#7C7E8C] text-[15px]'>Sell </div>
        <div className='h-[5px] rounded-xl mx-9 bg-red-500 w-[16%]'></div>
        <div className='text-[#7C7E8C] text-[15px]'>16%</div>
         </div>
    </div>
</div>
    </div>
  )
}
