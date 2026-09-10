export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  period: string;
  organization: string;
  role: string;
  problem: string;
  analysis?: string;
  action: string;
  result?: string;
  learned: string;
  tags: string[];
  keyHighlights: { label: string; value: string }[];
  processSteps?: { step: string; title: string; description: string }[];
  hasLiveDemo?: boolean;
  liveDemoTitle?: string;
  liveDemoUrl?: string;
  localSourcePath?: string;
  demoType?: 'market_channel_kpi' | 'cash_audit_simulation' | 'sugar_data_analyzer';
}

export interface Experience {
  id: string;
  company: string;
  period: string;
  role: string;
  type: string;
  description: string[];
  skills: string[];
  highlightMetric?: string;
}

export interface Education {
  school: string;
  major: string;
  period: string;
  status: string;
  description: string;
}

export interface TrainingCourse {
  name: string;
  period: string;
  institution: string;
  courses: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  level: string;
  category: string;
  description: string;
}

export interface Competency {
  number: string;
  title: string;
  summary: string;
  details: string;
  badge: string;
  examples: string[];
}
