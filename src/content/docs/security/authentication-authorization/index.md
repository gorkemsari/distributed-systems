---
title: "11.1. Authentication and Authorization"
sidebar:
  order: 1
---

In a distributed environment, a single user request might trigger actions across dozens of downstream services. This chapter explores how to securely propagate user identity, issue and validate tokens, and distinguish between human users and machine-to-machine service identities.

### Topics Covered

* **[11.1.1. OAuth 2.0 & OIDC: Identity Management in a Distributed Environment](/distributed-systems/security/authentication-authorization/oauth2-oidc/)**: Explains the industry-standard protocols for delegated access and federated identity verification.
* **[11.1.2. JWT: Signing, Verification, and Refresh Strategies](/distributed-systems/security/authentication-authorization/jwt/)**: Details the mechanics of JSON Web Tokens, how stateless authentication works, and the critical security challenges of token revocation.
* **[11.1.3. API Key vs. Service Account: Service Identity](/distributed-systems/security/authentication-authorization/api-key-vs-service-account/)**: Compares static credentials against dynamic service identities for machine-to-machine communication.
* **[11.1.4. RBAC vs. ABAC: Authorization Models](/distributed-systems/security/authentication-authorization/rbac-vs-abac/)**: Analyzes the shift from static Role-Based Access Control to dynamic, context-aware Attribute-Based Access Control.
* **[11.1.5. Workload Identity: Service Identity with SPIFFE / SPIRE](/distributed-systems/security/authentication-authorization/workload-identity/)**: Explores how to securely assign short-lived, cryptographically verifiable identities to software workloads running anywhere.