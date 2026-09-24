import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, Star } from 'lucide-react';

const serviceDetails: Record<string, Record<string, { title: string; subtitle: string; features: string[]; desc: string }>> = {
  accounting: {
    bookkeeping: {
      title: '记账服务',
      subtitle: '专业的记账服务，确保你的财务记录准确无误',
      features: ['交易采集与分类', '银行对账', '应收应付账款管理', '月度财务报告', '科目余额表', '总账维护'],
      desc: '我们使用AI自动采集和分类你的所有交易，然后由专业会计师验证和对账，确保每笔交易都准确记录。每月生成损益表、现金流量表和资产负债表。',
    },
    payroll: {
      title: '薪资管理',
      subtitle: '准确的薪资计算与遣散费管理，确保合规无忧',
      features: ['月度薪资计算', '遣散费计算', '社保与福利管理', '薪资单生成', '员工档案管理', '劳工法合规'],
      desc: '我们处理所有与薪资相关的计算和管理，包括阿联酋劳工法下的遣散费计算、加班费、津贴和扣款。确保每次发薪都准确合规。',
    },
    'invoice-automation': {
      title: '发票自动化',
      subtitle: '自动从邮箱抓取发票，减少手动输入和错误',
      features: ['自动发票采集', 'OCR识别与数据提取', '供应商匹配', '审批流程自动化', '付款提醒', '电子归档'],
      desc: 'Skrooge AI自动从你的邮箱中抓取发票，使用OCR技术提取关键信息，自动匹配供应商和科目。减少90%的手动输入工作。',
    },
    'backlog-accounting': {
      title: '积压账务处理',
      subtitle: '快速清理积压的账务，让您的财务回到正轨',
      features: ['历史交易整理', '银行对账回溯', '缺失凭证补全', '财务报告重建', '税务申报补办', '合规差距修复'],
      desc: '如果你的账务积压了数月甚至数年，我们可以快速帮你清理和重建。从历史交易整理到补办税务申报，让你的财务完全合规。',
    },
  },
  tax: {
    'vat-filing': {
      title: '增值税申报',
      subtitle: '确保你的增值税申报准确及时，避免罚款',
      features: ['增值税注册', '季度申报表准备', '进项税额验证', '销项税额计算', 'FTA联络与对账', '退税申请'],
      desc: '我们全面管理你的增值税义务，从注册到季度申报。跟踪所有截止日期，确保申报表准确无误，避免FTA罚款。',
    },
    'corporate-tax-filing': {
      title: '企业税申报',
      subtitle: '阿联酋9%企业税的全面合规服务',
      features: ['企业税注册', '年度申报表准备', '应纳税额计算', '小企业减免申请', '自由区税收优惠', '转让定价合规'],
      desc: '阿联酋企业税的新时代，我们确保你完全合规。包括税率计算、减免申请和申报表提交。利用所有可用的减免和优惠，优化你的税务负担。',
    },
    'tax-advisory': {
      title: '税务咨询',
      subtitle: '专业的阿联酋税务建议，帮助你优化税务结构',
      features: ['税务结构规划', '自由区税务策略', '跨境税务咨询', '并购税务建议', 'FTA争议处理', '税务健康检查'],
      desc: '我们的税务专家提供个性化的阿联酋税务建议，帮助你做出明智的税务决策。从结构规划到争议处理，全方位支持。',
    },
  },
  other: {
    'bank-account': {
      title: '银行开户',
      subtitle: '协助你在阿联酋开设企业银行账户',
      features: ['银行选择建议', '文件准备与审核', '申请流程指导', '面谈准备', '账户激活支持', '网银设置'],
      desc: '在阿联酋开设企业银行账户可能复杂耗时。我们简化整个过程，从选择合适的银行到准备所有必需文件，确保顺利开户。',
    },
    audit: {
      title: '审计',
      subtitle: '通过合作伙伴网络提供专业审计服务',
      features: ['财务报表审计', '合规审计', '内部审计', '专项审计', '审计报告', '管理建议书'],
      desc: '通过我们审核的合作伙伴网络，提供符合阿联酋和国际审计标准的专业审计服务。满足你的合规要求和投资者需求。',
    },
    liquidation: {
      title: '公司清算',
      subtitle: '专业的公司清算服务，确保合规完成',
      features: ['清算流程规划', '资产清算与分配', '债权人通知', '员工遣散处理', '税务清算', '最终清算报告'],
      desc: '公司清算涉及多个法律和财务步骤。我们确保整个过程合规完成，从资产清算到债权人通知，再到最终的清算报告。',
    },
  },
};

export default function ServiceDetail({ category, slug }: { category: string; slug?: string }) {
  const params = useParams();
  const serviceSlug = slug || params.slug;
  const detail = serviceDetails[category]?.[serviceSlug || ''];

  if (!detail) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">页面未找到</h1>
          <Link to="/" className="btn-primary">返回首页</Link>
        </div>
      </div>
    );
  }

  const categoryLabels: Record<string, string> = {
    accounting: '会计服务',
    tax: '税务服务',
    other: '其他服务',
  };
  const categoryPaths: Record<string, string> = {
    accounting: '/accounting',
    tax: '/tax',
    other: '/other',
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white pt-16 pb-16">
        <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link to={categoryPaths[category]} className="hover:text-emerald-600 transition-colors">{categoryLabels[category]}</Link>
            <span>/</span>
            <span className="text-slate-700">{detail.title}</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-sm text-slate-500">5.0 · 78条评价</span>
            </div>
            <h1 className="heading-1 text-slate-900 mb-6">{detail.title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">{detail.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">立即开始 <ArrowRight className="w-4 h-4" /></Link>
              <Link to={categoryPaths[category]} className="btn-secondary">
                <ArrowLeft className="w-4 h-4" /> 返回{categoryLabels[category]}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-3 text-slate-900 mb-6">服务概述</h2>
              <p className="text-slate-600 text-lg leading-relaxed">{detail.desc}</p>
            </div>
            <div>
              <h2 className="heading-3 text-slate-900 mb-6">包含内容</h2>
              <div className="space-y-3">
                {detail.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-medium pt-1">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-center">
        <div className="container-page">
          <h2 className="heading-2 text-white mb-6">准备好开始了吗？</h2>
          <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">
            立即联系我们，获取免费咨询和定制化方案。
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-emerald-700 font-bold text-lg hover:shadow-2xl transition-all active:scale-95">
            免费咨询 <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
