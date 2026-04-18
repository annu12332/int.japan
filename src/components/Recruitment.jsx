import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecruitmentSection = ({ lang = 'en' }) => {
    const translations = {
        en: {
            title: "Japanese Teacher Recruitment",
            subTitle: "Would you like to work with us?",
            cta: "Join Our Team"
        },
        bn: {
            title: "জাপানি শিক্ষক নিয়োগ",
            subTitle: "আপনি কি আমাদের সাথে কাজ করতে চান?",
            cta: "আমাদের টিমে যোগ দিন"
        },
        jp: {
            title: "日本語教師募集",
            subTitle: "私たちと一緒に働きませんか？",
            cta: "採用情報を見る"
        }
    };

    const content = translations[lang] || translations.en;

    return (
        <section id='recruitment' className="bg-white py-12 md:py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="relative group cursor-pointer overflow-hidden rounded-[2rem] bg-[#1e4b8f] p-8 md:p-12 shadow-2xl transition-all duration-500 hover:shadow-blue-200/50 hover:-translate-y-1">

                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500"></div>

                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">

                        {/* Left Side: Icon & Text */}
                        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-4xl md:text-5xl shadow-inner animate-bounce-slow">
                                👨‍🏫
                            </div>

                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                                    {content.title}
                                </h2>
                                <p className="text-blue-100 text-base md:text-xl font-medium">
                                    {content.subTitle}
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Button/Arrow */}
                        <div className="flex items-center gap-4">
                            {/* Desktop CTA */}
                            <Link to={"/teachers-requirement"}>
                                <button className="hidden md:flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl transition-all hover:bg-red-50 hover:text-red-600 shadow-lg">
                                    {content.cta}
                                    <ArrowRight size={20} />
                                </button>
                            </Link>

                            {/* Mobile Only Arrow Link */}
                            <Link to={"/teachers-requirement"} className="md:hidden">
                                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-2">
                                    <ArrowRight size={28} />
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <style jsx="true">{`
                @keyframes bounce-slow {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                  animation: bounce-slow 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default RecruitmentSection;