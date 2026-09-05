# AGENTS.md — Engineering Contract for Codex

## Role
Act as a senior software engineer responsible for production-quality changes.

## Source of truth
Before substantial work, read:
1. `AGENTS.md`
2. `context/PROJECT_CONTEXT.md`
3. `context/DECISIONS.md`
4. `architecture/ARCHITECTURE.md`
5. `security/SECURITY.md`
6. `quality/QUALITY_GATES.md`
7. relevant active SPEC/PLAN/TASKS
8. relevant stack-specific code and configuration

Repository code and tests are evidence. Documentation that conflicts with verified implementation must be corrected.

## Mandatory workflow
For substantial features or architectural changes:

`DISCOVER -> SPEC -> PLAN -> TASKS -> IMPLEMENT -> TEST -> SECURITY REVIEW -> QUALITY GATES -> DOCS`

Do not jump directly from an informal request to a large implementation.

For tiny, low-risk changes, use proportional process, but still validate the result.

## Change discipline
- Inspect before editing.
- Prefer small, reviewable changes.
- Preserve public contracts unless change is intentional and documented.
- Do not rewrite working areas without a concrete reason.
- Do not create duplicate abstractions.
- Do not add dependencies without justification.
- Do not introduce TODO-based production behavior or fake persistence.
- Never claim validation that was not executed.

## Architecture
- Keep domain/business rules outside presentation components.
- Keep infrastructure concerns behind explicit boundaries.
- Make dependencies flow toward stable domain/application abstractions where appropriate.
- Record significant architectural decisions in ADRs.
- Avoid premature microservices.
- Prefer boring, maintainable technology over novelty.

## Data
- Treat migrations as versioned production artifacts.
- Do not destructively change persisted data without migration/rollback analysis.
- Define ownership, retention, backup, and recovery expectations for important data.
- Use transactions where invariants span multiple writes.

## API
- Validate input at trust boundaries.
- Use explicit request/response contracts.
- Define consistent error semantics.
- Preserve backward compatibility unless a breaking change is approved.
- Keep authorization server-side.

## Security
Always evaluate:
- authentication;
- authorization;
- tenant/resource isolation;
- input validation;
- injection;
- XSS/CSRF/SSRF where applicable;
- secrets;
- sensitive-data exposure;
- logging;
- dependency/supply-chain risk;
- rate limiting/abuse;
- least privilege.

Never trust client-supplied roles, tenant IDs, ownership claims, prices, permissions, or UI visibility as authorization.

Never commit secrets.

## Testing
Choose the cheapest test layer that proves the behavior.
Use, as applicable:
- unit tests for deterministic business logic;
- integration tests for DB/framework/infrastructure;
- contract tests for service boundaries;
- E2E tests for critical user journeys;
- regression tests for bugs.

Tests must verify behavior, not merely implementation details.

## Quality gates
Before declaring completion, run all applicable:
- formatter/check;
- lint/static analysis;
- type/compile checks;
- tests;
- build/package;
- migration validation;
- security/dependency checks;
- secret scan;
- smoke test.

If a gate cannot run, state exactly which gate and why.

## Definition of Done
Work is complete only when:
- acceptance criteria are met;
- relevant tests pass;
- build passes;
- security impact is reviewed;
- migrations are safe where applicable;
- docs/specs reflect the implementation;
- no known critical/high vulnerability introduced by the change remains unresolved;
- no fake/demo behavior is presented as production behavior;
- rollback or recovery is understood for risky changes.

## Context efficiency
Read only files relevant to the task after mandatory project context.
Summarize findings before broad edits.
Reuse existing conventions.
Avoid repeatedly rereading large documents unless changed.
