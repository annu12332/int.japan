import React from 'react';
import {
    BookOpen,
    Clock,
    CreditCard,
    CheckCircle,
    Sparkles,
    CalendarDays,
    Users
} from 'lucide-react';

const AdmissionCoursesSection = ({ lang = 'jp' }) => {
    const translations = {
        en: {
            title: "Admissions & Courses",
            admissionTitle: "Admission Requirements",
            courseTitle: "Our Curriculum",
            feesTitle: "Fees & Benefits",
            scheduleNote: "Sun - Thu (5 days/week)",
            requirements: [
                "Age: 18+ (N5: 16+)",
                "Education: SSC completed",
                "Target: Work or study in Japan",
                "Documents: NID, Photo, Certificates"
            ],
            courses: [
                { name: "N5 Curriculum", hours: "3 Months (240h)", fee: "15,000 BDT" },
                { name: "N4 Curriculum", hours: "6 Months (480h)", fee: "36,000 BDT" },
                { name: "N3 Curriculum", hours: "6 Months (480h)", fee: "36,000 BDT" }
            ],
            perks: ["Family Discount", "Refund Guarantee", "10% OFF for 2+ persons"]
        },
        bn: {
            title: "ভর্তি ও কোর্সসমূহ",
            admissionTitle: "ভর্তির শর্তাবলী",
            courseTitle: "আমাদের কারিকুলাম",
            feesTitle: "ফি এবং সুবিধা",
            scheduleNote: "রবি - বৃহস্পতি (সপ্তাহে ৫ দিন)",
            requirements: [
                "বয়স: ১৮+ (N5: ১৬+)",
                "শিক্ষা: এসএসসি সম্পন্ন",
                "লক্ষ্য: জাপানে কাজ বা উচ্চশিক্ষা",
                "ডকুমেন্ট: এনআইডি, ছবি, সার্টিফিকেট"
            ],
            courses: [
                { name: "N5 কারিকুলাম", hours: "৩ মাস (২৪০ ঘণ্টা)", fee: "১৫,০০০ টাকা" },
                { name: "N4 কারিকুলাম", hours: "৬ মাস (৪৮০ ঘণ্টা)", fee: "৩৬,০০০ টাকা" },
                { name: "N3 কারিকুলাম", hours: "৬ মাস (৪৮০ ঘণ্টা)", fee: "৩৬,০০০ টাকা" }
            ],
            perks: ["ফ্যামিলি ডিসকাউন্ট", "রিফান্ড গ্যারান্টি", "২+ জন ভর্তি হলে ১০% ছাড়"]
        },
        jp: {
            title: "入学とコース案内",
            admissionTitle: "入学条件",
            courseTitle: "カリキュラム",
            feesTitle: "学費と特典",
            scheduleNote: "日曜日〜木曜日 (週5日)",
            requirements: [
                "年齢：18歳以上（N5は16歳以上）",
                "学歴：SSC（中等教育）修了以上",
                "目標：日本就職・留学を目指す方",
                "書類：身分証、写真、修了証書"
            ],
            courses: [
                { name: "N5 カリキュラム", hours: "3ヶ月 (240時間)", fee: "15,000 タカ" },
                { name: "N4 カリキュラム", hours: "6ヶ月 (480時間)", fee: "36,000 タカ" },
                { name: "N3 カリキュラム", hours: "6ヶ月 (480時間)", fee: "36,000 タカ" }
            ],
            perks: ["家族割引あり", "返金保証 (条件あり)", "2名以上で10%OFF"]
        }
    };

    const content = translations[lang] || translations.en;

    return (
        <section id='course' className="bg-slate-50 py-12 md:py-20 px-4 font-sans text-slate-900">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-4">{content.title}</h2>
                        <div className="flex items-center gap-2 text-red-600 font-bold text-sm bg-red-50 w-fit px-3 py-1 rounded-lg">
                            <CalendarDays size={16} />
                            {content.scheduleNote}
                        </div>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <div className="text-right">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enrollment Fee</p>
                            <p className="text-xl font-black text-blue-900">5,000 BDT</p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">

                    {/* 1. Admission Requirements */}
                    <div className="bg-white p-8 rounded-[1.5rem] border border-slate-100 shadow-xl shadow-blue-900/5">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                <CheckCircle size={22} />
                            </div>
                            <h3 className="font-black text-blue-950 text-lg">{content.admissionTitle}</h3>
                        </div>
                        <ul className="space-y-5">
                            {content.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-semibold leading-relaxed">
                                    <div className="w-1.5 h-6 bg-red-600 rounded-full shrink-0"></div>
                                    {req}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 2. Curriculum (Premium Dark Card) */}
                    <div className="bg-blue-900 p-8 rounded-[1.5rem] text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
                            <BookOpen size={120} />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-blue-200">
                                    <Sparkles size={22} />
                                </div>
                                <h3 className="font-black text-lg">{content.courseTitle}</h3>
                            </div>
                            <div className="space-y-4">
                                {content.courses.map((course, i) => (
                                    <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
                                        <h4 className="font-bold text-blue-100 text-sm mb-1">{course.name}</h4>
                                        <div className="flex justify-between items-center text-[11px] font-medium text-blue-300">
                                            <span className="flex items-center gap-1"><Clock size={12} /> {course.hours}</span>
                                            <span className="text-white font-black">{course.fee}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 3. Fees & Perks*/}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-blue-900/5">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                                <CreditCard size={22} />
                            </div>
                            <h3 className="font-black text-blue-950 text-lg">{content.feesTitle}</h3>
                        </div>

                        <div className="space-y-3 mb-10">
                            {content.perks.map((perk, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-red-200 transition-colors">
                                    <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform"></div>
                                    <span className="text-xs font-black text-slate-700 uppercase tracking-tight">{perk}</span>
                                </div>
                            ))}
                        </div>

                        <button className="w-full py-4 bg-blue-800 text-white font-black rounded-2xl hover:bg-red-700 transition-all shadow-lg shadow-red-900/20 active:scale-95 flex items-center justify-center gap-2">
                            <Users size={18} /> Apply for Admission
                        </button>
                    </div>

                </div>

                {/* Footer Text */}
                <div className="mt-12 text-center">
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">
                        No. 1 Track Record & Transparency in Bangladesh
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AdmissionCoursesSection;