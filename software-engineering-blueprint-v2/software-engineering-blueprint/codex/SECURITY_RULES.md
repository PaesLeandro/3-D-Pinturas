# Codex Security Rules

Security changes are fail-closed by default.

- Authentication identifies; authorization permits.
- Enforce authorization at the server/resource boundary.
- Validate identifiers and ownership independently of the client.
- Parameterize database queries.
- Encode/sanitize output according to sink/context.
- Protect state-changing browser requests against applicable CSRF threats.
- Restrict outbound requests to mitigate SSRF when URLs are user-controlled.
- Use secure cookie/token configuration appropriate to the architecture.
- Avoid sensitive values in logs/errors.
- Keep secrets outside source control.
- Review new dependencies before adoption.
