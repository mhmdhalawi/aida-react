import api from "../../../libs/axios";
import type { GetUserParams, GetUserResponse } from "../types/user";

export const getUsers = async (
  params: GetUserParams
): Promise<GetUserResponse> => {
  return await api.get("/users", { params });
};
