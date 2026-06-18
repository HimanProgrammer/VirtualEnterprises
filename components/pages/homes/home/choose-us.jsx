"use client";
import { useState, useEffect } from "react";
import image1 from "../../../../public/assets/img/why-choose-us/why-choose.png";
import image2 from "../../../../public/assets/img/shape/why-choose-shape.png";
import { getSection, defaults } from "../../../../lib/cms";

const ChooseUs = () => {
    const [d, setD] = useState(defaults.chooseUs);
    useEffect(() => { getSection("chooseUs").then(v => { if (v) setD({ ...defaults.chooseUs, ...v }); }); }, []);
    return (
        <>
        <div className="why-choose-us__one section-padding">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="why-choose-us__one-left">
                            <div className="why-choose-us__one-title ">
                                <span className="subtitle-one">{d.subtitle}</span>
                                <h2>{d.headline}</h2>
                                <p>{d.description}</p>
                            </div>
                            <div className="why-choose-us__one-quality">
                                <div className="why-choose-us__one-quality-single">
                                    <div className="icon">
                                        <i className={d.feature1Icon}></i>
                                    </div>
                                    <div className="why-choose-us__one-quality-single-content">
                                        <h4>{d.feature1Title}</h4>
                                        <p>{d.feature1Text}</p>
                                    </div>
                                </div>
                                <div className="why-choose-us__one-quality-single">
                                    <div className="icon">
                                        <i className={d.feature2Icon}></i>
                                    </div>
                                    <div className="why-choose-us__one-quality-single-content">
                                        <h4>{d.feature2Title}</h4>
                                        <p>{d.feature2Text}</p>
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
