# New Feature Workflow

For a non-trivial feature:

1. Create `specs/active/SPEC-<id>-<name>.md`.
2. Define problem, scope, non-goals, requirements and acceptance criteria.
3. Identify security/privacy/data implications.
4. Create `PLAN-<id>-<name>.md`.
5. Create `TASKS-<id>-<name>.md`.
6. Implement in small increments.
7. Add/adjust tests.
8. Run quality gates.
9. Update architecture/ADR if boundaries or contracts changed.
10. Close the SPEC only after evidence satisfies acceptance criteria.
