import React from 'react';
import { Printer, Send, MapPin, Phone, Mail } from 'lucide-react';

const INTJapanRegulationsPage = ({ lang = 'en' }) => {
    const translations = {
        en: {
            title: "INT JAPAN Japanese Training Center Admission Regulations and Pledge",
            important: "Please check and understand the admission conditions carefully before signing Important",
            pledgeTitle: "Pledge",
            pledgeText: "I undertake to abide by all the above admission regulations and sign the following",
            labels: {
                subDate: "Submission date", year: "Year", month: "Month", day: "Day",
                appName: "Applicant's name (English)", dob: "Date of birth", gender: "Gender",
                male: "Male", female: "Female", curAddr: "Current address",
                guaName: "Guarantor's name (English)", relation: "Relationship",
                mobile: "Mobile Phones", messenger: "Messenger ID", email: "e-mail",
                guaAddr: "Guarantor's address"
            },
            footerTitle: "INT JAPAN Japanese Training Center Dhaka Campus",
            print: "Printing",
            send: "Send an email",
            rules: [
                "Students must follow the instructions of teachers and staff",
                "Full compliance with Bangladeshi laws and training center regulations",
                "Violation of regulations will result in cancellation of enrollment or expulsion",
                "Admission fees and tuition fees paid are non-refundable after enrollment",
                "Examination fees are the student's responsibility; no refunds for failing tests",
                "Those who do not complete the N5 course within 9 months will be expelled",
                "N4 course must be passed within 12 months or re-enrollment fees apply",
                "Attendance rate must be above 80%",
                "Maintain physical and mental health, dress hygienically and cleanly",
                "Keep premises tidy; no smoking, spitting, or littering",
                "Treat others with respect; no discrimination or violence",
                "Students must compensate for any damage caused to the institute",
                "Prior permission is required for recording or photography",
                "Signature of a guarantor is required for admission",
                "Guarantor guarantees student's conduct and fee payment",
                "Guarantor is responsible for non-payment or rule violations",
                "Guarantor can be parents, relatives, or acquaintances"
            ]
        },
        bn: {
            title: "আইএনটি জাপান জাপানিজ ট্রেনিং সেন্টার ভর্তির নীতিমালা এবং অঙ্গীকারনামা",
            important: "সাক্ষর করার আগে ভর্তির শর্তাবলী সাবধানে পড়ুন এবং বুঝে নিন (গুরুত্বপূর্ণ)",
            pledgeTitle: "অঙ্গীকারনামা",
            pledgeText: "আমি উপরের সকল ভর্তি নীতিমালা মেনে চলার অঙ্গীকার করছি এবং নিম্নলিখিত তথ্য প্রদান করছি",
            labels: {
                subDate: "জমার তারিখ", year: "বছর", month: "মাস", day: "দিন",
                appName: "আবেদনকারীর নাম (ইংরেজি)", dob: "জন্ম তারিখ", gender: "লিঙ্গ",
                male: "পুরুষ", female: "মহিলা", curAddr: "বর্তমান ঠিকানা",
                guaName: "জামিনদারের নাম (ইংরেজি)", relation: "সম্পর্ক",
                mobile: "মোবাইল নম্বর", messenger: "মেসেঞ্জার আইডি", email: "ই-মেইল",
                guaAddr: "জামিনদারের ঠিকানা"
            },
            footerTitle: "আইএনটি জাপান জাপানিজ ট্রেনিং সেন্টার ঢাকা ক্যাম্পাস",
            print: "প্রিন্ট করুন",
            send: "ইমেইল পাঠান",
            rules: [
                "ছাত্রছাত্রীদের শিক্ষক ও স্টাফদের নির্দেশ মেনে চলতে হবে",
                "বাংলাদেশী আইন এবং ট্রেনিং সেন্টারের নিয়মাবলী পূর্ণাঙ্গভাবে মানতে হবে",
                "নিয়ম লঙ্ঘন করলে ভর্তি বাতিল বা বহিষ্কার করা হবে",
                "ভর্তির পর ভর্তি ফি এবং টিউশন ফি অফেরতযোগ্য",
                "পরীক্ষার ফি ছাত্রের দায়িত্ব; ফেল করলেও ফি ফেরতযোগ্য নয়",
                "৯ মাসের মধ্যে N5 কোর্স সম্পন্ন না করলে বহিষ্কার করা হবে",
                "১২ মাসের মধ্যে N4 পাস না করলে প্রশিক্ষণ বন্ধ হবে বা পুনরায় ফি লাগবে",
                "উপস্থিতির হার অবশ্যই ৮০% এর উপরে হতে হবে",
                "শারীরিক ও মানসিক সুস্থতা বজায় রাখা এবং পরিচ্ছন্ন পোশাক পরা বাধ্যতামূলক",
                "ধূমপান, থুথু ফেলা বা ময়লা ফেলা কঠোরভাবে নিষিদ্ধ",
                "অন্যদের সাথে সম্মানজনক আচরণ করতে হবে; সহিংসতা নিষিদ্ধ",
                "ইনস্টিটিউটের ক্ষতি করলে ছাত্রকে ক্ষতিপূরণ দিতে হবে",
                "রেকর্ডিং বা ছবি তোলার জন্য পূর্বানুমতি প্রয়োজন",
                "ভর্তির জন্য জামিনদারের স্বাক্ষর বাধ্যতামূলক",
                "জামিনদার ছাত্রের আচরণ এবং ফি প্রদানের গ্যারান্টি দিবেন",
                "বকেয়া ফি বা নিয়ম ভঙ্গের জন্য জামিনদার দায়ী থাকবেন",
                "পিতা-মাতা, আত্মীয় বা পরিচিতরা জামিনদার হতে পারবেন"
            ]
        },
        jp: {
            title: "INT JAPAN 日本語トレーニングセンター 入学規定および誓約書",
            important: "署名する前に入学条件を注意深く確認し、理解してください（重要）",
            pledgeTitle: "誓約書",
            pledgeText: "私は上記のすべての入学規定を遵守することを約束し、以下に署名します",
            labels: {
                subDate: "提出日", year: "年", month: "月", day: "日",
                appName: "氏名（英語）", dob: "生年月日", gender: "性別",
                male: "男性", female: "女性", curAddr: "現住所",
                guaName: "保証人氏名（英語）", relation: "本人との関係",
                mobile: "電話番号", messenger: "メッセンジャーID", email: "メール",
                guaAddr: "保証人の住所"
            },
            footerTitle: "INT JAPAN 日本語トレーニングセンター ダッカキャンパス",
            print: "印刷する",
            send: "メール送信",
            rules: [
                "講師およびスタッフの指示に従うこと",
                "法律および規定を遵守すること",
                "違反した場合、入学取り消しまたは退学となります",
                "入学後の授業料等は返金できません",
                "試験料は自己負担とし、不合格でも返金はありません",
                "9ヶ月以内にN5を修了しない者は退学となります",
                "12ヶ月以内にN4に合格しない者は再受講料が必要です",
                "出席率は80％以上を維持すること",
                "心身の健康を維持し、清潔な服装を心がけること",
                "施設内での喫煙、唾吐き、ゴミ捨ては禁止です",
                "他者に敬意を払い、暴力的行為を禁止します",
                "損害を与えた場合は賠償責任を負うものとします",
                "録音・撮影には事前の許可が必要です",
                "入学には保証人の署名が必要です",
                "保証人は学生の素行と支払いを保証します",
                "未払いや規定違反は保証人が責任を負います",
                "保証人は親族や知人から選ぶことができます"
            ]
        }
    };

    const t = translations[lang] || translations.en;

    const InputLine = ({ label, width = "w-full", placeholder = "" }) => (
        <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-2 mb-2 w-full">
            <span className="text-[12px] font-bold text-slate-700 whitespace-nowrap min-w-fit">{label}:</span>
            <input type="text" placeholder={placeholder} className={`${width} border-b border-slate-900 outline-none px-2 py-0 text-[13px] font-medium bg-transparent placeholder:text-slate-300`} />
        </div>
    );

    return (
        <div className="bg-slate-50 min-h-screen py-6 md:py-10 px-2 md:px-4">
            <div className="max-w-[850px] mx-auto bg-white shadow-xl p-5 md:p-12 border border-slate-200 print:shadow-none print:border-none print:p-0 rounded-lg">

                {/* Main Header */}
                <h1 className="text-lg md:text-2xl font-black text-[#1A3673] text-center uppercase tracking-tight leading-tight mb-4 md:mb-6 px-2">
                    {t.title}
                </h1>

                {/* Important Alert */}
                <div className="bg-[#FF9F9F] text-white py-2 px-4 md:px-6 rounded-full text-center mb-6 md:mb-8">
                    <p className="text-[10px] md:text-[13px] font-bold italic">{t.important}</p>
                </div>

                {/* Rules List */}
                <div className="space-y-2 mb-8">
                    <div className="h-1 bg-green-600 mb-4"></div>
                    {t.rules.map((rule, i) => (
                        <div key={i} className="flex gap-3 p-2 bg-slate-50 border border-slate-100 rounded-lg group hover:bg-white transition-all">
                            <span className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-[9px] md:text-[10px] font-bold">
                                {(i + 1).toString().padStart(2, '0')}
                            </span>
                            <p className="text-[10.5px] md:text-[12.5px] text-slate-700 font-semibold self-center">{rule}</p>
                        </div>
                    ))}
                </div>

                {/* Pledge Section */}
                <div className="border-2 border-dashed border-green-600 p-4 md:p-6 rounded-2xl bg-green-50/30 text-center mb-8">
                    <h3 className="text-md md:text-lg font-black text-green-800 uppercase mb-2">{t.pledgeTitle}</h3>
                    <p className="text-[11px] md:text-[12px] font-bold text-slate-600 leading-relaxed">{t.pledgeText}</p>
                </div>

                {/* Form Fields */}
                <div className="space-y-6 mb-12">
                    {/* Submission Date */}
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-4 gap-y-2">
                        <InputLine label={t.labels.subDate} width="sm:w-24" />
                        <InputLine label={t.labels.year} width="sm:w-16" />
                        <InputLine label={t.labels.month} width="sm:w-16" />
                        <InputLine label={t.labels.day} width="sm:w-16" />
                    </div>

                    <InputLine label={t.labels.appName} placeholder="Full Name in English" />

                    {/* DOB & Gender */}
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-4 gap-y-2">
                            <InputLine label={t.labels.dob} width="sm:w-24" />
                            <InputLine label={t.labels.year} width="sm:w-16" />
                            <InputLine label={t.labels.month} width="sm:w-16" />
                            <InputLine label={t.labels.day} width="sm:w-16" />
                        </div>
                        <div className="flex gap-4 items-center bg-slate-50 p-2 rounded-lg border border-slate-100 w-fit">
                            <span className="text-[12px] font-bold text-slate-700">{t.labels.gender}</span>
                            <label className="text-xs font-bold flex items-center gap-1 cursor-pointer"><input type="radio" name="g" className="accent-green-600" /> {t.labels.male}</label>
                            <label className="text-xs font-bold flex items-center gap-1 cursor-pointer"><input type="radio" name="g" className="accent-green-600" /> {t.labels.female}</label>
                        </div>
                    </div>

                    <InputLine label={t.labels.curAddr} placeholder="Current Address" />

                    <div className="h-px bg-slate-100 my-6"></div>

                    <InputLine label={t.labels.guaName} placeholder="Guarantor Name in English" />

                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-4 gap-y-2">
                        <InputLine label={t.labels.dob} width="sm:w-24" />
                        <InputLine label={t.labels.year} width="sm:w-16" />
                        <InputLine label={t.labels.month} width="sm:w-16" />
                        <InputLine label={t.labels.day} width="sm:w-16" />
                    </div>
                    
                    <InputLine label={t.labels.relation} placeholder="Relationship" />
                    <InputLine label={t.labels.guaAddr} placeholder="Guarantor Address" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        <InputLine label={t.labels.mobile} placeholder="Mobile Number" />
                        <InputLine label={t.labels.messenger} placeholder="Messenger ID" />
                    </div>

                    <InputLine label={t.labels.email} placeholder="email@example.com" />
                </div>

                {/* Footer Box */}
                <div className="bg-sky-50 p-4 md:p-6 rounded-3xl border border-sky-100 mb-8 shadow-inner">
                    <h4 className="text-[#1A3673] font-black text-sm mb-4 uppercase text-center md:text-left">{t.footerTitle}</h4>
                    <div className="space-y-3 text-[10.5px] md:text-[11px] text-slate-600 font-bold">
                        <p className="flex items-start gap-3"><Mail size={14} className="text-red-500 mt-0.5 flex-shrink-0" /> <span className="break-all">Email: dhaka@int-japan.com</span></p>
                        <p className="flex items-center gap-3 text-lg md:text-xl text-[#1A3673]"><Phone size={20} className="text-pink-600 flex-shrink-0" /> Tel : 019-4234-8132</p>
                        <p className="flex items-start gap-3"><MapPin size={16} className="text-red-600 mt-0.5 flex-shrink-0" /> <span>Address: House No.27/1(Lift-8), Road No.02, Sector No.15, Uttara, Diabari, Dhaka-1230</span></p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 print:hidden">
                    <button onClick={() => window.print()} className="w-full sm:w-auto bg-green-600 text-white px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-green-700 shadow-md transition-all active:scale-95">
                        <Printer size={18} /> {t.print}
                    </button>
                    <button className="w-full sm:w-auto bg-sky-500 text-white px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-sky-600 shadow-md transition-all active:scale-95">
                        <Send size={18} /> {t.send}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default INTJapanRegulationsPage;