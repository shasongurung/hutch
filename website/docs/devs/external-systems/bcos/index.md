import { HutchDevRquestDetails } from "@site/src/components/admonitions/hutch-dev-team";
import DocCardList from "@theme/DocCardList";

# BC|OS

Hutch uses BC|OS as an [Activity Source](/docs/devs/deprecated/detailed-overview/activity-sources#bcos-rquest)

The primary source of documentation for the BC|OS REST API v2 should be the service's [OpenAPI (Swagger) spec](bcos/open-api).

Provided here is some supporting documentation to supplement the BC|OS OpenAPI spec:

- [Endpoint schema details](bcos/endpoint-schema) not currently provided in the OpenAPI spec
  - details of both request and response payloads for endpoints used by Hutch
- Specific guidance for [usage in Hutch](bcos/hutch-usage)
- Hutch relevant details on mapping from BC|OS Query rules to OMOP tables

:::info
Hutch 1.x+ uses the newer **Tasks** API

The original proof-of-concept used the now deprecated **Connector** API from the REST API v1.
:::

<HutchDevRquestDetails />

## Section index

<DocCardList />
