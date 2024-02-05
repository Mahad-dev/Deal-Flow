import React, { useState } from "react";

interface CustomInputProps {
  type?: "text" | "number" | "tel" | "email";
  placeholder?: string;
  onChange?: (value: string | number) => void;
  className?: string;

  value?: string | number;
  icon?: React.ReactNode | string;
}

const CustomInputField: React.FC<CustomInputProps> = ({
  type = "text",
  placeholder,
  onChange,
  className,
  value,
  icon,
}) => {
  const [inputValue, setInputValue] = useState<string | number>(
    value !== undefined ? value : ""
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      type === "number" ? parseFloat(e.target.value) : e.target.value;
    setInputValue(newValue);

    onChange && onChange(newValue);
  };

  return (
    <>
      {type === "number" ? (
        <div className={` ${className} relative block`}>
         
          <input
            className=" appearance-none border w-full py-[13px] pl-[54px] pr-[18px] text-gray-700 leading-tight 
             focus:shadow-outline border-dark-4 focus:outline-none focus:bg-white focus:border-dark rounded-[18px]
             hover:border-dark bg-[#6470840A]"
            type={type}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
          />
          <span
            className="inline-block absolute bottom-[11px] left-[18px] text-[14px] font-medium
          text-dark-4"
          >
            {icon}
          </span>
          <span className="inline-block w-[1px] h-[16px] bg-dark absolute left-[41px] bottom-[11px]"></span>
        </div>
      ) : (
        <div className={` ${className} relative block`}>
          <input
            className=" appearance-none border w-full  py-[13px]  px-[18px] text-gray-700 leading-tight 
             focus:shadow-outline border-[transparent] focus:outline-none focus:bg-white focus:border-dark rounded-[18px]
             hover:border-dark bg-[#6470840A]"
            type={type}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      )}
    </>
  );
};

export default CustomInputField;
