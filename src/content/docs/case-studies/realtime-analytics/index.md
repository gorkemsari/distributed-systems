---
title: "13.4. Real-Time Analytics Platforms"
sidebar:
  order: 4
---

Modern businesses rely on immediate insights drawn from massive streams of user and operational data. This chapter explores the evolution of data processing architectures, moving from centralized data lakes to decentralized meshes, and the databases that power real-time dashboards and ML pipelines.

### Topics Covered

* **[13.4.1. Stream Join Challenges: Temporal Join Strategies](/distributed-systems/case-studies/realtime-analytics/stream-join-challenges/)**: Details the complexities of combining multiple real-time data streams when events arrive out of order or with network delays.
* **[13.4.2. Apache Pinot / Druid: OLAP at Low Latency](/distributed-systems/case-studies/realtime-analytics/apache-pinot-druid/)**: Explores specialized real-time analytics databases designed to execute complex aggregations over massive datasets in milliseconds.
* **[13.4.3. From Lambda to Data Mesh: The Evolution of Data Architecture](/distributed-systems/case-studies/realtime-analytics/lambda-to-data-mesh/)**: Traces the architectural shift from unified batch/speed layers toward a decentralized, product-thinking approach to data.
* **[13.4.4. Data Mesh Principles: Domain-Oriented Data Ownership](/distributed-systems/case-studies/realtime-analytics/data-mesh-principles/)**: Explains how treating data as a product and distributing ownership to domain teams solves the bottleneck of centralized data engineering.
* **[13.4.5. ML Serving at Scale: Feature Store and Model Registry](/distributed-systems/case-studies/realtime-analytics/ml-serving-at-scale/)**: Analyzes the infrastructure required to operationalize machine learning, managing features and deploying models reliably into production.