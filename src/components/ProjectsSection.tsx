import { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { Clock, AlertCircle, Search, Lightbulb, CheckCircle, ArrowRight, BookOpen, Play, ExternalLink } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenLiveDemo: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject, onOpenLiveDemo }: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | string>('all');

  const filteredProjects = activeTab === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.id === activeTab);

  return (
    <section id="projects" className="py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Index */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
          <span>/ 03</span>
          <span className="text-neutral-900 font-semibold">Projects</span>
          <span className="h-[1px] w-12 bg-neutral-300 inline-block" />
          <span>현장 문제 해결 및 프로세스 개선 프로젝트</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              실무 개선 프로젝트 (Case Studies)
            </h2>
            <p className="text-neutral-600 mt-2 text-base max-w-2xl break-keep">
              단순히 반복되는 업무에 그치지 않고, 오류의 원인을 데이터와 단계별 분석으로 밝혀내고 실행 가능한 개선안을 적용한 실제 사례입니다.
            </p>
          </div>

          {/* Tab Filter */}
          <div className="flex items-center gap-2 bg-neutral-100 p-1.5 rounded-lg text-xs font-medium">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              전체 보기 ({PROJECTS.length})
            </button>
            {PROJECTS.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setActiveTab(proj.id)}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeTab === proj.id
                    ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {proj.number}
              </button>
            ))}
          </div>
        </div>

        {/* Project Case Studies List */}
        <div className="space-y-16">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-xs hover:border-neutral-300 transition-colors"
            >
              {/* Project Header Bar */}
              <div className="p-6 sm:p-8 border-b border-neutral-200 bg-[#fafaf9] flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-neutral-500 uppercase">
                      {project.number}
                    </span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-xs text-neutral-500 font-mono">
                      {project.period}
                    </span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-xs font-medium text-neutral-700 bg-neutral-200/70 px-2 py-0.5 rounded">
                      {project.organization}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight break-keep">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 break-keep">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {project.hasLiveDemo && (
                    <a
                      id={`btn-livedemo-${project.id}`}
                      href={project.liveDemoUrl || '/market_channel_kpi.html'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-semibold transition-all shadow-xs hover:shadow"
                      title="새 탭에서 라이브 데모 열기"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                    </a>
                  )}
                  <button
                    id={`btn-detail-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-md text-xs font-medium transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>전체 상세 보기</span>
                  </button>
                </div>
              </div>

              {/* Highlight Metrics Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 border-b border-neutral-200 bg-neutral-50 divide-x divide-y md:divide-y-0 divide-neutral-200">
                {project.keyHighlights.map((hl, i) => (
                  <div key={i} className="p-4 sm:p-5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                      {hl.label}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-neutral-900">
                      {hl.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Deep Case Breakdown: Problem / Analysis / Action / Result / Learned */}
              <div className="p-6 sm:p-8 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {/* Problem */}
                  <div className="p-5 sm:p-6 rounded-xl border border-red-200/80 bg-red-50/30 space-y-3">
                    <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>Problem (문제 정의)</span>
                    </div>
                    <p className="text-sm sm:text-base text-neutral-800 leading-relaxed whitespace-pre-line break-keep">
                      {project.problem}
                    </p>
                  </div>

                  {/* Analysis (if applicable) or Action */}
                  {project.analysis ? (
                    <div className="p-5 sm:p-6 rounded-xl border border-amber-200/80 bg-amber-50/30 space-y-3">
                      <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                        <Search className="w-4 h-4" />
                        <span>Analysis (원인 분석 및 데이터 필터링)</span>
                      </div>
                      <p className="text-sm sm:text-base text-neutral-800 leading-relaxed whitespace-pre-line break-keep">
                        {project.analysis}
                      </p>
                    </div>
                  ) : (
                    <div className="p-5 sm:p-6 rounded-xl border border-sky-200/80 bg-sky-50/30 space-y-3">
                      <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                        <Clock className="w-4 h-4" />
                        <span>Action (실행 방안: 1시간 단위 역추적)</span>
                      </div>
                      <p className="text-sm sm:text-base text-neutral-800 leading-relaxed whitespace-pre-line break-keep">
                        {project.action}
                      </p>
                    </div>
                  )}
                </div>

                {/* If analysis exists, show Action and Result on next row */}
                {project.analysis && (
                  <div className="p-5 sm:p-6 rounded-xl border border-sky-200/80 bg-sky-50/30 space-y-3">
                    <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                      <Clock className="w-4 h-4" />
                      <span>Action (실행 방안: 안내 메뉴판 제작 및 옵션 세분화)</span>
                    </div>
                    <p className="text-sm sm:text-base text-neutral-800 leading-relaxed whitespace-pre-line break-keep">
                      {project.action}
                    </p>
                  </div>
                )}

                {/* Result (if project-01 has explicit result) */}
                {project.result && (
                  <div className="p-5 sm:p-6 rounded-xl border border-emerald-200/80 bg-emerald-50/40 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Result (개선 결과 및 확장 적용)</span>
                    </div>
                    <p className="text-sm sm:text-base text-neutral-800 leading-relaxed whitespace-pre-line break-keep">
                      {project.result}
                    </p>
                  </div>
                )}

                {/* Process Steps Diagram */}
                {project.processSteps && (
                  <div className="pt-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
                      Process Workflow
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {project.processSteps.map((step) => (
                        <div
                          key={step.step}
                          className="p-4 bg-neutral-50 rounded-lg border border-neutral-200/70 space-y-1 relative"
                        >
                          <span className="text-xs font-mono font-bold text-neutral-400">
                            STEP {step.step}
                          </span>
                          <h4 className="text-sm font-bold text-neutral-900">
                            {step.title}
                          </h4>
                          <p className="text-xs text-neutral-600 leading-snug">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* What I Learned (Critical Takeaway) */}
                <div className="p-5 sm:p-6 rounded-xl bg-neutral-900 text-white space-y-2">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-mono uppercase tracking-wider font-semibold">
                    <Lightbulb className="w-4 h-4" />
                    <span>What I Learned (배운 점 및 시사점)</span>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-100 leading-relaxed break-keep">
                    &ldquo;{project.learned}&rdquo;
                  </p>
                </div>

                {/* Tag Chips & Footer Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-neutral-100">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.hasLiveDemo && (
                      <a
                        href={project.liveDemoUrl || '/market_channel_kpi.html'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300/80 rounded-md text-xs font-semibold transition-colors"
                        title="새 탭에서 라이브 데모 열기"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>{project.liveDemoTitle || 'Live Demo 실행'}</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 text-emerald-700" />
                      </a>
                    )}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-neutral-900 font-medium px-2 py-1.5 rounded hover:bg-neutral-100 transition-colors"
                    >
                      <span>상세 리포트 읽기</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
