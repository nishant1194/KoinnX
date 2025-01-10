 import img from '../../public/assests/bnb.png'
 import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import graph from '../../public/assests/graph.png'
import axios from 'axios';
 const TrendingCoinsSwiper = ({coins}) => {
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
        <div className="flex items-center">
            <button onClick={goPrev} className='px-3 py-2 bg-gray-100 rounded-full'>{"<"}</button>
            <Swiper
                ref={swiperRef} // Attach ref to Swiper
                spaceBetween={5}
                slidesPerView={2}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="p-4"
            >
                {coins?.map((coin, index) => (
                    <SwiperSlide key={index}>
                        <div className="border rounded-lg shadow p-4 flex flex-col items-center">
                            <div className="flex items-center space-x-1 ">
                                <div className='h-4 w-4'>
                            <Image src={img} alt={`...`} />

                                </div>
                                 <span className=" text-[#202020] text-xs sm:text-base">{coin.item.symbol}</span>
                                {/* <span className={`text-sm ${coin.change.startsWith('-') ? 'text-red-500 bg-[#EE68551A]' : 'text-green-500 bg-[#0AB27D0F]'}`}>
                                    {"coin.change"}
                                </span> */}
                            </div>
                            <p className="text-base sm:text-lg font-medium pl-1 " >${coin?.item.total_volume_btc || "3000"}</p>
                            <Image src={graph} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button onClick={goNext} className='px-3 py-2 bg-gray-100 rounded-full'>{">"}</button>

        </div>
    );
};

const Footer = () => {
    const [coins, setCoins] = useState();


    useEffect(()=>{
        const fetchTrending =async()=>{
            try {
                const resp =await axios.get("https://api.coingecko.com/api/v3/search/trending") ;
                setCoins(resp?.data.coins)
            } catch (error) {
                console.log(error);
            }
        }
        fetchTrending();
    })
    return (
        
        <div className="sm:p-8 p-4 bg-white">
            <h1 className="text-3xl font-bold mb-6">You may also like</h1>
            <TrendingCoinsSwiper coins={coins}/>
            <h1 className="text-3xl font-bold my-6">Trending Coins</h1>
            <TrendingCoinsSwiper coins={coins}/>
        </div>
    );
};

export default Footer;
