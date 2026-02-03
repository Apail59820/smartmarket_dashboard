import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import { fmtNumber } from "../utils/format";

export default function CplByChannelChart({ data, height }) {
  return (
    <Card>
      <SectionTitle
        title="Quels canaux coûtent le plus cher en coût par lead (CPL) ?"
        subtitle="Efficience budgétaire : utile pour ajuster les investissements"
      />
      <div style={{ width: "100%", height }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="channel" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip formatter={(value, name) => [fmtNumber(value, 2), name]} />
            <Bar dataKey="cpl" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
