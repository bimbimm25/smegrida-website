"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Award, Network, Target, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProfilSekolah() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    if (!isMounted) return null;

    return (
        <main className="flex min-h-screen flex-col bg-white overflow-x-hidden">

            <Navbar />

            {/* 1. HERO SECTION */}
            <section className="relative min-h-145 h-[75vh] max-h-175 w-full bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center px-6 pt-24">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-40"></div>
                    <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sekolah-biru/10 blur-[80px]"></div>
                    <div className="absolute top-[60%] right-[-10%] w-[30%] h-[30%] rounded-full bg-sekolah-kuning/10 blur-[80px]"></div>
                </div>

                <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">

                    <motion.div
                        initial="hidden" animate="visible" variants={fadeUp}
                        className="w-full lg:w-7/12 flex flex-col justify-center text-left"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-0.5 bg-sekolah-biru"></div>
                            <span className="text-xs font-bold text-sekolah-biru uppercase tracking-widest">Tentang Kami</span>
                        </div>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-3 tracking-tight leading-[1.15]">
                            Profil Sekolah <br />
                            <span className="text-sekolah-biru text-xl md:text-2xl lg:text-3xl">SMK PGRI 2 SIDOARJO</span>
                        </h1>

                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed text-justify">
                            SMK PGRI 2 Sidoarjo adalah lembaga pendidikan vokasi yang berdedikasi untuk mencetak generasi tangguh, berakhlak mulia, dan siap bersaing di era digital. Berdiri dengan komitmen mutu yang tinggi, kami memadukan kurikulum adaptif industri dengan pembentukan karakter disiplin, guna menghasilkan lulusan yang kompeten, profesional, dan berjiwa wirausaha.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-5/12 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-60 md:max-w-70">
                            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-dashed border-sekolah-biru/40 rounded-3xl -z-10 hidden md:block"></div>
                            <div className="absolute -top-3 -left-3 w-28 h-28 bg-sekolah-kuning/30 rounded-full blur-2xl -z-10 hidden md:block"></div>

                            <div className="relative w-full aspect-4/5 rounded-3xl overflow-hidden shadow-xl shadow-slate-300/40 border-4 border-white bg-slate-50">
                                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[1.2rem_1.2rem] opacity-60"></div>
                                    <div className="absolute -top-10 -right-10 w-36 h-36 border-8 border-slate-200 rounded-full opacity-50"></div>
                                    <div className="absolute top-[40%] left-[-20%] w-[150%] h-10 bg-slate-100 -rotate-45 opacity-70"></div>
                                </div>

                                <Image
                                    src="/img/profil-img.png"
                                    alt="Siswa SMK PGRI 2 Sidoarjo"
                                    fill
                                    priority
                                    className="relative z-10 object-contain object-bottom"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* 2. VISI & MISI SEKOLAH (Dengan Background Elegan & Efek Shadow Bawah agar Badan Gambar Menyatu Halus) */}
            <section className="relative py-20 bg-slate-50/70 px-6 overflow-hidden border-b border-slate-100">
                {/* Latar Belakang Dekoratif Lembut */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[28px_28px] opacity-60"></div>
                    <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-sekolah-biru/5 blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    
                    {/* Gambar Full di Kiri dengan Efek Gradasi/Shadow Halus di Bawah */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                        className="w-full lg:w-5/12 flex justify-center lg:justify-start relative"
                    >
                        <div className="relative w-full max-w-100 md:max-w-120 aspect-4/5">
                            <Image
                                src="/img/visi-misi-img.png"
                                alt="Ilustrasi Visi Misi Sekolah"
                                fill
                                className="object-contain object-bottom-left relative z-10"
                            />
                            {/* Efek Shadow/Vignette Halus di Bawah Gambar Agar Badan Tidak Terlihat Kepotong Kaku */}
                            <div className="absolute bottom-0 inset-x-0 h-20 w-100 bg-linear-to-t from-slate-200/80 via-slate-100/30 to-transparent rounded-b-2xl z-20 pointer-events-none"></div>
                        </div>
                    </motion.div>

                    {/* Teks Visi & Misi di Kanan */}
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="w-full lg:w-7/12 flex flex-col"
                    >
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 tracking-tight">
                            Visi & Misi Sekolah
                        </h2>

                        {/* Visi */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md">
                                <Eye size={18} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Visi Sekolah</h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed italic">
                                    "Terwujudnya lulusan yang berkualitas unggul berdasarkan IMTAQ dan menguasai IPTEK."
                                </p>
                            </div>
                        </div>

                        {/* Misi */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md">
                                <Target size={18} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Misi Sekolah</h3>
                                <ul className="space-y-3 text-slate-600 text-xs md:text-sm">
                                    {[
                                        "Menyiapkan lulusan siap kerja serta produktif yang dilandasi IMTAQ serta menguasai IPTEK.",
                                        "Meningkatkan kualitas kegiatan belajar mengajar dalam mencapai kompetensi murid berstandar nasional.",
                                        "Mengembangkan potensi sekolah yang mampu bersaing di dunia industri.",
                                        "Mengembangkan sekolah sebagai pusat pendidikan dan pelatihan kejuruan terpadu yang memberikan layanan prima kepada masyarakat.",
                                        "Meningkatkan kualitas sumber daya manusia dan kualitas pembinaan murid dalam mewujudkan sikap kemandirian."
                                    ].map((misiItem, index) => (
                                        <li key={index} className="flex items-start gap-2.5">
                                            <span className="font-bold text-slate-900 shrink-0">{index + 1}.</span>
                                            <span className="leading-relaxed">{misiItem}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* 3. AKREDITASI SEKOLAH */}
            <section className="py-16 px-6 bg-white border-b border-slate-100">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-sm"
                    >
                        <div className="w-28 h-28 md:w-32 md:h-32 shrink-0 bg-white rounded-full flex flex-col items-center justify-center shadow-inner border-2 border-slate-100">
                            <Award size={32} className="text-sekolah-biru mb-1" />
                            <span className="text-4xl font-black text-slate-900">A</span>
                        </div>

                        <div className="text-center md:text-left">
                            
                            <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Akreditasi Sekolah</h2>
                            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                                SMK PGRI 2 Sidoarjo telah diakui secara resmi dengan predikat <strong className="text-slate-900">Akreditasi A (Unggul)</strong> oleh Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M). Hal ini mencerminkan tingginya standar fasilitas, kualitas tenaga pendidik, dan manajemen kelola sekolah kami.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. STRUKTUR ORGANISASI */}
            <section className="py-16 bg-white px-6">
                <div className="max-w-6xl mx-auto text-center">

                    <div className="mb-10 flex flex-col items-center">
                        <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mb-3 shadow-sm">
                            <Network size={20} className="text-slate-700" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">Struktur Organisasi</h2>
                        <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto">
                            Susunan manajerial dan tenaga kependidikan yang bertugas menyelenggarakan operasional pendidikan secara profesional.
                        </p>
                    </div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="w-full aspect-video md:aspect-21/9 bg-slate-50 rounded-3xl border border-slate-200 shadow-inner overflow-hidden relative flex items-center justify-center"
                    >
                        <div className="text-slate-400 flex flex-col items-center">
                            <Image
                                src="/img/logo.png"
                                alt="Logo"
                                width={60} height={60}
                                className="opacity-20 mb-3 grayscale"
                            />
                            <p className="font-medium tracking-widest uppercase text-xs">Bagan Struktur Organisasi Menunggu Pembaruan</p>
                        </div>
                    </motion.div>

                </div>
            </section>


        </main>
    );
}