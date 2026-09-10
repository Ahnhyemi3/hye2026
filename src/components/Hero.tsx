import { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Check, Copy, ArrowRight, ShieldCheck, Calculator, FileSpreadsheet, Sparkles } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Top Marker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-200 text-xs font-mono text-neutral-500 uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <span className="text-neutral-900 font-semibold">/ AN HYE MI</span>
            <span>·</span>
            <span>회계 · 경리 · 경영지원</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-neutral-800 font-medium">{PERSONAL_INFO.status}</span>
          </div>
        </div>

        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 items-start">
          {/* Left Column: Big Headline & Narrative */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-xs font-mono uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded">
                Portfolio 2025–2026
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-neutral-900 tracking-tight leading-[1.25] break-keep">
                숫자와 자료의 오류를 확인하고,{' '}
                <span className="text-neutral-500 underline decoration-neutral-300 underline-offset-8">
                  원인을 찾아 개선하는
                </span>{' '}
                실무자가 되겠습니다.
              </h1>
            </div>

            <div className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl space-y-4 break-keep">
              <p className="font-medium text-neutral-900">
                회계·경리·경영지원 분야를 목표로 하고 있습니다.
              </p>
              <p>
                세무회계학과에서 회계와 세무의 기초를 배웠으며, 다양한 현장 경험을 통해 시재 관리, 재고 관리, 자료 검토, 엑셀 자료 확인 및 고객 응대 등의 업무를 경험했습니다.
              </p>
              <p className="text-neutral-600 bg-neutral-100/70 p-4 rounded-lg border-l-4 border-neutral-900">
                &ldquo;단순히 주어진 업무를 처리하는 데 그치지 않고, 문제가 발생했을 때 원인을 확인하고 개선하는 것을 중요하게 생각합니다.&rdquo;
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 text-white rounded-md text-sm font-semibold hover:bg-neutral-800 transition-all group"
              >
                <span>프로젝트 및 개선 사례 보기</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white border border-neutral-300 text-neutral-800 rounded-md text-sm font-medium hover:bg-neutral-50 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">이메일 복사 완료</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-500" />
                    <span>sts06180@naver.com</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Spec Snapshot / Editorial Credentials Card */}
          <div className="lg:col-span-4 bg-white border border-neutral-200 rounded-xl p-6 sm:p-7 shadow-xs space-y-6">
            <div className="border-b border-neutral-100 pb-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                Candidate Profile
              </span>
              <h3 className="text-xl font-bold text-neutral-900">안혜미 (Ahn Hyemi)</h3>
              <p className="text-xs text-neutral-500 mt-0.5">서일대학교 세무회계학과 졸업</p>
            </div>

            {/* Core Badges */}
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5 text-neutral-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-mono block">자격증</span>
                  <span className="font-semibold text-neutral-900">
                    전산세무 1급 · 재경관리사 · 컴활 2급
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5 text-neutral-700">
                  <Calculator className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-mono block">전문 역량</span>
                  <span className="font-medium text-neutral-800">
                    시재 마감 검증, 전산 회계·세무, 전표 및 증빙 검토
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5 text-neutral-700">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-mono block">자료 분석 & 엑셀</span>
                  <span className="font-medium text-neutral-800">
                    150명 기부자 명단 대조, 수식 오류 검증, 영양성분 전수 조사
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5 text-neutral-700">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-mono block">현장 문제 해결력</span>
                  <span className="font-medium text-neutral-800">
                    1시간 단위 알람을 통한 마감 시재 오차 해소, 재고 결품 사전 예방
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Contact Footer */}
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-neutral-500 font-mono">연락처</span>
              <a
                href="mailto:sts06180@naver.com"
                className="font-medium text-neutral-900 hover:underline"
              >
                sts06180@naver.com
              </a>
            </div>
          </div>
        </div>

        {/* Editorial Footnote / Scroll Indicator */}
        <div className="pt-14 flex items-center justify-between text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            <span>탐색을 위해 아래로 스크롤하세요</span>
          </div>
          <span className="hidden sm:inline">ACCOUNTING & BUSINESS SUPPORT PORTFOLIO</span>
        </div>
      </div>
    </section>
  );
}
