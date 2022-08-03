import React, { VFC } from 'react';

type Props = {
  title: string;
  value: number;
};

const HmtLabel: VFC<Props> = (props) => {
  const { title, value } = props;
  return (
    <div className="text-xl font-mono  text-gray-500">
      <div className="flex ">
        <div className="w-24 ">{title}:</div>
        <div className="ml-auto">
          {value}
          <span className="text-xs">HMT</span>
        </div>
      </div>
    </div>
  );
};

export default HmtLabel;
