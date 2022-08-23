import React from 'react';
import HistoryList from '../../../molecules/HistoryList/HistoryList';

const HistoryTemplate = () => {
  return (
    <>
      {/* <div className="bg-base sticky top-0 z-40">
        <div className="py-2 w-1/3 ml-auto">tmp</div>
      </div> */}
      <HistoryList />
      <div className="h-40" />
    </>
  );
};

export default HistoryTemplate;
