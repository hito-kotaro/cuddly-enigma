import React from 'react';
import { toast } from 'react-hot-toast';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import UserCard from '../../../atoms/UserCard/UserCard';
import HomeHeader from '../../../organisms/HomeHeader/HomeHeader';
import { ListData } from '../../../../dev/TestData';
import { ListType } from '../../../../types/ListType/ListType';
import Footer from '../../../organisms/Footer/Footer';
import PrimaryListItem from '../../../atoms/PrimaryListItem/PrimaryListItem';

const HomeTemplate = () => {
  const dummy = () => {
    toast.success('welcome');
  };

  return (
    <>
      <HomeHeader />
      <div className="h-5" />
      <div className="flex justify-center">
        <UserCard name="Tohi" hmt={10.11} />
      </div>
      <div className="h-1" />

      <div className=" h-80 overflow-y-scroll shadow-xl">
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
      <Footer />
    </>
  );
};

export default HomeTemplate;
