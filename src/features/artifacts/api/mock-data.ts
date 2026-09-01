import type { Component, RecentSearch, SearchFilters, UploadArtifactRequest } from "./types";

export const mockComponents: Component[] = [
  {
    id: "maven:com.example:my-lib:1.0.0",
    group: "com.example",
    name: "my-lib",
    version: "1.0.0",
    format: "maven",
    repository: "maven-releases",
    extension: "jar",
    sizeBytes: 1_048_576,
    modifiedAt: "2026-06-01T12:00:00Z",
    createdAt: "2026-01-15T08:30:00Z",
    checksums: {
      sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      sha1: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
      md5: "d41d8cd98f00b204e9800998ecf8427e",
    },
    assets: [
      {
        name: "my-lib-1.0.0.jar",
        sizeBytes: 1_048_576,
        contentType: "application/java-archive",
        downloadUrl: "/api/v1/components/maven:com.example:my-lib:1.0.0/assets/my-lib-1.0.0.jar",
      },
      {
        name: "my-lib-1.0.0.pom",
        sizeBytes: 4_096,
        contentType: "application/xml",
        downloadUrl: "/api/v1/components/maven:com.example:my-lib:1.0.0/assets/my-lib-1.0.0.pom",
      },
      {
        name: "my-lib-1.0.0-sources.jar",
        sizeBytes: 524_288,
        contentType: "application/java-archive",
        downloadUrl:
          "/api/v1/components/maven:com.example:my-lib:1.0.0/assets/my-lib-1.0.0-sources.jar",
      },
      {
        name: "my-lib-1.0.0-javadoc.jar",
        sizeBytes: 786_432,
        contentType: "application/java-archive",
        downloadUrl:
          "/api/v1/components/maven:com.example:my-lib:1.0.0/assets/my-lib-1.0.0-javadoc.jar",
      },
    ],
    dependents: [
      { name: "com.other:consumer-app", version: "2.1.0" },
      { name: "com.internal:service-a", version: "1.5.0" },
    ],
    description: "Core library with utility functions and common data structures.",
  },
  {
    id: "maven:com.example:my-lib:1.1.0",
    group: "com.example",
    name: "my-lib",
    version: "1.1.0",
    format: "maven",
    repository: "maven-releases",
    extension: "jar",
    sizeBytes: 1_204_224,
    modifiedAt: "2026-06-15T14:00:00Z",
    createdAt: "2026-03-20T10:00:00Z",
    checksums: {
      sha256: "a7ffc6f8bf1ed76651c14756a061d662f580ff4de43b49fa82d80a4b80f8434a",
      sha1: "2fd4e1c67a2d28fced849ee1bb76e7391b93eb12",
      md5: "900150983cd24fb0d6963f7d28e17f72",
    },
    assets: [
      {
        name: "my-lib-1.1.0.jar",
        sizeBytes: 1_204_224,
        contentType: "application/java-archive",
        downloadUrl: "/api/v1/components/maven:com.example:my-lib:1.1.0/assets/my-lib-1.1.0.jar",
      },
      {
        name: "my-lib-1.1.0.pom",
        sizeBytes: 4_352,
        contentType: "application/xml",
        downloadUrl: "/api/v1/components/maven:com.example:my-lib:1.1.0/assets/my-lib-1.1.0.pom",
      },
    ],
    dependents: [
      { name: "com.other:consumer-app", version: "2.2.0" },
      { name: "com.internal:service-a", version: "1.6.0" },
      { name: "com.internal:service-b", version: "3.0.0" },
    ],
    description: null,
  },
  {
    id: "npm:@scope/design-system:4.2.0",
    group: "@scope",
    name: "design-system",
    version: "4.2.0",
    format: "npm",
    repository: "npm-private",
    extension: "tgz",
    sizeBytes: 340_787,
    modifiedAt: "2026-05-28T09:15:00Z",
    createdAt: "2026-02-10T16:45:00Z",
    checksums: {
      sha256: "6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b",
      sha1: "6b86b273ff34fce19d6b804eff5a3f5747ada4ea",
      md5: "5d41402abc4b2a76b9719d911017c592",
    },
    assets: [
      {
        name: "design-system-4.2.0.tgz",
        sizeBytes: 340_787,
        contentType: "application/gzip",
        downloadUrl:
          "/api/v1/components/npm:@scope/design-system:4.2.0/assets/design-system-4.2.0.tgz",
      },
    ],
    dependents: [
      { name: "@scope/web-app", version: "1.0.0" },
      { name: "@scope/mobile-app", version: "2.3.0" },
    ],
    description: "Shared UI component library with theming support.",
  },
  {
    id: "npm:@scope/design-system:4.1.0",
    group: "@scope",
    name: "design-system",
    version: "4.1.0",
    format: "npm",
    repository: "npm-private",
    extension: "tgz",
    sizeBytes: 325_058,
    modifiedAt: "2026-04-10T11:30:00Z",
    createdAt: "2026-01-05T09:00:00Z",
    checksums: {
      sha256: "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f0da3c7c1a1c6d6c7c7",
      sha1: "d4735e3a265e16eee03f59718b9b5d03019c07d8",
      md5: "e2fc714c4727ee9395f324cd2e7f331f",
    },
    assets: [
      {
        name: "design-system-4.1.0.tgz",
        sizeBytes: 325_058,
        contentType: "application/gzip",
        downloadUrl:
          "/api/v1/components/npm:@scope/design-system:4.1.0/assets/design-system-4.1.0.tgz",
      },
    ],
    dependents: [{ name: "@scope/web-app", version: "0.9.0" }],
    description: null,
  },
  {
    id: "docker:nginx:1.25.3",
    group: "_",
    name: "nginx",
    version: "1.25.3",
    format: "docker",
    repository: "docker-registry",
    extension: "image",
    sizeBytes: 187_904_816,
    modifiedAt: "2026-06-10T08:00:00Z",
    createdAt: "2026-04-01T07:30:00Z",
    checksums: {
      sha256: "4e1243bd22c66e76c2d9e2b0b1b0b1b0b1b0b1b0b1b0b1b0b1b0b1b0b1b0b1b0",
      sha1: "4e1243bd22c66e76c2d9e2b0b1b0b1b0b1b0b1b",
      md5: "e99a18c428cb38d5f260853678922e03",
    },
    assets: [
      {
        name: "nginx-1.25.3-manifest.json",
        sizeBytes: 2_048,
        contentType: "application/json",
        downloadUrl: "/api/v1/components/docker:nginx:1.25.3/assets/manifest.json",
      },
      {
        name: "nginx-1.25.3-layer-amd64.tar.gz",
        sizeBytes: 95_000_000,
        contentType: "application/gzip",
        downloadUrl: "/api/v1/components/docker:nginx:1.25.3/assets/layer-amd64.tar.gz",
      },
    ],
    dependents: [],
    description: "Official Nginx container image.",
  },
  {
    id: "pypi:requests:2.32.0",
    group: "_",
    name: "requests",
    version: "2.32.0",
    format: "pypi",
    repository: "pypi-proxy",
    extension: "whl",
    sizeBytes: 131_072,
    modifiedAt: "2026-05-15T16:20:00Z",
    createdAt: "2026-03-01T12:00:00Z",
    checksums: {
      sha256: "4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b",
      sha1: "4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b",
      md5: "c4ca4238a0b923820dcc509a6f75849b",
    },
    assets: [
      {
        name: "requests-2.32.0-py3-none-any.whl",
        sizeBytes: 131_072,
        contentType: "application/zip",
        downloadUrl:
          "/api/v1/components/pypi:requests:2.32.0/assets/requests-2.32.0-py3-none-any.whl",
      },
      {
        name: "requests-2.32.0.tar.gz",
        sizeBytes: 262_144,
        contentType: "application/gzip",
        downloadUrl: "/api/v1/components/pypi:requests:2.32.0/assets/requests-2.32.0.tar.gz",
      },
    ],
    dependents: [
      { name: "my-data-tool", version: "0.5.0" },
      { name: "web-scraper", version: "1.2.0" },
    ],
    description: "Python HTTP library with a human-friendly API.",
  },
  {
    id: "nuget:Newtonsoft.Json:13.0.3",
    group: "Newtonsoft",
    name: "Json",
    version: "13.0.3",
    format: "nuget",
    repository: "nuget-proxy",
    extension: "nupkg",
    sizeBytes: 688_128,
    modifiedAt: "2026-04-20T10:45:00Z",
    createdAt: "2025-11-10T14:00:00Z",
    checksums: {
      sha256: "5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c",
      sha1: "5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c",
      md5: "e1671797c52e15f763380b45e841ec32",
    },
    assets: [
      {
        name: "Newtonsoft.Json.13.0.3.nupkg",
        sizeBytes: 688_128,
        contentType: "application/zip",
        downloadUrl:
          "/api/v1/components/nuget:Newtonsoft.Json:13.0.3/assets/Newtonsoft.Json.13.0.3.nupkg",
      },
    ],
    dependents: [
      { name: "MyApp.Api", version: "3.0.0" },
      { name: "MyApp.Core", version: "1.2.0" },
      { name: "Shared.Library", version: "0.8.0" },
    ],
    description: "Json.NET is a popular high-performance JSON framework for .NET.",
  },
  {
    id: "maven:com.example:empty-artifact:0.0.1",
    group: "com.example",
    name: "empty-artifact",
    version: "0.0.1",
    format: "maven",
    repository: "maven-snapshots",
    extension: "jar",
    sizeBytes: 0,
    modifiedAt: "2026-06-20T18:00:00Z",
    createdAt: "2026-06-20T18:00:00Z",
    checksums: {
      sha256: "6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d",
      sha1: "6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d6d",
      md5: "fae0b27c451c728867a567e89c5bb48f",
    },
    assets: [],
    dependents: [],
    description: "An empty artifact with zero assets (edge case for testing).",
  },
];

export const mockRecentSearches: RecentSearch[] = [
  {
    query: "my-lib",
    filters: { query: "my-lib", formats: ["maven"] },
    timestamp: "2026-06-25T14:30:00Z",
  },
  {
    query: "",
    filters: { formats: ["npm"] },
    timestamp: "2026-06-25T10:00:00Z",
  },
  {
    query: "nginx",
    filters: { query: "nginx" },
    timestamp: "2026-06-24T16:45:00Z",
  },
  {
    query: "requests",
    filters: { query: "requests", formats: ["pypi"] },
    timestamp: "2026-06-23T09:20:00Z",
  },
];

/** Simulates the search logic against the mock dataset (or a provided source list). */
export function searchComponents(
  filters: SearchFilters,
  source: Component[] = mockComponents,
): { results: Component[]; total: number } {
  let results = [...source];

  if (filters.query) {
    const q = filters.query.toLowerCase();
    results = results.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.group.toLowerCase().includes(q) ||
        c.id.toLowerCase().includes(q) ||
        c.description?.toLowerCase().includes(q),
    );
  }

  if (filters.formats && filters.formats.length > 0) {
    const formats = filters.formats;
    results = results.filter((c) => formats.includes(c.format));
  }

  if (filters.repository) {
    const repo = filters.repository.toLowerCase();
    results = results.filter((c) => c.repository.toLowerCase().includes(repo));
  }

  if (filters.groupId) {
    const group = filters.groupId.toLowerCase();
    results = results.filter((c) => c.group.toLowerCase().includes(group));
  }

  if (filters.artifactId) {
    const id = filters.artifactId.toLowerCase();
    results = results.filter((c) => c.name.toLowerCase().includes(id));
  }

  if (filters.version) {
    const ver = filters.version.toLowerCase();
    results = results.filter((c) => c.version.toLowerCase().includes(ver));
  }

  if (filters.extension) {
    const ext = filters.extension.toLowerCase();
    results = results.filter((c) => c.extension.toLowerCase().includes(ext));
  }

  if (filters.checksum) {
    const cs = filters.checksum.toLowerCase();
    results = results.filter(
      (c) =>
        c.checksums.sha256.toLowerCase().includes(cs) ||
        c.checksums.sha1.toLowerCase().includes(cs) ||
        c.checksums.md5.toLowerCase().includes(cs),
    );
  }

  if (filters.modifiedSince) {
    const since = new Date(filters.modifiedSince).getTime();
    results = results.filter((c) => new Date(c.modifiedAt).getTime() >= since);
  }

  return { results, total: results.length };
}

export function getComponentById(componentId: string): Component | undefined {
  return mockComponents.find((c) => c.id === componentId);
}

export function addMockComponent(req: UploadArtifactRequest): Component {
  const id = `${req.format}:${req.group}:${req.name}:${req.version}`;
  const now = new Date().toISOString();
  const component: Component = {
    id,
    group: req.group,
    name: req.name,
    version: req.version,
    format: req.format,
    repository: req.repository,
    extension: req.extension,
    sizeBytes: 0,
    modifiedAt: now,
    createdAt: now,
    checksums: {
      sha256: "0000000000000000000000000000000000000000000000000000000000000000",
      sha1: "0000000000000000000000000000000000000000",
      md5: "00000000000000000000000000000000",
    },
    assets: [],
    dependents: [],
    description: req.description ?? null,
  };
  mockComponents.unshift(component);
  return component;
}
