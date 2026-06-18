"use client"
import Link from 'next/link';
import serviceDetailsImg from '../../../../public/assets/img/service/cnc-hard-disk.jpg';
import icon1 from '../../../../public/assets/img/icon/service-details-icon-2.png';
import icon2 from '../../../../public/assets/img/icon/service-details-icon.png';

const steps = [
  { num: '01', title: 'Diagnosis & Assessment',   desc: 'We inspect the failed or aging hard disk and identify compatibility requirements for your specific CNC machine model.' },
  { num: '02', title: 'Full Data Backup',          desc: 'Before any work begins, we create a complete backup of all CNC programs, parameters, tool offsets, and machine data.' },
  { num: '03', title: 'Manufacture / Convert',    desc: 'We manufacture a compatible replacement disk or convert the existing drive to a modern solid-state solution — zero data loss.' },
  { num: '04', title: 'Testing & Verification',   desc: 'Every disk is tested against real CNC controller signals to ensure full compatibility and performance before handover.' },
  { num: '05', title: 'Delivery & Re-installation', desc: 'We deliver the ready-to-use disk with full documentation and provide on-site re-installation support if needed.' },
];

const faqs = [
  { q: 'Can you recover data from a completely failed CNC hard disk?', a: 'Yes. In most cases we can recover CNC programs, parameters, and tool data even from physically damaged drives using specialized recovery techniques.' },
  { q: 'Which CNC brands and controllers do you support?', a: 'We support all major brands including Fanuc, Siemens, Mitsubishi, Heidenhain, Mazak, Okuma, Haas, and more — covering MFM, IDE, and SCSI drive interfaces.' },
  { q: 'How long does the conversion or replacement take?', a: 'Standard turnaround is 24–48 hours. Express same-day service is available on request to minimize your machine downtime.' },
  { q: 'Do you offer a warranty on manufactured and converted disks?', a: 'Yes. All manufactured and converted disks carry a 12-month replacement warranty. We also offer annual maintenance contracts.' },
  { q: 'Can the converted SSD fail like the original hard disk?', a: 'Solid-state drives have no moving parts, making them far more resistant to vibration and shock common in CNC environments — significantly extending service life.' },
];

const brands = ['Fanuc', 'Siemens', 'Mitsubishi', 'Heidenhain', 'Mazak', 'Okuma', 'Haas', 'FAGOR', 'Bosch', 'NUM'];

const CncServicePage = () => {
  return (
    <>
      {/* ── Main Detail Block ───────────────────────────────────── */}
      <div className="service__details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">

              {/* Hero image */}
              <div className="service__details-thumb">
                <img src={serviceDetailsImg.src} alt="CNC Machine Hard Disk Solutions" />
                <div className="service__details-thumb-icon">
                  <div className="service__details-thumb-icon-wrapper">
                    <img src={icon1.src} alt="icon" />
                  </div>
                </div>
              </div>

              {/* Intro */}
              <div className="service__details-content">
                <h2>CNC Machine Hard Disk Solutions — Keep Your Machines Running</h2>
                <p>
                  CNC machines are the backbone of modern manufacturing. Yet most CNC controllers built before 2010 rely on aging hard disk drives (HDD) — MFM, IDE, or SCSI-based — that are no longer manufactured and are increasingly prone to failure. A single failed hard disk can bring an entire production line to a halt, wiping out years of stored programs, tool offsets, and machine parameters.
                </p>
                <p>
                  At Virtual Enterprises, we provide end-to-end CNC Hard Disk Solutions — from manufacturing compatible replacement disks and performing full data backups, to converting aging drives into modern solid-state equivalents. We ensure your CNC machine is back online fast, with zero data loss.
                </p>

                {/* ── Service 1 ──────────────────────────────────────── */}
                <h3 className="sub-heading mt-4">Service 1 — Manufacturing, Backup & Supply of CNC Machine Hard Discs</h3>
                <p>
                  We manufacture and supply hard disks specifically engineered for CNC controllers. Unlike generic consumer drives, our solutions are built to match the exact electrical, mechanical, and firmware specifications of your controller — ensuring seamless drop-in compatibility.
                </p>

                <div className="service__details-content-box">
                  <div className="service__details-content-box-single">
                    <h4>What We Provide</h4>
                    <ul className="service-qualities">
                      <li>Manufacturing of CNC-compatible replacement hard disks</li>
                      <li>Complete data backup of all CNC programs & parameters</li>
                      <li>Supply of new, refurbished, and emergency-stock units</li>
                      <li>Compatibility across MFM, IDE, SCSI, and SATA interfaces</li>
                      <li>Pre-loaded disk cloning with your existing machine data</li>
                      <li>Annual backup contracts to prevent data loss</li>
                    </ul>
                  </div>
                  <div className="service__details-content-box-single">
                    <div className="icon">
                      <img src={icon2.src} alt="icon" />
                    </div>
                    <h4 className="mb-4">Why Backup Matters</h4>
                    <p className="m-0">
                      CNC machine data — programs, tool offsets, parameters, pitch error compensation — takes years to accumulate. Once a hard disk fails without a backup, this data is often unrecoverable. Our proactive backup service ensures your production continuity even in worst-case scenarios.
                    </p>
                  </div>
                </div>

                {/* ── Service 2 ──────────────────────────────────────── */}
                <h3 className="sub-heading">Service 2 — CNC Hard Disk Conversion for Enhanced Compatibility & Performance</h3>
                <p>
                  Aging MFM and IDE hard disks are no longer manufactured — meaning when they fail, there is no direct replacement available in the market. Our conversion service replaces your obsolete drive with a modern Solid-State Drive (SSD) or industrial-grade flash storage that emulates the original interface, giving your CNC machine a new lease of life.
                </p>

                <div className="service__details-content-box">
                  <div className="service__details-content-box-single">
                    <h4>Conversion Benefits</h4>
                    <ul className="service-qualities">
                      <li>Replace obsolete MFM / IDE / SCSI with modern SSD</li>
                      <li>Zero data loss — all programs & parameters migrated</li>
                      <li>No moving parts — resistant to CNC vibration & shock</li>
                      <li>10× faster boot and program loading times</li>
                      <li>Dramatically extended service life (10+ years)</li>
                      <li>Compatible with existing CNC controller boards</li>
                    </ul>
                  </div>
                  <div className="service__details-content-box-single">
                    <div className="icon">
                      <img src={icon2.src} alt="icon" />
                    </div>
                    <h4 className="mb-4">Future-Proof Your Machine</h4>
                    <p className="m-0">
                      Buying a new CNC machine to replace a failed hard disk is unnecessary and costly. Conversion extends the productive life of your existing CNC investment by 10–15 years at a fraction of the cost — with zero retraining and zero disruption to your production workflow.
                    </p>
                  </div>
                </div>

                {/* ── Supported Brands ───────────────────────────────── */}
                <h3 className="sub-heading">Supported CNC Brands & Controllers</h3>
                <p>We work with all major CNC controller manufacturers and machine brands, including:</p>
                <div className="row g-3 mb-4">
                  {brands.map((b, i) => (
                    <div key={i} className="col-xl-2 col-lg-3 col-md-4 col-6">
                      <div style={{ background: '#f4f6fb', borderRadius: 8, padding: '10px 16px', textAlign: 'center', fontWeight: 600, color: '#1a2b5e', fontSize: 14 }}>
                        {b}
                      </div>
                    </div>
                  ))}
                </div>

              </div>{/* /service__details-content */}
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ──────────────────────────────────────────── */}
      <div style={{ background: '#1a2b5e', padding: '48px 0' }}>
        <div className="container">
          <div className="row text-center gy-4">
            {[
              { num: '100+', label: 'CNC Brands Supported' },
              { num: '24–48hr', label: 'Standard Turnaround' },
              { num: '0%', label: 'Data Loss Rate' },
              { num: '12 Mo', label: 'Replacement Warranty' },
            ].map((s, i) => (
              <div key={i} className="col-xl-3 col-md-6">
                <div style={{ color: '#fff' }}>
                  <div style={{ fontSize: 42, fontWeight: 800, color: '#4f8ef7', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 15, marginTop: 8, opacity: 0.85 }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Process Steps ──────────────────────────────────────── */}
      <div className="section-padding" style={{ background: '#f8faff' }}>
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-xl-7">
              <span className="subtitle-one">Our Process</span>
              <h2>How We Handle Your CNC Hard Disk</h2>
              <p>A structured, zero-risk process designed to minimise your machine downtime.</p>
            </div>
          </div>
          <div className="row gy-4">
            {steps.map((s, i) => (
              <div key={i} className="col-xl-4 col-md-6">
                <div style={{ background: '#fff', borderRadius: 12, padding: 28, height: '100%', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', borderTop: '4px solid #4f8ef7' }}>
                  <div style={{ fontSize: 36, fontWeight: 800, color: '#e8eef8', lineHeight: 1, marginBottom: 12 }}>{s.num}</div>
                  <h4 style={{ fontSize: 17, fontWeight: 700, color: '#1a2b5e', marginBottom: 10 }}>{s.title}</h4>
                  <p style={{ color: '#666', fontSize: 14, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <div className="section-padding">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-xl-7">
              <span className="subtitle-one">FAQ</span>
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="accordion" id="cncFaq">
                {faqs.map((faq, i) => (
                  <div key={i} className="accordion-item" style={{ marginBottom: 12, border: '1px solid #e4e9f5', borderRadius: 10, overflow: 'hidden' }}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button${i !== 0 ? ' collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${i}`}
                        style={{ fontWeight: 600, color: '#1a2b5e', background: i === 0 ? '#f0f5ff' : '#fff' }}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div id={`faq${i}`} className={`accordion-collapse collapse${i === 0 ? ' show' : ''}`} data-bs-parent="#cncFaq">
                      <div className="accordion-body" style={{ color: '#555', lineHeight: 1.8 }}>
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <div style={{ background: '#4f8ef7', padding: '64px 0' }}>
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-xl-8 col-lg-7">
              <h2 style={{ color: '#fff', fontWeight: 800, margin: 0 }}>Is Your CNC Hard Disk at Risk?</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: 12, marginBottom: 0, fontSize: 17 }}>
                Don't wait for a failure to bring your production line down. Get a free assessment today.
              </p>
            </div>
            <div className="col-xl-4 col-lg-5 text-lg-end">
              <Link href="/contact" className="btn-two" style={{ background: '#fff', color: '#1a2b5e' }}>
                Get Free Assessment <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CncServicePage;
