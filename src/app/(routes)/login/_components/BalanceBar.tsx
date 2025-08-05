import React from 'react';

const BalanceBar = () => {
  return (
    <div className="shadow-xl bg-[#282828] text-white p-4" style={{ boxShadow: '0px 4px 20px 0px #00000066' }}>
      <h2>
        Your Account Balance: <span> $0.00 </span>
      </h2>
    </div>
  );
};

export default BalanceBar;
