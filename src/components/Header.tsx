import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Check, Printer, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenPrint: () => void;
}

export default function Header({ onOpenPrint }: HeaderProps) {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // KST time
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Seoul',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTimeString(`${now.toLocaleTimeString('ko-KR', options)} [ KST · 서울 ]`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: '소개', href: '#about' },
    { label: '핵심역량', href: '#competencies' },
    { label: '프로젝트', href: '#projects' },
    { label: '경력', href: '#experience' },
    { label: '교육·자격', href: '#education' },
    { label: '목표', href: '#career-goal' },
    { label: '연락처', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#fafaf9]/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="flex items-center gap-4">
          <a href="#" className="group flex items-baseline gap-2">
            <span className="text-xl font-bold tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
              / PORTFOLIO
            </span>
          </a>

          {/* Time Badge (as seen in the reference image) */}
          <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-neutral-300 text-xs font-mono text-neutral-500">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{timeString || 'KST · 서울'}</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-neutral-950 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-neutral-900 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Quick Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenPrint}
            title="이력서 전용 보기 및 인쇄"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>인쇄 / PDF</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              copied
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-neutral-900 hover:bg-neutral-800 text-white'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>복사 완료!</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">이메일 복사</span>
                <span className="sm:hidden">이메일</span>
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-600 hover:text-neutral-900"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-[#fafaf9] px-6 py-4 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200 text-xs font-mono text-neutral-500">
            <span>{timeString}</span>
            <span className="text-emerald-700 font-semibold">{PERSONAL_INFO.status}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrint();
              }}
              className="flex-1 inline-flex justify-center items-center gap-1.5 py-2 text-xs font-medium text-neutral-700 bg-neutral-100 rounded-md"
            >
              <Printer className="w-3.5 h-3.5" />
              이력서 인쇄 / PDF
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex-1 inline-flex justify-center items-center gap-1.5 py-2 text-xs font-medium bg-neutral-900 text-white rounded-md"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              메일 보내기
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
