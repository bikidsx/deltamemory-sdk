import { DeltaMemory } from "deltamemory";
import { NextRequest, NextResponse } from "next/server";

const client = new DeltaMemory({
  apiKey: process.env.DELTAMEMORY_API_KEY,
  baseUrl: process.env.DELTAMEMORY_URL,
});

export async function GET(req: NextRequest) {
  const caseId = req.nextUrl.searchParams.get("caseId");
  if (!caseId) {
    return NextResponse.json({ error: "caseId required" }, { status: 400 });
  }

  try {
    const stats = await client.stats(`legal-${caseId}`);
    return NextResponse.json(stats);
  } catch {
    return NextResponse.json(
      { memory_count: 0, fact_count: 0, concept_count: 0 },
      { status: 200 }
    );
  }
}
