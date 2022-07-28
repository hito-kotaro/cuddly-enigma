import React, { VFC } from 'react';
import { InputHandlerType } from './types/InputHandlerType';

type Props = {
  type: 'text' | 'number' | 'password';
  placeholder: string;
  inputHandler: InputHandlerType;
};

const Input: VFC<Props> = (props) => {
  const { type, placeholder, inputHandler } = props;
  return (
    <input
      className="pl-5 border rounded-md h-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
      type={type}
      placeholder={placeholder}
      value={inputHandler.value}
      onChange={inputHandler.onChange}
    />
  );
};

export default Input;
