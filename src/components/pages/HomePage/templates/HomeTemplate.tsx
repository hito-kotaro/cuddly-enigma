import React from 'react';
import useLogin from '../../../../hooks/useLogin';
import Button from '../../../atoms/Button/Button';

const HomeTemplate = () => {
  const { logout } = useLogin();
  return (
    <Button onClick={logout} isEnable>
      logout
    </Button>
  );
};

export default HomeTemplate;
