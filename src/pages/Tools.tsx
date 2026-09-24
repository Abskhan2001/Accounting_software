import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, ClipboardCheck, TrendingUp } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { toolsList, accountingFlows } from '@/data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardCheck, Calculator, TrendingUp,
};

export default function Tools() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white pt-16 pb-16">
        <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <h1 className="heading-1 text-slate-900 mb-6">Skrooge工具</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            计算器、合规检查器和规划工具——<strong>免费在你的浏览器中使用</strong>。
          </p>
        </div>
      </section>

      {/* Compliance Suite */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 mb-12">
            <h2 className="text-2xl font-bold text-white mb-3">合规套件</h2>
            <p className="text-slate-300 mb-8 max-w-2xl">
              三个互联的工具——诊断合规差距、跟踪每个截止日期、计算逾期罚款的成本。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {toolsList[0].tools.map((tool) => {
                const Icon = iconMap[tool.icon] || ClipboardCheck;
                return (
                  <Link key={tool.path} to={tool.path} className="group glass-dark rounded-2xl p-6 card-hover">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="font-bold text-white mb-2">{tool.name}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">{tool.desc}</p>
                    <span className="inline-flex items-center gap-1 text-emerald-400 text-sm font-medium group-hover:gap-2 transition-all">
                      开始使用 <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Tax Calculators */}
          <div className="mb-12">
            <SectionHeading eyebrow="税务计算器" title="增值税和企业税——几秒内完成计算" />
            <div className="grid md:grid-cols-3 gap-6">
              {toolsList[1].tools.map((tool) => {
                const Icon = iconMap[tool.icon] || Calculator;
                return (
                  <Link key={tool.path} to={tool.path} className="group card-hover rounded-2xl border border-slate-100 p-6 bg-white">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                      <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{tool.name}</h3>
                    <p className="text-sm text-slate-600 mb-4">{tool.desc}</p>
                    <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium group-hover:gap-2 transition-all">
                      打开工具 <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Finance & HR */}
          <div className="mb-12">
            <SectionHeading eyebrow="财务与人力资源" title="规划你的资金跑道，了解你的义务" />
            <div className="grid md:grid-cols-3 gap-6">
              {toolsList[2].tools.map((tool) => {
                const Icon = iconMap[tool.icon] || TrendingUp;
                return (
                  <Link key={tool.path} to={tool.path} className="group card-hover rounded-2xl border border-slate-100 p-6 bg-white">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                      <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{tool.name}</h3>
                    <p className="text-sm text-slate-600 mb-4">{tool.desc}</p>
                    <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium group-hover:gap-2 transition-all">
                      打开工具 <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Accounting Flows */}
          <div>
            <SectionHeading eyebrow="会计流程" title="适用于每个阿联酋企业的会计流程" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {accountingFlows.map((flow) => (
                <Link key={flow.name} to="/contact" className="group flex items-center gap-4 p-5 rounded-xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-colors">
                    <span className="text-emerald-600 group-hover:text-white text-sm font-bold transition-colors">{flow.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 text-sm group-hover:text-emerald-600 transition-colors">{flow.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{flow.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container-page text-center">
          <h3 className="heading-3 text-slate-900 mb-4">需要合规或会计帮助？</h3>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            我们的团队每天都在帮助阿联酋企业管理税务申报、审计和营业执照续期。
          </p>
          <Link to="/contact" className="btn-primary">预约免费咨询 <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
