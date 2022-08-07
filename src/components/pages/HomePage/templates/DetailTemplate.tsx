import React, { VFC } from 'react';
import Button from '@mui/material/Button/Button';
import { IoChevronBack } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { requestType } from '../../../../types/Request/requestType';
import RequestCard from '../../../organisms/RequestCard/RequestCard';
import useTemplateState from '../../../../stores/TemplatesState/useTemplateState';
import useUserState from '../../../../stores/UserState/useUserState';

type Props = { detail: requestType };
const DetailTemplate: VFC<Props> = (props) => {
  const { detail } = props;
  const { user } = useUserState();
  const { open } = useTemplateState();
  const gas = (detail.reward * 0.05).toFixed(2);

  const onClick = () => {
    console.log({ detail });
  };

  return (
    <>
      <div className="bg-base border-b-1  border-gray-300 flex px-3">
        <div>
          <Button onClick={() => open('home')} startIcon={<IoChevronBack />}>
            BACK
          </Button>
        </div>
        {detail.owner_id === user.id ? (
          <div className="ml-auto">
            <Button onClick={() => open('home')} startIcon={<AiOutlineClose />}>
              依頼を終了する
            </Button>
          </div>
        ) : (
          ''
        )}
      </div>

      <div className="px-3">
        <div className="h-5" />

        <RequestCard
          owner={detail.owner}
          title={detail.title}
          publicRequest={detail.order_id === null}
          reward={detail.reward}
          status={detail.status}
          gas={Number(gas)}
          onClick={onClick}
        />

        <div className="h-5" />
        <div className="h-48 p-2 ring-1 ring-black ring-opacity-10">
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
