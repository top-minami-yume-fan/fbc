"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={
                `
                sticky top-0 z-50 flex items-center justify-between 
                px-6 py-3 border-b transition-colors duration-300 
                ${isScrolled ? "bg-white" : "bg-transparent"}
                `
        }>
            <div className="flex items-center gap-2">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={60}
                    height={15}
                    className="w-auto h-auto"
                />
                <Link href="/" className="hover:opacity-70 transition">
                    <Image
                        src="/icons/shuttlecock.svg"
                        alt="Home"
                        width={24}
                        height={24}
                    />
                </Link>
            </div>

            <div className="relative">
                <button onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100"
                >
                    <Image
                        src="/icons/menu.svg"
                        alt="Menu Icon"
                        width={20}
                        height={20}
                    />
                    <span className={`transition ${open ? "rotate-180" : ""}`}>▾</span>
                </button>

                {open && (
                    <div className="fixed left-0 right-0 top-12.25 w-full bg-white shadow-xl border-b border-gray-100 animate-in fade-in duration-200">
                        <div className="flex flex-col px-6 py-4">
                            <Link href="/" className="py-3 hover:text-blue-600 transition-colors">Lessons</Link>
                            <Link href="/lessons" className="py-3 hover:text-blue-600 transition-colors">Camps</Link>
                            <Link href="/camps" className="py-3 hover:text-blue-600 transition-colors">Drop In</Link>
                            <Link href="/drop-in" className="py-3 hover:text-blue-600 transition-colors">Services</Link>
                            <Link href="/services" className="py-3 hover:text-blue-600 transition-colors">Community</Link>
                            <Link href="/community" className="py-3 hover:text-blue-600 transition-colors">Contact</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}