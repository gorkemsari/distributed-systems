import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'

export default defineConfig({
  site: 'https://gorkemsari.github.io',
  base: '/distributed-systems',
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: 'Distributed Systems',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/gorkemsari/distributed-systems',
        },
      ],
      sidebar: [

        // ── I. FOUNDATIONS ───────────────────────────────────────────────
        {
          label: 'I. Foundations & The Laws of Physics',
          collapsed: true,
          items: [
            { label: 'Part Overview', slug: 'foundations' },
            {
              label: '1. From Monoliths to Distributed Systems',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'foundations/monoliths-to-distributed' },
                { label: '1.1. The Scaling Dilemma: Vertical vs. Horizontal Scaling', slug: 'foundations/monoliths-to-distributed/scaling-dilemma' },
                { label: '1.2. Cost-Performance Curves and Hardware Limits', slug: 'foundations/monoliths-to-distributed/cost-performance-curves' },
                { label: '1.3. Stateful vs. Stateless Services: When to Use Which', slug: 'foundations/monoliths-to-distributed/stateful-vs-stateless' },
                { label: '1.4. The 8 Fallacies of Distributed Computing', slug: 'foundations/monoliths-to-distributed/eight-fallacies' },
                { label: '1.5. Network Reliability, Bandwidth Limitations, and Topology Changes', slug: 'foundations/monoliths-to-distributed/network-reliability' },
              ],
            },
            {
              label: '2. System Models and Failure Types',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'foundations/system-models' },
                { label: '2.1. Network Models: Synchronous, Asynchronous, and Partially Synchronous', slug: 'foundations/system-models/network-models' },
                { label: '2.2. Failure Models: Crash-Stop, Crash-Recovery, Omission', slug: 'foundations/system-models/failure-models' },
                { label: '2.3. Byzantine Faults: Malicious or Corrupted Actors', slug: 'foundations/system-models/byzantine-faults' },
                { label: '2.4. Deterministic vs. Probabilistic Failure Models', slug: 'foundations/system-models/deterministic-vs-probabilistic' },
                { label: '2.5. Failure Propagation: Cascading Failure Analysis', slug: 'foundations/system-models/cascading-failure' },
              ],
            },
            {
              label: '3. Time and Ordering',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'foundations/time-and-ordering' },
                { label: '3.1. Physical Clocks: Quartz Drift, NTP Limitations, Leap Second Problem', slug: 'foundations/time-and-ordering/physical-clocks' },
                { label: '3.2. Monotonic Clocks vs. Time-of-Day: Which One to Use', slug: 'foundations/time-and-ordering/monotonic-vs-time-of-day' },
                { label: '3.3. The Happened-Before Relation: Foundation of Causality', slug: 'foundations/time-and-ordering/happened-before' },
                { label: '3.4. Lamport Timestamps: Capturing Causality', slug: 'foundations/time-and-ordering/lamport-timestamps' },
                { label: '3.5. Vector Clocks: Detecting Concurrency', slug: 'foundations/time-and-ordering/vector-clocks' },
                { label: '3.6. Google TrueTime & Spanner: Working with Uncertainty', slug: 'foundations/time-and-ordering/truetime-spanner' },
              ],
            },
          ],
        },

        // ── II. COMMUNICATION ────────────────────────────────────────────
        {
          label: 'II. Communication Protocols & API Design',
          collapsed: true,
          items: [
            { label: 'Part Overview', slug: 'communication' },
            {
              label: '4. Synchronous Communication Protocols',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'communication/synchronous-protocols' },
                { label: '4.1. REST: Constraints, Resources, and HTTP Contracts', slug: 'communication/synchronous-protocols/rest' },
                { label: '4.2. gRPC & Protocol Buffers: High-Performance RPC', slug: 'communication/synchronous-protocols/grpc-protocol-buffers' },
                { label: '4.3. gRPC Streaming: Unary, Server-Streaming, Bi-directional', slug: 'communication/synchronous-protocols/grpc-streaming' },
                { label: '4.4. GraphQL: Query Language and Federation Architecture', slug: 'communication/synchronous-protocols/graphql' },
                { label: '4.5. WebSocket and Server-Sent Events: Real-Time Communication', slug: 'communication/synchronous-protocols/websocket-sse' },
                { label: '4.6. API Versioning Strategies', slug: 'communication/synchronous-protocols/api-versioning' },
              ],
            },
            {
              label: '5. Asynchronous Messaging Fundamentals',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'communication/async-messaging' },
                { label: '5.1. Message Queue vs. Event Streaming: Differences and Use Cases', slug: 'communication/async-messaging/message-queue-vs-event-streaming' },
                { label: '5.2. Kafka Architecture: Topic, Partition, Consumer Group, Offset', slug: 'communication/async-messaging/kafka-architecture' },
                { label: '5.3. Pulsar vs. Kafka: Architectural Comparison', slug: 'communication/async-messaging/pulsar-vs-kafka' },
                { label: '5.4. RabbitMQ: Exchange Types and Routing', slug: 'communication/async-messaging/rabbitmq' },
                { label: '5.5. At-Least-Once, At-Most-Once, and Exactly-Once Semantics', slug: 'communication/async-messaging/delivery-semantics' },
                { label: '5.6. AsyncAPI: Documenting Asynchronous Contracts', slug: 'communication/async-messaging/asyncapi' },
              ],
            },
            {
              label: '6. API Gateway and Service Contracts',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'communication/api-gateway' },
                { label: '6.1. API Gateway Pattern: Single Entry Point, Routing, Auth', slug: 'communication/api-gateway/api-gateway-pattern' },
                { label: '6.2. Backend for Frontend (BFF) Pattern', slug: 'communication/api-gateway/bff-pattern' },
                { label: '6.3. OpenAPI / Swagger: Contract-First Development', slug: 'communication/api-gateway/openapi-swagger' },
                { label: '6.4. Consumer-Driven Contract Testing (Pact)', slug: 'communication/api-gateway/contract-testing' },
                { label: '6.5. Idempotency and Safe HTTP Methods', slug: 'communication/api-gateway/idempotency' },
                { label: '6.6. Throttling and Rate Limiting at the Gateway Level', slug: 'communication/api-gateway/throttling-rate-limiting' },
              ],
            },
          ],
        },

        // ── III. DATA MANAGEMENT ─────────────────────────────────────────
        {
          label: 'III. Data Management & Consistency',
          collapsed: true,
          items: [
            { label: 'Part Overview', slug: 'data-management' },
            {
              label: '7. Data Partitioning / Sharding',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'data-management/data-partitioning' },
                { label: '7.1. Key-Range Partitioning: Advantages and Range Scans', slug: 'data-management/data-partitioning/key-range-partitioning' },
                { label: '7.2. Hash Partitioning: Uniform Distribution', slug: 'data-management/data-partitioning/hash-partitioning' },
                { label: '7.3. Skew and Hot-Spot Problems: Real-World Scenarios', slug: 'data-management/data-partitioning/skew-hot-spots' },
                { label: '7.4. Consistent Hashing and Virtual Nodes (vnodes)', slug: 'data-management/data-partitioning/consistent-hashing' },
                { label: '7.5. Dynamic Rebalancing: Zero-Downtime Strategies', slug: 'data-management/data-partitioning/dynamic-rebalancing' },
                { label: '7.6. Colocated Joins: Placing Related Data on the Same Shard', slug: 'data-management/data-partitioning/colocated-joins' },
              ],
            },
            {
              label: '8. Replication Strategies',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'data-management/replication' },
                { label: '8.1. Leader-Based Replication: Synchronous vs. Asynchronous', slug: 'data-management/replication/leader-based-replication' },
                { label: '8.2. Failover and Leader Election: The Split-Brain Risk', slug: 'data-management/replication/failover-leader-election' },
                { label: '8.3. Replication Lag Problems: Read-Your-Own-Writes', slug: 'data-management/replication/replication-lag' },
                { label: '8.4. Multi-Leader Replication: Write Conflicts and Resolution', slug: 'data-management/replication/multi-leader-replication' },
                { label: '8.5. Leaderless Replication (Dynamo-style): Quorum R + W > N', slug: 'data-management/replication/leaderless-replication' },
                { label: '8.6. Anti-Entropy: Read Repair and Merkle Trees', slug: 'data-management/replication/anti-entropy-merkle' },
              ],
            },
            {
              label: '9. Consistency Models',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'data-management/consistency-models' },
                { label: '9.1. Linearizability: The Strongest Guarantee, the Highest Cost', slug: 'data-management/consistency-models/linearizability' },
                { label: '9.2. Serializability: Transaction Isolation', slug: 'data-management/consistency-models/serializability' },
                { label: '9.3. CAP Theorem: CP vs. AP Systems', slug: 'data-management/consistency-models/cap-theorem' },
                { label: '9.4. PACELC Theorem: The Latency-Consistency Trade-off', slug: 'data-management/consistency-models/pacelc-theorem' },
                { label: '9.5. Eventual Consistency: Last Write Wins (LWW) and Its Weaknesses', slug: 'data-management/consistency-models/eventual-consistency' },
                { label: '9.6. CRDTs: Conflict-free Replicated Data Types', slug: 'data-management/consistency-models/crdts' },
              ],
            },
            {
              label: '10. Storage Engines and Data Structures',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'data-management/storage-engines' },
                { label: '10.1. LSM-Tree vs. B-Tree: Write and Read Performance Trade-offs', slug: 'data-management/storage-engines/lsm-tree-vs-b-tree' },
                { label: '10.2. SSTables, Memtable, and Compaction Strategies', slug: 'data-management/storage-engines/sstables-memtable-compaction' },
                { label: '10.3. Bloom Filters: Reducing Disk Reads', slug: 'data-management/storage-engines/bloom-filters' },
                { label: '10.4. Write-Ahead Log (WAL): The Foundation of Durability', slug: 'data-management/storage-engines/write-ahead-log' },
                { label: '10.5. Columnar Storage: Advantages in Analytical Queries', slug: 'data-management/storage-engines/columnar-storage' },
              ],
            },
          ],
        },

        // ── IV. DATA PROCESSING ──────────────────────────────────────────
        {
          label: 'IV. Data Processing Architectures',
          collapsed: true,
          items: [
            { label: 'Part Overview', slug: 'data-processing' },
            {
              label: '11. Batch Processing',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'data-processing/batch-processing' },
                { label: '11.1. The MapReduce Paradigm: Functional Roots, Map, Shuffle, Reduce', slug: 'data-processing/batch-processing/mapreduce' },
                { label: '11.2. Distributed Sort: The Challenge of the Shuffle Phase', slug: 'data-processing/batch-processing/distributed-sort' },
                { label: '11.3. From Hadoop to Apache Spark: Disk vs. In-Memory Processing', slug: 'data-processing/batch-processing/hadoop-to-spark' },
                { label: '11.4. RDD, DataFrame, and Dataset APIs', slug: 'data-processing/batch-processing/rdd-dataframe-dataset' },
                { label: '11.5. Checkpointing and Fault Tolerance', slug: 'data-processing/batch-processing/checkpointing-fault-tolerance' },
                { label: '11.6. Straggler Tasks: Speculative Execution', slug: 'data-processing/batch-processing/straggler-speculative-execution' },
              ],
            },
            {
              label: '12. Stream Processing',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'data-processing/stream-processing' },
                { label: '12.1. Bounded vs. Unbounded Data', slug: 'data-processing/stream-processing/bounded-vs-unbounded' },
                { label: '12.2. Event Time vs. Processing Time: The Critical Distinction', slug: 'data-processing/stream-processing/event-time-vs-processing-time' },
                { label: '12.3. Windowing: Tumbling, Sliding, and Session Windows', slug: 'data-processing/stream-processing/windowing' },
                { label: '12.4. Watermarks: The Art of Managing Late Data', slug: 'data-processing/stream-processing/watermarks' },
                { label: '12.5. Triggers and Accumulation Modes', slug: 'data-processing/stream-processing/triggers-accumulation' },
                { label: '12.6. Apache Flink: Depth of Stateful Stream Processing', slug: 'data-processing/stream-processing/apache-flink' },
              ],
            },
            {
              label: '13. Hybrid Architectures and the Log Abstraction',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'data-processing/hybrid-architectures' },
                { label: '13.1. The Commit Log Abstraction: The Core Idea Behind Kafka/Pulsar', slug: 'data-processing/hybrid-architectures/commit-log-abstraction' },
                { label: '13.2. Lambda Architecture: The Complexity of Batch + Speed Layers', slug: 'data-processing/hybrid-architectures/lambda-architecture' },
                { label: '13.3. Kappa Architecture: Everything Is a Stream', slug: 'data-processing/hybrid-architectures/kappa-architecture' },
                { label: '13.4. Log-Structured Merge and Compaction', slug: 'data-processing/hybrid-architectures/log-structured-merge' },
                { label: '13.5. Change Data Capture (CDC): Real-Time Synchronization', slug: 'data-processing/hybrid-architectures/change-data-capture' },
                { label: '13.6. Debezium: Practical Database CDC Implementation', slug: 'data-processing/hybrid-architectures/debezium' },
              ],
            },
          ],
        },

        // ── V. COORDINATION ──────────────────────────────────────────────
        {
          label: 'V. Coordination & Consensus',
          collapsed: true,
          items: [
            { label: 'Part Overview', slug: 'coordination' },
            {
              label: '14. Distributed Transactions',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'coordination/distributed-transactions' },
                { label: '14.1. ACID vs. BASE: Guarantees and Trade-offs', slug: 'coordination/distributed-transactions/acid-vs-base' },
                { label: '14.2. Two-Phase Commit (2PC): Blocking Nature and Risks', slug: 'coordination/distributed-transactions/two-phase-commit' },
                { label: '14.3. Three-Phase Commit (3PC): Reducing Blockage', slug: 'coordination/distributed-transactions/three-phase-commit' },
                { label: '14.4. The SAGA Pattern: Choreography vs. Orchestration', slug: 'coordination/distributed-transactions/saga-pattern' },
                { label: '14.5. Compensating Transactions', slug: 'coordination/distributed-transactions/compensating-transactions' },
                { label: '14.6. The Outbox Pattern: Atomic DB Write + Message Publishing', slug: 'coordination/distributed-transactions/outbox-pattern' },
              ],
            },
            {
              label: '15. Consensus Algorithms',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'coordination/consensus-algorithms' },
                { label: '15.1. The Split-Brain Problem and Fencing Tokens', slug: 'coordination/consensus-algorithms/split-brain-fencing' },
                { label: '15.2. Paxos: Core Logic, Prepare and Accept Phases', slug: 'coordination/consensus-algorithms/paxos' },
                { label: '15.3. Raft: Leader Election, Log Replication, Membership Changes', slug: 'coordination/consensus-algorithms/raft' },
                { label: '15.4. Zab (ZooKeeper Atomic Broadcast): Epochs and Zxid', slug: 'coordination/consensus-algorithms/zab-zookeeper' },
                { label: '15.5. etcd: Distributed K-V Storage on top of Raft', slug: 'coordination/consensus-algorithms/etcd' },
                { label: '15.6. Byzantine Fault Tolerance: PBFT, Proof of Work / Proof of Stake', slug: 'coordination/consensus-algorithms/byzantine-fault-tolerance' },
              ],
            },
            {
              label: '16. Event Sourcing and CQRS',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'coordination/event-sourcing-cqrs' },
                { label: '16.1. Event Sourcing: The Event Chain Instead of State', slug: 'coordination/event-sourcing-cqrs/event-sourcing' },
                { label: '16.2. Event Store Design: The Append-Only Log', slug: 'coordination/event-sourcing-cqrs/event-store-design' },
                { label: '16.3. CQRS: Separating Read and Write Models', slug: 'coordination/event-sourcing-cqrs/cqrs' },
                { label: '16.4. Projections: Building Read Models from Events', slug: 'coordination/event-sourcing-cqrs/projections' },
                { label: '16.5. Event Versioning and Schema Evolution', slug: 'coordination/event-sourcing-cqrs/event-versioning' },
                { label: '16.6. Snapshots: Optimizing Long Event Chains', slug: 'coordination/event-sourcing-cqrs/snapshots' },
              ],
            },
          ],
        },

        // ── VI. MICROSERVICE PATTERNS ─────────────────────────────────────
        {
          label: 'VI. Microservice Architecture Patterns',
          collapsed: true,
          items: [
            { label: 'Part Overview', slug: 'microservice-patterns' },
            {
              label: '17. Service Decomposition Strategies',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'microservice-patterns/service-decomposition' },
                { label: '17.1. Domain-Driven Design (DDD): Bounded Context and Ubiquitous Language', slug: 'microservice-patterns/service-decomposition/domain-driven-design' },
                { label: "17.2. Drawing Service Boundaries: Conway's Law", slug: 'microservice-patterns/service-decomposition/conways-law' },
                { label: '17.3. The Strangler Fig Pattern: Safe Migration from Monolith', slug: 'microservice-patterns/service-decomposition/strangler-fig' },
                { label: '17.4. Decompose by Business Capability vs. Subdomain', slug: 'microservice-patterns/service-decomposition/decompose-by-capability' },
                { label: '17.5. Anti-Pattern: The Distributed Monolith — How to Avoid It', slug: 'microservice-patterns/service-decomposition/distributed-monolith' },
                { label: '17.6. Service Granularity: How Small Is Too Small?', slug: 'microservice-patterns/service-decomposition/service-granularity' },
              ],
            },
            {
              label: '18. Structural Patterns',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'microservice-patterns/structural-patterns' },
                { label: '18.1. The Sidecar Pattern', slug: 'microservice-patterns/structural-patterns/sidecar-pattern' },
                { label: '18.2. The Ambassador Pattern: Helper Container as Proxy', slug: 'microservice-patterns/structural-patterns/ambassador-pattern' },
                { label: '18.3. The Adapter Pattern: Standardized Interfaces', slug: 'microservice-patterns/structural-patterns/adapter-pattern' },
                { label: '18.4. Anti-Corruption Layer (ACL): Integration with Legacy Systems', slug: 'microservice-patterns/structural-patterns/anti-corruption-layer' },
                { label: '18.5. Shared Library vs. Sidecar: Dependency Management Trade-offs', slug: 'microservice-patterns/structural-patterns/shared-library-vs-sidecar' },
              ],
            },
            {
              label: '19. Service Discovery',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'microservice-patterns/service-discovery' },
                { label: '19.1. Client-Side Discovery: Eureka, Ribbon', slug: 'microservice-patterns/service-discovery/client-side-discovery' },
                { label: '19.2. Server-Side Discovery: Load Balancer + Registry', slug: 'microservice-patterns/service-discovery/server-side-discovery' },
                { label: '19.3. Self-Registration vs. Third-Party Registration', slug: 'microservice-patterns/service-discovery/self-registration' },
                { label: '19.4. Consul: Service Discovery + Health Checking + KV Store', slug: 'microservice-patterns/service-discovery/consul' },
                { label: '19.5. DNS-Based Discovery: Kubernetes DNS', slug: 'microservice-patterns/service-discovery/dns-based-discovery' },
                { label: '19.6. Health Check Endpoint Pattern', slug: 'microservice-patterns/service-discovery/health-check-endpoint' },
              ],
            },
            {
              label: '20. Data Management Patterns',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'microservice-patterns/data-management-patterns' },
                { label: '20.1. Database per Service: Independence and Isolation', slug: 'microservice-patterns/data-management-patterns/database-per-service' },
                { label: '20.2. Shared Database Anti-Pattern: Why It Is Dangerous', slug: 'microservice-patterns/data-management-patterns/shared-database-antipattern' },
                { label: '20.3. API Composition: The Distributed Join Problem', slug: 'microservice-patterns/data-management-patterns/api-composition' },
                { label: '20.4. Polyglot Persistence: The Right Database for the Right Job', slug: 'microservice-patterns/data-management-patterns/polyglot-persistence' },
                { label: '20.5. Cross-Service Query: The Materialized View Pattern', slug: 'microservice-patterns/data-management-patterns/materialized-view' },
              ],
            },
          ],
        },

        // ── VII. RESILIENCE ───────────────────────────────────────────────
        {
          label: 'VII. Resilience & Production Engineering',
          collapsed: true,
          items: [
            { label: 'Part Overview', slug: 'resilience' },
            {
              label: '21. Flow Control and Overload Management',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'resilience/flow-control' },
                { label: '21.1. Backpressure: Pushing Load Back to the Source', slug: 'resilience/flow-control/backpressure' },
                { label: '21.2. Load Shedding: Which Requests to Drop and How', slug: 'resilience/flow-control/load-shedding' },
                { label: '21.3. Priority Queues: Protecting Critical Requests', slug: 'resilience/flow-control/priority-queues' },
                { label: '21.4. Rate Limiting: Token Bucket, Leaky Bucket, Fixed and Sliding Window', slug: 'resilience/flow-control/rate-limiting' },
                { label: '21.5. Adaptive Rate Limiting: Dynamic Limits', slug: 'resilience/flow-control/adaptive-rate-limiting' },
              ],
            },
            {
              label: '22. Protection Patterns',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'resilience/protection-patterns' },
                { label: '22.1. Circuit Breaker: The Closed to Open to Half-Open Cycle', slug: 'resilience/protection-patterns/circuit-breaker' },
                { label: '22.2. Bulkhead Pattern: Thread Pool and Semaphore Isolation', slug: 'resilience/protection-patterns/bulkhead-pattern' },
                { label: '22.3. Retry with Exponential Backoff and Jitter', slug: 'resilience/protection-patterns/retry-exponential-backoff' },
                { label: '22.4. Timeouts: Why They Are So Hard to Configure', slug: 'resilience/protection-patterns/timeouts' },
                { label: '22.5. Fallback Strategies: Degraded Service, Cached Response', slug: 'resilience/protection-patterns/fallback-strategies' },
                { label: '22.6. From Hystrix to Resilience4j: Library Comparison', slug: 'resilience/protection-patterns/hystrix-resilience4j' },
              ],
            },
            {
              label: '23. Failure Detection and Membership Protocols',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'resilience/failure-detection' },
                { label: '23.1. Heartbeats and the Science of Timeout Configuration', slug: 'resilience/failure-detection/heartbeats-timeouts' },
                { label: '23.2. Gossip Protocols: Information Dissemination via Epidemic Algorithms', slug: 'resilience/failure-detection/gossip-protocols' },
                { label: '23.3. Phi Accrual Failure Detector: Viewing Failure as a Probability', slug: 'resilience/failure-detection/phi-accrual-detector' },
                { label: '23.4. SWIM Protocol: Scalable Membership', slug: 'resilience/failure-detection/swim-protocol' },
                { label: '23.5. Liveness vs. Readiness: The Difference Between Kubernetes Probes', slug: 'resilience/failure-detection/liveness-vs-readiness' },
              ],
            },
            {
              label: '24. Chaos Engineering',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'resilience/chaos-engineering' },
                { label: "24.1. Chaos Monkey: Netflix's Pioneering Approach", slug: 'resilience/chaos-engineering/chaos-monkey' },
                { label: '24.2. Principles of Chaos Engineering: Hypothesis, Blast Radius, Observation', slug: 'resilience/chaos-engineering/chaos-principles' },
                { label: '24.3. Fault Injection: Simulating Latency, Exceptions, and Partitions', slug: 'resilience/chaos-engineering/fault-injection' },
                { label: '24.4. GameDay: Disaster Scenario Drills', slug: 'resilience/chaos-engineering/gameday' },
                { label: '24.5. Automating Chaos: Litmus, Chaos Toolkit', slug: 'resilience/chaos-engineering/chaos-automation' },
              ],
            },
          ],
        },

        // ── VIII. OBSERVABILITY ───────────────────────────────────────────
        {
          label: 'VIII. Observability',
          collapsed: true,
          items: [
            { label: 'Part Overview', slug: 'observability' },
            {
              label: '25. The Three Pillars: Logs, Metrics, Traces',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'observability/logs-metrics-traces' },
                { label: '25.1. Structured Logging: JSON Logs and Correlation IDs', slug: 'observability/logs-metrics-traces/structured-logging' },
                { label: '25.2. Log Aggregation: ELK Stack (Elasticsearch, Logstash, Kibana)', slug: 'observability/logs-metrics-traces/log-aggregation-elk' },
                { label: '25.3. Metrics: Counter, Gauge, Histogram, Summary', slug: 'observability/logs-metrics-traces/metrics' },
                { label: '25.4. The RED Method (Rate, Errors, Duration) vs. the USE Method', slug: 'observability/logs-metrics-traces/red-vs-use-method' },
                { label: '25.5. Distributed Tracing: Span, Trace, and Baggage Propagation', slug: 'observability/logs-metrics-traces/distributed-tracing' },
                { label: '25.6. Correlation: Joining Three Signals from a Single Failure Event', slug: 'observability/logs-metrics-traces/signal-correlation' },
              ],
            },
            {
              label: '26. Tools and Standards',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'observability/observability-tools' },
                { label: '26.1. OpenTelemetry: The Vendor-Neutral Instrumentation Standard', slug: 'observability/observability-tools/opentelemetry' },
                { label: '26.2. Prometheus: Pull-Based Metric Collection and PromQL', slug: 'observability/observability-tools/prometheus' },
                { label: '26.3. Grafana: Dashboard Design and Alerting', slug: 'observability/observability-tools/grafana' },
                { label: '26.4. Jaeger / Zipkin / Tempo: Distributed Tracing Backends', slug: 'observability/observability-tools/tracing-backends' },
                { label: '26.5. Loki: Log Aggregation with the Prometheus Philosophy', slug: 'observability/observability-tools/loki' },
                { label: '26.6. eBPF: Kernel-Level Observability (Cilium, Pixie)', slug: 'observability/observability-tools/ebpf-observability' },
              ],
            },
            {
              label: '27. SLOs, SLAs, and Error Budgets',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'observability/slo-sla-error-budgets' },
                { label: '27.1. SLI (Service Level Indicator): What Should Be Measured?', slug: 'observability/slo-sla-error-budgets/sli' },
                { label: '27.2. SLO (Service Level Objective): The Art of Setting Targets', slug: 'observability/slo-sla-error-budgets/slo' },
                { label: '27.3. SLA (Service Level Agreement): Legal Obligations', slug: 'observability/slo-sla-error-budgets/sla' },
                { label: '27.4. Error Budget: Balancing Innovation and Reliability', slug: 'observability/slo-sla-error-budgets/error-budget' },
                { label: '27.5. Toil: Measuring and Reducing Operational Burden', slug: 'observability/slo-sla-error-budgets/toil' },
                { label: '27.6. Practical Lessons from the Google SRE Book', slug: 'observability/slo-sla-error-budgets/google-sre' },
              ],
            },
          ],
        },

        // ── IX. SERVICE MESH ──────────────────────────────────────────────
        {
          label: 'IX. Service Mesh & Infrastructure',
          collapsed: true,
          items: [
            { label: 'Part Overview', slug: 'service-mesh' },
            {
              label: '28. Kubernetes: The Operating System for Distributed Systems',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'service-mesh/kubernetes' },
                { label: '28.1. Pod, Deployment, StatefulSet, DaemonSet: When to Use Which', slug: 'service-mesh/kubernetes/pod-deployment-statefulset' },
                { label: '28.2. The Kubernetes Scheduler: The Mechanics of Placement Decisions', slug: 'service-mesh/kubernetes/kubernetes-scheduler' },
                { label: '28.3. etcd: The Heart of Cluster State', slug: 'service-mesh/kubernetes/etcd-cluster-state' },
                { label: '28.4. Horizontal Pod Autoscaler (HPA) and KEDA: Event-Driven Scaling', slug: 'service-mesh/kubernetes/hpa-keda' },
                { label: '28.5. Node Affinity, Taints and Tolerations: Fine-Grained Placement', slug: 'service-mesh/kubernetes/node-affinity-taints' },
                { label: '28.6. The Operator Pattern: Extending Kubernetes', slug: 'service-mesh/kubernetes/operator-pattern' },
              ],
            },
            {
              label: '29. Service Mesh Architecture',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'service-mesh/service-mesh-architecture' },
                { label: '29.1. Why Service Mesh Exists: L4 vs. L7 Problems', slug: 'service-mesh/service-mesh-architecture/why-service-mesh' },
                { label: '29.2. Envoy Proxy: The Backbone of the Data Plane', slug: 'service-mesh/service-mesh-architecture/envoy-proxy' },
                { label: '29.3. Istio: Control Plane Components (Pilot, Citadel, Galley)', slug: 'service-mesh/service-mesh-architecture/istio' },
                { label: '29.4. Linkerd: A Lightweight Alternative with a Rust-Based Proxy', slug: 'service-mesh/service-mesh-architecture/linkerd' },
                { label: '29.5. Traffic Management: Load Balancing, Retry, and Fault Injection', slug: 'service-mesh/service-mesh-architecture/traffic-management' },
                { label: '29.6. Observability at the Mesh Level: Automatic Telemetry', slug: 'service-mesh/service-mesh-architecture/mesh-observability' },
              ],
            },
            {
              label: '30. Network Policies and mTLS',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'service-mesh/network-policies-mtls' },
                { label: '30.1. Kubernetes Network Policy: Pod-Level Firewall', slug: 'service-mesh/network-policies-mtls/kubernetes-network-policy' },
                { label: '30.2. mTLS: Mutual Authentication and Encryption', slug: 'service-mesh/network-policies-mtls/mtls' },
                { label: '30.3. Certificate Lifecycle: Cert-Manager, SPIFFE / SPIRE', slug: 'service-mesh/network-policies-mtls/certificate-lifecycle' },
                { label: '30.4. eBPF Networking: Kernel-Level CNI with Cilium', slug: 'service-mesh/network-policies-mtls/ebpf-networking' },
                { label: '30.5. Ingress vs. Gateway API: Next-Generation Traffic Management', slug: 'service-mesh/network-policies-mtls/ingress-vs-gateway-api' },
              ],
            },
          ],
        },

        // ── X. SECURITY ───────────────────────────────────────────────────
        {
          label: 'X. Security Architecture',
          collapsed: true,
          items: [
            { label: 'Part Overview', slug: 'security' },
            {
              label: '31. Authentication and Authorization',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'security/authentication-authorization' },
                { label: '31.1. OAuth 2.0 & OIDC: Identity Management in a Distributed Environment', slug: 'security/authentication-authorization/oauth2-oidc' },
                { label: '31.2. JWT: Signing, Verification, and Refresh Strategies', slug: 'security/authentication-authorization/jwt' },
                { label: '31.3. API Key vs. Service Account: Service Identity', slug: 'security/authentication-authorization/api-key-vs-service-account' },
                { label: '31.4. RBAC vs. ABAC: Authorization Models', slug: 'security/authentication-authorization/rbac-vs-abac' },
                { label: '31.5. Workload Identity: Service Identity with SPIFFE / SPIRE', slug: 'security/authentication-authorization/workload-identity' },
              ],
            },
            {
              label: '32. Zero Trust Architecture',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'security/zero-trust' },
                { label: '32.1. Engineering the Never Trust, Always Verify Principle', slug: 'security/zero-trust/never-trust-always-verify' },
                { label: '32.2. Micro-Segmentation: The Least-Privilege Network Model', slug: 'security/zero-trust/micro-segmentation' },
                { label: '32.3. Identity-Aware Proxy (IAP)', slug: 'security/zero-trust/identity-aware-proxy' },
                { label: "32.4. The BeyondCorp Model: Google's Approach", slug: 'security/zero-trust/beyondcorp' },
                { label: '32.5. Continuous Verification: Dynamic Security Decisions', slug: 'security/zero-trust/continuous-verification' },
              ],
            },
            {
              label: '33. Secrets Management and Encryption',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'security/secrets-management' },
                { label: '33.1. HashiCorp Vault: Dynamic Secrets, Leases, and Rotation', slug: 'security/secrets-management/hashicorp-vault' },
                { label: '33.2. Kubernetes Secrets: Why They Are Not Enough', slug: 'security/secrets-management/kubernetes-secrets' },
                { label: '33.3. Envelope Encryption: The Key Encryption Key (KEK) Model', slug: 'security/secrets-management/envelope-encryption' },
                { label: '33.4. Encryption in Transit vs. At Rest: Both Are Mandatory', slug: 'security/secrets-management/encryption-in-transit-at-rest' },
                { label: '33.5. Supply Chain Security: The SLSA Framework and Sigstore', slug: 'security/secrets-management/supply-chain-security' },
              ],
            },
          ],
        },

        // ── XI. DEPLOYMENT ────────────────────────────────────────────────
        {
          label: 'XI. Deployment Strategies & Operations',
          collapsed: true,
          items: [
            { label: 'Part Overview', slug: 'deployment' },
            {
              label: '34. Deployment Patterns',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'deployment/deployment-patterns' },
                { label: '34.1. Blue/Green Deployment: Instant Cutover and Rollback', slug: 'deployment/deployment-patterns/blue-green-deployment' },
                { label: '34.2. Canary Release: Progressive Traffic Shifting', slug: 'deployment/deployment-patterns/canary-release' },
                { label: '34.3. Rolling Update: Staged Update Strategy', slug: 'deployment/deployment-patterns/rolling-update' },
                { label: '34.4. Feature Flags: Decoupling Deployment from Release', slug: 'deployment/deployment-patterns/feature-flags' },
                { label: '34.5. A/B Testing: Experimentation via Traffic Splitting', slug: 'deployment/deployment-patterns/ab-testing' },
                { label: '34.6. Shadow Deployment: Cloning Production Traffic', slug: 'deployment/deployment-patterns/shadow-deployment' },
              ],
            },
            {
              label: '35. GitOps and CI/CD',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'deployment/gitops-cicd' },
                { label: '35.1. GitOps Principles: Git as the Single Source of Truth', slug: 'deployment/gitops-cicd/gitops-principles' },
                { label: '35.2. ArgoCD and Flux: GitOps Operators for Kubernetes', slug: 'deployment/gitops-cicd/argocd-flux' },
                { label: '35.3. Progressive Delivery: Automated Canary Releases with Flagger', slug: 'deployment/gitops-cicd/progressive-delivery' },
                { label: '35.4. Pipeline as Code: Reproducible CI/CD', slug: 'deployment/gitops-cicd/pipeline-as-code' },
                { label: '35.5. Artifact Management: OCI Registry and Helm Charts', slug: 'deployment/gitops-cicd/artifact-management' },
                { label: '35.6. Environment Promotion: Dev to Staging to Production', slug: 'deployment/gitops-cicd/environment-promotion' },
              ],
            },
            {
              label: '36. Platform Engineering',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'deployment/platform-engineering' },
                { label: '36.1. Internal Developer Platform (IDP): What It Is and Why It Is Needed', slug: 'deployment/platform-engineering/internal-developer-platform' },
                { label: '36.2. Backstage: Service Catalog and Developer Portal', slug: 'deployment/platform-engineering/backstage' },
                { label: '36.3. Golden Paths: Speed and Security Through Standardized Routes', slug: 'deployment/platform-engineering/golden-paths' },
                { label: '36.4. Infrastructure as Code: Terraform and Pulumi', slug: 'deployment/platform-engineering/infrastructure-as-code' },
                { label: '36.5. Cost Optimization: Monitoring and Optimizing Resource Utilization', slug: 'deployment/platform-engineering/cost-optimization' },
              ],
            },
          ],
        },

        // ── XII. CASE STUDIES ─────────────────────────────────────────────
        {
          label: 'XII. Case Studies',
          collapsed: true,
          items: [
            { label: 'Part Overview', slug: 'case-studies' },
            {
              label: '37. Messaging Platform: Apache Kafka',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'case-studies/apache-kafka' },
                { label: '37.1. Disk-Based Persistence and Zero-Copy Optimization', slug: 'case-studies/apache-kafka/disk-persistence-zero-copy' },
                { label: '37.2. KRaft Mode: Eliminating the ZooKeeper Dependency', slug: 'case-studies/apache-kafka/kraft-mode' },
                { label: '37.3. Consumer Group Rebalancing: Failure Scenarios', slug: 'case-studies/apache-kafka/consumer-group-rebalancing' },
                { label: '37.4. Exactly-Once Semantics: Idempotent Producer + Transactional API', slug: 'case-studies/apache-kafka/exactly-once-semantics' },
                { label: '37.5. Kafka Streams vs. ksqlDB: When to Use Which', slug: 'case-studies/apache-kafka/kafka-streams-ksqldb' },
              ],
            },
            {
              label: '38. Distributed Key-Value Store: DynamoDB / Cassandra',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'case-studies/dynamodb-cassandra' },
                { label: '38.1. SLA-Driven Design: The P99 Latency Guarantee', slug: 'case-studies/dynamodb-cassandra/sla-driven-design' },
                { label: "38.2. DynamoDB's Data Model: Partition Key + Sort Key", slug: 'case-studies/dynamodb-cassandra/dynamodb-data-model' },
                { label: "38.3. Cassandra's Consistent Hashing Ring", slug: 'case-studies/dynamodb-cassandra/cassandra-hashing-ring' },
                { label: '38.4. Using Vector Clocks for Conflict Resolution', slug: 'case-studies/dynamodb-cassandra/vector-clocks-conflict-resolution' },
                { label: '38.5. The Hot Partition Problem: A Real-World Case Study', slug: 'case-studies/dynamodb-cassandra/hot-partition-problem' },
              ],
            },
            {
              label: '39. Microservices at Scale: Netflix, Uber, Airbnb',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'case-studies/microservices-at-scale' },
                { label: '39.1. Netflix: The Birth of Chaos Engineering', slug: 'case-studies/microservices-at-scale/netflix-chaos-engineering' },
                { label: "39.2. Uber's Domain-Oriented Microservice Architecture (DOMA)", slug: 'case-studies/microservices-at-scale/uber-doma' },
                { label: "39.3. Airbnb's Journey from Monolith to Microservices", slug: 'case-studies/microservices-at-scale/airbnb-migration' },
                { label: '39.4. Postmortem Culture: The Blameless Retrospective', slug: 'case-studies/microservices-at-scale/postmortem-culture' },
                { label: '39.5. Technical Debt Management: Sustainability at Scale', slug: 'case-studies/microservices-at-scale/technical-debt-management' },
              ],
            },
            {
              label: '40. Real-Time Analytics Platforms',
              collapsed: true,
              items: [
                { label: 'Chapter Overview', slug: 'case-studies/realtime-analytics' },
                { label: '40.1. Stream Join Challenges: Temporal Join Strategies', slug: 'case-studies/realtime-analytics/stream-join-challenges' },
                { label: '40.2. Apache Pinot / Druid: OLAP at Low Latency', slug: 'case-studies/realtime-analytics/apache-pinot-druid' },
                { label: '40.3. From Lambda to Data Mesh: The Evolution of Data Architecture', slug: 'case-studies/realtime-analytics/lambda-to-data-mesh' },
                { label: '40.4. Data Mesh Principles: Domain-Oriented Data Ownership', slug: 'case-studies/realtime-analytics/data-mesh-principles' },
                { label: '40.5. ML Serving at Scale: Feature Store and Model Registry', slug: 'case-studies/realtime-analytics/ml-serving-at-scale' },
              ],
            },
          ],
        },

      ],
    }),
  ],
});
