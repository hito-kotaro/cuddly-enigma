import { Button } from '@mui/material';
import React, { VFC } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import useTemplateState from '../../../../stores/TemplatesState/useTemplateState';
import { approveType } from '../../../../types/Approve/approveType';
import ApproveCard from '../../../organisms/ApproveCard/ApproveCard';
import RequestCard from '../../../organisms/RequestCard/RequestCard';

type Props = { detail: approveType };
const ApproveDetailTemplate: VFC<Props> = (props) => {
  const { detail } = props;
  const { open } = useTemplateState();
  const gas = (detail.reward * 0.05).toFixed(2);

  console.log('test');
  const onClick = () => {
    console.log(detail.id);
    // completeRequest(detail.id);
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
          applicantId={detail.applicant_id}
          title={detail.title}
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

export default ApproveDetailTemplate;
