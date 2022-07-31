import React from 'react';
import { toast } from 'react-hot-toast';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography/Typography';
import UserCard from '../../../atoms/UserCard/UserCard';
import MenuButton from '../../../atoms/MenuButton/MenuButton';
import HeaderLogo from '../../../atoms/HeaderLogo/HeaderLogo';

const HomeTemplate = () => {
  const dummy = () => {
    toast.success('welcome');
  };

  return (
    <>
      <div className="border-b-1 flex p-1">
        <div>
          <HeaderLogo />
        </div>
        <div className="ml-auto">
          <MenuButton />
        </div>
      </div>
      <div className="h-5" />
      <div className="flex justify-center">
        <UserCard name="Tohi" hmt={10.11} />
      </div>
      <div className="h-10" />

      <div className=" h-80 overflow-y-scroll ">
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems="flex-start" onClick={dummy}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="洗濯物干し"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    10.00hmt
                  </Typography>
                  {' — 取り込みまでお願いします'}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start" onClick={dummy}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="洗濯物干し"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    10.00hmt
                  </Typography>
                  {
                    ' — 取り込みまでお願いします取り込みまでお願いします取り込みまでお願いします取り込みまでお願いします取り込みまでお願いします'
                  }
                </>
              }
            />
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default HomeTemplate;
