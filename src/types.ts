export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  role: string;
  client?: string;
  duration: string;
  features: string[];
  imageSource?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  highlights: string[];
  tags?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
