/** @format */

"use client";

import React, { useState } from "react";
import RoomCard from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { Lock, UserPen } from "lucide-react";
import { UpdatePasswordModal } from "./_components/UpdatePasswordModal";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useAuthContext } from "@/context/AuthProvider";
import Image from "next/image";
const UserProfile = () => {
  // const [user, setUser] = useState({
  //   id: 1,
  //   name: "John Doe",
  //   avatar:
  //     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  // });
  const { user, isAuthenticated, error, isLoading } = useAuthContext();
  const [chatRooms, setChatRooms] = useState([
    { id: 1, name: "React Developers", type: "Public" },
    { id: 2, name: "Node.js Enthusiasts", type: "Private" },
  ]);


  const handleUpdatePassword = () => {
    // Handle password update logic
    console.log("Update Password");
  };

  const handleUpdateProfilePicture = () => {
    // Handle profile picture update logic
    console.log("Update Profile Picture");
  };

  return (
    <ProtectedRoute>
      <div className="p-4 max-w-6xl mx-auto text-white rounded-lg">
        {/* Top Section */}
        <div className="flex items-center   mb-8">
          {/* Avatar and Username */}
          <div className="flex flex-col items-center">
            <Image
              src={user?.profile_pic ? user?.profile_pic : "/images/avatar.png"}
              alt={"Profile Image"}
              className="w-[8rem] h-[8rem] rounded-full mr-4 border-2 border-main2"
              loading="lazy"
              width={128}
              height={128}
            />
            <div>
              <h2 className="text-xl font-semibold mt-2 text-white ">
                {user?.username}
              </h2>
              <h2 className="text-lg font-semibold mt-2 text-white ">
                {user?.name}
              </h2>
            </div>
          </div>

          {/* Update Options */}
          <div className=" space-y-4 ">
            {/* <Button className="px-4 py-2 w-2/3  rounded-full font-medium">
            <Lock />
            Update Password
          </Button> */}
            <UpdatePasswordModal />
            <Button className="px-4 py-2 w-2/3 rounded-full bg-main text-black font-medium hover:bg-main hover:opacity-85">
              <UserPen />
              Update Profile 
            </Button>
            {/* <button
            onClick={handleUpdatePassword}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full w-full"
          >
            Update Password
          </button>
          <button
            onClick={handleUpdateProfilePicture}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full w-full"
          >
            Update Profile Picture
          </button> */}
          </div>
        </div>

        {/* Chat Rooms List */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Your Chat Rooms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chatRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default UserProfile;
