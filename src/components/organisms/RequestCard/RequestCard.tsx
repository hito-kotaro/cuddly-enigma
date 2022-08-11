import React, { VFC } from 'react';
import useUserState from '../../../stores/UserState/useUserState';
import Badge from '../../atoms/Badge/Badge';
import HanamaruButton from '../../atoms/Button/HanamaruButton/HanamaruButton';
import NameLabel from '../../molecules/NameLabel/NameLabel';
import RewardDisplay from '../../molecules/RewardDisplay/RewardDisplay';
import BadgeDisplay from '../BadgeDisplay/BadgeDisplay';

type Props = {
  owner: string;
  ownerId: number;
  title: string;
  reward: number;
  gas: number;
  status: boolean;
  publicRequest: boolean;
  onClick: () => void;
};

const RequestCard: VFC<Props> = (props) => {
  const { owner, ownerId, title, reward, gas, publicRequest, status, onClick } =
    props;
  const { user } = useUserState();
  return (
    <>
      <div className="h-5" />
      <div className="flex border-b-1  border-gray-300 bg-emerald">
        <div className="text-2xl leading-8  whitespace-nowrap truncate">
          {title}
        </div>

        <div className=" ml-auto flex">
          <BadgeDisplay publicRequest={publicRequest} status={status} />
        </div>
      </div>

      <div className="h-2" />
      <div className="flex font-mono">
        <div className="text-lg leading-6 w-20">Owner:</div>
        <NameLabel name={owner} path="/dummy/icon" />
      </div>

      <div className="h-3" />

      <div className="flex">
        <HanamaruButton
          label="done"
          onClick={onClick}
          isDisabled={!!(status === false)}
        />
        <div className="ml-auto">
          <RewardDisplay reward={reward} gas={gas} />
        </div>
      </div>
    </>
  );
};

export default RequestCard;
