import { useNavigate } from "react-router-dom";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  const statusClasses = {
    "overdue": "bg-red-100 text-red-600 border-red-200",
    "almost due": "bg-yellow-100 text-yellow-700 border-yellow-200",
    "on-track": "bg-green-100 text-green-700 border-green-200"
  };

  if (!friend) return null; // safety

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white p-6 shadow-sm rounded-2xl border border-gray-100 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
    >
      <img
        src={friend.picture}
        className="w-20 h-20 rounded-full mx-auto border-4 border-gray-50 shadow-sm"
        alt={friend.name}
      />

      <h2 className="text-xl font-bold text-slate-800 mt-4">
        {friend.name}
      </h2>

      <p className="text-gray-400 text-sm mb-4">
        {friend.days_since_contact}d ago
      </p>

      <div className="flex flex-wrap justify-center gap-1 mb-4">
        {Array.isArray(friend.tags) &&
          friend.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase font-bold px-2 py-0.5 bg-gray-100 text-gray-500 rounded"
            >
              {tag}
            </span>
          ))}
      </div>

      <span className={`text-xs font-bold px-4 py-1 rounded-full border uppercase tracking-wider ${statusClasses[friend.status]}`}>
        {friend.status}
      </span>
    </div>
  );
}