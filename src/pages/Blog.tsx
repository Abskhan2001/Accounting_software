import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { blogPosts } from '@/data/content';

export default function Blog() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white pt-16 pb-12">
        <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <h1 className="heading-1 text-slate-900 mb-6">Skrooge博客</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            阿联酋会计、税务和合规的最新洞察、指南和分析。
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="pb-12 bg-white">
        <div className="container-page">
          <Link to="/blog" className="group block rounded-3xl overflow-hidden border border-slate-100 card-hover">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold">
                  精选文章
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 font-medium">{blogPosts[0].category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{blogPosts[0].date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                <span className="inline-flex items-center gap-1 text-emerald-600 font-medium group-hover:gap-2 transition-all">
                  阅读全文 <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <SectionHeading eyebrow="所有文章" title="最新文章" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.title} to="/blog" className="group card-hover rounded-2xl overflow-hidden border border-slate-100 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-emerald-600">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3 mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium group-hover:gap-2 transition-all">
                    阅读更多 <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
