# Security Baseline

Use OWASP guidance appropriate to the application and verify controls in the actual stack.

## Identity
- Strong authentication appropriate to risk.
- Secure credential/session lifecycle.
- MFA for privileged access when appropriate.

## Authorization
- Deny by default.
- Enforce server-side.
- Verify resource ownership/tenant boundary.
- Apply least privilege.

## Input/output
- Validate type, shape, range and business invariants.
- Parameterize queries.
- Context-aware output encoding/sanitization.

## Secrets
- No secrets in repository/client bundles/logs.
- Use environment/secret manager.
- Rotate compromised secrets.

## Data
- Classify sensitive data.
- Encrypt in transit.
- Use platform-appropriate encryption at rest.
- Minimize collection and retention.

## Operations
- Security-relevant events should be auditable.
- Logs must avoid secret/sensitive payload leakage.
- Dependencies and build pipeline are part of the threat surface.

## Verification
See `SECURITY_CHECKLIST.md` and `THREAT_MODEL.md`.
