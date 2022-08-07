import React, { useEffect } from 'react';
import useRequestApi from '../../../../useApi/useRequestApi';

const ListTemplate = () => {
  const { fetchRequests } = useRequestApi();
  useEffect(() => {
    fetchRequests();
  }, []);
  return (
    <>
      <div>ListTemplate</div>
    </>
  );
};

export default ListTemplate;
