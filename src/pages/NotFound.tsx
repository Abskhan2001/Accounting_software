import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
      <div className="text-center px-4">
        <p className="text-8xl font-bold text-emerald-600 mb-4">404</p>
        <h1 className="text-2xl font-bold text-slate-900 mb-4">页面未找到</h1>
        <p className="text-slate-600 mb-8">您访问的页面不存在或已被移动。</p>
        <Link to="/" className="btn-primary">
          <Home className="w-4 h-4" /> 返回首页
        </Link>
      </div>
    </div>
  );
}
