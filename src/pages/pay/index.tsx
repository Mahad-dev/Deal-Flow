import ChooseYourStyles from "@/components/pay/chooseYourStyles";
import InvoiceForm from "@/components/pay/invoice";
import { useState } from "react";

export default function Pay() {
  const [selectedColor, setSelectedColor] = useState("#D173D2");
  const [selectedImg, setSelectedImg] = useState<string>("");

  const handleColorChange = (color: any) => {
    setSelectedColor(color.hex);
  };
  const selectedImage = (img: string) => {
    setSelectedImg(img);
  };
  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[1230px] mx-auto px-8">
        <ChooseYourStyles
          selectedColor={selectedColor}
          handleColorChange={handleColorChange}
          selectedImage={selectedImage}
          selectedImg={selectedImg}
        />
        <InvoiceForm selectedImg={selectedImg} selectedColor={selectedColor} />
      </div>
    </div>
  );
}
