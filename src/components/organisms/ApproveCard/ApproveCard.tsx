import React, { VFC } from 'react';
import useUserState from '../../../stores/UserState/useUserState';
import Badge from '../../atoms/Badge/Badge';
import HanamaruButton from '../../atoms/Button/HanamaruButton/HanamaruButton';
import NameLabel from '../../molecules/NameLabel/NameLabel';
import RewardDisplay from '../../molecules/RewardDisplay/RewardDisplay';

type Props = {
  applicant: string;
  applicantId: number;
  title: string;
  reward: number;
  gas: number;
  status: string;
  onClick: () => void;
};

const ApproveCard: VFC<Props> = (props) => {
  const { applicant, applicantId, title, reward, gas, status, onClick } = props;
  const { user } = useUserState();
  return (
    <>
      <div className="h-5" />
      <div className="flex border-b-1  border-gray-300 ">
        <div className="text-2xl leading-8  whitespace-nowrap truncate">
          {title}
        </div>

        {/* ステータスごとに色を変えたい */}
        <div className="ml-auto">
          <div className="text-xs bg-emerald-300 text-white font-mono leading-5 h-5 rounded-full  text-center px-2">
            {status}
          </div>
        </div>
      </div>

      <div className="h-2" />
      <div className="flex font-mono">
        <div className="text-lg leading-6">Applicant:</div>
        <NameLabel name={applicant} path="/dummy/icon" />
      </div>

      <div className="h-3" />

      <div className="flex">
        <HanamaruButton
          label="approve"
          onClick={onClick}
          isDisabled={!!(status === 'closed' || applicantId === user.id)}
        />
        <div className="ml-auto">
          <RewardDisplay reward={reward} gas={gas} />
        </div>
      </div>
    </>
  );
};

export default ApproveCard;
