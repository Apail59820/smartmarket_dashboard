export default function Card({ children, style }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 16,
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        padding: 16,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
