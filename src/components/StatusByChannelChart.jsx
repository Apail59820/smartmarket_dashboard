import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import { fmtPercent } from "../utils/format";

export default function StatusByChannelChart({ data, height }) {
  return (
    <Card>
      <SectionTitle
        title="La qualité des leads change-t-elle selon le canal ?"
        subtitle="Répartition MQL / SQL / Client (barres empilées : proportions)"
      />
      <div style={{ width: "100%", height }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="channel" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip formatter={(value, name) => [fmtPercent((value ?? 0) * 100, 1), name]} />
            <Legend />
            <Bar dataKey="MQL" stackId="a" fill="#94a3b8" />
            <Bar dataKey="SQL" stackId="a" fill="#14b8a6" />
            <Bar dataKey="Client" stackId="a" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
