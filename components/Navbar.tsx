"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [desktopOpen, setDesktopOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const closeTimeout = useRef<NodeJS.Timeout | null>(null);

    /* ---------- scroll background ---------- */
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* ---------- close on scroll (desktop) ---------- */
    useEffect(() => {
        if (!desktopOpen) return;
        const close = () => setDesktopOpen(false);
        window.addEventListener("scroll", close, { passive: true });
        return () => window.removeEventListener("scroll", close);
    }, [desktopOpen]);

    /* ---------- lock scroll on mobile ---------- */
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    /* ---------- hover helpers ---------- */
    const openDesktop = () => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        setDesktopOpen(true);
    };

    const closeDesktopWithDelay = () => {
        closeTimeout.current = setTimeout(() => {
            setDesktopOpen(false);
        }, 120); // human-friendly delay
    };

    return (
        <nav
            className={`
                sticky top-0 z-50 border-b transition-colors duration-300
                ${isScrolled ? "bg-white" : "bg-transparent"}
            `}
        >
            {/* NAV BAR */}
            <div className="flex items-center justify-between px-6 py-3">

                {/* LEFT */}
                <div className="flex items-center gap-12">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Logo" width={60} height={15} />
                        <Image src="/icons/shuttlecock.svg" alt="Home" width={24} height={24} />
                    </Link>

                    {/* DESKTOP TRIGGERS */}
                    <div
                        className="hidden md:flex items-center gap-8 font-medium"
                        onMouseEnter={openDesktop}
                        onMouseLeave={closeDesktopWithDelay}
                    >
                        <span className="cursor-pointer hover:text-blue-600 transition">
                            Programs
                        </span>
                        <span className="cursor-pointer hover:text-blue-600 transition">
                            Services
                        </span>
                        <span className="cursor-pointer hover:text-blue-600 transition">
                            Community
                        </span>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-6">
                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="md:hidden rounded-md p-2 hover:bg-gray-100"
                        aria-label="Open menu"
                    >
                        <Image src="/icons/menu.svg" alt="Menu" width={24} height={24} />
                    </button>

                    {/* Profile */}
                    <Link href="/placeholder.jpg">
                        <Image
                            src="/icons/menu.svg"
                            alt="Profile"
                            width={36}
                            height={36}
                            className="rounded-full hover:opacity-80 transition"
                        />
                    </Link>
                </div>
            </div>

            {/* DESKTOP DROPDOWN — STABLE + CLICKABLE */}
            <div
                onMouseEnter={openDesktop}
                onMouseLeave={closeDesktopWithDelay}
                className={`
                    absolute left-0 right-0 top-full
                    bg-white border-t border-gray-200 shadow-lg
                    transition-all duration-300 ease-out
                    ${desktopOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"}
                `}
            >
                <div className="mx-auto max-w-7xl px-8 py-8 grid grid-cols-2 gap-10">

                    {/* LEFT: routes */}
                    <div className="grid grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-semibold mb-2">Programs</h4>
                            <Link href="/lessons" className="block py-1 hover:text-blue-600">Lessons</Link>
                            <Link href="/camps" className="block py-1 hover:text-blue-600">Camps</Link>
                            <Link href="/drop-in" className="block py-1 hover:text-blue-600">Drop In</Link>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Services</h4>
                            <Link href="/services" className="block py-1 hover:text-blue-600">Services</Link>
                            <Link href="/services/stringing" className="block py-1 hover:text-blue-600">
                                Stringing
                            </Link>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Community</h4>
                            <Link href="/community" className="block py-1 hover:text-blue-600">Community</Link>
                            <Link href="/news" className="block py-1 hover:text-blue-600">News</Link>
                            <Link href="/contact" className="block py-1 hover:text-blue-600">Contact</Link>
                        </div>
                    </div>

                    {/* RIGHT: info */}
                    <div className="rounded-lg bg-gray-50 p-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold mb-2">Join the Club</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            All ages and skill levels welcome. Train, compete,
                            and grow with our badminton community.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block self-start rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 transition"
                        >
                            Get in touch
                        </Link>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 bg-white px-6 py-8 md:hidden overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-semibold text-lg">Menu</span>
                        <button onClick={() => setMobileOpen(false)}>✕</button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold mb-2">Programs</h4>
                            <Link href="/lessons" className="block py-1">Lessons</Link>
                            <Link href="/camps" className="block py-1">Camps</Link>
                            <Link href="/drop-in" className="block py-1">Drop In</Link>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Services</h4>
                            <Link href="/services" className="block py-1">Services</Link>
                            <Link href="/services/stringing" className="block py-1">Stringing</Link>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Community</h4>
                            <Link href="/community" className="block py-1">Community</Link>
                            <Link href="/news" className="block py-1">News</Link>
                            <Link href="/contact" className="block py-1">Contact</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
