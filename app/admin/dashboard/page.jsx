'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
import { getSection, saveSection, withDefaults } from '../../../lib/cms';
import { SECTIONS } from './schema';

const S = {
  page:     { display: 'flex', minHeight: '100vh', background: '#0f172a', fontFamily: 'system-ui, sans-serif' },
  sidebar:  { width: 240, background: '#1e293b', display: 'flex', flexDirection: 'column', flexShrink: 0 },
  brand:    { color: '#f1f5f9', fontWeight: 700, fontSize: 15, padding: '22px 20px 16px', borderBottom: '1px solid #334155' },
  nav:      (active) => ({ display: 'block', width: '100%', textAlign: 'left', padding: '12px 20px', fontSize: 14, cursor: 'pointer', border: 'none', borderLeft: active ? '3px solid #3b82f6' : '3px solid transparent', background: active ? '#0f172a' : 'transparent', color: active ? '#60a5fa' : '#94a3b8', fontWeight: active ? 600 : 400 }),
  main:     { flex: 1, padding: 32, overflowY: 'auto' },
  card:     { background: '#1e293b', borderRadius: 12, padding: 26, maxWidth: 820 },
  h2:       { color: '#f1f5f9', fontSize: 20, fontWeight: 700, margin: '0 0 20px' },
  label:    { color: '#94a3b8', fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.04em', display: 'block', margin: '0 0 6px' },
  input:    { width: '100%', padding: '10px 12px', background: '#0f172a', border: '1px solid #334155', borderRadius: 8, color: '#f1f5f9', fontSize: 14, marginBottom: 16, outline: 'none', boxSizing: 'border-box' },
  save:     { padding: '10px 24px', background: '#3b82f6', border: 'none', borderRadius: 8, color: '#fff', fontSize: 14, fontWeight: 600, cursor: 'pointer' },
  saved:    { marginLeft: 12, color: '#4ade80', fontSize: 13 },
  itemBox:  { background: '#0f172a', borderRadius: 8, padding: 16, marginBottom: 14, border: '1px solid #1e293b' },
  itemHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  small:    { fontSize: 12, padding: '4px 10px', borderRadius: 6, cursor: 'pointer', border: 'none' },
  logout:   { margin: '12px 20px 20px', padding: '10px', background: 'none', border: '1px solid #334155', borderRadius: 8, color: '#ef4444', cursor: 'pointer', fontSize: 13 },
};

function Field({ field, value, onChange }) {
  if (field.type === 'textarea')
    return (<><label style={S.label}>{field.label}</label>
      <textarea rows={field.rows || 3} value={value ?? ''} onChange={e => onChange(e.target.value)} style={{ ...S.input, resize: 'vertical' }} /></>);
  if (field.type === 'number')
    return (<><label style={S.label}>{field.label}</label>
      <input type="number" value={value ?? ''} onChange={e => onChange(Number(e.target.value))} style={S.input} /></>);
  return (<><label style={S.label}>{field.label}</label>
    <input type="text" value={value ?? ''} onChange={e => onChange(e.target.value)} style={S.input} /></>);
}

function ListField({ field, items, setItems }) {
  const update = (i, k, v) => setItems(items.map((it, idx) => idx === i ? { ...it, [k]: v } : it));
  const add = () => setItems([...items, Object.fromEntries(field.itemFields.map(f => [f.key, '']))]);
  const remove = (i) => setItems(items.filter((_, idx) => idx !== i));
  return (
    <div>
      <label style={S.label}>{field.label}</label>
      {(items || []).map((it, i) => (
        <div key={i} style={S.itemBox}>
          <div style={S.itemHead}>
            <span style={{ color: '#64748b', fontSize: 12, fontWeight: 700 }}>#{i + 1}</span>
            <button onClick={() => remove(i)} style={{ ...S.small, background: '#450a0a', color: '#fca5a5' }}>Remove</button>
          </div>
          {field.itemFields.map(f => (
            <Field key={f.key} field={f} value={it[f.key]} onChange={v => update(i, f.key, v)} />
          ))}
        </div>
      ))}
      <button onClick={add} style={{ ...S.small, background: '#0f172a', color: '#94a3b8', border: '1px dashed #334155', padding: '8px 16px' }}>+ Add</button>
    </div>
  );
}

function SectionEditor({ section }) {
  const [data, setData]   = useState(null);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [err, setErr]     = useState('');

  useEffect(() => {
    let on = true;
    setData(null); setSaved(false); setErr('');
    getSection(section.key).then(stored => { if (on) setData(withDefaults(section.key, stored)); });
    return () => { on = false; };
  }, [section.key]);

  const set = (k) => (v) => setData(prev => ({ ...prev, [k]: v }));

  const handleSave = async () => {
    setSaving(true); setErr('');
    try { await saveSection(section.key, data); setSaved(true); setTimeout(() => setSaved(false), 2500); }
    catch (e) { setErr(e.message || 'Save failed (check Supabase keys & login).'); }
    finally { setSaving(false); }
  };

  if (!data) return <div style={{ color: '#94a3b8', padding: 40 }}>Loading…</div>;

  return (
    <div>
      <h2 style={S.h2}>{section.icon} {section.label}</h2>
      <div style={S.card}>
        {section.fields.map(f =>
          f.type === 'list'
            ? <ListField key={f.key} field={f} items={data[f.key] || []} setItems={set(f.key)} />
            : <Field key={f.key} field={f} value={data[f.key]} onChange={set(f.key)} />
        )}
        <div style={{ marginTop: 8 }}>
          <button style={S.save} onClick={handleSave} disabled={saving}>{saving ? 'Saving…' : 'Save Changes'}</button>
          {saved && <span style={S.saved}>✓ Saved</span>}
          {err && <span style={{ ...S.saved, color: '#fca5a5' }}>{err}</span>}
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [user, setUser]   = useState(undefined);
  const [active, setActive] = useState(SECTIONS[0].key);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) router.push('/admin'); else setUser(data.session.user);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) router.push('/admin');
    });
    return () => sub.subscription.unsubscribe();
  }, [router]);

  const logout = async () => { await supabase.auth.signOut(); router.push('/admin'); };

  if (user === undefined)
    return <div style={{ ...S.page, alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>Checking session…</div>;

  const section = SECTIONS.find(s => s.key === active);

  return (
    <div style={S.page}>
      <aside style={S.sidebar}>
        <div style={S.brand}>⚙️ Admin Panel
          <div style={{ color: '#64748b', fontSize: 11, fontWeight: 400, marginTop: 4 }}>{user.email}</div>
        </div>
        <nav style={{ flex: 1, paddingTop: 6 }}>
          {SECTIONS.map(s => (
            <button key={s.key} style={S.nav(active === s.key)} onClick={() => setActive(s.key)}>
              {s.icon} {s.label}
            </button>
          ))}
        </nav>
        <button style={S.logout} onClick={logout}>← Logout</button>
      </aside>
      <main style={S.main}>
        <div style={{ color: '#64748b', fontSize: 12, marginBottom: 22 }}>
          <a href="/" target="_blank" style={{ color: '#3b82f6', textDecoration: 'none' }}>View Website ↗</a>
          &nbsp;·&nbsp; Changes save to Supabase and appear on the live site immediately.
        </div>
        <SectionEditor section={section} />
      </main>
    </div>
  );
}
