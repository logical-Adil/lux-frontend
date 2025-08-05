'use client';
import { Divider } from '@mantine/core';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaGoogle, FaApple, FaFacebookF } from 'react-icons/fa';

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Add real authentication logic here
    const isAuthenticated = true;

    if (isAuthenticated) {
      router.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
    setLoading(false);
  };

  return (
    <div className=" text-white relative w-[613px] h-[643px] py-[78px] px-[75px] rounded-sm bg-gradient-to-b from-[#1D1D1D] to-[#292929] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.4)]">
      {/* Close Button */}
      <button className="absolute top-4 right-4 text-white hover:text-gray-300">
        <X size={20} />
      </button>

      <div>
        {/* Email Input */}
        <input type="email" placeholder="Email" className="w-full h-12 px-4 rounded-md bg-white text-black placeholder-gray-500 mb-8" />
        {/* Sign In Button */}
        <button onClick={handleLogin} className="w-full h-10 bg-[#B48450] hover:bg-[#9a6f3c] rounded-md font-semibold mb-8 transition cursor-pointer">
          Sign in
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 text-sm my-8 font-semibold">
        <div className="flex-1 h-px bg-white" />
        <span>or sign in with:</span>
        <div className="flex-1 h-px bg-white" />
      </div>

      {/* Social Buttons */}
      <div className="space-y-8 mt-10">
        <button className="flex items-center space-x-7 w-full h-10 bg-[#E24333] hover:bg-[#c9362a] rounded-md px-4 font-medium transition cursor-pointer">
          <div className="text-center">
            <FaGoogle className="text-white w-5 h-5" />
          </div>
          <h3 className="text-center  w-full border-l">Google</h3>
        </button>
        <button className="flex items-center space-x-7 w-full h-10 bg-[#A0A0A0] hover:bg-[#8e8e8e] rounded-md px-4 font-medium transition cursor-pointer">
          <div className="text-center">
            <FaApple className="text-white w-5 h-5" />
          </div>
          <h3 className="text-center  w-full border-l">Apple</h3>
        </button>
        <button className="flex items-center space-x-7 w-full h-10 bg-[#1877F2] hover:bg-[#1565c0] rounded-md px-4 font-medium transition cursor-pointer">
          <div className="text-center">
            <FaFacebookF className="text-white w-5 h-5" />
          </div>
          <h3 className="text-center  w-full border-l">Facebook</h3>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
