import React, { VFC } from 'react';
import UserCard from '../../../atoms/UserCard/UserCard';
import RequestList from '../../../molecules/RequestList/RequestList';
import type { requestType } from '../../../../types/Request/requestType';
import useRequestListState from '../../../../stores/Requests/useRequestListState';
import useAuthState from '../../../../stores/AuthState/useAuthState';

type Props = {
  requests: requestType[];
  onClick: (id: number) => void;
};

const HomeTemplate: VFC<Props> = (props) => {
  const { onClick } = props;
  const { isAuth } = useAuthState();
  const { requestList } = useRequestListState();

  const filterdList: requestType[] = requestList.filter((r: requestType) => {
    return r.order_id === isAuth;
  });

  return (
    <div>
      <div className="h-5" />
      <div className="flex justify-center">
        <UserCard name="Tohi" hmt={10.11} />
      </div>
      <div className="h-5" />
      <RequestList requests={filterdList} onClick={onClick} />
      <div className="h-40" />
    </div>
  );
};

export default HomeTemplate;
