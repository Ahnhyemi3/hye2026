import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Index */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
          <span>/ 06</span>
          <span className="text-neutral-900 font-semibold">Certifications</span>
          <span className="h-[1px] w-12 bg-neutral-300 inline-block" />
          <span>공인 자격 취득 내역</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              보유 공인 자격증
            </h2>
            <p className="text-neutral-600 mt-2 text-base max-w-2xl break-keep">
              회계, 세무 및 데이터 분석(컴퓨터활용능력)의 공인된 전문 지식을 검증받은 3대 핵심 자격증입니다.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4" />
            <span>국가공인 및 기술자격 보유</span>
          </div>
        </div>

        {/* 3 Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="bg-[#fafaf9] border border-neutral-200 rounded-xl p-7 flex flex-col justify-between hover:border-neutral-400 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 bg-white px-2 py-0.5 rounded border border-neutral-200">
                    {cert.category}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700">
                    {cert.level}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center mb-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-mono text-neutral-500">
                    발급기관: {cert.issuer}
                  </p>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed break-keep pt-2">
                  {cert.description}
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-200/80 mt-6 flex items-center gap-2 text-xs text-neutral-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>실무 투입 즉시 활용 가능</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
