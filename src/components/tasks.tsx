import React, { useEffect, useState } from "react";
import Task from "./task"; // Import the Task component
import CreateTaskForm from "./createTaskForm";
import FloatingButton from "./floatingButton";
import "../styling/tasks.css";
import "../styling/floatingButton.css";
import { TaskData } from "../types/taskData";

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .then((error) => console.error("error fetching tasks: ", error));
  }, []);

  const toggleTaskCompletion = (id: number) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (taskToUpdate) {
      fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !taskToUpdate.completed }),
      })
        .then(() => {
          setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
        })
        .catch((error) => console.error("error updating task: ", error));
    }
  };

  const addTask = (title: string, description: string) => {
    const newTask = { title, description, completed: false };
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((addedTask) => setTasks([...tasks, addedTask]))
      .catch((error) => console.error("Error adding task:", error));
  };

  const deleteTask = (id: number) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
      .then(() => setTasks(tasks.filter((task) => task.id !== id)))
      .catch((error) => console.error("Error deleting task:", error));
  };

  const editTask = (id: number) => {
    const task = tasks.find((task) => task.id === id);
    const newTitle = prompt("Edit task title:", task?.title || "");
    const newDescription = prompt("Edit task description:", task?.description || "");
    if (newTitle !== null && newDescription !== null) {
      setTasks(tasks.map((task) => (task.id === id ? { ...task, title: newTitle, description: newDescription } : task)));
    }
  };

  const handleButtonClick = () => {
      setShowForm(!showForm); // Toggle the visibility of the form
    };

  return (
    <div className="tasks-container">
       {showForm && <CreateTaskForm onAddTask={addTask} onCancel={function (): void {
                    throw new Error("Function not implemented.");
              } } />}
      {tasks.map((task) => (
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
      <FloatingButton onClick={handleButtonClick} />
    </div>
  );
};

export default Tasks;
