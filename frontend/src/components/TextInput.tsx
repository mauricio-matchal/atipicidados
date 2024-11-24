import { JSX, ClassAttributes, InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";

interface TextInputProps {
  placeholder: string;
  type?: string;
}

export default function TextInput({ placeholder, type, ...props }: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) {

  const cpfMask = "999.999.999-99";
  const rgMask = "99.999.999-99";
  const cepMask = "99.999-999";
  
  if (type === "cep") {
    return (
      <div className="w-full" {...props}>
        <InputMask
          mask={cepMask}
          type="text"
          className=" inline-block w-full py-[9px] leading-[19px] px-3 text-sm bg-transparent border-2 border-[#7481F6] border-opacity-70 rounded-xl focus:outline-none focus:border-blue-800"
          placeholder={placeholder}
        />
      </div>
    )
  }
  if (type === "cpf") {
    return (
      <div className="w-full" {...props}>
        <InputMask
          mask={cpfMask}
          type="text"
          className=" inline-block w-full py-[9px] leading-[19px] px-3 text-sm bg-transparent border-2 border-[#7481F6] border-opacity-70 rounded-xl focus:outline-none focus:border-blue-800"
          placeholder={placeholder}
        />
      </div>
    )
  }
  if (type === "rg") {
    return (
      <div className="w-full" {...props}>
        <InputMask
          mask={rgMask}
          type="text"
          className=" inline-block w-full py-[9px] leading-[19px] px-3 text-sm bg-transparent border-2 border-[#7481F6] border-opacity-70 rounded-xl focus:outline-none focus:border-blue-800"
          placeholder={placeholder}
        />
      </div>
    )
  }
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