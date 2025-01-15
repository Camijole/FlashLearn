import React, { useState } from "react";
import "../styling/tasks.css";
import "../styling/checkbox.css";

interface Task {
  id: number;
  title: string;
  text: string;
  completed: boolean;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title:"Fixa gräsmattan", text: "Kalka gräsmattan, gärna ovanpå den sista snön. När marken torkat upp, och gräsmattan inte längre sviktar på grund av fukt när du går på den är det dags att räfsa bort rester av fjolårslöv, kvistar och annat skräp. Räfsa inte för hårt, då kan du skada gräsmattans rötter. Räfsa även bort eventuellt snömögel. Mossa behandlas bäst med hjälp av medel mot mossa som vattnas ut över drabbade områden. Om gräsmattan har kala fläckar kan du rugga upp jorden och så i nytt gräs när våren kommer på allvar.", completed: false },
    { id: 2, title:"Njut av lökarna", text: "Nu börjar lökarna titta upp, glöm inte att njuta av dem!", completed: false },
    { id: 3, title:"Vårröj", text: "Glöm inte röja upp runt huset inför den nya säsongen", completed: true },
  ]);

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const editTask = (id: number) => {
    const newText = prompt("Edit task:", tasks.find((task) => task.id === id)?.text);
    if (newText !== null) {
      setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)));
    }
  };

  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
            className="custom-checkbox task-checkbox"
          />
          <div className="task-content">
            <span className={`task-title ${task.completed ? "completed" : ""}`}>{task.title}</span><br/>
            <span className={`task-text ${task.completed ? "completed" : ""}`}>{task.text}</span>
          </div>
          <button
            className="edit-button"
            onClick={() => editTask(task.id)}>
            <i className="fas fa-edit"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
