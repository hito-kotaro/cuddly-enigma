import React, { useEffect, useState, VFC } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import RequestList from '../../../molecules/RequestList/RequestList';
import type { requestType } from '../../../../types/Request/requestType';

type Props = {
  requests: requestType[];
  onClick: (id: number) => void;
};

const ListTemplate: VFC<Props> = (props) => {
  const { requests, onClick } = props;
  const [filterStatus, setFilterStatus] = useState('open');
  const [filterd, setFilterd] = useState<requestType[]>(
    requests.filter((r: requestType) => {
      return r.status;
    }),
  );

  const onChange = (e: SelectChangeEvent) => {
    setFilterStatus(e.target.value);
  };

  useEffect(() => {
    const tmp: requestType[] = requests.filter((r: requestType) => {
      if (filterStatus === 'open') {
        return r.status;
      }
      if (filterStatus === 'closed') {
        return !r.status;
      }
      return r;
    });
    setFilterd(tmp);
  }, [filterStatus, requests]);

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
      <RequestList
        requests={filterd}
        emptyMessage="依頼がありません"
        onClick={onClick}
      />
      <div className="h-40" />
    </>
  );
};

export default ListTemplate;
