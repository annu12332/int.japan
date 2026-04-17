import React from 'react';

const HolidayPage = ({ lang = 'en' }) => {
    const translations = {
        en: {
            title: "Holiday Calendar", headers: ["Holiday", "Date", "Type"], list: [
                { n: "Eid-ul-Fitr", d: "March 31", t: "Religious" },
                { n: "Marine Day", d: "July 20", t: "National" }
            ]
        },
        bn: {
            title: "ছুটির ক্যালেন্ডার", headers: ["ছুটির নাম", "তারিখ", "ধরণ"], list: [
                { n: "ঈদুল ফিতর", d: "৩১ মার্চ", t: "ধর্মীয়" },
                { n: "মেরিন ডে", d: "২০ জুলাই", t: "জাতীয়" }
            ]
        },
        jp: {
            title: "祝日カレンダー", headers: ["祝日名", "日付", "種類"], list: [
                { n: "イード・アル・フィトル", d: "3月31日", t: "宗教的" },
                { n: "海の日", d: "7月20日", t: "国民の祝日" }
            ]
        }
    };

    const content = translations[lang] || translations.en;

    return (
        <div className="min-h-screen bg-[#1e4b8f] py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-6 md:p-10 shadow-2xl overflow-hidden">
                    <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
                        <span className="bg-[#ff6b6b] p-2 rounded-xl text-xl">🌴</span> {content.title}
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/10 text-blue-200 text-xs uppercase tracking-[0.2em] font-black">
                                    <th className="pb-6 px-4">{content.headers[0]}</th>
                                    <th className="pb-6 px-4">{content.headers[1]}</th>
                                    <th className="pb-6 px-4">{content.headers[2]}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {content.list.map((h, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-all group">
                                        <td className="py-5 px-4 font-bold text-white text-lg">{h.n}</td>
                                        <td className="py-5 px-4 text-blue-100 font-medium">{h.d}</td>
                                        <td className="py-5 px-4">
                                            <span className="bg-white/10 border border-white/10 text-blue-200 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider group-hover:bg-[#ff6b6b] group-hover:text-white transition-all">
                                                {h.t}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HolidayPage;