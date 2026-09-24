import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, Shield, FileText, Landmark, Receipt, AlertCircle, Play } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { testimonials } from '@/data/content';

const taxServices = [
  { title: '增值税申报', desc: '我们确保你的增值税申报准确及时，避免罚款和合规风险。', icon: Receipt, path: '/tax/vat-filing' },
  { title: '企业税申报', desc: '阿联酋9%企业税的全面合规服务，包括计算、申报和咨询。', icon: Landmark, path: '/tax/corporate-tax-filing' },
  { title: '税务咨询', desc: '专业的阿联酋税务建议，帮助你优化税务结构和合规策略。', icon: Shield, path: '/tax-advisory' },
];

const complianceFeatures = [
  { title: '增值税合规', desc: '从注册到申报，全面管理你的增值税义务。我们跟踪截止日期，准备申报表，并与税务机关联络。' },
  { title: '企业税合规', desc: '阿联酋企业税的新时代，我们确保你完全合规。包括税率计算、减免申请和申报表提交。' },
  { title: '税务规划与优化', desc: '合理的税务结构规划，利用自由区优惠和小企业减免，优化你的税务负担。' },
  { title: '罚款预防与管理', desc: '主动监控合规状态，提醒即将到期的截止日期，避免 costly 罚款。' },
];

export default function Tax() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white pt-12 lg:pt-16 pb-16">
        <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-medium text-slate-700">5.0 · 78条Google评价</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-1 text-slate-900 mb-6">
                AI驱动的<br />
                <span className="text-gradient-primary">税务服务</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                我们正确及时地处理税务准备和申报，让你保持合规并避免罚款。从增值税到企业税，全面覆盖。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">立即开始 <ArrowRight className="w-4 h-4" /></Link>
                <a href="#features" className="btn-secondary">了解更多</a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">税务合规仪表板</p>
                    <p className="text-xs text-slate-500">实时监控</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: '增值税申报', status: '已完成', badge: 'bg-emerald-50 text-emerald-600' },
                    { label: '企业税申报', status: '进行中', badge: 'bg-amber-50 text-amber-600' },
                    { label: '税务咨询', status: '已安排', badge: 'bg-blue-50 text-blue-600' },
                    { label: '合规检查', status: '通过', badge: 'bg-emerald-50 text-emerald-600' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                      <span className="text-sm font-medium text-slate-700">{item.label}</span>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${item.badge}`}>{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="税务服务" title="全面的税务解决方案" center />
          <div className="grid md:grid-cols-3 gap-6">
            {taxServices.map((service) => (
              <Link key={service.path} to={service.path} className="group card-hover rounded-2xl border border-slate-100 p-8 bg-white">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-600 transition-colors">
                  <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">{service.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-emerald-600 font-medium text-sm group-hover:gap-2 transition-all">
                  了解更多 <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="section-padding bg-slate-50">
        <div className="container-page">
          <SectionHeading eyebrow="合规保障" title="税务合规全面覆盖" subtitle="从增值税到企业税，我们确保你的每一步都合规" center />
          <div className="grid md:grid-cols-2 gap-6">
            {complianceFeatures.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 p-8 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
              <AlertCircle className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="heading-3 text-slate-900 mb-4">逾期申报的代价很高</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              增值税逾期申报罚款可达AED 1,000，企业税逾期罚款更高。让Skrooge帮你避免这些不必要的成本。
            </p>
            <Link to="/contact" className="btn-primary">立即咨询 <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
