import React from 'react';
import { MapPin, Mail, Phone, Globe, Building2, Navigation, ChevronRight, Info } from 'lucide-react';

const AccessInfoSection = ({ lang = 'en' }) => {
    const translations = {
        en: {
            badge: "Global Network",
            title: "Access Information",
            desc: "Contact or visit our campuses in Bangladesh and Japan for direct assistance.",
            dhakaTitle: "Dhaka Campus",
            tokyoTitle: "Tokyo Office",
            routeBtn: "Station Route Guide",
            dhakaCards: [
                {
                    title: "Dhaka Address",
                    desc: "House No.27/1 (Lift-8), Road No.02, Sector No.15, Uttara, Diabari, Dhaka-1230",
                    icon: <Building2 className="text-blue-600" />
                },
                {
                    title: "Contact Number",
                    desc: "019-4234-8132",
                    icon: <Phone className="text-blue-600" />
                }
            ],
            tokyoDetails: {
                addr: "339-0057, 2nd Floor, 4-1-1 Honcho, Iwatsuki-ku, Saitama City, Japan",
                phone: "048-757-8232",
                fax: "048-749-8120"
            }
        },
        bn: {
            badge: "গ্লোবাল নেটওয়ার্ক",
            title: "যোগাযোগের ঠিকানা",
            desc: "সরাসরি সহায়তার জন্য বাংলাদেশ এবং জাপানে আমাদের ক্যাম্পাসে যোগাযোগ করুন বা ভিজিট করুন।",
            dhakaTitle: "ঢাকা ক্যাম্পাস",
            tokyoTitle: "টোকিও অফিস",
            routeBtn: "স্টেশন রুট গাইড",
            dhakaCards: [
                {
                    title: "ঢাকা ঠিকানা",
                    desc: "হাউজ নং-২৭/১ (লিফট-৮), রোড নং-০২, সেক্টর নং-১৫, উত্তরা, দিয়াবাড়ি, ঢাকা-১২৩০",
                    icon: <Building2 className="text-blue-600" />
                },
                {
                    title: "যোগাযোগ নম্বর",
                    desc: "০১৯-৪২৩৪-৮১৩২",
                    icon: <Phone className="text-blue-600" />
                }
            ],
            tokyoDetails: {
                addr: "৩৩৯-০০৫৭, ২য় তলা, ৪-১-১ হনচো, সাইতামা সিটি, সাইতামা প্রিফেকচার, জাপান",
                phone: "০৪৮-৭৫৭-৮২৩২",
                fax: "০৪৮-৭৪৯-৮১২০"
            }
        },
        jp: {
            badge: "グローバルネットワーク",
            title: "アクセス情報",
            desc: "バングラデシュと日本の両拠点から、あなたの夢を強力にサポートします。",
            dhakaTitle: "ダッカ校 (Dhaka)",
            tokyoTitle: "東京オフィス (Tokyo)",
            routeBtn: "駅からルート案内",
            dhakaCards: [
                {
                    title: "ダッカ校住所",
                    desc: "House No.27/1 (Lift-8), Road No.02, Sector No.15, Uttara, Diabari, Dhaka-1230",
                    icon: <Building2 className="text-blue-600" />
                },
                {
                    title: "電話番号",
                    desc: "019-4234-8132",
                    icon: <Phone className="text-blue-600" />
                }
            ],
            tokyoDetails: {
                addr: "〒339-0057 埼玉県さいたま市岩槻区本町4-1-1 2階",
                phone: "048-757-8232",
                fax: "048-749-8120"
            }
        }
    };

    const content = translations[lang] || translations.en;

    return (
        <section id='success' className="bg-white py-12 md:py-24 px-4 font-sans text-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Left: Dhaka Info & Right: Tokyo Promo Card Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                            <Info size={14} className="fill-blue-600" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">{content.badge}</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-blue-900 leading-tight">
                            {content.title}
                        </h2>
                        <p className="text-slate-500 text-base md:text-lg leading-relaxed">{content.desc}</p>

                        <div className="grid sm:grid-cols-2 gap-4 pt-4">
                            {content.dhakaCards.map((card, idx) => (
                                <div key={idx} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all hover:bg-white hover:shadow-lg">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                                        {card.icon}
                                    </div>
                                    <h4 className="font-bold text-blue-950 mb-2 text-sm md:text-base">{card.title}</h4>
                                    <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed italic">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Card: Focus on Tokyo Office */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] md:rounded-[3.5rem] rotate-2 scale-95 opacity-10 group-hover:rotate-0 transition-transform"></div>
                        <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] text-white overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
                                <Globe size={160} />
                            </div>
                            <h3 className="text-2xl md:text-4xl font-black mb-4 leading-tight">{content.tokyoTitle}</h3>
                            <div className="space-y-4 mb-8 text-blue-50 relative z-10">
                                <p className="text-sm md:text-lg leading-relaxed">{content.tokyoDetails.addr}</p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <div className="px-4 py-2 bg-blue-700/50 rounded-xl border border-blue-600/50 text-xs font-bold">
                                        Tel: {content.tokyoDetails.phone}
                                    </div>
                                    <div className="px-4 py-2 bg-blue-700/50 rounded-xl border border-blue-600/50 text-xs font-bold">
                                        Fax: {content.tokyoDetails.fax}
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center gap-3 bg-white hover:bg-blue-50 px-6 md:px-10 py-3 md:py-5 rounded-2xl font-black text-blue-900 transition-all shadow-xl active:scale-95 text-sm md:text-base">
                                <Navigation size={20} /> {content.routeBtn} <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom: Contact Emails (Following Student Voices Style) */}
                <div className="pt-12 border-t border-slate-100 grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-5 p-6 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-100/30">
                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-md">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Dhaka Campus Email</p>
                            <p className="text-blue-900 font-bold text-sm md:text-lg">dhaka@int-japan.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-6 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-100/30">
                        <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-md">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tokyo Office Email</p>
                            <p className="text-blue-900 font-bold text-sm md:text-lg">tokyo@int-japan.com</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AccessInfoSection;