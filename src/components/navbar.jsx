import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Clock, BarChart2 } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/timeline', label: 'Timeline', icon: Clock },
    { to: '/stats', label: 'Stats', icon: BarChart2 },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="logo-keen">Keen</span><span className="logo-keeper">Keeper</span>
      </Link>
      <div className="navbar-links">
        {links.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname === to;
          return (
            <Link key={to} to={to} className={`nav-link ${isActive ? 'active' : ''}`}>
              <Icon size={16} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}