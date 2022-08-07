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
  status: boolean;
  publicRequest: boolean;
  onClick: () => void;
};

const RequestCard: VFC<Props> = (props) => {
  const { owner, title, reward, gas, publicRequest, status, onClick } = props;

  return (
    <>
      <div className="h-5" />
      <div className="flex border-b-1  border-gray-300 bg-emerald">
        <div className="text-2xl leading-8  whitespace-nowrap truncate">
          {title}
        </div>

        <div className=" ml-auto flex">
          {publicRequest ? (
            <div className="">
              <Badge color="emerald">public</Badge>
            </div>
          ) : (
            <div className="">
              <Badge color="rose">order</Badge>
            </div>
          )}
          <div className="w-1 h-1" />
          {status ? (
            <div className="">
              <Badge color="emerald">open</Badge>
            </div>
          ) : (
            <div className="">
              <Badge color="rose">closed</Badge>
            </div>
          )}
        </div>
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
