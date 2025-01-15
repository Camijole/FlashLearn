import React, { useState } from 'react';
import Tasks from './tasks'; // Import the Tasks component
import '../styling/months.css'; // Import the CSS file for Months

const Months: React.FC = () => {
  const [expandedMonth, setExpandedMonth] = useState<number | null>(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const toggleMonth = (index: number) => {
    setExpandedMonth(expandedMonth === index ? null : index);
  };

  return (
    <div className="months-container">
      {months.map((month, index) => (
        <div key={index} className={`month-item ${expandedMonth === index ? 'expanded' : ''}`}>
          <div className="month-header" onClick={() => toggleMonth(index)}>
            <span className={`arrow ${expandedMonth === index ? 'down' : 'right'}`}></span>
            <span className={`month-title ${expandedMonth === index ? 'bold' : ''}`}>
              {month}
            </span>
          </div>
          {expandedMonth === index && (
            <div className="month-details">
              <Tasks /> {/* Render the Tasks component */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Months;
