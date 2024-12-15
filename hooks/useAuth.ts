"use client";
import { getUserInfoQueryFn } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const useAuth = () => {
    const query = useQuery({
      queryKey: ["user"],
      queryFn: getUserInfoQueryFn,
      retry: false,
      staleTime: Infinity,
    });
      return query;
}

export default useAuth;