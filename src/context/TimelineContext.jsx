import React, { createContext, useContext, useState } from 'react';

const TimelineContext = createContext();

const initialTimeline = [
  { id: 't1', type: 'Meetup', friendName: 'Tom Baker', date: '2026-03-29', friendId: 10 },
  { id: 't2', type: 'Text', friendName: 'Sarah Chen', date: '2026-03-28', friendId: 5 },
  { id: 't3', type: 'Meetup', friendName: 'Olivia Martinez', date: '2026-03-26', friendId: 9 },
  { id: 't4', type: 'Video', friendName: 'Aisha Patel', date: '2026-03-23', friendId: 7 },
  { id: 't5', type: 'Meetup', friendName: 'Sarah Chen', date: '2026-03-21', friendId: 5 },
  { id: 't6', type: 'Call', friendName: 'Marcus Johnson', date: '2026-03-19', friendId: 6 },
  { id: 't7', type: 'Meetup', friendName: 'Aisha Patel', date: '2026-03-17', friendId: 7 },
  { id: 't8', type: 'Text', friendName: 'Olivia Martinez', date: '2026-03-13', friendId: 9 },
  { id: 't9', type: 'Call', friendName: 'Lisa Nakamura', date: '2026-03-11', friendId: 3 },
  { id: 't10', type: 'Call', friendName: 'Sarah Chen', date: '2026-03-11', friendId: 5 },
  { id: 't11', type: 'Video', friendName: 'Marcus Johnson', date: '2026-03-06', friendId: 6 },
  { id: 't12', type: 'Video', friendName: "Ryan O'Brien", date: '2026-02-24', friendId: 8 },
];

export function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState(initialTimeline);

  const addEntry = (type, friendName, friendId) => {
    const newEntry = {
      id: `t${Date.now()}`,
      type,
      friendName,
      date: new Date().toISOString().split('T')[0],
      friendId,
    };
    setTimeline(prev => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  return useContext(TimelineContext);
}