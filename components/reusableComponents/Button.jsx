
import React from 'react';

const Button = ({ children, className }) => {
  return (
    <button
    //   onClick={onClick}
      className={`bg-white hover:bg-slate-200 text-blue-900 border-solid border-blue-900 border-2 w-[100px] font-bold py-2 px-2 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
