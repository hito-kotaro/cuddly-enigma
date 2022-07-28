import React, { VFC } from 'react';
import Input from '../../atoms/Input/Input';
import { InputHandlerType } from '../../atoms/Input/types/InputHandlerType';

type Props = {
  nameInputHandler: InputHandlerType;
  passInputHandler: InputHandlerType;
};

const LoginForm: VFC<Props> = (props) => {
  const { nameInputHandler, passInputHandler } = props;
  return (
    <>
      <div>
        <div className="text-lg text-center text-gray-500">Login</div>
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
        <button type="button" className="bg-green-500 rounded-lg h-10 w-full">
          Login
        </button>
      </div>
    </>
  );
};

export default LoginForm;
