# DeltaMemory MCP Server

MCP server that provides cognitive memory capabilities to AI assistants like Claude, Cursor, and other MCP-compatible clients.

## Installation

```bash
npm install @deltamemory/mcp
```

Or run directly with npx:

```bash
npx @deltamemory/mcp
```

## Configuration

Add to your MCP client configuration (e.g., Claude Desktop, Cursor):

```json
{
  "mcpServers": {
    "deltamemory": {
      "command": "npx",
      "args": ["-y", "@deltamemory/mcp"],
      "env": {
        "DELTAMEMORY_API_KEY": "dm_your_api_key",
        "DELTAMEMORY_URL": "https://your-endpoint.deltamemory.com",
        "DELTAMEMORY_COLLECTION": "my-collection"
      }
    }
  }
}
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DELTAMEMORY_API_KEY` | Yes | Your API key from [app.deltamemory.com](https://app.deltamemory.com) |
| `DELTAMEMORY_URL` | Yes | Your endpoint URL from the dashboard |
| `DELTAMEMORY_COLLECTION` | No | Default collection name (defaults to "default") |

## Available Tools

### Core Memory Operations

| Tool | Description |
|------|-------------|
| `deltamemory_ingest` | Ingest content with cognitive processing (extracts facts, concepts, profiles, events) |
| `deltamemory_recall` | Search memories with hybrid cognitive search |
| `deltamemory_store` | Store content without cognitive processing |
| `deltamemory_get` | Get a specific memory by ID |
| `deltamemory_delete` | Delete a memory by ID |

### Memory Management

| Tool | Description |
|------|-------------|
| `deltamemory_stats` | Get collection statistics |
| `deltamemory_decay` | Apply salience decay to memories |
| `deltamemory_consolidate` | Merge similar memories |
| `deltamemory_reflect` | Generate insights from recent memories |
| `deltamemory_graph` | Get knowledge graph |
| `deltamemory_purge` | Delete all memories in a collection |
| `deltamemory_health` | Check server health |

## Usage Examples

Once configured, your AI assistant can use these tools naturally:

- "Remember that I prefer TypeScript over JavaScript"
- "What do you know about my preferences?"
- "What have we discussed about my project?"

## License

MIT
