/** @format */
"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthContext } from "@/context/AuthProvider";
import { log } from "console";
import Link from "next/link";
const Navbar = () => {
  const { user, isAuthenticated,error,isLoading } = useAuthContext();
  console.log("user",user,isAuthenticated,error)
  return (
    <nav className="container  mx-auto py-5 flex justify-between items-center">
      <Link
        href={"/"}
        className="text-white font-bold text-xl flex items-center cursor-pointer"
      >
        <img src="/images/logo.png" alt="logo" />
        <span className="ml-2 text-xl">Codershouse</span>
      </Link>
      <div>
        {isAuthenticated ? (
          <Link href={"/profile"} className="flex gap-4 items-center">
            <h3 className="text-[18px] ">{user?.username}</h3>
            <Avatar className="border-2 border-main2 h-[45px] w-[45px]">
              <AvatarImage
                src={
                  user?.profile_pic ? user?.profile_pic : "images/avatar.png"
                }
                height={70}
                width={70}
                alt="@shadcn"
                className="bg-[#1d1d1d]"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        ) : (
          <Link href="/login">
            <span className="px-6 py-2 border  border-main2 rounded-md hover:border-2">
              Login
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
