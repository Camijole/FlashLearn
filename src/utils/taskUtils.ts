import { TaskData } from "../components/tasks";


export const toggleTaskCompletion = (
  id: number,
  tasks: TaskData[],
  setTasks: React.Dispatch<React.SetStateAction<TaskData[]>>
) => {
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