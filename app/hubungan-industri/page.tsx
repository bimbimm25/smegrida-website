"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Handshake, BookOpenCheck, Building2, Users, Network } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HubunganIndustri() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    if (!isMounted) return null;

    return (
        <main className="flex min-h-screen flex-col bg-white overflow-x-hidden">

            <Navbar />

            {/* 1. HERO SECTION (PAS 1 LAYAR PENUH / MIN-H-SCREEN) */}
            <section className="relative min-h-screen w-full bg-slate-50 border-b border-slate-100 overflow-hidden flex flex-col items-center justify-center px-6">
                {/* Latar Belakang Dekoratif (Motif Grid Halus menutupi 1 layar penuh) */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-size-[3rem_3rem] opacity-30 mask-[radial-gradient(circle_at_center,black_50%,transparent_100%)]"></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col items-center">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-0.5 bg-sekolah-biru"></div>
                            <span className="text-sm font-bold text-sekolah-biru uppercase tracking-widest">Tentang Kami</span>
                            <div className="w-10 h-0.5 bg-sekolah-biru"></div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
                            Hubungan <span className="text-sekolah-biru">Industri</span>
                        </h1>

                        <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                            Menjalin kemitraan strategis dengan Dunia Usaha dan Dunia Industri (DUDI) untuk mewujudkan pendidikan vokasi yang selaras dengan standar profesional dan kebutuhan zaman.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. BENTUK KEMITRAAN */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Bentuk <span className="text-sekolah-biru">Kemitraan</span></h2>
                        <p className="text-slate-500 text-base max-w-2xl mx-auto">
                            Kolaborasi nyata yang kami bangun bersama perusahaan mitra untuk meningkatkan kualitas pembelajaran.
                        </p>
                    </div>

                    <motion.div 
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            {
                                icon: Handshake, title: "Praktik Kerja (PKL)", 
                                desc: "Penerjunan siswa langsung ke perusahaan untuk merasakan budaya kerja industri secara nyata."
                            },
                            {
                                icon: BookOpenCheck, title: "Sinkronisasi Kurikulum", 
                                desc: "Penyelarasan materi pembelajaran bersama praktisi industri agar sesuai dengan kompetensi yang dibutuhkan."
                            },
                            {
                                icon: Network, title: "Kelas Industri", 
                                desc: "Pembukaan kelas khusus yang kurikulum dan standarnya dibina langsung oleh perusahaan mitra."
                            },
                            {
                                icon: Users, title: "Guru Tamu Profesional", 
                                desc: "Mengundang ahli dan praktisi profesional ke sekolah untuk memberikan materi spesifik berstandar industri."
                            }
                        ].map((item, index) => (
                            <motion.div 
                                key={index} variants={fadeUp}
                                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                            >
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-6 group-hover:border-sekolah-biru/30 transition-colors">
                                    <item.icon size={28} className="text-slate-700 group-hover:text-sekolah-biru transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. DAFTAR MITRA INDUSTRI */}
            <section className="py-24 bg-[#fafafa] px-6 border-y border-slate-100">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Mitra <span className="text-sekolah-biru">Industri Kami</span></h2>
                            <p className="text-slate-500 text-base max-w-xl">
                                Kami bangga dapat dipercaya dan bekerja sama dengan puluhan perusahaan berskala nasional maupun multinasional.
                            </p>
                        </div>
                    </div>

                    <motion.div 
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
                    >
                        {[
                            "PT. Telkom Indonesia", "Astra Honda Motor", "Yamaha Indonesia", "PT. PAL Indonesia", "Semen Indonesia",
                            "Maspion Group", "Indofood Sukses Makmur", "Epson Industry", "PLN Persero", "PT. KAI",
                            "Bank Jatim", "PT. INKA", "Wings Group", "Otsuka", "United Tractors",
                            "PT. Gudang Garam", "PT. Petrokimia", "Nestle Indonesia", "Unilever", "PT. INKA Multi"
                        ].map((perusahaan, i) => (
                            <motion.div 
                                key={i} variants={fadeUp}
                                className="bg-white aspect-3/2 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center p-4 hover:shadow-md hover:border-sekolah-biru/50 transition-all cursor-default group"
                            >
                                <Building2 size={28} className="text-slate-300 mb-3 group-hover:text-sekolah-biru transition-colors" />
                                <span className="text-slate-600 font-semibold text-xs text-center leading-tight">{perusahaan}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}