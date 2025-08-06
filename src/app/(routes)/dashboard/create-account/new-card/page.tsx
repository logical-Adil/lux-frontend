import React from 'react';

const NewCard = () => {
  return (
    <div className="p-12 min-h-full">
      <div
        className="rounded-sm p-10"
        style={{
          background: `
        radial-gradient(135.33% 135.33% at 5.71% -44.13%, #303337 0%, rgba(26, 26, 26, 0.27) 100%),
        linear-gradient(0deg, #1E2229, #1E2229),
        linear-gradient(180deg, #1D1D1D 0%, #292929 100%),
        linear-gradient(180deg, #073E3A 0%, #052725 100%),
        linear-gradient(180deg, #1D1D1D 0%, #292929 100%)`,
          boxShadow: '0px 0px 20px 0px #00000066',
        }}
      >
        <div className="flex flex-col md:flex-row gap-8 text-white">
          {/* Left Column - Card Image */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Your New Lux Metallic Card</h2>
            <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
              {/* Replace this with your actual card image */}
              <span className="text-gray-400">Card Image Here</span>
            </div>
          </div>

          {/* Right Column - Specifications */}
          <div className="md:w-1/2 flex flex-col">
            <h3 className="text-xl font-semibold mb-6 self-end">Card Specifications</h3>
            <ul className="space-y-4 text-right self-end">
              <li className="flex justify-end items-center">
                <span className="mr-2">-</span>
                <span>Set up cost 5000USDT</span>
              </li>
              <li className="flex justify-end items-center">
                <span className="mr-2">-</span>
                <span>Unlimited upload limit per month</span>
              </li>
              <li className="flex justify-end items-center">
                <span className="mr-2">-</span>
                <span>4% upload fee</span>
              </li>
              <li className="flex justify-end items-center">
                <span className="mr-2">-</span>
                <span>0.75% ATM withdrawal fee</span>
              </li>
              <li className="flex justify-end items-center">
                <span className="mr-2">-</span>
                <span>Limited availability</span>
              </li>
            </ul>

            <div className="mt-12 self-end">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full">Select card</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
