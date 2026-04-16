import React from 'react';
import { Mail, Phone, User, Send, MapPin, Clock } from 'lucide-react';

const ContactSection = ({ lang = 'en' }) => {
    const translations = {
        en: {
            title: "Contact Us",
            subtitle: "Have questions? Feel free to reach out to us anytime.",
            placeholders: {
                name: "Name / নাম / お名前",
                email: "Email / ইমেইল / メールアドレス",
                phone: "Phone / ফোন / 電話番号",
                msg: "Your Message / বার্তা / お問い合わせ内容"
            },
            btnSend: "Send Message",
            infoTitle: "Quick Contact",
            locations: [
                { name: "Dhaka Campus", detail: "019-4243-8132", icon: <Phone size={16} /> },
                { name: "Tokyo Office", detail: "048-757-8232", icon: <Phone size={16} /> }
            ]
        },
        bn: {
            title: "যোগাযোগ করুন",
            subtitle: "আপনার কোনো প্রশ্ন থাকলে যেকোনো সময় আমাদের জানান।",
            placeholders: {
                name: "নাম / Name / お名前",
                email: "ইমেইল / Email / メールアドレス",
                phone: "ফোন / Phone / 電話番号",
                msg: "আপনার বার্তা / Message / お問い合わせ内容"
            },
            btnSend: "বার্তা পাঠান",
            infoTitle: "দ্রুত যোগাযোগ",
            locations: [
                { name: "ঢাকা ক্যাম্পাস", detail: "০১৯-৪২৪৩-৮১৩২", icon: <Phone size={16} /> },
                { name: "টোকিও অফিস", detail: "০৪৮-৭৫৭-৮২৩২", icon: <Phone size={16} /> }
            ]
        },
        jp: {
            title: "お問い合わせ",
            subtitle: "ご質問やご相談がございましたら、お気軽にご連絡ください。",
            placeholders: {
                name: "お名前 / Name / নাম",
                email: "メールアドレス / Email / ইমেইল",
                phone: "電話番号 / Phone / ফোন",
                msg: "お問い合わせ内容 / Message / বার্তা"
            },
            btnSend: "メッセージ送信",
            infoTitle: "連絡先情報",
            locations: [
                { name: "ダッカ校", detail: "019-4243-8132", icon: <Phone size={16} /> },
                { name: "東京オフィス", detail: "048-757-8232", icon: <Phone size={16} /> }
            ]
        }
    };

    const t = translations[lang] || translations.en;

    return (
        <section id='contact' className="bg-slate-50 py-12 md:py-20 px-4 font-sans text-slate-900">
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-black text-[#1A3673] tracking-tight mb-2">
                        {t.title}
                    </h2>
                    <div className="w-12 h-1 bg-[#EE1D23] mx-auto rounded-full mb-4"></div>
                    <p className="text-sm font-bold text-slate-500 max-w-md mx-auto">{t.subtitle}</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Contact Info Info */}
                    <div className="lg:col-span-5 space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                            {t.infoTitle}
                        </h4>
                        
                        <div className="grid gap-3">
                            {t.locations.map((loc, i) => (
                                <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-100 shadow-sm group hover:border-[#1A3673]/30 transition-all">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1A3673]">
                                        {loc.icon}
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">{loc.name}</p>
                                        <p className="text-sm font-black text-[#1A3673]">{loc.detail}</p>
                                    </div>
                                </div>
                            ))}
                            
                            {/* Static Info for email */}
                            <div className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#EE1D23]">
                                    <Mail size={16} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Official Email</p>
                                    <p className="text-sm font-black text-[#1A3673]">dhaka@int-japan.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Compact Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input 
                                    type="text" 
                                    placeholder={t.placeholders.name}
                                    className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-[#1A3673] focus:bg-white outline-none transition-all text-xs font-bold"
                                />
                                <input 
                                    type="email" 
                                    placeholder={t.placeholders.email}
                                    className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-[#1A3673] focus:bg-white outline-none transition-all text-xs font-bold"
                                />
                                <div className="md:col-span-2">
                                    <input 
                                        type="tel" 
                                        placeholder={t.placeholders.phone}
                                        className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-[#1A3673] focus:bg-white outline-none transition-all text-xs font-bold"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <textarea 
                                        rows="3"
                                        placeholder={t.placeholders.msg}
                                        className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-[#1A3673] focus:bg-white outline-none transition-all text-xs font-bold resize-none"
                                    ></textarea>
                                </div>

                                <div className="md:col-span-2 pt-2 text-center md:text-left">
                                    <button className="bg-[#EE1D23] hover:bg-black text-white px-10 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center gap-2 mx-auto md:mx-0">
                                        <Send size={14} /> {t.btnSend}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;