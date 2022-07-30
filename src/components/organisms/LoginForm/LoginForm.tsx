import React, { useEffect, useState, VFC } from 'react';
import { Button, TextField } from '@mui/material';
import useLogin from '../../../hooks/useLogin';
import { loginParams } from '../../../types/ApiParams/loginParams';
import { InputHandlerType } from '../../atoms/Input/types/InputHandlerType';

type Props = {
  isBank: boolean;
  nameInputHandler: InputHandlerType;
  passInputHandler: InputHandlerType;
};

const LoginForm: VFC<Props> = (props) => {
  const { isBank, nameInputHandler, passInputHandler } = props;
  const { login } = useLogin();
  const [isDisable, setIsDisable] = useState(false);

  const execLogin = () => {
    const params: loginParams = {
      name: nameInputHandler.value,
      password: passInputHandler.value,
      isBank,
    };
    login(params);
  };

  const validateInput = () => {
    if (nameInputHandler.value === '' || passInputHandler.value === '') {
      setIsDisable(true);
    } else {
      setIsDisable(false);
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
          <TextField
            fullWidth
            label="name"
            variant="outlined"
            onChange={nameInputHandler.onChange}
            value={nameInputHandler.value}
          />
        </div>
        <div className="h-5" />
        <div className="flex mx-auto w-11/12">
          <TextField
            fullWidth
            type="password"
            label="password"
            variant="outlined"
            onChange={passInputHandler.onChange}
            value={passInputHandler.value}
          />
        </div>
      </div>
      <div className="h-8" />
      <div className="flex justify-center w-11/12 mx-auto">
        <Button variant="contained" onClick={execLogin} disabled={isDisable}>
          Login
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
