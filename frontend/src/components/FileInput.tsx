import { useEffect, useRef, useState } from 'react';
import { JSX, ClassAttributes, InputHTMLAttributes } from "react";
import { FileIcon } from '../../public/icons/Icons';

interface FileInputProps extends JSX.IntrinsicAttributes, ClassAttributes<HTMLDivElement>, InputHTMLAttributes<HTMLDivElement> {
  placeholder: string;
}

export default function FileInput(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative inline-block text-left w-full">
      <label htmlFor='upload' className='py-[11px] leading-[19px] px-4 bg-[#7481F6] bg-opacity-40 rounded-xl focus:outline-none focus:border-[#7481F6] flex items-center justify-between w-full hover:cursor-pointer'>
        <span>{`${props.placeholder}...`}</span>
        <input
          type="file"
          className=""
          hidden
          id='upload'
          {...props}
        />
        <FileIcon />
      </label>
    </div>
  );
}
