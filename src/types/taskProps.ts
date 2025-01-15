export interface TaskProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onEdit: (id: number) => void;
}
