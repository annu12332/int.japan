import React, { useState } from 'react';
import { 
    Printer, User, GraduationCap, Briefcase, Award, 
    PenTool, Camera, MapPin, Phone, Mail, Plus, Trash2 
} from 'lucide-react';

const INTJapanFullResume = ({ lang = 'en' }) => {
    const [formData, setFormData] = useState({
        name: '', furigana: '', dob: '', gender: '', address: '',
        phone: '', mobile: '', email: '', motivation: '',
        education: [{ ym: '', school: '', status: '' }],
        work: [{ ym: '', company: '', status: '' }],
        qualifications: [{ ym: '', title: '', acquisition: '' }]
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
                license: "Qualifications and Licenses", acquisition: "Acquisition",
                addMore: "Add Entry"
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
                license: "যোগ্যতা এবং লাইসেন্স", acquisition: "অর্জনের তারিখ",
                addMore: "নতুন তথ্য যোগ করুন"
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
                license: "免許・資格", acquisition: "取得",
                addMore: "追加"
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

    const addField = (type) => {
        const schemas = {
            education: { ym: '', school: '', status: '' },
            work: { ym: '', company: '', status: '' },
            qualifications: { ym: '', title: '', acquisition: '' }
        };
        setFormData({ ...formData, [type]: [...formData[type], schemas[type]] });
    };

    const removeField = (type, index) => {
        if (formData[type].length > 1) {
            const newData = formData[type].filter((_, i) => i !== index);
            setFormData({ ...formData, [type]: newData });
        }
    };

    return (
        <div className="bg-[#f0f2f5] min-h-screen py-10 px-4 font-sans print:p-0 print:bg-white">
            <div className="max-w-[900px] mx-auto bg-white shadow-2xl rounded-xl overflow-hidden print:shadow-none print:rounded-none print:max-w-full">
                
                {/* Visual Accent Bar */}
                <div className="h-2 bg-gradient-to-r from-[#1A3673] via-[#EE1D23] to-[#1A3673] print:hidden"></div>

                <div className="p-8 md:p-12">
                    {/* Header & Photo */}
                    <div className="flex justify-between items-start mb-10 border-b border-slate-100 pb-8">
                        <div>
                            <h1 className="text-5xl font-black text-[#1A3673] tracking-tighter mb-1">RESUME</h1>
                            <p className="text-sm font-bold text-[#EE1D23] uppercase tracking-[0.2em]">{t.title}</p>
                        </div>
                        <label className="group w-32 h-40 border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center rounded-lg cursor-pointer relative overflow-hidden transition-all hover:border-[#1A3673] print:border-solid print:rounded-none">
                            <input type="file" className="hidden" onChange={handlePhotoChange} />
                            {photo ? <img src={photo} className="w-full h-full object-cover" alt="User" /> : 
                            <div className="text-center text-slate-400 group-hover:text-[#1A3673] transition-colors">
                                <Camera size={32} className="mx-auto mb-2 opacity-50"/> 
                                <span className="text-[10px] font-bold">UPLOAD PHOTO</span>
                            </div>}
                        </label>
                    </div>

                    {/* Basic Info Section */}
                    <section className="mb-10">
                        <SectionHeader icon={<User size={16}/>} title={t.basicInfo} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            <InputBox label={t.labels.name} value={formData.name} onChange={(v) => setFormData({...formData, name: v})} />
                            <InputBox label={t.labels.furigana} value={formData.furigana} onChange={(v) => setFormData({...formData, furigana: v})} />
                            
                            <div className="flex gap-6">
                                <InputBox label={t.labels.dob} placeholder="YYYY-MM-DD" value={formData.dob} onChange={(v) => setFormData({...formData, dob: v})} />
                                <div className="flex flex-col flex-1">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">{t.labels.gender}</label>
                                    <div className="flex gap-4 h-full items-center">
                                        <label className="text-sm font-bold flex items-center gap-2 cursor-pointer text-slate-700">
                                            <input type="radio" name="g" className="accent-[#1A3673] w-4 h-4" onChange={() => setFormData({...formData, gender: 'male'})}/> {t.labels.male}
                                        </label>
                                        <label className="text-sm font-bold flex items-center gap-2 cursor-pointer text-slate-700">
                                            <input type="radio" name="g" className="accent-[#1A3673] w-4 h-4" onChange={() => setFormData({...formData, gender: 'female'})}/> {t.labels.female}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <InputBox label={t.labels.email} icon={<Mail size={12}/>} value={formData.email} onChange={(v) => setFormData({...formData, email: v})} />
                            <InputBox label={t.labels.phone} icon={<Phone size={12}/>} value={formData.phone} onChange={(v) => setFormData({...formData, phone: v})} />
                            <InputBox label={t.labels.mobile} icon={<Phone size={12}/>} value={formData.mobile} onChange={(v) => setFormData({...formData, mobile: v})} />
                            
                            <div className="md:col-span-2">
                                <InputBox label={t.labels.address} icon={<MapPin size={12}/>} value={formData.address} onChange={(v) => setFormData({...formData, address: v})} />
                            </div>
                        </div>
                    </section>

                    {/* Dynamic Sections Helper */}
                    <DynamicTable 
                        title={t.eduInfo} 
                        icon={<GraduationCap size={16}/>}
                        headers={[t.labels.ym, t.labels.school, t.labels.status]}
                        data={formData.education}
                        type="education"
                        onUpdate={updateArrayField}
                        onAdd={() => addField('education')}
                        onRemove={(i) => removeField('education', i)}
                        t={t}
                    />

                    <DynamicTable 
                        title={t.workInfo} 
                        icon={<Briefcase size={16}/>}
                        headers={[t.labels.ym, t.labels.company, t.labels.joinLeave]}
                        data={formData.work}
                        type="work"
                        onUpdate={updateArrayField}
                        onAdd={() => addField('work')}
                        onRemove={(i) => removeField('work', i)}
                        t={t}
                    />

                    <DynamicTable 
                        title={t.qualInfo} 
                        icon={<Award size={16}/>}
                        headers={[t.labels.ym, t.labels.license, t.labels.acquisition]}
                        data={formData.qualifications}
                        type="qualifications"
                        keys={['ym', 'title', 'acquisition']}
                        onUpdate={updateArrayField}
                        onAdd={() => addField('qualifications')}
                        onRemove={(i) => removeField('qualifications', i)}
                        t={t}
                    />

                    {/* Motivation Section */}
                    <section className="mb-10">
                        <SectionHeader icon={<PenTool size={16}/>} title={t.motivation} />
                        <textarea 
                            className="w-full h-40 p-5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-[#1A3673]/20 focus:border-[#1A3673] transition-all print:bg-white print:border-slate-300 print:h-auto print:min-h-[150px] resize-none"
                            placeholder="Write here..."
                            value={formData.motivation}
                            onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                        />
                    </section>

                    {/* Footer & Signature */}
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end border-t pt-10 border-slate-100 gap-8">
                        <div className="text-[11px] text-slate-400 italic max-w-[400px] leading-relaxed text-center md:text-left">
                            {t.pdfMethod}
                        </div>
                        <div className="text-right min-w-[200px]">
                            <p className="text-[10px] font-black text-slate-400 uppercase mb-10 tracking-widest">{t.signature}</p>
                            <div className="w-full border-b-2 border-slate-900"></div>
                        </div>
                    </div>

                    {/* Print Button */}
                    <div className="mt-16 flex justify-center print:hidden">
                        <button 
                            onClick={() => window.print()} 
                            className="group bg-[#1A3673] text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-[#EE1D23] transition-all hover:scale-105 shadow-2xl active:scale-95"
                        >
                            <Printer size={20} className="group-hover:animate-bounce" /> {t.print}
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media print {
                    body { background: white !important; }
                    .print-hidden { display: none !important; }
                    textarea { border: 1px solid #e2e8f0 !important; }
                }
            `}</style>
        </div>
    );
};

// --- Sub-Components for cleaner code ---

const SectionHeader = ({ icon, title }) => (
    <h2 className="flex items-center gap-3 text-[11px] font-black bg-slate-50 p-3 text-[#1A3673] uppercase mb-6 border-l-4 border-[#EE1D23] rounded-r-lg">
        {icon} <span className="tracking-widest">{title}</span>
    </h2>
);

const InputBox = ({ label, value, onChange, icon, placeholder }) => (
    <div className="flex flex-col w-full group">
        <label className="text-[10px] font-black text-slate-400 uppercase mb-1.5 tracking-wider transition-colors group-focus-within:text-[#1A3673]">
            {label}
        </label>
        <div className="relative">
            {icon && <div className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300">{icon}</div>}
            <input 
                type="text" 
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`w-full py-2 border-b-2 border-slate-100 outline-none text-sm font-bold text-slate-800 bg-transparent transition-all focus:border-[#1A3673] ${icon ? 'pl-6' : ''}`} 
            />
        </div>
    </div>
);

const DynamicTable = ({ title, icon, headers, data, type, onUpdate, onAdd, onRemove, t, keys }) => {
    const dataKeys = keys || (type === 'education' ? ['ym', 'school', 'status'] : type === 'work' ? ['ym', 'company', 'status'] : ['ym', 'title', 'acquisition']);
    
    return (
        <section className="mb-10">
            <div className="flex justify-between items-center mb-4">
                <SectionHeader icon={icon} title={title} />
                <button 
                    onClick={onAdd}
                    className="print:hidden flex items-center gap-1 text-[10px] font-bold bg-[#1A3673]/10 text-[#1A3673] px-3 py-1.5 rounded-full hover:bg-[#1A3673] hover:text-white transition-all mb-4"
                >
                    <Plus size={14} /> {t.labels.addMore}
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-[10px] text-slate-400 uppercase tracking-widest border-b border-slate-100">
                            {headers.map((h, i) => (
                                <th key={i} className={`pb-2 font-black ${i === 1 ? 'w-1/2' : 'w-1/4'}`}>{h}</th>
                            ))}
                            <th className="w-10 print:hidden"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {data.map((item, i) => (
                            <tr key={i} className="group">
                                {dataKeys.map((key) => (
                                    <td key={key} className="py-2 pr-4">
                                        <input 
                                            className="w-full bg-transparent outline-none text-sm font-semibold text-slate-700 py-1 border-b border-transparent focus:border-[#1A3673] transition-all" 
                                            value={item[key]} 
                                            placeholder="..."
                                            onChange={(e) => onUpdate(type, i, key, e.target.value)} 
                                        />
                                    </td>
                                ))}
                                <td className="py-2 text-right print:hidden">
                                    {data.length > 1 && (
                                        <button 
                                            onClick={() => onRemove(i)}
                                            className="text-slate-300 hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default INTJapanFullResume;