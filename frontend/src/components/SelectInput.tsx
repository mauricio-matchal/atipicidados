import { useEffect, useRef, useState } from 'react';
import { JSX, ClassAttributes, InputHTMLAttributes } from "react";

interface SelectInputProps extends JSX.IntrinsicAttributes, ClassAttributes<HTMLDivElement>, InputHTMLAttributes<HTMLDivElement> {
  placeholder: string;
  options: string[];
}

export default function SelectInput({ options, placeholder, ...props }: SelectInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left" ref={ref} {...props}>
      <div>
        <button
          type="button"
          className="py-[11px] leading-[19px] px-4 bg-[#7481F6] bg-opacity-40 rounded-xl focus:outline-none focus:border-[#7481F6] flex items-center justify-between w-full"
          onClick={toggleOpen}
        >
          {selectedOption || `${placeholder}...`}
          <svg
            className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 5L7 11L13 5" stroke="#0B0C0E" stroke-opacity="0.8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </button>
      </div>
      {isOpen && (
        <div className="absolute -mt-9 min-w-[250px] right-2 rounded-[9px] shadow-2xl bg-[#ECECEF] ring-1 ring-black ring-opacity-5 overflow-hidden z-40">
          <div className="">
            {options.map((option, index) => (
              <div key={index}>
                {index !== 0 && <hr className='border-[#656565] border-opacity-30' />}
                <button
                  key={index}
                  className="block w-full text-left px-3.5 py-2 text-sm hover:bg-black hover:bg-opacity-5"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
