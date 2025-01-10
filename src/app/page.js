'use client'
import AboutCoin from "@/components/AboutCoin";
import Chart from "@/components/Chart";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Performance from "@/components/Performance";
import Sentiment from "@/components/Sentiment";
import Team from "@/components/Team";
import Tokenomics from "@/components/Tokenomics";
import Image from "next/image";
import gettingS from "../../public/assests/gettingS.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Trending from "@/components/Trending";

export default function Home() {
const [data,setData] = useState()

useEffect(()=>{
  const fetchData = async()=>{
    try {
      const resp = await axios.get("https://api.coingecko.com/api/v3/simple/price/?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true");
      setData(resp.data);
      console.log(resp.data)
    } catch (error) {
      console.log(error)
    }
  };
  fetchData();
},[])

  const [activePage, setActivePage] = useState('overview');
  const renderContent = () => {
    switch (activePage) {
      case 'overview':
        return <Performance />;
      case 'performance':
        return <div className="p-4">This is the Performance page.</div>;
      case 'settings':
        return <div className="p-4">This is the Settings page.</div>;
      default:
        return <div className="p-4">Select a page to view.</div>;
    }
  };

  return (
    <div className="bg-[#eff2f5] font-inter pb-6">
      <Navbar />
      <div className="sm:px-10 px-5">
        <div className="text-[14px] py-3">
          <span className="text-[#3E5765]">Cryptocurrencies</span> {">>"}{" "}
          <span className="text-semibold">Bitcoin</span>
          </div>
          <div className="flex justify-between">
        <div className="sm:w-[68%] w-[100%]">
          <div className="bg-white p-4 rounded-xl">
            <div className="flex items-center">
          <span className="text-[24px]">Bitcoin</span>
          <span className="text-[14px] align-text-top mt-1 mx-4">BTC</span>
          <span className="text-white align-text-top py-1 bg-[#768396] rounded-xl px-3 ml-4"># Rank1</span>

          </div>
          <div>
          <div className="flex items-center pt-4">
            <span className="text-[28px] mr-6 ">$ {data?.bitcoin?.usd}</span>
            <span className="text-[#14B079] ml-12 mr-6 px-4 py-1 bg-[#EBF9F4] rounded-[5px]">{Math.round(data?.bitcoin?.inr_24h_change * 100) / 100 }%</span>
            <span className="text-[#768396] text-[14px] ">(24H)</span>
          </div>
          <div className="text-[#0B1426]">₹ {data?.bitcoin?.inr}</div>
          <div className="h-[50vh] my-4">
        <Chart />

          </div>
          </div>
          </div>

      {/* Menu Bar */}
          <div>
      <div className="flex pt-4 text-white">
 
        
        <button
          onClick={() => setActivePage('overview')}
          className={` text-[#3E424A] hover:text-[#0141CF] py-2 mr-10 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => setActivePage('overview')}
          className={` text-[#3E424A] hover:text-[#0141CF] py-2 mr-10 rounded-md`}
        >
          Overview
        </button>
       <button
          onClick={() => setActivePage('overview')}
          className={` text-[#3E424A] hover:text-[#0141CF] py-2 mr-10 rounded-md`}
        >
          Overview
        </button>
      </div>
      <div className="h-[2px] bg-[#d8e4e9]"></div>

      {/* Content Area */}
      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
      <Sentiment />
<AboutCoin />
<Tokenomics />
<Team />
        </div>
        <div className=" hidden sm:block w-[30%] h-[100%]">
        <div className=" rounded-xl flex flex-col p-8 bg-[#0052FE] text-white items-center">
<h2 className="text-[22px] font-semibold w-[70%] text-center">Get Started with KoinX for FREE</h2>
<p className="text-[14px] w-[90%] text-center py-6">With our range of features that you can equip for free,
KoinX allows you to be more educated and aware of your tax reports.</p>
<Image src={gettingS} className="py-4" />
<button className="bg-white text-black px-4 py-2 rounded-xl">Get Started for FREE -{">"}
</button>
        </div>
       <Trending />
        </div>
        </div>
      </div>
<Footer />
    </div>
  );
}
