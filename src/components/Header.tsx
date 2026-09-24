import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Calculator, Receipt, Briefcase,
  Phone, Mail, LogIn, ArrowRight,
} from 'lucide-react';
import { navServices, navResources, navAbout } from '@/data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator, Receipt, Briefcase,
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setScrolled(window.scrollY > 20);
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileSection(null);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs">
        <div className="container-page flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <a href="tel:+97143839272" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Phone className="w-3.5 h-3.5" /> +971 504432711
            </a>
            <a href="mailto:info@skrooge.ai" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Mail className="w-3.5 h-3.5" /> info@skrooge.ai
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">迪拜 · 阿布扎比 · 阿联酋</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400">1,000+ 企业信赖</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="container-page">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30">
                S
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">Skrooge</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('services')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors flex items-center gap-1">
                  服务 <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === 'services' && (
                  <div className="absolute top-full left-0 pt-2 w-[640px]">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 grid grid-cols-3 gap-1">
                      {navServices.map((service) => {
                        const Icon = iconMap[service.icon] || Calculator;
                        return (
                          <div key={service.path} className="p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <Link to={service.path} className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                                <Icon className="w-4 h-4 text-emerald-600" />
                              </div>
                              <span className="font-semibold text-sm text-slate-900">{service.title}</span>
                            </Link>
                            <div className="ml-10 space-y-1">
                              {service.items.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className="block text-xs text-slate-600 hover:text-emerald-600 transition-colors"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Resources dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('resources')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors flex items-center gap-1">
                  资源 <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === 'resources' && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 w-40">
                      {navResources.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-emerald-600 rounded-lg transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* About dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('about')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors flex items-center gap-1">
                  关于 <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === 'about' && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 w-40">
                      {navAbout.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-emerald-600 rounded-lg transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => navigate('/contact')}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
              >
                <LogIn className="w-4 h-4" /> 登录
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="btn-primary text-sm py-2.5 px-5"
              >
                立即开始 <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-slate-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="container-page py-4 space-y-2">
              {/* Services */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  className="w-full flex items-center justify-between py-2 font-medium text-slate-800"
                  onClick={() => setMobileSection(mobileSection === 'services' ? null : 'services')}
                >
                  服务 <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSection === 'services' && (
                  <div className="pl-4 space-y-3 pb-2">
                    {navServices.map((service) => (
                      <div key={service.path}>
                        <Link to={service.path} className="block py-1 text-sm font-medium text-emerald-600">
                          {service.title}
                        </Link>
                        {service.items.map((item) => (
                          <Link key={item.path} to={item.path} className="block py-1 text-sm text-slate-600 pl-3">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  className="w-full flex items-center justify-between py-2 font-medium text-slate-800"
                  onClick={() => setMobileSection(mobileSection === 'resources' ? null : 'resources')}
                >
                  资源 <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSection === 'resources' && (
                  <div className="pl-4 pb-2">
                    {navResources.map((item) => (
                      <Link key={item.path} to={item.path} className="block py-1 text-sm text-slate-600">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  className="w-full flex items-center justify-between py-2 font-medium text-slate-800"
                  onClick={() => setMobileSection(mobileSection === 'about' ? null : 'about')}
                >
                  关于 <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === 'about' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSection === 'about' && (
                  <div className="pl-4 pb-2">
                    {navAbout.map((item) => (
                      <Link key={item.path} to={item.path} className="block py-1 text-sm text-slate-600">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 space-y-3">
                <button onClick={() => navigate('/contact')} className="btn-primary w-full">
                  立即开始 <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={() => navigate('/contact')} className="btn-secondary w-full">
                  <LogIn className="w-4 h-4" /> 登录
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
