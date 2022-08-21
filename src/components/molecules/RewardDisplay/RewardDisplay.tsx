import React, { VFC } from 'react';
import HmtLabel from '../../atoms/Label/HmtLabel/HmtLabel';

type Props = {
  reward: number;
  tax: number;
};
const RewardDisplay: VFC<Props> = (props) => {
  const { reward, tax } = props;
  return (
    <div>
      <HmtLabel title="Reward" value={reward} />
      <HmtLabel title="Tax" value={tax} />
      <hr />
      <div className="h-1" />
      <HmtLabel title="Total" value={Number((reward - tax).toFixed(2))} />
    </div>
  );
};

export default RewardDisplay;
