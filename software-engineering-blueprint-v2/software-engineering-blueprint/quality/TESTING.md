# Testing Strategy

Use a risk-based test pyramid.

## Unit
Pure domain/business behavior.

## Integration
Database, framework, filesystem, queues and other real boundaries. Prefer ephemeral/test containers when useful.

## Contract
API/provider-consumer expectations where interface drift is material.

## E2E
Critical journeys, not every UI detail.

## Regression
Every important bug should gain a test when practical.

Tests should be deterministic, isolated and suitable for CI.
