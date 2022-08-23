import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import React, { VFC } from 'react';
import stringToColor from '../../../libs/stringToColor';
import { approveType } from '../../../types/Approve/approveType';
import Badge from '../Badge/Badge';

type Props = {
  detail: approveType;
  // onClick: (id: number) => void;
};

const HistoryListItem: VFC<Props> = (props) => {
  const { detail } = props;
  console.log(detail.status);
  return (
    <ListItem key={detail.id} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: stringToColor(detail.applicant) }}>
          {detail.applicant ? detail.applicant[0].toUpperCase() : ''}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <div className="flex">
            <div className="">
              <div>{detail.title}</div>
              <div className="text-xs text-gray-400">{detail.created_at}</div>
            </div>
            <div className="ml-auto">
              <Badge color={detail.status === 'open' ? 'emerald' : 'rose'}>
                {detail.status === 'open' ? 'open' : 'close'}
              </Badge>
            </div>
          </div>
        }
        secondary={
          <div>
            <div className="flex">
              <Badge color="blue">{`${String(detail.reward)} hmt`}</Badge>
            </div>
            {detail.description}
            <div className="h-3" />
            {detail.status !== 'open' ? (
              <div>
                {detail.updated_at}
                <div className="flex bg-rose-100 p-1 rounded-lg">
                  <Avatar sx={{ bgcolor: stringToColor(detail.owner) }}>
                    {detail.owner ? detail.owner[0].toUpperCase() : ''}
                  </Avatar>
                  <div className="w-3" />
                  <div className=" leading-10">承認したよ！</div>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        }
      />
    </ListItem>
  );
};

export default HistoryListItem;
