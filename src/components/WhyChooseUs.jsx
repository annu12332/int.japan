import React from 'react';
import { Link } from 'react-router-dom';
import {
    Monitor,
    Users2,
    BookOpenCheck,
    Target,
    Briefcase,
    Globe2,
    ChevronRight
} from 'lucide-react';

const WhyChooseSection = ({ lang = 'en' }) => {
    const translations = {
        en: {
            title: "Why Choose INT Japan?",
            features: [
                { title: "Modern Facilities", desc: "A/C equipped clean classes", icon: <Monitor className="text-blue-600" /> },
                { title: "Expert Faculty", desc: "Native & N3 instructors", icon: <Users2 className="text-red-600" /> },
                { title: "Original Materials", desc: "For BD learners", icon: <BookOpenCheck className="text-blue-600" /> },
                { title: "Small Batches", desc: "Max 25 per class", icon: <Target className="text-red-600" /> },
                { title: "Career Support", desc: "CV & Interview help", icon: <Briefcase className="text-blue-600" /> },
                { title: "Study Abroad", desc: "School partnerships", icon: <Globe2 className="text-red-600" /> }
            ]
        },
        bn: {
            title: "কেন আমাদের বেছে নেবেন?",
            features: [
                { title: "আধুনিক সুবিধা", desc: "এসি রুম ও পরিষ্কার ক্লাস", icon: <Monitor className="text-blue-600" /> },
                { title: "অভিজ্ঞ শিক্ষক", desc: "নেটিভ ও N3 মেন্টর", icon: <Users2 className="text-red-600" /> },
                { title: "নিজস্ব ম্যাটেরিয়াল", desc: "BD শিক্ষার্থীদের উপযোগী", icon: <BookOpenCheck className="text-blue-600" /> },
                { title: "সীমিত সিট", desc: "ব্যাচে সর্বোচ্চ ২৫ জন", icon: <Target className="text-red-600" /> },
                { title: "ক্যারিয়ার সাপোর্ট", desc: "সিভি ও ইন্টারভিউ গাইড", icon: <Briefcase className="text-blue-600" /> },
                { title: "বিদেশে উচ্চশিক্ষা", desc: "সরাসরি পার্টনারশিপ", icon: <Globe2 className="text-red-600" /> }
            ]
        },
        jp: {
            title: "選ばれる理由",
            features: [
                { title: "最新設備", desc: "エアコン完備の明るい教室", icon: <Monitor className="text-blue-600" /> },
                { title: "ベテラン講師", desc: "日本人講師とN3保持者", icon: <Users2 className="text-red-600" /> },
                { title: "オリジナル教材", desc: "独自のわかりやすい教材", icon: <BookOpenCheck className="text-blue-600" /> },
                { title: "少人数制", desc: "1クラス最大25名", icon: <Target className="text-red-600" /> },
                { title: "就職サポート", desc: "履歴書添削と面接練習", icon: <Briefcase className="text-blue-600" /> },
                { title: "留学支援", desc: "提携校へのスムーズな進学", icon: <Globe2 className="text-red-600" /> }
            ]
        }
    };

    const content = translations[lang] || translations.en;

    return (
        <section id='wcu' className="bg-white py-12 px-4 font-sans text-slate-900">
            <div className="max-w-5xl mx-auto">

                {/* Compact Header */}
                <div className="flex items-center justify-between mb-10 border-b border-slate-100 pb-6">
                    <h2 className="text-2xl md:text-3xl font-black text-blue-900 flex items-center gap-3">
                        <span className="w-2 h-8 bg-red-600 rounded-full"></span>
                        {content.title}
                    </h2>
                    <button className="hidden sm:flex items-center gap-1 text-xs font-bold text-red-600 uppercase tracking-wider hover:gap-2 transition-all">
                        Join Now <ChevronRight size={14} />
                    </button>
                </div>

                {/* Feature Grid - More Compact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {content.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                {React.cloneElement(f.icon, { size: 24 })}
                            </div>
                            <div className="overflow-hidden">
                                <h3 className="font-bold text-blue-900 text-sm md:text-base leading-tight truncate">{f.title}</h3>
                                <p className="text-[11px] md:text-xs text-slate-500 mt-1 leading-tight">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Minimal CTA */}
                <div className="mt-10 p-4 bg-blue-900 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                    <p className="text-white text-xs md:text-sm font-medium">Ready to start? Bangladesh's No.1 track record center.</p>
                    <Link to={"/application-form"}><button className="px-6 py-2 bg-red-600 text-white text-xs font-black rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20">
                        Apply Now
                    </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseSection;