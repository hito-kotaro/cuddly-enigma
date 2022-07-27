import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <button type="button" onClick={onClick} className="bg-primary text-base">
      To Login
    </button>
  );
};

export default HomePage;
