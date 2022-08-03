import React, { VFC } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import UserCard from '../../../atoms/UserCard/UserCard';
import PrimaryListItem from '../../../atoms/PrimaryListItem/PrimaryListItem';
import { requestType } from '../../../../types/Request/requestType';

type Props = {
  requests: requestType[];
  onClick: (id: number) => void;
};

const HomeTemplate: VFC<Props> = (props) => {
  const { requests, onClick } = props;
  return (
    <div>
      <div className="h-5" />
      <div className="flex justify-center">
        <UserCard name="Tohi" hmt={10.11} />
      </div>
      <div className="h-5" />

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
    </div>
  );
};

export default HomeTemplate;
