import KpiCard from "./KpiCard";
import { fmtNumber, fmtPercent } from "../utils/format";

export default function KpiGrid({ kpi, width }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: 12,
        marginBottom: 14,
      }}
    >
      <div style={{ gridColumn: width < 900 ? "span 12" : "span 3" }}>
        <KpiCard title="Leads (total)" value={fmtNumber(kpi.totalLeads)} sub="Leads uniques (périmètre septembre 2025)" />
      </div>
      <div style={{ gridColumn: width < 900 ? "span 6" : "span 3" }}>
        <KpiCard title="% Clients" value={fmtPercent(kpi.pctClient, 1)} sub="Part des leads au statut Client" />
      </div>
      <div style={{ gridColumn: width < 900 ? "span 6" : "span 2" }}>
        <KpiCard title="% SQL" value={fmtPercent(kpi.pctSQL, 1)} sub="Qualifiés (SQL)" />
      </div>
      <div style={{ gridColumn: width < 900 ? "span 6" : "span 2" }}>
        <KpiCard title="CTR" value={fmtPercent(kpi.ctr, 2)} sub="CTR pondéré (impressions/clics)" />
      </div>
      <div style={{ gridColumn: width < 900 ? "span 6" : "span 2" }}>
        <KpiCard title="CPL" value={fmtNumber(kpi.cpl, 2)} sub="Coût par lead (global)" />
      </div>
      <div style={{ gridColumn: width < 900 ? "span 6" : "span 2" }}>
        <KpiCard title="CPA" value={fmtNumber(kpi.cpa, 2)} sub="Coût par conversion" />
      </div>
    </div>
  );
}
