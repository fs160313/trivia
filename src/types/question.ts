export interface Question {
  hint: string;
  answer: string;
  value: number;
  category: string;
  visited?: boolean;
}
