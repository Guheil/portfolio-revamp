export interface PhilosophyProps {
  id?: string;
}

export interface PhilosophyQuote {
  topic: 'Work' | 'Life' | 'Philosophy';
  text: string;
  speaker: string;
}
