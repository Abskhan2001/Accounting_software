import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Check, MessageCircle } from 'lucide-react';
import { contactInfo } from '@/data/content';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white pt-16 pb-12">
        <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container-page relative text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
            <span className="text-sm font-medium text-emerald-700">👋 你好！</span>
          </div>
          <h1 className="heading-1 text-slate-900 mb-6">联系我们</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            需要会计服务或税务合规帮助？通过以下方式联系我们！
          </p>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - contact info */}
            <div>
              <h2 className="heading-3 text-slate-900 mb-8">联系方式</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">电话</h4>
                    <a href={`tel:${contactInfo.phone}`} className="text-slate-600 hover:text-emerald-600 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">邮箱</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-slate-600 hover:text-emerald-600 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">迪拜办公室</h4>
                    <p className="text-sm text-slate-600">{contactInfo.dubai}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">阿布扎比办公室</h4>
                    <p className="text-sm text-slate-600">{contactInfo.abuDhabi}</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <p className="text-sm text-slate-500 mb-4">或通过以下方式联系</p>
                <div className="flex gap-3">
                  <a href="#" className="w-12 h-12 rounded-xl bg-slate-50 hover:bg-emerald-50 flex items-center justify-center transition-colors">
                    <MessageCircle className="w-5 h-5 text-slate-600" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-slate-50 hover:bg-emerald-50 flex items-center justify-center transition-colors">
                    <Send className="w-5 h-5 text-slate-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right - form */}
            <div>
              <h2 className="heading-3 text-slate-900 mb-8">给我们留言</h2>
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                      <Check className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">感谢您！</h3>
                    <p className="text-slate-600">我们已收到您的请求，将尽快与您联系。</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">姓名</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">邮箱</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                        placeholder="请输入您的邮箱"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">电话</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                        placeholder="请输入您的电话号码"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">留言</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none"
                        placeholder="请描述您的需求..."
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full">
                      提交 <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
