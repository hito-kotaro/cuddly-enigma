import React, { useEffect, useState, VFC } from 'react';
import UserCard from '../../../atoms/UserCard/UserCard';
import RequestList from '../../../molecules/RequestList/RequestList';
import type { requestType } from '../../../../types/Request/requestType';
import useUserState from '../../../../stores/UserState/useUserState';

type Props = {
  requests: requestType[];
  onClick: (id: number) => void;
};

const HomeTemplate: VFC<Props> = (props) => {
  const { requests, onClick } = props;
  const { user } = useUserState();
  const [filtered, setFiltered] = useState<requestType[]>([]);

  // requestsが更新されるたびにフィルター
  useEffect(() => {
    const tmp: requestType[] = requests.filter((r: requestType) => {
      return r.order_id === user.id;
    });
    setFiltered(tmp);
  }, [requests]);

  return (
    <div>
      <div className="h-5" />
      <div className="flex justify-center">
        <UserCard user={user} />
        {/* <UserCard name={user.name} hmt={1000}} /> */}
      </div>
      <div className="h-5" />
      <RequestList requests={filtered} onClick={onClick} />
      <div className="h-40" />
    </div>
  );
};

export default HomeTemplate;
