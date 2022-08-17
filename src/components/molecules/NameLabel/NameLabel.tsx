import React, { VFC } from 'react';
import { Avatar } from '@mui/material';
import stringToColor from '../../../libs/stringToColor';

type Props = {
  name: string;
};
const NameLabel: VFC<Props> = (props) => {
  const { name } = props;

  return (
    <div className="flex">
      <Avatar sx={{ width: 32, height: 32, bgcolor: stringToColor(name) }}>
        {name ? name[0].toUpperCase() : ''}
      </Avatar>
      <div className="w-2" />
      <div className=" leading-8 font-mono text-lg">{name}</div>
    </div>
  );
};

export default NameLabel;
