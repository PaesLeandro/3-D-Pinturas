# Authorization

Document:
- roles/permissions;
- resource ownership;
- tenant model;
- privileged operations;
- policy enforcement points;
- audit requirements.

Rules:
- UI controls are not authorization.
- Client-provided role/tenant/owner claims are untrusted.
- Prefer centralized policy checks over scattered ad-hoc conditions.
- Test negative cases explicitly.
