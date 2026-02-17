
export interface Project {
  id: string;
  title: string;
  company?: string;
  date: string;
  description: string[];
  techStack: string[];
  type: 'work' | 'personal' | 'academic';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Skill {
  name: string;
  category: string;
  level?: number; // 0 to 1
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface CVData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
  };
  summary: string;
  skills: Skill[];
  experience: Project[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  languages: { name: string; level: string }[];
  softSkills: string[];
}
