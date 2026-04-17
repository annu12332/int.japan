import React from 'react';

const EventsPage = ({ lang = 'en' }) => {
    const translations = {
        en: {
            title: "Upcoming Events", join: "Join Now", list: [
                { title: "Cultural Exchange Day", date: "May 10", loc: "Main Campus" },
                { title: "Job Fair 2026", date: "June 05", loc: "City Center" }
            ]
        },
        bn: {
            title: "আগামী ইভেন্টসমূহ", join: "অংশ নিন", list: [
                { title: "সাংস্কৃতিক বিনিময় দিবস", date: "১০ মে", loc: "মেইন ক্যাম্পাস" },
                { title: "জব ফেয়ার ২০২৬", date: "০৫ জুন", loc: "সিটি সেন্টার" }
            ]
        },
        jp: {
            title: "今後のイベント", join: "参加する", list: [
                { title: "文化交流の日", date: "5月10日", loc: "メインキャンパス" },
                { title: "ジョブフェア 2026", date: "6月05日", loc: "シティセンター" }
            ]
        }
    };

    const content = translations[lang] || translations.en;

    return (
        <div className="min-h-screen bg-[#1e4b8f] py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extrabold text-white mb-12 text-center">{content.title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {content.list.map((event, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] overflow-hidden hover:translate-y-[-5px] transition-all shadow-2xl">
                            <div className="h-40 bg-gradient-to-br from-blue-500/40 to-[#ff6b6b]/40 flex items-center justify-center text-5xl">📅</div>
                            <div className="p-8">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="bg-white/20 text-blue-100 px-3 py-1 rounded-full text-xs font-bold uppercase">{event.date}</span>
                                    <span className="text-blue-200 text-xs tracking-widest uppercase font-bold">📍 {event.loc}</span>
                                </div>
                                <h3 className="text-white text-2xl font-bold mb-6">{event.title}</h3>
                                <button className="w-full py-4 bg-[#ff6b6b] hover:bg-[#ff5252] text-white rounded-2xl font-bold transition-all transform active:scale-95 shadow-lg">
                                    {content.join}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;