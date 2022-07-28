import React, { VFC } from 'react';
import useInput from '../../../atoms/Input/hooks/useInput';
import { MainLogo } from '../../../atoms/MainLogo/MainLogo';
import LoginForm from '../../../organisms/LoginForm/LoginForm';

type Props = {
  isBank: boolean;
};

const LoginTemplate: VFC<Props> = (props) => {
  const { isBank } = props;
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
        isBank={isBank}
      />
    </>
  );
};

export default LoginTemplate;
