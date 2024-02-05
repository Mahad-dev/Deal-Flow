"use client";
import {
  RoundedPlus,
  RoundedWithDraw,
  MoreItemsDots,
  ArrowRightSmall,
  RoundedRightArrow,
  UncheckedState,
  CheckedState,
  RoundedCrossNew,
} from "@/components/ui-icons";
import React, { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WithdrawMoney from "@/components/WithdrawMoney";

const scoreData = [
  {
    title: "Invoice 01",
    company: "Company",

    totalCash: "+ 35,257.66 €",
    paymentStatus: "Paid",
  },
  {
    title: "ID verified",
    company: "Company",
    totalCash: "+ 106,725.00 €",
    paymentStatus: "Waiting for client",
  },
  {
    title: "Title",
    company: "Company",
    totalCash: "+ 10.00 €",
    paymentStatus: "Reclaimed",
  },
  {
    title: "ID verified",
    company: "Company",
    totalCash: "+ 106,725.00 €",
    paymentStatus: "Waiting for client",
  },
  {
    title: "Invoice 01",
    company: "Company",

    totalCash: "+ 35,257.66 €",
    paymentStatus: "Paid",
  },
  {
    title: "Invoice 01",
    company: "Company",

    totalCash: "+ 35,257.66 €",
    paymentStatus: "Paid",
  },
];

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
];

interface InvoiceItem {
  id: string;
  title: string;
  company: string;
  paymentStatus: string;
  totalCash: string;
}

const Invoice = () => {
  const [selectInvoice, setSelectInvoice] = useState(false);
  const [withDraw, setWithDraw] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleDivClick = (id: string, item: InvoiceItem) => {
    handleCheckboxChange(id, item);
  };
  const handleCheckboxChange = (id: string, item: InvoiceItem) => {
    const updatedSelectedItems = [...selectedItems];
    if (updatedSelectedItems.includes(id)) {
      // Item is already selected, remove it
      updatedSelectedItems.splice(updatedSelectedItems.indexOf(id), 1);
    } else {
      // Item is not selected, add it
      updatedSelectedItems.push(id);
    }
    setSelectedItems(updatedSelectedItems);
    console.log("Selected Items:", updatedSelectedItems);
  };

  return (
    <>
      <header className="p-[20px_40px] flex justify-between items-center">
        <h1 className="text-[24px] xl:text-[27px] leading-[150%] font-bold mb-0">
          Home
        </h1>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.125 23.1667C17.125 19.8299 19.8299 17.125 23.1667 17.125C26.5034 17.125 29.2083 19.8299 29.2083 23.1667C29.2083 24.8004 28.5599 26.2827 27.5063 27.3702C27.4807 27.3889 27.4561 27.4099 27.433 27.4331C27.4098 27.4562 27.3889 27.4807 27.3701 27.5064C26.2826 28.5599 24.8004 29.2083 23.1667 29.2083C19.8299 29.2083 17.125 26.5034 17.125 23.1667ZM27.8618 28.7458C26.5933 29.8144 24.9552 30.4583 23.1667 30.4583C19.1396 30.4583 15.875 27.1937 15.875 23.1667C15.875 19.1396 19.1396 15.875 23.1667 15.875C27.1937 15.875 30.4583 19.1396 30.4583 23.1667C30.4583 24.9552 29.8144 26.5934 28.7457 27.8619L31.9419 31.0581C32.1859 31.3021 32.1859 31.6979 31.9419 31.9419C31.6978 32.186 31.3021 32.186 31.058 31.9419L27.8618 28.7458Z"
              fill="#120713"
            />
          </svg>
        </span>
      </header>
      <main className="p-[0_40px]">
        <section>
          <div className="flex  justify-center flex-wrap gap-[10px] xl:gap-[20px] mb-[34px]">
            <div className="max-w-[550px] w-full relative">
              <div
                className="bg-[url('/bg-gradient.jpeg')] bg-no-repeat bg-cover bg-center
                 flex justify-center flex-col items-center pt-[40px] pb-[30px]
                  rounded-tr-[20px] rounded-tl-[20px]"
              >
                <span className="block text-white font-medium text-[15px] leading-[21px] mb-[6px]">
                  Main · EUR
                </span>
                <span className="block text-white font-bold text-[38px] leading-[46px] mb-[12px]">
                  200.87€
                </span>
                <div>
                  <span
                    className=" bg-[#c573db] rounded-[12px] p-[12px_16px] flex items-center  justify-center
                     font-medium text-[13px] leading-[18px] text-white max-w-[100px] w-full"
                  >
                    Accounts
                  </span>
                </div>
                <div className="flex items-center gap-[48px] py-[24px]">
                  <div className="flex flex-col items-center gap-[6px]">
                    <RoundedPlus />
                    <span className="block text-[12px] text-white leading-[14px]">
                      New Invoice
                    </span>
                  </div>
                  <div
                    onClick={() => setSelectInvoice(true)}
                    className="flex flex-col items-center gap-[6px] cursor-pointer"
                  >
                    <RoundedWithDraw />
                    <span className="block text-[12px] text-white leading-[14px]">
                      Withdraw
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-[6px]">
                    <MoreItemsDots />
                    <span className="block text-[12px] text-white leading-[14px]">
                      More
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="bg-white w-full shadow-[1px_10px_11px_0px_rgba(38,38,38,0.06)]
                 min-h-[500px] rounded-[20px] mt-[-20px] p-[20px_40px]"
              >
                <div>
                  <Tabs defaultValue="allInvoices" className="">
                    <TabsList className="w-full bg-[#6470840A] tabsWrapper h-auto p-[4px] rounded-[20px] mb-[24px]">
                      <TabsTrigger
                        className="w-[49%] data-[state=active]:bg-white data-[state=active]:text-dark  py-[10px] rounded-[12px]
                        text-[#12071366]"
                        value="allInvoices"
                      >
                        All
                      </TabsTrigger>
                      <TabsTrigger
                        className="w-[49%] data-[state=active]:bg-white data-[state=active]:text-dark py-[10px] rounded-[12px]
                         text-[#12071366]"
                        value="RecuringInvoices"
                      >
                        Recurring
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="allInvoices">
                      {scoreData.map((item, index) => (
                        <div
                          key={index}
                          className="p-[16px] rounded-[18px]  mb-[6px]"
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
                                <span className="inline-block text-[#12071366] text-[13px] leading-[17.5px]">
                                  {item.company}
                                </span>
                              </div>
                              <div className="flex items-center gap-[14px]">
                                <span
                                  className={`bg-[#08856E0A] text-gareen p-[8px] text-[12px] rounded-[10px] font-medium
                                ${
                                  item.paymentStatus === "Waiting for client" &&
                                  "bg-[#E562250A] text-warning"
                                }`}
                                >
                                  {item.paymentStatus}
                                </span>
                                <span className="block text-[13px] leading-[17px] text-[#12071366]">
                                  {item.totalCash}
                                </span>
                                <span>
                                  <ArrowRightSmall />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="RecuringInvoices">
                      {scoreData.map((item, index) => (
                        <div
                          key={index}
                          className="p-[16px] rounded-[18px]  mb-[6px]"
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
                                <span className="inline-block text-[#12071366] text-[13px] leading-[17.5px]">
                                  {item.company}
                                </span>
                              </div>
                              <div className="flex items-center gap-[14px]">
                                <span
                                  className={`bg-[#08856E0A] text-gareen p-[8px] text-[12px] rounded-[10px] font-medium
                                ${
                                  item.paymentStatus === "Waiting for client" &&
                                  "bg-[#E562250A] text-warning"
                                }`}
                                >
                                  {item.paymentStatus}
                                </span>
                                <span className="block text-[13px] leading-[17px] text-[#12071366]">
                                  {item.totalCash}
                                </span>
                                <span>
                                  <ArrowRightSmall />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
              {selectInvoice && (
                <div
                  className="bg-white w-full shadow-[1px_10px_11px_0px_rgba(38,38,38,0.06)]
                 min-h-[500px] rounded-[20px] mt-[-20px] pt-[40px] pb-[20px]
                 absolute bottom-0 left-0 transition-all duration-[linear] delay-[0.3s]"
                >
                  <div className="px-[28px] mb-[30px] flex items-center justify-between">
                    <h2 className="text-[18px] xl:text-[21px]  font-bold text-dark">
                      Select invoices
                    </h2>
                    <span
                      className="cursor-pointer"
                      onClick={() => setSelectInvoice(false)}
                    >
                      <RoundedCrossNew />
                    </span>
                  </div>
                  <div className="px-[40px]">
                    {selectInvoicesRecord.map((item, index) => (
                      <div
                        key={index}
                        id={`"${item.id}"`}
                        onClick={() => handleDivClick(item.id, item)}
                        className={`p-[16px] rounded-[18px]  mb-[6px] hover:bg-[#6470840A] cursor-pointer ${
                          selectedItems.includes(item.id)
                            ? "bg-[#6470840A]"
                            : ""
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
                              <span className="inline-block text-[#12071366] text-[13px] leading-[17.5px]">
                                {item.company}
                              </span>
                            </div>
                            <div className="flex items-center gap-[14px]">
                              <span
                                className={`bg-[#08856E0A] text-gareen p-[8px] text-[12px] rounded-[10px] font-medium
                                ${
                                  item.paymentStatus === "Waiting for client" &&
                                  "bg-[#E562250A] text-warning"
                                }`}
                              >
                                {item.paymentStatus}
                              </span>
                              <span className="block text-[13px] leading-[17px] text-[#12071366]">
                                {item.totalCash}
                              </span>
                              <span className="relative h-[16px] w-[16px]">
                                <input
                                  type="checkbox"
                                  id={`checkbox-${item.id}`}
                                  onChange={() =>
                                    handleCheckboxChange(item.id, item)
                                  }
                                  checked={selectedItems.includes(item.id)}
                                  className="absolute top-0 left-0 w-[16px] h-[16px] inline-block opacity-0"
                                />
                                <label
                                  htmlFor={`checkbox-${item.id}`}
                                  className="checkbox-label flex items-center justify-center rounded-[6px]
                                   w-[16px] h-[16px]  transition duration-300 ease-in-out "
                                >
                                  {selectedItems.includes(item.id) ? (
                                    <CheckedState className="cursor-pointer" />
                                  ) : (
                                    <UncheckedState className="cursor-pointer" />
                                  )}
                                </label>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    onClick={() => setWithDraw(true)}
                    className="mx-[34px] p-[16px] text-white text-[13px] font-medium cursor-pointer 
                    flex items-center justify-center rounded-[100px] gradientBg leading-[18px]"
                  >
                    Confirm
                  </div>
                </div>
              )}
            </div>
            {withDraw && <WithdrawMoney />}
          </div>
        </section>
      </main>
    </>
  );
};

export default Invoice;
