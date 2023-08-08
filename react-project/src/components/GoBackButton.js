import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  // Function to handle the back button click
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div>
      <button className='back-arrow' onClick={handleBack}>Back</button>
    </div>
  );
}

export default BackButton;