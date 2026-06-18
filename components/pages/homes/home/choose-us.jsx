import image1 from "../../../../public/assets/img/why-choose-us/why-choose.png";
import image2 from "../../../../public/assets/img/shape/why-choose-shape.png";

const ChooseUs = () => {
    return (
        <>
        <div className="why-choose-us__one section-padding">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="why-choose-us__one-left">
                            <div className="why-choose-us__one-title ">
                                <span className="subtitle-one">Why Choose Us</span>
                                <h2>Your Trusted Industrial Technology Partner</h2>
                                <p>We are committed to providing complete and reliable industrial and technology solutions to help your business stay ahead. With expertise in CNC machines, industrial PCs, electronics repair, and automation, we ensure seamless integration of technology into your operations. Our team delivers fast, customized, and high-quality services designed to meet your unique requirements. Whether it&apos;s Industry 4.0 solutions, IT automation, or system integration, we work as your trusted technology partner every step of the way.</p>
                            </div>
                            <div className="why-choose-us__one-quality">
                                <div className="why-choose-us__one-quality-single">
                                    <div className="icon">
                                        <i className="flaticon-machine-repair"></i>
                                    </div>
                                    <div className="why-choose-us__one-quality-single-content">
                                        <h4>Expert Industrial Repair</h4>
                                        <p>Fast, reliable repair of CNC hard disks, drives, control cards, servo motors, and HMI systems.</p>
                                    </div>
                                </div>
                                <div className="why-choose-us__one-quality-single">
                                    <div className="icon">
                                        <i className="flaticon-web-research"></i>
                                    </div>
                                    <div className="why-choose-us__one-quality-single-content">
                                        <h4>Industry 4.0 Ready</h4>
                                        <p>PLC programming, ERP integration, and IT automation to keep your operations future-ready.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-10">
                        <div className="why-choose-us__one-image">
                            <div className="why-choose-us__one-image-shape">
                                <div className="shape shape-1 animate-x-axis"></div>
                                <div className="shape shape-2 animate-x-axis"></div>
                                <img src={image2.src} alt="image" className="shape shape-3 animate-y-axis" />
                            </div>
                            <img src={image1.src} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ChooseUs;
