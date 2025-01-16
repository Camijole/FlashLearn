import React from 'react';
import '../styling/checkbox.css';
import { TaskData } from './tasks';

interface TaskProps {
  task: TaskData
  onToggle: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, onToggle }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="custom-checkbox task-checkbox"
      />
      <div className="task-content">
        <strong className="task-title">{task.title}</strong>
        <span className="task-description">{task.description}</span>
      </div>
    </div>
  );
};

export default Task;
