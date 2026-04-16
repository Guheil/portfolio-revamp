export interface ProjectsProps {
  id?: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  period: string;
  skills: string[];
  demo?: string;
  repo?: string;
}
