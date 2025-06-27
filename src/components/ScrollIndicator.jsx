import React from 'react';
import '../styles/CommonStyles.css';

const ScrollIndicator = ({ sections, activeSection }) => {
  return (
    <div className="scroll-indicator">
      {Array.from({ length: sections }).map((_, index) => (
        <div
          key={index}
          className={`dot ${activeSection === index ? 'active' : ''}`}
        ></div>
      ))}
    </div>
  );
};

export default ScrollIndicator;
