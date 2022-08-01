import React from 'react';
import { toast } from 'react-hot-toast';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import UserCard from '../../../atoms/UserCard/UserCard';
import { ListData } from '../../../../dev/TestData';
import { ListType } from '../../../../types/ListType/ListType';
import PrimaryListItem from '../../../atoms/PrimaryListItem/PrimaryListItem';

const HomeTemplate = () => {
  const dummy = () => {
    toast.success('welcome');
  };

  return (
    <div>
      <div className="h-5" />
      <div className="flex justify-center">
        <UserCard name="Tohi" hmt={10.11} />
      </div>
      <div className="h-5" />

      <div className="shadow-xl">
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {ListData.map((l: ListType) => (
            <>
              <PrimaryListItem
                key={l.id}
                name={l.name}
                title={l.primary}
                reward={l.reward}
                description={l.secondary}
                onClick={dummy}
              />
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </div>
      <div className="h-14" />
    </div>
  );
};

export default HomeTemplate;
