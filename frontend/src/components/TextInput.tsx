import { JSX, ClassAttributes, InputHTMLAttributes } from "react";

interface TextInputProps {
  placeholder: string;
}

export default function TextInput({ placeholder, ...props }: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) {

  return (
    <div className="w-full" {...props}>
      <input
        type="text"
        className=" inline-block w-full py-[9px] leading-[19px] px-3 text-sm bg-transparent border-2 border-[#7481F6] border-opacity-70 rounded-xl focus:outline-none focus:border-blue-800"
        placeholder={placeholder}
      />
    </div>
  )
}