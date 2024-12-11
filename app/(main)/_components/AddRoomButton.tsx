/** @format */

"use client";

import React, { useState } from "react";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddRoomModal from "./AddRoomModal";

export default function AddRoomButton() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Button onClick={openModal}>
        <PlusIcon className="text-white" />
        Create a new room
      </Button>
      {isModalOpen && <AddRoomModal onClose={closeModal} />}
    </>
  );
}
