import Link from "next/link"
import { Contacts, DealFlow, Finance, Minus, Plugins, Plus } from "../ui-icons"



const navLinks = [
    {
        id: 1,
        name: "Dealflow",
        icon: <DealFlow />,
        href: "/"
    },
    {
        id: 2,
        name: "Invoice",
        icon: <Plus />,
        href: "invoice"
    },
    {
        id: 3,
        name: "Pay",
        icon: <Minus />,
        href: "pay"

    },
    {
        id: 4,
        name: "Financing",
        icon: <Finance />,
        href: ""

    },
    {
        id: 5,
        name: "Contacts",
        icon: <Contacts />,
        href: ""
    },
    {
        id: 6,
        name: "Plugins",
        icon: <Plugins />,
        href: ""
    },
]
export default function Sidebar() {


    return (
        <div className="p-[20px] border-r-[1px] border-[#647084]">
            <ul className="flex flex-col gap-8">
                {navLinks.map((link => (
                    <li key={link.id} className="text-[#120713] text-[13px]">
                        <Link href={link.href}
                        className="flex items-center gap-3"
                        >
                            {link.icon}
                            {link.name}
                        </Link>
                    </li>
                )))
                }
            </ul>
        </div>
    )
}