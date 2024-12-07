'use client';

import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  className = '', 
  onClick, 
  disabled = false 
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`py-[0.8rem] px-5 font-['Manrope'] whitespace-nowrap text-base bg-[#F57328] font-bold rounded-[32px] md:py-[0.95rem] hover:b cursor-pointer hover:shadow-md transition-all ease-in ${className}`}
    >
      {text}
    </button>
  );
};

interface IconButtonProps {
  text: string;
  divClass?: string;
  className?: string;
  onClick?: () => void;
  icon: string;
  iconSize?: string;
  iconStyle?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ 
  text, 
  divClass = '', 
  className = '', 
  onClick, 
  icon, 
  iconStyle = '' 
}) => {
  return (
    <div className={divClass}>
      <button
        onClick={onClick}
        className={`flex flex-row justify-center items-center font-['Manrope'] py-[0.8rem] px-4 gap-2 whitespace-nowrap text-base bg-[#F57328] font-bold rounded-[32px] md:py-[0.95rem] md:px-6 hover:scale-105 cursor-pointer hover:shadow-md transition-all ease-in ${className}`}
      >
        <span>{text}</span>
        <img src={icon} alt={text} className={iconStyle} />
      </button>
    </div>
  );
};