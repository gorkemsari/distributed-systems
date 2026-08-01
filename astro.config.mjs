import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gorkemsari.github.io',
  base: '/distributed-systems',
  redirects: {
    '/': '/distributed-systems/en/'
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          tr: 'tr',
        },
      },
    }),
    starlight({
      plugins: [starlightThemeRapide()],
      title: 'Distributed Systems & Microservices Architecture',
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
          lang: 'en',
        },
        tr: {
          label: 'Türkçe',
          lang: 'tr',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/gorkemsari/distributed-systems',
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'google-site-verification',
            content: 'mqcQWNp5X5PUrPO0hj6DiALBxOH3x8Ijk1bfUpFCEyI',
          },
        },
        {
          tag: 'script',
          attrs: { type: 'module' },
          content: [
            "import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';",
            "mermaid.initialize({ startOnLoad: false, theme: 'dark' });",
            "function decodeHTML(str) { const txt = document.createElement('textarea'); txt.innerHTML = str; return txt.value; }",
            "function getMermaidSource(pre) {",
            "  const lines = pre.querySelectorAll('.ec-line');",
            "  if (lines.length > 0) { return decodeHTML(Array.from(lines).map(l => l.textContent).join(String.fromCharCode(10))); }",
            "  return decodeHTML(pre.querySelector('code').textContent);",
            "}",
            "function renderMermaid() {",
            "  document.querySelectorAll('pre[data-language=\"mermaid\"]').forEach((pre) => {",
            "    if (pre.closest('div.mermaid')) return;",
            "    const source = getMermaidSource(pre);",
            "    const div = document.createElement('div');",
            "    div.className = 'mermaid not-content';",
            "    div.textContent = source;",
            "    const wrapper = pre.closest('.expressive-code') ?? pre;",
            "    wrapper.insertAdjacentElement('afterend', div);",
            "    wrapper.style.display = 'none';",
            "  });",
            "  mermaid.run({ nodes: document.querySelectorAll('div.mermaid:not([data-processed])') });",
            "}",
            "document.addEventListener('DOMContentLoaded', renderMermaid);",
            "document.addEventListener('astro:page-load', renderMermaid);",
          ].join("\n"),
        },
      ],
      sidebar: [

        // ── I. FOUNDATIONS ───────────────────────────────────────────────
        {
          label: 'I. Foundations & The Laws of Physics',
          translations: { tr: 'I. Temeller & Fiziğin Yasaları' },
          collapsed: true,
          items: [
            {
              label: 'Part Overview',
              translations: { tr: 'Bölüme Genel Bakış' },
              slug: 'foundations',
            },
            {
              label: '1.1. From Monoliths to Distributed Systems',
              translations: { tr: '1.1. Monolitlerden Dağıtık Sistemlere' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'foundations/monoliths-to-distributed',
                },
                {
                  label: '1.1.1. The Scaling Dilemma: Vertical vs. Horizontal Scaling',
                  translations: { tr: '1.1.1. Ölçekleme İkilemi: Dikey ve Yatay Ölçekleme' },
                  slug: 'foundations/monoliths-to-distributed/scaling-dilemma',
                },
                {
                  label: '1.1.2. Cost-Performance Curves and Hardware Limits',
                  translations: { tr: '1.1.2. Maliyet-Performans Eğrileri ve Donanım Sınırları' },
                  slug: 'foundations/monoliths-to-distributed/cost-performance-curves',
                },
                {
                  label: '1.1.3. Stateful vs. Stateless Services: When to Use Which',
                  translations: { tr: '1.1.3. Stateful ve Stateless Servisler: Hangisini Ne Zaman Kullanmalı' },
                  slug: 'foundations/monoliths-to-distributed/stateful-vs-stateless',
                },
                {
                  label: '1.1.4. The 8 Fallacies of Distributed Computing',
                  translations: { tr: '1.1.4. Dağıtık Hesaplamanın 8 Yanılgısı' },
                  slug: 'foundations/monoliths-to-distributed/eight-fallacies',
                },
                {
                  label: '1.1.5. Network Reliability, Bandwidth Limitations, and Topology Changes',
                  translations: { tr: '1.1.5. Ağ Güvenilirliği, Bant Genişliği Sınırları ve Topoloji Değişiklikleri' },
                  slug: 'foundations/monoliths-to-distributed/network-reliability',
                },
              ],
            },
            {
              label: '1.2. System Models and Failure Types',
              translations: { tr: '1.2. Sistem Modelleri ve Hata Türleri' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'foundations/system-models',
                },
                {
                  label: '1.2.1. Network Models: Synchronous, Asynchronous, and Partially Synchronous',
                  translations: { tr: '1.2.1. Ağ Modelleri: Senkron, Asenkron ve Kısmen Senkron' },
                  slug: 'foundations/system-models/network-models',
                },
                {
                  label: '1.2.2. Failure Models: Crash-Stop, Crash-Recovery, Omission',
                  translations: { tr: '1.2.2. Hata Modelleri: Crash-Stop, Crash-Recovery, Omission' },
                  slug: 'foundations/system-models/failure-models',
                },
                {
                  label: '1.2.3. Byzantine Faults: Malicious or Corrupted Actors',
                  translations: { tr: '1.2.3. Bizans Hataları: Kötü Niyetli veya Bozuk Aktörler' },
                  slug: 'foundations/system-models/byzantine-faults',
                },
                {
                  label: '1.2.4. Deterministic vs. Probabilistic Failure Models',
                  translations: { tr: '1.2.4. Deterministik ve Olasılıksal Hata Modelleri' },
                  slug: 'foundations/system-models/deterministic-vs-probabilistic',
                },
                {
                  label: '1.2.5. Failure Propagation: Cascading Failure Analysis',
                  translations: { tr: '1.2.5. Hata Yayılımı: Kaskad Hata Analizi' },
                  slug: 'foundations/system-models/cascading-failure',
                },
              ],
            },
            {
              label: '1.3. Time and Ordering',
              translations: { tr: '1.3. Zaman ve Sıralama' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'foundations/time-and-ordering',
                },
                {
                  label: '1.3.1. Physical Clocks: Quartz Drift, NTP Limitations, Leap Second Problem',
                  translations: { tr: '1.3.1. Fiziksel Saatler: Quartz Kayması, NTP Sınırları, Artık Saniye Problemi' },
                  slug: 'foundations/time-and-ordering/physical-clocks',
                },
                {
                  label: '1.3.2. Monotonic Clocks vs. Time-of-Day: Which One to Use',
                  translations: { tr: '1.3.2. Monotonic Saatler ve Günlük Saat: Hangisini Kullanmalı' },
                  slug: 'foundations/time-and-ordering/monotonic-vs-time-of-day',
                },
                {
                  label: '1.3.3. The Happened-Before Relation: Foundation of Causality',
                  translations: { tr: '1.3.3. Happened-Before İlişkisi: Nedenselliğin Temeli' },
                  slug: 'foundations/time-and-ordering/happened-before',
                },
                {
                  label: '1.3.4. Lamport Timestamps: Capturing Causality',
                  translations: { tr: '1.3.4. Lamport Zaman Damgaları: Nedenselliği Yakalamak' },
                  slug: 'foundations/time-and-ordering/lamport-timestamps',
                },
                {
                  label: '1.3.5. Vector Clocks: Detecting Concurrency',
                  translations: { tr: '1.3.5. Vektör Saatler: Eşzamanlılığı Tespit Etmek' },
                  slug: 'foundations/time-and-ordering/vector-clocks',
                },
                {
                  label: '1.3.6. Hybrid Logical Clocks (HLC): Combining Physical and Logical Time',
                  translations: { tr: '1.3.6. Hibrit Mantıksal Saatler (HLC): Fiziksel ve Mantıksal Zamanı Birleştirmek' },
                  slug: 'foundations/time-and-ordering/hybrid-logical-clocks',
                },
                {
                  label: '1.3.7. Google TrueTime & Spanner: Working with Uncertainty',
                  translations: { tr: '1.3.7. Google TrueTime & Spanner: Belirsizlikle Çalışmak' },
                  slug: 'foundations/time-and-ordering/truetime-spanner',
                },
                {
                  label: '1.3.8. Distributed ID Generation: UUIDv7, Snowflake, ULID',
                  translations: { tr: '1.3.8. Dağıtık ID Üretimi: UUIDv7, Snowflake, ULID' },
                  slug: 'foundations/time-and-ordering/distributed-id-generation',
                },
              ],
            },
          ],
        },

        // ── II. COMMUNICATION ────────────────────────────────────────────
        {
          label: 'II. Communication Protocols & API Design',
          translations: { tr: 'II. İletişim Protokolleri & API Tasarımı' },
          collapsed: true,
          items: [
            {
              label: 'Part Overview',
              translations: { tr: 'Bölüme Genel Bakış' },
              slug: 'communication',
            },
            {
              label: '2.1. Synchronous Communication Protocols',
              translations: { tr: '2.1. Senkron İletişim Protokolleri' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'communication/synchronous-protocols',
                },
                {
                  label: '2.1.1. REST: Constraints, Resources, and HTTP Contracts',
                  translations: { tr: '2.1.1. REST: Kısıtlar, Kaynaklar ve HTTP Sözleşmeleri' },
                  slug: 'communication/synchronous-protocols/rest',
                },
                {
                  label: '2.1.2. HTTP/2 and HTTP/3: Multiplexing, HOL Blocking, and QUIC',
                  translations: { tr: '2.1.2. HTTP/2 ve HTTP/3: Multiplexing, HOL Blocking ve QUIC' },
                  slug: 'communication/synchronous-protocols/http2-http3-quic',
                },
                {
                  label: '2.1.3. gRPC & Protocol Buffers: High-Performance RPC',
                  translations: { tr: '2.1.3. gRPC & Protocol Buffers: Yüksek Performanslı RPC' },
                  slug: 'communication/synchronous-protocols/grpc-protocol-buffers',
                },
                {
                  label: '2.1.4. gRPC Streaming: Unary, Server-Streaming, Bi-directional',
                  translations: { tr: '2.1.4. gRPC Streaming: Unary, Server-Streaming, Çift Yönlü' },
                  slug: 'communication/synchronous-protocols/grpc-streaming',
                },
                {
                  label: '2.1.5. GraphQL: Query Language and Federation Architecture',
                  translations: { tr: '2.1.5. GraphQL: Sorgu Dili ve Federasyon Mimarisi' },
                  slug: 'communication/synchronous-protocols/graphql',
                },
                {
                  label: '2.1.6. WebSocket and Server-Sent Events: Real-Time Communication',
                  translations: { tr: '2.1.6. WebSocket ve Server-Sent Events: Gerçek Zamanlı İletişim' },
                  slug: 'communication/synchronous-protocols/websocket-sse',
                },
                {
                  label: '2.1.7. API Versioning Strategies',
                  translations: { tr: '2.1.7. API Versiyonlama Stratejileri' },
                  slug: 'communication/synchronous-protocols/api-versioning',
                },
              ],
            },
            {
              label: '2.2. Asynchronous Messaging Fundamentals',
              translations: { tr: '2.2. Asenkron Mesajlaşma Temelleri' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'communication/async-messaging',
                },
                {
                  label: '2.2.1. Message Queue vs. Event Streaming: Differences and Use Cases',
                  translations: { tr: '2.2.1. Mesaj Kuyruğu ve Event Streaming: Farklar ve Kullanım Senaryoları' },
                  slug: 'communication/async-messaging/message-queue-vs-event-streaming',
                },
                {
                  label: '2.2.2. Kafka Architecture: Topic, Partition, Consumer Group, Offset',
                  translations: { tr: '2.2.2. Kafka Mimarisi: Topic, Partition, Consumer Group, Offset' },
                  slug: 'communication/async-messaging/kafka-architecture',
                },
                {
                  label: '2.2.3. Pulsar vs. Kafka: Architectural Comparison',
                  translations: { tr: '2.2.3. Pulsar ve Kafka: Mimari Karşılaştırma' },
                  slug: 'communication/async-messaging/pulsar-vs-kafka',
                },
                {
                  label: '2.2.4. RabbitMQ: Exchange Types and Routing',
                  translations: { tr: '2.2.4. RabbitMQ: Exchange Türleri ve Yönlendirme' },
                  slug: 'communication/async-messaging/rabbitmq',
                },
                {
                  label: '2.2.5. At-Least-Once, At-Most-Once, and Exactly-Once Semantics',
                  translations: { tr: '2.2.5. En Az Bir Kez, En Fazla Bir Kez ve Tam Olarak Bir Kez Semantiği' },
                  slug: 'communication/async-messaging/delivery-semantics',
                },
                {
                  label: '2.2.6. AsyncAPI: Documenting Asynchronous Contracts',
                  translations: { tr: '2.2.6. AsyncAPI: Asenkron Sözleşmeleri Belgelemek' },
                  slug: 'communication/async-messaging/asyncapi',
                },
                {
                  label: '2.2.7. Schema Evolution and Schema Registry: Avro, Protobuf, and Compatibility Modes',
                  translations: { tr: '2.2.7. Şema Evrimi ve Schema Registry: Avro, Protobuf ve Uyumluluk Modları' },
                  slug: 'communication/async-messaging/schema-evolution-registry',
                },
                {
                  label: '2.2.8. Dead Letter Queues and Poison Message Handling',
                  translations: { tr: '2.2.8. Dead Letter Queues ve Poison Message Yönetimi' },
                  slug: 'communication/async-messaging/dlq-poison-messages',
                },
              ],
            },
            {
              label: '2.3. API Gateway and Service Contracts',
              translations: { tr: '2.3. API Gateway ve Servis Sözleşmeleri' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'communication/api-gateway',
                },
                {
                  label: '2.3.1. API Gateway Pattern: Single Entry Point, Routing, Auth',
                  translations: { tr: '2.3.1. API Gateway Deseni: Tek Giriş Noktası, Yönlendirme, Kimlik Doğrulama' },
                  slug: 'communication/api-gateway/api-gateway-pattern',
                },
                {
                  label: '2.3.2. Backend for Frontend (BFF) Pattern',
                  translations: { tr: '2.3.2. Frontend için Backend (BFF) Deseni' },
                  slug: 'communication/api-gateway/bff-pattern',
                },
                {
                  label: '2.3.3. OpenAPI / Swagger: Contract-First Development',
                  translations: { tr: '2.3.3. OpenAPI / Swagger: Sözleşme Öncelikli Geliştirme' },
                  slug: 'communication/api-gateway/openapi-swagger',
                },
                {
                  label: '2.3.4. Consumer-Driven Contract Testing (Pact)',
                  translations: { tr: '2.3.4. Tüketici Güdümlü Sözleşme Testi (Pact)' },
                  slug: 'communication/api-gateway/contract-testing',
                },
                {
                  label: '2.3.5. Idempotency and Safe HTTP Methods',
                  translations: { tr: '2.3.5. Idempotency ve Güvenli HTTP Metotları' },
                  slug: 'communication/api-gateway/idempotency',
                },
                {
                  label: '2.3.6. Throttling and Rate Limiting at the Gateway Level',
                  translations: { tr: '2.3.6. Gateway Düzeyinde Throttling ve Rate Limiting' },
                  slug: 'communication/api-gateway/throttling-rate-limiting',
                },
              ],
            },
            {
              label: '2.4. Load Balancing',
              translations: { tr: '2.4. Yük Dengeleme' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'communication/load-balancing',
                },
                {
                  label: '2.4.1. L4 vs. L7 Load Balancing: Transport vs. Application Layer',
                  translations: { tr: '2.4.1. L4 ve L7 Yük Dengeleme: Transport ve Uygulama Katmanı' },
                  slug: 'communication/load-balancing/l4-vs-l7',
                },
                {
                  label: '2.4.2. Algorithms: Round Robin, Least Connections, Weighted, Consistent Hashing',
                  translations: { tr: '2.4.2. Algoritmalar: Round Robin, En Az Bağlantı, Ağırlıklı, Consistent Hashing' },
                  slug: 'communication/load-balancing/algorithms',
                },
                {
                  label: '2.4.3. Client-Side vs. Server-Side Load Balancing',
                  translations: { tr: '2.4.3. İstemci Taraflı ve Sunucu Taraflı Yük Dengeleme' },
                  slug: 'communication/load-balancing/client-vs-server-side',
                },
                {
                  label: '2.4.4. Global Server Load Balancing (GSLB) and Anycast',
                  translations: { tr: '2.4.4. Küresel Sunucu Yük Dengeleme (GSLB) ve Anycast' },
                  slug: 'communication/load-balancing/gslb-anycast',
                },
                {
                  label: '2.4.5. Health-Aware Routing and Connection Draining',
                  translations: { tr: '2.4.5. Sağlık Durumuna Duyarlı Yönlendirme ve Bağlantı Boşaltma' },
                  slug: 'communication/load-balancing/health-aware-routing',
                },
              ],
            },
          ],
        },

        // ── III. DATA MANAGEMENT ─────────────────────────────────────────
        {
          label: 'III. Data Management & Consistency',
          translations: { tr: 'III. Veri Yönetimi & Tutarlılık' },
          collapsed: true,
          items: [
            {
              label: 'Part Overview',
              translations: { tr: 'Bölüme Genel Bakış' },
              slug: 'data-management',
            },
            {
              label: '3.1. Data Partitioning / Sharding',
              translations: { tr: '3.1. Veri Bölümleme / Sharding' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'data-management/data-partitioning',
                },
                {
                  label: '3.1.1. Key-Range Partitioning: Advantages and Range Scans',
                  translations: { tr: '3.1.1. Anahtar Aralığı Bölümleme: Avantajlar ve Aralık Taramaları' },
                  slug: 'data-management/data-partitioning/key-range-partitioning',
                },
                {
                  label: '3.1.2. Hash Partitioning: Uniform Distribution',
                  translations: { tr: '3.1.2. Hash Bölümleme: Düzgün Dağılım' },
                  slug: 'data-management/data-partitioning/hash-partitioning',
                },
                {
                  label: '3.1.3. Skew and Hot-Spot Problems: Real-World Scenarios',
                  translations: { tr: '3.1.3. Çarpıklık ve Hot-Spot Problemleri: Gerçek Dünya Senaryoları' },
                  slug: 'data-management/data-partitioning/skew-hot-spots',
                },
                {
                  label: '3.1.4. Consistent Hashing and Virtual Nodes (vnodes)',
                  translations: { tr: '3.1.4. Consistent Hashing ve Sanal Düğümler (vnodes)' },
                  slug: 'data-management/data-partitioning/consistent-hashing',
                },
                {
                  label: '3.1.5. Dynamic Rebalancing: Zero-Downtime Strategies',
                  translations: { tr: '3.1.5. Dinamik Yeniden Dengeleme: Sıfır Kesinti Stratejileri' },
                  slug: 'data-management/data-partitioning/dynamic-rebalancing',
                },
                {
                  label: '3.1.6. Colocated Joins: Placing Related Data on the Same Shard',
                  translations: { tr: '3.1.6. Colocated Joins: İlgili Verileri Aynı Shard\'a Yerleştirmek' },
                  slug: 'data-management/data-partitioning/colocated-joins',
                },
                {
                  label: '3.1.7. Secondary Indexes in Partitioned Data: Local vs. Global',
                  translations: { tr: '3.1.7. Bölümlenmiş Veride İkincil İndeksler: Local ve Global' },
                  slug: 'data-management/data-partitioning/secondary-indexes',
                },
              ],
            },
            {
              label: '3.2. Replication Strategies',
              translations: { tr: '3.2. Replikasyon Stratejileri' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'data-management/replication',
                },
                {
                  label: '3.2.1. Leader-Based Replication: Synchronous vs. Asynchronous',
                  translations: { tr: '3.2.1. Lider Tabanlı Replikasyon: Senkron ve Asenkron' },
                  slug: 'data-management/replication/leader-based-replication',
                },
                {
                  label: '3.2.2. Failover and Leader Election: The Split-Brain Risk',
                  translations: { tr: '3.2.2. Failover ve Lider Seçimi: Split-Brain Riski' },
                  slug: 'data-management/replication/failover-leader-election',
                },
                {
                  label: '3.2.3. Replication Lag Problems: Read-Your-Own-Writes',
                  translations: { tr: '3.2.3. Replikasyon Gecikme Sorunları: Kendi Yazılarını Okuma' },
                  slug: 'data-management/replication/replication-lag',
                },
                {
                  label: '3.2.4. Multi-Leader Replication: Write Conflicts and Resolution',
                  translations: { tr: '3.2.4. Çok Liderli Replikasyon: Yazma Çakışmaları ve Çözümü' },
                  slug: 'data-management/replication/multi-leader-replication',
                },
                {
                  label: '3.2.5. Leaderless Replication (Dynamo-style): Quorum R + W > N',
                  translations: { tr: '3.2.5. Lidersiz Replikasyon (Dynamo tarzı): Quorum R + W > N' },
                  slug: 'data-management/replication/leaderless-replication',
                },
                {
                  label: '3.2.6. Anti-Entropy: Read Repair and Merkle Trees',
                  translations: { tr: '3.2.6. Anti-Entropy: Okuma Onarımı ve Merkle Ağaçları' },
                  slug: 'data-management/replication/anti-entropy-merkle',
                },
              ],
            },
            {
              label: '3.3. Consistency Models',
              translations: { tr: '3.3. Tutarlılık Modelleri' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'data-management/consistency-models',
                },
                {
                  label: '3.3.1. Linearizability: The Strongest Guarantee, the Highest Cost',
                  translations: { tr: '3.3.1. Linearizability: En Güçlü Garanti, En Yüksek Maliyet' },
                  slug: 'data-management/consistency-models/linearizability',
                },
                {
                  label: '3.3.2. Serializability: Transaction Isolation',
                  translations: { tr: '3.3.2. Serializability: İşlem İzolasyonu' },
                  slug: 'data-management/consistency-models/serializability',
                },
                {
                  label: '3.3.3. Weak Isolation and MVCC: Read Committed, Snapshot Isolation, Write Skew',
                  translations: { tr: '3.3.3. Zayıf İzolasyon ve MVCC: Read Committed, Snapshot Isolation, Write Skew' },
                  slug: 'data-management/consistency-models/weak-isolation-mvcc',
                },
                {
                  label: '3.3.4. CAP Theorem: CP vs. AP Systems',
                  translations: { tr: '3.3.4. CAP Teoremi: CP ve AP Sistemler' },
                  slug: 'data-management/consistency-models/cap-theorem',
                },
                {
                  label: '3.3.5. PACELC Theorem: The Latency-Consistency Trade-off',
                  translations: { tr: '3.3.5. PACELC Teoremi: Gecikme-Tutarlılık Dengesi' },
                  slug: 'data-management/consistency-models/pacelc-theorem',
                },
                {
                  label: '3.3.6. Causal Consistency and Session Guarantees: The Middle of the Spectrum',
                  translations: { tr: '3.3.6. Nedensel Tutarlılık ve Oturum Garantileri: Spektrumun Ortası' },
                  slug: 'data-management/consistency-models/causal-consistency-session-guarantees',
                },
                {
                  label: '3.3.7. Eventual Consistency: Last Write Wins (LWW) and Its Weaknesses',
                  translations: { tr: '3.3.7. Nihai Tutarlılık: Son Yazı Kazanır (LWW) ve Zayıflıkları' },
                  slug: 'data-management/consistency-models/eventual-consistency',
                },
                {
                  label: '3.3.8. CRDTs: Conflict-free Replicated Data Types',
                  translations: { tr: '3.3.8. CRDTs: Çakışmasız Çoğaltılmış Veri Türleri' },
                  slug: 'data-management/consistency-models/crdts',
                },
              ],
            },
            {
              label: '3.4. Storage Engines and Data Structures',
              translations: { tr: '3.4. Depolama Motorları ve Veri Yapıları' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'data-management/storage-engines',
                },
                {
                  label: '3.4.1. LSM-Tree vs. B-Tree: Write and Read Performance Trade-offs',
                  translations: { tr: '3.4.1. LSM-Tree ve B-Tree: Yazma ve Okuma Performansı Dengesi' },
                  slug: 'data-management/storage-engines/lsm-tree-vs-b-tree',
                },
                {
                  label: '3.4.2. SSTables, Memtable, and Compaction Strategies',
                  translations: { tr: '3.4.2. SSTables, Memtable ve Compaction Stratejileri' },
                  slug: 'data-management/storage-engines/sstables-memtable-compaction',
                },
                {
                  label: '3.4.3. Bloom Filters: Reducing Disk Reads',
                  translations: { tr: '3.4.3. Bloom Filtreleri: Disk Okumalarını Azaltmak' },
                  slug: 'data-management/storage-engines/bloom-filters',
                },
                {
                  label: '3.4.4. Write-Ahead Log (WAL): The Foundation of Durability',
                  translations: { tr: '3.4.4. Write-Ahead Log (WAL): Dayanıklılığın Temeli' },
                  slug: 'data-management/storage-engines/write-ahead-log',
                },
                {
                  label: '3.4.5. Columnar Storage: Advantages in Analytical Queries',
                  translations: { tr: '3.4.5. Kolonsal Depolama: Analitik Sorgulardaki Avantajlar' },
                  slug: 'data-management/storage-engines/columnar-storage',
                },
              ],
            },
            {
              label: '3.5. Distributed Caching',
              translations: { tr: '3.5. Dağıtık Önbellekleme' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'data-management/distributed-caching',
                },
                {
                  label: '3.5.1. Cache Strategies: Cache-Aside, Read-Through, Write-Through, Write-Behind',
                  translations: { tr: '3.5.1. Önbellek Stratejileri: Cache-Aside, Read-Through, Write-Through, Write-Behind' },
                  slug: 'data-management/distributed-caching/cache-strategies',
                },
                {
                  label: '3.5.2. Cache Invalidation: TTL, Event-Based, and Versioned Keys',
                  translations: { tr: '3.5.2. Önbellek Geçersizleştirme: TTL, Olay Tabanlı ve Versiyonlu Anahtarlar' },
                  slug: 'data-management/distributed-caching/cache-invalidation',
                },
                {
                  label: '3.5.3. Redis Cluster Architecture: Sharding, Replication, Sentinel',
                  translations: { tr: '3.5.3. Redis Cluster Mimarisi: Sharding, Replikasyon, Sentinel' },
                  slug: 'data-management/distributed-caching/redis-cluster',
                },
                {
                  label: '3.5.4. Cache Stampede and Thundering Herd: Prevention Techniques',
                  translations: { tr: '3.5.4. Cache Stampede ve Thundering Herd: Önleme Teknikleri' },
                  slug: 'data-management/distributed-caching/cache-stampede',
                },
                {
                  label: '3.5.5. Distributed vs. Local Cache: Consistency Trade-offs',
                  translations: { tr: '3.5.5. Dağıtık ve Yerel Önbellek: Tutarlılık Dengeleri' },
                  slug: 'data-management/distributed-caching/distributed-vs-local',
                },
                {
                  label: '3.5.6. Memcached vs. Redis: Architectural Comparison',
                  translations: { tr: '3.5.6. Memcached ve Redis: Mimari Karşılaştırma' },
                  slug: 'data-management/distributed-caching/memcached-vs-redis',
                },
              ],
            },
          ],
        },

        // ── IV. DATA PROCESSING ──────────────────────────────────────────
        {
          label: 'IV. Data Processing Architectures',
          translations: { tr: 'IV. Veri İşleme Mimarileri' },
          collapsed: true,
          items: [
            {
              label: 'Part Overview',
              translations: { tr: 'Bölüme Genel Bakış' },
              slug: 'data-processing',
            },
            {
              label: '4.1. Batch Processing',
              translations: { tr: '4.1. Toplu İşleme' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'data-processing/batch-processing',
                },
                {
                  label: '4.1.1. The MapReduce Paradigm: Functional Roots, Map, Shuffle, Reduce',
                  translations: { tr: '4.1.1. MapReduce Paradigması: Fonksiyonel Kökenler, Map, Shuffle, Reduce' },
                  slug: 'data-processing/batch-processing/mapreduce',
                },
                {
                  label: '4.1.2. Distributed Sort: The Challenge of the Shuffle Phase',
                  translations: { tr: '4.1.2. Dağıtık Sıralama: Shuffle Aşamasının Zorluğu' },
                  slug: 'data-processing/batch-processing/distributed-sort',
                },
                {
                  label: '4.1.3. From Hadoop to Apache Spark: Disk vs. In-Memory Processing',
                  translations: { tr: '4.1.3. Hadoop\'tan Apache Spark\'a: Disk ve Bellek İçi İşleme' },
                  slug: 'data-processing/batch-processing/hadoop-to-spark',
                },
                {
                  label: '4.1.4. RDD, DataFrame, and Dataset APIs',
                  translations: { tr: '4.1.4. RDD, DataFrame ve Dataset APIs' },
                  slug: 'data-processing/batch-processing/rdd-dataframe-dataset',
                },
                {
                  label: '4.1.5. Checkpointing and Fault Tolerance',
                  translations: { tr: '4.1.5. Checkpointing ve Hata Toleransı' },
                  slug: 'data-processing/batch-processing/checkpointing-fault-tolerance',
                },
                {
                  label: '4.1.6. Straggler Tasks: Speculative Execution',
                  translations: { tr: '4.1.6. Yavaş Kalan Görevler: Spekülatif Yürütme' },
                  slug: 'data-processing/batch-processing/straggler-speculative-execution',
                },
              ],
            },
            {
              label: '4.2. Stream Processing',
              translations: { tr: '4.2. Akış İşleme' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'data-processing/stream-processing',
                },
                {
                  label: '4.2.1. Bounded vs. Unbounded Data',
                  translations: { tr: '4.2.1. Sınırlı ve Sınırsız Veri' },
                  slug: 'data-processing/stream-processing/bounded-vs-unbounded',
                },
                {
                  label: '4.2.2. Event Time vs. Processing Time: The Critical Distinction',
                  translations: { tr: '4.2.2. Olay Zamanı ve İşleme Zamanı: Kritik Ayrım' },
                  slug: 'data-processing/stream-processing/event-time-vs-processing-time',
                },
                {
                  label: '4.2.3. Windowing: Tumbling, Sliding, and Session Windows',
                  translations: { tr: '4.2.3. Pencereleme: Tumbling, Sliding ve Session Pencereleri' },
                  slug: 'data-processing/stream-processing/windowing',
                },
                {
                  label: '4.2.4. Watermarks: The Art of Managing Late Data',
                  translations: { tr: '4.2.4. Filigranlar: Geç Gelen Veriyi Yönetme Sanatı' },
                  slug: 'data-processing/stream-processing/watermarks',
                },
                {
                  label: '4.2.5. Triggers and Accumulation Modes',
                  translations: { tr: '4.2.5. Tetikleyiciler ve Birikim Modları' },
                  slug: 'data-processing/stream-processing/triggers-accumulation',
                },
                {
                  label: '4.2.6. Apache Flink: Depth of Stateful Stream Processing',
                  translations: { tr: '4.2.6. Apache Flink: Durumlu Akış İşlemenin Derinliği' },
                  slug: 'data-processing/stream-processing/apache-flink',
                },
              ],
            },
            {
              label: '4.3. Hybrid Architectures and the Log Abstraction',
              translations: { tr: '4.3. Hibrit Mimariler ve Log Soyutlaması' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'data-processing/hybrid-architectures',
                },
                {
                  label: '4.3.1. The Commit Log Abstraction: The Core Idea Behind Kafka/Pulsar',
                  translations: { tr: '4.3.1. Commit Log Soyutlaması: Kafka/Pulsar\'ın Temel Fikri' },
                  slug: 'data-processing/hybrid-architectures/commit-log-abstraction',
                },
                {
                  label: '4.3.2. Lambda Architecture: The Complexity of Batch + Speed Layers',
                  translations: { tr: '4.3.2. Lambda Mimarisi: Batch + Hız Katmanlarının Karmaşıklığı' },
                  slug: 'data-processing/hybrid-architectures/lambda-architecture',
                },
                {
                  label: '4.3.3. Kappa Architecture: Everything Is a Stream',
                  translations: { tr: '4.3.3. Kappa Mimarisi: Her Şey Bir Akıştır' },
                  slug: 'data-processing/hybrid-architectures/kappa-architecture',
                },
                {
                  label: '4.3.4. Log Compaction: Kafka Compacted Topics and Tombstones',
                  translations: { tr: '4.3.4. Log Compaction: Kafka Compacted Topics ve Tombstones' },
                  slug: 'data-processing/hybrid-architectures/log-compaction',
                },
                {
                  label: '4.3.5. Change Data Capture (CDC): Real-Time Synchronization',
                  translations: { tr: '4.3.5. Değişiklik Verisi Yakalama (CDC): Gerçek Zamanlı Senkronizasyon' },
                  slug: 'data-processing/hybrid-architectures/change-data-capture',
                },
                {
                  label: '4.3.6. Debezium: Practical Database CDC Implementation',
                  translations: { tr: '4.3.6. Debezium: Pratik Veritabanı CDC Uygulaması' },
                  slug: 'data-processing/hybrid-architectures/debezium',
                },
              ],
            },
          ],
        },

        // ── V. COORDINATION ──────────────────────────────────────────────
        {
          label: 'V. Coordination & Consensus',
          translations: { tr: 'V. Koordinasyon & Mutabakat' },
          collapsed: true,
          items: [
            {
              label: 'Part Overview',
              translations: { tr: 'Bölüme Genel Bakış' },
              slug: 'coordination',
            },
            {
              label: '5.1. Distributed Transactions',
              translations: { tr: '5.1. Dağıtık İşlemler' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'coordination/distributed-transactions',
                },
                {
                  label: '5.1.1. ACID vs. BASE: Guarantees and Trade-offs',
                  translations: { tr: '5.1.1. ACID ve BASE: Garantiler ve Dengeler' },
                  slug: 'coordination/distributed-transactions/acid-vs-base',
                },
                {
                  label: '5.1.2. Two-Phase Commit (2PC): Blocking Nature and Risks',
                  translations: { tr: '5.1.2. İki Aşamalı Commit (2PC): Bloke Edici Doğası ve Riskleri' },
                  slug: 'coordination/distributed-transactions/two-phase-commit',
                },
                {
                  label: '5.1.3. Three-Phase Commit (3PC): Reducing Blockage',
                  translations: { tr: '5.1.3. Üç Aşamalı Commit (3PC): Bloke Durumunu Azaltmak' },
                  slug: 'coordination/distributed-transactions/three-phase-commit',
                },
                {
                  label: '5.1.4. The SAGA Pattern: Choreography vs. Orchestration',
                  translations: { tr: '5.1.4. SAGA Deseni: Koreografi ve Orkestrasyon' },
                  slug: 'coordination/distributed-transactions/saga-pattern',
                },
                {
                  label: '5.1.5. Compensating Transactions',
                  translations: { tr: '5.1.5. Telafi Edici İşlemler' },
                  slug: 'coordination/distributed-transactions/compensating-transactions',
                },
                {
                  label: '5.1.6. The Outbox Pattern: Atomic DB Write + Message Publishing',
                  translations: { tr: '5.1.6. Outbox Deseni: Atomik DB Yazımı + Mesaj Yayımlama' },
                  slug: 'coordination/distributed-transactions/outbox-pattern',
                },
              ],
            },
            {
              label: '5.2. Consensus Algorithms',
              translations: { tr: '5.2. Mutabakat Algoritmaları' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'coordination/consensus-algorithms',
                },
                {
                  label: '5.2.1. The Split-Brain Problem and Fencing Tokens',
                  translations: { tr: '5.2.1. Split-Brain Problemi ve Fencing Tokens' },
                  slug: 'coordination/consensus-algorithms/split-brain-fencing',
                },
                {
                  label: '5.2.2. The FLP Impossibility Result: Why Consensus Is Hard',
                  translations: { tr: '5.2.2. FLP İmkansızlık Sonucu: Mutabakat Neden Zordur' },
                  slug: 'coordination/consensus-algorithms/flp-impossibility',
                },
                {
                  label: '5.2.3. Paxos: Core Logic, Prepare and Accept Phases',
                  translations: { tr: '5.2.3. Paxos: Temel Mantık, Prepare ve Accept Aşamaları' },
                  slug: 'coordination/consensus-algorithms/paxos',
                },
                {
                  label: '5.2.4. Raft: Leader Election, Log Replication, Membership Changes',
                  translations: { tr: '5.2.4. Raft: Lider Seçimi, Log Replikasyonu, Üyelik Değişiklikleri' },
                  slug: 'coordination/consensus-algorithms/raft',
                },
                {
                  label: '5.2.5. Zab (ZooKeeper Atomic Broadcast): Epochs and Zxid',
                  translations: { tr: '5.2.5. Zab (ZooKeeper Atomic Broadcast): Dönemler ve Zxid' },
                  slug: 'coordination/consensus-algorithms/zab-zookeeper',
                },
                {
                  label: '5.2.6. etcd: Distributed K-V Storage on top of Raft',
                  translations: { tr: '5.2.6. etcd: Raft Üzerine Dağıtık K-V Depolama' },
                  slug: 'coordination/consensus-algorithms/etcd',
                },
                {
                  label: '5.2.7. Byzantine Fault Tolerance: PBFT, Proof of Work / Proof of Stake',
                  translations: { tr: '5.2.7. Bizans Hata Toleransı: PBFT, Proof of Work / Proof of Stake' },
                  slug: 'coordination/consensus-algorithms/byzantine-fault-tolerance',
                },
              ],
            },
            {
              label: '5.3. Distributed Locking',
              translations: { tr: '5.3. Dağıtık Kilitleme' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'coordination/distributed-locking',
                },
                {
                  label: '5.3.1. Lock Fundamentals: Mutual Exclusion in Distributed Systems',
                  translations: { tr: '5.3.1. Kilit Temelleri: Dağıtık Sistemlerde Karşılıklı Dışlama' },
                  slug: 'coordination/distributed-locking/lock-fundamentals',
                },
                {
                  label: '5.3.2. Lease-Based Locking: TTL, Renewal, and Expiry Semantics',
                  translations: { tr: '5.3.2. Kiralama Tabanlı Kilitleme: TTL, Yenileme ve Sona Erme Semantiği' },
                  slug: 'coordination/distributed-locking/lease-based-locking',
                },
                {
                  label: '5.3.3. Fencing Tokens: Preventing Stale Lock Holders',
                  translations: { tr: '5.3.3. Fencing Tokens: Eski Kilit Sahiplerini Engellemek' },
                  slug: 'coordination/distributed-locking/fencing-tokens',
                },
                {
                  label: '5.3.4. Redlock Algorithm: The Redis Distributed Lock Debate',
                  translations: { tr: '5.3.4. Redlock Algoritması: Redis Dağıtık Kilit Tartışması' },
                  slug: 'coordination/distributed-locking/redlock',
                },
                {
                  label: '5.3.5. ZooKeeper and etcd Recipes: Production Lock Implementations',
                  translations: { tr: '5.3.5. ZooKeeper ve etcd Tarifleri: Üretim Kilit Uygulamaları' },
                  slug: 'coordination/distributed-locking/zookeeper-etcd-recipes',
                },
              ],
            },
          ],
        },

        // ── VI. MICROSERVICE PATTERNS ─────────────────────────────────────
        {
          label: 'VI. Microservice Architecture Patterns',
          translations: { tr: 'VI. Mikroservis Mimari Desenleri' },
          collapsed: true,
          items: [
            {
              label: 'Part Overview',
              translations: { tr: 'Bölüme Genel Bakış' },
              slug: 'microservice-patterns',
            },
            {
              label: '6.1. Service Decomposition Strategies',
              translations: { tr: '6.1. Servis Ayrıştırma Stratejileri' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'microservice-patterns/service-decomposition',
                },
                {
                  label: '6.1.1. Domain-Driven Design (DDD): Bounded Context and Ubiquitous Language',
                  translations: { tr: '6.1.1. Domain-Driven Design (DDD): Sınırlı Bağlam ve Her Yerde Kullanılan Dil' },
                  slug: 'microservice-patterns/service-decomposition/domain-driven-design',
                },
                {
                  label: "6.1.2. Drawing Service Boundaries: Conway's Law",
                  translations: { tr: '6.1.2. Servis Sınırlarını Çizmek: Conway Yasası' },
                  slug: 'microservice-patterns/service-decomposition/conways-law',
                },
                {
                  label: '6.1.3. The Strangler Fig Pattern: Safe Migration from Monolith',
                  translations: { tr: '6.1.3. Strangler Fig Deseni: Monolitten Güvenli Geçiş' },
                  slug: 'microservice-patterns/service-decomposition/strangler-fig',
                },
                {
                  label: '6.1.4. Decompose by Business Capability vs. Subdomain',
                  translations: { tr: '6.1.4. İş Yeteneğine ve Alt Alana Göre Ayrıştırma' },
                  slug: 'microservice-patterns/service-decomposition/decompose-by-capability',
                },
                {
                  label: '6.1.5. Anti-Pattern: The Distributed Monolith - How to Avoid It',
                  translations: { tr: '6.1.5. Anti-Desen: Dağıtık Monolit - Nasıl Kaçınılır' },
                  slug: 'microservice-patterns/service-decomposition/distributed-monolith',
                },
                {
                  label: '6.1.6. Service Granularity: How Small Is Too Small?',
                  translations: { tr: '6.1.6. Servis Granülaritesi: Ne Kadar Küçük Çok Küçüktür?' },
                  slug: 'microservice-patterns/service-decomposition/service-granularity',
                },
                {
                  label: '6.1.7. The Modular Monolith: When Not to Distribute',
                  translations: { tr: '6.1.7. Modüler Monolit: Ne Zaman Dağıtmamalı' },
                  slug: 'microservice-patterns/service-decomposition/modular-monolith',
                },
              ],
            },
            {
              label: '6.2. Structural Patterns',
              translations: { tr: '6.2. Yapısal Desenler' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'microservice-patterns/structural-patterns',
                },
                {
                  label: '6.2.1. The Sidecar Pattern',
                  translations: { tr: '6.2.1. Sidecar Deseni' },
                  slug: 'microservice-patterns/structural-patterns/sidecar-pattern',
                },
                {
                  label: '6.2.2. The Ambassador Pattern: Helper Container as Proxy',
                  translations: { tr: '6.2.2. Ambassador Deseni: Yardımcı Konteyner Proxy Olarak' },
                  slug: 'microservice-patterns/structural-patterns/ambassador-pattern',
                },
                {
                  label: '6.2.3. The Adapter Pattern: Standardized Interfaces',
                  translations: { tr: '6.2.3. Adapter Deseni: Standartlaştırılmış Arayüzler' },
                  slug: 'microservice-patterns/structural-patterns/adapter-pattern',
                },
                {
                  label: '6.2.4. Anti-Corruption Layer (ACL): Integration with Legacy Systems',
                  translations: { tr: '6.2.4. Bozulma Önleme Katmanı (ACL): Eski Sistemlerle Entegrasyon' },
                  slug: 'microservice-patterns/structural-patterns/anti-corruption-layer',
                },
                {
                  label: '6.2.5. Shared Library vs. Sidecar: Dependency Management Trade-offs',
                  translations: { tr: '6.2.5. Paylaşılan Kütüphane ve Sidecar: Bağımlılık Yönetimi Dengeleri' },
                  slug: 'microservice-patterns/structural-patterns/shared-library-vs-sidecar',
                },
              ],
            },
            {
              label: '6.3. Service Discovery',
              translations: { tr: '6.3. Servis Keşfi' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'microservice-patterns/service-discovery',
                },
                {
                  label: '6.3.1. Client-Side Discovery: Eureka, Ribbon, and Spring Cloud LoadBalancer',
                  translations: { tr: '6.3.1. İstemci Taraflı Keşif: Eureka, Ribbon ve Spring Cloud LoadBalancer' },
                  slug: 'microservice-patterns/service-discovery/client-side-discovery',
                },
                {
                  label: '6.3.2. Server-Side Discovery: Load Balancer + Registry',
                  translations: { tr: '6.3.2. Sunucu Taraflı Keşif: Load Balancer + Registry' },
                  slug: 'microservice-patterns/service-discovery/server-side-discovery',
                },
                {
                  label: '6.3.3. Self-Registration vs. Third-Party Registration',
                  translations: { tr: '6.3.3. Öz Kayıt ve Üçüncü Taraf Kaydı' },
                  slug: 'microservice-patterns/service-discovery/self-registration',
                },
                {
                  label: '6.3.4. Consul: Service Discovery + Health Checking + KV Store',
                  translations: { tr: '6.3.4. Consul: Servis Keşfi + Sağlık Kontrolü + KV Deposu' },
                  slug: 'microservice-patterns/service-discovery/consul',
                },
                {
                  label: '6.3.5. DNS-Based Discovery: Kubernetes DNS',
                  translations: { tr: '6.3.5. DNS Tabanlı Keşif: Kubernetes DNS' },
                  slug: 'microservice-patterns/service-discovery/dns-based-discovery',
                },
                {
                  label: '6.3.6. Health Check Endpoint Pattern',
                  translations: { tr: '6.3.6. Sağlık Kontrol Endpoint Deseni' },
                  slug: 'microservice-patterns/service-discovery/health-check-endpoint',
                },
              ],
            },
            {
              label: '6.4. Data Management Patterns',
              translations: { tr: '6.4. Veri Yönetimi Desenleri' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'microservice-patterns/data-management-patterns',
                },
                {
                  label: '6.4.1. Database per Service: Independence and Isolation',
                  translations: { tr: '6.4.1. Servis Başına Veritabanı: Bağımsızlık ve İzolasyon' },
                  slug: 'microservice-patterns/data-management-patterns/database-per-service',
                },
                {
                  label: '6.4.2. Shared Database Anti-Pattern: Why It Is Dangerous',
                  translations: { tr: '6.4.2. Paylaşılan Veritabanı Anti-Deseni: Neden Tehlikelidir' },
                  slug: 'microservice-patterns/data-management-patterns/shared-database-antipattern',
                },
                {
                  label: '6.4.3. API Composition: The Distributed Join Problem',
                  translations: { tr: '6.4.3. API Bileşimi: Dağıtık Join Problemi' },
                  slug: 'microservice-patterns/data-management-patterns/api-composition',
                },
                {
                  label: '6.4.4. Polyglot Persistence: The Right Database for the Right Job',
                  translations: { tr: '6.4.4. Polyglot Persistence: Doğru İş İçin Doğru Veritabanı' },
                  slug: 'microservice-patterns/data-management-patterns/polyglot-persistence',
                },
                {
                  label: '6.4.5. Cross-Service Query: The Materialized View Pattern',
                  translations: { tr: '6.4.5. Servisler Arası Sorgu: Materialized View Deseni' },
                  slug: 'microservice-patterns/data-management-patterns/materialized-view',
                },
              ],
            },
            {
              label: '6.5. Event Sourcing and CQRS',
              translations: { tr: '6.5. Event Sourcing ve CQRS' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'microservice-patterns/event-sourcing-cqrs',
                },
                {
                  label: '6.5.1. Event Sourcing: The Event Chain Instead of State',
                  translations: { tr: '6.5.1. Event Sourcing: Durum Yerine Olay Zinciri' },
                  slug: 'microservice-patterns/event-sourcing-cqrs/event-sourcing',
                },
                {
                  label: '6.5.2. Event Store Design: The Append-Only Log',
                  translations: { tr: '6.5.2. Event Store Tasarımı: Yalnızca Ekleme Yapılan Log' },
                  slug: 'microservice-patterns/event-sourcing-cqrs/event-store-design',
                },
                {
                  label: '6.5.3. CQRS: Separating Read and Write Models',
                  translations: { tr: '6.5.3. CQRS: Okuma ve Yazma Modellerini Ayırmak' },
                  slug: 'microservice-patterns/event-sourcing-cqrs/cqrs',
                },
                {
                  label: '6.5.4. Projections: Building Read Models from Events',
                  translations: { tr: '6.5.4. Projeksiyonlar: Olaylardan Okuma Modelleri Oluşturmak' },
                  slug: 'microservice-patterns/event-sourcing-cqrs/projections',
                },
                {
                  label: '6.5.5. Event Versioning and Schema Evolution',
                  translations: { tr: '6.5.5. Olay Versiyonlama ve Şema Evrimi' },
                  slug: 'microservice-patterns/event-sourcing-cqrs/event-versioning',
                },
                {
                  label: '6.5.6. Snapshots: Optimizing Long Event Chains',
                  translations: { tr: '6.5.6. Anlık Görüntüler: Uzun Olay Zincirlerini Optimize Etmek' },
                  slug: 'microservice-patterns/event-sourcing-cqrs/snapshots',
                },
              ],
            },
          ],
        },

        // ── VII. RESILIENCE ───────────────────────────────────────────────
        {
          label: 'VII. Resilience & Production Engineering',
          translations: { tr: 'VII. Dayanıklılık & Üretim Mühendisliği' },
          collapsed: true,
          items: [
            {
              label: 'Part Overview',
              translations: { tr: 'Bölüme Genel Bakış' },
              slug: 'resilience',
            },
            {
              label: '7.1. Flow Control and Overload Management',
              translations: { tr: '7.1. Akış Kontrolü ve Aşırı Yük Yönetimi' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'resilience/flow-control',
                },
                {
                  label: "7.1.1. Queueing Theory Foundations: Little's Law and the Utilization Curve",
                  translations: { tr: '7.1.1. Kuyruk Teorisi Temelleri: Little Yasası ve Kullanım Eğrisi' },
                  slug: 'resilience/flow-control/queueing-theory-littles-law',
                },
                {
                  label: '7.1.2. Backpressure: Pushing Load Back to the Source',
                  translations: { tr: '7.1.2. Geri Baskı: Yükü Kaynağa Geri Döndürmek' },
                  slug: 'resilience/flow-control/backpressure',
                },
                {
                  label: '7.1.3. Load Shedding: Which Requests to Drop and How',
                  translations: { tr: '7.1.3. Yük Atma: Hangi İstekler Düşürülür ve Nasıl' },
                  slug: 'resilience/flow-control/load-shedding',
                },
                {
                  label: '7.1.4. Priority Queues: Protecting Critical Requests',
                  translations: { tr: '7.1.4. Öncelik Kuyrukları: Kritik İstekleri Korumak' },
                  slug: 'resilience/flow-control/priority-queues',
                },
                {
                  label: '7.1.5. Rate Limiting: Token Bucket, Leaky Bucket, Fixed and Sliding Window',
                  translations: { tr: '7.1.5. Rate Limiting: Token Bucket, Leaky Bucket, Sabit ve Kayan Pencere' },
                  slug: 'resilience/flow-control/rate-limiting',
                },
                {
                  label: '7.1.6. Adaptive Rate Limiting: Dynamic Limits',
                  translations: { tr: '7.1.6. Uyarlanabilir Rate Limiting: Dinamik Sınırlar' },
                  slug: 'resilience/flow-control/adaptive-rate-limiting',
                },
                {
                  label: '7.1.7. Retry Storms and Metastable Failures: Work Amplification and Retry Budgets',
                  translations: { tr: '7.1.7. Retry Fırtınaları ve Metastabil Hatalar: İş Amplifikasyonu ve Retry Bütçeleri' },
                  slug: 'resilience/flow-control/retry-storms-metastable-failures',
                },
              ],
            },
            {
              label: '7.2. Protection Patterns',
              translations: { tr: '7.2. Koruma Desenleri' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'resilience/protection-patterns',
                },
                {
                  label: '7.2.1. Circuit Breaker: The Closed to Open to Half-Open Cycle',
                  translations: { tr: '7.2.1. Circuit Breaker: Kapalı\'dan Açık\'a ve Yarı Açık\'a Döngüsü' },
                  slug: 'resilience/protection-patterns/circuit-breaker',
                },
                {
                  label: '7.2.2. Bulkhead Pattern: Thread Pool and Semaphore Isolation',
                  translations: { tr: '7.2.2. Bulkhead Deseni: Thread Pool ve Semafor İzolasyonu' },
                  slug: 'resilience/protection-patterns/bulkhead-pattern',
                },
                {
                  label: '7.2.3. Retry with Exponential Backoff and Jitter',
                  translations: { tr: '7.2.3. Üstel Geri Çekilme ve Jitter ile Yeniden Deneme' },
                  slug: 'resilience/protection-patterns/retry-exponential-backoff',
                },
                {
                  label: '7.2.4. Timeouts: Why They Are So Hard to Configure',
                  translations: { tr: '7.2.4. Zaman Aşımları: Yapılandırması Neden Bu Kadar Zor' },
                  slug: 'resilience/protection-patterns/timeouts',
                },
                {
                  label: '7.2.5. Fallback Strategies: Degraded Service, Cached Response',
                  translations: { tr: '7.2.5. Fallback Stratejileri: Düşürülmüş Servis, Önbelleğe Alınmış Yanıt' },
                  slug: 'resilience/protection-patterns/fallback-strategies',
                },
                {
                  label: '7.2.6. From Hystrix to Resilience4j: Library Comparison',
                  translations: { tr: '7.2.6. Hystrix\'ten Resilience4j\'ye: Kütüphane Karşılaştırması' },
                  slug: 'resilience/protection-patterns/hystrix-resilience4j',
                },
              ],
            },
            {
              label: '7.3. Failure Detection and Membership Protocols',
              translations: { tr: '7.3. Hata Tespiti ve Üyelik Protokolleri' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'resilience/failure-detection',
                },
                {
                  label: '7.3.1. Heartbeats and the Science of Timeout Configuration',
                  translations: { tr: '7.3.1. Heartbeats ve Zaman Aşımı Yapılandırmasının Bilimi' },
                  slug: 'resilience/failure-detection/heartbeats-timeouts',
                },
                {
                  label: '7.3.2. Gossip Protocols: Information Dissemination via Epidemic Algorithms',
                  translations: { tr: '7.3.2. Gossip Protokolleri: Salgın Algoritmaları ile Bilgi Yayılımı' },
                  slug: 'resilience/failure-detection/gossip-protocols',
                },
                {
                  label: '7.3.3. Phi Accrual Failure Detector: Viewing Failure as a Probability',
                  translations: { tr: '7.3.3. Phi Accrual Hata Dedektörü: Hatayı Olasılık Olarak Görmek' },
                  slug: 'resilience/failure-detection/phi-accrual-detector',
                },
                {
                  label: '7.3.4. SWIM Protocol: Scalable Membership',
                  translations: { tr: '7.3.4. SWIM Protokolü: Ölçeklenebilir Üyelik' },
                  slug: 'resilience/failure-detection/swim-protocol',
                },
                {
                  label: '7.3.5. Liveness vs. Readiness: The Difference Between Kubernetes Probes',
                  translations: { tr: '7.3.5. Liveness ve Readiness: Kubernetes Probe\'ları Arasındaki Fark' },
                  slug: 'resilience/failure-detection/liveness-vs-readiness',
                },
              ],
            },
            {
              label: '7.4. Chaos Engineering',
              translations: { tr: '7.4. Kaos Mühendisliği' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'resilience/chaos-engineering',
                },
                {
                  label: "7.4.1. Chaos Monkey: Netflix's Pioneering Approach",
                  translations: { tr: '7.4.1. Chaos Monkey: Netflix\'in Öncü Yaklaşımı' },
                  slug: 'resilience/chaos-engineering/chaos-monkey',
                },
                {
                  label: '7.4.2. Principles of Chaos Engineering: Hypothesis, Blast Radius, Observation',
                  translations: { tr: '7.4.2. Kaos Mühendisliği İlkeleri: Hipotez, Patlama Yarıçapı, Gözlem' },
                  slug: 'resilience/chaos-engineering/chaos-principles',
                },
                {
                  label: '7.4.3. Fault Injection: Simulating Latency, Exceptions, and Partitions',
                  translations: { tr: '7.4.3. Hata Enjeksiyonu: Gecikme, İstisna ve Partition Simülasyonu' },
                  slug: 'resilience/chaos-engineering/fault-injection',
                },
                {
                  label: '7.4.4. GameDay: Disaster Scenario Drills',
                  translations: { tr: '7.4.4. GameDay: Felaket Senaryosu Tatbikatları' },
                  slug: 'resilience/chaos-engineering/gameday',
                },
                {
                  label: '7.4.5. Automating Chaos: Litmus, Chaos Toolkit',
                  translations: { tr: '7.4.5. Kaos Otomasyonu: Litmus, Chaos Toolkit' },
                  slug: 'resilience/chaos-engineering/chaos-automation',
                },
              ],
            },
          ],
        },

        // ── VIII. OBSERVABILITY ───────────────────────────────────────────
        {
          label: 'VIII. Observability',
          translations: { tr: 'VIII. Gözlemlenebilirlik' },
          collapsed: true,
          items: [
            {
              label: 'Part Overview',
              translations: { tr: 'Bölüme Genel Bakış' },
              slug: 'observability',
            },
            {
              label: '8.1. The Three Pillars: Logs, Metrics, Traces',
              translations: { tr: '8.1. Üç Temel Sütun: Loglar, Metrikler, İzler' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'observability/logs-metrics-traces',
                },
                {
                  label: '8.1.1. Structured Logging: JSON Logs and Correlation IDs',
                  translations: { tr: '8.1.1. Yapılandırılmış Loglama: JSON Logları ve Korelasyon IDs' },
                  slug: 'observability/logs-metrics-traces/structured-logging',
                },
                {
                  label: '8.1.2. Log Aggregation: ELK Stack (Elasticsearch, Logstash, Kibana)',
                  translations: { tr: '8.1.2. Log Toplama: ELK Yığını (Elasticsearch, Logstash, Kibana)' },
                  slug: 'observability/logs-metrics-traces/log-aggregation-elk',
                },
                {
                  label: '8.1.3. Metrics: Counter, Gauge, Histogram, Summary',
                  translations: { tr: '8.1.3. Metrikler: Counter, Gauge, Histogram, Summary' },
                  slug: 'observability/logs-metrics-traces/metrics',
                },
                {
                  label: '8.1.4. The RED Method (Rate, Errors, Duration) vs. the USE Method',
                  translations: { tr: '8.1.4. RED Metodu (Rate, Errors, Duration) ve USE Metodu' },
                  slug: 'observability/logs-metrics-traces/red-vs-use-method',
                },
                {
                  label: '8.1.5. Distributed Tracing: Span, Trace, and Baggage Propagation',
                  translations: { tr: '8.1.5. Dağıtık İzleme: Span, Trace ve Baggage Yayılımı' },
                  slug: 'observability/logs-metrics-traces/distributed-tracing',
                },
                {
                  label: '8.1.6. Correlation: Joining Three Signals from a Single Failure Event',
                  translations: { tr: '8.1.6. Korelasyon: Tek Bir Hata Olayından Üç Sinyali Birleştirmek' },
                  slug: 'observability/logs-metrics-traces/signal-correlation',
                },
              ],
            },
            {
              label: '8.2. Tools and Standards',
              translations: { tr: '8.2. Araçlar ve Standartlar' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'observability/observability-tools',
                },
                {
                  label: '8.2.1. OpenTelemetry: The Vendor-Neutral Instrumentation Standard',
                  translations: { tr: '8.2.1. OpenTelemetry: Satıcı Tarafsız Enstrümantasyon Standardı' },
                  slug: 'observability/observability-tools/opentelemetry',
                },
                {
                  label: '8.2.2. Prometheus: Pull-Based Metric Collection and PromQL',
                  translations: { tr: '8.2.2. Prometheus: Pull Tabanlı Metrik Toplama ve PromQL' },
                  slug: 'observability/observability-tools/prometheus',
                },
                {
                  label: '8.2.3. Grafana: Dashboard Design and Alerting',
                  translations: { tr: '8.2.3. Grafana: Dashboard Tasarımı ve Uyarı Sistemi' },
                  slug: 'observability/observability-tools/grafana',
                },
                {
                  label: '8.2.4. Jaeger / Zipkin / Tempo: Distributed Tracing Backends',
                  translations: { tr: '8.2.4. Jaeger / Zipkin / Tempo: Dağıtık İzleme Backends' },
                  slug: 'observability/observability-tools/tracing-backends',
                },
                {
                  label: '8.2.5. Loki: Log Aggregation with the Prometheus Philosophy',
                  translations: { tr: '8.2.5. Loki: Prometheus Felsefesiyle Log Toplama' },
                  slug: 'observability/observability-tools/loki',
                },
                {
                  label: '8.2.6. eBPF: Kernel-Level Observability (Cilium, Pixie)',
                  translations: { tr: '8.2.6. eBPF: Kernel Düzeyinde Gözlemlenebilirlik (Cilium, Pixie)' },
                  slug: 'observability/observability-tools/ebpf-observability',
                },
              ],
            },
            {
              label: '8.3. SLOs, SLAs, and Error Budgets',
              translations: { tr: '8.3. SLOs, SLAs ve Hata Bütçeleri' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'observability/slo-sla-error-budgets',
                },
                {
                  label: '8.3.1. SLI (Service Level Indicator): What Should Be Measured?',
                  translations: { tr: '8.3.1. SLI (Servis Seviyesi Göstergesi): Ne Ölçülmeli?' },
                  slug: 'observability/slo-sla-error-budgets/sli',
                },
                {
                  label: '8.3.2. SLO (Service Level Objective): The Art of Setting Targets',
                  translations: { tr: '8.3.2. SLO (Servis Seviyesi Hedefi): Hedef Belirleme Sanatı' },
                  slug: 'observability/slo-sla-error-budgets/slo',
                },
                {
                  label: '8.3.3. SLA (Service Level Agreement): Legal Obligations',
                  translations: { tr: '8.3.3. SLA (Servis Seviyesi Anlaşması): Yasal Yükümlülükler' },
                  slug: 'observability/slo-sla-error-budgets/sla',
                },
                {
                  label: '8.3.4. Error Budget: Balancing Innovation and Reliability',
                  translations: { tr: '8.3.4. Hata Bütçesi: Yenilik ve Güvenilirlik Dengesi' },
                  slug: 'observability/slo-sla-error-budgets/error-budget',
                },
                {
                  label: '8.3.5. Toil: Measuring and Reducing Operational Burden',
                  translations: { tr: '8.3.5. Toil: Operasyonel Yükü Ölçmek ve Azaltmak' },
                  slug: 'observability/slo-sla-error-budgets/toil',
                },
                {
                  label: '8.3.6. Practical Lessons from the Google SRE Book',
                  translations: { tr: '8.3.6. Google SRE Kitabından Pratik Dersler' },
                  slug: 'observability/slo-sla-error-budgets/google-sre',
                },
              ],
            },
          ],
        },

        // ── IX. CONTAINERS ──────────────────────────────────────────────
        {
          label: 'IX. Container Orchestration & Kubernetes',
          translations: { tr: 'IX. Konteyner Orkestrasyonu & Kubernetes' },
          collapsed: true,
          items: [
            {
              label: 'Part Overview',
              translations: { tr: 'Bölüme Genel Bakış' },
              slug: 'kubernetes',
            },
            {
              label: '9.1. Kubernetes: The Operating System for Distributed Systems',
              translations: { tr: '9.1. Kubernetes: Dağıtık Sistemlerin İşletim Sistemi' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'kubernetes/fundamentals',
                },
                {
                  label: '9.1.1. Pod, Deployment, StatefulSet, DaemonSet: When to Use Which',
                  translations: { tr: '9.1.1. Pod, Deployment, StatefulSet, DaemonSet: Hangisini Ne Zaman Kullanmalı' },
                  slug: 'kubernetes/fundamentals/pod-deployment-statefulset',
                },
                {
                  label: '9.1.2. The Kubernetes Scheduler: The Mechanics of Placement Decisions',
                  translations: { tr: '9.1.2. Kubernetes Zamanlayıcı: Yerleştirme Kararlarının Mekaniği' },
                  slug: 'kubernetes/fundamentals/kubernetes-scheduler',
                },
                {
                  label: '9.1.3. etcd: The Heart of Cluster State',
                  translations: { tr: '9.1.3. etcd: Cluster Durumunun Kalbi' },
                  slug: 'kubernetes/fundamentals/etcd-cluster-state',
                },
                {
                  label: '9.1.4. Horizontal Pod Autoscaler (HPA) and KEDA: Event-Driven Scaling',
                  translations: { tr: '9.1.4. Yatay Pod Otomatik Ölçekleyici (HPA) ve KEDA: Olay Güdümlü Ölçekleme' },
                  slug: 'kubernetes/fundamentals/hpa-keda',
                },
                {
                  label: '9.1.5. Node Affinity, Taints and Tolerations: Fine-Grained Placement',
                  translations: { tr: '9.1.5. Node Affinity, Taints ve Tolerations: İnce Taneli Yerleştirme' },
                  slug: 'kubernetes/fundamentals/node-affinity-taints',
                },
                {
                  label: '9.1.6. The Operator Pattern: Extending Kubernetes',
                  translations: { tr: '9.1.6. Operator Deseni: Kubernetes\'i Genişletmek' },
                  slug: 'kubernetes/fundamentals/operator-pattern',
                },
              ],
            },
            {
              label: '9.2. Container Internals & Kubernetes in Production',
              translations: { tr: '9.2. Konteyner İç Yapısı & Üretimde Kubernetes' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'kubernetes/runtime-and-operations',
                },
                {
                  label: '9.2.1. Container Internals: Namespaces, cgroups v2, and the OCI Runtime',
                  translations: { tr: '9.2.1. Konteyner İç Yapısı: Namespaces, cgroups v2 ve OCI Runtime' },
                  slug: 'kubernetes/runtime-and-operations/container-internals',
                },
                {
                  label: '9.2.2. Resource Management: Requests, Limits, QoS, OOMKill, and CPU Throttling',
                  translations: { tr: '9.2.2. Kaynak Yönetimi: Requests, Limits, QoS, OOMKill ve CPU Throttling' },
                  slug: 'kubernetes/runtime-and-operations/resource-management-qos',
                },
                {
                  label: '9.2.3. Kubernetes Networking: Services, kube-proxy, and CNI',
                  translations: { tr: '9.2.3. Kubernetes Ağı: Services, kube-proxy ve CNI' },
                  slug: 'kubernetes/runtime-and-operations/kubernetes-networking',
                },
                {
                  label: '9.2.4. Persistent Storage: PV, PVC, and the CSI Interface',
                  translations: { tr: '9.2.4. Kalıcı Depolama: PV, PVC ve CSI Arayüzü' },
                  slug: 'kubernetes/runtime-and-operations/persistent-storage-csi',
                },
                {
                  label: '9.2.5. Graceful Termination and PodDisruptionBudgets',
                  translations: { tr: '9.2.5. Graceful Termination ve PodDisruptionBudgets' },
                  slug: 'kubernetes/runtime-and-operations/graceful-termination-pdb',
                },
                {
                  label: '9.2.6. Cluster Autoscaling: Cluster Autoscaler, Karpenter, and VPA',
                  translations: { tr: '9.2.6. Cluster Otomatik Ölçekleme: Cluster Autoscaler, Karpenter ve VPA' },
                  slug: 'kubernetes/runtime-and-operations/cluster-autoscaling',
                },
              ],
            },
          ],
        },

        // ── X. SERVICE MESH ──────────────────────────────────────────────
        {
          label: 'X. Service Mesh & Network Security',
          translations: { tr: 'X. Servis Ağı & Ağ Güvenliği' },
          collapsed: true,
          items: [
            {
              label: 'Part Overview',
              translations: { tr: 'Bölüme Genel Bakış' },
              slug: 'service-mesh',
            },
            {
              label: '10.1. Service Mesh Architecture',
              translations: { tr: '10.1. Servis Ağı Mimarisi' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'service-mesh/service-mesh-architecture',
                },
                {
                  label: '10.1.1. Why Service Mesh Exists: L4 vs. L7 Problems',
                  translations: { tr: '10.1.1. Servis Ağı Neden Var: L4 ve L7 Problemleri' },
                  slug: 'service-mesh/service-mesh-architecture/why-service-mesh',
                },
                {
                  label: '10.1.2. Envoy Proxy: The Backbone of the Data Plane',
                  translations: { tr: '10.1.2. Envoy Proxy: Veri Düzleminin Omurgası' },
                  slug: 'service-mesh/service-mesh-architecture/envoy-proxy',
                },
                {
                  label: '10.1.3. Istio: istiod and the Consolidated Control Plane',
                  translations: { tr: '10.1.3. Istio: istiod ve Birleşik Kontrol Düzlemi' },
                  slug: 'service-mesh/service-mesh-architecture/istio',
                },
                {
                  label: '10.1.4. Linkerd: A Lightweight Alternative with a Rust-Based Proxy',
                  translations: { tr: '10.1.4. Linkerd: Rust Tabanlı Proxy ile Hafif Bir Alternatif' },
                  slug: 'service-mesh/service-mesh-architecture/linkerd',
                },
                {
                  label: '10.1.5. Traffic Management: Load Balancing, Retry, and Fault Injection',
                  translations: { tr: '10.1.5. Trafik Yönetimi: Yük Dengeleme, Yeniden Deneme ve Hata Enjeksiyonu' },
                  slug: 'service-mesh/service-mesh-architecture/traffic-management',
                },
                {
                  label: '10.1.6. Observability at the Mesh Level: Automatic Telemetry',
                  translations: { tr: '10.1.6. Mesh Düzeyinde Gözlemlenebilirlik: Otomatik Telemetri' },
                  slug: 'service-mesh/service-mesh-architecture/mesh-observability',
                },
                {
                  label: '10.1.7. Sidecarless Mesh: Istio Ambient Mode and Cilium Service Mesh',
                  translations: { tr: '10.1.7. Sidecarless Mesh: Istio Ambient Modu ve Cilium Service Mesh' },
                  slug: 'service-mesh/service-mesh-architecture/sidecarless-ambient-mesh',
                },
              ],
            },
            {
              label: '10.2. Network Policies and mTLS',
              translations: { tr: '10.2. Ağ Politikaları ve mTLS' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'service-mesh/network-policies-mtls',
                },
                {
                  label: '10.2.1. Kubernetes Network Policy: Pod-Level Firewall',
                  translations: { tr: '10.2.1. Kubernetes Ağ Politikası: Pod Düzeyinde Güvenlik Duvarı' },
                  slug: 'service-mesh/network-policies-mtls/kubernetes-network-policy',
                },
                {
                  label: '10.2.2. mTLS: Mutual Authentication and Encryption',
                  translations: { tr: '10.2.2. mTLS: Karşılıklı Kimlik Doğrulama ve Şifreleme' },
                  slug: 'service-mesh/network-policies-mtls/mtls',
                },
                {
                  label: '10.2.3. Certificate Lifecycle: Cert-Manager, SPIFFE / SPIRE',
                  translations: { tr: '10.2.3. Sertifika Yaşam Döngüsü: Cert-Manager, SPIFFE / SPIRE' },
                  slug: 'service-mesh/network-policies-mtls/certificate-lifecycle',
                },
                {
                  label: '10.2.4. eBPF Networking: Kernel-Level CNI with Cilium',
                  translations: { tr: '10.2.4. eBPF Ağ: Cilium ile Kernel Düzeyinde CNI' },
                  slug: 'service-mesh/network-policies-mtls/ebpf-networking',
                },
                {
                  label: '10.2.5. Ingress vs. Gateway API: Next-Generation Traffic Management',
                  translations: { tr: '10.2.5. Ingress ve Gateway API: Yeni Nesil Trafik Yönetimi' },
                  slug: 'service-mesh/network-policies-mtls/ingress-vs-gateway-api',
                },
              ],
            },
          ],
        },

        // ── XI. SECURITY ───────────────────────────────────────────────────
        {
          label: 'XI. Security Architecture',
          translations: { tr: 'XI. Güvenlik Mimarisi' },
          collapsed: true,
          items: [
            {
              label: 'Part Overview',
              translations: { tr: 'Bölüme Genel Bakış' },
              slug: 'security',
            },
            {
              label: '11.1. Authentication and Authorization',
              translations: { tr: '11.1. Kimlik Doğrulama ve Yetkilendirme' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'security/authentication-authorization',
                },
                {
                  label: '11.1.1. OAuth 2.0 & OIDC: Identity Management in a Distributed Environment',
                  translations: { tr: '11.1.1. OAuth 2.0 & OIDC: Dağıtık Ortamda Kimlik Yönetimi' },
                  slug: 'security/authentication-authorization/oauth2-oidc',
                },
                {
                  label: '11.1.2. JWT: Signing, Verification, and Refresh Strategies',
                  translations: { tr: '11.1.2. JWT: İmzalama, Doğrulama ve Yenileme Stratejileri' },
                  slug: 'security/authentication-authorization/jwt',
                },
                {
                  label: '11.1.3. API Key vs. Service Account: Service Identity',
                  translations: { tr: '11.1.3. API Anahtarı ve Servis Hesabı: Servis Kimliği' },
                  slug: 'security/authentication-authorization/api-key-vs-service-account',
                },
                {
                  label: '11.1.4. RBAC vs. ABAC: Authorization Models',
                  translations: { tr: '11.1.4. RBAC ve ABAC: Yetkilendirme Modelleri' },
                  slug: 'security/authentication-authorization/rbac-vs-abac',
                },
                {
                  label: '11.1.5. Workload Identity: Service Identity with SPIFFE / SPIRE',
                  translations: { tr: '11.1.5. Workload Kimliği: SPIFFE / SPIRE ile Servis Kimliği' },
                  slug: 'security/authentication-authorization/workload-identity',
                },
              ],
            },
            {
              label: '11.2. Zero Trust Architecture',
              translations: { tr: '11.2. Sıfır Güven Mimarisi' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'security/zero-trust',
                },
                {
                  label: '11.2.1. Engineering the Never Trust, Always Verify Principle',
                  translations: { tr: '11.2.1. Asla Güvenme, Her Zaman Doğrula İlkesini Mühendislik Açısından Ele Almak' },
                  slug: 'security/zero-trust/never-trust-always-verify',
                },
                {
                  label: '11.2.2. Micro-Segmentation: The Least-Privilege Network Model',
                  translations: { tr: '11.2.2. Mikro-Segmentasyon: En Az Ayrıcalık Ağ Modeli' },
                  slug: 'security/zero-trust/micro-segmentation',
                },
                {
                  label: '11.2.3. Identity-Aware Proxy (IAP)',
                  translations: { tr: '11.2.3. Kimlik Farkındalıklı Proxy (IAP)' },
                  slug: 'security/zero-trust/identity-aware-proxy',
                },
                {
                  label: "11.2.4. The BeyondCorp Model: Google's Approach",
                  translations: { tr: "11.2.4. BeyondCorp Modeli: Google'ın Yaklaşımı" },
                  slug: 'security/zero-trust/beyondcorp',
                },
                {
                  label: '11.2.5. Continuous Verification: Dynamic Security Decisions',
                  translations: { tr: '11.2.5. Sürekli Doğrulama: Dinamik Güvenlik Kararları' },
                  slug: 'security/zero-trust/continuous-verification',
                },
                {
                  label: '11.2.6. Policy as Code: OPA, Gatekeeper, and Kyverno',
                  translations: { tr: '11.2.6. Kod Olarak Politika: OPA, Gatekeeper ve Kyverno' },
                  slug: 'security/zero-trust/policy-as-code',
                },
              ],
            },
            {
              label: '11.3. Secrets Management and Encryption',
              translations: { tr: '11.3. Gizli Bilgi Yönetimi ve Şifreleme' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'security/secrets-management',
                },
                {
                  label: '11.3.1. HashiCorp Vault: Dynamic Secrets, Leases, and Rotation',
                  translations: { tr: '11.3.1. HashiCorp Vault: Dinamik Sırlar, Kiralamalar ve Rotasyon' },
                  slug: 'security/secrets-management/hashicorp-vault',
                },
                {
                  label: '11.3.2. Kubernetes Secrets: Why They Are Not Enough',
                  translations: { tr: '11.3.2. Kubernetes Secrets: Neden Yeterli Değil' },
                  slug: 'security/secrets-management/kubernetes-secrets',
                },
                {
                  label: '11.3.3. Envelope Encryption: The Key Encryption Key (KEK) Model',
                  translations: { tr: '11.3.3. Zarf Şifreleme: Anahtar Şifreleme Anahtarı (KEK) Modeli' },
                  slug: 'security/secrets-management/envelope-encryption',
                },
                {
                  label: '11.3.4. Encryption in Transit vs. At Rest: Both Are Mandatory',
                  translations: { tr: '11.3.4. Aktarımda ve Beklemede Şifreleme: İkisi de Zorunlu' },
                  slug: 'security/secrets-management/encryption-in-transit-at-rest',
                },
                {
                  label: '11.3.5. Supply Chain Security: The SLSA Framework and Sigstore',
                  translations: { tr: '11.3.5. Tedarik Zinciri Güvenliği: SLSA Çerçevesi ve Sigstore' },
                  slug: 'security/secrets-management/supply-chain-security',
                },
              ],
            },
          ],
        },

        // ── XII. DEPLOYMENT ────────────────────────────────────────────────
        {
          label: 'XII. Deployment Strategies & Operations',
          translations: { tr: 'XII. Dağıtım Stratejileri & Operasyonlar' },
          collapsed: true,
          items: [
            {
              label: 'Part Overview',
              translations: { tr: 'Bölüme Genel Bakış' },
              slug: 'deployment',
            },
            {
              label: '12.1. Deployment Patterns',
              translations: { tr: '12.1. Dağıtım Desenleri' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'deployment/deployment-patterns',
                },
                {
                  label: '12.1.1. Blue/Green Deployment: Instant Cutover and Rollback',
                  translations: { tr: '12.1.1. Mavi/Yeşil Dağıtım: Anlık Geçiş ve Geri Alma' },
                  slug: 'deployment/deployment-patterns/blue-green-deployment',
                },
                {
                  label: '12.1.2. Canary Release: Progressive Traffic Shifting',
                  translations: { tr: '12.1.2. Canary Sürümü: Aşamalı Trafik Kaydırma' },
                  slug: 'deployment/deployment-patterns/canary-release',
                },
                {
                  label: '12.1.3. Rolling Update: Staged Update Strategy',
                  translations: { tr: '12.1.3. Kayan Güncelleme: Aşamalı Güncelleme Stratejisi' },
                  slug: 'deployment/deployment-patterns/rolling-update',
                },
                {
                  label: '12.1.4. Feature Flags: Decoupling Deployment from Release',
                  translations: { tr: '12.1.4. Feature Flags: Dağıtımı Sürümden Ayırmak' },
                  slug: 'deployment/deployment-patterns/feature-flags',
                },
                {
                  label: '12.1.5. A/B Testing: Experimentation via Traffic Splitting',
                  translations: { tr: '12.1.5. A/B Testi: Trafik Bölme ile Deney' },
                  slug: 'deployment/deployment-patterns/ab-testing',
                },
                {
                  label: '12.1.6. Shadow Deployment: Cloning Production Traffic',
                  translations: { tr: '12.1.6. Gölge Dağıtım: Prodüksiyon Trafiğini Klonlamak' },
                  slug: 'deployment/deployment-patterns/shadow-deployment',
                },
                {
                  label: '12.1.7. Zero-Downtime Database Migrations: The Expand/Contract Pattern',
                  translations: { tr: '12.1.7. Sıfır Kesintili Veritabanı Migrations: Expand/Contract Deseni' },
                  slug: 'deployment/deployment-patterns/zero-downtime-db-migrations',
                },
              ],
            },
            {
              label: '12.2. GitOps and CI/CD',
              translations: { tr: '12.2. GitOps ve CI/CD' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'deployment/gitops-cicd',
                },
                {
                  label: '12.2.1. GitOps Principles: Git as the Single Source of Truth',
                  translations: { tr: '12.2.1. GitOps İlkeleri: Tek Gerçek Kaynağı Olarak Git' },
                  slug: 'deployment/gitops-cicd/gitops-principles',
                },
                {
                  label: '12.2.2. ArgoCD and Flux: GitOps Operators for Kubernetes',
                  translations: { tr: '12.2.2. ArgoCD ve Flux: Kubernetes için GitOps Operatörleri' },
                  slug: 'deployment/gitops-cicd/argocd-flux',
                },
                {
                  label: '12.2.3. Progressive Delivery: Automated Canary Releases with Flagger',
                  translations: { tr: '12.2.3. Aşamalı Teslimat: Flagger ile Otomatik Canary Sürümleri' },
                  slug: 'deployment/gitops-cicd/progressive-delivery',
                },
                {
                  label: '12.2.4. Pipeline as Code: Reproducible CI/CD',
                  translations: { tr: '12.2.4. Kod Olarak Pipeline: Tekrarlanabilir CI/CD' },
                  slug: 'deployment/gitops-cicd/pipeline-as-code',
                },
                {
                  label: '12.2.5. Artifact Management: OCI Registry and Helm Charts',
                  translations: { tr: '12.2.5. Artifact Yönetimi: OCI Registry ve Helm Charts' },
                  slug: 'deployment/gitops-cicd/artifact-management',
                },
                {
                  label: '12.2.6. Environment Promotion: Dev to Staging to Production',
                  translations: { tr: '12.2.6. Ortam Yükseltme: Dev\'den Staging\'e ve Prodüksiyona' },
                  slug: 'deployment/gitops-cicd/environment-promotion',
                },
              ],
            },
            {
              label: '12.3. Platform Engineering',
              translations: { tr: '12.3. Platform Mühendisliği' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'deployment/platform-engineering',
                },
                {
                  label: '12.3.1. Internal Developer Platform (IDP): What It Is and Why It Is Needed',
                  translations: { tr: '12.3.1. İç Geliştirici Platformu (IDP): Nedir ve Neden Gereklidir' },
                  slug: 'deployment/platform-engineering/internal-developer-platform',
                },
                {
                  label: '12.3.2. Backstage: Service Catalog and Developer Portal',
                  translations: { tr: '12.3.2. Backstage: Servis Kataloğu ve Geliştirici Portalı' },
                  slug: 'deployment/platform-engineering/backstage',
                },
                {
                  label: '12.3.3. Golden Paths: Speed and Security Through Standardized Routes',
                  translations: { tr: '12.3.3. Altın Yollar: Standartlaştırılmış Rotalar ile Hız ve Güvenlik' },
                  slug: 'deployment/platform-engineering/golden-paths',
                },
                {
                  label: '12.3.4. Infrastructure as Code: Terraform and Pulumi',
                  translations: { tr: '12.3.4. Kod Olarak Altyapı: Terraform ve Pulumi' },
                  slug: 'deployment/platform-engineering/infrastructure-as-code',
                },
                {
                  label: '12.3.5. Cost Optimization: Monitoring and Optimizing Resource Utilization',
                  translations: { tr: '12.3.5. Maliyet Optimizasyonu: Kaynak Kullanımını İzlemek ve Optimize Etmek' },
                  slug: 'deployment/platform-engineering/cost-optimization',
                },
              ],
            },
            {
              label: '12.4. Testing in Distributed Systems',
              translations: { tr: '12.4. Dağıtık Sistemlerde Test' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'deployment/distributed-testing',
                },
                {
                  label: '12.4.1. Integration Testing: Service Boundaries and Contract Verification',
                  translations: { tr: '12.4.1. Entegrasyon Testi: Servis Sınırları ve Sözleşme Doğrulama' },
                  slug: 'deployment/distributed-testing/integration-testing',
                },
                {
                  label: '12.4.2. End-to-End Testing: Balancing Coverage and Flakiness',
                  translations: { tr: '12.4.2. Uçtan Uca Test: Kapsam ve Kararsızlık Dengesi' },
                  slug: 'deployment/distributed-testing/end-to-end-testing',
                },
                {
                  label: '12.4.3. Testing Event-Driven Systems: Async Flows and Eventual Consistency',
                  translations: { tr: '12.4.3. Olay Güdümlü Sistemleri Test Etmek: Asenkron Akışlar ve Nihai Tutarlılık' },
                  slug: 'deployment/distributed-testing/testing-event-driven',
                },
                {
                  label: '12.4.4. Staging Fidelity: How Realistic Is Your Test Environment?',
                  translations: { tr: '12.4.4. Staging Aslına Uygunluğu: Test Ortamın Ne Kadar Gerçekçi?' },
                  slug: 'deployment/distributed-testing/staging-fidelity',
                },
                {
                  label: '12.4.5. Test Data Management: Synthetic Data, Anonymization, and Seeding',
                  translations: { tr: '12.4.5. Test Verisi Yönetimi: Sentetik Veri, Anonimleştirme ve Tohumlama' },
                  slug: 'deployment/distributed-testing/test-data-management',
                },
                {
                  label: '12.4.6. Load and Performance Testing: k6, Locust, and Capacity Validation',
                  translations: { tr: '12.4.6. Yük ve Performans Testi: k6, Locust ve Kapasite Doğrulama' },
                  slug: 'deployment/distributed-testing/load-performance-testing',
                },
                {
                  label: '12.4.7. Correctness Testing: Jepsen and Deterministic Simulation',
                  translations: { tr: '12.4.7. Doğruluk Testi: Jepsen ve Deterministik Simülasyon' },
                  slug: 'deployment/distributed-testing/jepsen-deterministic-simulation',
                },
              ],
            },
          ],
        },

        // ── XIII. CASE STUDIES ─────────────────────────────────────────────
        {
          label: 'XIII. Case Studies',
          translations: { tr: 'XIII. Vaka Çalışmaları' },
          collapsed: true,
          items: [
            {
              label: 'Part Overview',
              translations: { tr: 'Bölüme Genel Bakış' },
              slug: 'case-studies',
            },
            {
              label: '13.1. Messaging Platform: Apache Kafka',
              translations: { tr: '13.1. Mesajlaşma Platformu: Apache Kafka' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'case-studies/apache-kafka',
                },
                {
                  label: '13.1.1. Disk-Based Persistence and Zero-Copy Optimization',
                  translations: { tr: '13.1.1. Disk Tabanlı Kalıcılık ve Sıfır Kopyalama Optimizasyonu' },
                  slug: 'case-studies/apache-kafka/disk-persistence-zero-copy',
                },
                {
                  label: '13.1.2. KRaft Mode: Eliminating the ZooKeeper Dependency',
                  translations: { tr: '13.1.2. KRaft Modu: ZooKeeper Bağımlılığını Ortadan Kaldırmak' },
                  slug: 'case-studies/apache-kafka/kraft-mode',
                },
                {
                  label: '13.1.3. Consumer Group Rebalancing: Failure Scenarios',
                  translations: { tr: '13.1.3. Consumer Group Yeniden Dengeleme: Hata Senaryoları' },
                  slug: 'case-studies/apache-kafka/consumer-group-rebalancing',
                },
                {
                  label: '13.1.4. Exactly-Once Semantics: Idempotent Producer + Transactional API',
                  translations: { tr: '13.1.4. Tam Olarak Bir Kez Semantiği: Idempotent Producer + Transactional API' },
                  slug: 'case-studies/apache-kafka/exactly-once-semantics',
                },
                {
                  label: '13.1.5. Kafka Streams vs. ksqlDB: When to Use Which',
                  translations: { tr: '13.1.5. Kafka Streams ve ksqlDB: Hangisini Ne Zaman Kullanmalı' },
                  slug: 'case-studies/apache-kafka/kafka-streams-ksqldb',
                },
              ],
            },
            {
              label: '13.2. Distributed Key-Value Store: DynamoDB / Cassandra',
              translations: { tr: '13.2. Dağıtık Anahtar-Değer Deposu: DynamoDB / Cassandra' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'case-studies/dynamodb-cassandra',
                },
                {
                  label: '13.2.1. SLA-Driven Design: The P99 Latency Guarantee',
                  translations: { tr: '13.2.1. SLA Güdümlü Tasarım: P99 Gecikme Garantisi' },
                  slug: 'case-studies/dynamodb-cassandra/sla-driven-design',
                },
                {
                  label: "13.2.2. DynamoDB's Data Model: Partition Key + Sort Key",
                  translations: { tr: "13.2.2. DynamoDB'nin Veri Modeli: Partition Key + Sort Key" },
                  slug: 'case-studies/dynamodb-cassandra/dynamodb-data-model',
                },
                {
                  label: "13.2.3. Cassandra's Consistent Hashing Ring",
                  translations: { tr: "13.2.3. Cassandra'nın Consistent Hashing Halkası" },
                  slug: 'case-studies/dynamodb-cassandra/cassandra-hashing-ring',
                },
                {
                  label: '13.2.4. Vector Clocks in the Dynamo Paper: Conflict Resolution and Its Legacy',
                  translations: { tr: '13.2.4. Dynamo Makalesinde Vektör Saatler: Çakışma Çözümü ve Mirası' },
                  slug: 'case-studies/dynamodb-cassandra/vector-clocks-conflict-resolution',
                },
                {
                  label: '13.2.5. The Hot Partition Problem: A Real-World Case Study',
                  translations: { tr: '13.2.5. Hot Partition Problemi: Gerçek Dünya Vaka Çalışması' },
                  slug: 'case-studies/dynamodb-cassandra/hot-partition-problem',
                },
              ],
            },
            {
              label: '13.3. Microservices at Scale: Netflix, Uber, Airbnb',
              translations: { tr: '13.3. Ölçekte Mikroservisler: Netflix, Uber, Airbnb' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'case-studies/microservices-at-scale',
                },
                {
                  label: '13.3.1. Netflix: The Birth of Chaos Engineering',
                  translations: { tr: '13.3.1. Netflix: Kaos Mühendisliğinin Doğuşu' },
                  slug: 'case-studies/microservices-at-scale/netflix-chaos-engineering',
                },
                {
                  label: "13.3.2. Uber's Domain-Oriented Microservice Architecture (DOMA)",
                  translations: { tr: "13.3.2. Uber'in Alan Odaklı Mikroservis Mimarisi (DOMA)" },
                  slug: 'case-studies/microservices-at-scale/uber-doma',
                },
                {
                  label: "13.3.3. Airbnb's Journey from Monolith to Microservices",
                  translations: { tr: "13.3.3. Airbnb'nin Monolitten Mikroservislere Yolculuğu" },
                  slug: 'case-studies/microservices-at-scale/airbnb-migration',
                },
                {
                  label: '13.3.4. Postmortem Culture: The Blameless Retrospective',
                  translations: { tr: '13.3.4. Postmortem Kültürü: Suçsuz Retrospektif' },
                  slug: 'case-studies/microservices-at-scale/postmortem-culture',
                },
                {
                  label: '13.3.5. Technical Debt Management: Sustainability at Scale',
                  translations: { tr: '13.3.5. Teknik Borç Yönetimi: Ölçekte Sürdürülebilirlik' },
                  slug: 'case-studies/microservices-at-scale/technical-debt-management',
                },
              ],
            },
            {
              label: '13.4. Real-Time Analytics Platforms',
              translations: { tr: '13.4. Gerçek Zamanlı Analitik Platformlar' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'case-studies/realtime-analytics',
                },
                {
                  label: '13.4.1. Stream Join Challenges: Temporal Join Strategies',
                  translations: { tr: '13.4.1. Stream Join Zorlukları: Zamansal Join Stratejileri' },
                  slug: 'case-studies/realtime-analytics/stream-join-challenges',
                },
                {
                  label: '13.4.2. Apache Pinot / Druid: OLAP at Low Latency',
                  translations: { tr: '13.4.2. Apache Pinot / Druid: Düşük Gecikmeli OLAP' },
                  slug: 'case-studies/realtime-analytics/apache-pinot-druid',
                },
                {
                  label: '13.4.3. From Lambda to Data Mesh: The Evolution of Data Architecture',
                  translations: { tr: '13.4.3. Lambda\'dan Data Mesh\'e: Veri Mimarisinin Evrimi' },
                  slug: 'case-studies/realtime-analytics/lambda-to-data-mesh',
                },
                {
                  label: '13.4.4. Data Mesh Principles: Domain-Oriented Data Ownership',
                  translations: { tr: '13.4.4. Data Mesh İlkeleri: Alan Odaklı Veri Sahipliği' },
                  slug: 'case-studies/realtime-analytics/data-mesh-principles',
                },
                {
                  label: '13.4.5. ML Serving at Scale: Feature Store and Model Registry',
                  translations: { tr: '13.4.5. Ölçekte ML Sunumu: Feature Store ve Model Registry' },
                  slug: 'case-studies/realtime-analytics/ml-serving-at-scale',
                },
              ],
            },
            {
              label: '13.5. Distributed SQL: Spanner & CockroachDB',
              translations: { tr: '13.5. Dağıtık SQL: Spanner & CockroachDB' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'case-studies/distributed-sql',
                },
                {
                  label: '13.5.1. Spanner: TrueTime, Paxos Groups, and External Consistency',
                  translations: { tr: '13.5.1. Spanner: TrueTime, Paxos Grupları ve External Consistency' },
                  slug: 'case-studies/distributed-sql/spanner-architecture',
                },
                {
                  label: '13.5.2. CockroachDB: Raft, HLC, and Parallel Commits',
                  translations: { tr: '13.5.2. CockroachDB: Raft, HLC ve Parallel Commits' },
                  slug: 'case-studies/distributed-sql/cockroachdb-raft-hlc',
                },
                {
                  label: '13.5.3. Distributed Transactions in Practice: 2PC over Consensus',
                  translations: { tr: '13.5.3. Pratikte Dağıtık İşlemler: Consensus Üzerinde 2PC' },
                  slug: 'case-studies/distributed-sql/transactions-2pc-over-consensus',
                },
                {
                  label: '13.5.4. Follower Reads and Bounded Staleness',
                  translations: { tr: '13.5.4. Follower Reads ve Bounded Staleness' },
                  slug: 'case-studies/distributed-sql/follower-reads-bounded-staleness',
                },
              ],
            },
            {
              label: '13.6. Anatomy of Famous Outages',
              translations: { tr: '13.6. Ünlü Kesintilerin Anatomisi' },
              collapsed: true,
              items: [
                {
                  label: 'Chapter Overview',
                  translations: { tr: 'Konuya Genel Bakış' },
                  slug: 'case-studies/famous-outages',
                },
                {
                  label: '13.6.1. GitHub 2018: 43 Seconds of Partition, 24 Hours of Recovery',
                  translations: { tr: '13.6.1. GitHub 2018: 43 Saniyelik Partition, 24 Saatlik Kurtarma' },
                  slug: 'case-studies/famous-outages/github-2018-split-brain',
                },
                {
                  label: '13.6.2. Roblox 2021: The 73-Hour Consul Outage',
                  translations: { tr: '13.6.2. Roblox 2021: 73 Saatlik Consul Kesintisi' },
                  slug: 'case-studies/famous-outages/roblox-2021-consul',
                },
                {
                  label: '13.6.3. Cloudflare 2019: The Regex That Stalled the Edge',
                  translations: { tr: '13.6.3. Cloudflare 2019: Edge Durduran Regex' },
                  slug: 'case-studies/famous-outages/cloudflare-2019-regex',
                },
                {
                  label: '13.6.4. Meta 2021: BGP, DNS, and Control Plane Centralization',
                  translations: { tr: '13.6.4. Meta 2021: BGP, DNS ve Kontrol Düzlemi Merkezileşmesi' },
                  slug: 'case-studies/famous-outages/meta-2021-bgp-dns',
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
