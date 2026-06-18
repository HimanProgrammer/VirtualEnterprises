"use client";
import { useState, useEffect } from "react";
import image from "../../../../public/assets/img/service/services.png";
import Link from "next/link";
import { getSection, defaults } from "../../../../lib/cms";

// Map a home-service title to its detail page slug (for the "Learn More" link)
const slugByTitle = {
    'CNC Machine Hard Disk Solutions': 'cnc-machine-hard-disk-solutions',
    'Industrial Computing Solutions':  'industrial-computing-solutions',
    'Surveillance System Installation':'surveillance-camera-systems',
    'Surveillance & Camera Systems':   'surveillance-camera-systems',
    'Industrial Electronics Repair':   'industrial-electronics-repair',
};

const Card = ({ item }) => (
    <div className="single-service">
        <div className="services__one-single-service-icon">
            <i className={item.icon}></i>
        </div>
        <div className="services__one-single-service-content">
            <h4>{item.title}</h4>
            <p>{item.text}</p>
            {slugByTitle[item.title] && (
                <Link href={`/services/${slugByTitle[item.title]}`} style={{ fontSize: 13, color: '#4f8ef7', fontWeight: 600, textDecoration: 'none' }}>
                    Learn More →
                </Link>
            )}
        </div>
    </div>
);

const Features = () => {
    const [d, setD] = useState(defaults.homeServices);
    useEffect(() => { getSection("homeServices").then(v => { if (v) setD({ ...defaults.homeServices, ...v }); }); }, []);

    const items = d.items || [];
    const mid = Math.ceil(items.length / 2);
    const left = items.slice(0, mid);
    const right = items.slice(mid);

    return (
        <>
        <div className="services__one section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-7 col-lg-7 col-md-9 services__one-title">
                        <span className="subtitle-one">{d.subtitle}</span>
                        <h2>{d.sectionTitle}</h2>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-3">
                        <div className="row">
                            {left.map((item, i) => (
                                <div key={i} className="col-xl-12 col-md-6 xl-mb-30"><Card item={item} /></div>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="services-image-wrapper">
                            <img src={image.src} alt="image" />
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="row">
                            {right.map((item, i) => (
                                <div key={i} className="col-xl-12 col-md-6"><Card item={item} /></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Features;
