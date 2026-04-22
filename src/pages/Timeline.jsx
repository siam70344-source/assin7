import { useState, useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Timeline() {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  // Filter logic
  const filtered = timeline.filter(t => 
    filter === "All" ? true : t.type === filter
  );

  // Map types to your specific images
  const getIcon = (type) => {
    switch(type) {
      case "Call": return "/assets/call.png";
      case "Text": return "/assets/text.png";
      case "Video": return "/assets/video.png";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 w-full flex-grow">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Timeline</h1>
          <select 
            onChange={(e) => setFilter(e.target.value)}
            className="border p-2 rounded-lg bg-white shadow-sm outline-none focus:ring-2 focus:ring-green-800"
          >
            <option value="All">All Activities</option>
            <option value="Call">Calls</option>
            <option value="Text">Texts</option>
            <option value="Video">Videos</option>
          </select>
        </div>

        <div className="space-y-4">
          {filtered.length > 0 ? filtered.map(item => (
            <div key={item.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-5 hover:shadow-md transition">
              <img src={getIcon(item.type)} alt={item.type} className="w-10 h-10 opacity-80" />
              <div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-400 font-medium">{item.date}</p>
              </div>
            </div>
          )) : (
            <div className="text-center py-20 text-gray-400 font-medium">No interactions found.</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}