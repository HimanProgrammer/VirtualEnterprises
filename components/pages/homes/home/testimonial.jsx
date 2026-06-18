import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import workBg from "../../../../public/assets/img/work-process/work-process-bg.png";
import testimonialBg from "../../../../public/assets/img/testimonial/testimonial.png";
import Link from "next/link";

const reviews = [
    {
        name: 'Rajesh Patil',
        role: 'Production Head, Shree Precision Engineering, Pune',
        rating: 5,
        text: 'Our 1998 Fanuc CNC went down when its hard disk failed and no replacement was available. Virtual Enterprises converted it to a modern SSD with zero data loss and had us running again within two days. Saved us from buying a new machine.',
    },
    {
        name: 'Anil Deshmukh',
        role: 'Plant Manager, Deshmukh Auto Components, Aurangabad',
        rating: 5,
        text: 'They repaired our Siemens servo drive and two control cards that the OEM said were obsolete. The repair cost was a fraction of replacement and the parts have been working flawlessly for months. Highly reliable team.',
    },
    {
        name: 'Suresh Iyer',
        role: 'Director, Iyer Industries, Coimbatore',
        rating: 5,
        text: 'Virtual Enterprises supplied and installed rugged industrial PCs across our shop floor and integrated them with our ERP. The Industry 4.0 dashboards give us real-time visibility we never had before. Truly a one-stop technology partner.',
    },
    {
        name: 'Priya Nair',
        role: 'Operations Manager, Nair Textiles, Surat',
        rating: 5,
        text: 'From the site survey to the final handover, their surveillance team was professional. They set up HD and IP cameras covering our entire warehouse with remote mobile access. We finally have complete peace of mind on security.',
    },
];

const Testimonial = () => {
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
                                <span className="subtitle-one">Client Testimonial</span>
                                <h2>Trusted by industries <span className="highlighted">across India</span></h2>
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
