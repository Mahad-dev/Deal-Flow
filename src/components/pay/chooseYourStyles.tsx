import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { AddPlus } from "../ui-icons";

interface AddImageProps {
  selectedImages: string[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  selectedImage: (img: string) => void;
  selectedImg: string;
}

export default function InvoiceForm() {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedImg, setSelectedImg] = useState<string>("");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };
  const selectedImage = (img: string) => {
    setSelectedImg(img);
  };
  return (
    <div className="bg-[#fff] p-[1.5rem] rounded-[20px] shadow-sm">
      <h2 className="font-bold text-[21px] text-[#120713] mb-4">
        Choose your style
      </h2>

      <div className="rounded-[20px] mb-4 p-4 bg-[#6470840A] flex items-center gap-4 max-w-full overflow-auto">
        <AddImage
          selectedImage={selectedImage}
          selectedImages={selectedImages}
          selectedImg={selectedImg}
          onChange={handleImageChange}
        />
        {!selectedImages.length && (
          <span className="text-[13px] font-medium text-[#12071366]">
            Add image or a logo to your invoice
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        <div className="rounded-[20px] p-3 bg-[#6470840A] flex items-center gap-2 max-w-full overflow-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect width="24" height="24" rx="12" fill="#C655CE" />
          </svg>
          <span className="text-[13px] font-medium text-[#120713]">#120713</span>
          <span className="text-[13px] text-[#12071366]">HEX</span>
        </div>
        <div className="rounded-[20px] p-3 bg-[#6470840A] flex items-center gap-2 max-w-full overflow-auto">3</div>

      </div>
    </div>
  );
}

function AddImage({
  selectedImages,
  onChange,
  selectedImage,
  selectedImg,
}: AddImageProps) {
  return (
    <div className="flex gap-4">
      {selectedImages.map((imageUrl, index) => (
        <div
          onClick={() => selectedImage(imageUrl)}
          key={index}
          className={`w-[56px] h-[56px]  bg-[#fff] border-[1px] border-[#fff] rounded-full p-[4px] ${
            selectedImg === imageUrl && "!border-[#C655CE]"
          }`}
        >
          <Image
            src={imageUrl}
            alt={`SELECTED_${index}`}
            width={48}
            height={48}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      ))}

      <label
        htmlFor="image"
        className="w-[56px] h-[56px] bg-[#fff] rounded-full p-[5px] cursor-pointer"
      >
        <div className="w-full h-full rounded-full bg-[#6470840A] flex items-center justify-center">
          <AddPlus />
        </div>
        <input
          id="image"
          hidden
          type="file"
          accept="image/*"
          multiple
          onChange={onChange}
        />
      </label>
    </div>
  );
}
