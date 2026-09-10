import { useState, type FormEvent } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Check, Copy, ArrowUpRight, Printer, Sparkles, Send } from 'lucide-react';

interface ContactSectionProps {
  onOpenPrint: () => void;
}

export default function ContactSection({ onOpenPrint }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendDraft = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[채용 제안 / 면접 문의] ${inquiryCompany || '기업명'} - ${inquiryName || '담당자'}`);
    const body = encodeURIComponent(`안녕하세요, 안혜미 지원자님.\n\n${inquiryCompany}의 ${inquiryName}입니다.\n\n포트폴리오를 확인하고 연락드립니다.\n\n문의 내용:\n${inquiryMessage}\n\n연락처: `);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSentNotice(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Index */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
          <span>/ 08</span>
          <span className="text-neutral-900 font-semibold">Contact</span>
          <span className="h-[1px] w-12 bg-neutral-300 inline-block" />
          <span>채용 문의 및 연락처</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct info & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {PERSONAL_INFO.status}
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight break-keep">
                회계 · 경리 · 경영지원 직무의 기회를 찾고 있습니다.
              </h2>

              <p className="text-base text-neutral-600 leading-relaxed break-keep">
                수치와 증빙을 정확하게 검증하고, 프로세스 개선에 기여할 준비가 되어 있습니다. 면접 제안이나 문의 사항은 아래 이메일로 편하게 연락 주시면 신속하게 회신드리겠습니다.
              </p>
            </div>

            {/* Email Box */}
            <div className="p-6 bg-[#fafaf9] border border-neutral-200 rounded-xl space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Official Contact Email
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xl sm:text-2xl font-bold text-neutral-900 hover:text-neutral-700 underline decoration-neutral-300 underline-offset-4"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-neutral-300 text-neutral-800 rounded-md text-xs font-medium hover:bg-neutral-50 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">복사 완료</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>이메일 주소 복사</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=[채용 문의] 안혜미 포트폴리오를 확인하고 연락드립니다`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-md text-xs font-semibold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>메일 프로그램으로 열기</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenPrint}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-md text-xs font-medium transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>이력서 인쇄 / PDF 저장</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Quick In-page Email Drafter */}
          <div className="lg:col-span-6 bg-[#fafaf9] border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-neutral-200">
              <Sparkles className="w-4 h-4 text-neutral-800" />
              <h3 className="text-base font-bold text-neutral-900">
                빠른 메시지 / 면접 제안 작성
              </h3>
            </div>
            <p className="text-xs text-neutral-500">
              기본 정보를 입력하시면 작성하신 내용이 이메일 프로그램에 자동으로 세팅되어 전송됩니다.
            </p>

            <form onSubmit={handleSendDraft} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-neutral-700 block mb-1">
                    회사명 / 기관명
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryCompany}
                    onChange={(e) => setInquiryCompany(e.target.value)}
                    placeholder="예: (주)한국상사"
                    className="w-full text-xs px-3 py-2 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-neutral-700 block mb-1">
                    담당자 성함 / 부서
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="예: 인사담당 김팀장"
                    className="w-full text-xs px-3 py-2 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-neutral-700 block mb-1">
                  제안 직무 및 메시지
                </label>
                <textarea
                  rows={4}
                  required
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  placeholder="예: 회계/경리 담당자 채용 건으로 서류 검토 및 면접 일정 조율을 요청드립니다."
                  className="w-full text-xs p-3 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-900 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-md text-xs font-semibold transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>메일 작성창 열기 (sts06180@naver.com)</span>
              </button>

              {sentNotice && (
                <p className="text-xs text-emerald-700 text-center font-medium">
                  이메일 프로그램이 열렸습니다. 확인 후 전송해 주세요.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Minimal Editorial Footer */}
        <div className="mt-20 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            <span>© 2025–2026 AHN HYE MI. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center gap-4">
            <span>회계 · 경리 · 경영지원</span>
            <span>·</span>
            <span>SEOUL, KOREA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
