import Studio from "@/components/ProfileComponents/Studio";
import Profile from "@/components/ProfileComponents/profile";

import React, { useState } from "react";

const navigationItems = [
  { id: 1, label: "General" },
  { id: 2, label: "Design studio" },
  { id: 3, label: "Team" },
  { id: 4, label: "Subscription" },
  { id: 5, label: "Billing & bank" },
  { id: 6, label: "Ambassador" },
];

const ProfileDetails = () => {
  const [componentIndex, setComponentIndex] = useState(1);
  return (
    <>
      <header className="p-[20px_40px] flex justify-between items-center">
        <h1 className="text-[24px] xl:text-[27px] leading-[150%] font-bold mb-0">
          Company profile
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
        <nav>
          <ul className="flex items-center gap-[12px] xl:gap-[24px] pb-8">
            {navigationItems.map((item) => (
              <li
                key={item.id}
                onClick={() => setComponentIndex(item.id)}
                className={`text-gray text-[14px] xl:text-[17px] cursor-pointer
                font-semibold ${componentIndex === item.id && "!text-dark"}`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
        {componentIndex === 1 && <Profile />}
        {componentIndex === 2 && <Studio />}
        {componentIndex !== 1 && componentIndex !== 2 && <h1>Comming Soon</h1>}
      </main>
    </>
  );
};

export default ProfileDetails;
