import React, { VFC } from 'react';
import { Button } from '@mui/material';
import { IoChevronBack } from 'react-icons/io5';
import useGasState from '../../../../stores/GasState/useGasState';
import useTemplateState from '../../../../stores/TemplatesState/useTemplateState';
import {
  approveType,
  updateApproveType,
} from '../../../../types/Approve/approveType';
import useApproveApi from '../../../../useApi/useApproveApi';
import ApproveCard from '../../../organisms/ApproveCard/ApproveCard';
import useUserState from '../../../../stores/UserState/useUserState';
import useBankState from '../../../../stores/BankState/useBankState';

type Props = { detail: approveType };
const ApproveDetailTemplate: VFC<Props> = (props) => {
  const { detail } = props;
  const { isBank } = useBankState();
  const { user } = useUserState();
  const { updateApprove } = useApproveApi();
  const { open } = useTemplateState();
  const { gas } = useGasState();
  const tax = (detail.reward * gas).toFixed(2);
  const onClick = () => {
    const params: updateApproveType = {
      id: detail.id,
      new_status: 'approved',
    };
    updateApprove(params, detail.title);
    open('approve');
  };

  return (
    <>
      <div className="bg-base border-b-1  border-gray-300 flex px-3">
        <div>
          <Button onClick={() => open('approve')} startIcon={<IoChevronBack />}>
            BACK
          </Button>
        </div>
      </div>

      <div className="px-3">
        <div className="h-5" />

        <ApproveCard
          applicant={detail.applicant}
          title={detail.title}
          reward={detail.reward}
          status={detail.status}
          tax={Number(tax)}
          // 申請者が自分OR承認済みの場合ボタンを無効化
          isDisable={
            detail.status !== 'open' ||
            (detail.applicant_id === user.id && isBank === false) ||
            (detail.is_bank === true && isBank === false)
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

export default ApproveDetailTemplate;
