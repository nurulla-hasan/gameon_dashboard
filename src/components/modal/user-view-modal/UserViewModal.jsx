import {
    FaGolfBall,
    FaEnvelope,
    FaUser,
    FaTrophy,
    FaChartLine,
  } from "react-icons/fa";
  
  const StatRow = ({ icon, label, value }) => (
    <div className="flex justify-between items-center text-sm text-gray-700">
      <span className="flex items-center gap-2 font-medium">
        <span className="text-green-500">{icon}</span>
        {label}:
      </span>
      <span>{value}</span>
    </div>
  );
  
  const UserViewModal = ({ setViewModal, data }) => {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-md w-full max-w-lg space-y-7 relative">
  
          {/* Close Button */}
          <button
            onClick={() => setViewModal(false)}
            className="absolute top-2 right-4 text-gray-400 hover:text-red-500 text-xl font-bold cursor-pointer"
          >
            ✕
          </button>
  
          {/* Avatar + Name */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-500 shadow-md">
              <img
                src={data.avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800">{data.name}</h2>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <FaEnvelope /> {data.email}
            </p>
          </div>
  
          {/* Golf Stats */}
          <div className="w-full space-y-3 mt-2">
            <StatRow icon={<FaGolfBall />} label="Golf Handicap" value={data.golfHandicap} />
            <StatRow icon={<FaUser />} label="Matches Played" value={data.matchPlayed} />
            <StatRow icon={<FaTrophy />} label="Win" value={`${data.win}%`} />
            <StatRow icon={<FaChartLine />} label="Average Score" value={data.averageScore} />
          </div>
  
          {/* Bio */}
          <div className="w-full">
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Bio</h3>
            <p className="text-gray-600 text-sm text-justify">{data.bio}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserViewModal;
  