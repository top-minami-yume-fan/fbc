"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuCategories = [
        {
            header: "Home",
            items: ["Home"],
        },
        {
            header: "Programs",
            items: ["Lessons", "Camps", "Drop In", "Services"],
        },
        {
            header: "Community",
            items: ["Community", "Contact"],
        },
    ];

    return (
        <nav
            className={`sticky top-0 z-50 transition-colors duration-300 border-b ${isScrolled ? "bg-white" : "bg-transparent"
                }`}
        >
            {/* Top row: logo + hamburger */}
            <div className="flex items-center justify-between px-6 py-3 relative">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Logo" width={60} height={15} />
                    <Link href="/">
                        <Image src="/icons/shuttlecock.svg" alt="Home" width={24} height={24} />
                    </Link>
                </div>

                {/* Hamburger always visible */}
                <button
                    className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100"
                    onClick={() => setOpen(!open)}
                >
                    <Image src="/icons/menu.svg" alt="Menu Icon" width={20} height={20} />
                    <span className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
                        ▾
                    </span>
                </button>

                {/* Animated dropdown overlay */}
                <div
                    className={
                        `
                            absolute left-0 top-full w-full bg-white shadow-lg border-t border-gray-200 z-50
                            transform transition-all duration-300 origin-top
                            ${open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}
                        `
                }>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-4">
                        {menuCategories.map((category) => (
                            <div key={category.header} className="flex flex-col">
                                <h4 className="font-semibold mb-2">{category.header}</h4>
                                {category.items.map((item) => (
                                    <Link
                                        key={item}
                                        href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                                        className="py-1 hover:text-blue-600 transition-colors"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
