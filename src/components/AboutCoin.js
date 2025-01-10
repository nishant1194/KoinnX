import React from 'react'
import image from '../../public/assests/img.png'
import Image from 'next/image'
 
export default function AboutCoin() {
  return (
    <div className="sm:p-6 p-4 pt-4 pb-8 bg-white rounded-xl mb-4 ">
    <div className="text-[24px] font-semibold text-[#0F1629] pb-1">About Bitcoin</div>
    <div className='text-[17px] font-medium	text-[#0B1426] py-3'>What is Bitcoin?</div>
<p className='text-[#3E424A] '>Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
   <div className='h-[1px] rounded-3xl bg-[#C9CFDD99] my-4 '></div>
   <div className='text-[17px] font-medium	text-[#0B1426] py-3'>Lorem ipsum dolor sit amet?</div>
<p className='text-[#3E424A] py-3 '>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  </p>
<p className='text-[#3E424A] py-23 '>Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p>
   <p className='text-[#3E424A] py-3 '>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
   <div className='h-[1px] rounded-3xl bg-[#C9CFDD99] my-4 '></div>
   <div className="text-[24px] font-semibold text-[#0F1629] pb-5">Already Holding Bitcoin?</div>
<div className='flex sm:flex-row flex-col justify-between'>
    <div className='flex bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD] items-center rounded-xl p-3  sm:w-[47%]'>
        <Image src={image} alt="..." className='pr-3'/>
        <div className='flex flex-col items-start'>
            <div className='text-[20px] font-semibold'>Calculate your Profits</div>
            <button className='py-2 px-3 bg-white text-black rounded-xl mt-4'>Check Now-{">"}</button>
        </div>
    </div>
    <div className='flex bg-gradient-to-r from-[#FF9865] to-[#EF3031] items-center rounded-xl p-3 my-3 sm:my-0 sm:w-[47%]'>
        <Image src={image} alt="..." className='pr-3'/>
        <div className='flex flex-col items-start'>
            <div className='text-[20px] font-semibold'>Calculate your Profits</div>
            <button className='py-2 px-3 bg-white text-black rounded-xl mt-4'>Check Now-{">"}</button>
        </div>
    </div>
</div>
<div className='h-[1px] rounded-3xl bg-[#C9CFDD99] my-4 '></div>
<p className='text-[#3E424A] py-3 '>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>

    </div>
  )
}
