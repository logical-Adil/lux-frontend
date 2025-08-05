import { Logo } from '@/components/logo';
import React from 'react';
import LoginForm from './_components/form';
import LargeLogo from '@/components/LargeLogo';

const Login = () => {
  return (
    <div className="flex h-screen w-full">
      {/* Left Panel (714px) */}
      <div className="hidden w-[714px] xl:flex flex-col items-center justify-between bg-gradient-to-b from-[#0E0E0E] to-[#2C2C2C] overflow-hidden">
        {/* div 1  */}

        <div className="py-9 px-[42px] self-start">
          <Logo />
        </div>
        {/* div 2  */}
        <div className="flex flex-col gap-12 max-w-[500px]">
          <h1 className={`welcome-text text-8xl`}>Welcome</h1>
          <p className="text-white text-center">Please signin to your Lux Metallic account</p>
        </div>
        {/* div 3  */}
        <div className="mr-15">
          <LargeLogo />
        </div>
      </div>

      {/* Center Panel (Flexible) */}
      <div className="flex-grow">
        <div className="h-full w-full flex justify-center items-center">
          <LoginForm />
        </div>
      </div>

      {/* Right Panel (142px) */}
      <div className="w-[142px] h-full bg-gradient-to-b from-[#0E0E0E] to-[#2C2C2C]"></div>
    </div>
  );
};

export default Login;
