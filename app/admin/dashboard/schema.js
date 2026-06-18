// Describes every editable section and its fields. The dashboard renders
// editors generically from this — add a field here and it appears in the UI.

const T = (key, label, opts = {}) => ({ key, label, type: 'text', ...opts });
const A = (key, label, opts = {}) => ({ key, label, type: 'textarea', ...opts });
const N = (key, label) => ({ key, label, type: 'number' });

export const SECTIONS = [
  {
    key: 'banner', label: 'Banner', icon: '🏠',
    fields: [
      T('subtitle', 'Subtitle tag'),
      A('headline', 'Headline (HTML <span> allowed)', { rows: 2 }),
      A('description', 'Description', { rows: 4 }),
      T('buttonText', 'Button text'),
      T('buttonLink', 'Button link'),
    ],
  },
  {
    key: 'about', label: 'About', icon: '📄',
    fields: [
      T('subtitle', 'Subtitle tag'),
      A('headline', 'Headline', { rows: 2 }),
      A('description', 'Description', { rows: 5 }),
      N('experienceYears', 'Years of experience'),
    ],
  },
  {
    key: 'chooseUs', label: 'Why Choose Us', icon: '✅',
    fields: [
      T('subtitle', 'Subtitle tag'),
      A('headline', 'Headline', { rows: 2 }),
      A('description', 'Description', { rows: 6 }),
      T('feature1Icon', 'Feature 1 — icon class'),
      T('feature1Title', 'Feature 1 — title'),
      A('feature1Text', 'Feature 1 — text', { rows: 2 }),
      T('feature2Icon', 'Feature 2 — icon class'),
      T('feature2Title', 'Feature 2 — title'),
      A('feature2Text', 'Feature 2 — text', { rows: 2 }),
    ],
  },
  {
    key: 'homeServices', label: 'Home Services', icon: '🔧',
    fields: [
      T('subtitle', 'Subtitle tag'),
      A('sectionTitle', 'Section title', { rows: 2 }),
      { key: 'items', label: 'Service cards', type: 'list', itemFields: [
        T('icon', 'Icon class'), T('title', 'Title'), A('text', 'Text', { rows: 2 }),
      ]},
    ],
  },
  {
    key: 'servicesList', label: 'Services Page Cards', icon: '🗂️',
    fields: [
      { key: 'items', label: 'Service cards (/services)', type: 'list', itemFields: [
        T('id', 'Slug / page link'), T('icon', 'Icon class'), T('title', 'Title'), A('des', 'Short description', { rows: 2 }),
      ]},
    ],
  },
  {
    key: 'testimonials', label: 'Testimonials', icon: '💬',
    fields: [
      T('subtitle', 'Subtitle tag'),
      A('headline', 'Headline (HTML allowed)', { rows: 2 }),
      { key: 'items', label: 'Reviews', type: 'list', itemFields: [
        T('name', 'Client name'), T('role', 'Role / company'), N('rating', 'Rating (1-5)'), A('text', 'Review text', { rows: 3 }),
      ]},
    ],
  },
  {
    key: 'contact', label: 'Contact Info', icon: '📞',
    fields: [
      A('address', 'Address', { rows: 2 }),
      T('phone', 'Phone'),
      T('email', 'Email'),
      T('hours', 'Business hours'),
      A('mapEmbed', 'Google Map embed URL', { rows: 2 }),
    ],
  },
  {
    key: 'company', label: 'Company / Footer', icon: '🏢',
    fields: [
      T('name', 'Company name'),
      T('tagline', 'Tagline'),
      A('footerText', 'Footer about text', { rows: 3 }),
      T('facebook', 'Facebook URL'),
      T('instagram', 'Instagram URL'),
      T('linkedin', 'LinkedIn URL'),
      T('twitter', 'Twitter/X URL'),
    ],
  },
];
