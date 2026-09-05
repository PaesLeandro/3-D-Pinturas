# Context Engineering

Use context as a bounded working set.

## Priority
1. Current request and acceptance criteria.
2. `AGENTS.md`.
3. Project context and active SPEC.
4. Relevant architecture/security docs.
5. Files directly involved.
6. Tests/contracts adjacent to the change.

## Avoid
- loading the whole repository without need;
- repeating generated explanations;
- carrying obsolete assumptions;
- treating chat history as stronger evidence than repository state.

Update durable decisions in repository documentation instead of relying on conversational memory.
