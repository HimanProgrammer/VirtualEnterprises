"use client"
import Link from 'next/link';
import serviceDetailsImg from '../../../../public/assets/img/service/service-details.png';
import icon1 from '../../../../public/assets/img/icon/service-details-icon-2.png';
import icon2 from '../../../../public/assets/img/icon/service-details-icon.png';

const ServiceDetail = ({ data }) => {
  if (!data) return null;

  return (
    <>
      {/* ── Main Detail Block ───────────────────────────────────── */}
      <div className="service__details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">

              <div className="service__details-thumb">
                <img src={serviceDetailsImg.src} alt={data.title} />
                <div className="service__details-thumb-icon">
                  <div className="service__details-thumb-icon-wrapper">
                    <img src={icon1.src} alt="icon" />
                  </div>
                </div>
              </div>

              <div className="service__details-content">
                <h2>{data.title}</h2>
                {data.intro.map((p, i) => <p key={i}>{p}</p>)}

                {data.blocks.map((block, bi) => (
                  <div key={bi}>
                    <h3 className="sub-heading mt-4">{block.heading}</h3>
                    <p>{block.text}</p>
                    <div className="service__details-content-box">
                      <div className="service__details-content-box-single">
                        <h4>Highlights</h4>
                        <ul className="service-qualities">
                          {block.list.map((li, i) => <li key={i}>{li}</li>)}
                        </ul>
                      </div>
                      <div className="service__details-content-box-single">
                        <div className="icon">
                          <img src={icon2.src} alt="icon" />
                        </div>
                        <h4 className="mb-4">{block.boxHeading}</h4>
                        <p className="m-0">{block.boxText}</p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ──────────────────────────────────────────── */}
      <div style={{ background: '#1a2b5e', padding: '48px 0' }}>
        <div className="container">
          <div className="row text-center gy-4">
            {data.stats.map((s, i) => (
              <div key={i} className="col-xl-3 col-md-6">
                <div style={{ color: '#fff' }}>
                  <div style={{ fontSize: 40, fontWeight: 800, color: '#4f8ef7', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 15, marginTop: 8, opacity: 0.85 }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <div style={{ background: '#4f8ef7', padding: '64px 0' }}>
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-xl-8 col-lg-7">
              <h2 style={{ color: '#fff', fontWeight: 800, margin: 0 }}>{data.cta}</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: 12, marginBottom: 0, fontSize: 17 }}>
                Talk to our team for a free consultation and quote tailored to your requirements.
              </p>
            </div>
            <div className="col-xl-4 col-lg-5 text-lg-end">
              <Link href="/contact" className="btn-two" style={{ background: '#fff', color: '#1a2b5e' }}>
                Get In Touch <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
