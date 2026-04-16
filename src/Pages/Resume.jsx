import React, { useState } from 'react';
import { Printer, User, GraduationCap, Briefcase, Award, PenTool, Camera, MapPin, Phone, Mail } from 'lucide-react';

const INTJapanFullResume = ({ lang = 'en' }) => {
    // Protiti field-er jonno state management
    const [formData, setFormData] = useState({
        name: '', furigana: '', dob: '', gender: '', address: '',
        phone: '', mobile: '', email: '', motivation: '',
        education: [
            { ym: '', school: '', status: '' },
            { ym: '', school: '', status: '' },
            { ym: '', school: '', status: '' }
        ],
        work: [
            { ym: '', company: '', status: '' },
            { ym: '', company: '', status: '' }
        ],
        qualifications: [
            { ym: '', title: '', acquisition: '' },
            { ym: '', title: '', acquisition: '' }
        ]
    });

    const [photo, setPhoto] = useState(null);

    const translations = {
        en: {
            title: "INT JAPAN Training Center - Resume",
            basicInfo: "Basic Information",
            eduInfo: "Education History",
            workInfo: "Work Experience",
            qualInfo: "Qualifications and Licenses",
            motivation: "Motivation and Self-Promotion",
            signature: "Signature",
            pdfMethod: "PDF Output Method: Select 'Save to PDF' from the browser's print function (Ctrl+P)",
            labels: {
                name: "Name", furigana: "Furigana", dob: "Date of Birth", gender: "Gender",
                male: "Male", female: "Female", address: "Current Address",
                phone: "Phone Number", mobile: "Mobile Phones", email: "Email Address",
                ym: "Year & Month", school: "School Name", status: "Enrollment/Graduation",
                company: "Company Name & Occupation", joinLeave: "Joining/Leaving",
                license: "Qualifications and Licenses", acquisition: "Acquisition"
            },
            print: "Download PDF"
        },
        bn: {
            title: "আইএনটি জাপান ট্রেনিং সেন্টার - জীবনবৃত্তান্ত",
            basicInfo: "ব্যক্তিগত তথ্য",
            eduInfo: "শিক্ষাগত যোগ্যতা",
            workInfo: "কাজের অভিজ্ঞতা",
            qualInfo: "যোগ্যতা এবং লাইসেন্স",
            motivation: "উদ্দেশ্য এবং আত্ম-প্রচার",
            signature: "স্বাক্ষর",
            pdfMethod: "PDF আউটপুট: ব্রাউজারের প্রিন্ট ফাংশন (Ctrl+P) থেকে 'Save to PDF' সিলেক্ট করুন",
            labels: {
                name: "নাম", furigana: "ফুরিগানা", dob: "জন্ম তারিখ", gender: "লিঙ্গ",
                male: "পুরুষ", female: "মহিলা", address: "বর্তমান ঠিকানা",
                phone: "ফোন নম্বর", mobile: "মোবাইল নম্বর", email: "ইমেইল ঠিকানা",
                ym: "বছর ও মাস", school: "শিক্ষা প্রতিষ্ঠানের নাম", status: "ভর্তি/সমাপ্তি",
                company: "কোম্পানির নাম ও পদবী", joinLeave: "যোগদান/ত্যাগ",
                license: "যোগ্যতা এবং লাইসেন্স", acquisition: "অর্জনের তারিখ"
            },
            print: "পিডিএফ ডাউনলোড"
        },
        jp: {
            title: "INT JAPAN トレーニングセンター - 履歴書",
            basicInfo: "基本情報",
            eduInfo: "学歴",
            workInfo: "職歴",
            qualInfo: "免許・資格",
            motivation: "志望動機と自己PR",
            signature: "署名",
            pdfMethod: "PDF出力：ブラウザの印刷機能（Ctrl+P）から「PDFとして保存」を選択してください",
            labels: {
                name: "氏名", furigana: "フリガナ", dob: "生年月日", gender: "性別",
                male: "男", female: "女", address: "現住所",
                phone: "電話番号", mobile: "携帯電話", email: "メールアドレス",
                ym: "年月", school: "学校名", status: "入学・卒業",
                company: "企業名・職種", joinLeave: "入社・退社",
                license: "免許・資格", acquisition: "取得"
            },
            print: "PDF保存"
        }
    };

    const t = translations[lang] || translations.en;

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) setPhoto(URL.createObjectURL(file));
    };

    const updateArrayField = (type, index, field, value) => {
        const newData = [...formData[type]];
        newData[index][field] = value;
        setFormData({ ...formData, [type]: newData });
    };

    return (
        <div className="bg-gray-100 min-h-screen py-8 px-4 font-sans">
            <div className="max-w-[850px] mx-auto bg-white shadow-2xl p-10 md:p-14 border border-slate-200 print:shadow-none print:border-none print:p-0">
                
                {/* 1. Header & Photo */}
                <div className="flex justify-between items-start mb-8">
                    <div className="border-l-8 border-[#1A3673] pl-4">
                        <h1 className="text-4xl font-black text-[#1A3673] tracking-tighter">RESUME</h1>
                        <p className="text-xs font-bold text-[#EE1D23] uppercase tracking-widest">{t.title}</p>
                    </div>
                    <label className="w-32 h-40 border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center rounded cursor-pointer relative overflow-hidden print:border-solid">
                        <input type="file" className="hidden" onChange={handlePhotoChange} />
                        {photo ? <img src={photo} className="w-full h-full object-cover" alt="User" /> : 
                        <div className="text-center text-slate-400 p-2"><Camera size={24} className="mx-auto mb-1"/> <span className="text-[10px] font-bold">PHOTO</span></div>}
                    </label>
                </div>

                {/* 2. Basic Info Section */}
                <div className="mb-8">
                    <h2 className="flex items-center gap-2 text-xs font-black bg-slate-100 p-2 text-[#1A3673] uppercase mb-4 border-r-4 border-[#EE1D23]">
                        <User size={14}/> {t.basicInfo}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                        <InputBox label={t.labels.name} value={formData.name} onChange={(v) => setFormData({...formData, name: v})} />
                        <InputBox label={t.labels.furigana} value={formData.furigana} onChange={(v) => setFormData({...formData, furigana: v})} />
                        
                        <div className="flex gap-4">
                            <InputBox label={t.labels.dob} value={formData.dob} onChange={(v) => setFormData({...formData, dob: v})} />
                            <div className="flex flex-col flex-1">
                                <label className="text-[10px] font-bold text-slate-500 uppercase">{t.labels.gender}</label>
                                <div className="flex gap-4 mt-2">
                                    <label className="text-xs font-bold flex items-center gap-1 cursor-pointer"><input type="radio" name="g" onChange={() => setFormData({...formData, gender: 'male'})}/> {t.labels.male}</label>
                                    <label className="text-xs font-bold flex items-center gap-1 cursor-pointer"><input type="radio" name="g" onChange={() => setFormData({...formData, gender: 'female'})}/> {t.labels.female}</label>
                                </div>
                            </div>
                        </div>

                        <InputBox label={t.labels.email} value={formData.email} onChange={(v) => setFormData({...formData, email: v})} />
                        <InputBox label={t.labels.phone} value={formData.phone} onChange={(v) => setFormData({...formData, phone: v})} />
                        <InputBox label={t.labels.mobile} value={formData.mobile} onChange={(v) => setFormData({...formData, mobile: v})} />
                        
                        <div className="md:col-span-2">
                            <InputBox label={t.labels.address} value={formData.address} onChange={(v) => setFormData({...formData, address: v})} />
                        </div>
                    </div>
                </div>

                {/* 3. Education Section */}
                <div className="mb-8">
                    <h2 className="flex items-center gap-2 text-xs font-black bg-slate-100 p-2 text-[#1A3673] uppercase mb-2 border-r-4 border-[#EE1D23]">
                        <GraduationCap size={14}/> {t.eduInfo}
                    </h2>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-[10px] text-slate-400 uppercase">
                                <th className="py-2 w-1/4">{t.labels.ym}</th>
                                <th className="py-2 w-1/2">{t.labels.school}</th>
                                <th className="py-2">{t.labels.status}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.education.map((item, i) => (
                                <tr key={i} className="border-b border-slate-100">
                                    <td><input className="print-input w-full" placeholder="YYYY/MM" value={item.ym} onChange={(e) => updateArrayField('education', i, 'ym', e.target.value)} /></td>
                                    <td><input className="print-input w-full" value={item.school} onChange={(e) => updateArrayField('education', i, 'school', e.target.value)} /></td>
                                    <td><input className="print-input w-full" value={item.status} onChange={(e) => updateArrayField('education', i, 'status', e.target.value)} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* 4. Work Experience Section */}
                <div className="mb-8">
                    <h2 className="flex items-center gap-2 text-xs font-black bg-slate-100 p-2 text-[#1A3673] uppercase mb-2 border-r-4 border-[#EE1D23]">
                        <Briefcase size={14}/> {t.workInfo}
                    </h2>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-[10px] text-slate-400 uppercase">
                                <th className="py-2 w-1/4">{t.labels.ym}</th>
                                <th className="py-2 w-1/2">{t.labels.company}</th>
                                <th className="py-2">{t.labels.joinLeave}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.work.map((item, i) => (
                                <tr key={i} className="border-b border-slate-100">
                                    <td><input className="print-input w-full" value={item.ym} onChange={(e) => updateArrayField('work', i, 'ym', e.target.value)} /></td>
                                    <td><input className="print-input w-full" value={item.company} onChange={(e) => updateArrayField('work', i, 'company', e.target.value)} /></td>
                                    <td><input className="print-input w-full" value={item.status} onChange={(e) => updateArrayField('work', i, 'status', e.target.value)} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* 5. Qualifications & Licenses Section (Full Field Added) */}
                <div className="mb-8">
                    <h2 className="flex items-center gap-2 text-xs font-black bg-slate-100 p-2 text-[#1A3673] uppercase mb-2 border-r-4 border-[#EE1D23]">
                        <Award size={14}/> {t.qualInfo}
                    </h2>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-[10px] text-slate-400 uppercase">
                                <th className="py-2 w-1/4">{t.labels.ym}</th>
                                <th className="py-2 w-1/2">{t.labels.license}</th>
                                <th className="py-2">{t.labels.acquisition}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.qualifications.map((item, i) => (
                                <tr key={i} className="border-b border-slate-100">
                                    <td><input className="print-input w-full" value={item.ym} onChange={(e) => updateArrayField('qualifications', i, 'ym', e.target.value)} /></td>
                                    <td><input className="print-input w-full" value={item.title} onChange={(e) => updateArrayField('qualifications', i, 'title', e.target.value)} /></td>
                                    <td><input className="print-input w-full" value={item.acquisition} onChange={(e) => updateArrayField('qualifications', i, 'acquisition', e.target.value)} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* 6. Motivation & Self-Promotion Section */}
                <div className="mb-10">
                    <h2 className="flex items-center gap-2 text-xs font-black bg-slate-100 p-2 text-[#1A3673] uppercase mb-3 border-r-4 border-[#EE1D23]">
                        <PenTool size={14}/> {t.motivation}
                    </h2>
                    <textarea 
                        className="w-full h-36 p-4 bg-slate-50 border border-slate-200 rounded-lg text-[13px] font-medium outline-none focus:ring-1 focus:ring-[#1A3673] print:bg-white print:border-none print:p-0 resize-none"
                        value={formData.motivation}
                        onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                    />
                </div>

                {/* 7. Footer & Signature */}
                <div className="flex justify-between items-end border-t pt-6 border-slate-100">
                    <div className="text-[9px] text-slate-400 italic max-w-[350px]">
                        {t.pdfMethod}
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] font-black text-slate-400 uppercase mb-8">{t.signature}</p>
                        <div className="w-48 border-b-2 border-slate-900"></div>
                    </div>
                </div>

                {/* Print Button */}
                <div className="mt-12 flex justify-center print:hidden">
                    <button 
                        onClick={() => window.print()} 
                        className="bg-[#1A3673] text-white px-12 py-4 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#EE1D23] transition-all shadow-xl active:scale-95"
                    >
                        <Printer size={18} /> {t.print}
                    </button>
                </div>
            </div>

            <style jsx>{`
                .print-input {
                    padding: 10px 4px;
                    border: none;
                    outline: none;
                    font-size: 13px;
                    font-weight: 600;
                    color: #334155;
                    background: transparent;
                }
                .print-input::placeholder { color: #cbd5e1; font-weight: 400; }
                @media print {
                    .print-input { padding: 8px 0; }
                    body { background: white; }
                    .bg-slate-50 { background: white !important; }
                    .bg-gray-100 { background: white !important; }
                }
            `}</style>
        </div>
    );
};

const InputBox = ({ label, value, onChange }) => (
    <div className="flex flex-col w-full border-b border-slate-200 focus-within:border-[#1A3673] transition-all">
        <label className="text-[10px] font-black text-slate-400 uppercase mb-1">{label}</label>
        <input 
            type="text" 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full py-2 outline-none text-[13px] font-semibold text-slate-800 bg-transparent" 
        />
    </div>
);

export default INTJapanFullResume;