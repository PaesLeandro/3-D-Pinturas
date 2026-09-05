# Quality Gates

Configure commands in `context/PROJECT_CONTEXT.md`.

## Required when applicable
- [ ] formatting/check
- [ ] lint/static analysis
- [ ] type check / compilation
- [ ] unit tests
- [ ] integration tests
- [ ] build/package
- [ ] migration validation
- [ ] dependency vulnerability scan
- [ ] secret scan
- [ ] critical smoke/E2E test

No gate should be reported as passing unless it was executed successfully.
