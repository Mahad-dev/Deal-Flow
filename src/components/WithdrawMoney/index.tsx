import React, { useState } from "react";
import {
  RadioChecked,
  RadioUnchecked,
  RoundedCrossNew,
  RoundedPlusNew,
  ArrowRightSmall,
  RoundedInfo,
} from "../ui-icons";
import Image from "next/image";
import ReusableModal from "../Modal";

interface InvoiceItem {
  id: string;
  title: string;
  company: string;
  paymentStatus: string;
  totalCash: string;
}

const selectInvoicesRecord = [
  {
    id: "1",
    title: "Invoice 01",
    company: "Company",

    totalCash: "+ 35,257.66 €",
    paymentStatus: "Paid",
  },
  {
    id: "2",
    title: "ID verified",
    company: "Company",
    totalCash: "+ 106,725.00 €",
    paymentStatus: "Paid",
  },
  {
    id: "3",
    title: "Title",
    company: "Company",
    totalCash: "+ 10.00 €",
    paymentStatus: "Paid",
  },
  {
    id: "4",
    title: "ID verified",
    company: "Company",
    totalCash: "+ 106,725.00 €",
    paymentStatus: "Paid",
  },
  {
    id: "5",
    title: "Invoice 01",
    company: "Company",

    totalCash: "+ 35,257.66 €",
    paymentStatus: "Paid",
  },
  {
    id: "6",
    title: "Invoice 01",
    company: "Company",

    totalCash: "+ 35,257.66 €",
    paymentStatus: "Paid",
  },
  {
    id: "7",
    title: "Invoice 01",
    company: "Company",

    totalCash: "+ 35,257.66 €",
    paymentStatus: "Paid",
  },
  {
    id: "8",
    title: "Invoice 01",
    company: "Company",

    totalCash: "+ 35,257.66 €",
    paymentStatus: "Paid",
  },
];

const withDrawDetails = [
  {
    id: "1",
    title: "Bank name",
    company: "Revolut",
  },
  {
    id: "2",
    title: "BIC",
    company: "REVOLT21",
  },
  {
    id: "3",
    title: "IBAN",
    company: "AT483200000012345864",
  },
  {
    id: "4",
    title: "Currency",
    company: "EUR",
  },
];

const withDrawDetailsStep2 = [
  {
    id: "1",
    title: "Bank name",
    company: "Revolut",
  },
  {
    id: "2",
    title: "BIC",
    company: "REVOLT21",
  },
  {
    id: "3",
    title: "IBAN",
    company: "AT483200000012345864",
  },
];

const WithdrawMoney = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [AccountPopUp, setAccountPopUp] = useState(false);
  const [withDrawMoneyStep2, setWithDrawMoneyStep2] = useState(false);
  const [processingPopUp, setProcessingPopUp] = useState(false);
  const [successPopUp, setSuccessPopUp] = useState(false);

  const handleRadioChange = (id: string) => {
    setSelectedItem(id === selectedItem ? null : id);
    console.log("Selected Item:", id);
  };

  return (
    <div
      className="bg-white  shadow-[1px_10px_11px_0px_rgba(38,38,38,0.06)] 
       min-h-[500px] rounded-[20px]  p-[40px] max-w-[550px] w-full relative flex flex-col justify-between"
    >
      {withDrawMoneyStep2 === true ? (
        <>
          <div>
            <div className="mb-[30px] pb-[30px] flex items-center justify-between relative beforeLine afterLine">
              <h2 className="text-[18px] xl:text-[21px]  font-bold text-dark">
                Withdraw money
              </h2>
              <div className="flex items-center gap-[14px]">
                <span className="text-[#12071366]">2 of 2</span>
                <span className="cursor-pointer">
                  <RoundedCrossNew />
                </span>
              </div>
            </div>
            <span className="text-[17px] font-semibold leading-[21px] mb-[24px] block">
              Your withdrawal
            </span>

            <div
              className={`p-[16px] xl:py-[19px] rounded-[20px]  bg-[#6470840A]
                flex items-center justify-between mb-[22px]`}
            >
              <span className="block text-[dark] text-[15px] font-medium  leading-[18px]">
                Amount
              </span>
              <span className="block text-[dark] text-[15px] font-medium leading-[18px]">
                € 1 500
              </span>
            </div>

            <div className="bg-white mb-[32px]">
              <div
                className={`p-[16px] xl:py-[19px] rounded-tr-[20px]  rounded-tl-[20px] bg-[#6470840A]
                flex items-center justify-between mb-[1px]`}
              >
                <span className="block text-[dark] text-[15px] font-medium  leading-[18px]">
                  Dealflow fee
                </span>
                <div className="flex items-center gap-[10px]">
                  {" "}
                  <span className="block text-[dark] text-[15px] font-medium leading-[18px]">
                    € 30
                  </span>
                  <RoundedInfo />
                </div>
              </div>

              <div
                className={`p-[16px] xl:py-[19px] rounded-br-[20px] rounded-bl-[20px] bg-[#6470840A]
                flex items-center justify-between`}
              >
                <span className="block text-[dark] text-[15px] font-medium  leading-[18px]">
                  Your payout
                </span>
                <div className="flex items-center gap-[10px]">
                  <span className="block text-[dark] text-[15px] font-medium leading-[18px]">
                    ~ € 5
                  </span>
                  <RoundedInfo />
                </div>
              </div>
            </div>
            <span className="text-[17px] font-semibold leading-[21px] mb-[24px] block">
              You will receive
            </span>

            <div
              className={`p-[16px] xl:py-[19px] rounded-[20px]  bg-[#6470840A]
                flex items-center justify-between mb-[22px]`}
            >
              <span className="block text-[dark] text-[15px] font-medium  leading-[18px]">
                EUR
              </span>
              <div className="flex items-center gap-[10px]">
                <span className="block text-[dark] text-[15px] font-medium leading-[18px]">
                  Convert
                </span>
                <span>€ 1 470</span>
                <span></span>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#6470840A] p-[20px_16px] mb-[18spx]">
              {withDrawDetailsStep2.map((detail) => (
                <div
                  key={detail.id}
                  className="flex items-center justify-between mb-[18px]"
                >
                  <span className="block text-[#12071366] leading-[18px]">
                    {detail.title}
                  </span>
                  <span className="block text-[dark] text-[15px] font-medium leading-[18px]">
                    {detail.company}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div
              onClick={() => {
                setWithDrawMoneyStep2(false);
              }}
              className="p-[16px] text-dark text-[13px] font-medium cursor-pointer  w-[48%]
              flex items-center justify-center rounded-[100px] bg-[#6470840A] leading-[18px]"
            >
              Back
            </div>
            <div
              onClick={() => setProcessingPopUp(true)}
              className=" p-[16px] text-white text-[13px] font-medium cursor-pointer  w-[48%]
             flex items-center justify-center rounded-[100px] gradientBg leading-[18px]"
            >
              Withdraw
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="mb-[30px] pb-[30px] flex items-center justify-between relative beforeLine">
              <h2 className="text-[18px] xl:text-[21px]  font-bold text-dark">
                Withdraw money
              </h2>
              <div className="flex items-center gap-[14px]">
                <span className="text-[#12071366]">1 of 2</span>
                <span className="cursor-pointer">
                  <RoundedCrossNew />
                </span>
              </div>
            </div>
            <span className="text-[17px] font-semibold leading-[21px] mb-[15px] block">
              Choose account
            </span>
            {selectInvoicesRecord.map((item, index) => (
              <div
                key={index}
                id={`"${item.id}"`}
                onClick={() => handleRadioChange(item.id)}
                className={`p-[16px] rounded-[18px] mb-[6px] hover:bg-[#6470840A] cursor-pointer ${
                  item.id === selectedItem ? "bg-[#6470840A]" : ""
                }`}
              >
                <div className="flex items-center gap-[12px]">
                  <span>
                    <Image
                      src="/rounded-gradient.svg"
                      alt=" image"
                      width={24}
                      height={24}
                    />
                  </span>
                  <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col  leading-[18px]">
                      <h3 className="text-[#120713] text-[13px] font-medium mb-[2px]">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-[14px]">
                      <span className="relative h-[16px] w-[16px]">
                        <input
                          type="radio"
                          id={`radio-${item.id}`}
                          onChange={() => handleRadioChange(item.id)}
                          checked={item.id === selectedItem}
                          className="absolute top-0 left-0 w-[16px] h-[16px] inline-block opacity-0"
                        />
                        <label
                          htmlFor={`radio-${item.id}`}
                          className="checkbox-label flex items-center justify-center rounded-[6px]
                       w-[16px] h-[16px] transition duration-300 ease-in-out"
                        >
                          {item.id === selectedItem ? (
                            <RadioChecked className="cursor-pointer" />
                          ) : (
                            <RadioUnchecked className="cursor-pointer" />
                          )}
                        </label>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[15px] text-[13px] font-medium">
                <span>
                  <RoundedPlusNew />
                </span>
                New Account
              </div>
              <span>
                <ArrowRightSmall />
              </span>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div
              className="p-[16px] text-dark text-[13px] font-medium cursor-pointer  w-[48%]
            flex items-center justify-center rounded-[100px] bg-[#6470840A] leading-[18px]"
            >
              Edit
            </div>
            <div
              onClick={() => setAccountPopUp(true)}
              className=" p-[16px] text-white text-[13px] font-medium cursor-pointer  w-[48%]
            flex items-center justify-center rounded-[100px] gradientBg leading-[18px]"
            >
              Confirm
            </div>
          </div>
        </>
      )}

      {AccountPopUp && (
        <ReusableModal
          onClose={() => setAccountPopUp(false)}
          maxWidth="450px"
          maxHeight="520px"
          title=""
          body={
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col p-[30px]"
            >
              <div className="mb-[15px] flex justify-center items-center">
                <Image
                  src="/help-circle.png"
                  alt=" image"
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px]"
                />
              </div>
              <div className="mb-[28px]">
                <h2 className="text-center text-dark text-[21px] leading-[26px] font-bold mb-[10px]">
                  Is this the right account?
                </h2>
                <span className="block text-[#12071366] text-center text-[13px]">
                  Some text here?
                </span>
              </div>
              <div className="rounded-[20px] bg-[#6470840A] p-[20px_16px] mb-[18spx]">
                {withDrawDetails.map((detail) => (
                  <div
                    key={detail.id}
                    className="flex items-center justify-between mb-[18px]"
                  >
                    <span className="block text-[#12071366] leading-[18px]">
                      {detail.title}
                    </span>
                    <span className="block text-[dark] text-[15px] font-medium leading-[18px]">
                      {detail.company}
                    </span>
                  </div>
                ))}
              </div>
              <div className="py-[18px]">
                <div
                  className="p-[16px] text-dark text-[13px] font-medium cursor-pointer  w-full mb-[18px]
                   flex items-center justify-center rounded-[100px] bg-[#6470840A] leading-[18px]"
                >
                  Change account details
                </div>
                <div
                  onClick={() => {
                    setWithDrawMoneyStep2(true);
                    setAccountPopUp(false);
                  }}
                  className="p-[16px] text-white text-[13px] font-medium cursor-pointer 
                    flex items-center justify-center rounded-[100px] gradientBg leading-[18px]"
                >
                  Confirm
                </div>
              </div>
            </div>
          }
        />
      )}

      {processingPopUp && (
        <ReusableModal
          onClose={() => setProcessingPopUp(false)}
          maxWidth="450px"
          maxHeight="263px"
          title=""
          body={
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col p-[30px]"
            >
              <div className="mb-[15px] flex justify-center items-center">
                <Image
                  src="/circle-loader.png"
                  alt=" image"
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px]"
                />
              </div>
              <div className="mb-[28px]">
                <h2 className="text-center text-dark text-[21px] leading-[26px] font-bold mb-[10px]">
                  Processing
                </h2>
                <span className="block text-[#12071366] text-center text-[13px]">
                  As faaast as we can
                </span>
              </div>

              <div
                onClick={() => {
                  setSuccessPopUp(true);
                  setProcessingPopUp(false);
                }}
                className="mx-[34px] p-[16px] text-white text-[13px] font-medium cursor-pointer 
                    flex items-center justify-center rounded-[100px] gradientBg leading-[18px]"
              >
                Finish
              </div>
            </div>
          }
        />
      )}

      {successPopUp && (
        <ReusableModal
          onClose={() => setSuccessPopUp(false)}
          maxWidth="450px"
          maxHeight="380px"
          title=""
          body={
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col p-[30px]"
            >
              <div className="mb-[15px] flex justify-center items-center">
                <Image
                  src="/check-circle.png"
                  alt=" image"
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px]"
                />
              </div>
              <div className="mb-[28px]">
                <h2 className="text-center text-dark text-[21px] leading-[26px] font-bold mb-[10px]">
                  Success!
                </h2>
                <span className="block text-[#12071366] text-center text-[13px] px-[] mb-[22px]">
                  The money is soon in your account. Remember that it’s your own
                  responsibility to report taxes 🙏
                </span>
                <span className="block text-[#12071366] text-center text-[13px]">
                  Learn more about tax{" "}
                  <b className="inline-block text-dark">here.</b>
                </span>
              </div>
              <div
                onClick={() => {
                  setWithDrawMoneyStep2(false);
                }}
                className="p-[16px] text-dark text-[13px] font-medium cursor-pointer  w-full mb-[15px]
                flex items-center justify-center rounded-[100px] bg-[#6470840A] leading-[18px]"
              >
                Finish
              </div>

              <div
                onClick={() => {
                  setSuccessPopUp(false);
                }}
                className=" p-[16px] text-white text-[13px] font-medium cursor-pointer 
                    flex items-center justify-center rounded-[100px] gradientBg leading-[18px]"
              >
                Create review
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};

export default WithdrawMoney;
