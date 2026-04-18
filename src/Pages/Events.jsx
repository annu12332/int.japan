import React, { useState, useEffect } from 'react';

const EventsPage = ({ lang = 'en' }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const translations = {
        en: {
            title: "Upcoming Events", 
            join: "Join Now",
            loading: "Loading events...",
            error: "Failed to load events."
        },
        bn: {
            title: "আগামী ইভেন্টসমূহ", 
            join: "অংশ নিন",
            loading: "ইভেন্ট লোড হচ্ছে...",
            error: "উপাত্ত লোড করতে ব্যর্থ।"
        },
        jp: {
            title: "今後のイベント", 
            join: "参加する",
            loading: "読み込み中...",
            error: "エラーが発生しました。"
        }
    };

    const content = translations[lang] || translations.en;

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // Event fetch korar jonno API call
                const response = await fetch('https://intjapan.jabedinternational.com/api/calendar-events?type=event');
                if (!response.ok) throw new Error('Failed to fetch');
                
                const result = await response.json();
                const data = result.data || result;
                
                setEvents(Array.isArray(data) ? data : []);
                setLoading(false);
            } catch (err) {
                console.error("Event fetch error:", err);
                setError(true);
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    // Date formatting helper
    const formatDate = (dateString) => {
        if (!dateString) return "TBA";
        const date = new Date(dateString);
        const locale = lang === 'bn' ? 'bn-BD' : lang === 'jp' ? 'ja-JP' : 'en-US';
        return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short' }).format(date);
    };

    return (
        <div className="min-h-screen bg-[#1e4b8f] py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extrabold text-white mb-12 text-center">{content.title}</h2>
                
                {loading ? (
                    <div className="text-white/70 text-center py-20 animate-pulse text-xl font-medium">
                        {content.loading}
                    </div>
                ) : error ? (
                    <div className="text-red-300 text-center py-20 font-medium">
                        {content.error}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {events.map((event, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] overflow-hidden hover:translate-y-[-5px] transition-all shadow-2xl">
                                {/* Event Banner Area */}
                                <div className="h-40 bg-gradient-to-br from-blue-500/40 to-[#ff6b6b]/40 flex items-center justify-center text-5xl">
                                    {/* Jodi API te image thake tobe: <img src={event.image} /> */}
                                    📅
                                </div>

                                <div className="p-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="bg-white/20 text-blue-100 px-3 py-1 rounded-full text-xs font-bold uppercase">
                                            {formatDate(event.event_date || event.date)}
                                        </span>
                                        <span className="text-blue-200 text-[10px] md:text-xs tracking-widest uppercase font-bold truncate max-w-[150px]">
                                            📍 {event.location || event.loc || "Main Campus"}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-white text-2xl font-bold mb-6 line-clamp-2 min-h-[4rem]">
                                        {event.title || event.name}
                                    </h3>
                                    
                                    <button className="w-full py-4 bg-[#ff6b6b] hover:bg-[#ff5252] text-white rounded-2xl font-bold transition-all transform active:scale-95 shadow-lg">
                                        {content.join}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {!loading && events.length === 0 && !error && (
                    <div className="text-white/40 text-center py-20 italic">
                        No upcoming events found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventsPage;