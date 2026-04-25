---
title: "II. Communication Protocols & API Design"
sidebar:
  order: 2
---

Once a monolithic application is divided into distributed components, those components must communicate over a network. This part explores how services exchange data, the fundamental divide between synchronous and asynchronous communication, and the infrastructure required to route, contract, and balance traffic efficiently at scale.

### Chapters

* **[2.1. Synchronous Communication Protocols](/distributed-systems/communication/synchronous-protocols/)**: Explores strict request-response models, comparing REST, gRPC, GraphQL, and real-time WebSockets.
* **[2.2. Asynchronous Messaging Fundamentals](/distributed-systems/communication/async-messaging/)**: Covers event-driven architectures, delivery semantics, and deep dives into message brokers and streaming platforms like Kafka and RabbitMQ.
* **[2.3. API Gateway and Service Contracts](/distributed-systems/communication/api-gateway/)**: Examines system entry points, the Backend for Frontend (BFF) pattern, consumer-driven contract testing, and gateway-level throttling.
* **[2.4. Load Balancing](/distributed-systems/communication/load-balancing/)**: Details how to distribute network traffic, comparing L4 vs. L7 load balancing, routing algorithms, and global server load balancing (GSLB).