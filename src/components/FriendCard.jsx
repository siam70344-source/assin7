import React from 'react';
import { useNavigate } from 'react-router-dom';

function StatusBadge({ status }) {
  const map = {
    overdue: { label: 'Overdue', className: 'badge-overdue' },
    'almost due': { label: 'Almost Due', className: 'badge-almost' },
    'on-track': { label: 'On-Track', className: 'badge-ontrack' },
  };
  const { label, className } = map[status] || map['on-track'];
  return <span className={`badge ${className}`}>{label}</span>;
}

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  return (
    <div className="friend-card" onClick={() => navigate(`/friend/${friend.id}`)}>
      <img
        src={friend.picture}
        alt={friend.name}
        className="friend-avatar"
        onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(friend.name)}&background=2d5a3d&color=fff`; }}
      />
      <h3 className="friend-name">{friend.name}</h3>
      <p className="friend-days">{friend.days_since_contact}d ago</p>
      <div className="friend-tags">
        {friend.tags.map(tag => (
          <span key={tag} className="tag">{tag.toUpperCase()}</span>
        ))}
      </div>
      <StatusBadge status={friend.status} />
    </div>
  );
}