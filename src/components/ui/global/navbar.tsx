"use client"
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="bg-bg fixed w-full top-0 left-0 z-[999] py-5">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                    <Link href="/">MiniCraft</Link>
                </div>

                <div className="hidden lg:flex gap-6 text-lg text-white font-semibold">
                    <Link href="/" className="hover:text-[#00bcd4] transition-all">Home</Link>
                    <Link href="/mini-projects" className="hover:text-[#00bcd4] transition-all">Projects</Link>
                    <Link href="/about" className="hover:text-[#00bcd4] transition-all">About</Link>
                    <Link href="/contact" className="hover:text-[#00bcd4] transition-all">Contact</Link>
                </div>
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div
                    onClick={closeMenu}
                    className="lg:hidden absolute top-0 left-0 w-full h-screen bg-[#111E] flex flex-col items-center justify-center text-white font-semibold space-y-5 py-10"
                >
                    <div className="absolute top-5 right-5 text-white cursor-pointer" onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <Link href="/" className="hover:text-[#00bcd4] transition-all" onClick={closeMenu}>Home</Link>
                    <Link href="/mini-projects" className="hover:text-[#00bcd4] transition-all" onClick={closeMenu}>Projects</Link>
                    <Link href="/about" className="hover:text-[#00bcd4] transition-all" onClick={closeMenu}>About</Link>
                    <Link href="/contact" className="hover:text-[#00bcd4] transition-all" onClick={closeMenu}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
