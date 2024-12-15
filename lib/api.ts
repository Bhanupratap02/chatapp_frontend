/** @format */

import API from "./axios-client";
import { LoginFormData } from "@/app/(auth)/login/page";
export const loginMutationFn = async (data: LoginFormData) =>
  await API.post("/api/auth/login", data);

export const getUserInfoQueryFn = async () =>{
  return await API.get("/api/auth/user-info");
}
export const getChatRoomsQueryFn = async () => {
  return await API.get("/api/chat/rooms");
};