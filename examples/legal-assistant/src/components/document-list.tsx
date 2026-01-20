"use client";

import { caseDocuments } from "@/lib/cases";

interface DocumentListProps {
  caseId: string;
}

const docTypeIcons: Record<string, string> = {
  contract: "📄",
  correspondence: "📧",
  deposition: "📝",
  notes: "📋",
  financial: "💰",
};

export function DocumentList({ caseId }: DocumentListProps) {
  const documents = caseDocuments[caseId as keyof typeof caseDocuments] || [];

  return (
    <div className="border border-[var(--border)] rounded-lg p-4">
      <h3 className="text-sm font-medium mb-3">Case Documents</h3>
      
      <div className="space-y-2">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center gap-2 p-2 rounded hover:bg-[var(--bg-secondary)] transition-colors"
          >
            <span>{docTypeIcons[doc.type] || "📁"}</span>
            <div className="flex-1 min-w-0">
              <div className="text-sm truncate">{doc.name}</div>
              <div className="text-xs text-[var(--text-muted)] capitalize">{doc.type}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-[var(--border)]">
        <p className="text-xs text-[var(--text-muted)]">
          All documents are indexed and searchable via the chat interface.
        </p>
      </div>
    </div>
  );
}
