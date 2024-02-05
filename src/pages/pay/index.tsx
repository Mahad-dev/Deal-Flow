import ChooseYourStyles from "@/components/pay/chooseYourStyles";
import InvoiceForm from "@/components/pay/invoice";
import { useState } from "react";

export default function Pay() {
  const [selectedColor, setSelectedColor] = useState("#D173D2");

  const handleColorChange = (color: any) => {
    console.log(color);
    setSelectedColor(color.hex);
  };
  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[1230px] mx-auto px-8">
        <ChooseYourStyles
          selectedColor={selectedColor}
          handleColorChange={handleColorChange}
        />
        <InvoiceForm selectedColor={selectedColor} />
      </div>
    </div>
  );
}
