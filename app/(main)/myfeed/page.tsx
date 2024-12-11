/** @format */
"use client";

import React, { useState, useEffect, ChangeEvent, useMemo } from "react";
import {
  Users,
  Settings,
  // Phone,
  // Video,
  Send,
  Paperclip,
  Smile,
  User,
  MoveLeft,
  Phone,
  Video,
  ArrowBigLeft,
  ArrowLeft,
} from "lucide-react";
import { format } from "date-fns";
interface Chat {
  id: number;
  name: string;
  avatar: string;
  type: "user" | "group";
  lastMessage: string;
}

interface Message {
  id: number;
  sender: Chat | CurrentUser;
  content: string;
  timestamp: Date;
}
interface CurrentUser {
  id: number;
  name: string;
  avatar: string;
}

// interface ChatUIProps {
//   initialChats: Chat[];
// }
const ChatUI = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [filter, setFilter] = useState<"all" | "user" | "group">("all");
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
 const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);
  const currentUser:CurrentUser = {
    id: 1,
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  };

  const chats:Chat[] = [
    {
      id: 1,
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      type: "user",
      lastMessage: "Hey there!",
    },
    {
      id: 2,
      name: "React Developers",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      type: "group",
      lastMessage: "New updates are live!",
    },
  ];

  useEffect(() => {
    // Simulate initial messages
    setMessages([
      { id: 1, sender: chats[0], content: "Hey there!", timestamp: new Date() },
      { id: 2, sender: currentUser, content: "Hi!", timestamp: new Date() },
    ]);
  }, []);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      sender: currentUser,
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");
    setIsTyping(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
    setIsTyping(e.target.value.trim() !== "");
  };

 const filteredChats = useMemo(
   () =>
     chats.filter((chat) => (filter === "all" ? true : chat.type === filter)),
   [chats, filter]
 );


  return (
    <div className="flex h-[90vh]  text-white">
      {/* Left Sidebar */}
      {isSidebarVisible && (
        <aside
          className={`w-full md:w-1/4 p-4 border-r border-gray-700 ${
            selectedChat ? "hidden md:flex" : "flex"
          } flex-col `}
        >
          <header className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">My Conversations</h2>
          </header>

          {/* Filter Icons */}
          <div className="flex justify-around mb-4">
            {["all", "user", "group"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as "all" | "user" | "group")}
                className={`p-2 rounded-full ${
                  filter === type ? "bg-main2" : "hover:bg-gray-700"
                }`}
              >
                {type === "all" ? (
                  <Users className="w-5 h-5" />
                ) : type === "user" ? (
                  <User className="w-5 h-5" />
                ) : (
                  <Users className="w-5 h-5" />
                )}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-700 text-white rounded-full py-2 px-4 mb-4 focus:ring-2 focus:ring-blue-500"
          />

          {/* Conversations List */}
          <section className="space-y-4">
            {filteredChats.length ? (
               filteredChats.map((chat) => (
              <div
                key={chat.id}
                className={`flex items-center p-2 rounded-lg hover:bg-gray-700 cursor-pointer ${
                  selectedChat?.id === chat.id && "bg-gray-700"
                }`}
                onClick={() => setSelectedChat(chat)}
              >
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-10 h-10 rounded-full mr-3"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-semibold text-main">{chat.name}</h3>
                  <p className="text-sm text-gray-400 truncate">
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            ))
            ) : (
              <p className="text-gray-400 text-center">
                No conversations found.
              </p>
            )}
           
          </section>
        </aside>
      )}

      {/* Chat Section */}
      <main
        className={`flex-1 flex flex-col bg-[#1d1d1d] ${
          !isSidebarVisible && "md:flex"
        }`}
      >
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <header className="bg-main2 p-4 flex items-center justify-between">
              <div className="flex items-center">
                <button
                  className="mx-2  p-2 rounded-full hover:bg-violet-800 md:hidden"
                  onClick={() => {
                    setSelectedChat(null);
                    setIsSidebarVisible(true);
                  }}
                >
                  <ArrowLeft
                    width={30}
                    className=" w-5 h-5  cursor-pointer text-2xl"
                  />
                  {/* Back */}
                </button>
                <img
                  src={selectedChat.avatar}
                  alt={selectedChat.name}
                  className="w-10 h-10 rounded-full mr-3"
                  loading="lazy"
                />
                <h2 className="font-semibold">{selectedChat.name}</h2>
              </div>
              <div className="flex space-x-4">
                <button
                  aria-label="Start voice call"
                  className="p-2 rounded-full hover:bg-violet-800"
                >
                  <Phone className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-violet-800">
                  <Video className="w-5 h-5" />
                </button>
              </div>
            </header>

            {/* Chat Messages */}
            <section className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender.id === currentUser.id
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md ${
                      message.sender.id === currentUser.id
                        ? "bg-main2"
                        : "bg-gray-700"
                    } rounded-lg p-3 shadow-md`}
                  >
                    <p>{message.content}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {format(message.timestamp, "p")}
                    </p>
                  </div>
                </div>
              ))}
            </section>

            {/* Message Input */}
            <footer className="bg-gray-800 p-4 sticky bottom-0 max-md:bottom-10">
              <div className="flex items-center bg-gray-700 rounded-full">
                <button className="p-2 rounded-full hover:bg-gray-600">
                  <Paperclip className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={handleInputChange}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent py-2 px-4 border-none outline-none"
                />
                <button className="p-2 rounded-full hover:bg-gray-600">
                  <Smile className="w-5 h-5" />
                </button>
                <button
                  onClick={handleSendMessage}
                  className="p-2 rounded-full bg-main2 hover:bg-violet-800 ml-2"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              {isTyping && (
                <p className="text-sm text-gray-400 mt-1">Typing...</p>
              )}
            </footer>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <p>Select a conversation to start chatting</p>
          </div>
        )}
      </main>

      {/* Info Section */}
      <aside className=" max-md:hidden w-1/4  p-4 border-l border-gray-700">
        {selectedChat && (
          <div className="text-center">
            <img
              src={selectedChat.avatar}
              alt={selectedChat.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
              loading="lazy"
            />
            <h2 className="text-xl font-semibold text-main">
              {selectedChat.name}
            </h2>
            <p className="text-gray-400">
              {selectedChat.type === "user" ? "User Info" : "Group Info"}
            </p>
          </div>
        )}
      </aside>
    </div>
  );
};

export default ChatUI;
