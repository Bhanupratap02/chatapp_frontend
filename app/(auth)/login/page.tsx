"use client";

import { useForm } from "react-hook-form";
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { loginMutationFn } from "@/lib/api";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

//validation schema
const loginSchema = z.object({
  email:z.string().email("Invalid email address"),
  password:z.string().min(6,"Password must be at least 6 characters."),
})
export type LoginFormData = z.infer<typeof loginSchema>;
const Login = () => {
  const {
    mutate: loginUser,
    isPending,
    error,
  } = useMutation({
    mutationFn: loginMutationFn,
  });
  const router = useRouter();
  const formMethods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const {handleSubmit} = formMethods
  // 2. Define a submit handler.
  function onSubmit(data: LoginFormData) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(data,'login form data');
       loginUser(data, {
         onSuccess: () => {
               toast.success("Signup successful", {
                 style: {
                   background: "#1d1d1d",
                   color: "#fff",
                 },
               });
           router.push("/"); // Redirect after successful login
         },
         onError: (error) => {
           console.log("Login failed:", error);
         },
       });
  }
  return (
    <Form {...formMethods}>
      <div className="flex flex-col items-center justify-center min-h-[85vh] text-white p-4">
        <div className="bg-[#1d1d1d] p-10 rounded-xl shadow-md max-w-md w-full">
          <div className="flex items-center cursor-pointer gap-3 mb-6 justify-center">
            <img src="/images/logo.png" alt="logo" />
            <h2 className="text-2xl font-semibold text-center">Log In</h2>
          </div>
          {error && (
            <p className="text-red-500 text-center py-2">
              {error?.error || "Invalid email or password"}
            </p>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
              control={formMethods.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel className="mb-2">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border-none outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formMethods.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel className="mb-2">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border-none outline-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isPending}
                className=" bg-main2 hover:bg-violet-800 mt-4 px-6 w-1/3 "
              >
                {isPending ? "Logging in..." : "Log In"}
              </Button>
            </div>
          </form>
          <p className="text-center mt-4 text-gray-400">
            Don't have an account?{" "}
            <a href="/signup" className="text-main2 hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </Form>
  );
}

export default Login