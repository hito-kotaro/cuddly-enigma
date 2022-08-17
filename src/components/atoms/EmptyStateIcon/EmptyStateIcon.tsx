import React, { VFC } from 'react';
import { TbMoodEmpty } from 'react-icons/tb';

type Props = {
  message: string;
};

const EmptyStateIcon: VFC<Props> = (props) => {
  const { message } = props;
  return (
    <div className=" opacity-25">
      <div className="flex justify-center">
        <TbMoodEmpty size={64} />
      </div>
      <div className="text-center">{message}</div>
    </div>
  );
};

export default EmptyStateIcon;
