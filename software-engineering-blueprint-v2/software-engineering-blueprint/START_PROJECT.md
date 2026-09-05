# Start Project

Use this checklist when the Blueprint enters a repository.

## 1. Discovery
- Identify language, framework, package manager and runtime.
- Identify application entry points.
- Identify database, migrations and external integrations.
- Identify authentication/authorization.
- Identify build, test, lint and deployment commands.
- Identify existing CI/CD.
- Identify environment variables without exposing secret values.

## 2. Classification
Select a project level from `governance/PROJECT_LEVELS.md`.

## 3. Baseline
Update:
- `context/PROJECT_CONTEXT.md`
- `architecture/ARCHITECTURE.md`
- `architecture/SYSTEM_DESIGN.md`
- `security/SECURITY.md`
- `quality/QUALITY_GATES.md`

## 4. Gaps
Record verified gaps. Separate:
- blocker;
- security;
- reliability;
- maintainability;
- UX/accessibility;
- performance;
- observability;
- documentation.

## 5. Plan
Do not repair everything at once. Prioritize by risk and business value.
