/** @format */

const ChatRoomsList = ({
  chatRooms,
  onDeleteChatRoom,
}: {
  chatRooms: { id: number; name: string }[];
  onDeleteChatRoom: (roomId: number) => void;
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Your Chat Rooms</h3>
      <ul className="space-y-4">
        {chatRooms.map((room) => (
          <li
            key={room.id}
            className="flex justify-between items-center bg-gray-700 p-4 rounded-lg"
          >
            <span>{room.name}</span>
            <button
              onClick={() => onDeleteChatRoom(room.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoomsList;
