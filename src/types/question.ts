export interface Question {
  hint: string;
  answer: string;
  category: string;
  value: number;
  visited?: boolean;
  final?: boolean;
}
