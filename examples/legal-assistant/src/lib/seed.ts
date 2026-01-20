// Seed case data into DeltaMemory
import { DeltaMemory } from "deltamemory";
import { caseData } from "./case-data";
import * as dotenv from "dotenv";

dotenv.config();

const client = new DeltaMemory({
  apiKey: process.env.DELTAMEMORY_API_KEY,
  baseUrl: process.env.DELTAMEMORY_URL,
});

const COLLECTION = "legal-techflow-v-datasync";

async function seed() {
  console.log("🏛️  Seeding TechFlow v. DataSync case data...\n");

  // Purge existing data
  try {
    await client.purge(COLLECTION);
    console.log("✓ Cleared existing data\n");
  } catch {
    // Collection might not exist
  }

  // 1. Ingest Contract
  console.log("📄 Ingesting Master Services Agreement...");
  await client.ingest(caseData.contract.content, {
    collection: COLLECTION,
    datetime: caseData.contract.date,
    speaker: "Contract",
    metadata: { docType: "contract", docId: "msa" },
  });
  console.log("   ✓ Contract ingested\n");

  // 2. Ingest Emails
  console.log("📧 Ingesting email communications...");
  for (const email of caseData.emails) {
    const content = `Email from ${email.from} to ${email.to}
Subject: ${email.subject}
Date: ${email.date}

${email.body}`;

    await client.ingest(content, {
      collection: COLLECTION,
      datetime: email.date,
      speaker: email.from.split("<")[0].trim(),
      metadata: { docType: "email", subject: email.subject },
    });
    console.log(`   ✓ ${email.subject}`);
    
    // Rate limit
    await new Promise((r) => setTimeout(r, 200));
  }
  console.log("");

  // 3. Ingest Depositions
  console.log("📝 Ingesting deposition transcripts...");
  
  // Sarah Chen deposition
  const sarahDepo = caseData.depositions.sarahChen;
  let sarahContent = `DEPOSITION OF ${sarahDepo.witness.toUpperCase()}
${sarahDepo.role}
Date: ${sarahDepo.date}

`;
  for (const excerpt of sarahDepo.excerpts) {
    sarahContent += `Q: ${excerpt.question}\nA: ${excerpt.answer}\n\n`;
  }
  await client.ingest(sarahContent, {
    collection: COLLECTION,
    datetime: sarahDepo.date,
    speaker: sarahDepo.witness,
    metadata: { docType: "deposition", witness: sarahDepo.witness },
  });
  console.log(`   ✓ ${sarahDepo.witness} deposition`);

  await new Promise((r) => setTimeout(r, 200));

  // James Martinez deposition
  const jamesDepo = caseData.depositions.jamesMartinez;
  let jamesContent = `DEPOSITION OF ${jamesDepo.witness.toUpperCase()}
${jamesDepo.role}
Date: ${jamesDepo.date}

`;
  for (const excerpt of jamesDepo.excerpts) {
    jamesContent += `Q: ${excerpt.question}\nA: ${excerpt.answer}\n\n`;
  }
  await client.ingest(jamesContent, {
    collection: COLLECTION,
    datetime: jamesDepo.date,
    speaker: jamesDepo.witness,
    metadata: { docType: "deposition", witness: jamesDepo.witness },
  });
  console.log(`   ✓ ${jamesDepo.witness} deposition\n`);

  await new Promise((r) => setTimeout(r, 200));

  // 4. Ingest Meeting Notes
  console.log("📋 Ingesting meeting notes...");
  for (const meeting of caseData.meetingNotes) {
    const content = `MEETING NOTES: ${meeting.title}
Date: ${meeting.date}
Attendees: ${meeting.attendees.join(", ")}

${meeting.notes}`;

    await client.ingest(content, {
      collection: COLLECTION,
      datetime: meeting.date,
      speaker: "Meeting Notes",
      metadata: { docType: "meeting", title: meeting.title },
    });
    console.log(`   ✓ ${meeting.title}`);
    
    await new Promise((r) => setTimeout(r, 200));
  }
  console.log("");

  // 5. Ingest Damages
  console.log("💰 Ingesting damages calculation...");
  let damagesContent = `DAMAGES CALCULATION - TechFlow Inc. v. DataSync Solutions LLC

DIRECT DAMAGES:
${caseData.damages.directDamages.map((d) => `- ${d.item}: $${d.amount.toLocaleString()}`).join("\n")}

CONSEQUENTIAL DAMAGES:
${caseData.damages.consequentialDamages.map((d) => `- ${d.item}: $${d.amount.toLocaleString()}${d.note ? ` (${d.note})` : ""}`).join("\n")}

TOTAL CLAIMED: $${caseData.damages.totalClaimed.toLocaleString()}`;

  await client.ingest(damagesContent, {
    collection: COLLECTION,
    datetime: "2024-02-01",
    speaker: "Damages Report",
    metadata: { docType: "financial" },
  });
  console.log("   ✓ Damages calculation\n");

  // Wait for extraction
  console.log("⏳ Waiting for cognitive extraction...");
  await new Promise((r) => setTimeout(r, 5000));

  // Get stats
  const stats = await client.stats(COLLECTION);
  console.log("\n📊 Collection Stats:");
  console.log(`   Memories: ${stats.memory_count}`);
  console.log(`   Facts: ${stats.fact_count}`);
  console.log(`   Concepts: ${stats.concept_count}`);

  console.log("\n✅ Seed complete! Run 'npm run dev' to start the app.");
}

seed().catch(console.error);
