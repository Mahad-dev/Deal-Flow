import { DealFlow, Finance, Minus, Plus } from "../ui-icons"

export default function Sidebar() {

    const navLinks = [
        {
            id: 1,
            name: "Dealflow",
            icon: <DealFlow />
        },
        {
            id: 2,
            name: "Invoice",
            icon: <Plus />
        },
        {
            id: 3,
            name: "Pay",
            icon: <Minus />
        },
        {
            id: 4,
            name: "Financing",
            icon: <Finance />
        },
        {
            id: 5,
            name: "Contacts",
            icon: <Finance />
        },
        {
            id: 6,
            name: "Plugins",
            icon: <Finance />
        },
    ]
    return (
        <div className="p-[20px] border-r-[1px] border-[#647084]">
            <ul>
                {navLinks.map((link => (
                    <li key={link.id} className="flex items-center gap-3 text-[#120713] text-[13px]">
                        {link.icon}
                        {link.name}
                    </li>
                )))
                }
            </ul>
        </div>
    )
}