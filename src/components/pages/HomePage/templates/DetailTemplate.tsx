import React, { VFC } from 'react';
import Button from '@mui/material/Button/Button';
import { IoChevronBack } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { requestType } from '../../../../types/Request/requestType';
import RequestCard from '../../../organisms/RequestCard/RequestCard';
import useTemplateState from '../../../../stores/TemplatesState/useTemplateState';
import useUserState from '../../../../stores/UserState/useUserState';
import useRequestApi from '../../../../useApi/useRequestApi';
import useGasState from '../../../../stores/GasState/useGasState';

type Props = { detail: requestType };
const DetailTemplate: VFC<Props> = (props) => {
  const { detail } = props;
  const { user } = useUserState();
  const { open } = useTemplateState();
  const { completeRequest } = useRequestApi();
  const { gas } = useGasState();
  const tax = (detail.reward * gas).toFixed(2);

  const onClick = () => {
    completeRequest(detail.id);
  };

  return (
    <>
      <div className="bg-base border-b-1  border-gray-300 flex px-3">
        <div>
          <Button onClick={() => open('list')} startIcon={<IoChevronBack />}>
            BACK
          </Button>
        </div>
        {detail.owner_id === user.id ? (
          <div className="ml-auto">
            <Button onClick={() => open('list')} startIcon={<AiOutlineClose />}>
              {/* 完了していない依頼を終了した場合は、GASを引かれる */}
              {/* 完了依頼を出したらしたら自動的に削除される */}
              {/* 承認を却下した場合 */}
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
          ownerId={detail.owner_id}
          title={detail.title}
          publicRequest={detail.order_id === null}
          reward={detail.reward}
          status={detail.status}
          gas={Number(tax)}
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
