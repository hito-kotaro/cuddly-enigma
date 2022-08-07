import React, { VFC } from 'react';
import { Avatar } from '@mui/material';

type Props = {
  name: string;
  path: string;
};
const NameLabel: VFC<Props> = (props) => {
  const { name, path } = props;
  return (
    <div className="flex">
      <Avatar alt={name} src={path} sx={{ width: 24, height: 24 }} />
      <div className="w-2" />
      <div className="leading-6 font-mono text-lg">{name}</div>
    </div>
  );
};

export default NameLabel;
