import { CAREER_GOAL } from '../data/portfolioData';
import { Target, TrendingUp, Award, CheckCircle } from 'lucide-react';

export default function CareerGoalSection() {
  const phases = [
    {
      step: '01',
      period: '입사 직후 (단기)',
      icon: Target,
      data: CAREER_GOAL.shortTerm,
    },
    {
      step: '02',
      period: '업무 적응 및 확장 (중기)',
      icon: TrendingUp,
      data: CAREER_GOAL.midTerm,
    },
    {
      step: '03',
      period: '신뢰의 중심 (장기 비전)',
      icon: Award,
      data: CAREER_GOAL.longTerm,
    },
  ];

  return (
    <section id="career-goal" className="py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Index */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
          <span>/ 07</span>
          <span className="text-neutral-900 font-semibold">Career Goal</span>
          <span className="h-[1px] w-12 bg-neutral-300 inline-block" />
          <span>입사 후 포부 및 성장 로드맵</span>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            성장 로드맵 & 입사 후 포부
          </h2>
          <p className="text-neutral-600 mt-2 text-base max-w-2xl break-keep">
            기본적인 전표 및 증빙 검토부터 시작하여, 조직 전체가 믿고 의지할 수 있는 완성도 높은 회계·경영지원 실무자로 성장하겠습니다.
          </p>
        </div>

        {/* 3 Step Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {phases.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.step}
                className="bg-white border border-neutral-200 rounded-xl p-7 flex flex-col justify-between hover:border-neutral-400 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      PHASE {phase.step}
                    </span>
                    <span className="text-xs font-mono font-medium text-neutral-600 bg-neutral-100 px-2.5 py-0.5 rounded">
                      {phase.period}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-900 mb-3 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 break-keep">
                      {phase.data.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-700 leading-relaxed break-keep">
                    {phase.data.detail}
                  </p>

                  <div className="pt-4 border-t border-neutral-100 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                      구체적 실천 과제
                    </span>
                    <ul className="space-y-1.5 text-xs text-neutral-700">
                      {phase.data.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Quote Banner */}
        <div className="mt-12 p-8 bg-neutral-900 text-white rounded-2xl text-center max-w-4xl mx-auto space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Ultimate Goal
          </p>
          <blockquote className="text-xl sm:text-2xl font-bold tracking-tight text-white break-keep">
            &ldquo;숫자나 자료를 확인해야 할 때, 가장 먼저 믿고 맡길 수 있는 실무자가 되겠습니다.&rdquo;
          </blockquote>
          <p className="text-xs text-neutral-400 font-mono">
            회계·경리·경영지원 지원자 안혜미
          </p>
        </div>
      </div>
    </section>
  );
}
