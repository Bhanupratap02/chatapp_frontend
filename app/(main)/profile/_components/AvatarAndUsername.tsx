/** @format */

const AvatarAndUsername = ({
  user,
}: {
  user: { avatar: string; name: string };
}) => {
  return (
    <div className="text-center mb-8">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
        loading="lazy"
      />
      <h2 className="text-xl font-semibold">{user.name}</h2>
    </div>
  );
};

export default AvatarAndUsername;
