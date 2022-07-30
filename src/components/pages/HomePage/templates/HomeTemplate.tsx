import React from 'react';
import { toast } from 'react-hot-toast';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import useLogin from '../../../../hooks/useLogin';

const HomeTemplate = () => {
  const { logout } = useLogin();

  const dummy = () => {
    toast.success('welcome');
  };

  return (
    <>
      <Button onClick={logout}>Primary</Button>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start" onClick={dummy}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="洗濯物干し"
            secondary="おさらあらいありがとう"
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="洗濯物干し"
            secondary="おさらあらいありがとう"
          />
        </ListItem>
      </List>
    </>
  );
};

export default HomeTemplate;
