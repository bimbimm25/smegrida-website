"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Download, Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import Image from 'next/image';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // State untuk mengontrol dropdown mana yang terbuka di versi mobile
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

    // Mendeteksi scroll untuk mengubah wujud Navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Struktur Data Navigasi Baru (dengan Dropdown)
    const navLinks = [
        { name: "Beranda", href: "/" },
        {
            name: "Tentang Kami",
            dropdown: [
                { name: "Profil Sekolah", href: "/profil" },
                { name: "Hubungan Industri", href: "/hubungan-industri" },
                { name: "Prestasi", href: "/prestasi" },
                { name: "Fasilitas", href: "/fasilitas" },
                { name: "Profil Guru", href: "/profil-guru" },
            ]
        },
        {
            name: "Program",
            dropdown: [
                { name: "Profil Jurusan", href: "/jurusan" },
                { name: "Ekstrakurikuler", href: "/ekstrakurikuler" },
                { name: "Sholat Dhuha Berjamaah", href: "/program-dhuha" },
            ]
        },
        { name: "Berita", href: "/berita" },
    ];

    const toggleMobileDropdown = (name: string) => {
        if (openMobileDropdown === name) {
            setOpenMobileDropdown(null);
        } else {
            setOpenMobileDropdown(name);
        }
    };

    return (
        <>
            {/* Container utama Navbar - Fixed di atas */}
            <header
                className={`fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-500 ease-in-out px-4 ${isScrolled ? "pt-4" : "pt-6"
                    }`}
            >
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`relative flex items-center justify-between w-full transition-all duration-500 ease-in-out ${isScrolled
                        ? "max-w-5xl bg-white/90 backdrop-blur-md shadow-xl shadow-sekolah-biru/10 border border-gray-200 rounded-full py-2 px-4 md:px-6"
                        : "max-w-6xl bg-transparent py-4 px-2 border-transparent rounded-none"
                        }`}
                >
                    {/* LOGO SEKOLAH & TEKS */}
                    <Link href="/" className="flex items-center gap-3 z-50 group cursor-pointer">
                        <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0 group-hover:scale-105 transition-transform">
                            <Image
                                src="/img/logo.png"
                                alt="Logo SMK PGRI 2"
                                fill
                                priority
                                className="object-contain"
                            />
                        </div>

                        <div className={`hidden sm:flex flex-col justify-center transition-colors duration-300 ${isScrolled ? 'text-sekolah-gelap' : 'text-black'}`}>
                            <span className="font-extrabold text-lg leading-none tracking-tight">
                                SMK PGRI 2
                            </span>
                            <span className="font-bold text-[11px] leading-tight tracking-widest mt-1">
                                SIDOARJO
                            </span>
                        </div>
                    </Link>

                    {/* MENU DESKTOP - Di tengah */}
                    <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => (
                            <li key={link.name} className="relative group">
                                {link.dropdown ? (
                                    // Item dengan Dropdown
                                    <div className={`flex items-center gap-1 font-semibold text-sm transition-all hover:text-sekolah-biru cursor-pointer py-2 ${isScrolled ? "text-slate-600" : "text-sekolah-gelap"}`}>
                                        {link.name}
                                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />

                                        {/* Kotak Dropdown Desktop */}
                                        <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-56 z-50">
                                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden flex flex-col">
                                                {link.dropdown.map((subItem, i) => (
                                                    <Link
                                                        key={i}
                                                        href={subItem.href}
                                                        className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-sekolah-biru hover:bg-slate-50 transition-colors"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // Item Biasa
                                    <Link
                                        href={link.href!}
                                        className={`font-semibold text-sm transition-all hover:text-sekolah-biru hover:-translate-y-0.5 inline-block py-2 ${isScrolled ? "text-slate-600" : "text-sekolah-gelap"}`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* TOMBOL UNDUH & HAMBURGER MENU (MOBILE) - Di pojok kanan */}
                    <div className="flex items-center gap-3 z-50">
                        <Link
                            href="/ppdb"
                            className="hidden md:flex items-center gap-2 bg-sekolah-kuning text-sekolah-gelap font-bold text-sm py-2.5 px-6 rounded-full hover:bg-sekolah-kuning/80 transition-all shadow-sm group"
                        >
                            Unduh Brosur
                            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                        </Link>

                        <button
                            className={`md:hidden p-2 rounded-full transition-colors ${isScrolled ? 'bg-slate-100' : 'bg-white shadow-sm'}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={20} className="text-sekolah-merah" /> : <Menu size={20} className="text-sekolah-gelap" />}
                        </button>
                    </div>
                </motion.nav>
            </header>

            {/* MENU MOBILE (MUNCUL SAAT TOMBOL HAMBURGER DIKLIK) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-start pt-28 pb-10 overflow-y-auto"
                    >
                        <ul className="flex flex-col items-center gap-4 w-full px-6">
                            {navLinks.map((link) => (
                                <li key={link.name} className="w-full">
                                    {link.dropdown ? (
                                        // Menu Mobile dengan Dropdown (Accordion)
                                        <div className="w-full flex flex-col items-center">
                                            <button
                                                onClick={() => toggleMobileDropdown(link.name)}
                                                className="flex items-center justify-between w-full text-xl font-bold text-sekolah-gelap p-4 border-b border-gray-100 hover:text-sekolah-biru"
                                            >
                                                {link.name}
                                                <ChevronDown
                                                    className={`w-5 h-5 transition-transform duration-300 ${openMobileDropdown === link.name ? "rotate-180 text-sekolah-biru" : "text-sekolah-kuning"}`}
                                                />
                                            </button>

                                            {/* Sub-menu mobile muncul mulus */}
                                            <AnimatePresence>
                                                {openMobileDropdown === link.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="w-full overflow-hidden flex flex-col items-center bg-slate-50 rounded-xl mt-2"
                                                    >
                                                        {link.dropdown.map((subItem, i) => (
                                                            <Link
                                                                key={i}
                                                                href={subItem.href}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="w-full text-center py-3 text-base font-semibold text-slate-600 border-b border-gray-100 last:border-0 hover:text-sekolah-biru"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        // Menu Mobile Biasa
                                        <Link
                                            href={link.href!}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="flex items-center justify-between w-full text-xl font-bold text-sekolah-gelap p-4 border-b border-gray-100 hover:text-sekolah-biru"
                                        >
                                            {link.name}
                                            <ChevronRight className="w-5 h-5 text-sekolah-kuning" />
                                        </Link>
                                    )}
                                </li>
                            ))}
                            <li className="mt-8 w-full">
                                <Link
                                    href="/ppdb"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 bg-sekolah-biru text-white font-bold text-lg py-4 px-10 rounded-full w-full"
                                >
                                    Daftar PPDB Sekarang
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}