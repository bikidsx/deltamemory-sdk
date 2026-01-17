import { z } from "zod";

export const IngestSchema = z.object({
  content: z.string().min(1).describe("Content to ingest and process"),
  collection: z.string().optional().describe("Collection name (uses default if not specified)"),
  datetime: z.string().optional().describe("ISO 8601 timestamp for the content"),
  speaker: z.string().optional().describe("Speaker identifier (e.g., 'user', 'assistant')"),
}).strict();

export const RecallSchema = z.object({
  query: z.string().min(1).describe("Search query"),
  collection: z.string().optional().describe("Collection name"),
  limit: z.number().int().min(1).max(50).default(10).describe("Max results to return"),
}).strict();

export const StoreSchema = z.object({
  content: z.string().min(1).describe("Content to store"),
  collection: z.string().optional().describe("Collection name"),
  memoryType: z.enum(["Conversation", "Fact", "Insight", "Summary"]).default("Conversation").describe("Type of memory"),
}).strict();

export const GetMemorySchema = z.object({
  id: z.string().min(1).describe("Memory ID"),
  collection: z.string().optional().describe("Collection name"),
}).strict();

export const DeleteMemorySchema = z.object({
  id: z.string().min(1).describe("Memory ID to delete"),
  collection: z.string().optional().describe("Collection name"),
}).strict();

export const DecaySchema = z.object({
  rate: z.number().min(0).max(1).default(0.1).describe("Decay rate (0.0 to 1.0)"),
  collection: z.string().optional().describe("Collection name"),
}).strict();

export const ConsolidateSchema = z.object({
  threshold: z.number().min(0).max(1).default(0.8).describe("Similarity threshold (0.0 to 1.0)"),
  collection: z.string().optional().describe("Collection name"),
}).strict();

export const ReflectSchema = z.object({
  windowSize: z.number().int().min(1).max(100).default(10).describe("Number of recent memories to analyze"),
  collection: z.string().optional().describe("Collection name"),
}).strict();

export const CollectionSchema = z.object({
  collection: z.string().optional().describe("Collection name"),
}).strict();

export const EmptySchema = z.object({}).strict();
