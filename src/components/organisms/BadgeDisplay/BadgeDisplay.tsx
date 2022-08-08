import React, { VFC } from 'react';
import Badge from '../../atoms/Badge/Badge';

type Props = {
  publicRequest: boolean;
  status: boolean;
};

const BadgeDisplay: VFC<Props> = (props) => {
  const { publicRequest, status } = props;
  return (
    <>
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
    </>
  );
};

export default BadgeDisplay;
