import { useEffect, useState } from "react";
import FriendCard from "../components/FriendCard";
import SummaryCard from "../components/SummaryCard";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setFriends([]); // prevent crash
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  // Safe calculations
  const total = Array.isArray(friends) ? friends.length : 0;
  const overdue = Array.isArray(friends)
    ? friends.filter((f) => f.status === "overdue").length
    : 0;
  const onTrack = Array.isArray(friends)
    ? friends.filter((f) => f.status === "on-track").length
    : 0;
  const interactions = 12;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Banner Section */}
      <div className="text-center py-16 px-4 bg-white border-b border-gray-100">
        <h1 className="text-5xl font-extrabold text-slate-800 tracking-tight">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="bg-[#2D4A3E] hover:bg-[#1D3D31] text-white px-8 py-3 rounded-lg mt-8 font-semibold flex items-center gap-2 mx-auto transition-all shadow-lg">
          <span className="text-xl">+</span> Add a Friend
        </button>

        {/* Summary Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-12 px-4">
          <SummaryCard title="Total Friends" value={total} />
          <SummaryCard title="On Track" value={onTrack} />
          <SummaryCard title="Need Attention" value={overdue} />
          <SummaryCard title="Interactions This Month" value={interactions} />
        </div>
      </div>

      {/* Friends Grid */}
      <div className="max-w-7xl mx-auto p-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.isArray(friends) &&
            friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}