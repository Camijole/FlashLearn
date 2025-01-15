import React from 'react';
import Tasks from './tasks'; // Import the Tasks component

interface MonthProps {
  month: string;
  index: number;
  isExpanded: boolean;
  toggleMonth: (index: number) => void;
}

const Month: React.FC<MonthProps> = ({ month, index, isExpanded, toggleMonth }) => {
  return (
    <div className={`month-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="month-header" onClick={() => toggleMonth(index)}>
        <span className={`arrow ${isExpanded ? 'down' : 'right'}`}></span>
        <span className={`month-title ${isExpanded ? 'bold' : ''}`}>{month}</span>
      </div>
      {isExpanded && (
        <div className="month-details">
          <Tasks />
        </div>
      )}
    </div>
  );
};

export default Month;
