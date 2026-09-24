import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Phone, Mail, Send } from 'lucide-react';

export default function ContactPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
    }, 3000);
  };

  if (!open) {
    return (
      <button
        onClick={() => navigate('/contact')}
        className="fixed bottom-6 left-6 z-40 px-5 py-3 rounded-full bg-slate-900 text-white text-sm font-medium shadow-lg hover:bg-slate-800 transition-all active:scale-95 flex items-center gap-2"
      >
        <Phone className="w-4 h-4" /> 联系我们
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-fade-up">
        <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X className="w-5 h-5" />
        </button>
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 flex items-center justify-center mb-4">
              <Send className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">感谢您！</h3>
            <p className="text-slate-600">我们已收到您的请求，将尽快与您联系。</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">S</div>
              <span className="font-bold text-slate-900">Skrooge</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">留下您的电话，我们会回拨您。</h3>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <input type="tel" placeholder="您的电话号码" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" />
              <button type="submit" className="btn-primary w-full">提交</button>
            </form>
            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-sm text-slate-500 mb-3">或通过以下方式联系我们</p>
              <div className="flex gap-3">
                <a href="tel:+97143839272" className="w-10 h-10 rounded-lg bg-slate-50 hover:bg-emerald-50 flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5 text-slate-600" />
                </a>
                <a href="mailto:info@skrooge.ai" className="w-10 h-10 rounded-lg bg-slate-50 hover:bg-emerald-50 flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5 text-slate-600" />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
