/** @format */

// import Image from "next/image";
import ParticipantsList from "@/components/ParticipantsList";
import RoomTop from "@/components/RoomTop"
import RoomHeader from "./_components/RoomHeader";
import Conversations from "@/components/Conversations";

const RoomPage = () => {
  return (
    <main className="profile-page layout layout--2 ">
      <div className="container my-auto mx-auto">
        {/* Room Start */}
        <div className="room">
   
          <RoomTop/>
          <RoomHeader/>
          <div className="room__box scroll ">
            {/* Conversation threads would go here */}
            <Conversations/>
          </div>
          <div className="room__message">
            <form action="#">
              <input
                name="message"
                placeholder="Write your message here..."
                className="input"
              />
            </form>
          </div>
        </div>
        {/* Room End */}

        {/* Participants Section */}
        <ParticipantsList/>
      </div>
    </main>
  );
};

export default RoomPage;
