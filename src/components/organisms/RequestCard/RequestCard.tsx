import React, { VFC } from 'react';
import Badge from '../../atoms/Badge/Badge';
import HanamaruButton from '../../atoms/Button/HanamaruButton/HanamaruButton';
import NameLabel from '../../molecules/NameLabel/NameLabel';
import RewardDisplay from '../../molecules/RewardDisplay/RewardDisplay';

type Props = {
  owner: string;
  title: string;
  reward: number;
  gas: number;
  publicRequest: boolean;
  onClick: () => void;
};

const RequestCard: VFC<Props> = (props) => {
  const { owner, title, reward, gas, publicRequest, onClick } = props;

  return (
    <>
      <div className="h-5" />
      <div className="flex border-b-1  border-gray-300 bg-emerald">
        <div className="text-2xl leading-8  whitespace-nowrap truncate">
          {title}
        </div>
        {publicRequest ? (
          <div className="ml-auto">
            <Badge color="emerald">public</Badge>
          </div>
        ) : (
          <div className="ml-auto">
            <Badge color="rose">order</Badge>
          </div>
        )}
      </div>

      <div className="flex font-mono">
        <div className="text-lg leading-6 w-20">Owner:</div>
        <NameLabel name={owner} path="/dummy/icon" />
      </div>

      <div className="h-3" />

      <div className="flex">
        <HanamaruButton label="done" onClick={onClick} />
        <div className="ml-auto">
          <RewardDisplay reward={reward} gas={gas} />
        </div>
      </div>
    </>
  );
};

export default RequestCard;
