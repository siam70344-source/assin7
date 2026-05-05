import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Phone, MessageSquare, Video, Bell, Archive, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import friendsData from '../context/friends.json';
import { useTimeline } from '../context/TimelineContext';

function StatusBadge({ status }) {
  const map = {
    overdue: { label: 'Overdue', className: 'badge-overdue' },
    'almost due': { label: 'Almost Due', className: 'badge-almost' },
    'on-track': { label: 'On-Track', className: 'badge-ontrack' },
  };
  const { label, className } = map[status] || map['on-track'];
  return <span className={`badge ${className}`}>{label}</span>;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function FriendDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addEntry } = useTimeline();

  const friend = friendsData.find(f => f.id === parseInt(id));

  if (!friend) {
    return (
      <div className="not-found-container">
        <h2>Friend not found</h2>
        <button className="btn-primary" onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  const handleCheckIn = (type) => {
    addEntry(type, friend.name, friend.id);
    toast.success(`${type} with ${friend.name} logged!`, {
      style: { background: '#2d5a3d', color: '#fff' },
      iconTheme: { primary: '#7ec8a0', secondary: '#2d5a3d' },
    });
  };

  return (
    <div className="page-container">
      <div className="details-grid">
        {/* Left Column */}
        <div className="details-left">
          <div className="friend-info-card">
            <img
              src={friend.picture}
              alt={friend.name}
              className="details-avatar"
              onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(friend.name)}&background=2d5a3d&color=fff`; }}
            />
            <h2 className="details-name">{friend.name}</h2>
            <StatusBadge status={friend.status} />
            <div className="details-tags">
              {friend.tags.map(tag => (
                <span key={tag} className="tag">{tag.toUpperCase()}</span>
              ))}
            </div>
            <p className="details-bio">"{friend.bio}"</p>
            <p className="details-email">Preferred: {friend.email.includes('@') ? 'email' : friend.email}</p>
          </div>

          <div className="action-buttons">
            <button className="action-btn">
              <Bell size={16} /> Snooze 2 Weeks
            </button>
            <button className="action-btn">
              <Archive size={16} /> Archive
            </button>
            <button className="action-btn action-btn-danger">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="details-right">
          {/* Stats Cards */}
          <div className="stats-row">
            <div className="stat-card">
              <span className="stat-number">{friend.days_since_contact}</span>
              <span className="stat-label">Days Since Contact</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{friend.goal}</span>
              <span className="stat-label">Goal (Days)</span>
            </div>
            <div className="stat-card">
              <span className="stat-number stat-date">{formatDate(friend.next_due_date)}</span>
              <span className="stat-label">Next Due</span>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="goal-card">
            <div className="goal-header">
              <h3>Relationship Goal</h3>
              <button className="edit-btn">Edit</button>
            </div>
            <p>Connect every <strong>{friend.goal} days</strong></p>
          </div>

          {/* Quick Check-In */}
          <div className="checkin-card">
            <h3>Quick Check-In</h3>
            <div className="checkin-buttons">
              <button className="checkin-btn" onClick={() => handleCheckIn('Call')}>
                <Phone size={28} />
                <span>Call</span>
              </button>
              <button className="checkin-btn" onClick={() => handleCheckIn('Text')}>
                <MessageSquare size={28} />
                <span>Text</span>
              </button>
              <button className="checkin-btn" onClick={() => handleCheckIn('Video')}>
                <Video size={28} />
                <span>Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}