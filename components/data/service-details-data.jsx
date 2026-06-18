// Detail content for each dedicated service page.
// Keyed by the slug used in the route /services/[slug].

const serviceDetails = {

  'industrial-computing-solutions': {
    title: 'Industrial Computing Solutions',
    breadcrumb: 'Industrial Computing',
    heroImage: '/assets/img/service/industrial-computing.jpg',
    intro: [
      'Industrial environments demand computing hardware that can withstand dust, vibration, temperature extremes, and 24/7 operation — conditions that quickly destroy ordinary office equipment. At Virtual Enterprises, we supply rugged, reliable computing systems engineered specifically for the factory floor, control rooms, and commercial deployments.',
      'From fanless industrial PCs to branded desktops and compact mini PCs, we help you select, source, and deploy the right computing platform for your operation — backed by genuine warranties and ongoing support.',
    ],
    blocks: [
      {
        heading: 'Sales & Supply of Industrial PCs',
        text: 'Purpose-built industrial PCs designed for harsh environments — fanless cooling, wide temperature tolerance, shock & vibration resistance, and extended-life components for continuous operation.',
        list: [
          'Fanless & rugged industrial PCs',
          'Panel PCs & HMI computing units',
          'Wide operating temperature range (-20°C to 60°C)',
          'DIN-rail and wall-mount form factors',
          'Long product life-cycle availability',
        ],
        boxHeading: 'Built for the Factory Floor',
        boxText: 'Unlike consumer PCs that fail under industrial stress, our systems are validated for continuous 24/7 duty cycles with industrial-grade components — minimising downtime and total cost of ownership.',
      },
      {
        heading: 'Branded Desktops & Mini PCs',
        text: 'For office, reception, billing, and light-duty deployments, we supply genuine branded desktops and space-saving mini PCs — fully configured and ready to deploy.',
        list: [
          'Genuine branded desktops (Dell, HP, Lenovo)',
          'Compact mini PCs for space-constrained setups',
          'Pre-configured with required software',
          'Bulk supply for offices & retail chains',
          'On-site setup & warranty support',
        ],
        boxHeading: 'One Supplier, Every Need',
        boxText: 'Whether you need a single rugged unit or a fleet of office desktops, we provide a single point of supply, configuration, and after-sales support — simplifying your procurement.',
      },
    ],
    stats: [
      { num: '24/7', label: 'Continuous Duty Rated' },
      { num: '-20°C', label: 'to +60°C Operating Range' },
      { num: '100%', label: 'Genuine Branded Stock' },
      { num: '3 Yr', label: 'Warranty Options' },
    ],
    cta: 'Need rugged computing for your operation?',
  },

  'surveillance-camera-systems': {
    title: 'Surveillance & Camera Systems',
    breadcrumb: 'Surveillance Systems',
    heroImage: '/assets/img/service/surveillance-camera.jpg',
    intro: [
      'Protecting your premises, assets, and people requires a surveillance system that is reliable, high-resolution, and tailored to your specific site. Virtual Enterprises delivers complete, end-to-end camera installation — from site survey and design to cabling, configuration, and ongoing maintenance.',
      'We work across all major camera technologies — Analog, HD, IP, and CCD-based systems — so we can recommend the right solution for your budget, coverage needs, and existing infrastructure.',
    ],
    blocks: [
      {
        heading: 'End-to-End Camera System Setup',
        text: 'A complete turnkey service: we survey your site, design optimal camera placement, install and cable the system, configure recording and remote access, and hand over a fully working solution.',
        list: [
          'On-site survey & coverage design',
          'Professional cabling & mounting',
          'DVR / NVR setup & configuration',
          'Remote viewing on mobile & desktop',
          'Motion alerts & scheduled recording',
        ],
        boxHeading: 'Designed Around Your Site',
        boxText: 'No two sites are the same. We design camera coverage to eliminate blind spots, prioritise critical zones, and balance image quality against storage — giving you maximum security per rupee invested.',
      },
      {
        heading: 'Multi-Technology Camera Support',
        text: 'We install and integrate every major surveillance technology, ensuring the right fit for new installs or upgrades to existing systems.',
        list: [
          'Analog technology — cost-effective coverage',
          'HD cameras — sharp, detailed footage',
          'IP cameras — networked, scalable, remote',
          'CCD technology-based systems',
          'Hybrid setups integrating old & new',
        ],
        boxHeading: 'Upgrade Without Ripping Out',
        boxText: 'Already have an older analog system? Our hybrid integration lets you add modern IP and HD cameras while keeping your existing investment working — a phased, affordable upgrade path.',
      },
    ],
    stats: [
      { num: '4', label: 'Camera Technologies' },
      { num: '24/7', label: 'Recording & Monitoring' },
      { num: '100%', label: 'Custom Site Design' },
      { num: 'Remote', label: 'Mobile Access Anywhere' },
    ],
    cta: 'Ready to secure your premises?',
  },

  'industrial-electronics-repair': {
    title: 'Industrial Electronics Repair Services',
    breadcrumb: 'Electronics Repair',
    heroImage: '/assets/img/service/electronics-repair.jpg',
    intro: [
      'When an industrial drive, control card, or HMI fails, replacement units are often expensive, obsolete, or carry long lead times — leaving your machine idle and your production losing money by the hour. Virtual Enterprises offers expert component-level repair of industrial electronics, restoring your equipment to full working order at a fraction of replacement cost.',
      'Our technicians have deep experience across drives, servo systems, control electronics, and operator interfaces from all major manufacturers — diagnosing faults down to the component level.',
    ],
    blocks: [
      {
        heading: 'Expert Repair & Maintenance',
        text: 'We perform component-level diagnosis and repair on a wide range of industrial electronics, backed by functional testing under real operating loads before return.',
        list: [
          'Industrial Drives (AC / DC / VFD)',
          'Control Cards & PCBs',
          'Servo Motors & servo drives',
          'Industrial Motherboards',
          'Commercial Displays & monitors',
        ],
        boxHeading: 'Repair, Don\'t Replace',
        boxText: 'A repair typically costs 40–70% less than a new unit and avoids long procurement delays for obsolete parts. We get your existing equipment back on the line fast — fully tested and warranted.',
      },
      {
        heading: 'HMI Systems — All Major Brands',
        text: 'Human-Machine Interface failures can blind an entire operation. We repair HMI panels and touchscreens from leading industrial brands, restoring control and visibility.',
        list: [
          'Fanuc HMI & operator panels',
          'Siemens HMI & SIMATIC panels',
          'Touchscreen & display replacement',
          'Backlight & power supply repair',
          'Firmware & calibration restoration',
        ],
        boxHeading: 'Brand-Specific Expertise',
        boxText: 'HMI systems from Fanuc, Siemens and others each have unique architectures. Our brand-specific knowledge means accurate diagnosis and lasting repairs — not guesswork.',
      },
    ],
    stats: [
      { num: '40–70%', label: 'Cheaper Than Replacement' },
      { num: '100%', label: 'Load-Tested Before Return' },
      { num: 'All', label: 'Major Brands Serviced' },
      { num: 'Fast', label: 'Turnaround Times' },
    ],
    cta: 'Got failed industrial electronics?',
  },

  'industry-4-automation-solutions': {
    title: 'Industry 4.0 & Automation Solutions',
    breadcrumb: 'Industry 4.0 & Automation',
    heroImage: '/assets/img/service/industry-4-automation.jpg',
    intro: [
      'Industry 4.0 is transforming manufacturing — connecting machines, data, and people to create smarter, more efficient, and more responsive factories. Virtual Enterprises, together with our specialist partner network, helps you take that step: from PLC-driven automation to full ERP integration and IT-led process automation.',
      'We bridge the gap between your shop floor and your business systems, turning raw machine data into actionable insight and automating the manual processes that slow you down.',
    ],
    blocks: [
      {
        heading: 'Automation & PLC Integration',
        text: 'We design, program, and integrate automation systems that improve throughput, consistency, and safety across your production processes.',
        list: [
          'PLC Programming & Integration',
          'Industry 4.0 smart-factory solutions',
          'Machine-to-machine connectivity',
          'Sensor & data acquisition setup',
          'Process automation & control logic',
        ],
        boxHeading: 'From Manual to Smart',
        boxText: 'Automating repetitive, error-prone manual steps reduces waste, improves quality consistency, and frees your skilled staff for higher-value work — with measurable ROI.',
      },
      {
        heading: 'ERP, Data & IT Automation',
        text: 'Connect your production floor to your business systems with ERP implementation and data integration that gives management real-time visibility.',
        list: [
          'ERP System Implementation',
          'Data Integration across systems',
          'IT Automation & workflow tools',
          'Real-time dashboards & reporting',
          'Material Handling system integration',
        ],
        boxHeading: 'One Connected Operation',
        boxText: 'When your machines, inventory, and ERP talk to each other, decisions get faster and errors disappear. We integrate the whole chain — from sensor to spreadsheet.',
      },
    ],
    stats: [
      { num: '4.0', label: 'Smart Factory Ready' },
      { num: 'Real-Time', label: 'Data & Dashboards' },
      { num: 'End-to-End', label: 'Floor to ERP' },
      { num: 'Partner', label: 'Backed Expertise' },
    ],
    cta: 'Ready to build a smart factory?',
  },

  'partnered-system-integration': {
    title: 'Partnered System Integration Services',
    breadcrumb: 'System Integration',
    heroImage: '/assets/img/service/system-integration.jpg',
    intro: [
      'Complex industrial projects often require expertise across multiple disciplines — automation, IT, mechanical handling, and software. Through our trusted partner companies, Virtual Enterprises delivers complete system integration: a single point of accountability for projects that span many specialities.',
      'We coordinate the technologies, vendors, and disciplines so you don\'t have to — delivering integrated solutions that work as one cohesive system from day one.',
    ],
    blocks: [
      {
        heading: 'Complete Integration Capabilities',
        text: 'In collaboration with our partner companies, we deliver integrated solutions that combine automation, IT, and material-handling expertise under one project umbrella.',
        list: [
          'Industry 4.0 Solutions',
          'PLC Programming & Integration',
          'ERP System Implementation',
          'Data Integration & IT Automation',
          'Material Handling System Integration',
        ],
        boxHeading: 'One Partner, Every Discipline',
        boxText: 'Instead of managing five vendors, you work with one integrator. We handle coordination, interfaces, and accountability — so the finished system works as a unified whole.',
      },
      {
        heading: 'Why Partnered Integration Works',
        text: 'Our partner network brings specialist depth in each domain, while we provide unified project management — combining best-in-class expertise with single-point accountability.',
        list: [
          'Single point of contact & accountability',
          'Specialist depth via partner network',
          'Reduced project risk & coordination cost',
          'Faster delivery through proven teams',
          'Long-term support & maintenance',
        ],
        boxHeading: 'De-Risk Your Project',
        boxText: 'Large integration projects fail at the seams between vendors. Our partnered model eliminates those seams — one accountable team, clear interfaces, and a system that simply works.',
      },
    ],
    stats: [
      { num: '5+', label: 'Integrated Disciplines' },
      { num: '1', label: 'Point of Accountability' },
      { num: 'Partner', label: 'Network Depth' },
      { num: 'End-to-End', label: 'Project Delivery' },
    ],
    cta: 'Have a complex integration project?',
  },

};

export default serviceDetails;
