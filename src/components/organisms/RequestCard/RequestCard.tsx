import React, { VFC } from 'react';
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
  isDisable: boolean;
  publicRequest: boolean;
  onClick: () => void;
};

const RequestCard: VFC<Props> = (props) => {
  const {
    owner,
    title,
    reward,
    gas,
    publicRequest,
    status,
    isDisable,
    onClick,
  } = props;
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
        <NameLabel name={owner} />
      </div>

      <div className="h-3" />

      <div className="flex">
        <HanamaruButton label="done" onClick={onClick} isDisabled={isDisable} />
        <div className="ml-auto">
          <RewardDisplay reward={reward} gas={gas} />
        </div>
      </div>
    </>
  );
};

export default RequestCard;
