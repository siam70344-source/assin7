import { createContext, useState, useEffect } from "react";

export const TimelineContext = createContext();

export default function TimelineProvider({ children }) {
  // Load from local storage on first run
  const [timeline, setTimeline] = useState(() => {
    const saved = localStorage.getItem("keenkeeper_timeline");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to local storage whenever timeline changes
  useEffect(() => {
    localStorage.setItem("keenkeeper_timeline", JSON.stringify(timeline));
  }, [timeline]);

  const addEntry = (type, name) => {
    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${name}`,
      date: new Date().toLocaleDateString("en-US", { 
        month: "long", 
        day: "numeric", 
        year: "2026" 
      })
    };
    setTimeline(prev => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}