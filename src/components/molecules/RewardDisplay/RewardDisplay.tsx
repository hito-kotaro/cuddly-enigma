import React, { VFC } from 'react';
import HmtLabel from '../../atoms/Label/HmtLabel/HmtLabel';

type Props = {
  reward: number;
  gas: number;
};
const RewardDisplay: VFC<Props> = (props) => {
  const { reward, gas } = props;
  return (
    <div>
      <HmtLabel title="Reward" value={reward} />
      <HmtLabel title="Gas" value={gas} />
      <hr />
      <div className="h-1" />
      <HmtLabel title="Total" value={reward - gas} />
    </div>
  );
};

export default RewardDisplay;
