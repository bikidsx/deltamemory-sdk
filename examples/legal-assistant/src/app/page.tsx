"use client";

import { useState, useCallback } from "react";
import { cases, LegalCase } from "@/lib/cases";
import { CaseSelector } from "@/components/case-selector";
import { Chat } from "@/components/chat";
import { StatsPanel } from "@/components/stats-panel";
import { DocumentList } from "@/components/document-list";

export default function Home() {
  const [selectedCase, setSelectedCase] = useState<LegalCase | null>(null);
  const [lastRecallTime, setLastRecallTime] = useState<number>();
  const [lastStoreTime, setLastStoreTime] = useState<number>();

  const handleToolLatency = useCallback((type: "recall" | "store", ms: number) => {
    if (type === "recall") setLastRecallTime(ms);
    else setLastStoreTime(ms);
  }, []);

  return (
    <main className="h-screen flex flex-col p-6 max-w-[1600px] mx-auto">
      <header className="mb-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-2xl">⚖️</span>
          <div>
            <h1 className="text-xl font-semibold">Legal Research Assistant</h1>
            <p className="text-sm text-[var(--text-muted)]">
              AI with case memory — contracts, depositions, communications
            </p>
          </div>
        </div>
      </header>

      <section className="mb-4 flex-shrink-0">
        <CaseSelector cases={cases} selected={selectedCase} onSelect={setSelectedCase} />
      </section>

      {selectedCase ? (
        <div className="flex-1 grid grid-cols-3 gap-4 min-h-0">
          <div className="col-span-2 flex flex-col min-h-0">
            <Chat caseData={selectedCase} onToolLatency={handleToolLatency} />
          </div>
          <div className="flex flex-col gap-3 min-h-0">
            <div className="flex-shrink-0">
              <StatsPanel
                caseData={selectedCase}
                lastRecallTime={lastRecallTime}
                lastStoreTime={lastStoreTime}
              />
            </div>
            <div className="flex-1 min-h-0 overflow-auto">
              <DocumentList caseId={selectedCase.id} />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 border border-[var(--border)] rounded-lg flex items-center justify-center text-[var(--text-muted)]">
          <div className="text-center">
            <p className="text-lg mb-2">Select a case to begin research</p>
            <p className="text-sm">Ask questions about contracts, depositions, and communications</p>
          </div>
        </div>
      )}
    </main>
  );
}
