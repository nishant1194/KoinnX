import Image from 'next/image'
import React from 'react'
import img from '../../public/assests/coinImg.png'

export default function Trending() {
  return (
    <div className="rounded-xl flex flex-col p-6 bg-[#ffffff] text-black mt-6">
    <div className="text-[24px] font-semibold text-[#0F1629] pb-1">Trending Coins (24h)</div>
<div className='flex justify-between py-3'>
    <div className='flex w-[100%] items-center'>
        <Image src={img} height={20} width={30}/>
        <span className='px-2'>Ethereum(ETH)</span>
    </div>
    <div className='text-[#14B079] ml-12 mr-6 px-4 py-1 bg-[#EBF9F4] rounded-[5px]'>8.21%</div>
</div>
<div className='flex justify-between py-3'>
    <div className='flex w-[100%] items-center'>
        <Image src={img} height={20} width={30}/>
        <span className='px-2'>Ethereum(ETH)</span>
    </div>
    <div className='text-[#14B079] ml-12 mr-6 px-4 py-1 bg-[#EBF9F4] rounded-[5px]'>8.21%</div>
</div>
<div className='flex justify-between py-3'>
    <div className='flex w-[100%] items-center'>
        <Image src={img} height={20} width={30}/>
        <span className='px-2'>Ethereum(ETH)</span>
    </div>
    <div className='text-[#14B079] ml-12 mr-6 px-4 py-1 bg-[#EBF9F4] rounded-[5px]'>8.21%</div>
</div>

    </div>
  )
}
