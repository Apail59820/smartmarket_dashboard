import Card from "./Card";

export default function KpiCard({ title, value, sub }) {
  return (
    <Card>
      <div style={{ fontSize: 12, color: "#556", marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 26, fontWeight: 750, letterSpacing: -0.4, color: "#0f172a" }}>{value}</div>
      {sub ? <div style={{ fontSize: 12, color: "#667", marginTop: 6 }}>{sub}</div> : null}
    </Card>
  );
}
