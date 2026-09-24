import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, MessageCircle, Send } from 'lucide-react';
import { navServices, navResources, navAbout, contactInfo } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA banner */}
      <div className="border-b border-slate-800">
        <div className="container-page py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                你经营企业，Skrooge管理账簿。
              </h3>
              <p className="text-slate-400 text-lg">
                AI驱动的会计团队，零税务意外，当日回复。
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              免费咨询 <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-page py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo + description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="text-2xl font-bold text-white">Skrooge</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              阿联酋领先的AI驱动会计与税务服务公司，为1,000+企业提供专业服务。
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">服务</h4>
            <ul className="space-y-2">
              {navServices.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">资源</h4>
            <ul className="space-y-2">
              {navResources.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-4">关于</h4>
            <ul className="space-y-2">
              {navAbout.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">联系方式</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${contactInfo.phone}`} className="flex items-start gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" /> {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" /> {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{contactInfo.dubai}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2026 SKROOGE ACCOUNTING L.L.C - S.P.C. 阿布扎比，阿联酋。版权所有。
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link to="/about" className="hover:text-slate-300 transition-colors">条款与条件</Link>
            <Link to="/about" className="hover:text-slate-300 transition-colors">隐私政策</Link>
            <Link to="/about" className="hover:text-slate-300 transition-colors">Cookie政策</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
