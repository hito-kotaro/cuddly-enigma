import React, { VFC } from 'react';

type Props = {
  title: string;
  value: number;
};

const HmtLabel: VFC<Props> = (props) => {
  const { title, value } = props;
  return (
    <div className="text-xl font-mono  text-gray-500">
      <span className="font-semibold">{title}:</span>
      {value}
      <span className="text-sm font-mono">HMT</span>
    </div>
  );
};

export default HmtLabel;
