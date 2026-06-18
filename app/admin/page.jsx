'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, isConfigured } from '../../lib/supabase';

export default function AdminLogin() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) { setError(error.message || 'Login failed.'); return; }
    router.push('/admin/dashboard');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ background: '#1e293b', borderRadius: 16, padding: '44px 40px', width: '100%', maxWidth: 420, boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 34 }}>⚙️</div>
          <h1 style={{ color: '#f1f5f9', fontSize: 22, fontWeight: 700, margin: '6px 0 2px' }}>Admin Panel</h1>
          <p style={{ color: '#94a3b8', fontSize: 13, margin: 0 }}>Virtual Enterprises</p>
        </div>

        {!isConfigured && (
          <div style={{ background: '#422006', border: '1px solid #b45309', borderRadius: 8, padding: '10px 12px', color: '#fcd34d', fontSize: 12.5, marginBottom: 16 }}>
            ⚠ Supabase keys not set. Add them to <b>.env.local</b> and rebuild.
          </div>
        )}

        <form onSubmit={handleLogin}>
          <label style={{ color: '#cbd5e1', fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="admin@example.com"
            style={inp} />
          <label style={{ color: '#cbd5e1', fontSize: 13, fontWeight: 600, display: 'block', margin: '16px 0 6px' }}>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••"
            style={inp} />
          {error && <div style={{ background: '#450a0a', border: '1px solid #dc2626', borderRadius: 8, padding: '10px 12px', color: '#fca5a5', fontSize: 13, marginTop: 16 }}>{error}</div>}
          <button type="submit" disabled={loading}
            style={{ width: '100%', marginTop: 24, padding: 13, background: loading ? '#334155' : '#3b82f6', border: 'none', borderRadius: 8, color: '#fff', fontSize: 15, fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}

const inp = { width: '100%', padding: '12px 14px', background: '#0f172a', border: '1px solid #334155', borderRadius: 8, color: '#f1f5f9', fontSize: 14, outline: 'none', boxSizing: 'border-box' };
