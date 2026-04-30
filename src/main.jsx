import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import TimelineProvider from './context/TimelineContext.jsx';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimelineProvider>
      <App />
      <Toaster position="top-right" />
    </TimelineProvider>
  </React.StrictMode>,
);
