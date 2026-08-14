export interface Project {
  id: string;
  title: string;
  category: 'Data Analytics' | 'Machine Learning & AI' | 'Web & Mobile Apps';
  tech: string[];
  description: string;
  fullDetails?: string;
  keyMetrics?: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  role?: string;
  image?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
  badge?: string;
}

export interface SkillCategory {
  title: string;
  category: 'languages' | 'analytics' | 'web' | 'ai' | 'tools';
  icon: string;
  skills: { name: string; level?: string; icon?: string; highlighted?: boolean }[];
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  highlights: string[];
}
