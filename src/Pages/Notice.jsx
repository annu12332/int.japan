import React, { useState, useEffect } from 'react';

const NoticePage = ({ lang = 'en' }) => {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedNotice, setSelectedNotice] = useState(null);

    const translations = {
        en: {
            title: "Important Notices", 
            btn: "View", 
            closeBtn: "Close",
            loading: "Fetching notices...",
            error: "Failed to load notices."
        },
        bn: {
            title: "গুরুত্বপূর্ণ নোটিশ", 
            btn: "দেখুন", 
            closeBtn: "বন্ধ করুন",
            loading: "নোটিশ লোড হচ্ছে...",
            error: "নোটিশ লোড করতে ব্যর্থ।"
        },
        jp: {
            title: "重要なお知らせ", 
            btn: "見る", 
            closeBtn: "閉じる",
            loading: "読み込み中...",
            error: "エラーが発生しました。"
        }
    };

    const content = translations[lang] || translations.en;

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await fetch('https://intjapan.jabedinternational.com/api/calendar-events?type=notice');
                if (!response.ok) throw new Error('Network error');
                
                const result = await response.json();
                const data = result.data || result;
                
                setNotices(Array.isArray(data) ? data : []);
                setLoading(false);
            } catch (err) {
                console.error("Notice fetch error:", err);
                setError(true);
                setLoading(false);
            }
        };

        fetchNotices();
    }, []);

    // Date formatting helper
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        const locale = lang === 'bn' ? 'bn-BD' : lang === 'jp' ? 'ja-JP' : 'en-US';
        return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long' }).format(date);
    };

    return (
        <div className="min-h-screen bg-[#1e4b8f] py-20 px-6 relative">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 border-l-4 border-[#ff6b6b] pl-4 transition-all">
                    {content.title}
                </h2>
                
                <div className="space-y-4">
                    {loading ? (
                        <div className="text-white/70 text-center py-10 animate-pulse">{content.loading}</div>
                    ) : error ? (
                        <div className="text-red-300 text-center py-10">{content.error}</div>
                    ) : (
                        notices.map((item, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex justify-between items-center hover:bg-white/15 transition-all group shadow-xl">
                                <div>
                                    <span className="text-blue-200 text-xs font-bold uppercase tracking-wider">
                                        {formatDate(item.start_date || item.date)}
                                    </span>
                                    <h3 className="text-white text-lg md:text-xl font-semibold mt-1">
                                        {item.title || item.name}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="hidden sm:inline-block bg-[#ff6b6b] text-white text-[10px] px-2 py-1 rounded-md font-bold uppercase">
                                        {item.category || "Notice"}
                                    </span>
                                    <button 
                                        onClick={() => setSelectedNotice(item)}
                                        className="bg-white/10 text-white px-6 py-2 rounded-xl text-sm font-bold group-hover:bg-[#ff6b6b] transition-all transform active:scale-95 shadow-lg"
                                    >
                                        {content.btn}
                                    </button>
                                </div>
                            </div>
                        ))
                    )}

                    {!loading && notices.length === 0 && !error && (
                        <div className="text-white/40 text-center py-10 italic">No notices available right now.</div>
                    )}
                </div>
            </div>

            {/* --- Details Modal --- */}
            {selectedNotice && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedNotice(null)}
                    ></div>
                    
                    <div className="relative bg-[#2557a7] border border-white/20 w-full max-w-lg p-8 rounded-[2.5rem] shadow-2xl transform transition-all animate-in fade-in zoom-in duration-300">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-[#ff6b6b] text-white text-[10px] px-2 py-1 rounded font-bold uppercase">
                                {selectedNotice.category || "Notice"}
                            </span>
                            <span className="text-blue-200 text-sm font-bold">
                                {formatDate(selectedNotice.start_date || selectedNotice.date)}
                            </span>
                        </div>
                        
                        <h3 className="text-white text-2xl font-bold mb-4">
                            {selectedNotice.title || selectedNotice.name}
                        </h3>
                        
                        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 mb-6">
                            <p className="text-blue-50 leading-relaxed">
                                {selectedNotice.description || "No detailed description provided."}
                            </p>
                        </div>
                        
                        <button 
                            onClick={() => setSelectedNotice(null)}
                            className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-colors border border-white/10"
                        >
                            {content.closeBtn}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NoticePage;