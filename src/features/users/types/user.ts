export type User = {
  id: number;
  first_name: string;
  last_name: string;
  birthday?: Date;
  address?: string;
  phone_number?: string;
};

export type GetUserResponse = {
  users?: User[];
  nextCursor?: string;
  total: number;
};

export type GetUserParams = {
  q?: string;
  cursor?: string;
};
