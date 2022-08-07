export type requestType = {
  id: number;
  title: string;
  owner: string;
  owner_id: number;
  order_id?: number;
  description: string;
  reward: number;
  status: boolean;
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

export type closeRequestType = {
  id: number;
};
