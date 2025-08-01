import image from "../../../../public/assets/img/service/services.png";

const Features = () => {
    return (
        <>
        <div className="services__one section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-7 col-lg-7 col-md-9 services__one-title">
                        <span className="subtitle-one">Core Features</span>
                        <h2>Innovative IT Strategies and Solutions</h2>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-3">
                        <div className="row">
                            <div className="col-xl-12 col-md-6">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-global-network"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>CNC Machine Hard Disk Solutions</h4>
                                        <p>Reliable Storage & Conversion for CNC Systems</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-6 xl-mb-30">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-mobile-phone-1"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>Industrial Computing Solutions</h4>
                                        <p>Robust PCs & Mini Systems for Industrial Needs</p>
                                    </div>
                                </div>
                            </div>
                                                        <div className="col-xl-12 col-md-6 xl-mb-30">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-mobile-phone-1"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>Industrial Computing Solutions</h4>
                                        <p>Robust PCs & Mini Systems for Industrial Needs</p>
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
                                        <i className="flaticon-idea"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>Surveillance System Installation</h4>
                                        <p>Complete Camera Setup for Industrial & Commercial Security</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-6">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-it"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>Machine Learning Implementation</h4>
                                        <p>Harnessing the power of artificial intelligence</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-6">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-it"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>Machine Learning Implementation</h4>
                                        <p>Harnessing the power of artificial intelligence</p>
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