import React, { ChangeEvent } from "react";

interface SwitchProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Switch: React.FC<SwitchProps> = ({ onChange }) => {
  return (
    <label
      htmlFor="toggl"
      className="flex items-center cursor-pointer relative"
    >
      <input
        onChange={onChange}
        type="checkbox"
        id="toggle"
        className="absolute z-20 opacity-0 inset-0 peer cursor-pointer"
      />
      <div className="block relative bg-[#C655CE] w-[50px] h-[28px] p-1 rounded-full before:absolute before:bg-[#fff] before:w-[20px] before:h-[20px] before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-[26px] peer-checked:before:bg-[#fff]"></div>
    </label>
  );
};

export default Switch;
