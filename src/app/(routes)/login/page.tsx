"use client";

import { Logo } from "@/components/logo";
import LoginForm from "./_components/form";
import LargeLogo from "@/components/LargeLogo";
import { Separator } from "@/components/ui/separator";

const Login = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="hidden w-[714px] xl:flex flex-col items-center justify-between bg-gradient-to-b from-[#0E0E0E] to-[#2C2C2C] overflow-hidden">
        <div className="py-9 px-[42px] self-start">
          <Logo />
        </div>
        <div className="flex flex-col gap-8 max-w-[500px]">
          <h1 className={`welcome-text xl:text-[120px]`}>Welcome</h1>
          <div className="opacity-50">
            <Separator />
          </div>
          <p className="text-white text-center text-[25px] font-normal">
            Please signin to your Lux Metallic account
          </p>
        </div>
        <div className="mr-15">
          <LargeLogo />
        </div>
      </div>

      <div className="flex-grow bg-white">
        <div className="h-full w-full flex justify-center items-center">
          <LoginForm />
        </div>
      </div>

      <div className="w-[142px] h-full bg-gradient-to-b from-[#0E0E0E] to-[#2C2C2C]"></div>
    </div>
  );
};

export default Login;
