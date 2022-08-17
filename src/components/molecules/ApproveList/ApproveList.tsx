import { List, Divider } from '@mui/material';
import React, { VFC } from 'react';
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
    <div className="ring-1 ring-black ring-opacity-10">
      {approves.length <= 0 ? (
        <EmptyStateIcon message={emptyMessage} />
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
