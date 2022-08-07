import React, { VFC } from 'react';

type Props = {
  children: string;
  color: 'emerald' | 'rose' | 'indigo';
};

const Badge: VFC<Props> = (props) => {
  const { children, color } = props;
  return (
    <div
      className={`text-xs bg-${color}-300 text-white font-mono leading-5 h-5 rounded-full  text-center px-2`}
    >
      {children}
    </div>
  );
};

export default Badge;
