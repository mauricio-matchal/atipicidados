import { JSX, ClassAttributes, InputHTMLAttributes } from "react";

interface TextInputProps {
  placeholder: string;
}

export default function TextInput({ placeholder, ...props }: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) {

  return (
    <div className="w-full" {...props}>
      <input
        type="date"
        className=" inline-block w-full py-[10px] leading-[19px] px-4 bg-transparent border-2 border-[#7481F6] border-opacity-70 rounded-xl focus:outline-none focus:border-blue-800"
        placeholder={placeholder}
      />
    </div>
  )
}