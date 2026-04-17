import React, { useState } from 'react';
import { 
    Printer, User, GraduationCap, Briefcase, Award, 
    PenTool, Camera, MapPin, Phone, Mail, Plus, Trash2, 
    Calendar, Globe, ChevronRight
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
        <div className="bg-[#f3f4f6] min-h-screen py-12 px-4 font-sans print:p-0 print:bg-white">
            <div className="max-w-[950px] mx-auto bg-white shadow-xl rounded-3xl overflow-hidden print:shadow-none print:rounded-none">
                
                {/* Header Decoration */}
                <div className="h-3 bg-gradient-to-r from-[#1e3a8a] via-[#dc2626] to-[#1e3a8a] print:hidden"></div>

                <div className="p-8 md:p-14">
                    {/* Header Section */}
                    <header className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-100 pb-10 gap-8">
                        <div className="text-center md:text-left">
                            <h1 className="text-5xl font-black text-gray-900 tracking-tight leading-none">RESUME</h1>
                            <p className="mt-3 text-sm font-bold text-[#dc2626] uppercase tracking-[0.3em] flex items-center justify-center md:justify-start">
                                <span className="w-8 h-[2px] bg-[#dc2626] mr-3"></span>
                                {t.title}
                            </p>
                        </div>
                        
                        <div className="relative">
                            <label className="w-36 h-44 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-[#1e3a8a] hover:bg-gray-100 transition-all overflow-hidden group print:border-solid">
                                <input type="file" className="hidden" onChange={handlePhotoChange} />
                                {photo ? (
                                    <img src={photo} className="w-full h-full object-cover" alt="Profile" />
                                ) : (
                                    <div className="text-gray-400 group-hover:text-[#1e3a8a] transition-colors text-center p-4">
                                        <Camera size={32} className="mx-auto mb-2 opacity-50" />
                                        <span className="text-[10px] font-bold leading-tight uppercase tracking-wider">Upload Photo</span>
                                    </div>
                                )}
                            </label>
                        </div>
                    </header>

                    {/* Basic Info Section */}
                    <section className="mb-14">
                        <SectionTitle icon={<User size={18}/>} title={t.basicInfo} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-6">
                            <InputField label={t.labels.name} value={formData.name} onChange={(v) => setFormData({...formData, name: v})} />
                            <InputField label={t.labels.furigana} value={formData.furigana} onChange={(v) => setFormData({...formData, furigana: v})} />
                            
                            <div className="flex gap-6">
                                <InputField label={t.labels.dob} placeholder="YYYY-MM-DD" icon={<Calendar size={14}/>} value={formData.dob} onChange={(v) => setFormData({...formData, dob: v})} />
                                <div className="flex flex-col flex-1">
                                    <label className="text-[11px] font-extrabold text-gray-400 uppercase mb-2 tracking-widest">{t.labels.gender}</label>
                                    <div className="flex gap-6 items-center h-10">
                                        {['male', 'female'].map((g) => (
                                            <label key={g} className="flex items-center gap-2 cursor-pointer group">
                                                <input 
                                                    type="radio" 
                                                    name="gender" 
                                                    className="w-4 h-4 accent-[#1e3a8a] cursor-pointer" 
                                                    onChange={() => setFormData({...formData, gender: g})}
                                                />
                                                <span className="text-sm font-bold text-gray-600 group-hover:text-[#1e3a8a] transition-colors">
                                                    {g === 'male' ? t.labels.male : t.labels.female}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <InputField label={t.labels.email} icon={<Mail size={14}/>} value={formData.email} onChange={(v) => setFormData({...formData, email: v})} />
                            <InputField label={t.labels.phone} icon={<Phone size={14}/>} value={formData.phone} onChange={(v) => setFormData({...formData, phone: v})} />
                            <InputField label={t.labels.mobile} icon={<Phone size={14}/>} value={formData.mobile} onChange={(v) => setFormData({...formData, mobile: v})} />
                            
                            <div className="md:col-span-2">
                                <InputField label={t.labels.address} icon={<MapPin size={14}/>} value={formData.address} onChange={(v) => setFormData({...formData, address: v})} />
                            </div>
                        </div>
                    </section>

                    {/* Education, Work, Qualifications */}
                    <DataGrid 
                        title={t.eduInfo} 
                        icon={<GraduationCap size={18}/>}
                        headers={[t.labels.ym, t.labels.school, t.labels.status]}
                        data={formData.education}
                        type="education"
                        onUpdate={updateArrayField}
                        onAdd={() => addField('education')}
                        onRemove={(i) => removeField('education', i)}
                        t={t}
                    />

                    <DataGrid 
                        title={t.workInfo} 
                        icon={<Briefcase size={18}/>}
                        headers={[t.labels.ym, t.labels.company, t.labels.joinLeave]}
                        data={formData.work}
                        type="work"
                        onUpdate={updateArrayField}
                        onAdd={() => addField('work')}
                        onRemove={(i) => removeField('work', i)}
                        t={t}
                    />

                    <DataGrid 
                        title={t.qualInfo} 
                        icon={<Award size={18}/>}
                        headers={[t.labels.ym, t.labels.license, t.labels.acquisition]}
                        data={formData.qualifications}
                        type="qualifications"
                        keys={['ym', 'title', 'acquisition']}
                        onUpdate={updateArrayField}
                        onAdd={() => addField('qualifications')}
                        onRemove={(i) => removeField('qualifications', i)}
                        t={t}
                    />

                    {/* Motivation */}
                    <section className="mb-14">
                        <SectionTitle icon={<PenTool size={18}/>} title={t.motivation} />
                        <div className="mt-4 p-1 bg-gray-50 rounded-2xl focus-within:bg-[#1e3a8a]/5 transition-all">
                            <textarea 
                                className="w-full h-40 p-5 bg-transparent border-2 border-gray-100 rounded-xl text-sm font-medium outline-none focus:border-[#1e3a8a] transition-all resize-none leading-relaxed print:h-auto print:min-h-[150px]"
                                placeholder="Tell us about yourself and why you want to join..."
                                value={formData.motivation}
                                onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                            />
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="flex flex-col md:flex-row justify-between items-center md:items-end pt-10 border-t border-gray-100 gap-8">
                        <div className="flex items-center gap-4 text-gray-400 max-w-sm">
                            <Globe size={18} className="shrink-0" />
                            <p className="text-[11px] italic leading-snug">
                                {t.pdfMethod}
                            </p>
                        </div>
                        <div className="w-full md:w-64">
                            <p className="text-[10px] font-black text-gray-400 uppercase mb-8 text-right tracking-widest">{t.signature}</p>
                            <div className="h-px bg-gray-900 w-full"></div>
                        </div>
                    </footer>

                    {/* Buttons */}
                    <div className="mt-16 flex justify-center print:hidden">
                        <button 
                            onClick={() => window.print()} 
                            className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-[#dc2626] transition-all shadow-xl hover:scale-105 active:scale-95"
                        >
                            <Printer size={20} /> {t.print}
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media print {
                    body { background: white !important; }
                    .print-hidden { display: none !important; }
                    textarea { border: 1px solid #eee !important; }
                    input { border-bottom: 1px solid #eee !important; }
                }
            `}</style>
        </div>
    );
};

// --- Modern Components ---

const SectionTitle = ({ icon, title }) => (
    <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#1e3a8a] flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
            {icon}
        </div>
        <h2 className="text-sm font-black text-gray-800 uppercase tracking-widest">
            {title}
        </h2>
        <div className="flex-1 h-px bg-gray-100 ml-2"></div>
    </div>
);

const InputField = ({ label, value, onChange, icon, placeholder }) => (
    <div className="flex flex-col group">
        <label className="text-[11px] font-extrabold text-gray-400 uppercase mb-2 tracking-widest group-focus-within:text-[#1e3a8a] transition-colors">
            {label}
        </label>
        <div className="relative flex items-center">
            {icon && <span className="absolute left-0 text-gray-300 group-focus-within:text-[#1e3a8a] transition-colors">{icon}</span>}
            <input 
                type="text" 
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`w-full py-2 bg-transparent border-b-2 border-gray-100 outline-none text-sm font-bold text-gray-700 focus:border-[#1e3a8a] transition-all ${icon ? 'pl-7' : ''}`} 
            />
        </div>
    </div>
);

const DataGrid = ({ title, icon, headers, data, type, onUpdate, onAdd, onRemove, t, keys }) => {
    const dataKeys = keys || (type === 'education' ? ['ym', 'school', 'status'] : type === 'work' ? ['ym', 'company', 'status'] : ['ym', 'title', 'acquisition']);
    
    return (
        <section className="mb-14">
            <div className="flex justify-between items-center mb-6">
                <SectionTitle icon={icon} title={title} />
                <button 
                    onClick={onAdd}
                    className="print:hidden h-8 px-4 rounded-lg bg-gray-50 text-[#1e3a8a] text-[11px] font-black uppercase tracking-tighter hover:bg-[#1e3a8a] hover:text-white transition-all flex items-center gap-2"
                >
                    <Plus size={14} /> {t.labels.addMore}
                </button>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-50">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-50/50">
                            {headers.map((h, i) => (
                                <th key={i} className={`p-4 text-[10px] font-black text-gray-400 uppercase tracking-widest ${i === 1 ? 'w-1/2' : 'w-1/4'}`}>{h}</th>
                            ))}
                            <th className="w-12 print:hidden"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {data.map((item, i) => (
                            <tr key={i} className="group hover:bg-gray-50/20 transition-colors">
                                {dataKeys.map((key) => (
                                    <td key={key} className="p-4">
                                        <input 
                                            className="w-full bg-transparent outline-none text-sm font-bold text-gray-600 focus:text-[#1e3a8a] transition-colors" 
                                            value={item[key]} 
                                            placeholder="..."
                                            onChange={(e) => onUpdate(type, i, key, e.target.value)} 
                                        />
                                    </td>
                                ))}
                                <td className="p-4 text-right print:hidden">
                                    {data.length > 1 && (
                                        <button onClick={() => onRemove(i)} className="text-gray-200 hover:text-red-500 transition-colors">
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