import Card from "./Card";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
        marginBottom: 14,
      }}
    >
      <div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", letterSpacing: -0.4 }}>
          SmartMarket — Dashboard Marketing
        </div>
        <div style={{ color: "#445", marginTop: 4, fontSize: 13 }}>
          Septembre 2025 • vue synthétique pour décider (canaux, qualité, coûts)
        </div>
      </div>

      <Card style={{ padding: "10px 12px" }}>
        <div style={{ fontSize: 12, color: "#556" }}>Lecture rapide</div>
        <div style={{ fontSize: 13, color: "#0f172a", marginTop: 4 }}>
          Prioriser les canaux avec <b>bon volume</b> + <b>qualité</b>, en surveillant <b>CPL</b> et <b>CPA</b>.
        </div>
      </Card>
    </div>
  );
}
