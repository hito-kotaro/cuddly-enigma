import { requestType } from '../../types/Request/requestType';

export const requests: requestType[] = [
  {
    id: 1,
    title: '夕飯の準備',
    owner: 'tohi',
    description: 'お皿洗いまで',
    reward: 10.5,
    status: 'open',
    created_at: '2022-08-02',
    updated_at: '2022-08-02',
  },
  {
    id: 2,
    title: '床掃除',
    owner: 'tohi',
    description: '午前中にお願いします。',
    reward: 10.5,
    status: 'open',
    created_at: '2022-08-02',
    updated_at: '2022-08-02',
  },
  {
    id: 3,
    title: 'お風呂掃除',
    owner: 'tohi',
    description: '明日までにお願いします。',
    reward: 10.5,
    status: 'open',
    created_at: '2022-08-02',
    updated_at: '2022-08-02',
  },
  {
    id: 4,
    title: '朝ごはん',
    owner: 'tohi',
    description: 'パンと目玉焼きが食べたい',
    reward: 10.5,
    status: 'open',
    created_at: '2022-08-02',
    updated_at: '2022-08-02',
  },
];
