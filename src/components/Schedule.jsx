import React from 'react';
import { Clock, Calendar, Coffee, Sun, SunMoon, Moon } from 'lucide-react';

const ClassSchedule = ({ lang = 'en' }) => {
    const translations = {
        en: {
            sectionTitle: "Class Schedule",
            offDays: "Closed on Fri & Sat",
            holidays: "Closed on public holidays; make-up classes provided.",
            schedules: [
                {
                    time: "9:10 - 12:25",
                    label: "Morning Batch",
                    days: "Sun - Thu",
                    duration: "45 min × 4 slots",
                    color: "from-orange-400 to-red-500",
                    icon: <Sun size={24} />
                },
                {
                    time: "13:35 - 16:55",
                    label: "Afternoon Batch",
                    days: "Sun - Thu",
                    duration: "45 min × 4 slots",
                    color: "from-blue-400 to-indigo-600",
                    icon: <SunMoon size={24} />
                },
                {
                    time: "17:10 - 20:25",
                    label: "Evening Batch",
                    days: "Sun - Thu",
                    duration: "45 min × 4 slots",
                    color: "from-purple-500 to-blue-900",
                    icon: <Moon size={24} />
                }
            ]
        },
        bn: {
            sectionTitle: "ক্লাস শিডিউল",
            offDays: "শুক্র ও শনি বন্ধ",
            holidays: "সরকারি ছুটির দিনে বন্ধ; মেক-আপ ক্লাস দেওয়া হয়।",
            schedules: [
                {
                    time: "৯:১০ - ১২:২৫",
                    label: "মর্নিং ব্যাচ",
                    days: "রবি - বৃহস্পতি",
                    duration: "৪৫ মিনিট × ৪টি স্লট",
                    color: "from-orange-400 to-red-500",
                    icon: <Sun size={24} />
                },
                {
                    time: "১৩:৩৫ - ১৬:৫৫",
                    label: "আফটারনুন ব্যাচ",
                    days: "রবি - বৃহস্পতি",
                    duration: "৪৫ মিনিট × ৪টি স্লট",
                    color: "from-blue-400 to-indigo-600",
                    icon: <SunMoon size={24} />
                },
                {
                    time: "১৭:১০ - ২০:২৫",
                    label: "ইভিনিং ব্যাচ",
                    days: "রবি - বৃহস্পতি",
                    duration: "৪৫ মিনিট × ৪টি স্লট",
                    color: "from-purple-500 to-blue-900",
                    icon: <Moon size={24} />
                }
            ]
        },
        jp: {
            sectionTitle: "スケジュール",
            offDays: "金・土曜日は休み",
            holidays: "祝日は休講、別日に補講あり",
            schedules: [
                {
                    time: "9:10 - 12:25",
                    label: "午前の部",
                    days: "日-木",
                    duration: "45分 × 4コマ",
                    color: "from-orange-400 to-red-500",
                    icon: <Sun size={24} />
                },
                {
                    time: "13:35 - 16:55",
                    label: "午後の部",
                    days: "日-木",
                    duration: "45分 × 4コマ",
                    color: "from-blue-400 to-indigo-600",
                    icon: <SunMoon size={24} />
                },
                {
                    time: "17:10 - 20:25",
                    label: "夜間の部",
                    days: "日-木",
                    duration: "45分 × 4コマ",
                    color: "from-purple-500 to-blue-900",
                    icon: <Moon size={24} />
                }
            ]
        }
    };

    const content = translations[lang] || translations.en;

    return (
        <section id='schedule' className="bg-slate-50 py-12 md:py-24 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-black text-blue-950 mb-3">
                        {content.sectionTitle}
                    </h2>
                    <div className="w-12 h-1.5 bg-red-500 mx-auto rounded-full"></div>
                </div>

                {/* Schedule Grid  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {content.schedules.map((item, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-3xl p-6 md:p-8 flex flex-row md:flex-col items-center md:items-start gap-5 shadow-lg bg-gradient-to-br ${item.color} text-white transition-transform active:scale-95 md:hover:-translate-y-2 duration-300`}
                        >
                            {/* Icon - Distinct for each batch */}
                            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md flex-shrink-0">
                                {item.icon}
                            </div>

                            {/* Text Info */}
                            <div className="flex-grow">
                                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-80 mb-1">
                                    {item.label}
                                </p>
                                <h3 className="text-xl md:text-3xl font-black leading-none mb-2">
                                    {item.time}
                                </h3>
                                <div className="flex flex-wrap gap-x-3 gap-y-1 opacity-90 text-xs md:text-sm">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} /> {item.days}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={12} /> {item.duration}
                                    </span>
                                </div>
                            </div>

                            {/* Subtle background decoration */}
                            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                        </div>
                    ))}
                </div>

                {/* Compact Footer Information */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                    <div className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full text-xs md:text-sm font-bold shadow-sm">
                        <Coffee size={16} />
                        <span>{content.offDays}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-[10px] md:text-sm font-medium shadow-sm">
                        <Calendar size={16} />
                        <p>{content.holidays}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ClassSchedule;