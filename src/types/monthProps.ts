export interface MonthProps {
  month: string;
  index: number;
  isExpanded: boolean;
  toggleMonth: (index: number) => void;
}