# Testing Rules

Every test must answer a concrete risk.

Bug fix: reproduce failure, then prove correction.
Business rule: prefer unit tests.
Persistence/framework boundary: integration test.
External contract: contract/integration test.
Critical end-user flow: E2E where economically justified.

Do not over-mock code until the test only verifies mocks.
Keep tests deterministic and isolated.
