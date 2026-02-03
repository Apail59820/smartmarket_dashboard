import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import { fmtNumber } from "../utils/format";

export default function LeadsByChannelChart({ data, height }) {
  return (
    <Card>
      <SectionTitle
        title="Quels canaux génèrent le plus de leads ?"
        subtitle="Volume de leads (utile pour décider où concentrer l'acquisition)"
      />
      <div style={{ width: "100%", height }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="channel" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `${Math.round(value * 100)}%`} />
            <Tooltip formatter={(value, name) => [fmtNumber(value, 0), name]} />
            <Bar dataKey="leads" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
