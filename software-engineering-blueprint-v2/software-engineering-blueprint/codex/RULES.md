# Codex Rules

## Must
- Read project context before substantial edits.
- Inspect current code before proposing replacement.
- State assumptions when evidence is missing.
- Prefer reversible changes.
- Preserve conventions unless a documented improvement justifies change.
- Validate changed behavior.

## Must not
- Invent successful test/build results.
- Hardcode credentials.
- bypass authorization for convenience.
- replace persistence with in-memory/demo state in production paths.
- silently weaken security controls.
- add broad dependencies for trivial utilities.
- perform unrelated refactors during a focused task.

## Escalate/document
Create or update an ADR when a change materially affects:
- architecture;
- persistence technology;
- authentication/authorization;
- public API contracts;
- deployment topology;
- major dependency/framework;
- cross-cutting security model.
