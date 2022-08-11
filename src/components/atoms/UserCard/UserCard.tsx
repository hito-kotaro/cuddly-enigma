import React, { VFC } from 'react';
// import Avatar from '@mui/material/Avatar';
import { BsFlower1 } from 'react-icons/bs';
import { userType } from '../../../types/User/userType';
import NameLabel from '../../molecules/NameLabel/NameLabel';

type Props = {
  user: userType;
};

const UserCard: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <div className="w-11/12 h-40 rounded-lg p-2 ring-1 ring-black ring-opacity-10 ">
      {/* <Avatar alt={name} src="/static/images/avatar/1.jpg" /> */}
      <NameLabel name={user.name} path='"/static/images/avatar/1.jpg"' />
      <div className="h-3" />
      <div className="text-center">
        <span className="text-2xl"> {user.hmt} </span>
        <span className="text-sm">HMT</span>
      </div>
      <div className="flex justify-end">
        <BsFlower1 size={58} />
      </div>
    </div>
  );
};

export default UserCard;
