/** @format */

import { useMutation } from "@tanstack/react-query";
import API from "@/lib/axios-client";
import { FormData } from "@/app/(auth)/signup/page";
const signupUser = async (formData:FormData) => {
    const res = await API.post("/api/auth/register", formData);
    // console.log("res",res);
    return res;
};
export const useSignup = () =>{
    return useMutation({
      mutationFn: signupUser,
    });
}