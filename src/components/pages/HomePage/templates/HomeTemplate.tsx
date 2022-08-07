import React, { useEffect, useState, VFC } from 'react';
import UserCard from '../../../atoms/UserCard/UserCard';
import RequestList from '../../../molecules/RequestList/RequestList';
import type { requestType } from '../../../../types/Request/requestType';

type Props = {
  requests: requestType[];
  onClick: (id: number) => void;
};

const HomeTemplate: VFC<Props> = (props) => {
  const { requests, onClick } = props;
  const [filtered, setFiltered] = useState<requestType[]>([]);

  // requestsが更新されるたびにフィルター
  useEffect(() => {
    const tmp: requestType[] = requests.filter((r: requestType) => {
      return r.order_id === Number(localStorage.getItem('id'));
    });
    setFiltered(tmp);
  }, [requests]);

  return (
    <div>
      <div className="h-5" />
      <div className="flex justify-center">
        <UserCard name="Tohi" hmt={10.11} />
      </div>
      <div className="h-5" />
      <RequestList requests={filtered} onClick={onClick} />
      <div className="h-40" />
    </div>
  );
};

export default HomeTemplate;
