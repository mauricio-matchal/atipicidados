import { useEffect, useRef, useState } from 'react';
import { JSX, ClassAttributes, InputHTMLAttributes } from "react";
import { FileIcon } from '../../public/icons/Icons';

interface FileInputProps extends JSX.IntrinsicAttributes, ClassAttributes<HTMLDivElement>, InputHTMLAttributes<HTMLDivElement> {
  placeholder: string;
}

export default function FileInput(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();
        console.log('Success:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };


  return (
    <div className="relative inline-block text-left w-full" {...props}>
      <label htmlFor='upload' className='py-[11px] h-[41px] leading-[19px] px-3 bg-[#F01414]/[0.3] bg-opacity-40 rounded-xl focus:outline-none focus:border-[#7481F6] flex items-center justify-between w-full hover:cursor-pointer'>
        <span className='text-sm'>{`${props.placeholder}`}</span>
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
