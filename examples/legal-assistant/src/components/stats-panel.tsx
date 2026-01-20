"use client";

import { useEffect, useState } from "react";
import { LegalCase } from "@/lib/cases";

interface StatsPanelProps {
  caseData: LegalCase;
  lastRecallTime?: number;
  lastStoreTime?: number;
}

interface Stats {
  memory_count: number;
  fact_count: number;
  concept_count: number;
}

export function StatsPanel({ caseData, lastRecallTime, lastStoreTime }: StatsPanelProps) {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`/api/stats?caseId=${caseData.id}`);
        const data = await res.json();
        setStats(data);
      } catch {
        setStats(null);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, [caseData.id]);

  return (
    <div className="border border-[var(--border)] rounded-lg p-4">
      <h3 className="text-sm font-medium mb-3">Case Memory</h3>
      
      <div className="grid grid-cols-3 gap-3 text-center">
        <div>
          <div className="text-2xl font-semibold">{stats?.memory_count ?? "-"}</div>
          <div className="text-xs text-[var(--text-muted)]">Documents</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">{stats?.fact_count ?? "-"}</div>
          <div className="text-xs text-[var(--text-muted)]">Facts</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">{stats?.concept_count ?? "-"}</div>
          <div className="text-xs text-[var(--text-muted)]">Concepts</div>
        </div>
      </div>

      {(lastRecallTime || lastStoreTime) && (
        <div className="mt-3 pt-3 border-t border-[var(--border)] flex gap-4 text-xs text-[var(--text-muted)]">
          {lastRecallTime && <span>🔍 {lastRecallTime}ms</span>}
          {lastStoreTime && <span>💾 {lastStoreTime}ms</span>}
        </div>
      )}
    </div>
  );
}
