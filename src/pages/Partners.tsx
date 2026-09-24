import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileSpreadsheet, Cloud, Monitor, Landmark, Building } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { partners } from '@/data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen, FileSpreadsheet, Cloud, Monitor, Landmark, Building,
};

export default function Partners() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white pt-16 pb-16">
        <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container-page relative text-center">
          <h1 className="heading-1 text-slate-900 mb-6">合作伙伴</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            我们与行业领先的技术平台和机构合作，为客户提供最全面的服务。
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="合作伙伴网络" title="我们信赖的合作伙伴" center />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => {
              const Icon = iconMap[partner.icon] || BookOpen;
              return (
                <div key={partner.name} className="card-hover rounded-2xl border border-slate-100 p-8 bg-white text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{partner.name}</h3>
                  <p className="text-sm text-emerald-600">{partner.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container-page text-center">
          <h2 className="heading-2 text-white mb-6">成为我们的合作伙伴</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            如果你是技术平台、会计师事务所或专业服务机构，我们很乐意与你探讨合作机会。
          </p>
          <Link to="/contact" className="btn-primary">联系我们 <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
