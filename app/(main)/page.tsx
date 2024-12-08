/** @format */

import { MessageSquareText, PlusIcon, Search } from "lucide-react";
import Navbar from "./_components/Navbar";
import RoomCard from "./_components/RoomCard";
import { Button } from "@/components/ui/button";
const rooms = [
  {
    id: 1,
    topic: "Which framework best for frontend ?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: "/images/monkey-avatar.png",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar: "/images/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
  {
    id: 3,
    topic: "What’s new in machine learning?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: "/images/monkey-avatar.png",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar: "/images/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
  {
    id: 4,
    topic: "Why people use stack overflow?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: "/images/monkey-avatar.png",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar: "/images/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
  {
    id: 5,
    topic: "Artificial inteligence is the future?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: "/images/monkey-avatar.png",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar: "/images/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },{},{}
];
export default function Home() {
  return (
    <div className="text-lg">
      <div className="border-b ">
        <Navbar />
      </div>
      <div className="container  mx-auto">
        <div className="flex items-center justify-between my-5 mx-1">
          <div className="flex items-center relative">
            <span className="font-bold relative text-xl heading">
              All chat rooms
            </span>
            <div
              className={
                "bg-[#262626] ml-5 flex items-center px-3 min-w-[300px] rounded-full "
              }
            >
              <Search size={23} className="text-main2" />
              <input
                type="text"
                className={
                  "bg-transparent border-none outline-none  p-1.5 text-white width-full"
                }
                placeholder="Search for rooms"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-main text-slate-800 hover:bg-main hover:opacity-85">
              <MessageSquareText />
              My Feed
            </Button>
            <Button>
              <PlusIcon className="text-white" />
              Create a new room
            </Button>
          </div>
        </div>
        <div
          className={
            "grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 mt-10"
          }
        >
          {rooms.map((room) => (
            <RoomCard key={room.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
