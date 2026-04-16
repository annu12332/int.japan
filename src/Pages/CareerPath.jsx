import React from 'react';
import { Printer, ArrowRight, BookOpen, GraduationCap, Briefcase, Globe, Download } from 'lucide-react';

const INTCareerPathPage = ({ lang = 'en' }) => {
    
    const translations = {
        en: {
            title: "Career Path from Enrollment to Graduation",
            subtitle: "3 months of enrollment N5 passed!",
            firstStep: "First Step",
            downloadPdf: "Career path from enrollment to graduation - Career path to Japan",
            footerNote: "*Prices and periods are approximate",
            btnDownload: "Download PDF",
            steps: [
                {
                    time: "+3 months",
                    title: "N4 qualified",
                    desc: "Acquisition of qualifications by industry",
                    color: "bg-orange-50 border-orange-200",
                    badge: "text-orange-600",
                    details: [
                        { text: "Enroll in a Japanese school in Japan and pass N4 → N2 (2 years) → get a job in a small and medium-sized business in Japan" },
                        { text: "(Tuition fee 750,000 yen/year, living expenses 80,000 yen/month) (Salary 220,000/month)" }
                    ]
                },
                {
                    time: "+6 months",
                    title: "N3 qualified",
                    color: "bg-green-50 border-green-200",
                    badge: "text-green-600",
                    details: [
                        { text: "You can get a job at a small and medium-sized company in Japan" },
                        { text: "(Salary 220,000/month)" }
                    ]
                },
                {
                    time: "+12 months",
                    title: "N2 Qualified",
                    color: "bg-blue-50 border-blue-200",
                    badge: "text-blue-600",
                    details: [
                        { text: "Japanese vocational schools (2 years) and universities (4 years)" },
                        { text: "(Tuition fee 750,000 yen/year, living expenses 80,000 yen/month)" },
                        { text: "Admission to top universities in Japan (4 years)", isBold: true },
                        { text: "(Tuition fee 750,000 yen/year, living expenses 80,000 yen/month)" }
                    ]
                }
            ],
            finalGoal: {
                title: "You can get a job at a large Japanese company",
                salary: "(Salary of 300,000 yen/month or more is possible)"
            }
        },
        bn: {
            title: "ভর্তি থেকে স্নাতক পর্যন্ত ক্যারিয়ার পথ",
            subtitle: "ভর্তির ৩ মাস পর N5 পাস!",
            firstStep: "প্রথম ধাপ",
            downloadPdf: "ভর্তি থেকে স্নাতক পর্যন্ত ক্যারিয়ার পথ - জাপানে ক্যারিয়ার পথ",
            footerNote: "*মূল্য এবং সময়কাল আনুমানিক",
            btnDownload: "পিডিএফ ডাউনলোড",
            steps: [
                {
                    time: "+৩ মাস",
                    title: "N4 যোগ্যতা অর্জন",
                    desc: "ইন্ডাস্ট্রি অনুযায়ী যোগ্যতা অর্জন",
                    color: "bg-orange-50 border-orange-200",
                    badge: "text-orange-600",
                    details: [
                        { text: "জাপানের ল্যাঙ্গুয়েজ স্কুলে ভর্তি এবং N4 → N2 পাস (২ বছর) → জাপানে ছোট বা মাঝারি ব্যবসায় চাকরি" },
                        { text: "(টিউশন ফি ৭৫০,০০০ ইয়েন/বছর, জীবনযাত্রার ব্যয় ৮০,০০০ ইয়েন/মাস) (বেতন ২২০,০০০/মাস)" }
                    ]
                },
                {
                    time: "+৬ মাস",
                    title: "N3 যোগ্যতা অর্জন",
                    color: "bg-green-50 border-green-200",
                    badge: "text-green-600",
                    details: [
                        { text: "আপনি জাপানের ছোট এবং মাঝারি কোম্পানিতে চাকরি পেতে পারেন" },
                        { text: "(বেতন ২২০,০০০/মাস)" }
                    ]
                },
                {
                    time: "+১২ মাস",
                    title: "N2 যোগ্যতা অর্জন",
                    color: "bg-blue-50 border-blue-200",
                    badge: "text-blue-600",
                    details: [
                        { text: "জাপানিজ ভোকেশনাল স্কুল (২ বছর) এবং বিশ্ববিদ্যালয় (৪ বছর)" },
                        { text: "(টিউশন ফি ৭৫০,০০০ ইয়েন/বছর, জীবনযাত্রার ব্যয় ৮০,০০০ ইয়েন/মাস)" },
                        { text: "জাপানের সেরা বিশ্ববিদ্যালয়গুলোতে ভর্তি (৪ বছর)", isBold: true },
                        { text: "(টিউশন ফি ৭৫০,০০০ ইয়েন/বছর, জীবনযাত্রার ব্যয় ৮০,০০০ ইয়েন/মাস)" }
                    ]
                }
            ],
            finalGoal: {
                title: "আপনি একটি বড় জাপানি কোম্পানিতে চাকরি পেতে পারেন",
                salary: "(প্রতি মাসে ৩০০,০০০ ইয়েন বা তার বেশি বেতন সম্ভব)"
            }
        },
        jp: {
            title: "入学から卒業までのキャリアパス",
            subtitle: "入学3ヶ月でN5合格！",
            firstStep: "第一歩",
            downloadPdf: "入学から卒業までのキャリアパス - 日本へのキャリアパス",
            footerNote: "*価格と期間は目安です",
            btnDownload: "PDFをダウンロード",
            steps: [
                {
                    time: "+3ヶ月",
                    title: "N4合格",
                    desc: "業種別資格の取得",
                    color: "bg-orange-50 border-orange-200",
                    badge: "text-orange-600",
                    details: [
                        { text: "日本の日本語学校に入学し、N4→N2合格（2年）→日本の中小企業に就職" },
                        { text: "（学費 75万円/年、生活費 8万円/月）（給与 22万円/月）" }
                    ]
                },
                {
                    time: "+6ヶ月",
                    title: "N3合格",
                    color: "bg-green-50 border-green-200",
                    badge: "text-green-600",
                    details: [
                        { text: "日本の中小企業に就職可能" },
                        { text: "（給与 22万円/月）" }
                    ]
                },
                {
                    time: "+12ヶ月",
                    title: "N2合格",
                    color: "bg-blue-50 border-blue-200",
                    badge: "text-blue-600",
                    details: [
                        { text: "日本の専門学校（2年）および大学（4年）" },
                        { text: "（学費 75万円/年、生活費 8万円/月）" },
                        { text: "日本の難関大学への入学（4年）", isBold: true },
                        { text: "（学費 75万円/年、生活費 8万円/月）" }
                    ]
                }
            ],
            finalGoal: {
                title: "日本の大手企業に就職可能",
                salary: "（月給30万円以上も可能）"
            }
        }
    };

    const t = translations[lang] || translations.en;

    return (
        <div className="bg-slate-50 min-h-screen py-10 px-4">
            <div className="max-w-[900px] mx-auto bg-white shadow-xl rounded-sm border border-slate-300 overflow-hidden print:shadow-none print:border-none">
                
                {/* Header Section */}
                <div className="bg-[#f0f4f8] border-b border-slate-300 p-4 text-center">
                    <h1 className="text-xl md:text-2xl font-black text-[#1A3673] uppercase tracking-tight">
                        {t.title}
                    </h1>
                </div>

                {/* Sub-header Banner */}
                <div className="bg-[#D1E7DD] border-b border-green-300 py-3 px-6 flex justify-center items-center gap-4">
                    <h2 className="text-green-800 font-black text-sm md:text-lg">
                        {t.subtitle}
                    </h2>
                    <div className="bg-white px-3 py-1 rounded-full border border-green-400 shadow-sm flex items-center gap-1">
                        <span className="text-[10px] font-black text-red-500 uppercase italic leading-none">{t.firstStep}</span>
                        <div className="w-6 h-[2px] bg-red-400 rotate-12 -mt-1"></div>
                    </div>
                </div>

                <div className="p-6 md:p-10">
                    
                    {/* Flags */}
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-6 bg-[#006A4E] rounded-sm flex items-center justify-center border border-slate-200 overflow-hidden">
                                <div className="w-3.5 h-3.5 bg-[#F42A41] rounded-full"></div>
                            </div>
                            <span className="font-black text-[#1A3673] tracking-widest text-sm uppercase">BANGLADESH</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="font-black text-[#1A3673] tracking-widest text-sm uppercase">JAPAN</span>
                            <div className="w-10 h-6 bg-white border border-slate-200 rounded-sm flex items-center justify-center overflow-hidden">
                                <div className="w-3.5 h-3.5 bg-[#BC002D] rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* PDF Download Label */}
                    <div className="flex justify-center mb-10">
                        <div className="border-2 border-[#007bff] text-[#007bff] px-4 py-2 rounded-md text-[11px] font-bold uppercase text-center bg-blue-50/50">
                            {t.downloadPdf}
                        </div>
                    </div>

                    {/* Roadmap Steps */}
                    <div className="space-y-4">
                        {t.steps.map((step, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-4 items-stretch">
                                {/* Left Time-Badge */}
                                <div className={`${step.color} border-2 rounded-xl p-4 md:w-1/3 flex flex-col items-center justify-center text-center shadow-sm`}>
                                    <span className={`text-[11px] font-black uppercase ${step.badge}`}>{step.time}</span>
                                    <h3 className="text-xl font-black text-slate-800 leading-tight">{step.title}</h3>
                                    {step.desc && <p className="text-[9px] font-bold text-slate-500 mt-1 uppercase">{step.desc}</p>}
                                </div>

                                {/* Right Details */}
                                <div className="flex-1 border-2 border-slate-200 rounded-xl p-5 flex flex-col justify-center gap-3 bg-white shadow-sm">
                                    {step.details.map((detail, dIdx) => (
                                        <div key={dIdx} className="flex gap-2 items-start">
                                            <div className="w-1.5 h-1.5 bg-[#EE1D23] rounded-full mt-1.5 flex-shrink-0"></div>
                                            <p className={`text-[12px] leading-relaxed text-slate-700 ${detail.isBold ? 'font-black text-[#1A3673]' : 'font-medium'}`}>
                                                {detail.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Final Destination */}
                        <div className="bg-orange-100/50 border-2 border-orange-400 rounded-xl p-6 text-center mt-8 shadow-md hover:bg-orange-100 transition-all">
                            <h2 className="text-lg md:text-xl font-black text-orange-700 uppercase leading-tight mb-1">
                                {t.finalGoal.title}
                            </h2>
                            <p className="text-sm font-bold text-orange-600 italic">
                                {t.finalGoal.salary}
                            </p>
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="mt-8 text-center text-[10px] text-slate-400 italic">
                        {t.footerNote}
                    </div>

                    {/* Action Button */}
                    <div className="mt-10 flex justify-center print:hidden">
                        <button 
                            onClick={() => window.print()}
                            className="bg-[#1A3673] hover:bg-[#EE1D23] text-white px-10 py-3 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg transition-all active:scale-95"
                        >
                            <Printer size={16} /> {t.btnDownload}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default INTCareerPathPage;