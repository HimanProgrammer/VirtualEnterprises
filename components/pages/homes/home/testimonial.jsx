"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import workBg from "../../../../public/assets/img/work-process/work-process-bg.png";
import testimonialBg from "../../../../public/assets/img/testimonial/testimonial.png";
import Link from "next/link";
import { getSection, defaults } from "../../../../lib/cms";

const Testimonial = () => {
    const [t, setT] = useState(defaults.testimonials);
    useEffect(() => { getSection("testimonials").then(v => { if (v) setT({ ...defaults.testimonials, ...v }); }); }, []);
    const reviews = t.items || [];
const slideControl = {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 4000,
        reverseDirection: false,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
};

    return (
        <>
        <div className="testimonial__one section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__one-left bg-dark" style={{backgroundImage: `url(${workBg.src})`}}>
                            <div className="testimonial__one-left-title">
                                <span className="subtitle-one">{t.subtitle}</span>
                                <h2 dangerouslySetInnerHTML={{ __html: t.headline }} />
                                <Link href="/contact" className="btn-one">Get Support
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__one-right">
                        <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
                            {reviews.map((review, i) => (
                                <SwiperSlide key={i}>
                                    <div className="single-slider">
                                        <div className="single-slider-user">
                                            <div className="single-slider-user-name">
                                                <h4>{review.name}</h4>
                                                <span>{review.role}</span>
                                            </div>
                                            <div className="single-slider-user-rating">
                                                {[1,2,3,4,5].map(n => (
                                                    <i key={n} className={`fas fa-star${n > review.rating ? ' not-rated' : ''}`}></i>
                                                ))}
                                            </div>
                                        </div>
                                        <p>{review.text}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                            <div className="testimonial__one-right-bottom">
                                <div className="slider-arrow">
                                    <i className="swiper-button-prev fas fa-arrow-left"></i>
                                    <i className="swiper-button-next fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Testimonial;
