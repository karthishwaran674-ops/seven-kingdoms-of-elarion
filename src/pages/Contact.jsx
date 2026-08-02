import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { contactApi } from '../services/api';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSubmitted(false);

    try {
      const response = await contactApi.sendMessage(formData);
      if (response?.data?.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(response?.data?.message || 'Failed to send message.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Summons</p>
        <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">Contact the realm</h1>
      </div>

      <Card className="overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#060b1e]/80 p-8">
            <h2 className="text-2xl font-semibold text-white">Send a signal to the archives</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Whether you seek a commission, lore consultation, or a pilgrimage route, the archivists will answer.
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Email: envoy@elarionrealm.com</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Order Hall: North Star Spire</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-300">
                <span className="mb-2 block">Name</span>
                <input
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-[#050816] px-4 py-3 outline-none ring-0"
                  placeholder="Ari Voss"
                />
              </label>
              <label className="text-sm text-slate-300">
                <span className="mb-2 block">Email</span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-[#050816] px-4 py-3 outline-none ring-0"
                  placeholder="you@domain.com"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm text-slate-300">
              <span className="mb-2 block">Message</span>
              <textarea
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-[#050816] px-4 py-3 outline-none ring-0"
                placeholder="Share your purpose..."
              />
            </label>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">{submitted ? 'Message sent successfully.' : 'The realm listens.'}</p>
                {error ? <p className="mt-1 text-sm text-rose-400">{error}</p> : null}
              </div>
              <Button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send'}</Button>
            </div>
          </form>
        </div>
      </Card>
    </main>
  );
}

export default Contact;
