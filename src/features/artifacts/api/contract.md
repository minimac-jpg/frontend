# Artifact Manager API Contract

When a real backend is available, only `features/artifacts/api/queries.ts` needs to change (swap mock resolution for `fetch` or your HTTP client of choice). No component or route code should need to change.

## Endpoints

### Search Components

```
GET /api/v1/components/search?q=&format=&repository=&modifiedSince=&groupId=&artifactId=&version=&classifier=&extension=&checksum=
```

**Query parameters:**

| Param          | Type     | Description                          |
| -------------- | -------- | ------------------------------------ |
| `q`            | string   | Free-text keyword search             |
| `format`       | string[] | Repository format filter (repeatable)|
| `repository`   | string   | Repository name filter               |
| `modifiedSince`| string   | ISO-8601 date filter                 |
| `groupId`      | string   | Maven groupId / npm scope / etc.     |
| `artifactId`   | string   | Maven artifactId / package name      |
| `version`      | string   | Exact version filter                 |
| `classifier`   | string   | Maven classifier                     |
| `extension`    | string   | File extension filter                |
| `checksum`     | string   | SHA-256 / SHA-1 / MD5 hash search    |

**Response:** `200 OK`
```json
{
  "results": [ { ... Component ... } ],
  "total": 42
}
```

### Get Component Detail

```
GET /api/v1/components/:componentId
```

**Response:** `200 OK`
```json
{
  "id": "maven:com.example:my-lib:1.0.0",
  "group": "com.example",
  "name": "my-lib",
  "version": "1.0.0",
  "format": "maven",
  "repository": "maven-releases",
  "extension": "jar",
  "sizeBytes": 1048576,
  "modifiedAt": "2026-06-01T12:00:00Z",
  "createdAt": "2026-01-15T08:30:00Z",
  "checksums": {
    "sha256": "abc...",
    "sha1": "def...",
    "md5": "ghi..."
  },
  "assets": [ { "name": "my-lib-1.0.0.jar", "sizeBytes": 1024, ... } ],
  "dependents": [ { "name": "other-lib", "version": "2.0.0" } ],
  "description": "A sample library"
}
```

### Delete Component

```
DELETE /api/v1/components/:componentId
```

**Response:** `204 No Content`

## Migration guide

1. Replace the `queryFn` body in each hook in `queries.ts` with the appropriate `fetch` call.
2. Keep the same input/output type contracts — the hooks are already typed.
3. Remove the `fakeDelay` helper and `mock-data.ts` import.
4. No route or component changes needed.
