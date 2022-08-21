import React, { VFC } from 'react';
import HanamaruButton from '../../atoms/Button/HanamaruButton/HanamaruButton';
import NameLabel from '../../molecules/NameLabel/NameLabel';
import RewardDisplay from '../../molecules/RewardDisplay/RewardDisplay';

type Props = {
  applicant: string;
  title: string;
  reward: number;
  tax: number;
  status: string;
  isDisable: boolean;
  onClick: () => void;
};

const ApproveCard: VFC<Props> = (props) => {
  const { applicant, isDisable, title, reward, tax, status, onClick } = props;
  console.log(isDisable);
  return (
    <>
      <div className="flex font-mono">
        {/* <div className="text-lg leading-6">申請者:</div> */}
        <NameLabel name={applicant} />
      </div>

      <div className="h-6" />

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

      <div className="h-5" />

      <div className="flex">
        <HanamaruButton
          label="approve"
          onClick={onClick}
          isDisabled={isDisable}
        />
        <div className="ml-auto">
          <RewardDisplay reward={reward} tax={tax} />
        </div>
      </div>
    </>
  );
};

export default ApproveCard;
