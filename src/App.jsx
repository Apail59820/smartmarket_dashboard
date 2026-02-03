import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import KpiGrid from "./components/KpiGrid";
import LeadsByChannelChart from "./components/LeadsByChannelChart";
import StatusByChannelChart from "./components/StatusByChannelChart";
import CplByChannelChart from "./components/CplByChannelChart";
import { useWindowWidth } from "./hooks/useWindowWidth";

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const width = useWindowWidth();

  useEffect(() => {
    fetch("/dashboard_data.json", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status} — dashboard_data.json introuvable`);
        return response.json();
      })
      .then(setData)
      .catch((err) => setError(String(err)));
  }, []);

  const safe = useMemo(() => {
    if (!data) return null;
    const k = data.kpi || {};
    const c = data.charts || {};

    const leadsByChannel = Array.isArray(c.leadsByChannel) ? c.leadsByChannel : [];
    const statusByChannel = Array.isArray(c.statusByChannel) ? c.statusByChannel : [];
    const cplByChannel = Array.isArray(c.cplByChannel) ? c.cplByChannel : [];

    const statusNormalized = statusByChannel.map((row) => ({
      channel: row.channel,
      MQL: row.MQL ?? 0,
      SQL: row.SQL ?? 0,
      Client: row.Client ?? 0,
    }));

    return {
      kpi: {
        totalLeads: k.totalLeads ?? null,
        pctClient: k.pctClient ?? null,
        pctSQL: k.pctSQL ?? null,
        ctr: k.ctr ?? null,
        cpl: k.cpl ?? null,
        cpa: k.cpa ?? null,
      },
      charts: {
        leadsByChannel,
        statusByChannel: statusNormalized,
        cplByChannel,
      },
    };
  }, [data]);

  if (error) {
    return (
      <div style={{ padding: 18, fontFamily: "system-ui" }}>
        <div style={{ fontWeight: 700 }}>Erreur de chargement</div>
        <div style={{ marginTop: 6, color: "#444" }}>{error}</div>
        <div style={{ marginTop: 10, color: "#666", fontSize: 13 }}>
          Vérifie que <b>dashboard_data.json</b> est bien dans <code>public/</code>.
        </div>
      </div>
    );
  }

  if (!safe) {
    return <div style={{ padding: 18, fontFamily: "system-ui" }}>Chargement…</div>;
  }

  const { kpi, charts } = safe;
  const chartHeight = width < 700 ? 260 : 320;

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        background:
          "radial-gradient(1000px 600px at 10% 10%, rgba(99,102,241,0.18), transparent 55%)," +
          "radial-gradient(900px 500px at 90% 20%, rgba(16,185,129,0.14), transparent 60%)," +
          "linear-gradient(180deg, #f7f8ff 0%, #f6f7fb 60%, #f3f4f8 100%)",
      }}
    >
      <div style={{ width: "100%", padding: 18 }}>
        <div style={{ width: "100%", margin: 0, maxWidth: "100%" }}>
          <Header />
          <KpiGrid kpi={kpi} width={width} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 12 }}>
            <div style={{ gridColumn: width < 1000 ? "span 12" : "span 6" }}>
              <LeadsByChannelChart data={charts.leadsByChannel} height={chartHeight} />
            </div>
            <div style={{ gridColumn: width < 1000 ? "span 12" : "span 6" }}>
              <StatusByChannelChart data={charts.statusByChannel} height={chartHeight} />
            </div>
            <div style={{ gridColumn: "span 12" }}>
              <CplByChannelChart data={charts.cplByChannel} height={chartHeight} />
            </div>
          </div>

          <div style={{ marginTop: 14, color: "#667", fontSize: 12 }}>
            Données : leads (septembre 2025) + campagnes. Objectifs : CTR, conversion, CPL, profils.
          </div>
        </div>
      </div>
    </div>
  );
}
