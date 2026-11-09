import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

export default function Footer() {
    return (
        // Pembatas: border-t border-gray-200 dengan background putih polos
        <footer className="bg-white text-slate-600 pt-16 pb-8 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">

                {/* GRID UTAMA FOOTER */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* KOLOM 1: Profil Sekolah */}
                    <div className="flex flex-col">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="relative w-12 h-12 bg-white rounded-full p-1 border border-gray-100 shadow-sm">
                                <Image
                                    src="/img/logo.png"
                                    alt="Logo SMK PGRI 2"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-extrabold text-slate-800 text-lg leading-none tracking-tight">
                                    SMK PGRI 2
                                </span>
                                <span className="font-bold text-slate-400 text-[11px] leading-tight tracking-widest mt-1">
                                    SIDOARJO
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-slate-500 leading-relaxed mb-6">
                            Mencetak generasi tangguh, berakhlak mulia, dan berwawasan digital yang siap bersaing di dunia industri maupun berwirausaha.
                        </p>
                        {/* Social Media (Polos: Border abu-abu, hover jadi biru) */}
                        <div className="flex items-center gap-3">
                            <Link href="#" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-400 hover:border-sekolah-biru hover:text-sekolah-biru transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </Link>
                            <Link href="#" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-400 hover:border-sekolah-biru hover:text-sekolah-biru transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </Link>
                            <Link href="#" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-400 hover:border-sekolah-biru hover:text-sekolah-biru transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1A2.5 2.5 0 0 1 5 4.6h14a2.5 2.5 0 0 1 2.5 2.5v9.8a2.5 2.5 0 0 1-2.5 2.5H5a2.5 2.5 0 0 1-2.5-2.5V7.1z" /><path d="m10 15 5-3-5-3v6z" /></svg>
                            </Link>
                        </div>
                    </div>

                    {/* KOLOM 2: Tautan Cepat */}
                    <div>
                        <h3 className="text-slate-800 font-bold text-base mb-5 border-b border-gray-100 pb-3">
                            Tautan Cepat
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Beranda", url: "/" },
                                { name: "Profil Sekolah", url: "/profil" },
                                { name: "Informasi PPDB", url: "/ppdb" },
                                { name: "Berita & Pengumuman", url: "/berita" },
                                { name: "Galeri Kegiatan", url: "/galeri" },
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.url} className="flex items-center gap-2 text-sm text-slate-500 hover:text-sekolah-biru transition-colors group">
                                        <ChevronRight size={14} className="text-slate-300 group-hover:text-sekolah-biru group-hover:translate-x-1 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* KOLOM 3: Program Keahlian */}
                    <div>
                        <h3 className="text-slate-800 font-bold text-base mb-5 border-b border-gray-100 pb-3">
                            Program Keahlian
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Rekayasa Perangkat Lunak",
                                "Manajemen Perkantoran",
                                "Akuntansi & Keuangan",
                                "Desain Komunikasi Visual",
                                "Jaringan Telekomunikasi"
                            ].map((jurusan, i) => (
                                <li key={i}>
                                    <Link href="/akademik" className="flex items-center gap-2 text-sm text-slate-500 hover:text-sekolah-biru transition-colors group">
                                        <ChevronRight size={14} className="text-slate-300 group-hover:text-sekolah-biru group-hover:translate-x-1 transition-all" />
                                        {jurusan}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* KOLOM 4: Hubungi Kami */}
                    <div>
                        <h3 className="text-slate-800 font-bold text-base mb-5 border-b border-gray-100 pb-3">
                            Hubungi Kami
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-slate-500">
                                <MapPin size={16} className="text-slate-400 shrink-0 mt-0.5" />
                                <p>Jl. Raya Kemiri No. XX, Kabupaten Sidoarjo, Jawa Timur 61234</p>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-500">
                                <Phone size={16} className="text-slate-400 shrink-0" />
                                <p>(031) 1234567</p>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-500">
                                <Mail size={16} className="text-slate-400 shrink-0" />
                                <p>info@smkspgri2sda.sch.id</p>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-500">
                                <Clock size={16} className="text-slate-400 shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium text-slate-700">Jam Operasional:</p>
                                    <p>Senin - Jumat: 07.00 - 15.00 WIB</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* GARIS BAWAH & COPYRIGHT */}
                <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                    <p>© {new Date().getFullYear()} SMKS PGRI 2 Sidoarjo. Hak Cipta Dilindungi.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-sekolah-biru transition-colors">Kebijakan Privasi</Link>
                        <Link href="#" className="hover:text-sekolah-biru transition-colors">Syarat & Ketentuan</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}