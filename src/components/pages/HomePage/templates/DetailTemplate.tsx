import React, { VFC } from 'react';
import Button from '@mui/material/Button/Button';
import { IoChevronBack } from 'react-icons/io5';
import { requestType } from '../../../../types/Request/requestType';
import RequestCard from '../../../organisms/RequestCard/RequestCard';
import useTemplateState from '../../../../stores/TemplatesState/useTemplateState';

type Props = { detail: requestType };
const DetailTemplate: VFC<Props> = (props) => {
  const { detail } = props;
  const { open } = useTemplateState();
  const gas = (detail.reward * 0.05).toFixed(2);
  const onClick = () => {
    console.log({ detail });
  };

  return (
    <>
      <div className="bg-base border-b-1  border-gray-300">
        <Button onClick={() => open('home')} startIcon={<IoChevronBack />}>
          BACK
        </Button>
      </div>

      <div className="px-3">
        <div className="h-5" />

        <RequestCard
          owner={detail.owner}
          title={detail.title}
          reward={detail.reward}
          gas={Number(gas)}
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
    </>
  );
};

export default DetailTemplate;
