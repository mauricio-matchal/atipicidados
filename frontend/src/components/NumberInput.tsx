import { JSX, ClassAttributes, InputHTMLAttributes } from "react";

interface NumberInputProps {
  placeholder: string;
}

export default function NumberInput({
  placeholder,
  ...props
}: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) {

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/^[0-9]*$/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="w-full" {...props}>
      <input
        type="text"
        className="inline-block w-full py-[10px] leading-[19px] px-4 bg-transparent border-2 border-[#7481F6] border-opacity-70 rounded-xl focus:outline-none focus:border-blue-800"
        placeholder={placeholder}
        onKeyPress={handleInput}
      />
    </div>
  );
}
