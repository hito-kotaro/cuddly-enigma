import React, { VFC } from 'react';
import { List, Divider } from '@mui/material';
import { requestType } from '../../../types/Request/requestType';
import PrimaryListItem from '../../atoms/PrimaryListItem/PrimaryListItem';
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';

type Props = {
  requests: requestType[];
  emptyMessage: string;
  onClick: (id: number) => void;
};

const RequestList: VFC<Props> = (props) => {
  const { requests, emptyMessage, onClick } = props;

  return (
    <div className="ring-opacity-10">
      {requests.length <= 0 ? (
        <div className="mt-10">
          <EmptyStateIcon message={emptyMessage} />
        </div>
      ) : (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {requests.map((r: requestType) => (
            <>
              <PrimaryListItem
                id={r.id}
                name={r.owner}
                title={r.title}
                reward={r.reward}
                description={r.description}
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

export default RequestList;
