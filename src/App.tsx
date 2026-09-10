import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CompetenciesSection from './components/CompetenciesSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationTrainingSection from './components/EducationTrainingSection';
import CertificationsSection from './components/CertificationsSection';
import CareerGoalSection from './components/CareerGoalSection';
import ContactSection from './components/ContactSection';
import ProjectDetailModal from './components/ProjectDetailModal';
import PrintResumeModal from './components/PrintResumeModal';
import { LiveDemoModal } from './components/LiveDemoModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [liveDemoProject, setLiveDemoProject] = useState<Project | null>(null);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1c1917] flex flex-col selection:bg-neutral-900 selection:text-white">
      {/* Editorial Sticky Header */}
      <Header onOpenPrint={() => setIsPrintModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <CompetenciesSection />
        <ProjectsSection 
          onSelectProject={(p) => setSelectedProject(p)} 
          onOpenLiveDemo={(p) => setLiveDemoProject(p)}
        />
        <ExperienceSection />
        <EducationTrainingSection />
        <CertificationsSection />
        <CareerGoalSection />
        <ContactSection onOpenPrint={() => setIsPrintModalOpen(true)} />
      </main>

      {/* Interactive Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenLiveDemo={(p) => {
          setSelectedProject(null);
          setLiveDemoProject(p);
        }}
      />

      <LiveDemoModal
        project={liveDemoProject}
        onClose={() => setLiveDemoProject(null)}
      />

      <PrintResumeModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />
    </div>
  );
}
