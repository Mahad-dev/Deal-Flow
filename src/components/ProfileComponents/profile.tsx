import Image from "next/image";
import { Graph, RoundedInfo, RoundedRightArrow, Thunder } from "../ui-icons";
import CompanyDetailsForm from "./ProfileForm";
import Link from "next/link";

export default function Profile() {
  return (
    <section>
      <div className="flex flex-col xl:flex-row  xl:justify-between gap-[20px]">
        <div
          className="xl:w-[49%] shadow-[rgba(0,0,0,0.1)_0px_10px_50px] rounded-[20px]
                bg-white"
        >
          <div className="p-[16px_16px_8px_16px]  xl:p-[32px_32px_16px_32px] flex items-center justify-between">
            <h2 className="text-[18px] xl:text-[21px]  font-bold text-dark">
              Your profile score
            </h2>
            <Link href="profile/profileScore">
              <RoundedRightArrow />
            </Link>
          </div>
          <div className="pt-0 m-[8px_16px] xl:m-[16px_32px_32px_32px] rounded-[20px] overflow-hidden">
            <div className="p-[16px] 2xl:p-[24px] bg-[#6470840A] border-b-[1px] border-solid border-white">
              <div className="flex items-center justify-between gap-[15px]">
                <div className="flex gap-[4px] max-w-[70%] items-center">
                  <span className="block text-[14px] 2xl:text-[21px] font-normal truncate text-dark">
                    Instant payout without confirmation
                  </span>
                  <Thunder />
                </div>
                <div className="flex gap-[4px] items-center text-dark">
                  <span className="font-semibold text-[14px] 2xl:text-[21px] block truncate text-dark">
                    {" "}
                    1 - 7 days
                  </span>
                  <RoundedInfo />
                </div>
              </div>
            </div>
            <div className="bg-[#6470840A] p-[40px_20px] xl:p-[80px_60px] flex justify-center items-center">
              <Graph />
            </div>
          </div>
        </div>
        <div className="xl:w-[49%] shadow-[rgba(0,0,0,0.1)_0px_10px_50px] rounded-[20px] bg-white">
          <div
            className="p-[16px_16px_8px_16px]  xl:p-[32px_32px_16px_32px] 2xl:p-[32px_32px_24px_32px]
               flex items-center justify-between"
          >
            <h2 className="text-[18px] xl:text-[21px]  font-bold flex items-center gap-[14px] xl:gap-[28px]">
              <Image
                src="/rounded-gradient.svg"
                alt=" image"
                width={24}
                height={24}
              />
              Company details
            </h2>
            <div className="flex items-center gap-[10px]">
              {" "}
              <span
                className="inline-block p-[10px_8px] bg-[#C778D10A]  font-medium text-[#C655CE] uppercase
                   leading-[1.3] rounded-[100px] text-[0.75rem]  bg-dark-7"
              >
                Verified
              </span>
              <RoundedRightArrow />
            </div>
          </div>
          <CompanyDetailsForm />
        </div>
      </div>
    </section>
  );
}
