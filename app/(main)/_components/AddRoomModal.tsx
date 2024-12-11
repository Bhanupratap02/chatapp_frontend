/** @format */

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
const MAX_BIO_LENGTH = 300;
const AddRoomModal = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();
  const [roomType, setRoomType] = useState("public");
  const [topic, setTopic] = useState("");
  const [bio, setBio] = useState(""); // New bio state

  const createRoom = async () => {
    if (!topic || !bio) return; // Validate both fields

    try {
      // Replace this with your API call logic
      const response = await fetch("/api/createRoom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic, roomType, bio }),
      });
      const data = await response.json();

      if (response.ok) {
        router.push(`/room/${data.id}`);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error("Error creating room:", err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="w-full max-w-md md:max-w-[35rem] bg-gray-800 text-white rounded-lg relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-transparent p-2 z-50"
        >
          <X />
        </button>
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-semibold mb-4">
            Enter the topic to be discussed
          </h3>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Room topic"
            className="w-full p-3 rounded-lg bg-gray-700 text-white border-none outline-none mb-4"
          />
          <h3 className="text-lg font-semibold mb-4">About the room</h3>
          <textarea
            value={bio}
            onChange={(e) => {
              if (e.target.value.length <= MAX_BIO_LENGTH) {
                setBio(e.target.value);
              }
            }}
            placeholder="Add a short description about this room"
            className="w-full p-3 rounded-lg bg-gray-700 text-white border-none outline-none resize-none h-24"
          ></textarea>
          <p className="text-right text-sm text-gray-400">
            {bio.length}/{MAX_BIO_LENGTH}
          </p>
          <h4 className="text-md font-semibold mt-2 mb-4">Room Types</h4>
          <div className="grid grid-cols-2 gap-8">
            <div
              onClick={() => setRoomType("public")}
              className={`flex flex-col items-center p-4 rounded-lg cursor-pointer ${
                roomType === "public"
                  ? "bg-gray-700 border border-main2"
                  : "bg-gray-600"
              }`}
            >
              <img src="/images/globe.png" alt="Open" className="h-8 mb-2" />
              <span>Public</span>
            </div>
            <div
              onClick={() => setRoomType("social")}
              className={`flex flex-col items-center p-4 rounded-lg cursor-pointer ${
                roomType === "social" ? "border border-main2" : "bg-gray-600"
              }`}
            >
              <img src="/images/social.png" alt="Social" className="h-8 mb-2" />
              <span>Social</span>
            </div>
          </div>
        </div>
        <div className="p-6 text-center">
          <h4 className="text-md font-semibold mb-4">
            Start a room, open to everyone
          </h4>
          <button
            onClick={createRoom}
            className="bg-main2 hover:bg-violet-800 text-white px-10 py-3 rounded-full flex items-center mx-auto transition"
          >
            <img
              src="/images/celebration.png"
              alt="Celebration"
              className="h-5 w-5 mr-2"
            />
            <span>Let's go</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRoomModal;
