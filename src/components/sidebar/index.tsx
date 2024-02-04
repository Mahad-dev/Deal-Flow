import Link from "next/link";
import {
  ArrowRight,
  Chat,
  Contacts,
  DealFlow,
  Finance,
  Minus,
  Notifications,
  Plugins,
  Plus,
  Profile,
} from "../ui-icons";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  {
    id: 1,
    name: "Dealflow",
    icon: <DealFlow />,
    href: "/",
    arrow: true,
  },
  {
    id: 2,
    name: "Invoice",
    icon: <Plus />,
    href: "/invoice",
    badge: "active"
  },
  {
    id: 3,
    name: "Pay",
    icon: <Minus />,
    href: "/pay",
    badge: "New",
  },
  {
    id: 4,
    name: "Financing",
    icon: <Finance />,
    href: "/financing",
  },
  {
    id: 5,
    name: "Contacts",
    icon: <Contacts />,
    href: "/contacts",
  },
  {
    id: 6,
    name: "Plugins",
    icon: <Plugins />,
    href: "plugins",
  },
  {
    id: 7,
    name: "Chat",
    icon: <Chat />,
    href: "chat",
  },
  {
    id: 8,
    name: "Notifications",
    icon: <Notifications />,
    href: "notifications",
    badge: "active"
  },
  {
    id: 9,
    name: "User",
    icon: <Profile />,
    href: "profile",
    arrow: "true"
  },
];
export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="px-[20px] py-[25px] border-r-[1px] border-[#64708421]">
      <ul className="flex flex-col gap-3 h-full">
        {navLinks.map((link) => (
          <>
            <li
              key={link.id}
              className={`text-[#12071366] text-[13px] font-medium
                        ${link.name === "Chat" && "mt-auto"}`}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-3 p-3
                                 ${
                                   pathname === link.href &&
                                   "text-[#120713] bg-[#6470840a] rounded-2xl"
                                 }`}
              >
                {React.cloneElement(link.icon, {
                  opacity: pathname === link.href ? "1" : "0.4",
                })}
                {link.name}
                {link?.badge && (
                  <span className={`text-[12px] w-[42px] h-[24px] rounded-xl flex items-center justify-center overflow-hidden ml-auto p-1 bg-[#6470840a] text-[#C655CE] ${link.badge === 'active' && 'w-[4px] h-[4px] rounded-full bg-[#C655CE]'}`}>
                    New
                  </span>
                )}
                {link?.arrow && (
                  <span className="ml-auto">
                    <ArrowRight />
                  </span>
                )}
              </Link>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
