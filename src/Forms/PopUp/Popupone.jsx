import React, { useState } from 'react';
import './Popupone.css';
const Popupone = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Popup Form</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Popup Form</h2>
            <form>
              {/* Your form fields */}
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <button type="submit">Submit</button>
            </form>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popupone;
