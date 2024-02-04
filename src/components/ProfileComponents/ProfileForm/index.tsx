"use client";
import React, { useState } from "react";
import Select from "react-select";

import CustomInputField from "@/components/CustomInputField";

interface FormData {
  companyName: string;
  companyId: string;
  email: string;
  companyType: string;
  city: string;
  state: string;
  streetAdress: string;
  postalAdress: string;
  region: string;
}
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const CompanyDetailsForm = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    companyId: "",
    companyType: "",
    email: "",
    city: "",
    state: "",
    streetAdress: "",
    postalAdress: "",
    region: "",
  });

  const InputHandler = (fieldName: string, value: string | number) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
    console.log("Email changed:", formData);
    // You can do more with the email value here
  };

  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-[12px] px-[16px] 2xl:px-[30px] 2xl:gap-[20px]">
        <CustomInputField
          type="text"
          placeholder="Company name"
          onChange={(value) => InputHandler("companyName", value)}
          className="w-full  "
        />
        <CustomInputField
          type="text"
          placeholder="Company ID"
          onChange={(value) => InputHandler("companyId", value)}
          className="w-full  "
        />
        <CustomInputField
          type="text"
          placeholder="email@company.com"
          onChange={(value) => InputHandler("email", value)}
          className="w-full sm:w-[48%]  "
        />
        <div className="w-full sm:w-[48%] ">
          <Select
            options={options}
            onChange={(selectedOption) => {
              if (selectedOption) {
                const value = selectedOption.value;
                setFormData((prevData) => {
                  const updatedData = { ...prevData, companyType: value };
                  console.log("Updated Form Data:", updatedData);
                  return updatedData;
                });
              }
            }}
            placeholder="Company type"
            className="rectSelectWrapper"
          />
        </div>
        <div className="w-full sm:w-[48%] ">
          <Select
            options={options}
            onChange={(selectedOption) => {
              if (selectedOption) {
                const value = selectedOption.value;
                setFormData((prevData) => {
                  const updatedData = { ...prevData, city: value };
                  console.log("Updated Form Data:", updatedData);
                  return updatedData;
                });
              }
            }}
            placeholder="Denmark"
            className="rectSelectWrapper"
          />
        </div>
        <div className="w-full sm:w-[48%] ">
          <Select
            options={options}
            onChange={(selectedOption) => {
              if (selectedOption) {
                const value = selectedOption.value;
                setFormData((prevData) => {
                  const updatedData = { ...prevData, state: value };
                  console.log("Updated Form Data:", updatedData);
                  return updatedData;
                });
              }
            }}
            placeholder="Copenhagen"
            className="rectSelectWrapper"
          />
        </div>
        <CustomInputField
          type="text"
          placeholder="Street address"
          onChange={(value) => InputHandler("streetAdress", value)}
          className="w-full sm:w-[48%]  "
        />
        <CustomInputField
          type="text"
          placeholder="Postal code"
          onChange={(value) => InputHandler("postalAdress", value)}
          className="w-full sm:w-[48%]  "
        />
        <CustomInputField
          type="text"
          placeholder="State / province / region"
          onChange={(value) => InputHandler("region", value)}
          className="w-full   "
        />
      </div>
    </>
  );
};

export default CompanyDetailsForm;
