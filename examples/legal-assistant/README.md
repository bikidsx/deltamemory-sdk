# Legal Assistant with DeltaMemory

AI-powered legal research assistant that remembers case details, contracts, depositions, and client communications.

## Features

- **Case Memory**: Ingest and query case documents, contracts, depositions
- **Multi-hop Reasoning**: Connect facts across multiple documents
- **Timeline Building**: Automatic chronology from ingested documents
- **Contradiction Detection**: Find inconsistencies in witness statements

## Demo Case: TechFlow v. DataSync

A synthetic breach of contract case with:
- Email threads between parties
- Master Services Agreement with key clauses
- Deposition excerpts with contradictions
- Meeting notes and timeline of events

## Setup

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Edit .env with your credentials

# Seed the demo case data
npm run seed

# Start the app
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Sample Questions

Try asking:
- "What are the key terms of the MSA between TechFlow and DataSync?"
- "When did DataSync first breach the contract?"
- "What did Sarah Chen say about the missed deadline in her deposition?"
- "Find contradictions between the email communications and deposition testimony"
- "Build a timeline of events from contract signing to termination"
- "What damages is TechFlow claiming?"

## Architecture

```
src/
├── app/
│   ├── api/chat/     # AI chat endpoint with DeltaMemory tools
│   ├── api/stats/    # Memory statistics
│   └── api/graph/    # Knowledge graph visualization
├── components/
│   ├── chat.tsx      # Chat interface
│   ├── document-viewer.tsx
│   └── timeline.tsx
├── lib/
│   ├── cases.ts      # Case definitions
│   └── seed.ts       # Seed demo data into DeltaMemory
└── data/
    └── techflow-v-datasync/  # Demo case documents
```
