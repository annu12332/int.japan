import React from 'react';
import { MapPin, Mail, Phone, Globe, Building2, Navigation, ChevronRight, Info } from 'lucide-react';

const AccessInfo = ({ lang = 'en' }) => {
    const translations = {
        en: {
            title: "Access Info",
            badge: "Global Network",
            btn: "Direction",
            locs: [
                {
                    name: "Dhaka Campus",
                    addr: "House 27/1, Road 02, Sector 15, Uttara, Diabari, Dhaka",
                    tel: "019-4234-8132",
                    mail: "dhaka@int-japan.com",
                    theme: "blue",
                    icon: <Building2 size={20} />
                },
                {
                    name: "Tokyo Office",
                    addr: "2nd Floor, 4-1-1 Honcho, Iwatsuki-ku, Saitama City, Japan",
                    tel: "048-757-8232",
                    mail: "tokyo@int-japan.com",
                    theme: "red",
                    icon: <Globe size={20} />
                }
            ]
        },
        bn: {
            title: "যোগাযোগ",
            badge: "গ্লোবাল নেটওয়ার্ক",
            btn: "ম্যাপ দেখুন",
            locs: [
                {
                    name: "ঢাকা ক্যাম্পাস",
                    addr: "হাউজ ২৭/১, রোড ০২, সেক্টর ১৫, উত্তরা, দিয়াবাড়ি, ঢাকা",
                    tel: "০১৯-৪২৩৪-৮১৩২",
                    mail: "dhaka@int-japan.com",
                    theme: "blue",
                    icon: <Building2 size={20} />
                },
                {
                    name: "টোকিও অফিস",
                    addr: "২য় তলা, ৪-১-১ হনচো, সাইতামা সিটি, জাপান",
                    tel: "০৪৮-৭৫৭-৮২৩২",
                    mail: "tokyo@int-japan.com",
                    theme: "red",
                    icon: <Globe size={20} />
                }
            ]
        },
        jp: {
            title: "アクセス",
            badge: "グローバル",
            btn: "案内図",
            locs: [
                {
                    name: "ダッカ校",
                    addr: "House 27/1, Road 02, Sector 15, Uttara, Diabari, Dhaka",
                    tel: "019-4234-8132",
                    mail: "dhaka@int-japan.com",
                    theme: "blue",
                    icon: <Building2 size={20} />
                },
                {
                    name: "東京オフィス",
                    addr: "〒339-0057 埼玉県さいたま市岩槻区本町4-1-1 2階",
                    tel: "048-757-8232",
                    mail: "tokyo@int-japan.com",
                    theme: "red",
                    icon: <Globe size={20} />
                }
            ]
        }
    };

    const content = translations[lang] || translations.en;

    return (
        <section className="bg-slate-50 py-12 md:py-20 px-4 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-slate-200 pb-6">
                    <div>
                        <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100 italic">
                            {content.badge}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 italic">
                            {content.title.split(' ')[0]} <span className="text-red-600">.</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                        <Info size={14} /> 24/7 Support Available
                    </div>
                </div>

                {/* Compact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {content.locs.map((loc, i) => (
                        <div key={i} className="group relative bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden">
                            {/* Theme Indicator */}
                            <div className={`absolute top-0 left-0 w-1.5 h-full ${loc.theme === 'blue' ? 'bg-blue-600' : 'bg-red-600'}`}></div>
                            
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-2xl ${loc.theme === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-600'}`}>
                                    {loc.icon}
                                </div>
                                <button className="text-slate-300 hover:text-slate-900 transition-colors">
                                    <Navigation size={20} />
                                </button>
                            </div>

                            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight italic">
                                {loc.name}
                            </h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex gap-3 items-start">
                                    <MapPin size={16} className="text-slate-400 shrink-0 mt-1" />
                                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                                        {loc.addr}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={16} className="text-slate-400" />
                                    <p className="font-bold text-slate-900 text-sm md:text-base">{loc.tel}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail size={16} className="text-slate-400" />
                                    <p className="text-slate-500 text-xs font-medium">{loc.mail}</p>
                                </div>
                            </div>

                            <button className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                                loc.theme === 'blue' 
                                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100' 
                                : 'bg-slate-900 text-white hover:bg-red-600 shadow-lg shadow-slate-200'
                            }`}>
                                {content.btn} <ChevronRight size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AccessInfo;