/** @format */

"use client";
import { useAuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated,isLoading } = useAuthContext();
  const router = useRouter();
    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        router.push("/login"); // Redirect to login if not authenticated
      }
    },[isLoading, isAuthenticated, router]);
      if(isLoading) {
        return <p>Loading...</p>; // Show a loading indicator while checking auth state
      }
  return <>{children}</>;
};
