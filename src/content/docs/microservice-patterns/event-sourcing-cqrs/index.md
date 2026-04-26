---
title: "6.5. Event Sourcing and CQRS"
sidebar:
  order: 5
---

For systems requiring high auditability or extreme read performance, traditional CRUD models often fall short. This chapter explores capturing state as a stream of events and separating the read side of the application from the write side.

### Topics Covered

* **[6.5.1. Event Sourcing: The Event Chain Instead of State](/distributed-systems/microservice-patterns/event-sourcing-cqrs/event-sourcing/)**: Explains treating the history of changes as the "source of truth" rather than the current snapshot.
* **[6.5.2. Event Store Design: The Append-Only Log](/distributed-systems/microservice-patterns/event-sourcing-cqrs/event-store-design/)**: Details the requirements for high-performance, immutable storage for event streams.
* **[6.5.3. CQRS: Separating Read and Write Models](/distributed-systems/microservice-patterns/event-sourcing-cqrs/cqrs/)**: Explores Command Query Responsibility Segregation to optimize write paths and read paths independently.
* **[6.5.4. Projections: Building Read Models from Events](/distributed-systems/microservice-patterns/event-sourcing-cqrs/projections/)**: Covers how to asynchronously process event streams to populate specialized read databases.
* **[6.5.5. Event Versioning and Schema Evolution](/distributed-systems/microservice-patterns/event-sourcing-cqrs/event-versioning/)**: Addresses the operational challenge of handling changes to event structures over time.
* **[6.5.6. Snapshots: Optimizing Long Event Chains](/distributed-systems/microservice-patterns/event-sourcing-cqrs/snapshots/)**: Details how to improve performance by periodically saving the aggregate state to avoid replaying thousands of events.