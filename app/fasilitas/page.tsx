"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { 
    Monitor, 
    Wrench, 
    BookOpen, 
    Building2, 
    Dumbbell, 
    Wifi, 
    Sparkles, 
    HeartPulse, 
    Coffee, 
    ShieldCheck,
    Boxes,
    Cpu,
    Palette,
    Briefcase,
    Users,
    Store
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HalamanFasilitas() {
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

    // Data Fasilitas Sesuai Permintaan
    const daftarFasilitas = [
        {
            title: "Ruang Kelas (AC)",
            kategori: "Akademik",
            deskripsi: "Ruang belajar yang sejuk, nyaman, dan kondusif dilengkapi dengan pendingin ruangan (AC) untuk mendukung fokus belajar siswa.",
            icon: Building2,
            img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800"
        },
        {
            title: "Lab RPL (Rekayasa Perangkat Lunak)",
            kategori: "Praktik Kejuruan",
            deskripsi: "Laboratorium komputer mutakhir untuk praktik coding, pengembangan aplikasi, web, dan software berstandar industri.",
            icon: Monitor,
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800"
        },
        {
            title: "Lab DKV (Desain Komunikasi Visual)",
            kategori: "Praktik Kejuruan",
            deskripsi: "Ruang studio kreatif yang dilengkapi perangkat grafis dan multimedia untuk mendesain, fotografi, videografi, dan animasi.",
            icon: Palette,
            img: "https://images.unsplash.com/photo-1542744094-3a31246264d0?q=80&w=800"
        },
        {
            title: "Lab IoT (Internet of Things)",
            kategori: "Praktik Kejuruan",
            deskripsi: "Fasilitas inovatif untuk riset dan pengembangan perangkat cerdas terintegrasi, mikrokontroler, dan otomatisasi berbasis digital.",
            icon: Cpu,
            img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800"
        },
        {
            title: "Lab MP (Manajemen Perkantoran)",
            kategori: "Praktik Kejuruan",
            deskripsi: "Laboratorium simulasi perkantoran modern yang dirancang mirip lingkungan kerja korporat profesional.",
            icon: Briefcase,
            img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
        },
        {
            title: "Teaching Factory (TeFa)",
            kategori: "Pusat Produksi & Bisnis",
            deskripsi: "Model pembelajaran berbasis industri di mana siswa memproduksi barang/jasa langsung untuk memenuhi kebutuhan pasar dan konsumen.",
            icon: Boxes,
            img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800"
        },
        {
            title: "Aula Sekolah",
            kategori: "Serbaguna",
            deskripsi: "Ruang pertemuan berukuran besar yang representatif untuk acara seminar, rapat akbar, pentas seni, dan kegiatan kesiswaan.",
            icon: Users,
            img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800"
        },
        {
            title: "Lapangan Olahraga",
            kategori: "Outdoor & Olahraga",
            deskripsi: "Area terbuka yang luas dan bersih untuk kegiatan olahraga, upacara bendera, serta aktivitas ekstrakurikuler siswa.",
            icon: Dumbbell,
            img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800"
        },
        {
            title: "Kantin Sekolah",
            kategori: "Penunjang",
            deskripsi: "Area kuliner bersih dan higienis yang menyediakan berbagai makanan serta minuman sehat bagi warga sekolah.",
            icon: Store,
            img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=800"
        },
        {
            title: "Free Wi-Fi Area",
            kategori: "Infrastruktur",
            deskripsi: "Jaringan internet nirkabel berkecepatan tinggi yang dapat diakses dengan mudah di berbagai titik area lingkungan sekolah.",
            icon: Wifi,
            img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800"
        }
    ];

    return (
        <main className="flex min-h-screen flex-col bg-white overflow-x-hidden">

            <Navbar />

            {/* 1. HERO SECTION */}
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
                            <span className="text-xs md:text-sm font-bold text-sekolah-biru uppercase tracking-widest">Sarana & Prasarana</span>
                            <div className="w-8 h-0.5 bg-sekolah-biru"></div>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-[1.15]">
                            Fasilitas <span className="text-sekolah-biru">Sekolah</span>
                        </h1>

                        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                            Dukungan sarana dan prasarana modern, lengkap, serta berbasis teknologi untuk memastikan kenyamanan dan kualitas pembelajaran di SMK PGRI 2 Sidoarjo.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. HIGHLIGHT STATISTIK FASILITAS */}
            <section className="py-12 bg-white border-b border-slate-100 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                    >
                        {[
                            { angka: "Full AC", label: "Ruang Kelas Nyaman", icon: Building2 },
                            { angka: "Lab Vokasi", label: "IoT, DKV, MP, & RPL", icon: Cpu },
                            { angka: "TeFa", label: "Teaching Factory Nyata", icon: Boxes },
                            { angka: "Free Wi-Fi", label: "Akses Internet Sekolah", icon: Wifi },
                        ].map((stat, i) => (
                            <motion.div key={i} variants={fadeUp} className="bg-slate-50 p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col items-center">
                                <stat.icon size={26} className="text-sekolah-biru mb-2" />
                                <span className="text-xl md:text-2xl font-black text-slate-900 mb-1">{stat.angka}</span>
                                <span className="text-slate-500 text-xs md:text-sm font-medium">{stat.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. GRID DAFTAR FASILITAS */}
            <section className="py-20 bg-slate-50/50 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">Daftar Fasilitas Unggulan</h2>
                        <p className="text-slate-500 text-sm max-w-xl mx-auto">
                            Berbagai fasilitas pendukung akademik, praktik kejuruan, hingga kenyamanan siswa yang tersedia di lingkungan kampus.
                        </p>
                    </div>

                    <motion.div 
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {daftarFasilitas.map((item, index) => (
                            <motion.div 
                                key={index} variants={fadeUp}
                                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                            >
                                {/* Foto Fasilitas */}
                                <div className="relative w-full aspect-16/10 bg-slate-100 overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent"></div>
                                    <span className="absolute bottom-3 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[11px] font-bold text-slate-800 shadow-sm">
                                        {item.kategori}
                                    </span>
                                </div>

                                {/* Konten Kartu */}
                                <div className="p-6 flex flex-col grow justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-sekolah-biru group-hover:text-white transition-colors">
                                                <item.icon size={16} />
                                            </div>
                                            <h3 className="text-base font-bold text-slate-900 leading-snug">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                                            {item.deskripsi}
                                        </p>
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