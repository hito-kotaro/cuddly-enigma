import React from 'react';
import useLogin from '../../../hooks/useLogin';
import Button from '../../atoms/Button/Button';

const HomePage = () => {
  const { logout } = useLogin();

  return (
    <Button onClick={logout} isEnable>
      logout
    </Button>
  );
};

export default HomePage;
