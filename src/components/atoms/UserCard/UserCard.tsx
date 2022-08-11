import React, { VFC } from 'react';
// import Avatar from '@mui/material/Avatar';
import { BsFlower1 } from 'react-icons/bs';
import NameLabel from '../../molecules/NameLabel/NameLabel';

type Props = {
  name: string;
  hmt: number;
};

const UserCard: VFC<Props> = (props) => {
  const { name, hmt } = props;
  return (
    <div className="w-11/12 h-40 rounded-lg p-2 ring-1 ring-black ring-opacity-10 ">
      {/* <Avatar alt={name} src="/static/images/avatar/1.jpg" /> */}
      <NameLabel name={name} path='"/static/images/avatar/1.jpg"' />
      <div className="h-3" />
      <div className="text-center">
        <span className="text-2xl"> {hmt} </span>
        <span className="text-sm">HMT</span>
      </div>
      <div className="flex justify-end">
        <BsFlower1 size={58} />
      </div>
    </div>
  );
};

export default UserCard;
