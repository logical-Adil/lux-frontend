import React from 'react';

const CreateAccountHeader = () => {
  return (
    <div className="flex items-center justify-between py-6 text-white">
      <h1 className="text-2xl font-bold ">Lux Metallic card accounts</h1>
      <button className="px-8 py-[2px] text-xs text-white bg-[#B48450] hover:bg-[#9a6f3c] rounded-xs font-semibold cursor-pointer">New Card</button>
    </div>
  );
};

export default CreateAccountHeader;
