import React, { useState } from 'react';
import { monthsByLanguage } from '../constants/months';
import '../styling/months.css';
import Month from './month';
import '../styling/language.css';

const Months: React.FC = () => {
  const [expandedMonth, setExpandedMonth] = useState<number | null>(null);
  const [language, setLanguage] = useState<'en' | 'sv'>('en'); // Default language

  const toggleMonth = (index: number) => {
    setExpandedMonth(expandedMonth === index ? null : index);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as 'en' | 'sv');
  };

  return (
    <div className="months-container">
      <div className="language-selector">
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="sv">Swedish</option>
        </select>
      </div>
      {monthsByLanguage[language].map((month, index) => (
        <Month
          key={index}
          month={month}
          index={index}
          isExpanded={expandedMonth === index}
          toggleMonth={toggleMonth}
        />
      ))}
    </div>
  );
};

export default Months;
