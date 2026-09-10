import { PERSONAL_INFO, ABOUT_ME, COMPETENCIES, EXPERIENCES, EDUCATION, TRAININGS, CERTIFICATIONS, PROJECTS, CAREER_GOAL } from '../data/portfolioData';
import { Printer, X, Download } from 'lucide-react';

interface PrintResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrintResumeModal({ isOpen, onClose }: PrintResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-neutral-900/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-neutral-300 overflow-hidden my-6 flex flex-col max-h-[92vh]">
        {/* Modal Action Bar (Hidden during actual print) */}
        <div className="p-4 bg-neutral-900 text-white flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <Printer className="w-4 h-4 text-emerald-400" />
            <span className="text-xs sm:text-sm font-semibold">
              이력서 및 포트폴리오 요약서 (인쇄 / PDF 전용 모드)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded text-xs font-bold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>인쇄 / PDF 저장</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content (Styled for standard document reading) */}
        <div className="p-8 sm:p-12 overflow-y-auto font-sans text-neutral-900 space-y-8 print:p-0 print:m-0 print:overflow-visible">
          {/* Document Header */}
          <div className="border-b-2 border-neutral-900 pb-6">
            <div className="flex justify-between items-baseline">
              <div>
                <h1 className="text-3xl font-black tracking-tight text-neutral-900">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-neutral-600 mt-1">
                  {PERSONAL_INFO.role} 지원자
                </p>
              </div>
              <div className="text-right text-xs font-mono space-y-0.5 text-neutral-600">
                <p>이메일: {PERSONAL_INFO.email}</p>
                <p>전공: 서일대학교 세무회계학과 졸업</p>
                <p>상태: {PERSONAL_INFO.status}</p>
              </div>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium bg-neutral-100 p-3 rounded">
              &ldquo;{PERSONAL_INFO.tagline}&rdquo;
            </p>
          </div>

          {/* 1. Education & Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-400 pb-1 mb-2">
                1. 학력 (Education)
              </h2>
              <div className="text-xs space-y-1">
                <div className="flex justify-between font-bold text-neutral-900">
                  <span>{EDUCATION.school} {EDUCATION.major}</span>
                  <span>{EDUCATION.status}</span>
                </div>
                <p className="text-neutral-500 font-mono">{EDUCATION.period}</p>
                <p className="text-neutral-600 pt-1 leading-snug">{EDUCATION.description}</p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-400 pb-1 mb-2">
                2. 공인 자격 (Certifications)
              </h2>
              <div className="text-xs space-y-2">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="flex justify-between items-start">
                    <div>
                      <span className="font-bold text-neutral-900">{cert.name}</span>
                      <span className="text-[10px] text-neutral-500 block font-mono">
                        {cert.issuer} ({cert.level})
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
                      {cert.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Specialized Training */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-400 pb-1 mb-2">
              3. 전문 실무 교육 (Specialized Training)
            </h2>
            <div className="space-y-2 text-xs">
              {TRAININGS.map((tr, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between pb-2 border-b border-neutral-100 last:border-none">
                  <div>
                    <span className="font-bold text-neutral-900">{tr.name}</span>
                    <span className="text-neutral-500 ml-2">({tr.institution})</span>
                    <div className="text-neutral-600 mt-0.5">
                      {tr.courses.join(' / ')}
                    </div>
                  </div>
                  <span className="text-neutral-400 font-mono text-[11px] self-start sm:self-auto">
                    {tr.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Core Competencies */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-400 pb-1 mb-2">
              4. 핵심 역량 (Core Competencies)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {COMPETENCIES.map((c) => (
                <div key={c.number} className="p-2.5 bg-neutral-50 rounded border border-neutral-200">
                  <div className="font-bold text-neutral-900 mb-1">
                    {c.number}. {c.title}
                  </div>
                  <p className="text-neutral-700 leading-snug">{c.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Experience */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-400 pb-1 mb-2">
              5. 주요 경력 사항 (Work Experience)
            </h2>
            <div className="space-y-4 text-xs">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="pb-3 border-b border-neutral-100 last:border-none">
                  <div className="flex justify-between font-bold text-neutral-900">
                    <span>{exp.company} ({exp.role})</span>
                    <span className="font-mono text-neutral-500">{exp.period}</span>
                  </div>
                  <ul className="mt-1.5 space-y-1 text-neutral-700 list-disc list-inside">
                    {exp.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Key Projects */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-400 pb-1 mb-2">
              6. 주요 개선 프로젝트 (Key Case Studies)
            </h2>
            <div className="space-y-4 text-xs">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3 bg-neutral-50 rounded border border-neutral-200 space-y-1.5">
                  <div className="flex justify-between font-bold text-neutral-900">
                    <span>[{proj.number}] {proj.title}</span>
                    <span className="font-mono text-neutral-500">{proj.organization} | {proj.period}</span>
                  </div>
                  <p className="text-neutral-700">
                    <strong>문제:</strong> {proj.problem.replace(/\n/g, ' ')}
                  </p>
                  <p className="text-neutral-700">
                    <strong>실행:</strong> {proj.action.replace(/\n/g, ' ')}
                  </p>
                  {proj.result && (
                    <p className="text-neutral-800 font-medium">
                      <strong>결과:</strong> {proj.result.replace(/\n/g, ' ')}
                    </p>
                  )}
                  <p className="text-neutral-600 italic">
                    <strong>배운 점:</strong> {proj.learned}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Career Goal */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-400 pb-1 mb-2">
              7. 입사 후 포부 (Career Goal)
            </h2>
            <div className="text-xs text-neutral-700 space-y-1 leading-relaxed">
              <p>• <strong>단기:</strong> {CAREER_GOAL.shortTerm.detail}</p>
              <p>• <strong>중기:</strong> {CAREER_GOAL.midTerm.detail}</p>
              <p>• <strong>장기:</strong> {CAREER_GOAL.longTerm.detail}</p>
            </div>
          </div>
        </div>

        {/* Modal Close Footer */}
        <div className="p-4 bg-neutral-100 border-t border-neutral-200 flex justify-end gap-2 print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 text-xs font-medium rounded transition-colors"
          >
            닫기
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded flex items-center gap-1.5 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            인쇄 / PDF 출력
          </button>
        </div>
      </div>
    </div>
  );
}
