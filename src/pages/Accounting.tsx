import { Link } from 'react-router-dom';
import {
  ArrowRight, Check, Star, Users, BookOpen, FileText,
  Calculator, Receipt, Shield, Sparkles, Play,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { testimonials } from '@/data/content';

const subServices = [
  { title: '记账服务', desc: '我们采集、分类并对账你的所有交易，准备财务报告并进行税务申报。', icon: BookOpen, path: '/accounting/bookkeeping' },
  { title: '薪资管理', desc: '准确的薪资计算与遣散费管理，确保合规无忧。', icon: Users, path: '/accounting/payroll' },
  { title: '发票自动化', desc: '自动从邮箱抓取发票，减少手动输入和错误。', icon: FileText, path: '/accounting/invoice-automation' },
  { title: '积压账务处理', desc: '快速清理积压的账务，让您的财务回到正轨。', icon: Calculator, path: '/accounting/backlog-accounting' },
];

const includedFeatures = [
  { title: '专属会计团队', desc: 'Skrooge AI处理数据，会计师验证条目，税务经理审查报告并申报税务。你可以直接与团队交流，4个工作小时内获得回复。', icon: Users },
  { title: '记账服务', desc: '我们采集、分类并对账你的所有交易，准备财务报告并进行税务申报。', icon: BookOpen },
  { title: '税务与合规', desc: '我们处理你的企业税和增值税申报。如果你有阿联酋税务问题，我们会为你提供建议。', icon: Receipt },
  { title: '技术与报告', desc: '通过Skrooge应用和Zoho Books，你可以随时查看财务报告和关键指标。', icon: FileText },
];

export default function Accounting() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white pt-12 lg:pt-16 pb-16">
        <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm text-slate-500">🤝 1,000+ 企业信赖</span>
            <div className="flex items-center gap-1 ml-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium text-slate-700">5.0</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-1 text-slate-900 mb-6">
                AI驱动的<br />
                <span className="text-gradient-primary">会计与记账服务</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                资深会计师团队，由AI赋能。零税务意外，当日回复，告别最后一刻的混乱。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  立即开始 <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#pricing" className="btn-secondary">查看定价</a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6">
                <div className="space-y-4">
                  {['交易采集与分类', '银行对账', '月度财务报告', '增值税申报', '企业税申报'].map((item, i) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                      {i < 4 && <div className="flex-1 h-px bg-slate-100" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="py-16 bg-slate-900 relative overflow-hidden">
        <div className="container-page text-center">
          <h2 className="heading-2 text-white mb-4">看看Skrooge如何运作</h2>
          <p className="text-slate-300 text-lg mb-10">90秒了解：你的会计团队，以及背后的AI平台。</p>
          <div className="relative max-w-4xl mx-auto group cursor-pointer rounded-2xl overflow-hidden">
            <img src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="演示" className="w-full h-[300px] lg:h-[400px] object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="服务范围" title="我们的会计服务" center />
          <div className="grid md:grid-cols-2 gap-6">
            {subServices.map((service) => (
              <Link key={service.path} to={service.path} className="group card-hover rounded-2xl border border-slate-100 p-8 bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-colors">
                    <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">{service.title}</h3>
                    <p className="text-sm text-slate-600">{service.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <SectionHeading eyebrow="包含内容" title="服务包含什么" center />
          <div className="grid md:grid-cols-2 gap-6">
            {includedFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl border border-slate-100 p-8 card-hover">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5">
                  <feature.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-6">
              "{testimonials[1].text}"
            </p>
            <p className="font-bold text-slate-900">{testimonials[1].name}</p>
            <p className="text-sm text-slate-500">{testimonials[1].title}</p>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="pricing" className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-page">
          <SectionHeading eyebrow="定价" title="透明定价，无隐藏费用" center />
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-3xl border-2 border-emerald-200 shadow-xl p-8 text-center">
              <p className="text-slate-500 text-sm mb-2">月起价</p>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-5xl font-bold text-slate-900">¥799</span>
                <span className="text-slate-500">/月</span>
              </div>
              <p className="text-xs text-slate-400 mb-6">按季度结算 · 不含增值税</p>
              <Link to="/contact" className="btn-primary w-full">立即开始</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
