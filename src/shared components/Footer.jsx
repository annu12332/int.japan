import React from 'react';
import { 
    HiOutlineMail, 
    HiOutlinePhone, 
    HiOutlineLocationMarker, 
    HiOutlineExternalLink, 
    HiOutlineArrowNarrowRight 
} from "react-icons/hi";
import { FaFacebookF, FaWhatsapp,  } from "react-icons/fa";

const Footer = ({ lang = 'en' }) => {
    const translations = {
        en: {
            brandName: "INT Japan Training Center",
            slogan: "Make your dreams come true in Japan",
            dhakaTitle: "Dhaka Campus",
            tokyoTitle: "Tokyo Office",
            quickLinks: "Quick Links",
            copyright: "© 2026 INT-JAPAN Training Center. All rights reserved.",
            routeBtn: "Station Route Guide Here",
            links: ["Home", "About Us", "Courses", "Contact"]
        },
        bn: {
            brandName: "আইএনটি জাপান ট্রেনিং সেন্টার",
            slogan: "জাপানে আপনার স্বপ্ন সত্যি করুন",
            dhakaTitle: "ঢাকা ক্যাম্পাস",
            tokyoTitle: "টোকিও অফিস",
            quickLinks: "দ্রুত লিঙ্ক",
            copyright: "© ২০২৬ আইএনটি-জাপান ট্রেনিং সেন্টার। সর্বস্বত্ব সংরক্ষিত।",
            routeBtn: "স্টেশন রুট গাইড দেখুন",
            links: ["হোম", "আমাদের সম্পর্কে", "কোর্সসমূহ", "যোগাযোগ"]
        },
        jp: {
            brandName: "INT Japan トレーニングセンター",
            slogan: "日本であなたの夢をかなえる",
            dhakaTitle: "ダッカ校",
            tokyoTitle: "東京オフィス",
            quickLinks: "クイックリンク",
            copyright: "© 2026 INT-JAPAN Training Center. All rights reserved.",
            routeBtn: "駅からルート案内",
            links: ["ホーム", "会社概要", "コース", "お問い合わせ"]
        }
    };

    const content = translations[lang] || translations.en;

    return (
        <footer className="bg-[#1A3673] text-white pt-16 pb-8 px-4 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-6">
                        <h2 className="text-2xl md:text-3xl font-black italic tracking-tight">
                            {content.brandName}
                        </h2>
                        <p className="text-blue-100/80 text-sm md:text-base font-medium">
                            {content.slogan}
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://www.facebook.com/profile.php?id=61581829421561" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-colors">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="https://wa.me/8801942348132" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-colors">
                                <FaWhatsapp size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Dhaka Campus Section */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-lg font-black uppercase tracking-widest text-red-400 mb-6">
                            {content.dhakaTitle}
                        </h4>
                        <div className="space-y-4 text-sm text-blue-50/90">
                            <div className="flex gap-3">
                                <HiOutlineLocationMarker size={20} className="text-red-400 shrink-0" />
                                <p>House No.27/1 (Lift-8), Road No.02, Sector No.15, Uttara, Diabari, Dhaka-1230, Bangladesh.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <HiOutlineMail size={18} className="text-red-400 shrink-0" />
                                <p>dhaka@int-japan.com</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <HiOutlinePhone size={18} className="text-red-400 shrink-0" />
                                <p className="text-xl font-black">019-4234-8132</p>
                            </div>
                        </div>
                        <button className="mt-4 flex items-center gap-2 bg-blue-800 hover:bg-blue-700 px-5 py-3 rounded-xl text-xs font-bold transition-all border border-blue-600 shadow-lg">
                            {content.routeBtn} <HiOutlineExternalLink size={16} />
                        </button>
                    </div>

                    {/* Tokyo Office Section */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-lg font-black uppercase tracking-widest text-red-400 mb-6">
                            {content.tokyoTitle}
                        </h4>
                        <div className="space-y-4 text-sm text-blue-50/90">
                            <div className="flex gap-3">
                                <HiOutlineLocationMarker size={20} className="text-red-400 shrink-0" />
                                <p>〒339-0057, 2nd Floor, 4-1-1 Honcho, Iwatsuki-ku, Saitama City, Saitama Prefecture.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <HiOutlineMail size={18} className="text-red-400 shrink-0" />
                                <p>tokyo@int-japan.com</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <HiOutlinePhone size={18} className="text-red-400 shrink-0" />
                                <p className="text-xl font-black">048-757-8232</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-lg font-black uppercase tracking-widest text-red-400 mb-6">
                            {content.quickLinks}
                        </h4>
                        <ul className="space-y-3">
                            {content.links.map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="text-blue-100/70 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium">
                                        <HiOutlineArrowNarrowRight size={16} className="group-hover:translate-x-1 transition-transform" /> {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-blue-100/50 text-[11px] font-bold uppercase tracking-widest text-center md:text-left">
                        {content.copyright}
                    </p>
                    <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-blue-100/40">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;