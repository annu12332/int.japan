import React from 'react';
import { Mail, Phone, MessageSquare, User, Send, Globe2, MapPin } from 'lucide-react';

const ContactSection = ({ lang = 'en' }) => {
    const translations = {
        en: {
            badge: "Get In Touch",
            title: "Contact Us",
            subtitle: "If you have any questions or consultations, please feel free to contact us.",
            placeholders: {
                name: "お名前 / Name / নাম",
                email: "メールアドレス / Email / ইমেইল",
                phone: "電話番号 / Phone / ফোন",
                msg: "お問い合わせ内容 / Message / বার্তা"
            },
            btnSend: "Send Message",
            infoTitle: "Quick Contact",
            locations: [
                { name: "Dhaka Campus", detail: "019-4234-8132" },
                { name: "Tokyo Office", detail: "048-757-8232" }
            ]
        },
        bn: {
            badge: "যোগাযোগ করুন",
            title: "আমাদের সাথে যোগাযোগ",
            subtitle: "আপনার যদি কোনো প্রশ্ন বা পরামর্শ থাকে, তবে নির্দ্বিধায় আমাদের সাথে যোগাযোগ করুন।",
            placeholders: {
                name: "নাম / Name / お名前",
                email: "ইমেইল / Email / メールアドレス",
                phone: "ফোন / Phone / 電話番号",
                msg: "বার্তা / Message / お問い合わせ内容"
            },
            btnSend: "বার্তা পাঠান",
            infoTitle: "দ্রুত যোগাযোগ",
            locations: [
                { name: "ঢাকা ক্যাম্পাস", detail: "০১৯-৪২৩৪-৮১৩২" },
                { name: "টোকিও অফিস", detail: "০৪৮-৭৫৭-৮২৩২" }
            ]
        },
        jp: {
            badge: "お問い合わせ",
            title: "Contact Us",
            subtitle: "ご質問やご相談がございましたら、お気軽にお問い合わせください。",
            placeholders: {
                name: "お名前 / Name / নাম",
                email: "メールアドレス / Email / ইমেইল",
                phone: "電話番号 / Phone / ফোন",
                msg: "お問い合わせ内容 / Message / বার্তা"
            },
            btnSend: "メッセージを送信",
            infoTitle: "クイック連絡先",
            locations: [
                { name: "ダッカ校", detail: "019-4234-8132" },
                { name: "東京オフィス", detail: "048-757-8232" }
            ]
        }
    };

    const content = translations[lang] || translations.en;

    return (
        <section className="bg-white py-16 md:py-28 px-4 font-sans text-slate-900">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header - Following your existing style */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-blue-900 tracking-tight mb-4">
                        {content.title}
                    </h2>
                    <div className="w-16 h-1 bg-red-500 mx-auto rounded-full mb-8"></div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Side: Text and Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 leading-snug">
                                {content.subtitle}
                            </h3>
                            <div className="w-12 h-1 bg-slate-200 rounded-full"></div>
                        </div>

                        <div className="grid gap-6">
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">
                                {content.infoTitle}
                            </h4>
                            {content.locations.map((loc, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{loc.name}</p>
                                        <p className="font-bold text-blue-950">{loc.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Contact Form - Following image_af20ac.png */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden">
                            {/* Decorative corner element */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 -mr-12 -mt-12 rounded-full opacity-50"></div>

                            <form className="space-y-6 relative z-10">
                                {/* Name Input */}
                                <div className="relative group">
                                    <input 
                                        type="text" 
                                        placeholder={content.placeholders.name}
                                        className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium text-slate-700"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="relative group">
                                    <input 
                                        type="email" 
                                        placeholder={content.placeholders.email}
                                        className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium text-slate-700"
                                    />
                                </div>

                                {/* Phone Input */}
                                <div className="relative group">
                                    <input 
                                        type="tel" 
                                        placeholder={content.placeholders.phone}
                                        className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium text-slate-700"
                                    />
                                </div>

                                {/* Message Input */}
                                <div className="relative group">
                                    <textarea 
                                        rows="4"
                                        placeholder={content.placeholders.msg}
                                        className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium text-slate-700 resize-none"
                                    ></textarea>
                                </div>

                                {/* Send Button - Following your brand red color */}
                                <div className="pt-2">
                                    <button className="w-full md:w-auto px-10 py-4 bg-[#FF6B6B] hover:bg-[#fa5252] text-white font-black rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-100 active:scale-95">
                                        <Send size={18} /> {content.btnSend}
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