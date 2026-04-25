---
title: "1.2. System Models and Failure Types"
sidebar:
  order: 2
---

To design reliable systems, we must first formalize how nodes communicate and how they break. This chapter defines the theoretical models that dictate network timing, categorizes the various ways components can malfunction, and analyzes how localized faults can ripple into global outages.

### Topics Covered

* **[1.2.1. Network Models: Synchronous, Asynchronous, and Partially Synchronous](/distributed-systems/foundations/system-models/network-models/)**: Defines the assumptions we can mathematically make about message delivery times and processing delays.
* **[1.2.2. Failure Models: Crash-Stop, Crash-Recovery, Omission](/distributed-systems/foundations/system-models/failure-models/)**: Categorizes node behaviors when things go wrong, from permanent halts to temporary packet drops.
* **[1.2.3. Byzantine Faults: Malicious or Corrupted Actors](/distributed-systems/foundations/system-models/byzantine-faults/)**: Addresses the most complex failure scenarios where nodes send conflicting information, corrupt data, or act maliciously.
* **[1.2.4. Deterministic vs. Probabilistic Failure Models](/distributed-systems/foundations/system-models/deterministic-vs-probabilistic/)**: Contrasts absolute, predictable failure guarantees with real-world statistical reliability.
* **[1.2.5. Failure Propagation: Cascading Failure Analysis](/distributed-systems/foundations/system-models/cascading-failure/)**: Examines how a single exhausted resource can trigger a domino effect across the architecture and how to contain it.