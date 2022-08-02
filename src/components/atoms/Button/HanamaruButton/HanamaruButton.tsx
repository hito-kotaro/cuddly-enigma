import { Button } from '@mui/material';
import React, { VFC } from 'react';
import { BsFlower1 } from 'react-icons/bs';

type Props = { label: string; onClick: () => void };

const HanamaruButton: VFC<Props> = (props) => {
  const { label, onClick } = props;
  return (
    <div>
      <Button onClick={onClick}>
        <BsFlower1 size={64} />
      </Button>
      <div className="font-mono text-sm text-center">{label}</div>
    </div>
  );
};

export default HanamaruButton;
