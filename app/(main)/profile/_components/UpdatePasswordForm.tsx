/** @format */

"use client";

import React, { useState } from "react";

const UpdatePasswordForm = ({
  onUpdatePassword,
}: {
  onUpdatePassword: (currentPassword: string, newPassword: string) => void;
}) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdatePassword(currentPassword, newPassword);
    setCurrentPassword("");
    setNewPassword("");
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Update Password</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full bg-gray-700 rounded-full py-2 px-4 text-white focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full bg-gray-700 rounded-full py-2 px-4 text-white focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default UpdatePasswordForm;
