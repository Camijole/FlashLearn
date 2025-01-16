import { TaskData } from "../components/tasks";

const baseURL = "http://localhost:5000/";

// Fetch all tasks
export const fetchTasks = (setTasks: React.Dispatch<React.SetStateAction<TaskData[]>>) => {
  fetch(`${baseURL}tasks`)
    .then((response) => response.json())
    .then((data) => setTasks(data))
    .catch((error) => console.error("Error fetching tasks:", error));
};

// Add a new task
export const addTask = (
  newTask: Omit<TaskData, 'id'>,
  tasks: TaskData[],
  setTasks: React.Dispatch<React.SetStateAction<TaskData[]>>
) => {
  fetch(`${baseURL}tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  })
    .then((response) => response.json())
    .then((addedTask) => setTasks([...tasks, addedTask]))
    .catch((error) => console.error("Error adding task:", error));
};

// Toggle task completion
export const toggleTaskCompletion = (
  id: number,
  tasks: TaskData[],
  setTasks: React.Dispatch<React.SetStateAction<TaskData[]>>
) => {
  const taskToUpdate = tasks.find((task) => task.id === id);
  if (taskToUpdate) {
    fetch(`${baseURL}tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !taskToUpdate.completed }),
    })
      .then(() => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
      })
      .catch((error) => console.error("Error updating task:", error));
  }
};

// Delete a task
export const deleteTask = (
  id: number,
  tasks: TaskData[],
  setTasks: React.Dispatch<React.SetStateAction<TaskData[]>>
) => {
  fetch(`${baseURL}tasks/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    })
    .catch((error) => console.error("Error deleting task:", error));
};