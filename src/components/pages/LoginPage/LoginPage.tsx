import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/home');
  };

  return (
    <button type="button" onClick={onClick} className="bg-primary text-base">
      To Home
    </button>
  );
};

export default LoginPage;
