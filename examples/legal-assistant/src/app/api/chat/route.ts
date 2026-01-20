import {
  convertToModelMessages,
  streamText,
  UIMessage,
  stepCountIs,
} from "ai";
import { google } from "@ai-sdk/google";
import { deltaMemoryTools, DeltaMemory } from "@deltamemory/ai-sdk";

export const maxDuration = 30;

const client = new DeltaMemory({
  apiKey: process.env.DELTAMEMORY_API_KEY,
  baseUrl: process.env.DELTAMEMORY_URL,
});

const systemPrompt = `You are an expert legal research assistant with access to case documents through memory. You help attorneys analyze cases by finding relevant facts, identifying contradictions, and building timelines.

Your capabilities:
- Search through contracts, depositions, emails, and meeting notes
- Find specific clauses and terms in agreements
- Identify contradictions between witness statements
- Build chronological timelines of events
- Calculate and explain damages
- Connect facts across multiple documents (multi-hop reasoning)

Guidelines:
- Always cite the source document and date when providing information
- Quote exact language from contracts when discussing terms
- Note any contradictions or inconsistencies you find
- Be precise with dates and amounts
- If information is not in the case documents, say so clearly

Use recallMemory to search case documents before answering questions.
Reference specific documents: "According to the MSA dated June 15, 2023..." or "In her deposition, Sarah Chen stated..."`;

export async function POST(req: Request) {
  const { messages, caseId }: { messages: UIMessage[]; caseId: string } =
    await req.json();

  const collection = `legal-${caseId}`;

  const result = streamText({
    model: google("gemini-2.0-flash"),
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
    tools: {
      ...deltaMemoryTools(client, { userId: caseId, collectionPrefix: "legal" }),
    },
    stopWhen: stepCountIs(5),
  });

  return result.toUIMessageStreamResponse();
}
