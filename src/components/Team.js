import Image from 'next/image'
import React from 'react'
import image from '../../public/assests/pp.png'
export default function Team() {
  return (
    <div className="sm:p-6 p-4 bg-white rounded-xl mb-4 ">
    <div className="text-[24px] font-semibold text-[#0F1629] pb-1">Team</div>
    <p className='text-[#3E424A] py-3 '>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
      
      <div className="flex bg-[#e8f4fd] p-4 items-center justify-between rounded-xl my-3 flex-col sm:flex-row">
        <div className='flex flex-col items-center px-3'>
            <Image src={image} className='rounded-xl mb-2'/>
            <span className='my-1 text-[#0F1629] text-[15px] font-semibold'>John Smith</span>
            <span className='text-[#788F9B] text-[15px] '>Destination here</span>
        </div>
        <p className='text-[#0F1629] text-[15px] w-[80%] pb-2' >Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
       </div>
      <div className="flex bg-[#e8f4fd] p-4 items-center justify-between rounded-xl my-3 flex-col sm:flex-row">
        <div className='flex flex-col items-center px-3'>
            <Image src={image} className='rounded-xl mb-2'/>
            <span className='my-1 text-[#0F1629] text-[15px] font-semibold'>Elina Williams</span>
            <span className='text-[#788F9B] text-[15px] '>Destination here</span>
        </div>
        <p className='text-[#0F1629] text-[15px] w-[80%] pb-2' >Lorem ipsum  consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
       </div>
      <div className="flex bg-[#e8f4fd] p-4 items-center justify-between rounded-xl my-3 flex-col sm:flex-row">
        <div className='flex flex-col items-center px-3'>
            <Image src={image} className='rounded-xl mb-2'/>
            <span className='my-1 text-[#0F1629] text-[15px] font-semibold'>John Smith</span>
            <span className='text-[#788F9B] text-[15px] '>Destination here</span>
        </div>
        <p className='text-[#0F1629] text-[15px] w-[80%] pb-2' >Lorem ipsum justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
       </div>
    </div>
  )
}
