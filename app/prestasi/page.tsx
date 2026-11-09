"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Trophy, Medal, Award, Star, Calendar, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HalamanPrestasi() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    if (!isMounted) return null;

    // Data Mockup Prestasi Sekolah (Bisa disesuaikan nanti dengan data aslinya)
    const daftarPrestasi = [
        {
            title: "Juara 1 Lomba Kompetensi Siswa (LKS) Web Technologies",
            kategori: "Kejuruan / IT",
            tingkat: "Tingkat Provinsi Jawa Timur",
            tahun: "2025",
            pemenang: "Ahmad Fauzi (XII RPL)",
            deskripsi: "Mengembangkan aplikasi web responsif dan fungsional dengan standar industri perangkat lunak modern.",
            icon: Trophy,
            badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
        },
        {
            title: "Medali Emas Kejuaraan Pencak Silat Nasional",
            kategori: "Non-Akademik / Olahraga",
            tingkat: "Tingkat Nasional",
            tahun: "2025",
            pemenang: "Siti Nur Haliza (XI TKR)",
            deskripsi: "Menunjukkan ketangkasan, disiplin, dan sportivitas tinggi mengalahkan ratusan peserta dari seluruh Indonesia.",
            icon: Medal,
            badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
        },
        {
            title: "Juara 2 Kompetisi Inovasi Robotika Pelajar",
            kategori: "Teknologi & Sains",
            tingkat: "Tingkat Nasional",
            tahun: "2024",
            pemenang: "Tim Robotik SMKS PGRI 2",
            deskripsi: "Merancang robot penyelamat otomatis berbasis mikrokontroler untuk evakuasi darurat bencana.",
            icon: Award,
            badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
        },
        {
            title: "Juara 1 Lomba Paduan Suara Antar Pelajar",
            kategori: "Seni & Budaya",
            tingkat: "Tingkat Kabupaten Sidoarjo",
            tahun: "2024",
            pemenang: "Paduan Suara Skanida",
            deskripsi: "Menampilkan harmonisasi vokal yang memukau dan memenangkan apresiasi tertinggi dari dewan juri.",
            icon: Star,
            badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
        },
        {
            title: "Juara 3 Kompetisi Akuntansi Tingkat Lanjut",
            kategori: "Akademik / Bisnis",
            tingkat: "Tingkat Provinsi Jawa Timur",
            tahun: "2024",
            pemenang: "Dewi Lestari (XII Akuntansi)",
            deskripsi: "Ketepatan dan kecepatan dalam penyusunan laporan keuangan perusahaan menggunakan sistem akuntansi digital.",
            icon: Trophy,
            badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
        },
        {
            title: "Juara Harapan 1 Desain Poster Digital Kreatif",
            kategori: "Seni & Desain",
            tingkat: "Tingkat Nasional",
            tahun: "2024",
            pemenang: "Rizky Pratama (XI Multimedia)",
            deskripsi: "Mengampanyekan pelestarian lingkungan hidup melalui karya seni visual digital yang sarat makna.",
            icon: Award,
            badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
        }
    ];

    return (
        <main className="flex min-h-screen flex-col bg-white overflow-x-hidden">

            <Navbar />

            {/* 1. HERO SECTION (PAS 1 LAYAR LAPTOP - ELEGAN & RINGKAS) */}
            <section className="relative min-h-137.5 h-[70vh] max-h-162.5 w-full bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center px-6 pt-24">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-40"></div>
                    <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sekolah-biru/10 blur-[80px]"></div>
                    <div className="absolute top-[60%] right-[-10%] w-[30%] h-[30%] rounded-full bg-sekolah-kuning/10 blur-[80px]"></div>
                </div>

                <div className="relative z-10 max-w-4xl w-full mx-auto text-center flex flex-col items-center">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col items-center">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-0.5 bg-sekolah-biru"></div>
                            <span className="text-xs md:text-sm font-bold text-sekolah-biru uppercase tracking-widest">Pencapaian & Kebanggaan</span>
                            <div className="w-8 h-0.5 bg-sekolah-biru"></div>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-[1.15]">
                            Prestasi <span className="text-sekolah-biru">Siswa & Sekolah</span>
                        </h1>

                        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                            Wujud nyata kerja keras, disiplin, dan dedikasi tinggi dari peserta didik serta civitas akademika SMK PGRI 2 Sidoarjo dalam menorehkan prestasi di kementerian, tingkat regional, hingga nasional.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. STATISTIK / HIGHLIGHT PRESTASI */}
            <section className="py-12 bg-white border-b border-slate-100 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                    >
                        {[
                            { angka: "50+", label: "Juara Tingkat Nasional", icon: Trophy },
                            { angka: "120+", label: "Juara Tingkat Provinsi", icon: Medal },
                            { angka: "85+", label: "Penghargaan Vokasi", icon: Award },
                            { angka: "100%", label: "Semangat Juara", icon: Star },
                        ].map((stat, i) => (
                            <motion.div key={i} variants={fadeUp} className="bg-slate-50 p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col items-center">
                                <stat.icon size={28} className="text-sekolah-biru mb-2" />
                                <span className="text-3xl md:text-4xl font-black text-slate-900 mb-1">{stat.angka}</span>
                                <span className="text-slate-500 text-xs md:text-sm font-medium">{stat.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. DAFTAR PRESTASI TERBARU (GRID KARTU ELEGAN) */}
            <section className="py-20 bg-slate-50/50 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">Daftar Prestasi Unggulan</h2>
                        <p className="text-slate-500 text-sm max-w-xl mx-auto">
                            Kumpulan penghargaan bergengsi yang diraih oleh siswa-siswi berbakat kami dalam berbagai ajang kompetisi.
                        </p>
                    </div>

                    <motion.div 
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {daftarPrestasi.map((item, index) => (
                            <motion.div 
                                key={index} variants={fadeUp}
                                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    {/* Header Kartu: Kategori & Tahun */}
                                    <div className="flex justify-between items-center mb-5">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${item.badgeColor}`}>
                                            {item.kategori}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                                            <Calendar size={13} /> {item.tahun}
                                        </span>
                                    </div>

                                    {/* Judul & Deskripsi */}
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-sekolah-biru transition-colors leading-snug">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                                        {item.deskripsi}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                                        <item.icon size={16} className="text-amber-500 shrink-0" />
                                        <span>{item.pemenang}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                                        <MapPin size={12} />
                                        <span>{item.tingkat}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}