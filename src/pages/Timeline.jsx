import React, { useState } from 'react';
import { Phone, MessageSquare, Video, Users, ChevronDown } from 'lucide-react';
import { useTimeline } from '../context/TimelineContext';

function getIcon(type) {
  const iconMap = {
    Call: Phone,
    Text: MessageSquare,
    Video: Video,
    Meetup: Users,
  };
  const Icon = iconMap[type] || Users;
  return <Icon size={20} />;
}

function getIconBg(type) {
  const map = {
    Call: 'icon-call',
    Text: 'icon-text',
    Video: 'icon-video',
    Meetup: 'icon-meetup',
  };
  return map[type] || 'icon-meetup';
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function Timeline() {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState('');
  const [open, setOpen] = useState(false);

  const filters = ['', 'Call', 'Text', 'Video', 'Meetup'];
  const filtered = filter ? timeline.filter(e => e.type === filter) : timeline;

  const sorted = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="page-container">
      <h1 className="page-title">Timeline</h1>

      {/* Filter Dropdown */}
      <div className="filter-wrapper">
        <div className="filter-dropdown" onClick={() => setOpen(!open)}>
          <span>{filter || 'Filter timeline'}</span>
          <ChevronDown size={16} className={open ? 'chevron-open' : ''} />
        </div>
        {open && (
          <div className="filter-options">
            {filters.map(f => (
              <div
                key={f || 'all'}
                className={`filter-option ${filter === f ? 'filter-active' : ''}`}
                onClick={() => { setFilter(f); setOpen(false); }}
              >
                {f || 'All'}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Timeline Entries */}
      <div className="timeline-list">
        {sorted.map(entry => (
          <div key={entry.id} className="timeline-entry">
            <div className={`timeline-icon ${getIconBg(entry.type)}`}>
              {getIcon(entry.type)}
            </div>
            <div className="timeline-content">
              <p className="timeline-title">
                <strong>{entry.type}</strong>{' '}
                <span className="timeline-friend">with {entry.friendName}</span>
              </p>
              <p className="timeline-date">{formatDate(entry.date)}</p>
            </div>
          </div>
        ))}
        {sorted.length === 0 && (
          <p className="empty-state">No timeline entries yet. Log some check-ins!</p>
        )}
      </div>
    </div>
  );
}