import React, { useEffect, useState, VFC } from 'react';
import useLogin from '../../../hooks/useLogin';
import { loginParams } from '../../../types/ApiParams/loginParams';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import { InputHandlerType } from '../../atoms/Input/types/InputHandlerType';

type Props = {
  isBank: boolean;
  nameInputHandler: InputHandlerType;
  passInputHandler: InputHandlerType;
};

const LoginForm: VFC<Props> = (props) => {
  const { isBank, nameInputHandler, passInputHandler } = props;
  const { login } = useLogin();
  const [isReady, setIsReady] = useState(false);

  const execLogin = () => {
    const params: loginParams = {
      name: nameInputHandler.value,
      password: passInputHandler.value,
      isBank,
    };

    login(params);
  };

  const validateInput = () => {
    if (nameInputHandler.value !== '' && passInputHandler.value !== '') {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  };

  useEffect(() => {
    validateInput();
  }, [nameInputHandler.value, passInputHandler.value]);

  return (
    <>
      <div>
        <div className="text-lg text-center text-gray-500">
          {isBank ? '銀行アカウントでログイン' : 'ユーザーアカウントでログイン'}
        </div>
        <div className="h-5" />
        <div className="flex mx-auto w-11/12">
          <Input
            type="text"
            inputHandler={nameInputHandler}
            placeholder="name"
          />
        </div>
        <div className="h-5" />
        <div className="flex mx-auto w-11/12">
          <Input
            type="password"
            inputHandler={passInputHandler}
            placeholder="password"
          />
        </div>
      </div>
      <div className="h-10" />
      <div className="w-11/12 mx-auto text-white text-lg">
        <Button onClick={execLogin} isEnable={isReady}>
          Login
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
