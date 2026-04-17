import React, { useState } from 'react';

const NoticePage = ({ lang = 'en' }) => {
    // Modal-এর জন্য স্টেট
    const [selectedNotice, setSelectedNotice] = useState(null);

    const translations = {
        en: {
            title: "Important Notices", 
            btn: "View", 
            closeBtn: "Close",
            detailsTitle: "Notice Details",
            list: [
                { t: "Admission Open for Fall 2026", d: "15 April", tag: "New", desc: "We are pleased to announce that admissions for the Fall 2026 session are now open. Interested students can apply through our online portal or visit the campus office." },
                { t: "Revised JLPT Schedule", d: "10 April", tag: "Update", desc: "The upcoming JLPT exam schedule has been revised due to unavoidable circumstances. Please check the new timing and hall allocations in your dashboard." }
            ]
        },
        bn: {
            title: "গুরুত্বপূর্ণ নোটিশ", 
            btn: "দেখুন", 
            closeBtn: "বন্ধ করুন",
            detailsTitle: "নোটিশের বিস্তারিত",
            list: [
                { t: "ভর্তি চলছে - ফল ২০২৬", d: "১৫ এপ্রিল", tag: "নতুন", desc: "আমরা আনন্দের সাথে জানাচ্ছি যে ফল ২০২৬ সেশনের জন্য ভর্তি কার্যক্রম শুরু হয়েছে। আগ্রহী শিক্ষার্থীরা আমাদের অনলাইন পোর্টালের মাধ্যমে বা সরাসরি অফিসে এসে আবেদন করতে পারবেন।" },
                { t: "জেএলপিটি পরীক্ষার নতুন সময়সূচী", d: "১০ এপ্রিল", tag: "আপডেট", desc: "অনিবার্য পরিস্থিতির কারণে আসন্ন জেএলপিটি পরীক্ষার সময়সূচী পরিবর্তন করা হয়েছে। দয়া করে আপনার ড্যাশবোর্ড থেকে নতুন সময় এবং হল রুম নম্বর দেখে নিন।" }
            ]
        },
        jp: {
            title: "重要なお知らせ", 
            btn: "見る", 
            closeBtn: "閉じる",
            detailsTitle: "お知らせの詳細",
            list: [
                { t: "2026年秋季入学願書受付中", d: "4月15日", tag: "新規", desc: "2026年秋学期の入学願書の受付を開始しました。ご希望の方は、オンラインポータルまたはキャンパス事務局にてお申し込みください。" },
                { t: "JLPT試験スケジュールの変更", d: "4月10日", tag: "更新", desc: "諸事情により、次回のJLPT試験スケジュールが変更されました。新しい時間と会場については、マイページでご確認ください。" }
            ]
        }
    };

    const content = translations[lang] || translations.en;

    return (
        <div className="min-h-screen bg-[#1e4b8f] py-20 px-6 relative">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 border-l-4 border-[#ff6b6b] pl-4 transition-all">
                    {content.title}
                </h2>
                
                <div className="space-y-4">
                    {content.list.map((item, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex justify-between items-center hover:bg-white/15 transition-all group shadow-xl">
                            <div>
                                <span className="text-blue-200 text-xs font-bold uppercase tracking-wider">{item.d}</span>
                                <h3 className="text-white text-lg md:text-xl font-semibold mt-1">{item.t}</h3>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="hidden sm:inline-block bg-[#ff6b6b] text-white text-[10px] px-2 py-1 rounded-md font-bold uppercase">{item.tag}</span>
                                <button 
                                    onClick={() => setSelectedNotice(item)}
                                    className="bg-white/10 text-white px-6 py-2 rounded-xl text-sm font-bold group-hover:bg-[#ff6b6b] transition-all transform active:scale-95 shadow-lg"
                                >
                                    {content.btn}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Details Modal --- */}
            {selectedNotice && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedNotice(null)}
                    ></div>
                    
                    {/* Modal Content */}
                    <div className="relative bg-[#2557a7] border border-white/20 w-full max-w-lg p-8 rounded-[2.5rem] shadow-2xl transform transition-all animate-in fade-in zoom-in duration-300">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-[#ff6b6b] text-white text-[10px] px-2 py-1 rounded font-bold uppercase">
                                {selectedNotice.tag}
                            </span>
                            <span className="text-blue-200 text-sm font-bold">{selectedNotice.d}</span>
                        </div>
                        
                        <h3 className="text-white text-2xl font-bold mb-4">
                            {selectedNotice.t}
                        </h3>
                        
                        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 mb-6">
                            <p className="text-blue-50 leading-relaxed">
                                {selectedNotice.desc}
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