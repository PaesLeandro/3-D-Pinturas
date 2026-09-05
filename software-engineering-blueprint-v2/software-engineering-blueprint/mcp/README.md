# MCP

MCP can connect Codex-compatible tooling to external systems when the project genuinely needs it.

Principles:
- least privilege;
- explicit scopes;
- no unnecessary production access;
- separate read and write capabilities when possible;
- never place credentials in this repository;
- document what each server can access and why.

Do not add an MCP server merely because it is available.
