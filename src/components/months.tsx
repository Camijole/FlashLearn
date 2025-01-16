import React, { useState } from "react";
import { monthsByLanguage } from "../constants/months";
import "../styling/months.css";
import Month from "./month";
import "../styling/language.css";
import FloatingButton from "./floatingButton";
import CreateTaskForm from "./createTaskForm";

interface language {
  language: "en" | "sv";
}

const Months: React.FC<language> = (props) => {
  const [expandedMonth, setExpandedMonth] = useState<number | null>(null);
  const [showMonths, setShowMonths] = useState(true);
  const toggleMonth = (index: number) => {
    setExpandedMonth(expandedMonth === index ? null : index);
  };

  const addTask = (title: string, description: string) => {
    console.log("Task added:", { title, description });
    setShowMonths(true);
  };

  return (
    <>
      <div className="months-container">
        {showMonths ? (
          monthsByLanguage[props.language].map((month, index) => (
            <Month
              key={index}
              month={month}
              index={index}
              isExpanded={expandedMonth === index}
              toggleMonth={toggleMonth}
            />
          ))
        ) : (
          <CreateTaskForm
            onAddTask={addTask}
            onCancel={() => setShowMonths(true)}
          />
        )}
      </div>
      {showMonths && <FloatingButton onClick={() => setShowMonths(false)} />}
    </>
  );
};

export default Months;
