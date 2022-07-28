import React from 'react';
import useInput from '../../../atoms/Input/hooks/useInput';
import { MainLogo } from '../../../atoms/MainLogo/MainLogo';
import LoginForm from '../../../organisms/LoginForm/LoginForm';

const LoginTemplate = () => {
  const nameInputHandler = useInput();
  const passInputHandler = useInput();
  return (
    <>
      <div className="h-10" />
      <MainLogo />
      <div className="h-10" />

      <LoginForm
        nameInputHandler={nameInputHandler}
        passInputHandler={passInputHandler}
      />
    </>
  );
};

export default LoginTemplate;
