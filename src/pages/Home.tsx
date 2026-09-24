import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Play, ArrowRight, Star, Sparkles, MailCheck, CalendarCheck,
  BarChart3, TrendingUp, Check, Quote, ChevronLeft, ChevronRight,
  Calculator, Receipt, Briefcase, ShoppingBag, UtensilsCrossed,
  Building2, Rocket, ShoppingCart, Home as HomeIcon,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import {
  testimonials, industries, allIndustries, advantages,
  pricingIncludes, teamMembers,
} from '@/data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MailCheck, CalendarCheck, BarChart3, TrendingUp,
  ShoppingBag, UtensilsCrossed, Building2, Rocket, ShoppingCart, Home: HomeIcon,
};

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({ profit: 0, growth: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({ profit: 25100, growth: 27 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white pt-12 lg:pt-20 pb-16 lg:pb-24">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-20 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
        </div>

        <div className="container-page relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">AI驱动的会计与税务服务</span>
              </div>

              <h1 className="heading-1 text-slate-900 mb-6">
                永不休息、<br />
                <span className="text-gradient-primary">从不出错</span>的会计师
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                资深会计师团队，由AI赋能。零税务意外，当日回复，告别最后一刻的混乱。
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/contact" className="btn-primary">
                  立即开始 <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#pricing" className="btn-secondary">
                  查看定价
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">5.0 · 78条评价</span>
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-bold text-slate-900">1,000+</span> 企业信赖
                </div>
              </div>
            </div>

            {/* Right - AI Dashboard mockup */}
            <div ref={heroRef} className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                {/* Main dashboard card */}
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">
                        S
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Skrooge AI</div>
                        <div className="text-xs text-slate-500">财务概览</div>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  {/* Profit card */}
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 mb-4 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                    <p className="text-emerald-100 text-sm mb-1">本月利润</p>
                    <p className="text-3xl font-bold">
                      ¥{animatedStats.profit.toLocaleString()}
                    </p>
                    <p className="text-emerald-100 text-xs mt-2">利润率本季度增长20%</p>
                  </div>

                  {/* Growth metric */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs text-slate-500 mb-1">利润增长</p>
                      <p className="text-2xl font-bold text-emerald-600">+{animatedStats.growth}%</p>
                      <div className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${animatedStats.growth}%` }} />
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs text-slate-500 mb-1">增值税到期</p>
                      <p className="text-lg font-bold text-amber-600">2周内</p>
                      <p className="text-xs text-slate-400 mt-2">报告已准备就绪</p>
                    </div>
                  </div>

                  {/* AI message */}
                  <div className="bg-emerald-50 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm text-slate-700">
                      利润增长了27%。需要我为您分析原因吗？
                    </p>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 animate-float hidden lg:block">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="text-xs text-slate-500">对账完成</p>
                      <p className="text-sm font-semibold text-slate-900">98% 自动化</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 animate-float-delayed hidden lg:block">
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="text-xs text-slate-500">下次申报</p>
                      <p className="text-sm font-semibold text-slate-900">14天后</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-16 lg:py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20" />
        <div className="container-page relative text-center">
          <h2 className="heading-2 text-white mb-4">看看Skrooge如何运作</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            90秒了解：你的会计团队，以及背后的AI平台。
          </p>
          <div className="relative max-w-4xl mx-auto group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Skrooge演示"
                className="w-full h-[300px] lg:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries / Built For */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="适用行业"
            title="为阿联酋企业而生"
            subtitle="喜欢干净账目和严谨流程的阿联酋企业"
            center
          />

          {/* Industry tags marquee */}
          <div className="overflow-hidden mb-12 relative">
            <div className="flex gap-3 animate-marquee whitespace-nowrap">
              {[...allIndustries, ...allIndustries].map((industry, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-600 shrink-0"
                >
                  {industry}
                </span>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>

          {/* Industry cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] || ShoppingBag;
              return (
                <Link
                  key={industry.name}
                  to="/contact"
                  className="group card-hover rounded-2xl overflow-hidden border border-slate-100 bg-white"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={industry.image} alt={industry.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 text-emerald-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-slate-600">{industry.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">不确定你属于哪一类？</p>
            <Link to="/contact" className="btn-primary">
              预约免费咨询 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="客户评价"
            title="企业家的信赖之选"
            subtitle="来自和你一样的企业的成功故事"
            center
          />

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 lg:p-12">
              <Quote className="w-12 h-12 text-emerald-100 mb-6" />
              <p className="text-lg lg:text-xl text-slate-700 leading-relaxed mb-8 min-h-[120px]">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">{testimonials[activeTestimonial].name}</p>
                  <p className="text-sm text-slate-500">{testimonials[activeTestimonial].title}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    className="w-10 h-10 rounded-full bg-slate-50 hover:bg-emerald-50 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-600" />
                  </button>
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                    className="w-10 h-10 rounded-full bg-slate-50 hover:bg-emerald-50 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === activeTestimonial ? 'w-8 bg-emerald-600' : 'w-2 bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Google rating */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <div className="bg-white rounded-xl border border-slate-100 px-6 py-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-sm font-bold text-slate-700">G</div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-slate-900">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-500">基于78条Google评价</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Your Needs Covered */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="全面覆盖"
            title="满足你的一切需求"
            subtitle="我们打理一切，让你无需操心"
            center
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '会计服务',
                desc: '我们构建准确的月度财务报告，围绕你企业的实际运营方式。',
                icon: Calculator,
                link: '/accounting',
              },
              {
                title: '税务服务',
                desc: '我们正确及时地处理税务准备和申报，让你保持合规并避免罚款。',
                icon: Receipt,
                link: '/tax',
              },
              {
                title: '其他服务',
                desc: '超越日常会计——通过我们审核的合作伙伴网络处理审计、清算和银行开户等关键一次性需求。',
                icon: Briefcase,
                link: '/other',
              },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group card-hover rounded-3xl border border-slate-100 p-8 bg-gradient-to-b from-white to-slate-50/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-emerald-600 font-medium text-sm group-hover:gap-2 transition-all">
                  了解更多 <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Team */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeading
                eyebrow="专业团队"
                title="专属会计团队"
                subtitle="好的决策来自干净的数字。快速的决策来自随时可用的数字。"
              />
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                你将与一位了解你企业的特许会计师合作——由Skrooge AI CFO提供支持，它轻松地分类、对账、申报和提醒。
              </p>
              <Link to="/contact" className="btn-primary">
                与会计团队交流 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {teamMembers.slice(0, 6).map((member) => (
                <div key={member.name} className="card-hover rounded-2xl border border-slate-100 bg-white p-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-emerald-700 font-bold text-lg mb-3">
                    {member.name.charAt(0)}
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm">{member.name}</h4>
                  <p className="text-xs text-emerald-600 mb-2">{member.role}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skrooge Advantage */}
      <section className="section-padding bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-20 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />
        </div>
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Skrooge优势"
            title="为什么选择Skrooge"
            light
            center
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advantages.map((adv, i) => {
              const Icon = iconMap[adv.icon] || MailCheck;
              return (
                <div
                  key={i}
                  className="glass-dark rounded-3xl p-8 card-hover"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{adv.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{adv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-padding bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="透明定价"
            title="清晰定价。没有套路。没有意外。"
            subtitle="会计与税务套餐按月度交易量定价。"
            center
          />

          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-slate-50 rounded-2xl p-5 text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-900">一笔交易 = 一行银行对账单</strong>
              （不含银行手续费）。对于支付网关和市场平台（如Amazon、Stripe），每10行算1笔交易。
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-b from-white to-emerald-50/30 rounded-3xl border-2 border-emerald-200 shadow-xl p-8 lg:p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-600 text-white text-xs font-semibold rounded-bl-xl">
                推荐
              </div>

              <p className="text-slate-500 text-sm mb-2">月起价</p>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-5xl font-bold text-slate-900">¥799</span>
                <span className="text-slate-500">/月</span>
              </div>
              <p className="text-xs text-slate-400 mb-8">按季度结算 · 不含增值税</p>

              <Link to="/contact" className="btn-primary w-full mb-8">
                立即开始 <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="text-left space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-emerald-600" /> 会计服务
                  </h4>
                  <ul className="space-y-2">
                    {pricingIncludes.accounting.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-emerald-600" /> 税务服务
                  </h4>
                  <ul className="space-y-2">
                    {pricingIncludes.tax.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-emerald-600" /> 运营支持
                  </h4>
                  <ul className="space-y-2">
                    {pricingIncludes.operational.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container-page relative text-center">
          <h2 className="heading-2 text-white mb-6">
            你经营企业。<br />Skrooge管理账簿。
          </h2>
          <p className="text-emerald-50 text-lg mb-10 max-w-2xl mx-auto">
            加入1,000+信赖Skrooge的阿联酋企业。AI驱动的会计，零税务意外。
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-emerald-700 font-bold text-lg hover:shadow-2xl transition-all active:scale-95">
            免费咨询 <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
