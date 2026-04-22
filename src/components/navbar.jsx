import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart } from "lucide-react";

export default function Navbar() {
  const activeClass = ({ isActive }) => 
    `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
      isActive ? "bg-[#1D3D31] text-white" : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <nav className="flex justify-between items-center p-4 px-10 shadow-sm bg-white sticky top-0 z-50">
      <div className="flex items-center">
        {/* Path based on my assets folder */}
        <img src="/assets/logo.png" alt="KeenKeeper" className="h-8" />
      </div>

      <div className="flex gap-4 font-medium">
        <NavLink to="/" className={activeClass}><Home size={18}/> Home</NavLink>
        <NavLink to="/timeline" className={activeClass}><Clock size={18}/> Timeline</NavLink>
        <NavLink to="/stats" className={activeClass}><BarChart size={18}/> Stats</NavLink>
      </div>
    </nav>
  );
}