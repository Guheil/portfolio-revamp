export interface CertificationsProps {
  id?: string;
}

export interface CertItem {
  name: string;
  issuer: string;
  date: string;
  skills: string[];
  url?: string;
}
