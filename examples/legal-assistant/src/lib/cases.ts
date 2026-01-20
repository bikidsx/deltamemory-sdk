export interface LegalCase {
  id: string;
  name: string;
  shortName: string;
  description: string;
  parties: {
    plaintiff: string;
    defendant: string;
  };
  caseType: string;
  filingDate: string;
}

export const cases: LegalCase[] = [
  {
    id: "techflow-v-datasync",
    name: "TechFlow Inc. v. DataSync Solutions LLC",
    shortName: "TechFlow v. DataSync",
    description: "Breach of contract dispute over software development services",
    parties: {
      plaintiff: "TechFlow Inc.",
      defendant: "DataSync Solutions LLC",
    },
    caseType: "Breach of Contract",
    filingDate: "2024-03-15",
  },
];

export const caseDocuments = {
  "techflow-v-datasync": [
    { id: "msa", name: "Master Services Agreement", type: "contract" },
    { id: "emails", name: "Email Communications", type: "correspondence" },
    { id: "depo-chen", name: "Deposition - Sarah Chen (DataSync PM)", type: "deposition" },
    { id: "depo-martinez", name: "Deposition - James Martinez (TechFlow CTO)", type: "deposition" },
    { id: "meeting-notes", name: "Meeting Notes", type: "notes" },
    { id: "damages", name: "Damages Calculation", type: "financial" },
  ],
};
