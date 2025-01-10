import React from "react";

export default function Performance() {
  return (
    <div className="sm:p-6 p-4 pt-4 pb-8 bg-white rounded-xl mb-4 ">
      <div className="text-[24px] font-semibold text-[#0F1629]">Performance</div>
      <div>
        <div className="flex justify-between pt-2 items-center">
          <div>
            <div className="text-[14px] text-[#44475B] py-4">Today's Low</div>
            <div className="text-[16px] text-[#44475B]">46,930.22</div>
          </div>
          <div className="h-1 sm:w-[70%] w-[45%] rounded-xl bg-gradient-to-r from-[#ff4a47] via-[#FF4E11] via-[#FC870A] via-[#FFAF11]  via-[#C2CB21]  to-[#11EB68]"></div>
          <div>
            <div className="text-[14px] text-[#44475B] py-4">Today's High</div>
            <div className="text-[16px] text-[#44475B]">49,343.83</div>
          </div>
        </div>
        <div className="flex justify-between pt-2 items-center">
          <div>
            <div className="text-[14px] text-[#44475B] py-4">52W Low</div>
            <div className="text-[16px] text-[#44475B]">46,930.22</div>
          </div>
          <div className="h-1 sm:w-[70%] w-[45%]  rounded-xl bg-gradient-to-r from-[#ff4a47] via-[#FF4E11] via-[#FC870A] via-[#FFAF11]  via-[#C2CB21]  to-[#11EB68]"></div>
          <div>
            <div className="text-[14px] text-[#44475B] py-4">52W High</div>
            <div className="text-[16px] text-[#44475B]">49,343.83</div>
          </div>
        </div>
      </div>
      <div className="text-[19px] pt-10 pb-6">Fundamentals</div>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className=" sm:w-[46%]">
          <div className="flex justify-between">
             <div className="text-[#768396] text-[14px]">Bitcoin Price</div>
            <div className="text-[#111827] text-[14px] pr-[3%] " >$16,815.46</div>
          </div>
          <div className="h-[1px] bg-[#D3E0E6] my-4"></div>
          <div className="flex justify-between">
             <div className="text-[#768396] text-[14px]">24h Low / 24h High</div>
            <div className="text-[#111827] text-[14px]  pr-[3%]" >$16,382.07 / $16,874.12</div>
          </div>
          <div className="h-[1px] bg-[#D3E0E6] my-4"></div>
          <div className="flex justify-between">
             <div className="text-[#768396] text-[14px]">7d Low / 7d High</div>
            <div className="text-[#111827] text-[14px] pr-[3%]" >$16,382.07 / $16,874.12</div>
          </div>
          <div className="h-[1px] bg-[#D3E0E6] my-4"></div>
          <div className="flex justify-between">
             <div className="text-[#768396] text-[14px]">Trading Volume</div>
            <div className="text-[#111827] text-[14px] pr-[3%]" >$23,249,202,782</div>
          </div>
          <div className="h-[1px] bg-[#D3E0E6] my-4"></div>
          <div className="flex justify-between">
             <div className="text-[#768396] text-[14px]">Market Cap Rank</div>
            <div className="text-[#111827] text-[14px] pr-[3%]" >#1</div>
          </div>
          <div className="h-[1px] bg-[#D3E0E6] my-4"></div>
        </div>

        <div className="sm:w-[46%] ">
          <div className="flex justify-between">
             <div className="text-[#768396] text-[14px]">Market Cap</div>
            <div className="text-[#111827] text-[14px] pr-[3%] " >$323,507,290,047</div>
          </div>
          <div className="h-[1px] bg-[#D3E0E6] my-4"></div>
          <div className="flex justify-between">
             <div className="text-[#768396] text-[14px]">24h Low / 24h High</div>
            <div className="text-[#111827] text-[14px]  pr-[3%]" >$16,382.07 / $16,874.12</div>
          </div>
          <div className="h-[1px] bg-[#D3E0E6] my-4"></div>
          <div className="flex justify-between">
             <div className="text-[#768396] text-[14px]">7d Low / 7d High</div>
            <div className="text-[#111827] text-[14px] pr-[3%]" >$16,382.07 / $16,874.12</div>
          </div>
          <div className="h-[1px] bg-[#D3E0E6] my-4"></div>
          <div className="flex justify-between">
             <div className="text-[#768396] text-[14px]">Trading Volume</div>
            <div className="text-[#111827] text-[14px] pr-[3%]" >$23,249,202,782</div>
          </div>
          <div className="h-[1px] bg-[#D3E0E6] my-4"></div>
          <div className="flex justify-between">
             <div className="text-[#768396] text-[14px]">Market Cap Rank</div>
            <div className="text-[#111827] text-[14px] pr-[3%]" >#1</div>
          </div>
          <div className="h-[1px] bg-[#D3E0E6] my-4"></div>
        </div>
      </div>
    </div>
  );
}
