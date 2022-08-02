import React, { VFC } from 'react';
import Button from '@mui/material/Button/Button';
import { BsFlower1 } from 'react-icons/bs';
import { IoChevronBack } from 'react-icons/io5';
import { requestType } from '../../../../types/Request/requestType';
import NameLabel from '../../../molecules/NameLabel/NameLabel';

type Props = { detail: requestType; close: () => void };
const DetailTemplate: VFC<Props> = (props) => {
  const { detail, close } = props;
  return (
    <div className="px-2">
      <div className="border-b-1  border-gray-300">
        <Button onClick={close} startIcon={<IoChevronBack />}>
          BACK
        </Button>
      </div>

      <div className="h-5" />

      <NameLabel name={detail.owner} path="/dummy/icon" />

      <div className="h-5" />

      <div className="text-2xl leading-8 border-b-1  border-gray-300 whitespace-nowrap truncate">
        {detail.title}
      </div>

      <div className="h-5" />

      <div className="flex justify-center ">
        <div className="">
          <BsFlower1 size={64} />
          <div className="text-center font-mono text-sm">Done</div>
        </div>
      </div>

      <div className="h-5" />

      <div className="text-center">
        <span className="text-xl font-mono">{detail.reward}</span>
        <span className="text-sm font-mono">HMT</span>
      </div>

      <div className="h-5" />

      <div className="h-56 p-2 ring-1 ring-black ring-opacity-10">
        <p>{detail.description}</p>
      </div>
    </div>
  );
};

export default DetailTemplate;
