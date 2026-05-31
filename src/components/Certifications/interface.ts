export interface CertificationsProps {
  id?: string;
}

export interface CertItem {
  name: string;
  issuer: string;
  summary?: string;
  date: string;
  skills: string[];
  url?: string;
}
