import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import FriendCard from '../components/FriendCard';
import friendsData from '../context/friends.json';
export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const totalFriends = friends.length;
  const onTrack = friends.filter(f => f.status === 'on-track').length;
  const needAttention = friends.filter(f => f.status !== 'on-track').length;
  const interactionsThisMonth = 12;

  return (
    <div className="page-container">
      {/* Banner */}
      <section className="banner">
        <h1 className="banner-title">Friends to keep close in your life</h1>
        <p className="banner-subtitle">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the<br />
          relationships that matter most.
        </p>
        <button className="btn-primary">
          <Plus size={16} />
          Add a Friend
        </button>
      </section>

      {/* Summary Cards */}
      {!loading && (
        <div className="summary-grid">
          <div className="summary-card">
            <span className="summary-number">{totalFriends}</span>
            <span className="summary-label">Total Friends</span>
          </div>
          <div className="summary-card">
            <span className="summary-number">{onTrack}</span>
            <span className="summary-label">On Track</span>
          </div>
          <div className="summary-card">
            <span className="summary-number">{needAttention}</span>
            <span className="summary-label">Need Attention</span>
          </div>
          <div className="summary-card">
            <span className="summary-number">{interactionsThisMonth}</span>
            <span className="summary-label">Interactions This Month</span>
          </div>
        </div>
      )}

      {/* Friends Section */}
      <section className="friends-section">
        <h2 className="section-title">Your Friends</h2>
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner" />
            <p className="loading-text">Loading your friends...</p>
          </div>
        ) : (
          <div className="friends-grid">
            {friends.map(friend => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}