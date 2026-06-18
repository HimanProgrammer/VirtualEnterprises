'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, isConfigured } from '../../lib/supabase';

export default function AdminAuth() {
  const [mode, setMode]         = useState('login'); // 'login' | 'signup'
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [notice, setNotice]     = useState('');
  const [loading, setLoading]   = useState(false);
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    setError(''); setNotice(''); setLoading(true);

    if (mode === 'login') {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) { setError(error.message || 'Login failed.'); return; }
      router.push('/admin/dashboard');
    } else {
      const { data, error } = await supabase.auth.signUp({
        email, password,
        options: { emailRedirectTo: `${window.location.origin}/admin/` },
      });
      setLoading(false);
      if (error) { setError(error.message || 'Sign up failed.'); return; }
      if (data.session) { router.push('/admin/dashboard'); return; }   // auto-confirmed
      setNotice('Account created! Check your email to confirm, then sign in.');
      setMode('login');
    }
  };

  const handleGoogle = async () => {
    setError(''); setNotice('');
    const redirectTo = `${window.location.origin}/admin/dashboard/`;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo },
    });
    if (error) setError(error.message || 'Google sign-in failed.');
  };

  const handleReset = async () => {
    if (!email) { setError('Enter your email first, then click reset.'); return; }
    setError(''); setNotice('');
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/admin/`,
    });
    if (error) setError(error.message); else setNotice('Password reset email sent.');
  };

  const isSignup = mode === 'signup';

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ background: '#1e293b', borderRadius: 16, padding: '44px 40px', width: '100%', maxWidth: 420, boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }}>
        <div style={{ textAlign: 'center', marginBottom: 26 }}>
          <div style={{ fontSize: 34 }}>⚙️</div>
          <h1 style={{ color: '#f1f5f9', fontSize: 22, fontWeight: 700, margin: '6px 0 2px' }}>Admin Panel</h1>
          <p style={{ color: '#94a3b8', fontSize: 13, margin: 0 }}>Virtual Enterprises</p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', background: '#0f172a', borderRadius: 10, padding: 4, marginBottom: 22 }}>
          {['login', 'signup'].map(m => (
            <button key={m} type="button" onClick={() => { setMode(m); setError(''); setNotice(''); }}
              style={{ flex: 1, padding: '9px 0', borderRadius: 7, border: 'none', cursor: 'pointer', fontSize: 13.5, fontWeight: 600,
                background: mode === m ? '#3b82f6' : 'transparent', color: mode === m ? '#fff' : '#94a3b8' }}>
              {m === 'login' ? 'Sign In' : 'Sign Up'}
            </button>
          ))}
        </div>

        {!isConfigured && (
          <div style={{ background: '#422006', border: '1px solid #b45309', borderRadius: 8, padding: '10px 12px', color: '#fcd34d', fontSize: 12.5, marginBottom: 16 }}>
            ⚠ Supabase keys not set.
          </div>
        )}

        <form onSubmit={submit}>
          <label style={lbl}>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" style={inp} />
          <label style={lbl}>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} placeholder="••••••••" style={inp} />

          {!isSignup && (
            <div style={{ textAlign: 'right', marginTop: -8, marginBottom: 6 }}>
              <button type="button" onClick={handleReset} style={{ background: 'none', border: 'none', color: '#64748b', fontSize: 12, cursor: 'pointer' }}>Forgot password?</button>
            </div>
          )}

          {error  && <div style={{ background: '#450a0a', border: '1px solid #dc2626', borderRadius: 8, padding: '10px 12px', color: '#fca5a5', fontSize: 13, marginTop: 12 }}>{error}</div>}
          {notice && <div style={{ background: '#052e16', border: '1px solid #16a34a', borderRadius: 8, padding: '10px 12px', color: '#86efac', fontSize: 13, marginTop: 12 }}>{notice}</div>}

          <button type="submit" disabled={loading}
            style={{ width: '100%', marginTop: 20, padding: 13, background: loading ? '#334155' : '#3b82f6', border: 'none', borderRadius: 8, color: '#fff', fontSize: 15, fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Please wait…' : (isSignup ? 'Create Account' : 'Sign In')}
          </button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
          <div style={{ flex: 1, height: 1, background: '#334155' }} />
          <span style={{ color: '#64748b', fontSize: 12 }}>OR</span>
          <div style={{ flex: 1, height: 1, background: '#334155' }} />
        </div>

        <button type="button" onClick={handleGoogle}
          style={{ width: '100%', padding: 12, background: '#fff', border: 'none', borderRadius: 8, color: '#1f2937', fontSize: 14.5, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
}

const inp = { width: '100%', padding: '12px 14px', background: '#0f172a', border: '1px solid #334155', borderRadius: 8, color: '#f1f5f9', fontSize: 14, outline: 'none', boxSizing: 'border-box', marginBottom: 14 };
const lbl = { color: '#cbd5e1', fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 };
