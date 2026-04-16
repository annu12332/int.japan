import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const StaffSection = ({ lang = 'en' }) => {
    const translations = {
        en: {
            sectionTitle: "Meet Our Expert Mentors",
            sectionSub: "Learning Japanese with dedicated guidance",
            staff: [
                {
                    title: "Guidance by Veteran Instructors",
                    desc: "Senior instructors with extensive experience provide careful guidance tailored to each student's goals. Expertise supports reliable Japanese acquisition.",
                    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600",
                },
                {
                    title: "Friendly and Warm Instruction",
                    desc: "Students learn in a friendly atmosphere with close teacher relationships. Support covers Japanese culture and lifestyle for focused learning.",
                    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
                }
            ]
        },
        bn: {
            sectionTitle: "আমাদের বিশেষজ্ঞ মেন্টরদের সাথে পরিচিত হোন",
            sectionSub: "উৎসর্গীকৃত নির্দেশনার সাথে জাপানি ভাষা শেখা",
            staff: [
                {
                    title: "অভিজ্ঞ প্রশিক্ষকদের নির্দেশনা",
                    desc: "দীর্ঘ অভিজ্ঞতাসম্পন্ন সিনিয়র প্রশিক্ষকগণ শিক্ষার্থীদের লক্ষ্য অনুযায়ী যত্নশীল নির্দেশনা দেন। দক্ষতা নির্ভরযোগ্য জাপানি ভাষা অর্জনকে সহায়তা করে।",
                    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600",
                },
                {
                    title: "বন্ধুত্বপূর্ণ এবং আন্তরিক পাঠদান",
                    desc: "শিক্ষার্থীরা বন্ধুত্বপূর্ণ পরিবেশে ঘনিষ্ঠ শিক্ষক সম্পর্কের মাধ্যমে শেখে। মনোযোগ সহকারে শেখার জন্য সাপোর্ট জাপানি সংস্কৃতি ও জীবনধারা কভার করে।",
                    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
                }
            ]
        },
        jp: {
            sectionTitle: "熟練メンターのご紹介",
            sectionSub: "専任の指導による日本語学習",
            staff: [
                {
                    title: "ベテラン講師による指導",
                    desc: "豊富な経験を持つベテラン講師が、生徒一人ひとりの目標に合わせた丁寧な指導を行います。教育の専門知識が、確実な日本語習得をサポートします。",
                    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600",
                },
                {
                    title: "親身で温かい指導",
                    desc: "生徒は教師との距離が近い、アットホームな雰囲気の中で学ぶことができます。日本語の指導だけでなく、日本の文化や生活面についてもきめ細かくサポートします。",
                    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
                }
            ]
        }
    };

    const content = translations[lang] || translations.en;

    const StaffCard = ({ item }) => (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-100/50 border border-gray-100 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-1">
            <div className="relative h-60 md:h-72 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white transition-all duration-500">
                        {item.title}
                    </h3>
                    <div className="w-10 h-1 bg-red-500 mt-2 rounded-full transition-all group-hover:w-20"></div>
                </div>
            </div>
            <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {item.desc}
                </p>
            </div>
        </div>
    );

    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-red-500 font-semibold tracking-wide uppercase text-sm mb-1">{content.sectionSub}</p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950">
                        {content.sectionTitle}
                    </h2>
                </div>

                {/* Small Screen Layout */}
                <div className="lg:hidden">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1.1}
                        centeredSlides={true}
                        pagination={{ 
                            clickable: true, 
                            dynamicBullets: true 
                        }}
                        autoplay={{ 
                            delay: 4000, 
                            disableOnInteraction: false 
                        }}
                        className="staff-swiper !pb-12"
                    >
                        {content.staff.map((item, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <StaffCard item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Large Screen Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-10">
                    {content.staff.map((item, index) => (
                        <StaffCard key={index} item={item} />
                    ))}
                </div>
            </div>
            
            <style jsx="true">{`
                .staff-swiper .swiper-pagination-bullet-active {
                    background: #1e3a8a !important; /* text-blue-950 */
                }
            `}</style>
        </section>
    );
};

export default StaffSection;