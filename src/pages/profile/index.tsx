import CompanyDetailsForm from "@/components/ProfileComponents/ProfileForm";
import {
  Graph,
  Thunder,
  RoundedInfo,
  RoundedRightArrow,
} from "@/components/ui-icons";
import React from "react";
const navigationItems = [
  { id: 1, label: "General" },
  { id: 2, label: "Design studio" },
  { id: 3, label: "Team" },
  { id: 4, label: "Subscription" },
  { id: 5, label: "Billing & bank" },
  { id: 6, label: "Ambassador" },
];

const ProfileDetails = () => {
  return (
    <>
      <header className="p-[20px_40px] flex justify-between items-center">
        <h1 className="text-[24px] xl:text-[27px] leading-[150%] font-bold mb-0">
          Company profile
        </h1>
        <span>icon</span>
      </header>
      <main className="p-[0_40px]">
        <nav>
          <ul className="flex items-center gap-[12px] xl:gap-[24px] pb-8">
            {navigationItems.map((item) => (
              <li
                key={item.id}
                className="text-gray text-[14px] xl:text-[17px] 
                font-semibold first-of-type:text-dark "
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
        <section>
          <div className="flex flex-col xl:flex-row  gap-[20px]">
            <div
              className="xl:w-[49%] shadow-[rgba(0,0,0,0.1)_0px_10px_50px] rounded-[14px] overflow-hidden
            "
            >
              <div className="p-[16px_16px_8px_16px]  xl:p-[32px_32px_16px_32px] flex items-center justify-between">
                <h2 className="text-[18px] xl:text-[21px]  font-bold ">
                  Your profile score
                </h2>
                <RoundedRightArrow />
              </div>
              <div className="pt-0 p-[16px] xl:p-[32px] bg-[#f9f9fa]">
                <div className="p-[16px]">
                  <div className="flex items-center justify-between gap-[15px]">
                    <div className="flex gap-[4px] max-w-[70%] items-center">
                      <span className="block text-[14px] 2xl:text-[21px] font-normal truncate ">
                        Instant payout without confirmation
                      </span>
                      <Thunder />
                    </div>
                    <div className="flex gap-[4px] items-center">
                      <span className="font-semibold text-[14px] 2xl:text-[21px] block truncate">
                        {" "}
                        1 - 7 days
                      </span>
                      <RoundedInfo />
                    </div>
                  </div>
                </div>
                <div className="p-[40px_20px] xl:p-[80px_60px] flex justify-center items-center">
                  <Graph />
                </div>
              </div>
            </div>
            <div className="xl:w-[49%] shadow-[rgba(0,0,0,0.1)_0px_10px_50px] rounded-[14px]">
              <div className="p-[16px_16px_8px_16px]  xl:p-[32px_32px_16px_32px] 2xl:p-[32px_32px_24px_32px] flex items-center justify-between">
                <h2 className="text-[18px] xl:text-[21px]  font-bold ">
                  Company details
                </h2>
                <RoundedRightArrow />
              </div>
              <CompanyDetailsForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProfileDetails;
