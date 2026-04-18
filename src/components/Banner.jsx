import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import image1 from '../assets/image5.png';
import image2 from '../assets/image6.png';

const HeroBanner = () => {
    const bannerImages = [image1, image2];

    return (
        <section className="relative w-full overflow-hidden mt-3 bg-white leading-[0]">
            <Swiper
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                effect={'fade'}
                speed={1000}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                className="w-full banner-swiper"
            >
                {bannerImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-auto flex items-center justify-center bg-white">
                            <img
                                src={img}
                                alt={`Banner ${index + 1}`}
                                className="w-full h-auto block object-contain max-h-[85vh] sm:max-h-screen"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx="true">{`
                .banner-swiper .swiper-button-next,
                .banner-swiper .swiper-button-prev {
                    color: #fff !important;
                    background: rgba(30, 58, 138, 0.4);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    transform: scale(0.7);
                    transition: all 0.3s ease;
                }
                .banner-swiper .swiper-button-next:after,
                .banner-swiper .swiper-button-prev:after {
                    font-size: 18px;
                }
                .banner-swiper .swiper-button-next:hover,
                .banner-swiper .swiper-button-prev:hover {
                    background: #ef4444;
                    transform: scale(0.8);
                }
                .banner-swiper .swiper-pagination-bullet {
                    background: #ef4444;
                    opacity: 0.5;
                }
                .banner-swiper .swiper-pagination-bullet-active {
                    background: #ef4444 !important;
                    width: 25px;
                    border-radius: 5px;
                    opacity: 1;
                }
                .swiper-pagination {
                    bottom: 10px !important;
                }
                @media (max-width: 768px) {
                    .banner-swiper .swiper-button-next,
                    .banner-swiper .swiper-button-prev {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default HeroBanner;