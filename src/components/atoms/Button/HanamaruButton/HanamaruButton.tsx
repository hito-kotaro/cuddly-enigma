import { Button } from '@mui/material';
import React, { VFC } from 'react';
import { BsFlower1 } from 'react-icons/bs';

type Props = { label: string; isDisabled: boolean; onClick: () => void };

const HanamaruButton: VFC<Props> = (props) => {
  const { label, isDisabled, onClick } = props;
  return (
    <div>
      <Button onClick={onClick} disabled={isDisabled}>
        <BsFlower1 size={64} />
      </Button>
      <div className="font-mono text-sm text-center">{label}</div>
    </div>
  );
};

export default HanamaruButton;
