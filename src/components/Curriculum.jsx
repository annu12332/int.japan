import React from 'react';
import {
    CheckCircle2,
    Target,
    BookOpen,
    Award,
    ArrowRight,
    Info
} from 'lucide-react';

const CurriculumSection = ({ lang = 'en' }) => {
    const translations = {
        en: {
            sectionTitle: "Academic Path",
            n5: "N5 Curriculum",
            n4: "N4 Curriculum",
            n5Desc: "Start from zero and master basic Japanese communication.",
            n4Desc: "Bridge the gap to professional proficiency for jobs in Japan.",
            reqTitle: "Admission Requirements",
            uniqueTitle: "Why Choose Us?",
            apply: "Apply Now",
            requirements: [
                "Age: 18+ (N5: 16+)",
                "Education: SSC or higher",
                "Schedule: 5 days a week",
                "Goal: Work or Study in Japan",
                "Documents: NID & Photo"
            ],
            stats: [
                { val: "100%", label: "Speaking" },
                { val: "100%", label: "Native Prep" },
                { val: "98%", label: "Support" }
            ]
        },
        bn: {
            sectionTitle: "একাডেমিক পথ",
            n5: "N5 কারিকুলাম",
            n4: "N4 কারিকুলাম",
            n5Desc: "শূন্য থেকে শুরু করে জাপানি ভাষার মৌলিক দক্ষতা অর্জন করুন।",
            n4Desc: "জাপানে পেশাদার কাজের জন্য উন্নত দক্ষতা তৈরি করুন।",
            reqTitle: "ভর্তির শর্তাবলী",
            uniqueTitle: "কেন আমরা সেরা?",
            apply: "আবেদন করুন",
            requirements: [
                "বয়স: ১৮+ (N5: ১৬+)",
                "শিক্ষা: এসএসসি বা উচ্চতর",
                "সময়: সপ্তাহে ৫ দিন ক্লাস",
                "লক্ষ্য: জাপানে কাজ বা পড়াশোনা",
                "নথিপত্র: এনআইডি ও ছবি"
            ],
            stats: [
                { val: "১০০%", label: "কথোপকথন" },
                { val: "১০০%", label: "নেটিভ টিচার" },
                { val: "৯৮%", label: "হোম সাপোর্ট" }
            ]
        },
        jp: {
            sectionTitle: "アカデミックパス",
            n5: "N5 カリキュラム",
            n4: "N4 カリキュラム",
            n5Desc: "ゼロから始めて、基本的な日本語コミュニケーションを習得します。",
            n4Desc: "日本の職場で必要なプロフェッショナルな能力を身につけます。",
            reqTitle: "入学要件",
            uniqueTitle: "当校の強み",
            apply: "今すぐ申し込む",
            requirements: [
                "年齢：18歳以上（N5は16歳〜）",
                "学歴：SSC修了以上",
                "頻度：週5日の通学",
                "目的：日本での就職・進学",
                "書類：IDカードと写真"
            ],
            stats: [
                { val: "100%", label: "会話重視" },
                { val: "100%", label: "ネイティブ基準" },
                { val: "98%", label: "学習支援" }
            ]
        }
    };

    const content = translations[lang] || translations.en;

    return (
        <section className="bg-white py-12 md:py-20 px-4 font-sans antialiased text-slate-900">
            <div className="max-w-6xl mx-auto">

                {/* Compact Header */}
                <div className="flex items-center gap-4 mb-10 border-l-4 border-red-600 pl-4">
                    <h2 className="text-3xl md:text-4xl font-black text-blue-900 uppercase tracking-tight">
                        {content.sectionTitle}
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-6">

                    {/* Left: Curriculum Cards (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                        <div className="group flex flex-col sm:flex-row items-start gap-5 p-6 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-100 hover:border-blue-200">
                            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-blue-900 mb-2">{content.n5}</h3>
                                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{content.n5Desc}</p>
                                <button className="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    {content.apply} <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>

                        <div className="group flex flex-col sm:flex-row items-start gap-5 p-6 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-red-100 hover:border-red-200">
                            <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-200">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-blue-900 mb-2">{content.n4}</h3>
                                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{content.n4Desc}</p>
                                <button className="text-xs font-bold text-red-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    {content.apply} <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Unique Stats Mini-Row */}
                        <div className="grid grid-cols-3 gap-3">
                            {content.stats.map((s, i) => (
                                <div key={i} className="bg-white border border-slate-100 p-4 rounded-2xl text-center shadow-sm">
                                    <div className="text-lg font-black text-red-600">{s.val}</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Requirements (5 cols) */}
                    <div className="lg:col-span-5 bg-blue-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Info size={80} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <Target className="text-red-400" size={24} />
                                <h3 className="text-xl font-bold tracking-tight">{content.reqTitle}</h3>
                            </div>

                            <div className="space-y-4">
                                {content.requirements.map((req, i) => (
                                    <div key={i} className="flex items-start gap-3 group">
                                        <CheckCircle2 size={18} className="text-red-400 flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                                        <span className="text-blue-50 text-sm font-medium leading-snug">{req}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 pt-6 border-t border-white/10">
                                <p className="text-[10px] text-blue-200 italic leading-tight">
                                    * Enrollment process can be completed via phone or our online application portal.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CurriculumSection;