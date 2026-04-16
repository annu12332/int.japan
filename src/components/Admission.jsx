import React from 'react';
import { Globe, Gift, ShieldCheck, CheckCircle2 } from 'lucide-react';

const AdmissionsOverview = ({ lang = 'en' }) => {
    const translations = {
        en: {
            sectionTitle: "Admissions Overview",
            heroTitle: "INT Japan Training Center Ltd.",
            heroSub: "Realize your dreams with Japanese language - Bangladesh's No.1 track record and transparency",
            courseTitle: "Courses & Fees",
            discount: "Family Discount",
            refund: "Refund Guarantee",
            feeDetails: [
                { label: "Admission Fee (First time)", price: "5,000 Taka" },
                { label: "N5 Course (3 months / 240 hours)", price: "15,000 Taka" },
                { label: "N4 Course (6 months / 480 hours)", price: "36,000 Taka" },
                { label: "N3 Course (6 months / 480 hours)", price: "36,000 Taka" },
                { label: "Material Fees (N5: 1,000 / N4: 2,000)", price: "1,000 ~ 2,000 Taka" },
                { label: "Special Offer", price: "10% OFF (2+ People)", highlight: true },
                { label: "Peace of Mind", price: "Full Refund (Within 4 Sessions)", highlight: true }
            ]
        },
        bn: {
            sectionTitle: "ভর্তি নির্দেশিকা",
            heroTitle: "আইএনটি জাপান ট্রেনিং সেন্টার লিঃ",
            heroSub: "জাপানি ভাষার মাধ্যমে আপনার স্বপ্ন পূরণ করুন - বাংলাদেশের এক নম্বর ট্র্যাক রেকর্ড এবং স্বচ্ছতা",
            courseTitle: "কোর্স এবং ফি",
            discount: "ফ্যামিলি ডিসকাউন্ট",
            refund: "রিফান্ড গ্যারান্টি",
            feeDetails: [
                { label: "ভর্তি ফি (প্রথমবার)", price: "৫,০০০ টাকা" },
                { label: "N5 কোর্স (৩ মাস / ২৪০ ঘণ্টা)", price: "১৫,০০০ টাকা" },
                { label: "N4 কোর্স (৬ মাস / ৪৮০ ঘণ্টা)", price: "৩৬,০০০ টাকা" },
                { label: "N3 কোর্স (৬ মাস / ৪৮০ ঘণ্টা)", price: "৩৬,০০০ টাকা" },
                { label: "বই ও ম্যাটেরিয়াল ফি (N5: ১,০০০ / N4: ২,০০০)", price: "১,০০০ ~ ২,০০০ টাকা" },
                { label: "বিশেষ অফার", price: "১০% ছাড় (২+ ব্যক্তি)", highlight: true },
                { label: "নিশ্চিন্তে ভর্তি", price: "পূর্ণ রিফান্ড (৪ ক্লাসের মধ্যে)", highlight: true }
            ]
        },
        jp: {
            sectionTitle: "入学案内",
            heroTitle: "INT日本トレーニングセンター (ダッカ校)",
            heroSub: "あなたの夢を日本語で叶える - バングラデシュNo.1の実績と透明性",
            courseTitle: "コースと料金",
            discount: "家族割引",
            refund: "返金保証",
            feeDetails: [
                { label: "入学金（初回のみ）", price: "5,000タカ" },
                { label: "N5コース（3ヶ月・240時間）", price: "15,000タカ" },
                { label: "N4コース（6ヶ月・480時間）", price: "36,000タカ" },
                { label: "N3コース（6ヶ月・480時間）", price: "36,000タカ" },
                { label: "教材費（N5: 1,000 / N4: 2,000）", price: "1,000〜2,000タカ" },
                { label: "特別割引", price: "2名以上で10%OFF", highlight: true },
                { label: "安心保証", price: "初回4回以内なら全額返金", highlight: true }
            ]
        }
    };

    const content = translations[lang] || translations.en;

    return (
        <section className="bg-[#f8faff] py-16 md:py-28 px-4 overflow-hidden">
            <div className="max-w-5xl mx-auto relative">

                {/* Decorative Background Shapes */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50"></div>

                {/* Section Header */}
                <div className="text-center mb-16 relative">
                    <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm block mb-3">
                        Enrollment 2026
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-4 tracking-tight">
                        {content.sectionTitle}
                    </h2>
                    <div className="flex justify-center gap-1">
                        <div className="w-12 h-1.5 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-1.5 bg-blue-900 rounded-full"></div>
                    </div>
                </div>

                {/* Hero Card  */}
                <div className="relative group mb-12">
                    <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-1 group-hover:rotate-0 transition-transform duration-500 shadow-2xl"></div>
                    <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 rounded-[3rem] p-8 md:p-16 text-center text-white overflow-hidden -rotate-1 group-hover:rotate-0 transition-transform duration-500">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-2xl"></div>

                        <div className="relative z-10 space-y-6">
                            <div className="bg-white/10 w-20 h-20 rounded-2xl backdrop-blur-md flex items-center justify-center mx-auto border border-white/20 shadow-xl">
                                <Globe className="w-10 h-10 text-blue-200" />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                                {content.heroTitle}
                            </h3>
                            <p className="text-blue-100 text-lg md:text-2xl max-w-3xl mx-auto font-medium opacity-90">
                                {content.heroSub}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Split Content Section */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* Left Side: Badges & Branding */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white p-8 rounded-[1rem] shadow-xl shadow-blue-100/50 border border-white flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center mb-4 border border-red-100">
                                <Gift className="text-red-500 w-10 h-10" />
                            </div>
                            <h4 className="text-xl font-bold text-blue-950 mb-2">{content.discount}</h4>
                            <p className="text-gray-500 text-sm">Valid for families and group enrollments</p>
                        </div>

                        <div className="bg-white p-8 rounded-[1rem] shadow-xl shadow-blue-100/50 border border-white flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-green-50 rounded-3xl flex items-center justify-center mb-4 border border-green-100">
                                <ShieldCheck className="text-green-600 w-10 h-10" />
                            </div>
                            <h4 className="text-xl font-bold text-blue-950 mb-2">{content.refund}</h4>
                            <p className="text-gray-500 text-sm">Guaranteed satisfaction or full money back</p>
                        </div>
                    </div>

                    {/* Right Side: Detailed Pricing Table */}
                    <div className="lg:col-span-8 bg-white rounded-[1rem] shadow-2xl shadow-blue-100/30 border border-white p-6 md:p-12 overflow-hidden relative">
                        <h3 className="text-2xl md:text-3xl font-bold text-blue-950 mb-8 flex items-center gap-3">
                            <CheckCircle2 className="text-blue-600 w-8 h-8" />
                            {content.courseTitle}
                        </h3>

                        <div className="space-y-4">
                            {content.feeDetails.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl transition-all duration-300 ${item.highlight
                                            ? "bg-blue-900 text-white scale-[1.02] shadow-lg shadow-blue-200"
                                            : "bg-gray-50 hover:bg-blue-50 border border-transparent hover:border-blue-100"
                                        }`}
                                >
                                    <span className={`text-sm md:text-base font-semibold ${item.highlight ? "text-blue-100" : "text-gray-600"}`}>
                                        {item.label}
                                    </span>
                                    <span className={`text-base md:text-xl font-bold mt-1 sm:mt-0 ${item.highlight ? "text-white" : "text-blue-900"}`}>
                                        {item.price}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                            <p className="text-xs text-gray-400 italic">
                                * Prices are subject to change based on term variations
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdmissionsOverview;