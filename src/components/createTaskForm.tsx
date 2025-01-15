import React, { useState } from 'react';
import '../styling/createTaskForm.css';

interface CreateTaskFormProps {
  onAddTask: (title: string, description: string) => void;
  onCancel: () => void;
}

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ onAddTask, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      onAddTask(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-task-form">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Create Task</button>
      <button type="button" onClick={onCancel} className="cancel-button">Cancel</button>
    </form>
  );
};

export default CreateTaskForm;
