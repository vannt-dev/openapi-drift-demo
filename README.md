# openapi-drift demo

[![OpenAPI drift](https://github.com/vannt-dev/openapi-drift-demo/actions/workflows/openapi-drift.yml/badge.svg)](https://github.com/vannt-dev/openapi-drift-demo/actions/workflows/openapi-drift.yml)

A small NestJS source tree and an `openapi.yaml` that drifts from it **in five places on purpose**, to show what [openapi-drift](https://github.com/vannt-dev/openapi-drift) reports and how its GitHub Action is wired.

| # | Drift | Direction |
| --- | --- | --- |
| 1 | `DELETE /api/users/{id}` | in the code, not in the document |
| 2 | `GET /api/health` | in the code, not in the document |
| 3 | `GET /api/users/{id}/avatar` | in the document, not in the code |
| 4 | `POST /api/orders` | in the document, not in the code |
| 5 | `PATCH /api/orders/{orderId}` | in the document, not in the code |

`GET /orders/{id}/items` versus the code's `:orderId` is the same route with another parameter name: reported as a note, not a drift.

The code sets a global prefix (`app.setGlobalPrefix('api')` in `src/main.ts`), which the source does not show on the controllers, so the workflow passes `prefix: /api`; the document's own base path comes from `servers[0].url`.

## Run it yourself

```bash
npx openapi-drift check --spec openapi.yaml --source src --prefix /api
```

Exit code 1 with the seven lines above; `--format markdown` gives the table the [workflow](.github/workflows/openapi-drift.yml) puts in its job summary. The workflow uses `fail-on: none` and then asserts that exactly five drifts were found, so it is green when the tool works; a real project uses `fail-on: any` and lets the job fail.

There is no `package.json`: nothing is installed or built. The routes are read from the source text.
