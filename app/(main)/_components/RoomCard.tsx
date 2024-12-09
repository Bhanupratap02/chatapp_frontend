/** @format */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock9, Users } from "lucide-react";
import Link from "next/link";
const RoomCard = () => {
  // #1d1d1d
  // #2d2d39
  return (
    <div className="bg-[#1d1d1d] p-5 rounded-lg ">
      <Link href={"rooms/1"} className="cursor-pointer hover:underline">
        <h3 className="font-semibold">Demo Room for testing</h3>
      </Link>

      <div className={" flex justify-start items-center py-2"}>
        <Clock9 size={15} className="text-main2 mr-1" />
        <span className="mr-1 font-semibold text-sm font-mono text-[#b2bdbd]">
          Created <span className="">7 months ,1 week ago</span>{" "}
        </span>
      </div>
      <div className="flex items-center my-3 cursor-pointer">
        <Avatar className="border-2 border-main2 h-[38px] w-[38px]">
          <AvatarImage
            src="https://github.com/shadcn.png"
            height={40}
            width={40}
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className={"ml-2"}>
          <span className="pb-1 inline-block mr-1 text-main">
            Host <span className=""> @sachin</span>
          </span>
          {/* <img src="/images/chat-bubble.png" alt="chat-bubble" /> */}
        </div>
      </div>

      <div className={" flex justify-end items-center"}>
        <Users size={15} className="text-main2 mr-1" />
        <span className="mr-1 font-semibold text-sm font-mono text-[#b2bdbd]">
          3 <span className="">members</span>{" "}
        </span>
      </div>
    </div>
  );
};

export default RoomCard;
