import React, { VFC } from 'react';
import Button from '@mui/material/Button/Button';
import { IoChevronBack } from 'react-icons/io5';
import { requestType } from '../../../../types/Request/requestType';
import RequestCard from '../../../organisms/RequestCard/RequestCard';

type Props = { detail: requestType; close: () => void };
const DetailTemplate: VFC<Props> = (props) => {
  const { detail, close } = props;
  const gas = detail.reward * 0.05;
  const onClick = () => {
    console.log({ detail });
  };

  return (
    <div className="px-3">
      <div className="border-b-1  border-gray-300">
        <Button onClick={close} startIcon={<IoChevronBack />}>
          BACK
        </Button>
      </div>

      <div className="h-5" />

      <RequestCard
        owner={detail.owner}
        title={detail.title}
        reward={detail.reward}
        gas={gas}
        onClick={onClick}
      />

      <div className="h-5" />

      <div className="h-5" />

      <div className="h-56 p-2 ring-1 ring-black ring-opacity-10">
        <p className="text-gray-500">
          {detail.description === ''
            ? 'コメントはありません'
            : detail.description}
        </p>
      </div>
    </div>
  );
};

export default DetailTemplate;
