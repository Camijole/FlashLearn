import React, { useEffect, useState } from "react";
import Task from "./task";
import "../styling/tasks.css";
import "../styling/floatingButton.css";
import { toggleTaskCompletion } from "../utils/taskUtils";
import { fetchTasks } from "../api/taskApi";

export interface TaskData {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  useEffect(() => {
    fetchTasks(setTasks);
  }, []);

  const handleToggleTaskCompletion = (id: number) => {
    toggleTaskCompletion(id, tasks, setTasks);
  };

  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={handleToggleTaskCompletion}
        />
      ))}
    </div>
  );
};

export default Tasks;
