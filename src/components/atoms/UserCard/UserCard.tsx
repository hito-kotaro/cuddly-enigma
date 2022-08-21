import React, { VFC } from 'react';
import { BsFlower1 } from 'react-icons/bs';
import useSpingState from '../../../stores/SpingState/useSpinState';
import { userType } from '../../../types/User/userType';
import NameLabel from '../../molecules/NameLabel/NameLabel';

type Props = {
  user: userType;
};

const UserCard: VFC<Props> = (props) => {
  const { user } = props;
  const { isSpin, setIsSpin } = useSpingState();

  return (
    <div className="w-11/12 h-40 rounded-lg p-2 ring-1 ring-black ring-opacity-10 ">
      {/* <Avatar alt={name} src="/static/images/avatar/1.jpg" /> */}
      <NameLabel name={user.name} />
      <div className="h-3" />
      <div className="text-center">
        <span className="text-2xl"> {user.hmt.toFixed(2)} </span>
        <span className="text-sm">HMT</span>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className={isSpin ? 'animate-spin' : ''}
          onClick={() => setIsSpin(!isSpin)}
        >
          <BsFlower1 size={58} />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
