import { EDUCATION, TRAININGS } from '../data/portfolioData';
import { GraduationCap, BookOpen, CheckCircle } from 'lucide-react';

export default function EducationTrainingSection() {
  return (
    <section id="education" className="py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Index */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
          <span>/ 05</span>
          <span className="text-neutral-900 font-semibold">Education & Training</span>
          <span className="h-[1px] w-12 bg-neutral-300 inline-block" />
          <span>학력 및 전문 실무 교육</span>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            학력 및 전문 교육 이수
          </h2>
          <p className="text-neutral-600 mt-2 text-base max-w-2xl break-keep">
            세무회계학과에서 기초 이론을 다진 후, 최신 전산세무 및 TAT 1급 등 전문 교육 과정을 통해 실무 프로그램 운용 역량을 심화했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Card */}
          <div className="lg:col-span-5 bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-900">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-medium text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded">
                  {EDUCATION.status}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                  University Degree
                </span>
                <h3 className="text-2xl font-bold text-neutral-900">
                  {EDUCATION.school}
                </h3>
                <p className="text-base font-semibold text-neutral-700">
                  {EDUCATION.major}
                </p>
                <p className="text-xs text-neutral-500 font-mono mt-1">
                  {EDUCATION.period}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <p className="text-sm text-neutral-700 leading-relaxed break-keep">
                  {EDUCATION.description}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 mt-6 flex items-center gap-2 text-xs text-neutral-500 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>세무·회계 기본 이론 체계화</span>
            </div>
          </div>

          {/* Specialized Training Courses */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Professional Academy Courses
              </span>
              <span className="text-xs font-mono text-neutral-500">KD아카데미</span>
            </div>

            <div className="space-y-4">
              {TRAININGS.map((train, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-neutral-200 rounded-xl p-6 hover:border-neutral-300 transition-colors space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-neutral-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-800">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-neutral-900">
                          {train.name}
                        </h4>
                        <span className="text-xs text-neutral-500 font-mono">
                          {train.institution}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded self-start sm:self-center">
                      {train.period}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                      이수 교과목 및 핵심 과정
                    </span>
                    <ul className="space-y-1.5 text-sm text-neutral-800">
                      {train.courses.map((course, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
