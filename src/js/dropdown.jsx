// Dropdown.js
import React, { useState } from "react";
import styles from '../components/mobile/session/session.module.css';


const Dropdown = ({ options, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionSelect(option);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.selector} onClick={toggleDropdown} role="button" tabIndex="0">
        {selectedOption}
            {isOpen ? (
              <svg 
                height="24" 
                fill="rgb(70,70,70)" 
                viewBox="0 -7 12 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m0 0h24v24h-24z" fill="none" />
                <path d="m7.41 15.41 4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z" />
              </svg>
            ) : (
              <svg
                height="24"
                fill="rgb(70,70,70)"
                viewBox="0 -7 12 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m0 0h24v24h-24z" fill="none" />
                <path d="m7.41 8.59 4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
              </svg>
            )}
          
      </div>
      {isOpen && (
        <ul role="listbox">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => selectOption(option)}
              role="option"
              tabIndex="0"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
