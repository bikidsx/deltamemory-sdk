"use client";

import { LegalCase } from "@/lib/cases";

interface CaseSelectorProps {
  cases: LegalCase[];
  selected: LegalCase | null;
  onSelect: (c: LegalCase) => void;
}

export function CaseSelector({ cases, selected, onSelect }: CaseSelectorProps) {
  return (
    <div className="flex gap-3 flex-wrap">
      {cases.map((c) => (
        <button
          key={c.id}
          onClick={() => onSelect(c)}
          className={`px-4 py-3 rounded-lg border text-left transition-all ${
            selected?.id === c.id
              ? "border-[var(--accent)] bg-[var(--accent)]/10"
              : "border-[var(--border)] hover:border-[var(--accent)]/50"
          }`}
        >
          <div className="font-medium text-sm">{c.shortName}</div>
          <div className="text-xs text-[var(--text-muted)] mt-1">{c.caseType}</div>
          <div className="text-xs text-[var(--text-muted)]">
            {c.parties.plaintiff} v. {c.parties.defendant}
          </div>
        </button>
      ))}
    </div>
  );
}
