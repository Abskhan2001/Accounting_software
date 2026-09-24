interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-3xl mb-12`}>
      {eyebrow && (
        <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 ${
          light ? 'bg-white/10 text-emerald-300' : 'bg-emerald-50 text-emerald-600'
        }`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`heading-2 ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
