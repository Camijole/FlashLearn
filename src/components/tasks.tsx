import React, { useState } from 'react';
import Task from './task'; // Import the Task component
import '../styling/tasks.css';

interface TaskData {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<TaskData[]>([
    { id: 1, title: 'Task 1', description: 'Description for task 1', completed: false },
    { id: 2, title: 'Task 2', description: 'Description for task 2', completed: false },
    { id: 3, title: 'Task 3', description: 'Description for task 3', completed: true },
  ]);

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (id: number) => {
    const task = tasks.find(task => task.id === id);
    const newTitle = prompt('Edit task title:', task?.title || '');
    const newDescription = prompt('Edit task description:', task?.description || '');
    if (newTitle !== null && newDescription !== null) {
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, title: newTitle, description: newDescription } : task
      ));
    }
  };

  return (
    <div className="tasks-container">
      {tasks.map(task => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          completed={task.completed}
          onToggle={toggleTaskCompletion}
          onEdit={editTask}
        />
      ))}
    </div>
  );
};

export default Tasks;
