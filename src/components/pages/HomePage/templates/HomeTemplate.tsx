import React from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { BsFlower1 } from 'react-icons/bs';
import { toast } from 'react-hot-toast';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography/Typography';
import UserCard from '../../../atoms/UserCard/UserCard';
import HomeHeader from '../../../organisms/HomeHeader/HomeHeader';
import { ListData } from '../../../../dev/TestData';
import { ListType } from '../../../../types/ListType/ListType';

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
      <div className="h-10" />

      <div className=" h-80 overflow-y-scroll ">
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {ListData.map((l: ListType) => (
            <>
              <ListItem key={l.id} alignItems="flex-start" onClick={dummy}>
                <ListItemAvatar>
                  <Avatar alt={l.name} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={l.primary}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {`${l.reward}HMT`}
                      </Typography>
                      {` - ${l.secondary}`}
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </div>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Recents" icon={<BsFlower1 />} />
          <BottomNavigationAction label="Favorites" icon={<BsFlower1 />} />
          <BottomNavigationAction label="Archive" icon={<BsFlower1 />} />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default HomeTemplate;
