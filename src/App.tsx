import React, { useState } from "react";
import "./App.css";
import Months from "./components/months";

const App: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "sv">("en"); // Default language

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as "en" | "sv");
  };

  return (
    <div className="app-container">
      <div className="language-selector">
        <select
          id="language"
          value={language}
          onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="sv">Swedish</option>
        </select>
      </div>
      <Months language={language} />
    </div>
  );
};

export default App;
