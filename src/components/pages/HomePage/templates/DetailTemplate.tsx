import React, { useState, VFC } from 'react';
import Button from '@mui/material/Button/Button';
import { IoChevronBack } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { requestType } from '../../../../types/Request/requestType';
import RequestCard from '../../../organisms/RequestCard/RequestCard';
import useTemplateState from '../../../../stores/TemplatesState/useTemplateState';
import useUserState from '../../../../stores/UserState/useUserState';
import useRequestApi from '../../../../useApi/useRequestApi';
import useGasState from '../../../../stores/GasState/useGasState';
import useModal from '../../../organisms/Modal/useModal';
import ConfirmModal from '../../../organisms/Modal/ConfirmModal/ConfirmModal';
import useBankState from '../../../../stores/BankState/useBankState';

type Props = { detail: requestType };
const DetailTemplate: VFC<Props> = (props) => {
  const { detail } = props;
  const [isDisable, setIsDisable] = useState(false);
  const { user } = useUserState();
  const { isBank } = useBankState();
  const { open } = useTemplateState();
  const { completeRequest, closeRequest } = useRequestApi();
  const { gas } = useGasState();
  const closeRequestModal = useModal();
  const tax = (detail.reward * gas).toFixed(2);
  const confirmMsg = `報酬額から手数料を引いた${
    detail.reward - Number(tax)
  }HMTが返却されます`;

  const onClick = () => {
    completeRequest(detail.id);
    open('list');
  };

  const closeSubmitHandler = () => {
    // api call
    closeRequest(detail.id);
    // モーダル閉じて
    closeRequestModal.closeHandler();
    // リストに戻る
    open('list');
  };

  // console.log(detail);

  return (
    <>
      <ConfirmModal
        confirmMsg="依頼を終了しますか?"
        alertMsg={confirmMsg}
        submitMsg="依頼を終了"
        modal={closeRequestModal}
        submitHandler={closeSubmitHandler}
      />
      <div className="bg-base border-b-1  border-gray-300 flex px-3">
        <div>
          <Button onClick={() => open('list')} startIcon={<IoChevronBack />}>
            BACK
          </Button>
        </div>
        {(detail.owner_id === user.id &&
          detail.is_bank === false &&
          detail.status === true) ||
        isBank === true ? (
          <div className="ml-auto">
            <Button
              onClick={closeRequestModal.openHandler}
              startIcon={<AiOutlineClose />}
            >
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
          tax={Number(tax)}
          isDisable={
            detail.status === false ||
            (detail.owner_id === user.id && isBank === false)
          }
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
