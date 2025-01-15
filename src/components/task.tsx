import React from 'react';
import '../styling/checkbox.css';

interface TaskProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onEdit: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ id, title, description, completed, onToggle, onEdit }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
        className="custom-checkbox task-checkbox"
      />
      <div className="task-content">
        <strong className="task-title">{title}</strong>
        <span className="task-description">{description}</span>
      </div>
      <button className="edit-button" onClick={() => onEdit(id)}>
        <i className="fas fa-edit"></i>
      </button>
    </div>
  );
};

export default Task;
