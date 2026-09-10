import { COMPETENCIES } from '../data/portfolioData';
import { CheckCheck, Compass, FileText, Wrench } from 'lucide-react';

export default function CompetenciesSection() {
  const icons = [CheckCheck, Compass, FileText, Wrench];

  return (
    <section id="competencies" className="py-20 border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Index */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
          <span>/ 02</span>
          <span className="text-neutral-900 font-semibold">Core Competencies</span>
          <span className="h-[1px] w-12 bg-neutral-300 inline-block" />
          <span>핵심 실무 역량</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              실무에서 검증된 4가지 핵심 역량
            </h2>
            <p className="text-neutral-600 mt-2 text-base max-w-2xl break-keep">
              이론 지식에 머무르지 않고 실제 현장 업무 속에서 숫자와 자료를 다루며 입증한 실행 중심의 역량입니다.
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-400">
            PRACTICAL ABILITIES & EVIDENCE
          </span>
        </div>

        {/* 4 Competency Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {COMPETENCIES.map((comp, idx) => {
            const Icon = icons[idx] || CheckCheck;
            return (
              <div
                key={comp.number}
                className="group relative bg-[#fafaf9] border border-neutral-200 rounded-xl p-7 sm:p-8 hover:border-neutral-400 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header with Big Number & Category Badge */}
                  <div className="flex items-start justify-between pb-6 border-b border-neutral-200/80 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                          {comp.badge}
                        </span>
                        <h3 className="text-xl font-bold text-neutral-900">
                          {comp.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-4xl font-black tracking-tighter text-neutral-300 group-hover:text-neutral-900 transition-colors font-mono">
                      {comp.number}
                    </span>
                  </div>

                  {/* Core Prompt Content */}
                  <p className="text-base font-semibold text-neutral-900 leading-relaxed break-keep mb-3">
                    {comp.summary}
                  </p>

                  <p className="text-sm text-neutral-600 leading-relaxed break-keep mb-6">
                    {comp.details}
                  </p>
                </div>

                {/* Practical Examples */}
                <div className="pt-4 border-t border-neutral-200/60">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                    실무 적용 사례
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-700">
                    {comp.examples.map((ex, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
