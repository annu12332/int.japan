import React, { useState, useEffect } from 'react';

const HolidayPage = ({ lang = 'en' }) => {
    const [holidays, setHolidays] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const translations = {
        en: {
            title: "Holiday Calendar",
            headers: ["Holiday", "Date", "Type"],
            loading: "Loading holidays...",
            error: "Failed to load holidays."
        },
        bn: {
            title: "ছুটির ক্যালেন্ডার",
            headers: ["ছুটির নাম", "তারিখ", "ধরণ"],
            loading: "ছুটি লোড হচ্ছে...",
            error: "উপাত্ত লোড করতে ব্যর্থ।"
        },
        jp: {
            title: "祝日カレンダー",
            headers: ["祝日名", "日付", "種類"],
            loading: "読み込み中...",
            error: "データの読み込みに失敗しました。"
        }
    };

    const content = translations[lang] || translations.en;

    useEffect(() => {
        const fetchHolidays = async () => {
            try {
                const response = await fetch('https://intjapan.jabedinternational.com/api/calendar-events?type=holiday');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                
                // API theke data asle seta format kora
                // Dhore nicchi API response-e 'name', 'start_date', ebong 'category' ache
                setHolidays(data.data || data); 
                setLoading(false);
            } catch (err) {
                console.error("Error fetching holidays:", err);
                setError(true);
                setLoading(false);
            }
        };

        fetchHolidays();
    }, []);

    // Date formatting function
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric' };
        
        // Language onujayi date format
        const locale = lang === 'bn' ? 'bn-BD' : lang === 'jp' ? 'ja-JP' : 'en-US';
        return new Intl.DateTimeFormat(locale, options).format(date);
    };

    return (
        <div className="min-h-screen bg-[#1e4b8f] py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-6 md:p-10 shadow-2xl overflow-hidden">
                    <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
                        <span className="bg-[#ff6b6b] p-2 rounded-xl text-xl">🌴</span> {content.title}
                    </h2>

                    <div className="overflow-x-auto">
                        {loading ? (
                            <div className="text-white text-center py-10 animate-pulse">{content.loading}</div>
                        ) : error ? (
                            <div className="text-red-300 text-center py-10">{content.error}</div>
                        ) : (
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/10 text-blue-200 text-xs uppercase tracking-[0.2em] font-black">
                                        <th className="pb-6 px-4">{content.headers[0]}</th>
                                        <th className="pb-6 px-4">{content.headers[1]}</th>
                                        <th className="pb-6 px-4">{content.headers[2]}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {holidays.map((h, i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-all group">
                                            {/* API field names: 'title' (name), 'start_date' (date), 'description' (type) */}
                                            {/* Apnar API field name onujayi niche edit kore nin */}
                                            <td className="py-5 px-4 font-bold text-white text-lg">
                                                {h.title || h.name}
                                            </td>
                                            <td className="py-5 px-4 text-blue-100 font-medium">
                                                {formatDate(h.start_date || h.event_date)}
                                            </td>
                                            <td className="py-5 px-4">
                                                <span className="bg-white/10 border border-white/10 text-blue-200 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider group-hover:bg-[#ff6b6b] group-hover:text-white transition-all">
                                                    {h.category || h.type || "Holiday"}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                        
                        {!loading && holidays.length === 0 && !error && (
                            <div className="text-white/50 text-center py-10 italic">No holidays found.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HolidayPage;