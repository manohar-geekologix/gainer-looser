import React from 'react'
import Marquee from 'react-fast-marquee';

export const Headerslider = () => {

    const marketData = [
        { name: 'TCS', price: '4,282.00', change: '37.10 (0.87%)', color: 'text-green-500' },
        { name: 'HDFC Bank', price: '1,800.30', change: '7.15 (0.40%)', color: 'text-green-500' },
        { name: 'ICICI Bank', price: '1,292.90', change: '6.55 (0.51%)', color: 'text-green-500' },
        { name: 'Bharti Airtel', price: '1,594.55', change: '34.15 (2.19%)', color: 'text-green-500' },
        { name: 'Infosys', price: '1,870.00', change: '13.35 (0.72%)', color: 'text-green-500' },
        { name: 'SBI', price: '839.55', change: '0.70 (0.08%)', color: 'text-green-500' },
        { name: 'ITC', price: '450.20', change: '1.35 (0.30%)', color: 'text-green-500' },
      ];

  return (
    <div className="bg-gray-100 py-2">
    <Marquee gradient={false} speed={50}>
      {marketData.map((stock, index) => (
        <div key={index} className="flex items-center space-x-4 px-4">
          <span className="font-semibold">{stock.name}</span>
          <span className="text-sm">
            {stock.price}{' '}
            <span className={`${stock.color}`}>{stock.change}</span>
          </span>
        </div>
      ))}
    </Marquee>
  </div>
  )
}
