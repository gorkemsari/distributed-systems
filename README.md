# Distributed Systems & Microservices Architecture Guide

> A comprehensive, evolving handbook on designing, scaling, and maintaining distributed systems and modern microservices.

[![Status: Work in Progress](https://img.shields.io/badge/Status-Work_in_Progress-orange.svg)]()
[![Built with Astro](https://img.shields.io/badge/Built_with-Astro_Starlight-blue.svg)](https://starlight.astro.build/)

## 📖 About This Guide

This repository serves as the source code and content tracker for an in-depth digital handbook on **Distributed Systems and Microservices Architecture**. It bridges the critical gap between theoretical academic concepts and real-world engineering challenges.

Designed as a practitioner's guide, it moves beyond basic tutorials to focus on pragmatic trade-offs, advanced architectural patterns (such as CQRS, Event Sourcing, Sagas, and the Outbox pattern), and production-grade system design. The handbook systematically explores the entire lifecycle of distributed systems-from low-level data partitioning, consensus, and asynchronous communication to Kubernetes orchestration, Service Mesh integration, zero-trust security, and chaos engineering.

Whether you are safely decomposing monolithic architectures, building high-throughput data processing pipelines, or engineering resilient infrastructure at scale, this guide aims to provide structured, deeply technical, and easily digestible knowledge grounded in industry-standard case studies.

Read the live version here: **[gorkemsari.github.io/distributed-systems](https://gorkemsari.github.io/distributed-systems)**

---

## 🚀 Roadmap & Progress Tracker

The guide is divided into comprehensive parts. Rather than listing all topics here, below is the high-level progress. For the full, interactive table of contents, please visit the [official website](https://gorkemsari.github.io/distributed-systems).

- [ ] **I.** Foundations & The Laws of Physics
- [ ] **II.** Communication Protocols & API Design
- [ ] **III.** Data Management & Consistency
- [ ] **IV.** Data Processing Architectures
- [ ] **V.** Coordination & Consensus
- [ ] **VI.** Microservice Architecture Patterns
- [ ] **VII.** Resilience & Production Engineering
- [ ] **VIII.** Observability
- [ ] **IX.** Container Orchestration & Kubernetes
- [ ] **X.** Service Mesh & Network Security
- [ ] **XI.** Security Architecture
- [ ] **XII.** Deployment Strategies & Operations
- [ ] **XIII.** Case Studies

<details>
<summary><b>📂 Click here to expand the detailed Chapter checklist</b></summary>
<br>

### I. Foundations & The Laws of Physics
**1.1. From Monoliths to Distributed Systems**
- [ ] 1.1.1. The Scaling Dilemma: Vertical vs. Horizontal Scaling
- [ ] 1.1.2. Cost-Performance Curves and Hardware Limits
- [ ] 1.1.3. Stateful vs. Stateless Services: When to Use Which
- [ ] 1.1.4. The 8 Fallacies of Distributed Computing
- [ ] 1.1.5. Network Reliability, Bandwidth Limitations, and Topology Changes

**1.2. System Models and Failure Types**
- [ ] 1.2.1. Network Models: Synchronous, Asynchronous, and Partially Synchronous
- [ ] 1.2.2. Failure Models: Crash-Stop, Crash-Recovery, Omission
- [ ] 1.2.3. Byzantine Faults: Malicious or Corrupted Actors
- [ ] 1.2.4. Deterministic vs. Probabilistic Failure Models
- [ ] 1.2.5. Failure Propagation: Cascading Failure Analysis

**1.3. Time and Ordering**
- [ ] 1.3.1. Physical Clocks: Quartz Drift, NTP Limitations, Leap Second Problem
- [ ] 1.3.2. Monotonic Clocks vs. Time-of-Day: Which One to Use
- [ ] 1.3.3. The Happened-Before Relation: Foundation of Causality
- [ ] 1.3.4. Lamport Timestamps: Capturing Causality
- [ ] 1.3.5. Vector Clocks: Detecting Concurrency
- [ ] 1.3.6. Google TrueTime & Spanner: Working with Uncertainty

---

### II. Communication Protocols & API Design
**2.1. Synchronous Communication Protocols**
- [ ] 2.1.1. REST: Constraints, Resources, and HTTP Contracts
- [ ] 2.1.2. gRPC & Protocol Buffers: High-Performance RPC
- [ ] 2.1.3. gRPC Streaming: Unary, Server-Streaming, Bi-directional
- [ ] 2.1.4. GraphQL: Query Language and Federation Architecture
- [ ] 2.1.5. WebSocket and Server-Sent Events: Real-Time Communication
- [ ] 2.1.6. API Versioning Strategies

**2.2. Asynchronous Messaging Fundamentals**
- [ ] 2.2.1. Message Queue vs. Event Streaming: Differences and Use Cases
- [ ] 2.2.2. Kafka Architecture: Topic, Partition, Consumer Group, Offset
- [ ] 2.2.3. Pulsar vs. Kafka: Architectural Comparison
- [ ] 2.2.4. RabbitMQ: Exchange Types and Routing
- [ ] 2.2.5. At-Least-Once, At-Most-Once, and Exactly-Once Semantics
- [ ] 2.2.6. AsyncAPI: Documenting Asynchronous Contracts

**2.3. API Gateway and Service Contracts**
- [ ] 2.3.1. API Gateway Pattern: Single Entry Point, Routing, Auth
- [ ] 2.3.2. Backend for Frontend (BFF) Pattern
- [ ] 2.3.3. OpenAPI / Swagger: Contract-First Development
- [ ] 2.3.4. Consumer-Driven Contract Testing (Pact)
- [ ] 2.3.5. Idempotency and Safe HTTP Methods
- [ ] 2.3.6. Throttling and Rate Limiting at the Gateway Level

**2.4. Load Balancing**
- [ ] 2.4.1. L4 vs. L7 Load Balancing: Transport vs. Application Layer
- [ ] 2.4.2. Algorithms: Round Robin, Least Connections, Weighted, Consistent Hashing
- [ ] 2.4.3. Client-Side vs. Server-Side Load Balancing
- [ ] 2.4.4. Global Server Load Balancing (GSLB) and Anycast
- [ ] 2.4.5. Health-Aware Routing and Connection Draining

---

### III. Data Management & Consistency
**3.1. Data Partitioning / Sharding**
- [ ] 3.1.1. Key-Range Partitioning: Advantages and Range Scans
- [ ] 3.1.2. Hash Partitioning: Uniform Distribution
- [ ] 3.1.3. Skew and Hot-Spot Problems: Real-World Scenarios
- [ ] 3.1.4. Consistent Hashing and Virtual Nodes (vnodes)
- [ ] 3.1.5. Dynamic Rebalancing: Zero-Downtime Strategies
- [ ] 3.1.6. Colocated Joins: Placing Related Data on the Same Shard

**3.2. Replication Strategies**
- [ ] 3.2.1. Leader-Based Replication: Synchronous vs. Asynchronous
- [ ] 3.2.2. Failover and Leader Election: The Split-Brain Risk
- [ ] 3.2.3. Replication Lag Problems: Read-Your-Own-Writes
- [ ] 3.2.4. Multi-Leader Replication: Write Conflicts and Resolution
- [ ] 3.2.5. Leaderless Replication (Dynamo-style): Quorum R + W > N
- [ ] 3.2.6. Anti-Entropy: Read Repair and Merkle Trees

**3.3. Consistency Models**
- [ ] 3.3.1. Linearizability: The Strongest Guarantee, the Highest Cost
- [ ] 3.3.2. Serializability: Transaction Isolation
- [ ] 3.3.3. CAP Theorem: CP vs. AP Systems
- [ ] 3.3.4. PACELC Theorem: The Latency-Consistency Trade-off
- [ ] 3.3.5. Eventual Consistency: Last Write Wins (LWW) and Its Weaknesses
- [ ] 3.3.6. CRDTs: Conflict-free Replicated Data Types

**3.4. Storage Engines and Data Structures**
- [ ] 3.4.1. LSM-Tree vs. B-Tree: Write and Read Performance Trade-offs
- [ ] 3.4.2. SSTables, Memtable, and Compaction Strategies
- [ ] 3.4.3. Bloom Filters: Reducing Disk Reads
- [ ] 3.4.4. Write-Ahead Log (WAL): The Foundation of Durability
- [ ] 3.4.5. Columnar Storage: Advantages in Analytical Queries

**3.5. Distributed Caching**
- [ ] 3.5.1. Cache Strategies: Cache-Aside, Read-Through, Write-Through, Write-Behind
- [ ] 3.5.2. Cache Invalidation: TTL, Event-Based, and Versioned Keys
- [ ] 3.5.3. Redis Cluster Architecture: Sharding, Replication, Sentinel
- [ ] 3.5.4. Cache Stampede and Thundering Herd: Prevention Techniques
- [ ] 3.5.5. Distributed vs. Local Cache: Consistency Trade-offs
- [ ] 3.5.6. Memcached vs. Redis: Architectural Comparison

---

### IV. Data Processing Architectures
**4.1. Batch Processing**
- [ ] 4.1.1. The MapReduce Paradigm: Functional Roots, Map, Shuffle, Reduce
- [ ] 4.1.2. Distributed Sort: The Challenge of the Shuffle Phase
- [ ] 4.1.3. From Hadoop to Apache Spark: Disk vs. In-Memory Processing
- [ ] 4.1.4. RDD, DataFrame, and Dataset APIs
- [ ] 4.1.5. Checkpointing and Fault Tolerance
- [ ] 4.1.6. Straggler Tasks: Speculative Execution

**4.2. Stream Processing**
- [ ] 4.2.1. Bounded vs. Unbounded Data
- [ ] 4.2.2. Event Time vs. Processing Time: The Critical Distinction
- [ ] 4.2.3. Windowing: Tumbling, Sliding, and Session Windows
- [ ] 4.2.4. Watermarks: The Art of Managing Late Data
- [ ] 4.2.5. Triggers and Accumulation Modes
- [ ] 4.2.6. Apache Flink: Depth of Stateful Stream Processing

**4.3. Hybrid Architectures and the Log Abstraction**
- [ ] 4.3.1. The Commit Log Abstraction: The Core Idea Behind Kafka/Pulsar
- [ ] 4.3.2. Lambda Architecture: The Complexity of Batch + Speed Layers
- [ ] 4.3.3. Kappa Architecture: Everything Is a Stream
- [ ] 4.3.4. Log-Structured Merge and Compaction
- [ ] 4.3.5. Change Data Capture (CDC): Real-Time Synchronization
- [ ] 4.3.6. Debezium: Practical Database CDC Implementation

---

### V. Coordination & Consensus
**5.1. Distributed Transactions**
- [ ] 5.1.1. ACID vs. BASE: Guarantees and Trade-offs
- [ ] 5.1.2. Two-Phase Commit (2PC): Blocking Nature and Risks
- [ ] 5.1.3. Three-Phase Commit (3PC): Reducing Blockage
- [ ] 5.1.4. The SAGA Pattern: Choreography vs. Orchestration
- [ ] 5.1.5. Compensating Transactions
- [ ] 5.1.6. The Outbox Pattern: Atomic DB Write + Message Publishing

**5.2. Consensus Algorithms**
- [ ] 5.2.1. The Split-Brain Problem and Fencing Tokens
- [ ] 5.2.2. Paxos: Core Logic, Prepare and Accept Phases
- [ ] 5.2.3. Raft: Leader Election, Log Replication, Membership Changes
- [ ] 5.2.4. Zab (ZooKeeper Atomic Broadcast): Epochs and Zxid
- [ ] 5.2.5. etcd: Distributed K-V Storage on top of Raft
- [ ] 5.2.6. Byzantine Fault Tolerance: PBFT, Proof of Work / Proof of Stake

**5.3. Distributed Locking**
- [ ] 5.3.1. Lock Fundamentals: Mutual Exclusion in Distributed Systems
- [ ] 5.3.2. Lease-Based Locking: TTL, Renewal, and Expiry Semantics
- [ ] 5.3.3. Fencing Tokens: Preventing Stale Lock Holders
- [ ] 5.3.4. Redlock Algorithm: The Redis Distributed Lock Debate
- [ ] 5.3.5. ZooKeeper and etcd Recipes: Production Lock Implementations

---

### VI. Microservice Architecture Patterns
**6.1. Service Decomposition Strategies**
- [ ] 6.1.1. Domain-Driven Design (DDD): Bounded Context and Ubiquitous Language
- [ ] 6.1.2. Drawing Service Boundaries: Conway
- [ ] 6.1.3. The Strangler Fig Pattern: Safe Migration from Monolith
- [ ] 6.1.4. Decompose by Business Capability vs. Subdomain
- [ ] 6.1.5. Anti-Pattern: The Distributed Monolith - How to Avoid It
- [ ] 6.1.6. Service Granularity: How Small Is Too Small?

**6.2. Structural Patterns**
- [ ] 6.2.1. The Sidecar Pattern
- [ ] 6.2.2. The Ambassador Pattern: Helper Container as Proxy
- [ ] 6.2.3. The Adapter Pattern: Standardized Interfaces
- [ ] 6.2.4. Anti-Corruption Layer (ACL): Integration with Legacy Systems
- [ ] 6.2.5. Shared Library vs. Sidecar: Dependency Management Trade-offs

**6.3. Service Discovery**
- [ ] 6.3.1. Client-Side Discovery: Eureka, Ribbon
- [ ] 6.3.2. Server-Side Discovery: Load Balancer + Registry
- [ ] 6.3.3. Self-Registration vs. Third-Party Registration
- [ ] 6.3.4. Consul: Service Discovery + Health Checking + KV Store
- [ ] 6.3.5. DNS-Based Discovery: Kubernetes DNS
- [ ] 6.3.6. Health Check Endpoint Pattern

**6.4. Data Management Patterns**
- [ ] 6.4.1. Database per Service: Independence and Isolation
- [ ] 6.4.2. Shared Database Anti-Pattern: Why It Is Dangerous
- [ ] 6.4.3. API Composition: The Distributed Join Problem
- [ ] 6.4.4. Polyglot Persistence: The Right Database for the Right Job
- [ ] 6.4.5. Cross-Service Query: The Materialized View Pattern

**6.5. Event Sourcing and CQRS**
- [ ] 6.5.1. Event Sourcing: The Event Chain Instead of State
- [ ] 6.5.2. Event Store Design: The Append-Only Log
- [ ] 6.5.3. CQRS: Separating Read and Write Models
- [ ] 6.5.4. Projections: Building Read Models from Events
- [ ] 6.5.5. Event Versioning and Schema Evolution
- [ ] 6.5.6. Snapshots: Optimizing Long Event Chains

---

### VII. Resilience & Production Engineering
**7.1. Flow Control and Overload Management**
- [ ] 7.1.1. Backpressure: Pushing Load Back to the Source
- [ ] 7.1.2. Load Shedding: Which Requests to Drop and How
- [ ] 7.1.3. Priority Queues: Protecting Critical Requests
- [ ] 7.1.4. Rate Limiting: Token Bucket, Leaky Bucket, Fixed and Sliding Window
- [ ] 7.1.5. Adaptive Rate Limiting: Dynamic Limits

**7.2. Protection Patterns**
- [ ] 7.2.1. Circuit Breaker: The Closed to Open to Half-Open Cycle
- [ ] 7.2.2. Bulkhead Pattern: Thread Pool and Semaphore Isolation
- [ ] 7.2.3. Retry with Exponential Backoff and Jitter
- [ ] 7.2.4. Timeouts: Why They Are So Hard to Configure
- [ ] 7.2.5. Fallback Strategies: Degraded Service, Cached Response
- [ ] 7.2.6. From Hystrix to Resilience4j: Library Comparison

**7.3. Failure Detection and Membership Protocols**
- [ ] 7.3.1. Heartbeats and the Science of Timeout Configuration
- [ ] 7.3.2. Gossip Protocols: Information Dissemination via Epidemic Algorithms
- [ ] 7.3.3. Phi Accrual Failure Detector: Viewing Failure as a Probability
- [ ] 7.3.4. SWIM Protocol: Scalable Membership
- [ ] 7.3.5. Liveness vs. Readiness: The Difference Between Kubernetes Probes

**7.4. Chaos Engineering**
- [ ] 7.4.1. Chaos Monkey: Netflix
- [ ] 7.4.2. Principles of Chaos Engineering: Hypothesis, Blast Radius, Observation
- [ ] 7.4.3. Fault Injection: Simulating Latency, Exceptions, and Partitions
- [ ] 7.4.4. GameDay: Disaster Scenario Drills
- [ ] 7.4.5. Automating Chaos: Litmus, Chaos Toolkit

---

### VIII. Observability
**8.1. The Three Pillars: Logs, Metrics, Traces**
- [ ] 8.1.1. Structured Logging: JSON Logs and Correlation IDs
- [ ] 8.1.2. Log Aggregation: ELK Stack (Elasticsearch, Logstash, Kibana)
- [ ] 8.1.3. Metrics: Counter, Gauge, Histogram, Summary
- [ ] 8.1.4. The RED Method (Rate, Errors, Duration) vs. the USE Method
- [ ] 8.1.5. Distributed Tracing: Span, Trace, and Baggage Propagation
- [ ] 8.1.6. Correlation: Joining Three Signals from a Single Failure Event

**8.2. Tools and Standards**
- [ ] 8.2.1. OpenTelemetry: The Vendor-Neutral Instrumentation Standard
- [ ] 8.2.2. Prometheus: Pull-Based Metric Collection and PromQL
- [ ] 8.2.3. Grafana: Dashboard Design and Alerting
- [ ] 8.2.4. Jaeger / Zipkin / Tempo: Distributed Tracing Backends
- [ ] 8.2.5. Loki: Log Aggregation with the Prometheus Philosophy
- [ ] 8.2.6. eBPF: Kernel-Level Observability (Cilium, Pixie)

**8.3. SLOs, SLAs, and Error Budgets**
- [ ] 8.3.1. SLI (Service Level Indicator): What Should Be Measured?
- [ ] 8.3.2. SLO (Service Level Objective): The Art of Setting Targets
- [ ] 8.3.3. SLA (Service Level Agreement): Legal Obligations
- [ ] 8.3.4. Error Budget: Balancing Innovation and Reliability
- [ ] 8.3.5. Toil: Measuring and Reducing Operational Burden
- [ ] 8.3.6. Practical Lessons from the Google SRE Book

---

### IX. Container Orchestration & Kubernetes
**9.1. Kubernetes: The Operating System for Distributed Systems**
- [ ] 9.1.1. Pod, Deployment, StatefulSet, DaemonSet: When to Use Which
- [ ] 9.1.2. The Kubernetes Scheduler: The Mechanics of Placement Decisions
- [ ] 9.1.3. etcd: The Heart of Cluster State
- [ ] 9.1.4. Horizontal Pod Autoscaler (HPA) and KEDA: Event-Driven Scaling
- [ ] 9.1.5. Node Affinity, Taints and Tolerations: Fine-Grained Placement
- [ ] 9.1.6. The Operator Pattern: Extending Kubernetes

---

### X. Service Mesh & Network Security
**10.1. Service Mesh Architecture**
- [ ] 10.1.1. Why Service Mesh Exists: L4 vs. L7 Problems
- [ ] 10.1.2. Envoy Proxy: The Backbone of the Data Plane
- [ ] 10.1.3. Istio: Control Plane Components (Pilot, Citadel, Galley)
- [ ] 10.1.4. Linkerd: A Lightweight Alternative with a Rust-Based Proxy
- [ ] 10.1.5. Traffic Management: Load Balancing, Retry, and Fault Injection
- [ ] 10.1.6. Observability at the Mesh Level: Automatic Telemetry

**10.2. Network Policies and mTLS**
- [ ] 10.2.1. Kubernetes Network Policy: Pod-Level Firewall
- [ ] 10.2.2. mTLS: Mutual Authentication and Encryption
- [ ] 10.3. Certificate Lifecycle: Cert-Manager, SPIFFE / SPIRE
- [ ] 10.4. eBPF Networking: Kernel-Level CNI with Cilium
- [ ] 10.5. Ingress vs. Gateway API: Next-Generation Traffic Management

---

### XI. Security Architecture
**11.1. Authentication and Authorization**
- [ ] 11.1.1. OAuth 2.0 & OIDC: Identity Management in a Distributed Environment
- [ ] 11.1.2. JWT: Signing, Verification, and Refresh Strategies
- [ ] 11.1.3. API Key vs. Service Account: Service Identity
- [ ] 11.1.4. RBAC vs. ABAC: Authorization Models
- [ ] 11.1.5. Workload Identity: Service Identity with SPIFFE / SPIRE

**11.2. Zero Trust Architecture**
- [ ] 11.2.1. Engineering the Never Trust, Always Verify Principle
- [ ] 11.2.2. Micro-Segmentation: The Least-Privilege Network Model
- [ ] 11.2.3. Identity-Aware Proxy (IAP)
- [ ] 11.2.4. The BeyondCorp Model: Google
- [ ] 11.2.5. Continuous Verification: Dynamic Security Decisions

**11.3. Secrets Management and Encryption**
- [ ] 11.3.1. HashiCorp Vault: Dynamic Secrets, Leases, and Rotation
- [ ] 11.3.2. Kubernetes Secrets: Why They Are Not Enough
- [ ] 11.3.3. Envelope Encryption: The Key Encryption Key (KEK) Model
- [ ] 11.3.4. Encryption in Transit vs. At Rest: Both Are Mandatory
- [ ] 11.3.5. Supply Chain Security: The SLSA Framework and Sigstore

---

### XII. Deployment Strategies & Operations
**12.1. Deployment Patterns**
- [ ] 12.1.1. Blue/Green Deployment: Instant Cutover and Rollback
- [ ] 12.1.2. Canary Release: Progressive Traffic Shifting
- [ ] 12.1.3. Rolling Update: Staged Update Strategy
- [ ] 12.1.4. Feature Flags: Decoupling Deployment from Release
- [ ] 12.1.5. A/B Testing: Experimentation via Traffic Splitting
- [ ] 12.1.6. Shadow Deployment: Cloning Production Traffic

**12.2. GitOps and CI/CD**
- [ ] 12.2.1. GitOps Principles: Git as the Single Source of Truth
- [ ] 12.2.2. ArgoCD and Flux: GitOps Operators for Kubernetes
- [ ] 12.2.3. Progressive Delivery: Automated Canary Releases with Flagger
- [ ] 12.2.4. Pipeline as Code: Reproducible CI/CD
- [ ] 12.2.5. Artifact Management: OCI Registry and Helm Charts
- [ ] 12.2.6. Environment Promotion: Dev to Staging to Production

**12.3. Platform Engineering**
- [ ] 12.3.1. Internal Developer Platform (IDP): What It Is and Why It Is Needed
- [ ] 12.3.2. Backstage: Service Catalog and Developer Portal
- [ ] 12.3.3. Golden Paths: Speed and Security Through Standardized Routes
- [ ] 12.3.4. Infrastructure as Code: Terraform and Pulumi
- [ ] 12.3.5. Cost Optimization: Monitoring and Optimizing Resource Utilization

**12.4. Testing in Distributed Systems**
- [ ] 12.4.1. Integration Testing: Service Boundaries and Contract Verification
- [ ] 12.4.2. End-to-End Testing: Balancing Coverage and Flakiness
- [ ] 12.4.3. Testing Event-Driven Systems: Async Flows and Eventual Consistency
- [ ] 12.4.4. Staging Fidelity: How Realistic Is Your Test Environment?
- [ ] 12.4.5. Test Data Management: Synthetic Data, Anonymization, and Seeding

---

### XIII. Case Studies
**13.1. Messaging Platform: Apache Kafka**
- [ ] 13.1.1. Disk-Based Persistence and Zero-Copy Optimization
- [ ] 13.1.2. KRaft Mode: Eliminating the ZooKeeper Dependency
- [ ] 13.1.3. Consumer Group Rebalancing: Failure Scenarios
- [ ] 13.1.4. Exactly-Once Semantics: Idempotent Producer + Transactional API
- [ ] 13.1.5. Kafka Streams vs. ksqlDB: When to Use Which

**13.2. Distributed Key-Value Store: DynamoDB / Cassandra**
- [ ] 13.2.1. SLA-Driven Design: The P99 Latency Guarantee
- [ ] 13.2.2. DynamoDB
- [ ] 13.2.3. Cassandra
- [ ] 13.2.4. Using Vector Clocks for Conflict Resolution
- [ ] 13.2.5. The Hot Partition Problem: A Real-World Case Study

**13.3. Microservices at Scale: Netflix, Uber, Airbnb**
- [ ] 13.3.1. Netflix: The Birth of Chaos Engineering
- [ ] 13.3.2. Uber
- [ ] 13.3.3. Airbnb
- [ ] 13.3.4. Postmortem Culture: The Blameless Retrospective
- [ ] 13.3.5. Technical Debt Management: Sustainability at Scale

**13.4. Real-Time Analytics Platforms**
- [ ] 13.4.1. Stream Join Challenges: Temporal Join Strategies
- [ ] 13.4.2. Apache Pinot / Druid: OLAP at Low Latency
- [ ] 13.4.3. From Lambda to Data Mesh: The Evolution of Data Architecture
- [ ] 13.4.4. Data Mesh Principles: Domain-Oriented Data Ownership
- [ ] 13.4.5. ML Serving at Scale: Feature Store and Model Registry

---

</details>


## 🛠️ Tech Stack & Local Development

This documentation site is built using [Astro](https://astro.build/) and the [Starlight](https://starlight.astro.build/) theme. 

### Prerequisites
- Node.js (v18 or higher)
- pnpm, npm, or yarn

### Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/gorkemsari/distributed-systems.git
   cd distributed-systems
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm start
   ```
   The site will be available at `http://localhost:4321/distributed-systems`

---

## 🤝 Contributing
While this is primarily a personal handbook and reference, suggestions, typo fixes, and discussions are highly welcome! Feel free to open an issue or submit a Pull Request.

## 📄 License
Licensed under the MIT License.