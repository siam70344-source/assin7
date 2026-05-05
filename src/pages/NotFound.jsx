import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-text">Looks like this page went missing — just like that friend you haven't called in months.</p>
        <button className="btn-primary" onClick={() => navigate('/')}>Go Back Home</button>
      </div>
    </div>
  );
}