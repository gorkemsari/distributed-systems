---
title: "1.1. From Monoliths to Distributed Systems"
sidebar:
  order: 1
---

Every system begins with a single node. However, as user demand and data volume increase, we eventually hit the physical limits of single-machine processing. This chapter explores the architectural transition from monolithic applications to distributed systems, focusing on scaling strategies, cost implications, and the fundamental network realities we must accept.

### Topics Covered

* **[1.1.1. The Scaling Dilemma: Vertical vs. Horizontal Scaling](/distributed-systems/foundations/monoliths-to-distributed/scaling-dilemma/)**: Examines the physical boundaries of scaling up a single machine versus the complexity of scaling out across multiple nodes.
* **[1.1.2. Cost-Performance Curves and Hardware Limits](/distributed-systems/foundations/monoliths-to-distributed/cost-performance-curves/)**: Analyzes the financial and performance trade-offs when transitioning to a distributed model.
* **[1.1.3. Stateful vs. Stateless Services: When to Use Which](/distributed-systems/foundations/monoliths-to-distributed/stateful-vs-stateless/)**: Explores how state management dictates service design, elasticity, and overall scalability.
* **[1.1.4. The 8 Fallacies of Distributed Computing](/distributed-systems/foundations/monoliths-to-distributed/eight-fallacies/)**: Unpacks the dangerous assumptions engineers make about networks, latency, and reliability.
* **[1.1.5. Network Reliability, Bandwidth Limitations, and Topology Changes](/distributed-systems/foundations/monoliths-to-distributed/network-reliability/)**: Details the physical constraints of network communication and how to handle dynamic topology shifts in production.