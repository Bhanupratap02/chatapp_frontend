/** @format */

"use client";
import useAuth from "@/hooks/useAuth";
import { createContext, useContext } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  name: string;
  profile_pic?: string | null;
}
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: any;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, error } = useAuth();
  const user = data?.data;
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, isLoading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const conext = useContext(AuthContext);
  if (!conext) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return conext;
};