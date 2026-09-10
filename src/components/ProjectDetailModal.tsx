import { Project } from '../types';
import { X, AlertCircle, Search, Clock, CheckCircle, Lightbulb, Calendar, MapPin, Play, ExternalLink } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenLiveDemo?: (project: Project) => void;
}

export default function ProjectDetailModal({ project, onClose, onOpenLiveDemo }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-900/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#fafaf9] border-b border-neutral-200 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="font-bold text-neutral-900 uppercase">
                {project.number}
              </span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-500 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.period}
              </span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-700 bg-neutral-200/80 px-2 py-0.5 rounded flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {project.organization}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight break-keep">
              {project.title}
            </h2>
            <p className="text-sm text-neutral-600 break-keep">
              {project.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {project.hasLiveDemo && (
              <a
                href={project.liveDemoUrl || '/market_channel_kpi.html'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-md transition-colors shadow-xs"
                title="새 탭에서 라이브 데모 열기"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200/70 rounded-full transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
            {project.keyHighlights.map((hl, idx) => (
              <div key={idx}>
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">
                  {hl.label}
                </span>
                <span className="text-sm font-bold text-neutral-900">
                  {hl.value}
                </span>
              </div>
            ))}
          </div>

          {/* Problem */}
          <div className="p-5 rounded-xl border border-red-200 bg-red-50/40 space-y-2">
            <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider font-mono">
              <AlertCircle className="w-4 h-4" />
              <span>Problem Statement (문제 정의)</span>
            </div>
            <p className="text-sm sm:text-base text-neutral-800 leading-relaxed whitespace-pre-line break-keep">
              {project.problem}
            </p>
          </div>

          {/* Analysis if present */}
          {project.analysis && (
            <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/40 space-y-2">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider font-mono">
                <Search className="w-4 h-4" />
                <span>Data Analysis (데이터 분석 및 선별 기준)</span>
              </div>
              <p className="text-sm sm:text-base text-neutral-800 leading-relaxed whitespace-pre-line break-keep">
                {project.analysis}
              </p>
            </div>
          )}

          {/* Action */}
          <div className="p-5 rounded-xl border border-sky-200 bg-sky-50/40 space-y-2">
            <div className="flex items-center gap-2 text-sky-800 font-bold text-xs uppercase tracking-wider font-mono">
              <Clock className="w-4 h-4" />
              <span>Action Taken (실행 및 해결 과정)</span>
            </div>
            <p className="text-sm sm:text-base text-neutral-800 leading-relaxed whitespace-pre-line break-keep">
              {project.action}
            </p>
          </div>

          {/* Result if present */}
          {project.result && (
            <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider font-mono">
                <CheckCircle className="w-4 h-4" />
                <span>Result & Impact (결과 및 확장 적용)</span>
              </div>
              <p className="text-sm sm:text-base text-neutral-800 leading-relaxed whitespace-pre-line break-keep">
                {project.result}
              </p>
            </div>
          )}

          {/* Workflow Steps */}
          {project.processSteps && (
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                전체 실행 단계
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 bg-white rounded-lg border border-neutral-200 space-y-1"
                  >
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      STEP {step.step}
                    </span>
                    <h4 className="text-sm font-bold text-neutral-900">
                      {step.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What I Learned */}
          <div className="p-5 rounded-xl bg-neutral-900 text-white space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider font-mono">
              <Lightbulb className="w-4 h-4" />
              <span>What I Learned (핵심 배운 점)</span>
            </div>
            <p className="text-sm sm:text-base text-neutral-100 leading-relaxed break-keep">
              &ldquo;{project.learned}&rdquo;
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-[#fafaf9] border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded"
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
                className="px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-md hover:bg-emerald-700 transition-colors flex items-center gap-1.5 shadow-xs"
                title="새 탭에서 라이브 데모 열기"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Live Demo 새 탭에서 열기</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 bg-neutral-900 text-white text-xs font-semibold rounded-md hover:bg-neutral-800 transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
