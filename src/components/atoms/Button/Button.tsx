import React, { VFC } from 'react';

type Props = {
  children: string;
  isEnable: boolean;
  onClick: () => void;
};
const Button: VFC<Props> = (props) => {
  const { children, isEnable, onClick } = props;

  return (
    <button
      type="button"
      onClick={isEnable ? onClick : undefined}
      className={`${
        isEnable ? 'bg-green-500' : 'bg-gray-400'
      } rounded-lg h-10 w-full`}
    >
      {children}
    </button>
  );
};

export default Button;
