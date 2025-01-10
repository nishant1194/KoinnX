import React from 'react'

// components/DonutChartWithLegend.js
// components/PerfectDonutChart.js
  function DonutChartWithLegend({ data }) {
    const primaryPercentage = data[0].percentage;
    const secondaryPercentage = 100 - primaryPercentage;
  
    return (
      <div className="flex items-center justify-start space-x-8">
        {/* Donut Chart */}
        <div className="relative">
          <svg
            viewBox="0 0 40 40"
            className="w-40 h-40"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Circle (for secondary color) */}
            <circle
              r="15.915"
              cx="18"
              cy="18"
              fill="transparent"
              stroke={data[1]?.color} // Red
              strokeWidth="4"
            />
            {/* Foreground Circle (for primary color) */}
            <circle
              r="15.915"
              cx="18"
              cy="18"
              fill="transparent"
              stroke={data[0]?.color} // Blue
              strokeWidth="4"
              strokeDasharray={`${primaryPercentage} ${secondaryPercentage}`}
              transform="rotate(-90 18 18)"
             />
          </svg>
        </div>
  
        {/* Legend */}
        <div>
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-base text-[#202020]">
                {item.label}: {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  

export default function Tokenomics() {
    const chartData = [
        { label: "Crowdsale investors", percentage: 60, color: "#0082FF" }, // Blue
        { label: "Foundation", percentage: 40, color: "#FAA002" }, // Orange
      ];
  return (
    <div className="p-6 pb-8 bg-white rounded-xl mb-4 sm:block hidden">
    <div className="text-[24px] font-semibold text-[#0F1629] pb-1">Tokenomics</div>
    <div className='text-[20px] font-medium	text-[#0B1426] py-3'>Initial Distribution</div>  
       <DonutChartWithLegend data={chartData} />
 
      <p className='text-[#3E424A] py-3 '>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  </p>

    </div>
  )
}
