import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, className = '', ...props }) => {
  return (
    <button className={`px-6 py-1 text-white bg-[#B48450] hover:bg-[#9a6f3c] rounded-sm font-semibold transition ${className}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
