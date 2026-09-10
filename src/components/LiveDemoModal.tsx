import React, { useState, useRef } from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  Upload, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  SlidersHorizontal,
  Info,
  Check
} from 'lucide-react';

interface LiveDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // State for Market Channel KPI custom file loading
  const [customIframeSrc, setCustomIframeSrc] = useState<string | null>(null);
  const [loadedFileName, setLoadedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // State for Cash Audit Simulation (Project 01)
  const [auditStep, setAuditStep] = useState<number>(0);
  const [selectedHour, setSelectedHour] = useState<number | null>(null);

  // State for Sugar Analyzer (Project 02)
  const [sugarThreshold, setSugarThreshold] = useState<number>(16);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Handle local file selection
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setCustomIframeSrc(blobUrl);
      setLoadedFileName(file.name);
    }
  };

  const resetMarketDemo = () => {
    if (customIframeSrc) {
      URL.revokeObjectURL(customIframeSrc);
    }
    setCustomIframeSrc(null);
    setLoadedFileName(null);
  };

  return (
    <div
      id="live-demo-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'live-demo-modal-backdrop') {
          onClose();
        }
      }}
    >
      <div 
        id="live-demo-modal-dialog"
        className="bg-white border border-neutral-200 rounded-2xl w-full max-w-5xl h-[92vh] max-h-[900px] flex flex-col shadow-2xl overflow-hidden"
      >
        {/* Modal Top Header Bar */}
        <div className="px-6 py-4 border-b border-neutral-200 bg-neutral-900 text-white flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-emerald-500 text-neutral-950 text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-neutral-950 animate-pulse"></span>
              Live Demo
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-400 font-mono">{project.number}</span>
                <span className="text-neutral-600">·</span>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {project.liveDemoTitle || project.title}
                </h3>
              </div>
              <p className="text-xs text-neutral-400 hidden sm:block">
                {project.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Always offer direct new-tab opening for all projects */}
            <a
              href={customIframeSrc || project.liveDemoUrl || '/market_channel_kpi.html'}
              target="_blank"
              rel="noopener noreferrer"
              title="새 브라우저 탭에서 전체화면으로 열기"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>새 탭에서 열기</span>
            </a>

            {project.demoType === 'market_channel_kpi' && (
              <>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  title="내 PC에 저장된 market_channel_kpi.html 파일 직접 열기"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors border border-neutral-700"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">내 파일 불러오기</span>
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept=".html,.htm"
                  className="hidden"
                />

                {loadedFileName && (
                  <button
                    onClick={resetMarketDemo}
                    title="기본 배포 버전으로 리셋"
                    className="p-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors ml-2"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Local file source indicator notification for transparency */}
        {project.localSourcePath && (
          <div className="px-6 py-2 bg-neutral-100 border-b border-neutral-200 flex flex-wrap items-center justify-between text-xs text-neutral-600 gap-2 shrink-0">
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis">
              <span className="font-semibold text-neutral-800 shrink-0">로컬 원본 연동:</span>
              <code className="bg-white px-2 py-0.5 rounded border border-neutral-300 font-mono text-[11px] text-neutral-700 truncate max-w-lg">
                {project.localSourcePath}
              </code>
              {loadedFileName && (
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">
                  현재 로드된 파일: {loadedFileName}
                </span>
              )}
            </div>
            <div className="text-[11px] text-neutral-500 hidden md:block">
              * 웹 브라우저 보안 격리로 인해 로컬 파일은 상단 [내 파일 불러오기]를 통해 즉시 교체 확인이 가능합니다.
            </div>
          </div>
        )}

        {/* Modal Main Body Content */}
        <div className="flex-1 overflow-y-auto bg-[#fafaf9] p-4 sm:p-6 flex flex-col">
          {/* 1. Market Channel KPI Demo */}
          {project.demoType === 'market_channel_kpi' && (
            <div className="flex-1 flex flex-col bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xs min-h-[500px]">
              <div className="px-4 py-2.5 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="ml-2 font-mono text-[11px] text-neutral-400">
                    {customIframeSrc ? `blob:${loadedFileName}` : '/market_channel_kpi.html'}
                  </span>
                </div>
                <span className="font-medium text-neutral-600">
                  강북 실습 1 · 성과 지표 대시보드
                </span>
              </div>
              <iframe
                title="Market Channel KPI Live Report"
                src={customIframeSrc || project.liveDemoUrl || '/market_channel_kpi.html'}
                className="w-full flex-1 border-0"
                style={{ minHeight: '560px' }}
              />
            </div>
          )}

          {/* 2. Cash Audit Simulation (Project 01) */}
          {project.demoType === 'cash_audit_simulation' && (
            <div className="space-y-6 max-w-4xl mx-auto w-full">
              <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-xs">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900">
                      1시간 단위 시재 마감 & 오차 역추적 인터랙티브 시뮬레이터
                    </h4>
                    <p className="text-xs text-neutral-600 mt-1">
                      마감 1회 확인 방식의 한계를 극복하고, 1시간 주기 검증으로 오차를 실시간 차단한 안혜미 실무자의 프로세스를 직접 시뮬레이션합니다.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setAuditStep(0);
                      setSelectedHour(null);
                    }}
                    className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 p-2 rounded hover:bg-neutral-100"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    다시 시뮬레이션
                  </button>
                </div>

                {/* Timeline Grid */}
                <div className="mb-6">
                  <div className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider mb-3">
                    시간대별 시재 점검 타임라인 (클릭하여 시간대별 검증 상태 확인)
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
                    {[
                      { hour: 11, label: '11:00 오픈', pos: '₩85,000', actual: '₩85,000', status: 'ok' },
                      { hour: 12, label: '12:00 점심', pos: '₩210,000', actual: '₩210,000', status: 'ok' },
                      { hour: 13, label: '13:00 피크', pos: '₩345,000', actual: '₩345,000', status: 'ok' },
                      { hour: 14, label: '14:00 교대', pos: '₩420,000', actual: '₩410,000', status: 'error' },
                      { hour: 15, label: '15:00 오후', pos: '₩490,000', actual: '₩480,000', status: 'pending' },
                      { hour: 16, label: '16:00 마감', pos: '₩615,000', actual: '₩605,000', status: 'pending' },
                    ].map((item) => {
                      const isSelected = selectedHour === item.hour;
                      const hasDiscrepancy = item.status === 'error';
                      return (
                        <button
                          key={item.hour}
                          onClick={() => {
                            setSelectedHour(item.hour);
                            if (item.hour === 14) {
                              setAuditStep(1);
                            }
                          }}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            isSelected
                              ? 'border-neutral-900 ring-2 ring-neutral-900 bg-neutral-50'
                              : hasDiscrepancy && auditStep >= 1
                              ? 'border-red-300 bg-red-50/50'
                              : 'border-neutral-200 bg-white hover:border-neutral-400'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="font-bold text-neutral-800">{item.label}</span>
                            {item.status === 'ok' && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                            {item.status === 'error' && <AlertTriangle className="w-3.5 h-3.5 text-red-600" />}
                          </div>
                          <div className="text-[11px] text-neutral-500 font-mono">
                            POS: {item.pos}
                          </div>
                          <div className={`text-[11px] font-mono font-semibold ${hasDiscrepancy ? 'text-red-600' : 'text-neutral-800'}`}>
                            실재: {item.actual}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Audit Work Area */}
                {selectedHour === 14 || auditStep >= 1 ? (
                  <div className="bg-neutral-50 border border-red-200 rounded-xl p-5 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-neutral-900">
                          [14:00 점검] 시재 불일치 감지: 차액 -₩10,000 발생
                        </h5>
                        <p className="text-xs text-neutral-600 mt-0.5">
                          1시간 단위 알람을 통해 직전 13:00~14:00 사이의 거래 18건 중에서만 원인을 역추적합니다. (기존 방식: 하루 350건 전수 검사 불필요)
                        </p>
                      </div>
                    </div>

                    {auditStep === 1 && (
                      <div className="pt-2">
                        <button
                          onClick={() => setAuditStep(2)}
                          className="px-4 py-2 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold flex items-center gap-2"
                        >
                          <Clock className="w-3.5 h-3.5" />
                          직전 1시간(13:00~14:00) POS 거래 내역 18건 역추적하기
                        </button>
                      </div>
                    )}

                    {auditStep >= 2 && (
                      <div className="bg-white border border-neutral-200 rounded-lg p-4 space-y-3">
                        <div className="text-xs font-bold text-neutral-800 flex items-center justify-between">
                          <span>13:42 발생 거래 건 분석 완료:</span>
                          <span className="text-red-600 font-mono font-bold">-₩10,000 원인 확인</span>
                        </div>
                        <div className="text-xs text-neutral-600 space-y-1 bg-neutral-50 p-3 rounded font-mono">
                          <div>· 주문번호 #142: 아메리카노 2잔 + 바닐라라떼 1잔 (현금결제 ₩14,000)</div>
                          <div>· 원인: 고객 1만원 지폐 2장 제출(₩20,000) → 거스름돈 ₩6,000 지급 후, POS 입력 시 ₩24,000으로 키오표기 입력 오류 확인</div>
                        </div>

                        {auditStep === 2 ? (
                          <button
                            onClick={() => setAuditStep(3)}
                            className="px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            전표 정정 및 시재 100% 일치 마감 처리
                          </button>
                        ) : (
                          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-md text-xs text-emerald-900 font-medium flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>
                              정정 완료! 실금고 시재와 POS 매출이 ₩420,000으로 100% 정합 일치되었습니다. 
                              (원인 규명 소요 시간: 4분 이내 해결)
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-4 bg-neutral-50 border border-dashed border-neutral-300 rounded-lg text-center text-xs text-neutral-500">
                    상단 타임라인에서 <strong className="text-neutral-800">14:00 교대</strong> 카드를 클릭하여 오차 역추적 프로세스를 테스트해보세요.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 3. Sugar Data Analyzer (Project 02) */}
          {project.demoType === 'sugar_data_analyzer' && (
            <div className="space-y-6 max-w-4xl mx-auto w-full">
              <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-xs">
                <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-200 mb-6 gap-3">
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900">
                      고객 데이터 기반 저당 음료 영양성분 인터랙티브 분석기
                    </h4>
                    <p className="text-xs text-neutral-600 mt-1">
                      학원가 상권 고객들의 이탈을 방어하기 위해 본사 영양성분표를 전수 조사하고 당류 기준별로 세분화한 데이터 뷰어입니다.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-neutral-700">당류 필터 기준:</span>
                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded font-mono">
                      {sugarThreshold}g 이하
                    </span>
                  </div>
                </div>

                {/* Controls */}
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 mb-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-neutral-700 mb-2">
                      <span className="flex items-center gap-1.5">
                        <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-500" />
                        당류 허용 상한값 슬라이더 (g)
                      </span>
                      <span className="font-mono text-neutral-900">{sugarThreshold}g 이하 메뉴 선별</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="45"
                      value={sugarThreshold}
                      onChange={(e) => setSugarThreshold(Number(e.target.value))}
                      className="w-full accent-emerald-600"
                    />
                    <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
                      <span>0g (완전 제로)</span>
                      <span>16g (2차 건강 기준)</span>
                      <span>25g (1차 저당 기준)</span>
                      <span>45g (고당 메뉴 포함)</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-200">
                    <button
                      onClick={() => setCategoryFilter('all')}
                      className={`px-3 py-1.5 rounded text-xs font-medium ${
                        categoryFilter === 'all'
                          ? 'bg-neutral-900 text-white'
                          : 'bg-white border border-neutral-200 text-neutral-700'
                      }`}
                    >
                      전체 카테고리
                    </button>
                    <button
                      onClick={() => setCategoryFilter('coffee')}
                      className={`px-3 py-1.5 rounded text-xs font-medium ${
                        categoryFilter === 'coffee'
                          ? 'bg-neutral-900 text-white'
                          : 'bg-white border border-neutral-200 text-neutral-700'
                      }`}
                    >
                      커피류
                    </button>
                    <button
                      onClick={() => setCategoryFilter('tea')}
                      className={`px-3 py-1.5 rounded text-xs font-medium ${
                        categoryFilter === 'tea'
                          ? 'bg-neutral-900 text-white'
                          : 'bg-white border border-neutral-200 text-neutral-700'
                      }`}
                    >
                      티 / 논커피
                    </button>
                  </div>
                </div>

                {/* Filtered Results Table */}
                <div className="border border-neutral-200 rounded-lg overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-neutral-100 text-neutral-700 font-bold border-b border-neutral-200">
                      <tr>
                        <th className="p-3">메뉴명</th>
                        <th className="p-3">카테고리</th>
                        <th className="p-3 text-right">당류 (g)</th>
                        <th className="p-3 text-right">칼로리 (kcal)</th>
                        <th className="p-3">옵션 조절 추천</th>
                        <th className="p-3">안내판 표기 여부</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 bg-white">
                      {[
                        { name: '아메리카노', category: 'coffee', sugar: 0, kcal: 13, note: '당류 없음 기본 추천' },
                        { name: '콜드브루 디카페인', category: 'coffee', sugar: 0, kcal: 15, note: '카페인/당류 동시 제로' },
                        { name: '페퍼민트 티', category: 'tea', sugar: 0, kcal: 2, note: '허브티 라인업' },
                        { name: '플랫화이트 (두유 변경 가능)', category: 'coffee', sugar: 7, kcal: 120, note: '우유 기본 당류' },
                        { name: '원조커피 (제로슈거 옵션)', category: 'coffee', sugar: 11, kcal: 180, note: '시럽 대체 감미료 추천' },
                        { name: '바닐라라떼 (라이트 시럽 1펌프)', category: 'coffee', sugar: 15, kcal: 195, note: '당도 50% 조절 안내 명시' },
                        { name: '달달연유라떼', category: 'coffee', sugar: 28, kcal: 320, note: '연유량 감량 선택 필수' },
                        { name: '완전초코 ICED', category: 'tea', sugar: 42, kcal: 410, note: '고당류 (저당 옵션 불가)' },
                      ]
                        .filter((item) => (categoryFilter === 'all' ? true : item.category === categoryFilter))
                        .map((item, idx) => {
                          const isEligible = item.sugar <= sugarThreshold;
                          return (
                            <tr key={idx} className={isEligible ? 'bg-emerald-50/40' : 'opacity-40'}>
                              <td className="p-3 font-semibold text-neutral-900">{item.name}</td>
                              <td className="p-3 text-neutral-500">
                                {item.category === 'coffee' ? '커피' : '티/음료'}
                              </td>
                              <td className="p-3 text-right font-mono font-bold">
                                <span className={item.sugar <= 16 ? 'text-emerald-700' : 'text-neutral-800'}>
                                  {item.sugar}g
                                </span>
                              </td>
                              <td className="p-3 text-right font-mono text-neutral-600">{item.kcal} kcal</td>
                              <td className="p-3 text-neutral-600">{item.note}</td>
                              <td className="p-3">
                                {isEligible ? (
                                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                                    <Check className="w-3 h-3" />
                                    안내판 추천
                                  </span>
                                ) : (
                                  <span className="text-[11px] text-neutral-400">기준 초과 제외</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-3 bg-neutral-50 border border-neutral-200 rounded-lg text-xs text-neutral-600 flex items-start gap-2">
                  <Info className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>
                    실제 매장에서는 <strong>16g 이하 메뉴 5종</strong>과 <strong>당도 조절 가능 안내</strong>를 결합하여 키오스크 및 POS 전면에 배치함으로써 일평균 4명의 고객 이탈을 효과적으로 방어했습니다.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
