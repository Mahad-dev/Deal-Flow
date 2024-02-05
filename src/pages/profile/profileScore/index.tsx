import {
  RoundedRightArrow,
  Thunder,
  RoundedInfo,
  Graph,
  CorrectTick,
} from "@/components/ui-icons";
import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const scoreData = [
  {
    title: "5 payments collected",
    points: "+ 100 points",
    description: "Description for the first item goes here",
  },
  {
    title: "ID verified",
    points: "+ 20 points",
    description: "Description for the second item goes here",
  },
  {
    title: "Title",
    points: "+ 20 points",
    description: "Description for the third item goes here",
  },
];
const scoreDataNext = [
  {
    title: "5 more to  collect",
    points: "+ 100 points",
    description: "Description for the first item goes here",
  },

  {
    title: "Title",
    points: "+ 20 points",
    description: "Description for the third item goes here",
  },
];

const ProfileScore = () => {
  return (
    <>
      <header className="p-[20px_40px] flex justify-between items-center">
        <h1 className="text-dark text-[24px] xl:text-[27px] leading-[150%] font-bold mb-0 flex items-center gap-[10px]">
          <Link href="/profile">
            {" "}
            <RoundedRightArrow className="rotate-180" />{" "}
          </Link>{" "}
          Profile score
        </h1>
        <span>icon</span>
      </header>
      <main>
        <section>
          <div className="flex justify-center items-center mb-[34px]">
            <div
              className="max-w-[550px] shadow-[rgba(0,0,0,0.1)_0px_10px_50px]  rounded-[20px] overflow-hidden
            "
            >
              <div className="p-[16px_16px_8px_16px]  xl:p-[32px_32px_16px_32px] flex items-center justify-between">
                <h2 className="text-[18px] xl:text-[21px]  font-bold ">
                  Your score
                </h2>
              </div>
              <div className="pt-0 p-[16px] xl:p-[32px]">
                <div className="mb-[24px] rounded-[20px] overflow-hidden">
                  <div className="p-[16px] 2xl:p-[24px] bg-[#6470840A] border-b-[1px] border-solid border-white">
                    <div className="flex items-center justify-between gap-[15px]">
                      <div className="flex gap-[4px] max-w-[70%] items-center">
                        <span className="block text-[14px] 2xl:text-[15px] font-normal truncate text-dark">
                          Instant payout without confirmation
                        </span>
                        <Thunder />
                      </div>
                      <div className="flex gap-[4px] items-center">
                        <span className="text-dark font-semibold text-[14px] 2xl:text-[15px] block truncate">
                          {" "}
                          1 - 7 days
                        </span>
                        <RoundedInfo />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#6470840A] p-[40px_20px] xl:p-[80px_60px] flex justify-center items-center ">
                    <Graph />
                  </div>
                </div>
                <div>
                  <Tabs defaultValue="milestone" className="">
                    <TabsList className="w-full bg-[#6470840A] tabsWrapper h-auto p-[4px] rounded-[20px] mb-[24px]">
                      <TabsTrigger
                        className="w-[49%] data-[state=active]:bg-white data-[state=active]:text-dark  py-[10px] rounded-[12px]
                        text-[#12071366]"
                        value="milestone"
                      >
                        Your milestones
                      </TabsTrigger>
                      <TabsTrigger
                        className="w-[49%] data-[state=active]:bg-white data-[state=active]:text-dark py-[10px] rounded-[12px]
                         text-[#12071366]"
                        value="nextMileStone"
                      >
                        Next
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="milestone">
                      {scoreData.map((item, index) => (
                        <div
                          key={index}
                          className="p-[16px] rounded-[18px] bg-[#6470840A] mb-[15px]"
                        >
                          <div className="flex items-center gap-[12px]">
                            <span>
                              <CorrectTick />
                            </span>
                            <div className="w-full">
                              <div className="flex items-center justify-between w-full leading-[18px]">
                                <h3 className="text-[#120713] text-[13px] font-medium mb-[2px]">
                                  {item.title}
                                </h3>
                                <span className="inline-block text-[#12071366] leading-[17.5px]">
                                  {item.points}
                                </span>
                              </div>
                              <span className="block text-[13px] leading-[17px] text-[#12071366]">
                                {item.description}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="nextMileStone">
                      {scoreDataNext.map((item, index) => (
                        <div
                          key={index}
                          className="p-[16px] rounded-[18px] bg-[#6470840A] mb-[15px]"
                        >
                          <div className="flex items-center gap-[12px]">
                            <span>
                              <CorrectTick />
                            </span>
                            <div className="w-full">
                              <div className="flex items-center justify-between w-full leading-[18px]">
                                <h3 className="text-[#120713] text-[13px] font-medium mb-[2px]">
                                  {item.title}
                                </h3>
                                <span className="inline-block text-[#12071366] leading-[17.5px]">
                                  {item.points}
                                </span>
                              </div>
                              <span className="block text-[13px] leading-[17px] text-[#12071366]">
                                {item.description}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProfileScore;
