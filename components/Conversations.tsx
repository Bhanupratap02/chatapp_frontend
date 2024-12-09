

const Conversations = () => {
  return (
    <div className="room__conversation ">
      <div className="threads scroll ">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="thread border-l-main2 border-l-2">
            <div className="thread__top">
              <div className="thread__author text-base">
                <a href="" className="thread__authorInfo">
                  <div className="avatar avatar--small">
                    <img src="https://github.com/shadcn.png" />
                  </div>
                  <span className="text-main">@sachin</span>
                </a>
                <span className="thread__date  text-sm">1 day ago</span>
              </div>
              <a href="#">
                <div className="thread__delete">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>remove</title>
                    <path d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="thread__details ml-10">
              Lorem ipsum dolor sit amet.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Conversations