import "./styles.css";
import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    score: 800
  },
  {
    name: "Page B",
    score: 967
  },
  {
    name: "Page C",
    score: 1098
  },
  {
    name: "Page D",
    score: 1200
  },
  {
    name: "Page E",
    score: 1108
  },
  {
    name: "Page F",
    score: 680
  }
];

export default function App() {
  return (
    <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="score" barSize={10} fill="#413ea0" />
    </ComposedChart>
  );
}
