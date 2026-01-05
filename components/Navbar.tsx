"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between px-6 py-4 border-b bg-white">
            <div className="text-xl font-semibold">                
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={80}
                    height={20} 
                />
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
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                        <a href="/" className="block px-4 py-2 hover:bg-gray-100">Home</a>
                        <a href="/lessons" className="block px-4 py-2 hover:bg-gray-100">Lessons</a>
                        <a href="/camps" className="block px-4 py-2 hover:bg-gray-100">Camps</a>
                        <a href="/drop-in" className="block px-4 py-2 hover:bg-gray-100">Drop In</a>
                        <a href="/services" className="block px-4 py-2 hover:bg-gray-100">Services</a>
                        <a href="/community" className="block px-4 py-2 hover:bg-gray-100">Community</a>
                    </div>
                )}
            </div>
        </nav>
    );
}