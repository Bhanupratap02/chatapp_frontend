/** @format */

import { useQuery } from "@tanstack/react-query";
import API from "@/lib/axios-client";

const checkUsernameAvailability = async (username: string) => {
  const { data } = await API.post("/api/auth/check-username", { username });
  return data;
};

export const useUsernameCheck = (username: string) => {
  return useQuery(
    {
      queryKey: ["username-check", username],
      queryFn: () => checkUsernameAvailability(username),
      enabled: !!username, // Only run if username is not empty
      staleTime: 0,
    //   cacheTime: 0,
     
    });
};
