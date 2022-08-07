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
    <div className="ring-1 ring-black ring-opacity-10">
      {requests.length <= 0 ? (
        '該当する依頼がありません'
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
