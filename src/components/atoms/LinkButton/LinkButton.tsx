import React, { VFC } from 'react';

type Props = {
  children: string;
  onClick: () => void;
};

const LinkButton: VFC<Props> = (props) => {
  const { children, onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className=" border-blue-600 border-b-1 text-blue-600"
    >
      {children}
    </button>
  );
};

export default LinkButton;
