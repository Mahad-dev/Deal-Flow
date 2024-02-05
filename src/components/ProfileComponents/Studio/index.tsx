import ChooseYourStyles from "@/components/ProfileComponents/Studio/chooseYourStyles";
import InvoiceForm from "@/components/ProfileComponents/Studio/invoice";
import { useState } from "react";

export default function Studio() {
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
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[1230px] mx-auto">
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
