export type requestType = {
  id: number;
  title: string;
  owner: string;
  description: string;
  reward: number;
  status: string;
  created_at: string;
  updated_at: string;
};

export type createRequestType = {
  title: string;
  description: string;
  reward: number;
  order_id: number;
  public: boolean;
};
