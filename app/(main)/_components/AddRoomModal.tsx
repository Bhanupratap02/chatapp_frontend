import { X } from "lucide-react";


const AddRoomModal = () => {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-60 flex items-center justify-center">
      <div className="w-[50%] max-w-[500px] bg-[#1d1d1d] rounded-lg relative">
        <button className={"absolute right-1 top-2 bg-none"}>
          <X />
        </button>
      </div>
    </div>
  );
}

export default AddRoomModal