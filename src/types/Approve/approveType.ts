export type approveType = {
  id: number;
  title: string;
  description: string;
  applicant_id: number;
  applicant: string;
  owner_id: number;
  owner: string;
  status: string;
  reward: number;
  is_bank: boolean;
  created_at: string;
  updated_at: string;
};

export type updateApproveType = {
  id: number;
  new_status: string;
};
