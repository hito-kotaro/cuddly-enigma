import { List, Divider } from '@mui/material';
import React from 'react';
import useApproveListState from '../../../stores/Approves/useApproveListState';
import { approveType } from '../../../types/Approve/approveType';
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import HistoryListItem from '../../atoms/HistoryListItem/HistoryListItem';

const HistoryList = () => {
  const { approveList } = useApproveListState();
  return (
    <div>
      {approveList.length <= 0 ? (
        <div className="mt-10">
          <EmptyStateIcon message="履歴がありません" />
        </div>
      ) : (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {approveList.map((a: approveType) => (
            <>
              <HistoryListItem detail={a} />
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      )}
    </div>
  );
};

export default HistoryList;
