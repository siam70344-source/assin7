import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const Stats = () => {
  // Replace these numbers with your actual logic or state if needed
  const calls = 5; 
  const texts = 10;
  const videos = 3;

  const data = [
    { name: "Call", value: calls },
    { name: "Text", value: texts },
    { name: "Video", value: videos }
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Interaction Statistics</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;