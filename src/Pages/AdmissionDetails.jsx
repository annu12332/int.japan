import React from 'react';
import {
    Calendar, Clock, UserCheck, FileText, CreditCard,
    CheckCircle2, AlertCircle, Phone, Mail, MapPin, Download
} from 'lucide-react';

const AdmissionDetailsPage = ({ lang = 'en' }) => {
    const translations = {
        en: {
            badge: "Admission Open",
            title: "Admission Details",
            brand: "INT Japan Training Center",
            courseInfo: "Basic Information",
            requirements: "Qualification & Documents",
            fees: "Fee Structure",
            schedule: "Class Schedule",
            rules: "Important Terms",
            btnPdf: "Save as PDF (Ctrl+P)",
            data: {
                courseName: "Japanese Language (N5 & N4)",
                age: "18-30 Years",
                seats: "200 Persons",
                duration: "9 Months (N5=3m, N4=6m)",
                shifts: ["Morning: 10:00 - 12:25", "Afternoon: 13:05 - 16:35", "Evening: 17:10 - 20:25"],
                eduJob: "Min SSC (For Job in Japan)",
                eduStudy: "Min HSC (For Study in Japan)",
                docs: [
                    "Photocopy of SSC & HSC Certificates",
                    "Photocopy of NID/Birth Certificate",
                    "3 Recent Passport & Stamp size photos"
                ],
                tableLabels: ["Description", "N5 Course (3m)", "N4 Course (6m)"],
                tableData: [
                    ["Session Fee", "15,000 BDT", "36,000 BDT"],
                    ["Registration Fee", "5,000 BDT", "5,000 BDT"],
                    ["Books & Materials", "1,000 BDT", "2,000 BDT"]
                ]
            }
        },
        bn: {
            badge: "ভর্তি চলছে",
            title: "ভর্তির তথ্যের বিবরণ",
            brand: "আইএনটি জাপান ট্রেনিং সেন্টার",
            courseInfo: "মৌলিক তথ্য",
            requirements: "শিক্ষাগত যোগ্যতা ও কাগজপত্র",
            fees: "ফি কাঠামো",
            schedule: "ক্লাসের সময়সূচী",
            rules: "গুরুত্বপূর্ণ শর্তাবলী",
            btnPdf: "পিডিএফ হিসেবে সংরক্ষণ করুন (Ctrl+P)",
            data: {
                courseName: "জাপানি ভাষা (N5 এবং N4)",
                age: "১৮-৩০ বছর",
                seats: "২০০ জন",
                duration: "৯ মাস (N5=৩ মাস, N4=৬ মাস)",
                shifts: ["সকাল: ১০:০০ - ১২:২৫", "দুপুর: ১৩:০৫ - ১৬:৩৫", "বিকাল: ১৭:১০ - ২০:২৫"],
                eduJob: "ন্যূনতম এসএসসি (জাপানে চাকরির জন্য)",
                eduStudy: "ন্যূনতম এইচএসসি (জাপানে উচ্চশিক্ষার জন্য)",
                docs: [
                    "এসএসসি এবং এইচএসসি সার্টিফিকেটের ফটোকপি",
                    "জাতীয় পরিচয়পত্র/জন্ম নিবন্ধনের ফটোকপি",
                    "সাম্প্রতিক পাসপোর্ট ও স্ট্যাম্প সাইজ ছবি (৩ কপি)"
                ],
                tableLabels: ["বিবরণ", "N5 কোর্স (৩ মাস)", "N4 কোর্স (৬ মাস)"],
                tableData: [
                    ["সেশন ফি", "১৫,০০০ টাকা", "৩৬,০০০ টাকা"],
                    ["রেজিস্ট্রেশন ফি", "৫,০০০ টাকা", "৫,০০০ টাকা"],
                    ["বই ও উপকরণ", "১,০০০ টাকা", "২,০০০ টাকা"]
                ]
            }
        },
        jp: {
            badge: "募集中",
            title: "入学詳細",
            brand: "INT Japan トレーニングセンター",
            courseInfo: "基本情報",
            requirements: "資格と書類",
            fees: "料金体系",
            schedule: "クラススケジュール",
            rules: "重要な規約",
            btnPdf: "PDFとして保存 (Ctrl+P)",
            data: {
                courseName: "日本語コース (N5 & N4)",
                age: "18-30 歳",
                seats: "200 名",
                duration: "9ヶ月 (N5=3ヶ月, N4=6ヶ月)",
                shifts: ["午前: 10:00 - 12:25", "午後: 13:05 - 16:35", "夜間: 17:10 - 20:25"],
                eduJob: "中等教育修了 (日本での就職希望者)",
                eduStudy: "高等教育修了 (日本での進学希望者)",
                docs: [
                    "学歴証明書のコピー (SSC/HSC)",
                    "身分証明書のコピー (NID)",
                    "写真 3枚 (パスポート・スタンプサイズ)"
                ],
                tableLabels: ["説明", "N5コース (3ヶ月)", "N4コース (6ヶ月)"],
                tableData: [
                    ["授業料", "15,000 BDT", "36,000 BDT"],
                    ["入学金", "5,000 BDT", "5,000 BDT"],
                    ["教材費", "1,000 BDT", "2,000 BDT"]
                ]
            }
        }
    };

    const content = translations[lang] || translations.en;

    return (
        <section className="bg-slate-50 min-h-screen py-8 md:py-16 px-4 font-sans text-slate-900 print:bg-white print:py-0">
            <div className="max-w-5xl mx-auto">

                <div className="bg-white shadow-2xl shadow-blue-100 rounded-[2.5rem] overflow-hidden border border-slate-100 print:shadow-none print:border-none">

                    {/* Header Section */}
                    <div className="bg-[#1A3673] p-8 md:p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                        <span className="inline-block px-4 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4 animate-pulse">
                            {content.badge}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">{content.brand}</h1>
                        <h2 className="text-xl md:text-2xl font-bold text-blue-200 uppercase tracking-widest italic">{content.title}</h2>
                        <div className="w-20 h-1.5 bg-red-500 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="p-6 md:p-12 space-y-12">

                        {/* Course Info & Shifts Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                <h3 className="flex items-center gap-2 text-blue-900 font-black mb-6 border-b pb-3">
                                    <Calendar className="text-red-500" size={20} /> {content.courseInfo}
                                </h3>
                                <ul className="space-y-4 text-sm font-semibold text-slate-700">
                                    <li className="flex justify-between gap-4"><span>{lang === 'bn' ? 'কোর্সের নাম:' : 'Course:'}</span> <span className="text-blue-600 text-right">{content.data.courseName}</span></li>
                                    <li className="flex justify-between gap-4"><span>{lang === 'bn' ? 'বয়স:' : 'Age:'}</span> <span className="text-right">{content.data.age}</span></li>
                                    <li className="flex justify-between gap-4"><span>{lang === 'bn' ? 'আসন সংখ্যা:' : 'Seats:'}</span> <span className="text-red-600 font-black text-right">{content.data.seats}</span></li>
                                    <li className="flex justify-between gap-4"><span>{lang === 'bn' ? 'সময়কাল:' : 'Duration:'}</span> <span className="text-right">{content.data.duration}</span></li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                <h3 className="flex items-center gap-2 text-blue-900 font-black mb-6 border-b pb-3">
                                    <Clock className="text-red-500" size={20} /> {content.schedule}
                                </h3>
                                <div className="space-y-3">
                                    {content.data.shifts.map((shift, i) => (
                                        <div key={i} className="bg-white px-4 py-2 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-red-500"></div> {shift}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Educational Qualification & Documents */}
                        <div className="grid md:grid-cols-2 gap-8 items-start border-y border-slate-100 py-10">
                            <div className="space-y-6">
                                <h3 className="flex items-center gap-2 text-blue-900 font-black text-xl italic uppercase">
                                    <UserCheck className="text-red-500" /> {content.requirements}
                                </h3>
                                <div className="space-y-3">
                                    <p className="flex items-start gap-2 text-sm font-bold text-slate-600 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                                        <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-blue-600" /> {content.data.eduJob}
                                    </p>
                                    <p className="flex items-start gap-2 text-sm font-bold text-slate-600 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                                        <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-blue-600" /> {content.data.eduStudy}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-black text-slate-400 text-xs uppercase tracking-widest">{lang === 'bn' ? 'প্রয়োজনীয় কাগজপত্র' : 'Required Documents'}</h4>
                                <div className="space-y-3">
                                    {content.data.docs.map((doc, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                                            <FileText size={18} className="text-red-500" /> {doc}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Fee Structure Table */}
                        <div className="space-y-6">
                            <h3 className="flex items-center gap-2 text-blue-900 font-black text-xl italic uppercase">
                                <CreditCard className="text-red-500" /> {content.fees}
                            </h3>
                            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                                <table className="w-full text-left text-sm border-collapse">
                                    <thead className="bg-[#1A3673] text-white">
                                        <tr>
                                            {content.data.tableLabels.map((label, i) => (
                                                <th key={i} className={`p-4 ${i !== 2 ? 'border-r border-blue-800' : ''}`}>{label}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="font-bold text-slate-600">
                                        {content.data.tableData.map((row, i) => (
                                            <tr key={i} className="border-b border-slate-100">
                                                <td className="p-4 bg-slate-50 border-r border-slate-200 italic font-black">{row[0]}</td>
                                                <td className="p-4 border-r border-slate-200 text-blue-600">{row[1]}</td>
                                                <td className="p-4 text-blue-600">{row[2]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Rules Section */}
                        <div className="bg-red-50 p-8 rounded-[2.5rem] border border-red-100 space-y-4">
                            <h3 className="flex items-center gap-2 text-red-700 font-black text-lg uppercase tracking-tighter">
                                <AlertCircle size={22} /> {content.rules}
                            </h3>
                            <ul className="grid gap-3 text-sm font-bold text-red-900/80 leading-relaxed">
                                {lang === 'bn' ? (
                                    <>
                                        <li className="flex gap-3"><span>•</span> বিরতির সময়কাল: সর্বোচ্চ ৫ বছর (নিজ দায়িত্বে কাগজপত্র জমা দিতে হবে)।</li>
                                        <li className="flex gap-3"><span>•</span> শারীরিক এবং শিক্ষাগত সমস্যা থাকলে ভর্তির অযোগ্য বলে বিবেচিত হবে।</li>
                                        <li className="flex gap-3"><span>•</span> এনএটি/জেএলপিটি পাসের পর এবং ভিসা প্রাপ্তি সাপেক্ষে আমরা জাপানে উচ্চশিক্ষা ও চাকরির ব্যবস্থা করব।</li>
                                        <li className="flex gap-3 text-red-600 font-black underline decoration-2 underline-offset-4"><span>•</span> উপরোক্ত শর্তে আপত্তি থাকলে আবেদনপত্র সংগ্রহ থেকে বিরত থাকুন।</li>
                                    </>
                                ) : (
                                    <>
                                        <li className="flex gap-3"><span>•</span> Study Gap: Maximum 5 years (Documents must be submitted on own responsibility).</li>
                                        <li className="flex gap-3"><span>•</span> Ineligible for admission if there are physical or educational issues.</li>
                                        <li className="flex gap-3"><span>•</span> We will arrange study and jobs in Japan after NAT/JLPT passing and Visa approval.</li>
                                        <li className="flex gap-3 text-red-600 font-black underline decoration-2 underline-offset-4"><span>•</span> Do not collect application form if you disagree with the terms.</li>
                                    </>
                                )}
                            </ul>
                        </div>

                        {/* Contact Footer Area */}
                        <div className="pt-10 border-t border-slate-100 grid md:grid-cols-3 gap-8">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-[#1A3673] group-hover:text-white transition-all shadow-sm">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em]">Email Us</p>
                                    <p className="text-sm font-black text-slate-800 break-all">dhaka@int-japan.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-[#1A3673] group-hover:text-white transition-all shadow-sm">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em]">Call Anytime</p>
                                    <p className="text-sm font-black text-slate-800">০১৯-৪২৩৪-৮১৩২</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-[#1A3673] group-hover:text-white transition-all shadow-sm">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em]">Location</p>
                                    <p className="text-xs font-black text-slate-800 leading-tight uppercase">উত্তরা, দিয়াবাড়ি, ঢাকা</p>
                                </div>
                            </div>
                        </div>

                        {/* PDF Print Action */}
                        <div className="text-center pt-10 print:hidden">
                            <button
                                onClick={() => window.print()}
                                className="inline-flex items-center gap-3 px-10 py-5 bg-[#1A3673] text-white font-black rounded-2xl hover:bg-red-600 transition-all shadow-2xl shadow-blue-900/20 active:scale-95 text-sm uppercase tracking-widest"
                            >
                                <Download size={22} /> {content.btnPdf}
                            </button>
                            <div className="mt-6 flex flex-col items-center gap-1">
                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Next Batch Start</p>
                                <p className="text-red-600 font-black text-sm italic">{lang === 'bn' ? '২ নভেম্বর, ২০২৫' : 'November 2, 2025'}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionDetailsPage;