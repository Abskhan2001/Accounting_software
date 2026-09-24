import { Link } from 'react-router-dom';
import {
  ArrowRight, Sparkles, Target, Heart, Zap, Users, Award, TrendingUp, Check,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { teamMembers } from '@/data/content';

const beliefs = [
  '为会计师支付高额费用却仍被FTA罚款',
  '收到延迟数月的财务报告，数字还对不起',
  '等好几天才收到会计师回复的冗长法律条文或令人困惑的财务术语',
  '不得不追着会计师问"等等，那个什么时候到期？"',
];

const values = [
  { title: 'AI赋能', desc: '用人工智能自动化重复性工作，让会计师专注于真正重要的事。', icon: Zap },
  { title: '专业团队', desc: '由特许会计师和税务专家组成，平均10年以上行业经验。', icon: Users },
  { title: '透明定价', desc: '清晰的价格，没有隐藏费用，没有意外账单。', icon: Award },
  { title: '快速响应', desc: '4个工作小时内回复，绝不让等待成为问题。', icon: TrendingUp },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white pt-16 pb-16">
        <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container-page relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">关于Skrooge</span>
          </div>
          <h1 className="heading-1 text-slate-900 mb-6 max-w-3xl mx-auto">
            用AI和<span className="text-gradient-primary">人类专家</span>带来财务信心
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            我们相信，经营企业已经足够艰难，不需要再加上会计和税务合规的压力。
          </p>
        </div>
      </section>

      {/* What we believe */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeading
                eyebrow="我们的信念"
                title="作为客户，你不应该..."
              />
              <div className="space-y-4">
                {beliefs.map((belief, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                      <span className="text-red-500 text-xl">✕</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed pt-1.5">{belief}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="我们的解决方案"
                title="Skrooge的做法"
              />
              <div className="space-y-4">
                {[
                  { title: 'AI驱动的自动化', desc: '自动采集、分类和对账，减少人为错误。' },
                  { title: '实时财务报告', desc: '月度报告按时交付，数字准确无误。' },
                  { title: '4小时响应承诺', desc: '工作时间内4个工作小时回复，用你能理解的语言。' },
                  { title: '智能截止日期追踪', desc: '自动跟踪所有税务和合规截止日期，提前提醒。' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <SectionHeading eyebrow="核心价值" title="我们坚持的原则" center />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl border border-slate-100 p-6 text-center card-hover">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="我们的团队"
            title="认识Skrooge团队"
            subtitle="资深会计师、税务专家和AI工程师，为你的企业保驾护航"
            center
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="card-hover rounded-2xl border border-slate-100 bg-white p-5 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-emerald-700 font-bold text-xl mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{member.name}</h4>
                <p className="text-xs text-emerald-600 mb-2">{member.role}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="container-page relative text-center">
          <Target className="w-12 h-12 text-white mx-auto mb-6" />
          <h2 className="heading-2 text-white mb-6">我们的使命</h2>
          <p className="text-emerald-50 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            让每一位阿联酋企业家都能获得世界级的会计和税务服务，AI让这一切变得更快、更准、更经济。
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-emerald-700 font-bold text-lg hover:shadow-2xl transition-all active:scale-95">
            加入我们 <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
