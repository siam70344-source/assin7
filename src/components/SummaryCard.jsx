import React from "react";

export default function SummaryCard({ title, value }) {
  return (
    <div className="bg-white shadow rounded-xl p-5 text-center">
      <h2 className="text-2xl font-bold text-green-700">{value}</h2>
      <p className="text-gray-500 mt-1">{title}</p>
    </div>
  );
}