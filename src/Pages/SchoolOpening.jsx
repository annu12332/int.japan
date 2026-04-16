import React from 'react';
import { Star, MapPin, Phone, Mail, Clock, CheckCircle, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const INTJapanSchoolOpenPage = ({ lang = 'en' }) => {
    
    const translations = {
        en: {
            date: "October 5",
            title: "Japanese School OPEN",
            opportunity: "Great opportunity to go to Japan",
            subTitle: "Japanese language schools run directly by Japanese people",
            goals: ["JLPT N5 (3 Months)", "JLPT N4 (6 Months)"],
            benefitsTitle: "Benefits for the first generation only",
            benefits: [
                "Tuition free for October & November!",
                "3 months: 15k Taka + 1k Textbook fee",
                "5,000 Taka Admission fee free until Nov"
            ],
            deadline: "Deadline as soon as capacity is reached",
            station: "Uttara North Station (West Exit) - 1 min walk",
            address: "House 27/1, Road 02, Sector 15, Uttara, Dhaka",
            apply: "Apply Now"
        },
        bn: {
            date: "৫ অক্টোবর",
            title: "জাপানিজ স্কুল ওপেন",
            opportunity: "জাপানে যাওয়ার দারুণ সুযোগ",
            subTitle: "জাপানিজদের দ্বারা সরাসরি পরিচালিত ভাষা শিক্ষা স্কুল",
            goals: ["৩ মাসে N5 লক্ষ্য", "৬ মাসে N4 লক্ষ্য"],
            benefitsTitle: "প্রথম ব্যাচের বিশেষ সুবিধা",
            benefits: [
                "অক্টোবর ও নভেম্বরের টিউশন ফি ফ্রি!",
                "৩ মাস: ১৫ হাজার টাকা + ১ হাজার বই ফি",
                "নভেম্বর পর্যন্ত ৫,০০০ টাকা ভর্তি ফি ফ্রি"
            ],
            deadline: "আসন পূর্ণ হলেই ভর্তি বন্ধ",
            station: "উত্তরা উত্তর স্টেশন (পশ্চিম এক্সিট) - ১ মিনিট",
            address: "বাড়ি ২৭/১, রোড ০২, সেক্টর ১৫, উত্তরা, ঢাকা",
            apply: "আবেদন করুন"
        },
        jp: {
            date: "10月5日",
            title: "日本語学校開校",
            opportunity: "日本へ行く絶好のチャンス",
            subTitle: "日本人による直接運営の日本語学校",
            goals: ["3ヶ月でN5相当", "6ヶ月でN4相当"],
            benefitsTitle: "第一期生限定の特典",
            benefits: [
                "10月・11月の授業料無料！",
                "3ヶ月授業料1.5万タカ＋教材費1千",
                "11月末まで入学金5,000タカ無料"
            ],
            deadline: "定員になり次第締め切り",
            station: "ウッタラ北駅（西出口）から徒歩1分",
            address: "House 27/1, Road 02, Sector 15, Uttara, Dhaka",
            apply: "今すぐ申し込む"
        }
    };

    const t = translations[lang] || translations.en;

    return (
        <div className="bg-slate-50 py-6 px-4 font-sans">
            <div className="max-w-[700px] mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
                
                {/* Hero Header Section */}
                <div className="bg-[#1A3673] py-8 px-6 text-center text-white relative">
                    <div className="flex justify-center gap-1 mb-2">
                        <Star size={14} fill="#FFD700" className="text-[#FFD700]" />
                        <Star size={14} fill="#FFD700" className="text-[#FFD700]" />
                        <Star size={14} fill="#FFD700" className="text-[#FFD700]" />
                    </div>
                    <h2 className="text-xs font-black tracking-[0.2em] mb-1 opacity-80 uppercase leading-none">{t.date}</h2>
                    <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-3 leading-none">
                        {t.title}
                    </h1>
                    <div className="inline-block bg-[#EE1D23] px-4 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
                        {t.opportunity}
                    </div>
                </div>

                {/* Main Content Body */}
                <div className="p-6 md:p-8">
                    <p className="text-center text-sm font-bold text-slate-600 mb-6">{t.subTitle}</p>
                    
                    {/* Goal Badges */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                        {t.goals.map((goal, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex items-center gap-2 justify-center shadow-sm">
                                <CheckCircle size={14} className="text-green-500" />
                                <span className="text-[11px] font-black text-[#1A3673] uppercase">{goal}</span>
                            </div>
                        ))}
                    </div>

                    {/* Compact Benefits Highlight Box */}
                    <div className="bg-red-50 border-2 border-[#EE1D23]/20 rounded-2xl p-6 mb-8 relative">
                        <div className="absolute top-0 right-0 p-2 opacity-10">
                            <Star size={40} className="text-[#EE1D23]" />
                        </div>
                        <h3 className="text-sm font-black text-[#EE1D23] mb-4 uppercase text-center tracking-tight">{t.benefitsTitle}</h3>
                        <div className="space-y-3">
                            {t.benefits.map((benefit, i) => (
                                <div key={i} className="flex gap-3 text-xs font-bold text-slate-700 leading-tight">
                                    <ArrowRight size={14} className="text-[#EE1D23] shrink-0" />
                                    {benefit}
                                </div>
                            ))}
                        </div>
                        <div className="mt-5 text-center text-[9px] font-black uppercase text-[#EE1D23] animate-pulse tracking-widest">
                            {t.deadline}
                        </div>
                    </div>

                    {/* Info & Contact Grid */}
                    <div className="grid md:grid-cols-2 gap-4 items-center">
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-3">
                            <div className="flex gap-3">
                                <MapPin size={16} className="text-[#1A3673] shrink-0" />
                                <p className="text-[10px] font-bold text-slate-500 leading-relaxed">{t.address}</p>
                            </div>
                            <div className="flex gap-3">
                                <Clock size={16} className="text-[#1A3673] shrink-0" />
                                <p className="text-[10px] font-bold text-slate-500">{t.station}</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <a href="tel:01942438132" className="flex items-center gap-3 bg-[#1A3673] text-white p-3 rounded-xl justify-center hover:bg-black transition-all shadow-md group">
                                <Phone size={18} className="group-hover:rotate-12 transition-transform" />
                                <span className="text-sm font-black tracking-widest">019-4243-8132</span>
                            </a>
                            <div className="flex items-center gap-2 justify-center text-[10px] font-bold text-slate-400">
                                <Mail size={12} className="text-[#EE1D23]" /> dhaka@int-japan.com
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer CTA Button */}
                <div className="bg-slate-50 p-6 flex justify-center border-t border-slate-100">
                    <Link to={"/application-form"}><button className="bg-[#EE1D23] text-white px-10 py-3 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-lg hover:shadow-[#EE1D23]/40 transition-all active:scale-95 flex items-center gap-2">
                        <GraduationCap size={16} /> {t.apply}
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default INTJapanSchoolOpenPage;