# API

## Principles
- Explicit versioned contracts where appropriate.
- Validate requests at trust boundaries.
- Consistent status/error model.
- Server-side authentication and authorization.
- Pagination for unbounded collections.
- Idempotency for operations where retries can duplicate effects.
- Rate limits/abuse controls according to risk.

## Contract
If OpenAPI is used, keep it synchronized with implementation.
