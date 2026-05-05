import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import { useTimeline } from '../context/TimelineContext';

const COLORS = ['#7b5ea7', '#1a3c2e', '#4a9a6e'];

export default function Stats() {
  const { timeline } = useTimeline();

  const counts = { Text: 0, Call: 0, Video: 0 };
  timeline.forEach(entry => {
    if (counts[entry.type] !== undefined) counts[entry.type]++;
  });

  const data = [
    { name: 'Text', value: counts.Text },
    { name: 'Call', value: counts.Call },
    { name: 'Video', value: counts.Video },
  ].filter(d => d.value > 0);

  return (
    <div className="page-container">
      <h1 className="page-title">Friendship Analytics</h1>

      <div className="analytics-card">
        <h3 className="analytics-subtitle">By Interaction Type</h3>
        {data.length === 0 ? (
          <p className="empty-state">No interaction data yet. Log some check-ins!</p>
        ) : (
          <ResponsiveContainer width="100%" height={360}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={150}
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend
                iconType="circle"
                iconSize={10}
                formatter={(value) => <span style={{ color: '#444', fontSize: 14 }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}