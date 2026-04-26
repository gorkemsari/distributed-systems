---
title: "V. Coordination & Consensus"
sidebar:
  order: 5
---

In a distributed system, getting multiple independent nodes to agree on a single state or coordinate an action is notoriously difficult. This part covers the complex mechanics of how systems reach agreement, maintain transactional consistency across multiple databases, and prevent concurrent processes from corrupting shared resources.

### Chapters

* **[5.1. Distributed Transactions](/distributed-systems/coordination/distributed-transactions/)**: Explores the challenges of maintaining integrity across multiple services, comparing traditional two-phase commits (2PC) with asynchronous SAGA and Outbox patterns.
* **[5.2. Consensus Algorithms](/distributed-systems/coordination/consensus-algorithms/)**: Dives into the foundational protocols—like Paxos, Raft, and Zab—that allow a cluster of nodes to agree on a shared truth even when networks partition or machines fail.
* **[5.3. Distributed Locking](/distributed-systems/coordination/distributed-locking/)**: Details how to enforce mutual exclusion across a network, manage lease timeouts, and safely coordinate access using fencing tokens and consensus stores.