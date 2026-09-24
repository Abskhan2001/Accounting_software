import { Link } from 'react-router-dom';
import { ArrowRight, Landmark, ShieldCheck, Building, Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const services = [
  {
    title: '银行开户',
    desc: '协助你在阿联酋开设企业银行账户，简化繁琐的申请流程。',
    icon: Landmark,
    path: '/other/bank-account',
    features: ['银行选择建议', '文件准备与审核', '申请流程指导', '账户激活支持'],
  },
  {
    title: '审计',
    desc: '通过我们审核的合作伙伴网络提供专业审计服务，满足合规要求。',
    icon: ShieldCheck,
    path: '/other/audit',
    features: ['财务报表审计', '合规审计', '内部审计', '审计报告准备'],
  },
  {
    title: '公司清算',
    desc: '专业的公司清算服务，确保合规完成所有法律和财务义务。',
    icon: Building,
    path: '/other/liquidation',
    features: ['清算流程规划', '资产清算与分配', '债权人通知', '最终清算报告'],
  },
];

export default function Other() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white pt-12 lg:pt-16 pb-16">
        <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <div className="max-w-2xl">
            <h1 className="heading-1 text-slate-900 mb-6">
              其他<span className="text-gradient-primary">专业服务</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              超越日常会计——通过我们审核的合作伙伴网络处理审计、清算和银行开户等关键一次性需求。
            </p>
            <Link to="/contact" className="btn-primary">立即咨询 <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="服务范围" title="一次性专业服务" center />
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card-hover rounded-3xl border border-slate-100 overflow-hidden bg-white">
                <div className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.path} className="inline-flex items-center gap-1 text-emerald-600 font-medium text-sm hover:gap-2 transition-all">
                    了解更多 <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container-page text-center">
          <h2 className="heading-2 text-white mb-6">有特殊需求？</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            无论你需要审计、清算还是银行开户，我们的专业团队都能为你提供支持。
          </p>
          <Link to="/contact" className="btn-primary">免费咨询 <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
