/* eslint-disable no-nested-ternary */
import React, { VFC } from 'react';

type Props = {
  children: string;
  color: string;
};

const Badge: VFC<Props> = (props) => {
  const { children, color } = props;

  return (
    <>
      {color === 'emerald' ? (
        <div className="text-xs bg-emerald-300 font-mono leading-5 h-5 rounded-full  text-center px-2 text-white">
          {children}
        </div>
      ) : color === 'rose' ? (
        <div className="text-xs bg-rose-300 font-mono leading-5 h-5 rounded-full  text-center px-2 text-white">
          {children}
        </div>
      ) : (
        <div className="text-xs bg-indigo-200 font-mono leading-5 h-5 rounded-full  text-center px-2 text-white">
          {children}
        </div>
      )}
    </>
  );
};

export default Badge;
