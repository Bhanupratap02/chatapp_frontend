/** @format */

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Navbar = () => {
  return (
    <nav className="container  mx-auto py-5 flex justify-between items-center">
      <div className="text-white font-bold text-xl flex items-center">
        <img src="/images/logo.png" alt="logo" />
        <span className="ml-2 text-xl">Codershouse</span>
      </div>
      <div className="flex gap-4 items-center">
        <h3 className="text-[18px] ">Sachin K</h3>
        <Avatar className="border-2 border-blue-700 h-[45px] w-[45px]">
          <AvatarImage
            src="https://github.com/shadcn.png"
            height={70}
            width={70}
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;
