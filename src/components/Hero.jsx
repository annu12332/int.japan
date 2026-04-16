import React from 'react';

const HeroSection = ({ lang = 'en' }) => {
    const translations = {
        en: {
            titlePart1: "Your Best Chance",
            titlePart2: "to Go to Japan!",
            description: "Realize your dreams in a safe, secure, and economically prosperous country with our expert guidance.",
            btnRequest: "Request Information",
            btnCourse: "Course Details",
            btnSitemap: "Sitemap",
            detailsTitle: "More Details Here",
            pdfNote: "* PDF files will open in a new window",
            cards: [
                { title: 'Admission Guide', icon: '📋', path: '/admission-guide' },
                { title: 'Application Form', icon: '📝', path: '/application-form' },
                { title: 'School Rules', icon: '⚖️', path: '/school-rules' },
                { title: 'Resume Template', icon: '📄', path: '/resume' },
                { title: 'Career Path', icon: '🎯', path: '/career' },
                { title: 'School Opening', icon: '🏫', path: '/opening' },
            ]
        },
        bn: {
            titlePart1: "জাপান যাওয়ার",
            titlePart2: "সেরা সুযোগ আপনার!",
            description: "আমাদের বিশেষজ্ঞ নির্দেশনায় একটি নিরাপদ, সুরক্ষিত এবং অর্থনৈতিকভাবে সমৃদ্ধ দেশে আপনার স্বপ্ন বাস্তবায়ন করুন।",
            btnRequest: "তথ্য অনুরোধ করুন",
            btnCourse: "কোর্স ডিটেইলস",
            btnSitemap: "সাইটম্যাপ",
            detailsTitle: "আরও বিস্তারিত এখানে",
            pdfNote: "* PDF ফাইলগুলো নতুন উইন্ডোতে ওপেন হবে",
            cards: [
                { title: 'ভর্তি নির্দেশিকা', icon: '📋', path: '/admission-guide' },
                { title: 'আবেদন ফর্ম', icon: '📝', path: '/application-form' },
                { title: 'স্কুল নিয়ম', icon: '⚖️', path: '/school-rules' },
                { title: 'জীবনবৃত্তান্ত', icon: '📄', path: '/resume' },
                { title: 'ক্যারিয়ার পাথ', icon: '🎯', path: '/career' },
                { title: 'স্কুল ওপেনিং', icon: '🏫', path: '/opening' },
            ]
        },
        jp: {
            titlePart1: "日本へ行く",
            titlePart2: "絶好のチャンス！",
            description: "私たちの専門的な指導により、安全で安心、そして経済的に繁栄した国であなたの夢を実現しましょう。",
            btnRequest: "資料請求",
            btnCourse: "コース詳細",
            btnSitemap: "サイトマップ",
            detailsTitle: "詳細はこちら",
            pdfNote: "* PDFファイルは新しいウィンドウで開きます",
            cards: [
                { title: '入学案内', icon: '📋', path: '/admission-guide' },
                { title: '願書', icon: '📝', path: '/application-form' },
                { title: '校則', icon: '⚖️', path: '/school-rules' },
                { title: '履歴書型', icon: '📄', path: '/resume' },
                { title: '進路', icon: '🎯', path: '/career' },
                { title: '開校式', icon: '🏫', path: '/opening' },
            ]
        }
    };

    const content = translations[lang] || translations.en;

    return (
        <section className="relative min-h-screen bg-[#1e4b8f] overflow-hidden flex items-center">

            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform translate-x-20 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    <div className="flex flex-col space-y-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight text-center lg:text-left transition-all duration-500">
                                {content.titlePart1} <br />
                                <span className="text-blue-200">{content.titlePart2}</span>
                            </h1>
                            <p className="text-blue-100 text-base md:text-xl max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                                {content.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <a href="#contact" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#ff6b6b] hover:bg-[#ff5252] text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg active:scale-95">
                                    {content.btnRequest}
                                </button>
                            </a>
                            <div className="flex gap-3 w-full sm:w-auto justify-center">
                                <a href="#course" className="flex-1 sm:flex-none">
                                    <button className="w-full px-5 py-3 border-2 border-white/30 hover:border-white text-white rounded-full transition-all text-xs font-semibold">
                                        {content.btnCourse}
                                    </button>
                                </a>
                                <a href="#sitemap" className="flex-1 sm:flex-none">
                                    <button className="w-full px-5 py-3 border-2 border-white/30 hover:border-white text-white rounded-full transition-all text-xs font-semibold">
                                        {content.btnSitemap}
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-3xl border border-white/20 max-w-md mx-auto lg:mx-0 shadow-2xl">
                            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-white font-bold border-b border-white/10 pb-2 text-sm">
                                <span>📂</span> {content.detailsTitle}
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {content.cards.map((card, index) => (
                                    <a 
                                        key={index} 
                                        href={card.path}
                                        className="bg-white/5 hover:bg-white/20 p-3 rounded-xl border border-white/10 cursor-pointer transition-all group text-center block"
                                    >
                                        <div className="text-xl mb-1 group-hover:scale-110 transition-transform">{card.icon}</div>
                                        <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-blue-50 font-bold leading-tight">
                                            {card.title}
                                        </p>
                                    </a>
                                ))}
                            </div>
                            <p className="text-[10px] text-blue-200 mt-4 text-center italic">
                                {content.pdfNote}
                            </p>
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2">
                        <div className="flex lg:flex-col gap-4 sm:gap-6 justify-center items-center">
                            <div className="w-1/2 lg:w-full max-w-[280px] lg:max-w-md transform lg:-translate-x-10 hover:translate-x-0 transition-all duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
                                    alt="Students"
                                    className="rounded-2xl lg:rounded-[2rem] shadow-2xl border-4 lg:border-8 border-white/10 w-full aspect-square lg:aspect-auto lg:h-64 object-cover"
                                />
                            </div>
                            <div className="w-1/2 lg:w-full max-w-[280px] lg:max-w-md transform lg:translate-x-10 hover:translate-x-0 transition-all duration-500 mt-6 lg:mt-0">
                                <img
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
                                    alt="Teacher"
                                    className="rounded-2xl lg:rounded-[2rem] shadow-2xl border-4 lg:border-8 border-white/10 w-full aspect-square lg:max-w-md lg:h-64 object-cover"
                                />
                            </div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-blue-400 rounded-full blur-[80px] sm:blur-[120px] opacity-20 -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;