"use client"

import Image from "next/image";
import { HomeIcon, LogOutIcon, PlusIcon, ReceiptIcon, SettingsIcon, UserIcon } from "@/components/icons";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";



const NavItems = [

    {
        icon: HomeIcon, href: "/home", title: "Home",
    },
    {
        icon: ReceiptIcon, href: "/invoices", title: "Invoices"
    },
    {
        icon: PlusIcon, href: "/create-invoice", title: "Create Invoice"
    },
    {
        icon: LogOutIcon, title: "Logout", href: "//"
    },


]

export default function Sidebar() {
    const pathname = usePathname()
    const active = (href: string) => (pathname.startsWith(href) ? "text-blue-600" : "")

    return (
        <div className="fixed top-0 left-0 h-full w-56 bg-slate-100 text-white z-50 border-slate-200 border-x-2 scrollbar-none">
            <div className="flex items-center justify-center h-16 px-4 mt-10">
                <Image
                    src="https://cdn.theesports.club/TEC_Color_2.png"
                    width={100}
                    height={100}
                    alt="logo"
                />
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
                {NavItems.map((item, index) => {
                    return (
                        <div key={index} className="mt-10 w-full ml-20">
                            {item.title === "Logout" ? (
                                <div className="flex items-center space-x-2 cursor-pointer">
                                    <item.icon className={cn("size-8 text-black", active(item.href))} />
                                    <span className={cn("p-1 text-black")}>{item.title}</span>
                                </div>
                            ) : (
                                <Link href={item.href}>
                                    <div className="flex items-center space-x-2">
                                        <item.icon className={cn("size-8 text-black", active(item.href))} />
                                        <span className={cn("p-1 text-black", active(item.href))}>{item.title}</span>
                                    </div>
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>


        </div>

    )
}