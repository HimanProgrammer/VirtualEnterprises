import image from "../../../../public/assets/img/service/services.png";
import Link from "next/link";

const Features = () => {
    return (
        <>
        <div className="services__one section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-7 col-lg-7 col-md-9 services__one-title">
                        <span className="subtitle-one">Our Services</span>
                        <h2>Industrial & Technology Solutions Under One Roof</h2>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-3">
                        <div className="row">
                            <div className="col-xl-12 col-md-6">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-data-scientist"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>CNC Machine Hard Disk Solutions</h4>
                                        <p>Manufacturing, Backup & Supply of CNC Hard Disks. Conversion for Enhanced Compatibility & Performance.</p>
                                        <Link href="/services/cnc-machine-hard-disk-solutions" style={{ fontSize: 13, color: '#4f8ef7', fontWeight: 600, textDecoration: 'none' }}>
                                            Learn More →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-6 xl-mb-30">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-satellite-signal"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>Industrial Computing Solutions</h4>
                                        <p>Sales & Supply of Industrial PCs, Branded Desktops, and Mini PCs for all industrial environments.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="services-image-wrapper">
                            <img src={image.src} alt="image" />
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="row">
                            <div className="col-xl-12 col-md-6">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-global-network"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>Surveillance System Installation</h4>
                                        <p>End-to-End Camera Setup — Analog, HD & IP, and CCD Technology-Based Systems.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-6">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-mobile-app"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>Industrial Electronics Repair</h4>
                                        <p>Expert Repair of Drives, Control Cards, Servo Motors, HMI Systems (Fanuc, Siemens), and more.</p>
                                    </div>
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

export default Features;
