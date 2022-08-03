import React, { VFC } from 'react';
import { List, Divider } from '@mui/material';
import { requestType } from '../../../types/Request/requestType';
import PrimaryListItem from '../../atoms/PrimaryListItem/PrimaryListItem';

type Props = {
  requests: requestType[];
  onClick: (id: number) => void;
};

const RequestList: VFC<Props> = (props) => {
  const { requests, onClick } = props;

  return (
    <div className="h-auto ring-1 ring-black ring-opacity-10">
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
        <div className="h-12" />
      </List>
    </div>
  );
};

export default RequestList;
