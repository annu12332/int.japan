import React, { useState } from 'react';
import { Upload, GraduationCap, Briefcase, Award, User, FileText } from 'lucide-react';

const TeacherRecruitment = ({ lang = 'en' }) => {
    const [fileName, setFileName] = useState("");

    const translations = {
        en: {
            subTitle: "Join Our Team",
            title: "Japanese Teacher Recruitment",
            desc: "Share your expertise and passion for the Japanese language with our students.",
            labelName: "Full Name",
            labelEdu: "Highest Education",
            labelExp: "Total Years of Experience",
            labelCert: "Japanese Certification",
            labelCV: "Upload Your CV (PDF)",
            placeholderName: "Enter your full name",
            placeholderExp: "e.g. 3",
            uploadText: "Click to upload or drag and drop",
            uploadSub: "PDF files only (Max 5MB)",
            btnSubmit: "Submit Application",
            eduOptions: ["Honors", "Masters", "Others"],
            certOptions: ["JLPT N1", "JLPT N2", "JLPT N3", "JLPT N4"]
        },
        bn: {
            subTitle: "আমাদের টিমে যোগ দিন",
            title: "জাপানি শিক্ষক নিয়োগ",
            desc: "শিক্ষার্থীদের সাথে আপনার দক্ষতা এবং জাপানি ভাষার প্রতি আপনার আবেগ ভাগ করে নিন।",
            labelName: "পূর্ণ নাম",
            labelEdu: "সর্বোচ্চ শিক্ষা",
            labelExp: "মোট অভিজ্ঞতার বছর",
            labelCert: "জাপানি ভাষা সার্টিফিকেট",
            labelCV: "আপনার সিভি আপলোড করুন (PDF)",
            placeholderName: "আপনার পূর্ণ নাম লিখুন",
            placeholderExp: "উদাঃ ৩",
            uploadText: "আপলোড করতে ক্লিক করুন বা ড্র্যাগ করুন",
            uploadSub: "শুধুমাত্র PDF ফাইল (সর্বোচ্চ ৫ মেগাবাইট)",
            btnSubmit: "আবেদন জমা দিন",
            eduOptions: ["অনার্স", "মাস্টার্স", "অন্যান্য"],
            certOptions: ["JLPT N1", "JLPT N2", "JLPT N3", "JLPT N4"]
        },
        jp: {
            subTitle: "採用情報",
            title: "日本語教師採用",
            desc: "あなたの専門知識と日本語教育への情熱を、私たちの学生に共有しませんか。",
            labelName: "氏名",
            labelEdu: "最終学歴",
            labelExp: "講師歴（年）",
            labelCert: "日本語能力試験（JLPT）",
            labelCV: "履歴書（CV）をアップロード（PDF）",
            placeholderName: "フルネームを入力してください",
            placeholderExp: "例：3",
            uploadText: "クリックしてアップロード、またはドラッグ＆ドロップ",
            uploadSub: "PDF形式のみ（最大5MB）",
            btnSubmit: "応募する",
            eduOptions: ["学士", "修士", "その他"],
            certOptions: ["JLPT N1", "JLPT N2", "JLPT N3", "JLPT N4"]
        }
    };

    const t = translations[lang] || translations.en;

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <section id="recruitment" className="bg-gray-50 py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-red-500 font-semibold tracking-wide uppercase text-sm mb-1">
                        {t.subTitle}
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-4">
                        {t.title}
                    </h2>
                    <div className="w-20 h-1.5 bg-red-500 mx-auto rounded-full"></div>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-sm md:text-base">
                        {t.desc}
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                    <form className="p-8 md:p-12 space-y-8" onSubmit={(e) => e.preventDefault()}>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="flex items-center text-blue-950 font-bold mb-2">
                                    <User className="w-4 h-4 mr-2 text-red-500" /> {t.labelName}
                                </label>
                                <input 
                                    type="text" 
                                    placeholder={t.placeholderName}
                                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                    required
                                />
                            </div>

                            {/* Highest Education */}
                            <div className="space-y-2">
                                <label className="flex items-center text-blue-950 font-bold mb-2">
                                    <GraduationCap className="w-4 h-4 mr-2 text-red-500" /> {t.labelEdu}
                                </label>
                                <select className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-red-500 outline-none transition-all appearance-none cursor-pointer">
                                    {t.eduOptions.map((opt, i) => (
                                        <option key={i} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Years of Experience */}
                            <div className="space-y-2">
                                <label className="flex items-center text-blue-950 font-bold mb-2">
                                    <Briefcase className="w-4 h-4 mr-2 text-red-500" /> {t.labelExp}
                                </label>
                                <input 
                                    type="number" 
                                    placeholder={t.placeholderExp}
                                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-red-500 outline-none transition-all"
                                    required
                                />
                            </div>

                            {/* JLPT Certification */}
                            <div className="space-y-2">
                                <label className="flex items-center text-blue-950 font-bold mb-2">
                                    <Award className="w-4 h-4 mr-2 text-red-500" /> {t.labelCert}
                                </label>
                                <select className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-red-500 outline-none transition-all appearance-none cursor-pointer">
                                    {t.certOptions.map((opt, i) => (
                                        <option key={i} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* CV Upload */}
                        <div className="space-y-2">
                            <label className="flex items-center text-blue-950 font-bold mb-2">
                                <FileText className="w-4 h-4 mr-2 text-red-500" /> {t.labelCV}
                            </label>
                            <div className="relative group">
                                <input 
                                    type="file" 
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    required
                                />
                                <div className={`w-full py-10 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center transition-all ${fileName ? 'border-green-400 bg-green-50' : 'border-gray-200 bg-gray-50 group-hover:border-red-400 group-hover:bg-red-50/30'}`}>
                                    <Upload className={`w-10 h-10 mb-3 ${fileName ? 'text-green-500' : 'text-gray-400 group-hover:text-red-500'}`} />
                                    <span className="text-sm font-semibold text-gray-700">
                                        {fileName ? fileName : t.uploadText}
                                    </span>
                                    <span className="text-xs text-gray-400 mt-2">{t.uploadSub}</span>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="w-full bg-blue-950 hover:bg-red-600 text-white font-extrabold py-5 rounded-2xl shadow-lg shadow-blue-900/10 transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.99]"
                        >
                            {t.btnSubmit}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default TeacherRecruitment;