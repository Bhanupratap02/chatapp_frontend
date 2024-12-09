

const ParticipantsList = () => {
  return (
    <div className="participants ">
      <h3 className="participants__top bg-main2">
        Participants <span>(5.3k Joined)</span>
      </h3>
      <div className="participants__list scroll">
        {[...Array(10)].map((_, index) => (
          <a href="profile.html" className="participant" key={index}>
            <div className="avatar avatar--small">
              <img
                src="https://github.com/shadcn.png"
                alt="Participant Avatar"
                width={48}
                height={48}
              />
            </div>
            <span className="text-[20px]">@dennis_ivy</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ParticipantsList