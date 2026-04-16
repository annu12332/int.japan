import React from 'react';
import { Users, Star, Quote, Heart, GraduationCap, ChevronRight } from 'lucide-react';

const ExcellenceSection = ({ lang = 'en' }) => {
    const translations = {
        en: {
            staffBadge: "Expert Faculty",
            staffTitle: "Learn from the Best",
            staffDesc: "Our instructors provide careful guidance tailored to each student's learning goals.",
            studentTitle: "Student Success Stories",
            recruitTitle: "Japanese Teacher Recruitment",
            recruitSub: "Would you like to work with us?",
            applyBtn: "Apply as Teacher",
            staffCards: [
                {
                    title: "Veteran Instructors",
                    desc: "Senior instructors with extensive experience and deep knowledge provide reliable guidance.",
                    icon: <Users className="text-blue-600" />
                },
                {
                    title: "Warm Instruction",
                    desc: "Learn in a friendly atmosphere with close relationships and focus on Japanese culture.",
                    icon: <Heart className="text-red-600" />
                }
            ],
            testimonials: [
                { name: "Md. Rahman (26)", text: "Teachers are really kind and teach repeatedly. Learning with apps and tasks is fun!" },
                { name: "Fatima Akter (22)", text: "Fees were transparent and clear, which made me feel safe. Everything is open here." }
            ]
        },
        bn: {
            staffBadge: "অভিজ্ঞ শিক্ষক মন্ডলী",
            staffTitle: "সেরাদের কাছ থেকে শিখুন",
            staffDesc: "আমাদের শিক্ষকরা প্রতিটি শিক্ষার্থীর লক্ষ্যের সাথে সামঞ্জস্য রেখে যত্নশীল নির্দেশনা প্রদান করেন।",
            studentTitle: "সফল শিক্ষার্থীদের কথা",
            recruitTitle: "জাপানি শিক্ষক নিয়োগ",
            recruitSub: "আপনি কি আমাদের সাথে কাজ করতে আগ্রহী?",
            applyBtn: "শিক্ষক হিসেবে আবেদন করুন",
            staffCards: [
                {
                    title: "অভিজ্ঞ ইনস্ট্রাক্টর",
                    desc: "দীর্ঘ অভিজ্ঞতা এবং গভীর জ্ঞানসম্পন্ন সিনিয়র শিক্ষকদের দ্বারা নির্ভরযোগ্য শিক্ষা।",
                    icon: <Users className="text-blue-600" />
                },
                {
                    title: "বন্ধুত্বপূর্ণ পরিবেশ",
                    desc: "জাপানি সংস্কৃতি এবং জীবনধারা সম্পর্কে আন্তরিক ও ঘনিষ্ঠ পরিবেশে শিক্ষা প্রদান।",
                    icon: <Heart className="text-red-600" />
                }
            ],
            testimonials: [
                { name: "মো. রহমান (২৬)", text: "শিক্ষকরা অত্যন্ত দয়ালু এবং বারবার বুঝিয়ে দেন। অ্যাপ ও টাস্কের মাধ্যমে শেখা খুব মজার!" },
                { name: "ফাতিমা আক্তার (২২)", text: "ফি কাঠামো স্বচ্ছ ও স্পষ্ট ছিল, যা আমাকে আশ্বস্ত করেছে। এখানে সবকিছুই সবার জন্য উন্মুক্ত।" }
            ]
        },
        jp: {
            staffBadge: "専門教員",
            staffTitle: "最高の講師から学ぶ",
            staffDesc: "経験豊富な講師が、学生一人ひとりの学習目標に合わせて丁寧な指導を行います。",
            studentTitle: "合格者の声",
            recruitTitle: "日本語教師採用",
            recruitSub: "私たちと一緒に働きませんか？",
            applyBtn: "教師として応募する",
            staffCards: [
                {
                    title: "ベテラン講師による指導",
                    desc: "豊富な経験と深い知識を持つシニア講師が、確実な習得をサポートします。",
                    icon: <Users className="text-blue-600" />
                },
                {
                    title: "アットホームな指導",
                    desc: "講師との距離が近く、日本の文化や生活習慣も学べる心地よい環境です。",
                    icon: <Heart className="text-red-600" />
                }
            ],
            testimonials: [
                { name: "Md. Rahman (26)", text: "先生が本当に親切で、わからないところは何度でも教えてくれます。毎日が楽しいです！" },
                { name: "Fatima Akter (22)", text: "料金が明確だったので安心して申し込めました。ここは全部オープンでした。" }
            ]
        }
    };

    const content = translations[lang] || translations.en;

    return (
        <section className="bg-white py-12 md:py-24 px-4 font-sans text-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* TOP: Staff Excellence */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                            <Star size={14} className="fill-blue-600" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">{content.staffBadge}</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-blue-900 leading-tight">
                            {content.staffTitle}
                        </h2>
                        <p className="text-slate-500 text-base md:text-lg leading-relaxed">{content.staffDesc}</p>

                        <div className="grid sm:grid-cols-2 gap-4 pt-4">
                            {content.staffCards.map((card, idx) => (
                                <div key={idx} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all hover:bg-white hover:shadow-lg">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                                        {card.icon}
                                    </div>
                                    <h4 className="font-bold text-blue-950 mb-2 text-sm md:text-base">{card.title}</h4>
                                    <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recruitment Promo Card */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-red-600 rounded-[2.5rem] md:rounded-[3.5rem] rotate-2 scale-95 opacity-10 group-hover:rotate-0 transition-transform"></div>
                        <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] text-white overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
                                <GraduationCap size={160} />
                            </div>
                            <h3 className="text-2xl md:text-4xl font-black mb-4 leading-tight">{content.recruitTitle}</h3>
                            <p className="text-blue-100 text-sm md:text-lg mb-8 opacity-90">{content.recruitSub}</p>
                            <button className="flex items-center gap-3 bg-red-600 hover:bg-red-700 px-6 md:px-10 py-3 md:py-5 rounded-2xl font-black text-white transition-all shadow-xl shadow-red-900/20 active:scale-95 text-sm md:text-base">
                                {content.applyBtn} <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* BOTTOM: Student Voices */}
                <div className="pt-16 border-t border-slate-100">
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-4xl font-black text-blue-900 mb-4">{content.studentTitle}</h2>
                        <div className="w-20 h-1.5 bg-red-600 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {content.testimonials.map((t, idx) => (
                            <div key={idx} className="relative p-8 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-[3rem] border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-100/40 group">
                                <Quote className="absolute top-6 right-8 text-blue-100 group-hover:text-blue-200 transition-colors" size={48} />
                                <p className="text-slate-600 italic mb-8 leading-relaxed relative z-10 text-xs md:text-base">
                                    "{t.text}"
                                </p>
                                <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                                    <div className="w-10 h-10 md:w-14 md:h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-md">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-blue-950 text-sm md:text-lg">{t.name}</h5>
                                        <div className="flex gap-0.5 mt-1">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExcellenceSection;