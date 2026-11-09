"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { Zap, BookOpen, Clock, ChevronRight, MessageCircle, Briefcase, Building, Award, CheckCircle2, Calendar } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from 'next/image';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => setIsMounted(true), []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const textAnimation: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  // --- DATA DUMMY JURUSAN ---
  const jurusanData = [
    {
      id: "rpl",
      title: "Rekayasa Perangkat Lunak (RPL)",
      desc: "Mempelajari bahasa pemrograman, pengembangan website, aplikasi mobile, dan desktop dengan teknologi perangkat lunak terkini.",
      pelajaran: ["Coding (HTML, CSS, JS, PHP)", "Database Management", "UI/UX Design", "Algoritma Pemrograman"],
      karir: ["Web Developer", "Mobile Programmer", "Software Engineer", "UI/UX Designer"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-200"
    },
    {
      id: "mplb",
      title: "Manajemen Perkantoran (MPLB)",
      desc: "Fokus pada administrasi bisnis, manajemen arsip digital, dan pelayanan publik secara profesional di era digitalisasi kantor.",
      pelajaran: ["Administrasi Perkantoran", "Korespondensi Bisnis", "Kearsipan Digital", "Public Speaking"],
      karir: ["Sekretaris Perusahaan", "Staf Administrasi", "Resepsionis", "Asisten Manajer"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "border-purple-200"
    },
    {
      id: "akl",
      title: "Akuntansi & Keuangan (AKL)",
      desc: "Mempelajari siklus akuntansi, pencatatan keuangan, pembukuan, perpajakan, dan proses audit menggunakan perangkat lunak akuntansi.",
      pelajaran: ["Akuntansi Keuangan", "Komputer Akuntansi", "Perpajakan Dasar", "Etika Profesi"],
      karir: ["Akuntan Perusahaan", "Teller/Staf Bank", "Staf Finance", "Auditor Junior"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-200"
    },
    {
      id: "dkv",
      title: "Desain Komunikasi Visual (DKV)",
      desc: "Mengembangkan kreativitas tanpa batas di bidang seni visual, desain grafis, ilustrasi digital, videografi, dan animasi.",
      pelajaran: ["Desain Grafis", "Fotografi & Videografi", "Animasi 2D/3D", "Tipografi & Ilustrasi"],
      karir: ["Graphic Designer", "Video Editor", "Animator", "Creative Director"],
      image: "https://images.unsplash.com/photo-1626785773985-9440af452814?q=80&w=1000",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "border-orange-200"
    },
    {
      id: "tjat",
      title: "Jaringan Telekomunikasi (TJAT)",
      desc: "Mempelajari instalasi, konfigurasi, dan pemeliharaan infrastruktur jaringan kabel, fiber optik, maupun nirkabel skala industri.",
      pelajaran: ["Instalasi LAN/WAN", "Fiber Optik & Splicing", "Konfigurasi Router", "Sistem Operasi Server"],
      karir: ["Network Engineer", "Teknisi Telekomunikasi", "System Admin", "IT Support"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000",
      color: "text-red-500",
      bg: "bg-red-500/10",
      border: "border-red-200"
    }
  ];

  // --- DATA DUMMY BERITA (Nanti diganti state yang di-fetch dari PHP Backend) ---
  const dataBerita = [
    {
      id: 1,
      title: "Siswa RPL Sabet Juara 1 Web Design Tingkat Nasional",
      excerpt: "Prestasi membanggakan kembali ditorehkan oleh siswa-siswi SMKS PGRI 2 Sidoarjo dalam ajang kompetisi IT tahunan yang diselenggarakan di Jakarta.",
      date: "25 Juli 2026",
      category: "Prestasi",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
    },
    {
      id: 2,
      title: "Kunjungan Industri Jurusan AKL ke Kantor Pajak Pratama",
      excerpt: "Guna meningkatkan pemahaman siswa terkait dunia kerja nyata, jurusan Akuntansi mengadakan kunjungan industri untuk mempelajari sistem perpajakan.",
      date: "20 Juli 2026",
      category: "Akademik",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=800",
    },
    {
      id: 3,
      title: "Pemberitahuan Jadwal Pengambilan Raport Semester Ganjil",
      excerpt: "Diberitahukan kepada seluruh wali murid kelas X, XI, dan XII bahwa pengambilan raport semester ganjil akan dilaksanakan pada minggu depan.",
      date: "15 Juli 2026",
      category: "Pengumuman",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800",
    }
  ];

  if (!isMounted) return null;

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-[#fafafa]">

      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-start pt-32 lg:pt-36 overflow-hidden bg-[#fafafa]">
        {/* Pola Latar Belakang Lingkaran */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none mt-10">
          <div className="w-150 h-150 md:w-200 md:h-200 border-2 border-dashed border-slate-500 rounded-full absolute" />
          <div className="w-225 h-225 md:w-300 md:h-300 border-2 border-dashed border-slate-400 rounded-full absolute" />
        </div>

        {/* AREA TEKS */}
        <div className="relative z-30 flex flex-col items-center text-center px-4 w-full max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            className="text-base md:text-lg mb-4 font-medium text-slate-500"
          >
            Selamat Datang di <span className="text-sekolah-biru font-bold">SMKS PGRI 2 SIDOARJO!</span>
          </motion.p>

          <motion.h1
            initial="hidden" animate="visible" variants={textAnimation}
            className="text-2xl md:text-3xl lg:text-4xl font-black mb-8 tracking-tight text-sekolah-gelap leading-[1.1]"
          >
            <motion.span variants={textAnimation} className="block">Sekolah Tangguh, Berakhlak,</motion.span>
            <motion.span variants={textAnimation} className="block text-sekolah-biru">& Berwawasan Digital</motion.span>
          </motion.h1>
        </div>

        {/* AREA FOTO SISWA */}
        <motion.div
          initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen md:w-[105vw] max-w-none h-[95vh] md:h-[95vh] lg:h-[95vh] z-10 pointer-events-none"
        >
          <Image
            src="/img/home-hero-img.jpg"
            alt="Siswa SMKS PGRI 2"
            fill
            priority
            className="object-contain object-bottom mt-5"
          />
        </motion.div>
      </section>

      {/* 2. SAMBUTAN KEPALA SEKOLAH */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
        className="py-16 px-6 md:px-20 max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center bg-[#fafafa]"
      >
        <div className="w-full md:w-2/5">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-b-8 border-r-8 border-sekolah-biru">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800" alt="Kepala Sekolah" className="w-full h-auto object-cover aspect-4/5" />
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <div className="inline-block px-3 py-1 bg-sekolah-kuning/20 text-sekolah-gelap rounded-full text-xs font-bold mb-4 uppercase">
            Prakata
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-sekolah-gelap mb-5">Sambutan Kepala Sekolah</h2>
          <div className="w-16 h-1 bg-sekolah-biru mb-5 rounded-full" />
          <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-5 text-justify">
            "Selamat datang di portal resmi SMKS PGRI 2 Sidoarjo. Kami mendidik para siswa tidak hanya menguasai keterampilan teknis, tetapi juga kecerdasan emosional agar siap bersaing di dunia industri maupun berwirausaha."
          </p>
          <div>
            <p className="font-bold text-sekolah-biru text-lg">Nama Kepala Sekolah</p>
            <p className="text-slate-500 font-medium text-xs md:text-sm">Kepala SMKS PGRI 2 Sidoarjo</p>
          </div>
        </div>
      </motion.section>

      {/* 3. MENGAPA MEMILIH KAMI */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-20">
          <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-black text-sekolah-gelap mb-3">Mengapa Memilih <span className="text-sekolah-biru">SMKS PGRI 2?</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">Kami berkomitmen memberikan pendidikan vokasi terbaik untuk mencetak generasi yang kompeten, berkarakter, dan siap kerja.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Briefcase, title: "Lulusan Siap Kerja", desc: "Kurikulum diselaraskan langsung dengan kebutuhan industri sehingga lulusan siap diserap dunia kerja.", color: "text-sekolah-biru", bg: "bg-sekolah-biru/10" },
              { icon: Building, title: "Fasilitas Modern", desc: "Memiliki laboratorium dan bengkel praktik dengan peralatan berstandar industri terkini.", color: "text-sekolah-kuning", bg: "bg-sekolah-kuning/20" },
              { icon: Award, title: "Kemitraan Luas", desc: "Bekerja sama dengan ratusan perusahaan untuk Praktik Kerja Lapangan (PKL) dan rekrutmen.", color: "text-sekolah-hijau", bg: "bg-sekolah-hijau/10" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-[#fafafa] p-6 rounded-2xl hover:shadow-lg transition-all border border-gray-100 group"
              >
                <div className={`${item.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
                  <item.icon className={item.color} size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-sekolah-gelap">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{item.desc}</p>
                <Link href="#" className={`flex items-center gap-1 ${item.color} font-bold text-xs group-hover:gap-2 transition-all`}>
                  Detail <ChevronRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROGRAM KEAHLIAN / JURUSAN */}
      <section className="bg-[#fafafa] py-16 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-black text-sekolah-gelap mb-3">Program <span className="text-sekolah-biru">Keahlian</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">Pilih jurusan yang sesuai dengan minat dan bakatmu untuk meraih masa depan gemilang.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
            {jurusanData.map((jurusan, index) => (
              <button
                key={jurusan.id}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2 rounded-full font-bold text-xs md:text-sm transition-all duration-300 ${
                  activeTab === index 
                  ? "bg-sekolah-biru text-white shadow-md shadow-sekolah-biru/40 scale-105" 
                  : "bg-white text-slate-500 hover:bg-slate-100 hover:text-sekolah-gelap border border-gray-200"
                }`}
              >
                {jurusan.id.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="min-h-87.5"> 
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col md:flex-row gap-6 md:gap-8 items-center bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="w-full md:w-5/12 relative">
                  <div className={`absolute -inset-3 rounded-2xl opacity-20 ${jurusanData[activeTab].bg}`} />
                  <div className={`relative w-full aspect-video rounded-xl overflow-hidden shadow-md border-2 ${jurusanData[activeTab].border} bg-white`}>
                    <Image 
                      src={jurusanData[activeTab].image}
                      alt={jurusanData[activeTab].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-7/12 flex flex-col">
                  <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold mb-3 w-fit uppercase tracking-wider ${jurusanData[activeTab].bg} ${jurusanData[activeTab].color}`}>
                    Tentang Jurusan
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-sekolah-gelap mb-3 leading-snug">
                    {jurusanData[activeTab].title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm mb-5">
                    {jurusanData[activeTab].desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <h4 className="flex items-center gap-1.5 font-bold text-sm text-sekolah-gelap mb-2">
                        <BookOpen size={14} className={jurusanData[activeTab].color} />
                        Yang Dipelajari
                      </h4>
                      <ul className="space-y-1.5">
                        {jurusanData[activeTab].pelajaran.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-slate-500">
                            <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-slate-300" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-1.5 font-bold text-sm text-sekolah-gelap mb-2">
                        <Briefcase size={14} className={jurusanData[activeTab].color} />
                        Prospek Karir
                      </h4>
                      <ul className="space-y-1.5">
                        {jurusanData[activeTab].karir.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-slate-500">
                            <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-slate-300" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. MITRA INDUSTRI */}
      <section className="bg-white py-12 border-t border-gray-100 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 text-center mb-8">
          <h3 className="text-xl font-bold text-sekolah-gelap">Mitra Industri Kami</h3>
        </div>

        <div className="relative w-full flex overflow-x-hidden">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex w-fit items-center gap-6 px-4 whitespace-nowrap"
          >
            {[
              "PT. Telkom", "Astra Motor", "Honda", "Yamaha", "PLN", "Maspion", "Indofood", "Epson", "PT. PAL", "Semen Indonesia",
              "PT. Telkom", "Astra Motor", "Honda", "Yamaha", "PLN", "Maspion", "Indofood", "Epson", "PT. PAL", "Semen Indonesia"
            ].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-36 h-16 bg-[#fafafa] rounded-lg shadow-sm border border-gray-100 shrink-0 hover:shadow-md transition-shadow cursor-pointer"
              >
                <span className="font-bold text-slate-400 text-base">{logo}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. BERITA & PENGUMUMAN TERKINI (MENUNGGU API PHP) */}
      <section className="bg-[#fafafa] py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-sekolah-gelap mb-2">Berita <span className="text-sekolah-biru">Sekolah</span></h2>
              <p className="text-slate-500 text-sm md:text-base">Informasi terbaru, prestasi, dan pengumuman resmi.</p>
            </div>
            <Link href="/berita" className="flex items-center gap-2 text-sm font-bold text-sekolah-biru hover:text-sekolah-kuning transition-colors group">
              Lihat Semua Berita <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* 
              Nantinya 'dataBerita' ini diganti dengan variable state 
              misal: beritaDariPHP.map((berita) => ...) 
            */}
            {dataBerita.map((berita, index) => (
              <motion.div
                key={berita.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col cursor-pointer"
              >
                {/* Thumbnail Gambar */}
                <div className="relative w-full aspect-4/3 overflow-hidden bg-slate-100">
                  <Image
                    src={berita.image}
                    alt={berita.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge Kategori */}
                  <div className="absolute top-4 left-4 bg-sekolah-biru text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {berita.category}
                  </div>
                </div>

                {/* Konten Berita */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                    <Calendar size={14} />
                    <span>{berita.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-sekolah-gelap mb-3 line-clamp-2 group-hover:text-sekolah-biru transition-colors">
                    {berita.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                    {berita.excerpt}
                  </p>

                  <div className="mt-auto flex items-center gap-1 text-sekolah-biru font-semibold text-sm">
                    Baca selengkapnya <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHATBOT FLOATING ICON */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button className="bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all">
          <MessageCircle className="w-6 h-6" />
        </button>
      </motion.div>

    </main>
  );
}