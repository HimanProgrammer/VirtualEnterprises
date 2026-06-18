'use client';
import { supabase } from './supabase';

// One row per section in table `site_content` (section TEXT PK, data JSONB).
export async function getSection(section) {
  try {
    const { data, error } = await supabase
      .from('site_content')
      .select('data')
      .eq('section', section)
      .maybeSingle();
    if (error) return null;
    return data?.data ?? null;
  } catch {
    return null;
  }
}

export async function saveSection(section, data) {
  const { error } = await supabase
    .from('site_content')
    .upsert({ section, data, updated_at: new Date().toISOString() }, { onConflict: 'section' });
  if (error) throw error;
}

// Convenience: merge stored content over defaults so missing fields are safe.
export function withDefaults(section, stored) {
  return { ...(defaults[section] || {}), ...(stored || {}) };
}

// ── Default content (current live copy) — fallback before/without Supabase ──
export const defaults = {
  banner: {
    subtitle:    'Digital Growth',
    headline:    'Reliable Industrial Solutions <span>Under One Roof</span>',
    description: 'We provide reliable CNC, Industrial PC, Automation, and Electronics Repair solutions — all under one roof. From hard disk services to camera installation, drive repairs, and Industry 4.0 integration — we keep your operations running smoothly.',
    buttonText:  'Find Solutions',
    buttonLink:  '/services',
  },
  about: {
    subtitle:    'About us',
    headline:    'Transform Your Business with Advanced IT Solutions',
    description: 'We help businesses harness the power of technology to drive growth and efficiency. Our IT solutions cover everything from software development to automation and system integration — empowering industries to stay competitive in the digital age.',
    experienceYears: 15,
  },
  chooseUs: {
    subtitle:    'Why Choose Us',
    headline:    'Your Trusted Industrial Technology Partner',
    description: "We are committed to providing complete and reliable industrial and technology solutions to help your business stay ahead. With expertise in CNC machines, industrial PCs, electronics repair, and automation, we ensure seamless integration of technology into your operations. Our team delivers fast, customized, and high-quality services designed to meet your unique requirements. Whether it's Industry 4.0 solutions, IT automation, or system integration, we work as your trusted technology partner every step of the way.",
    feature1Icon:  'flaticon-machine-repair',
    feature1Title: 'Expert Industrial Repair',
    feature1Text:  'Fast, reliable repair of CNC hard disks, drives, control cards, servo motors, and HMI systems.',
    feature2Icon:  'flaticon-web-research',
    feature2Title: 'Industry 4.0 Ready',
    feature2Text:  'PLC programming, ERP integration, and IT automation to keep your operations future-ready.',
  },
  homeServices: {
    sectionTitle: 'Industrial & Technology Solutions Under One Roof',
    subtitle:     'Our Services',
    items: [
      { icon: 'flaticon-data-scientist',        title: 'CNC Machine Hard Disk Solutions', text: 'Manufacturing, Backup & Supply of CNC Hard Disks. Conversion for Enhanced Compatibility & Performance.' },
      { icon: 'flaticon-satellite-signal',      title: 'Industrial Computing Solutions',   text: 'Sales & Supply of Industrial PCs, Branded Desktops, and Mini PCs for all industrial environments.' },
      { icon: 'flaticon-global-network',        title: 'Surveillance System Installation', text: 'End-to-End Camera Setup — Analog, HD & IP, and CCD Technology-Based Systems.' },
      { icon: 'flaticon-mobile-app',            title: 'Industrial Electronics Repair',    text: 'Expert Repair of Drives, Control Cards, Servo Motors, HMI Systems (Fanuc, Siemens), and more.' },
    ],
  },
  servicesList: {
    items: [
      { id: 'cnc-machine-hard-disk-solutions', icon: 'flaticon-data-scientist',     title: 'CNC Machine Hard Disk Solutions',       des: 'Manufacturing, Backup & Supply of CNC Hard Disks. Conversion for Enhanced Compatibility & Performance.' },
      { id: 'industrial-computing-solutions',  icon: 'flaticon-satellite-signal',   title: 'Industrial Computing Solutions',        des: 'Sales & Supply of Industrial PCs, Branded Desktops, and Mini PCs for all industrial environments.' },
      { id: 'surveillance-camera-systems',     icon: 'flaticon-global-network',     title: 'Surveillance & Camera Systems',         des: 'End-to-End Camera Setup — Analog, HD & IP, and CCD Technology-Based Systems.' },
      { id: 'industrial-electronics-repair',   icon: 'flaticon-mobile-app',         title: 'Industrial Electronics Repair Services', des: 'Expert Repair of Drives, Control Cards, Servo Motors, HMI Systems (Fanuc, Siemens), and more.' },
      { id: 'industry-4-automation-solutions', icon: 'flaticon-software-development', title: 'Industry 4.0 & Automation Solutions', des: 'PLC Programming, ERP Implementation, Data Integration & IT Automation for smart factories.' },
      { id: 'partnered-system-integration',    icon: 'flaticon-cyber-security',     title: 'Partnered System Integration Services', des: 'Industry 4.0, Material Handling, and complete System Integration via our partner network.' },
    ],
  },
  testimonials: {
    subtitle: 'Client Testimonial',
    headline: 'Trusted by industries <span class="highlighted">across India</span>',
    items: [
      { name: 'Rajesh Patil',   role: 'Production Head, Shree Precision Engineering, Pune',     rating: 5, text: 'Our 1998 Fanuc CNC went down when its hard disk failed and no replacement was available. Virtual Enterprises converted it to a modern SSD with zero data loss and had us running again within two days.' },
      { name: 'Anil Deshmukh',  role: 'Plant Manager, Deshmukh Auto Components, Aurangabad',    rating: 5, text: 'They repaired our Siemens servo drive and two control cards that the OEM said were obsolete. The repair cost was a fraction of replacement and the parts have been working flawlessly for months.' },
      { name: 'Suresh Iyer',    role: 'Director, Iyer Industries, Coimbatore',                  rating: 5, text: 'Virtual Enterprises supplied and installed rugged industrial PCs across our shop floor and integrated them with our ERP. The Industry 4.0 dashboards give us real-time visibility we never had before.' },
      { name: 'Priya Nair',     role: 'Operations Manager, Nair Textiles, Surat',              rating: 5, text: 'From the site survey to the final handover, their surveillance team was professional. They set up HD and IP cameras covering our entire warehouse with remote mobile access.' },
    ],
  },
  contact: {
    address: 'Pune, Maharashtra, India',
    phone:   '+91 00000 00000',
    email:   'info@virtualenterprises.in',
    hours:   'Mon – Sat: 9:00 AM – 7:00 PM',
    mapEmbed: '',
  },
  company: {
    name:    'Virtual Enterprises',
    tagline: 'Reliable Industrial Solutions Under One Roof',
    footerText: 'We provide reliable CNC, Industrial PC, Automation, and Electronics Repair solutions — all under one roof.',
    facebook: '', instagram: '', linkedin: '', twitter: '',
  },
};
