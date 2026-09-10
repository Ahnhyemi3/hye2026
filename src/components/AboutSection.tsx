import { ABOUT_ME } from '../data/portfolioData';
import { Target, Search, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with Editorial Index */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
          <span>/ 01</span>
          <span className="text-neutral-900 font-semibold">About Me</span>
          <span className="h-[1px] w-12 bg-neutral-300 inline-block" />
          <span>자기소개 및 직무 적성</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Title & Pull Quote */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight break-keep">
              {ABOUT_ME.heading}
            </h2>

            <div className="p-6 bg-white border border-neutral-200 rounded-xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
                Work Philosophy
              </span>
              <p className="text-base sm:text-lg font-medium text-neutral-900 leading-snug break-keep">
                &ldquo;{ABOUT_ME.quote}&rdquo;
              </p>
              <p className="text-xs text-neutral-500 pt-2 border-t border-neutral-100">
                1원의 오차도 지나치지 않고 원인을 파악할 때까지 파고드는 꼼꼼함과 집중력
              </p>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed break-keep">
              {ABOUT_ME.paragraphs.map((paragraph, index) => (
                <p key={index} className={index === 2 ? 'font-medium text-neutral-900 bg-neutral-100/60 p-4 rounded-lg' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Values / Aptitude Triad */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white border border-neutral-200 rounded-lg space-y-2">
                <div className="w-7 h-7 rounded bg-neutral-100 flex items-center justify-center text-neutral-800">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-neutral-900">정밀한 수치 감각</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  거래 내역을 대조해 100% 정합성을 맞추는 데에서 일의 보람과 성취를 체감
                </p>
              </div>

              <div className="p-4 bg-white border border-neutral-200 rounded-lg space-y-2">
                <div className="w-7 h-7 rounded bg-neutral-100 flex items-center justify-center text-neutral-800">
                  <Search className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-neutral-900">원인 역추적 습관</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  결과에 안주하지 않고 어느 지점에서 오차가 났는지 단계를 쪼개어 확인
                </p>
              </div>

              <div className="p-4 bg-white border border-neutral-200 rounded-lg space-y-2">
                <div className="w-7 h-7 rounded bg-neutral-100 flex items-center justify-center text-neutral-800">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-neutral-900">실무 적응력</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  기초 이론(세무회계)과 풍부한 현장 경험(시재·재고·자료정리)의 유기적 결합
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
