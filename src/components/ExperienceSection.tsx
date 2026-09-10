import { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Building2, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ExperienceSection() {
  const [filter, setFilter] = useState<'all' | 'data' | 'store'>('all');

  const filtered = EXPERIENCES.filter((exp) => {
    if (filter === 'data') return exp.skills.some((s) => s.includes('자료') || s.includes('엑셀') || s.includes('공문'));
    if (filter === 'store') return exp.skills.some((s) => s.includes('고객') || s.includes('매장') || s.includes('시재'));
    return true;
  });

  return (
    <section id="experience" className="py-20 border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Index */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
          <span>/ 04</span>
          <span className="text-neutral-900 font-semibold">Experience</span>
          <span className="h-[1px] w-12 bg-neutral-300 inline-block" />
          <span>현장 실무 및 아르바이트 이력</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              실무 경험 (Work Experience)
            </h2>
            <p className="text-neutral-600 mt-2 text-base max-w-2xl break-keep">
              다양한 현장에서 시재 관리, 재고 관리, 엑셀 자료 검토, 기부금 정산 및 고객 응대 업무를 완수했습니다.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-neutral-100 p-1 rounded-lg text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                filter === 'all'
                  ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              전체 이력 ({EXPERIENCES.length})
            </button>
            <button
              onClick={() => setFilter('data')}
              className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                filter === 'data'
                  ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              자료·행정 중심
            </button>
            <button
              onClick={() => setFilter('store')}
              className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                filter === 'store'
                  ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              시재·운영 중심
            </button>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-6">
          {filtered.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-[#fafaf9] border border-neutral-200 rounded-xl p-6 sm:p-8 hover:border-neutral-400 transition-all group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-neutral-200">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-neutral-950">
                      {exp.company}
                    </h3>
                    <span className="text-xs font-medium text-neutral-600 bg-neutral-200/80 px-2.5 py-0.5 rounded">
                      {exp.type}
                    </span>
                    {exp.highlightMetric && (
                      <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
                        {exp.highlightMetric}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-neutral-600">
                    {exp.role}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 bg-white px-3 py-1.5 rounded-md border border-neutral-200 self-start">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Tasks bullet list */}
              <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                    주요 수행 업무
                  </span>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-neutral-800 break-keep">
                        <CheckCircle2 className="w-4 h-4 text-neutral-500 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills/Tags */}
                <div className="lg:col-span-4 lg:border-l lg:border-neutral-200 lg:pl-6 space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                    적용 역량 & 키워드
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-medium text-neutral-700 bg-white border border-neutral-200 px-2.5 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
