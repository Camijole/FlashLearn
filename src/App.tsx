import React, { useState } from 'react';
import './App.css';
import CreateTaskForm from './components/createTaskForm';
import FloatingButton from './components/floatingButton';
import Months from './components/months';

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  const addTask = (title: string, description: string) => {
    console.log('Task added:', { title, description });
    setShowForm(false);
  };

  return (
    <div className="app-container">
      {showForm ? (
        <CreateTaskForm onAddTask={addTask} onCancel={handleHideForm} />
      ) : (
        <Months />
      )}
      {!showForm && <FloatingButton onClick={handleShowForm} />}
    </div>
  );
};

export default App;
