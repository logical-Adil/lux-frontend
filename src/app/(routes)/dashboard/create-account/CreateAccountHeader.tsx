'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const CreateAccountHeader = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard/create-account/new-card');
  };

  return (
    <div className="flex items-center justify-between py-6 text-white">
      <h1 className="text-2xl font-bold">Lux Metallic card accounts</h1>
      <button onClick={handleClick} className="px-8 py-[2px] text-xs text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] rounded-xs font-semibold cursor-pointer">
        New Card
      </button>
    </div>
  );
};

export default CreateAccountHeader;
