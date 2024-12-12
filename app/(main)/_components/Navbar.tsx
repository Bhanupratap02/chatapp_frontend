/** @format */

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="container  mx-auto py-5 flex justify-between items-center">
      <Link href={'/'} className="text-white font-bold text-xl flex items-center cursor-pointer">
        <img src="/images/logo.png" alt="logo" />
        <span className="ml-2 text-xl">Codershouse</span>
      </Link>
      <Link href={"/profile"} className="flex gap-4 items-center">
        <h3 className="text-[18px] ">Sachin K</h3>
        <Avatar className="border-2 border-main2 h-[45px] w-[45px]">
          <AvatarImage
            src="https://github.com/shadcn.png"
            height={70}
            width={70}
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
    </nav>
  );
};

export default Navbar;
