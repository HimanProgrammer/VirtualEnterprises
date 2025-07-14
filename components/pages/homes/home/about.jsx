import brand1 from "../../../../public/assets/img/brand/brand-1.png";
import brand2 from "../../../../public/assets/img/brand/brand-2.png";
import brand3 from "../../../../public/assets/img/brand/brand-3.png";
import brand4 from "../../../../public/assets/img/brand/brand-4.png";
import brand5 from "../../../../public/assets/img/brand/brand-5.png";
import about1 from "../../../../public/assets/img/about/about-1.png";
import about2 from "../../../../public/assets/img/about/about-2.png";
import Link from "next/link";
import Count from "../../common/count";

const About = () => {
    return (
        <>
        <div className="brand__area pt-115">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="text__slider">
                            <div className="text-slide">
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <img src={brand1.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand2.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand3.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand4.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand5.src} alt="image" />
                                    </div>
                                </div>
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <img src={brand1.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand2.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand3.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand4.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand5.src} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about__one section-padding">
            <div className="container">
                <div className="row align-items-center flex-wrap-reverse gy-4">
                    <div className="col-xl-6 col-lg-5">
                        <div className="about__one-image">
                            <div className="experience-bar animate-y-axis-slider">
                                <i className="flaticon-consultant"></i>
                                <div className="experience-bar-right">
                                    <div className="experience-bar-counter">
                                        <h4 className="counter"><Count number={15}/></h4>
                                        <span>+</span>
                                    </div>
                                    <span>Years Experience</span>
                                </div>
                            </div>
                            <div className="about__one-image-wrapper">
                                <img src={about1.src} alt="image" className="image-1" />
                                <img src={about2.src} alt="image" className="image-2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="about__one-content p-3">
                            <span className="subtitle-one">About us</span>
                            <h2>Transform Your Business with Advanced IT Solutions  </h2>
                            <p>We help businesses harness the power of technology to drive growth and efficiency. Our IT solutions cover everything from software development to automation and system integration — empowering industries to stay competitive in the digital age.</p>
                            
                            <Link href="/about" className="btn-one">Discover More<i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;