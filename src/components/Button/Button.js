import React from 'react';
import './Button.css';

function Button({ onClick, className = '', children }) {
  return (
    <button
      onClick={onClick}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;