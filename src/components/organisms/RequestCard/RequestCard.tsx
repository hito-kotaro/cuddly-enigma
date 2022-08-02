import React, { VFC } from 'react';
import HanamaruButton from '../../atoms/Button/HanamaruButton/HanamaruButton';
import NameLabel from '../../molecules/NameLabel/NameLabel';
import RewardDisplay from '../../molecules/RewardDisplay/RewardDisplay';

type Props = {
  owner: string;
  title: string;
  reward: number;
  gas: number;
  onClick: () => void;
};

const RequestCard: VFC<Props> = (props) => {
  const { owner, title, reward, gas, onClick } = props;
  return (
    <>
      <div className="h-5" />

      <div className="flex  border-b-1  border-gray-300 ">
        <div className="text-2xl leading-8  whitespace-nowrap truncate">
          {title}
        </div>
        <div className="ml-auto">
          <NameLabel name={owner} path="/dummy/icon" />
        </div>
      </div>

      <div className="h-3" />

      <div className="flex px-5">
        <HanamaruButton label="done" onClick={onClick} />
        <div className="ml-auto">
          <RewardDisplay reward={reward} gas={gas} />
        </div>
      </div>
    </>
  );
};

export default RequestCard;
