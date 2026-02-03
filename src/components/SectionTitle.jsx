export default function SectionTitle({ title, subtitle }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 16, fontWeight: 750, color: "#0f172a" }}>{title}</div>
      {subtitle ? <div style={{ fontSize: 12, color: "#556", marginTop: 2 }}>{subtitle}</div> : null}
    </div>
  );
}
