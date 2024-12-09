

const RoomHeader = () => {
  return (
    <div className="room__header scroll">
      <div className="room__hosted flex">
        <a href="#" className="room__author">
          <div className="avatar avatar--small">
            <img
              src="https://github.com/shadcn.png"
              alt="Host Avatar"
              width={32}
              height={32}
            />
          </div>
          <span className="text-main">
            {" "}
            <b>Hosted By</b> @dennis_ivy
          </span>
        </a>
        <span>3 days ago</span>
      </div>
      <div className="room__details">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, tenetur
        laudantium? Dicta repellendus rerum consectetur, voluptatem repudiandae
        eum ea porro cupiditate provident nulla, deserunt, ab ipsum corporis
        laboriosam deleniti molestias?
      </div>
      {/* <span className="room__topics">JavaScript</span> */}
    </div>
  );
}

export default RoomHeader