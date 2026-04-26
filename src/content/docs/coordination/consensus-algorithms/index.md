---
title: "5.2. Consensus Algorithms"
sidebar:
  order: 2
---

At the heart of resilient distributed systems is the ability to make decisions as a unified group, even when individual nodes crash or network partitions occur. This chapter explores the foundational consensus algorithms that allow clusters to elect leaders, replicate state machines safely, and survive severe network disruptions.

### Topics Covered

* **[5.2.1. The Split-Brain Problem and Fencing Tokens](/distributed-systems/coordination/consensus-algorithms/split-brain-fencing/)**: Explains the catastrophic scenario where a cluster divides into independent, conflicting factions and how to protect shared resources.
* **[5.2.2. Paxos: Core Logic, Prepare and Accept Phases](/distributed-systems/coordination/consensus-algorithms/paxos/)**: Breaks down the notoriously complex but mathematically proven foundational algorithm for achieving distributed consensus.
* **[5.2.3. Raft: Leader Election, Log Replication, Membership Changes](/distributed-systems/coordination/consensus-algorithms/raft/)**: Explores the modern, highly understandable consensus protocol that powers most contemporary distributed systems.
* **[5.2.4. Zab (ZooKeeper Atomic Broadcast): Epochs and Zxid](/distributed-systems/coordination/consensus-algorithms/zab-zookeeper/)**: Details the specific consensus protocol designed to ensure high-throughput, linearizable writes for Apache ZooKeeper.
* **[5.2.5. etcd: Distributed K-V Storage on top of Raft](/distributed-systems/coordination/consensus-algorithms/etcd/)**: Examines the practical application of the Raft protocol in the ubiquitous distributed key-value store used heavily in cloud-native infrastructure.
* **[5.2.6. Byzantine Fault Tolerance: PBFT, Proof of Work / Proof of Stake](/distributed-systems/coordination/consensus-algorithms/byzantine-fault-tolerance/)**: Addresses how to achieve consensus in untrusted environments where nodes might act maliciously, bridging the gap between classical distributed systems and decentralized infrastructure networks.