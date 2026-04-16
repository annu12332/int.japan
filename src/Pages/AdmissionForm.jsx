import React, { useState } from 'react';
import { Mail, Phone, Globe, MapPin, Camera, Send, Printer, User, Home, BookOpen, Trash2 } from 'lucide-react';

const AdmissionForm = ({ lang = 'en' }) => {
    // States
    const [photoPreview, setPhotoPreview] = useState(null);
    const [formData, setFormData] = useState({
        course: '', batch: '', name: '', fName: '', mName: '', qualification: [],
        experience: '', religion: '', nid: '', dob: '', age: '', blood: '',
        contact: '', otherNo: '', passport: '', givenDate: '', issueDate: '', expiryDate: '',
        p_house: '', p_road: '', p_village: '', p_postal: '', p_po: '', p_ps: '', p_dist: '',
        pre_house: '', pre_road: '', pre_village: '', pre_postal: '', pre_po: '', pre_ps: '', pre_dist: '',
        classType: '', residence: '', date: ''
    });

    // Translation Data
    const translations = {
        en: {
            title: "INT Japan Training Center",
            subtitle: "Bridging dreams between Bangladesh and Japan",
            course: "Name of Course", personal: "Personal Information", batch: "Batch No", 
            name: "Full Name", fName: "Father's Name", mName: "Mother's Name", 
            qualification: "Qualification", experience: "Experience", religion: "Religion", 
            nid: "NID No", dob: "Date of Birth", age: "Current Age", blood: "Blood Group", 
            contact: "Contact Number", otherNo: "Guardian's No", passport: "Passport No", 
            givenDate: "Given Date", issueDate: "Issuing Date", expiryDate: "Expiry Date", 
            permAddr: "Permanent Address", presAddr: "Present Address", house: "House", 
            road: "Road", village: "Village", postal: "Postal Code", po: "P.O", ps: "PS", 
            dist: "Dist", class: "Class Mode", offline: "Offline", residence: "Residence/Hostel", 
            yes: "Yes", no: "No", date: "Application Date", applyBtn: "Submit Application", 
            attachPhoto: "Attach Photo", print: "Print Form", success: "Application Submitted!"
        },
        bn: {
            title: "আইএনটি জাপান ট্রেনিং সেন্টার",
            subtitle: "বাংলাদেশ এবং জাপানের মাঝে স্বপ্নের সেতুবন্ধন",
            course: "কোর্সের নাম", personal: "ব্যক্তিগত তথ্য", batch: "ব্যাচ নং", 
            name: "পূর্ণ নাম", fName: "পিতার নাম", mName: "মাতার নাম", 
            qualification: "শিক্ষাগত যোগ্যতা", experience: "অভিজ্ঞতা", religion: "ধর্ম", 
            nid: "এনআইডি নং", dob: "জন্ম তারিখ", age: "বর্তমান বয়স", blood: "রক্তের গ্রুপ", 
            contact: "যোগাযোগ নম্বর", otherNo: "অভিভাবকের নম্বর", passport: "পাসপোর্ট নং", 
            givenDate: "প্রদানের তারিখ", issueDate: "ইস্যুর তারিখ", expiryDate: "মেয়াদোত্তীর্ণের তারিখ", 
            permAddr: "স্থায়ী ঠিকানা", presAddr: "বর্তমান ঠিকানা", house: "বাসা", 
            road: "রোড", village: "গ্রাম", postal: "কোড", po: "ডাকঘর", ps: "থানা", 
            dist: "জেলা", class: "ক্লাস মোড", offline: "অফলাইন", residence: "আবাসিক/হস্টেল", 
            yes: "হ্যাঁ", no: "না", date: "আবেদনের তারিখ", applyBtn: "আবেদন জমা দিন", 
            attachPhoto: "ছবি যুক্ত করুন", print: "প্রিন্ট করুন", success: "আবেদন জমা হয়েছে!"
        },
        jp: {
            title: "INTジャパン・トレーニングセンター",
            subtitle: "バングラデシュと日本の夢を繋ぐ",
            course: "コース名", personal: "個人情報", batch: "バッチ番号", 
            name: "氏名", fName: "父の名前", mName: "母の名前", 
            qualification: "学歴", experience: "経験", religion: "宗教", 
            nid: "ID番号", dob: "生年月日", age: "年齢", blood: "血液型", 
            contact: "電話番号", otherNo: "保護者番号", passport: "パスポート番号", 
            givenDate: "交付日", issueDate: "発行日", expiryDate: "有効期限", 
            permAddr: "本籍地住所", presAddr: "現住所", house: "家", 
            road: "道路", village: "村", postal: "郵便番号", po: "郵便局", ps: "警察署", 
            dist: "地区", class: "受講形式", offline: "オフライン", residence: "寮・宿泊施設", 
            yes: "はい", no: "いいえ", date: "申込日", applyBtn: "申し込む", 
            attachPhoto: "写真を添付", print: "印刷する", success: "申し込みが完了しました！"
        }
    };

    const t = translations[lang] || translations.en;

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox' && name === 'qualification') {
            const updatedQual = checked 
                ? [...formData.qualification, value]
                : formData.qualification.filter(q => q !== value);
            setFormData(prev => ({ ...prev, qualification: updatedQual }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPhotoPreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(t.success);
        console.log("Submitted:", formData);
    };

    const InputField = ({ label, name, type = "text" }) => (
        <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">{label}</label>
            <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#1A3673] focus:ring-4 focus:ring-[#1A3673]/5 transition-all text-slate-800"
            />
        </div>
    );

    return (
        <section className="bg-slate-50 min-h-screen py-10 px-4 print:bg-white print:py-0">
            <form onSubmit={handleSubmit} className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-slate-100 print:shadow-none print:border-none">
                
                {/* Header Strip */}
                <div className="flex h-2"><div className="w-1/2 bg-[#EE1D23]"></div><div className="w-1/2 bg-[#009444]"></div></div>
                
                <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-black text-[#1A3673] tracking-tighter uppercase italic">{t.title}</h1>
                        <div className="flex flex-col gap-1 mt-2 text-slate-500 text-xs font-semibold">
                            <p className="flex items-center justify-center md:justify-start gap-2"><MapPin size={14} className="text-[#EE1D23]" /> Uttara Sector-15, Diabari, Dhaka-1230</p>
                            <p className="flex items-center justify-center md:justify-start gap-2"><Phone size={14} className="text-[#009444]" /> +88 019 4400 3890 | <Mail size={14} /> dhaka@int-japan.com</p>
                        </div>
                    </div>
                    
                    <label className="w-32 h-40 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center bg-slate-50 cursor-pointer overflow-hidden relative">
                        <input type="file" className="hidden" onChange={handlePhotoChange} />
                        {photoPreview ? <img src={photoPreview} className="w-full h-full object-cover" alt="Preview" /> : 
                        <div className="text-center p-2 text-slate-400">
                            <Camera size={28} className="mx-auto mb-2" />
                            <span className="text-[10px] font-bold uppercase">{t.attachPhoto}</span>
                        </div>}
                    </label>
                </div>

                <div className="px-8 md:px-12 pb-12 space-y-10">
                    {/* Course Selection */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="flex items-center gap-2 font-black text-[#1A3673] uppercase text-sm mb-4"><BookOpen size={18} /> {t.course}</h3>
                        <div className="flex flex-wrap gap-2">
                            {['N5', 'N5 & N4', 'N4', 'N3', 'Study', 'Job'].map(c => (
                                <button key={c} type="button" onClick={() => setFormData({...formData, course: c})} className={`px-6 py-2 rounded-xl font-bold transition-all border-2 ${formData.course === c ? 'bg-[#1A3673] border-[#1A3673] text-white' : 'bg-white text-slate-600 border-slate-200 hover:border-[#1A3673]'}`}>{c}</button>
                            ))}
                        </div>
                    </div>

                    {/* Personal Data */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
                            <User className="text-[#1A3673]" size={20} />
                            <h3 className="font-black text-[#1A3673] uppercase">{t.personal}</h3>
                            <div className="ml-auto w-32"><InputField label={t.batch} name="batch" /></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="md:col-span-3"><InputField label={t.name} name="name" /></div>
                            <InputField label={t.fName} name="fName" />
                            <InputField label={t.mName} name="mName" />
                            <InputField label={t.religion} name="religion" />
                            <InputField label={t.dob} name="dob" type="date" />
                            <InputField label={t.age} name="age" />
                            <InputField label={t.blood} name="blood" />
                        </div>
                    </div>

                    {/* Contact & ID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <div className="space-y-4">
                            <InputField label={t.contact} name="contact" />
                            <InputField label={t.otherNo} name="otherNo" />
                            <InputField label={t.nid} name="nid" />
                        </div>
                        <div className="space-y-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                            <InputField label={t.passport} name="passport" />
                            <div className="grid grid-cols-2 gap-4">
                                <InputField label={t.issueDate} name="issueDate" type="date" />
                                <InputField label={t.expiryDate} name="expiryDate" type="date" />
                            </div>
                        </div>
                    </div>

                    {/* Addresses */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <h4 className="font-bold text-[#1A3673] flex items-center gap-2 uppercase text-xs"><Home size={14} /> {t.permAddr}</h4>
                            <div className="grid grid-cols-2 gap-3">
                                <InputField label={t.house} name="p_house" /> <InputField label={t.village} name="p_village" />
                                <InputField label={t.po} name="p_po" /> <InputField label={t.dist} name="p_dist" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold text-[#1A3673] flex items-center gap-2 uppercase text-xs"><MapPin size={14} /> {t.presAddr}</h4>
                            <div className="grid grid-cols-2 gap-3">
                                <InputField label={t.house} name="pre_house" /> <InputField label={t.village} name="pre_village" />
                                <InputField label={t.postal} name="pre_postal" /> <InputField label={t.dist} name="pre_dist" />
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-slate-100">
                        <div className="flex gap-4 print:hidden">
                            <button type="submit" className="bg-[#1A3673] text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-[#EE1D23] transition-all"><Send size={18} /> {t.applyBtn}</button>
                            <button type="button" onClick={() => window.print()} className="bg-white border-2 border-slate-200 px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all"><Printer size={18} /> {t.print}</button>
                        </div>
                        <div className="text-center md:text-right">
                             <div className="flex items-center gap-2 font-black text-[#009444] text-lg italic"><Globe size={18} /> WWW.INT-JAPAN.COM</div>
                             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t.subtitle}</p>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AdmissionForm;