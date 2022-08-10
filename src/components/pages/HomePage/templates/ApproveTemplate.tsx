import React, { useEffect, useState, VFC } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { approveType } from '../../../../types/Approve/approveType';
import ApproveList from '../../../molecules/ApproveList/ApproveList';

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
    const tmp: approveType[] = approves.filter((a: approveType) => {
      if (filterStatus === 'open') {
        return a.status === 'open';
      }
      if (filterStatus === 'approved') {
        return a.status === 'approved';
      }
      return a;
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
              <MenuItem value="approved">approved</MenuItem>
              <MenuItem value="all">all</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <ApproveList approves={filterd} onClick={onClick} />
      <div className="h-40" />
    </>
  );
};

export default ApproveTemplate;
