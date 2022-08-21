import React, { VFC } from 'react';
import { List, Divider } from '@mui/material';
import { approveType } from '../../../types/Approve/approveType';
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import PrimaryListItem from '../../atoms/PrimaryListItem/PrimaryListItem';

type Props = {
  approves: approveType[];
  emptyMessage: string;
  onClick: (id: number) => void;
};

const ApproveList: VFC<Props> = (props) => {
  const { approves, emptyMessage, onClick } = props;

  return (
    <div>
      {approves.length <= 0 ? (
        <div className="mt-10">
          <EmptyStateIcon message={emptyMessage} />
        </div>
      ) : (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {approves.map((a: approveType) => (
            <>
              <PrimaryListItem
                id={a.id}
                name={a.applicant}
                title={a.title}
                reward={a.reward}
                description={a.description}
                updatedAt={a.updated_at}
                status={a.status === 'open'}
                onClick={onClick}
              />
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      )}
    </div>
  );
};

export default ApproveList;
