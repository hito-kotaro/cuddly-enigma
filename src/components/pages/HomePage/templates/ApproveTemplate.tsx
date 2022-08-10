import React, { useEffect, useState, VFC } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Divider,
  List,
} from '@mui/material';
import { approveType } from '../../../../types/Approve/approveType';
import PrimaryListItem from '../../../atoms/PrimaryListItem/PrimaryListItem';

type Props = {
  approves: approveType[];
  onClick: (id: number) => void;
};

const ApproveTemplate: VFC<Props> = (props) => {
  const { approves, onClick } = props;
  const [filterStatus, setFilterStatus] = useState('open');
  const [filterd, setFilterd] = useState<approveType[]>(
    approves.filter((a: approveType) => {
      return a.status === 'open';
    }),
  );

  const onChange = (e: SelectChangeEvent) => {
    setFilterStatus(e.target.value);
  };

  useEffect(() => {
    const tmp: approveType[] = approves.filter((r: approveType) => {
      if (filterStatus === 'open') {
        return r.status;
      }
      if (filterStatus === 'closed') {
        return !r.status;
      }
      return r;
    });
    setFilterd(tmp);
  }, [filterStatus, approves]);

  return (
    <>
      <div className="bg-base sticky top-0 z-40">
        <div className="py-2 w-1/3 ml-auto">
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              defaultValue="open"
              value={filterStatus}
              label="Status"
              onChange={onChange}
            >
              <MenuItem value="open">open</MenuItem>
              <MenuItem value="closed">closed</MenuItem>
              <MenuItem value="all">all</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {approves.map((a: approveType) => (
          <>
            <PrimaryListItem
              id={a.id}
              name={a.applicant}
              title={a.title}
              reward={a.reward}
              description={a.description}
              onClick={onClick}
            />
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>

      <div className="h-40" />
    </>
  );
};

export default ApproveTemplate;
