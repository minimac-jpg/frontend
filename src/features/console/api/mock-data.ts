import type { Build, ConsoleStats, Deployment, Event, PersistentVolumeClaim, Pod, Project, Route, Service } from "./types";

function uid(n: number): string {
  return `uid-${n.toString().padStart(8, "0")}`;
}

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

// ── Projects ──
const projectsData: Project[] = [
  { metadata: { name: "default", namespace: "", uid: uid(1), resourceVersion: "1", creationTimestamp: "2025-01-15T08:00:00Z", labels: {}, annotations: {} }, status: { phase: "Active", displayName: "Default" } },
  { metadata: { name: "production", namespace: "", uid: uid(2), resourceVersion: "2", creationTimestamp: "2025-02-01T10:00:00Z", labels: { "env": "prod" }, annotations: {} }, status: { phase: "Active", displayName: "Production" } },
  { metadata: { name: "staging", namespace: "", uid: uid(3), resourceVersion: "3", creationTimestamp: "2025-02-15T12:00:00Z", labels: { "env": "staging" }, annotations: {} }, status: { phase: "Active", displayName: "Staging" } },
  { metadata: { name: "observability", namespace: "", uid: uid(4), resourceVersion: "4", creationTimestamp: "2025-03-01T09:00:00Z", labels: {}, annotations: {} }, status: { phase: "Active" } },
];

// ── Pods ──
const podsData: Pod[] = [
  { metadata: { name: "web-ui-7d8f9c", namespace: "default", uid: uid(10), resourceVersion: "10", creationTimestamp: "2026-06-20T14:30:00Z", labels: { app: "web-ui", version: "v2" }, annotations: { "kubectl.kubernetes.io/last-applied-configuration": "v2 rollout" } }, spec: { nodeName: "node-1", containers: [{ name: "web-ui", image: "harlie/web-ui:v2", ports: [{ containerPort: 3000 }] }], restartPolicy: "Always" }, status: { phase: "Running", podIP: "10.0.1.10", hostIP: "192.168.1.10", startTime: "2026-06-20T14:30:00Z", conditions: [{ type: "Ready", status: "True", lastTransitionTime: "2026-06-20T14:32:00Z" }, { type: "Initialized", status: "True", lastTransitionTime: "2026-06-20T14:30:00Z" }], containerStatuses: [{ name: "web-ui", image: "harlie/web-ui:v2", ready: true, restartCount: 0, state: { running: { startedAt: "2026-06-20T14:30:00Z" } } }] } },
  { metadata: { name: "api-gateway-5a2b1c", namespace: "default", uid: uid(11), resourceVersion: "11", creationTimestamp: "2026-06-19T10:00:00Z", labels: { app: "api-gateway" }, annotations: {} }, spec: { nodeName: "node-2", containers: [{ name: "gateway", image: "harlie/gateway:v1", ports: [{ containerPort: 8080 }] }], restartPolicy: "Always" }, status: { phase: "Running", podIP: "10.0.1.11", hostIP: "192.168.1.11", startTime: "2026-06-19T10:00:00Z", conditions: [{ type: "Ready", status: "True", lastTransitionTime: "2026-06-19T10:02:00Z" }], containerStatuses: [{ name: "gateway", image: "harlie/gateway:v1", ready: true, restartCount: 1, state: { running: { startedAt: "2026-06-19T10:00:00Z" } } }] } },
  { metadata: { name: "worker-pool-3f4g5h", namespace: "default", uid: uid(12), resourceVersion: "12", creationTimestamp: "2026-06-18T08:00:00Z", labels: { app: "worker-pool" }, annotations: {} }, spec: { nodeName: "node-1", containers: [{ name: "worker", image: "harlie/worker:v2", ports: [] }], restartPolicy: "Always" }, status: { phase: "Running", podIP: "10.0.1.12", hostIP: "192.168.1.10", startTime: "2026-06-18T08:00:00Z", conditions: [{ type: "Ready", status: "True", lastTransitionTime: "2026-06-18T08:02:00Z" }], containerStatuses: [{ name: "worker", image: "harlie/worker:v2", ready: true, restartCount: 2, state: { running: { startedAt: "2026-06-18T08:00:00Z" } } }] } },
  { metadata: { name: "db-migration-9j0k1l", namespace: "staging", uid: uid(13), resourceVersion: "13", creationTimestamp: "2026-06-27T06:00:00Z", labels: { job: "db-migration" }, annotations: {} }, spec: { nodeName: "node-3", containers: [{ name: "migrate", image: "harlie/migration:v1" }], restartPolicy: "Never" }, status: { phase: "Running", podIP: "10.0.3.10", hostIP: "192.168.1.12", startTime: "2026-06-27T06:00:00Z", conditions: [{ type: "Ready", status: "False", lastTransitionTime: "2026-06-27T06:00:00Z", reason: "ContainersNotReady" }], containerStatuses: [{ name: "migrate", image: "harlie/migration:v1", ready: false, restartCount: 0, state: { waiting: { reason: "PodInitializing" } } }] } },
  { metadata: { name: "redis-cache-2m3n4o", namespace: "production", uid: uid(14), resourceVersion: "14", creationTimestamp: "2026-06-15T12:00:00Z", labels: { app: "redis", tier: "cache" }, annotations: {} }, spec: { nodeName: "node-4", containers: [{ name: "redis", image: "redis:7-alpine", ports: [{ containerPort: 6379 }] }], restartPolicy: "Always" }, status: { phase: "Running", podIP: "10.0.4.10", hostIP: "192.168.1.13", startTime: "2026-06-15T12:00:00Z", conditions: [{ type: "Ready", status: "True", lastTransitionTime: "2026-06-15T12:01:00Z" }], containerStatuses: [{ name: "redis", image: "redis:7-alpine", ready: true, restartCount: 0, state: { running: { startedAt: "2026-06-15T12:00:00Z" } } }] } },
  { metadata: { name: "broken-app-5p6q7r", namespace: "default", uid: uid(15), resourceVersion: "15", creationTimestamp: "2026-06-25T16:00:00Z", labels: { app: "broken-app" }, annotations: {} }, spec: { nodeName: "node-1", containers: [{ name: "app", image: "harlie/broken:v1", ports: [{ containerPort: 5000 }] }], restartPolicy: "Always" }, status: { phase: "CrashLoopBackOff", podIP: "10.0.1.13", hostIP: "192.168.1.10", startTime: "2026-06-25T16:00:00Z", conditions: [{ type: "Ready", status: "False", lastTransitionTime: "2026-06-26T08:00:00Z", reason: "CrashLoopBackOff" }], containerStatuses: [{ name: "app", image: "harlie/broken:v1", ready: false, restartCount: 14, state: { waiting: { reason: "CrashLoopBackOff", message: "Back-off 5m0s restarting" } } }] } },
  { metadata: { name: "fluentd-6s7t8u", namespace: "observability", uid: uid(16), resourceVersion: "16", creationTimestamp: "2026-06-01T00:00:00Z", labels: { app: "fluentd" }, annotations: {} }, spec: { nodeName: "node-5", containers: [{ name: "fluentd", image: "fluent/fluentd:v1.16" }], restartPolicy: "Always" }, status: { phase: "Pending", podIP: "", hostIP: "", startTime: "", conditions: [{ type: "PodScheduled", status: "False", lastTransitionTime: "2026-06-27T06:00:00Z", reason: "Unschedulable" }], containerStatuses: [] } },
];

// ── Deployments ──
const deploymentsData: Deployment[] = [
  { metadata: { name: "web-ui", namespace: "default", uid: uid(20), resourceVersion: "20", creationTimestamp: "2026-01-10T08:00:00Z", labels: { app: "web-ui" }, annotations: {} }, spec: { replicas: 3, selector: { matchLabels: { app: "web-ui" } }, template: { metadata: { labels: { app: "web-ui" } }, spec: { containers: [{ name: "web-ui", image: "harlie/web-ui:v2" }] } } }, status: { phase: "Available", replicas: 3, readyReplicas: 3, availableReplicas: 3, updatedReplicas: 3, conditions: [{ type: "Available", status: "True", reason: "MinimumReplicasAvailable", message: "Deployment has minimum availability.", lastTransitionTime: "2026-06-20T14:32:00Z" }] } },
  { metadata: { name: "api-gateway", namespace: "default", uid: uid(21), resourceVersion: "21", creationTimestamp: "2026-01-15T10:00:00Z", labels: { app: "api-gateway" }, annotations: {} }, spec: { replicas: 2, selector: { matchLabels: { app: "api-gateway" } }, template: { metadata: { labels: { app: "api-gateway" } }, spec: { containers: [{ name: "gateway", image: "harlie/gateway:v1" }] } } }, status: { phase: "Active", replicas: 2, readyReplicas: 2, availableReplicas: 2, updatedReplicas: 2, conditions: [{ type: "Available", status: "True", reason: "MinimumReplicasAvailable", message: "", lastTransitionTime: "2026-06-19T10:02:00Z" }] } },
  { metadata: { name: "redis-cache", namespace: "production", uid: uid(22), resourceVersion: "22", creationTimestamp: "2026-03-01T12:00:00Z", labels: { app: "redis" }, annotations: {} }, spec: { replicas: 1, selector: { matchLabels: { app: "redis" } }, template: { metadata: { labels: { app: "redis" } }, spec: { containers: [{ name: "redis", image: "redis:7-alpine" }] } } }, status: { phase: "Available", replicas: 1, readyReplicas: 1, availableReplicas: 1, updatedReplicas: 1, conditions: [{ type: "Available", status: "True", reason: "MinimumReplicasAvailable", message: "", lastTransitionTime: "2026-06-15T12:01:00Z" }] } },
  { metadata: { name: "broken-app", namespace: "default", uid: uid(23), resourceVersion: "23", creationTimestamp: "2026-06-25T15:00:00Z", labels: { app: "broken-app" }, annotations: {} }, spec: { replicas: 1, selector: { matchLabels: { app: "broken-app" } }, template: { metadata: { labels: { app: "broken-app" } }, spec: { containers: [{ name: "app", image: "harlie/broken:v1" }] } } }, status: { phase: "Degraded", replicas: 1, readyReplicas: 0, availableReplicas: 0, updatedReplicas: 1, conditions: [{ type: "Available", status: "False", reason: "MinimumReplicasUnavailable", message: "Deployment does not have minimum availability.", lastTransitionTime: "2026-06-26T08:00:00Z" }, { type: "ReplicaFailure", status: "True", reason: "FailedCreate", message: "Pod has unready containers.", lastTransitionTime: "2026-06-26T08:00:00Z" }] } },
];

// ── Builds ──
const buildsData: Build[] = [
  { metadata: { name: "web-ui-build-142", namespace: "default", uid: uid(30), resourceVersion: "30", creationTimestamp: "2026-06-27T05:00:00Z", labels: { buildconfig: "web-ui", app: "web-ui" }, annotations: {} }, spec: { source: { type: "Git", git: { uri: "https://github.com/harlie/web-ui", ref: "main" } }, strategy: { type: "Docker" }, output: { to: { kind: "ImageStreamTag", name: "web-ui:latest" } } }, status: { phase: "Running", startTimestamp: "2026-06-27T05:00:00Z" } },
  { metadata: { name: "web-ui-build-141", namespace: "default", uid: uid(31), resourceVersion: "31", creationTimestamp: "2026-06-26T14:00:00Z", labels: { buildconfig: "web-ui", app: "web-ui" }, annotations: {} }, spec: { source: { type: "Git", git: { uri: "https://github.com/harlie/web-ui", ref: "main" } }, strategy: { type: "Docker" }, output: { to: { kind: "ImageStreamTag", name: "web-ui:latest" } } }, status: { phase: "Complete", startTimestamp: "2026-06-26T14:00:00Z", completionTimestamp: "2026-06-26T14:03:12Z", duration: 192000 } },
  { metadata: { name: "api-build-89", namespace: "default", uid: uid(32), resourceVersion: "32", creationTimestamp: "2026-06-27T04:30:00Z", labels: { buildconfig: "api", app: "api-gateway" }, annotations: {} }, spec: { source: { type: "Git", git: { uri: "https://github.com/harlie/api", ref: "feat/oauth" } }, strategy: { type: "Docker" }, output: { to: { kind: "ImageStreamTag", name: "api:latest" } } }, status: { phase: "Failed", startTimestamp: "2026-06-27T04:30:00Z", completionTimestamp: "2026-06-27T04:35:45Z", duration: 345000, logSnippet: "error: build error: building at STEP \"RUN npm ci\": exit code 1" } },
  { metadata: { name: "api-build-88", namespace: "default", uid: uid(33), resourceVersion: "33", creationTimestamp: "2026-06-26T10:00:00Z", labels: { buildconfig: "api", app: "api-gateway" }, annotations: {} }, spec: { source: { type: "Git", git: { uri: "https://github.com/harlie/api", ref: "main" } }, strategy: { type: "Docker" }, output: { to: { kind: "ImageStreamTag", name: "api:latest" } } }, status: { phase: "Complete", startTimestamp: "2026-06-26T10:00:00Z", completionTimestamp: "2026-06-26T10:04:30Z", duration: 270000 } },
  { metadata: { name: "frontend-build-55", namespace: "staging", uid: uid(34), resourceVersion: "34", creationTimestamp: "2026-06-27T06:00:00Z", labels: { buildconfig: "frontend", app: "frontend" }, annotations: {} }, spec: { source: { type: "Git", git: { uri: "https://github.com/harlie/frontend", ref: "staging" } }, strategy: { type: "Source" }, output: { to: { kind: "ImageStreamTag", name: "frontend:staging" } } }, status: { phase: "Pending" } },
];

// ── Routes ──
const routesData: Route[] = [
  { metadata: { name: "web-ui", namespace: "default", uid: uid(40), resourceVersion: "40", creationTimestamp: "2026-01-10T08:30:00Z", labels: { app: "web-ui" }, annotations: {} }, spec: { host: "web-ui.apps.example.com", path: "/", to: { kind: "Service", name: "web-ui", weight: 100 }, port: { targetPort: "3000" } }, status: { phase: "Admitted", ingress: [{ host: "web-ui.apps.example.com", conditions: [{ type: "Admitted", status: "True" }] }] } },
  { metadata: { name: "api-gateway", namespace: "default", uid: uid(41), resourceVersion: "41", creationTimestamp: "2026-01-15T10:30:00Z", labels: { app: "api-gateway" }, annotations: {} }, spec: { host: "api.apps.example.com", path: "/", to: { kind: "Service", name: "api-gateway", weight: 100 }, port: { targetPort: "8080" }, tls: { termination: "edge", insecureEdgeTerminationPolicy: "Redirect" } }, status: { phase: "Admitted", ingress: [{ host: "api.apps.example.com", conditions: [{ type: "Admitted", status: "True" }] }] } },
  { metadata: { name: "console", namespace: "default", uid: uid(42), resourceVersion: "42", creationTimestamp: "2026-06-01T00:00:00Z", labels: { app: "console" }, annotations: {} }, spec: { host: "console.okd.example.com", to: { kind: "Service", name: "console", weight: 100 } }, status: { phase: "Admitted", ingress: [{ host: "console.okd.example.com", conditions: [{ type: "Admitted", status: "True" }] }] } },
];

// ── Services ──
const servicesData: Service[] = [
  { metadata: { name: "web-ui", namespace: "default", uid: uid(50), resourceVersion: "50", creationTimestamp: "2026-01-10T08:00:00Z", labels: { app: "web-ui" }, annotations: {} }, spec: { clusterIP: "10.43.0.10", ports: [{ name: "http", port: 80, targetPort: 3000, protocol: "TCP" }], selector: { app: "web-ui" }, type: "ClusterIP" }, status: { phase: "Active" } },
  { metadata: { name: "api-gateway", namespace: "default", uid: uid(51), resourceVersion: "51", creationTimestamp: "2026-01-15T10:00:00Z", labels: { app: "api-gateway" }, annotations: {} }, spec: { clusterIP: "10.43.0.11", ports: [{ name: "http", port: 80, targetPort: 8080, protocol: "TCP" }], selector: { app: "api-gateway" }, type: "ClusterIP" }, status: { phase: "Active" } },
  { metadata: { name: "redis-cache", namespace: "production", uid: uid(52), resourceVersion: "52", creationTimestamp: "2026-03-01T12:00:00Z", labels: { app: "redis" }, annotations: {} }, spec: { clusterIP: "10.43.1.10", ports: [{ name: "redis", port: 6379, targetPort: 6379, protocol: "TCP" }], selector: { app: "redis" }, type: "ClusterIP" }, status: { phase: "Active" } },
  { metadata: { name: "console", namespace: "default", uid: uid(53), resourceVersion: "53", creationTimestamp: "2026-06-01T00:00:00Z", labels: { app: "console" }, annotations: {} }, spec: { clusterIP: "10.43.0.12", ports: [{ name: "https", port: 443, targetPort: 8443, protocol: "TCP" }], selector: { app: "console" }, type: "ClusterIP" }, status: { phase: "Active" } },
];

// ── PVCs ──
const pvcData: PersistentVolumeClaim[] = [
  { metadata: { name: "data-redis-0", namespace: "production", uid: uid(60), resourceVersion: "60", creationTimestamp: "2026-03-01T12:00:00Z", labels: { app: "redis" }, annotations: {} }, spec: { accessModes: ["ReadWriteOnce"], resources: { requests: { storage: "10Gi" } }, storageClassName: "gp2", volumeMode: "Filesystem" }, status: { phase: "Bound", capacity: { storage: "10Gi" } } },
  { metadata: { name: "data-postgres-0", namespace: "production", uid: uid(61), resourceVersion: "61", creationTimestamp: "2026-02-01T08:00:00Z", labels: { app: "postgres" }, annotations: {} }, spec: { accessModes: ["ReadWriteOnce"], resources: { requests: { storage: "50Gi" } }, storageClassName: "gp2", volumeMode: "Filesystem" }, status: { phase: "Bound", capacity: { storage: "50Gi" } } },
  { metadata: { name: "build-cache", namespace: "default", uid: uid(62), resourceVersion: "62", creationTimestamp: "2026-01-10T08:00:00Z", labels: {}, annotations: {} }, spec: { accessModes: ["ReadWriteMany"], resources: { requests: { storage: "100Gi" } }, storageClassName: "efs", volumeMode: "Filesystem" }, status: { phase: "Bound", capacity: { storage: "100Gi" } } },
  { metadata: { name: "pending-claim", namespace: "default", uid: uid(63), resourceVersion: "63", creationTimestamp: "2026-06-26T12:00:00Z", labels: {}, annotations: {} }, spec: { accessModes: ["ReadWriteOnce"], resources: { requests: { storage: "5Gi" } }, storageClassName: "gp2", volumeMode: "Filesystem" }, status: { phase: "Pending" } },
];

// ── Events ──
const eventsData: Event[] = [
  { metadata: { name: "web-ui-7d8f9c.17a3b4c5d6e7f", namespace: "default", uid: uid(70), resourceVersion: "70", creationTimestamp: "2026-06-27T06:00:00Z", labels: {}, annotations: {} }, type: "Normal", reason: "Pulled", message: "Successfully pulled image \"harlie/web-ui:v2\" in 12.3s", source: { component: "kubelet" }, firstTimestamp: "2026-06-27T06:00:00Z", lastTimestamp: "2026-06-27T06:00:00Z", count: 1, involvedObject: { kind: "Pod", name: "web-ui-7d8f9c", namespace: "default" } },
  { metadata: { name: "broken-app-5p6q7r.17a1b2c3d4e5f", namespace: "default", uid: uid(71), resourceVersion: "71", creationTimestamp: "2026-06-27T05:00:00Z", labels: {}, annotations: {} }, type: "Warning", reason: "BackOff", message: "Back-off restarting failed container", source: { component: "kubelet" }, firstTimestamp: "2026-06-26T08:00:00Z", lastTimestamp: "2026-06-27T05:00:00Z", count: 14, involvedObject: { kind: "Pod", name: "broken-app-5p6q7r", namespace: "default" } },
  { metadata: { name: "api-build-89.17a9b0c1d2e3f", namespace: "default", uid: uid(72), resourceVersion: "72", creationTimestamp: "2026-06-27T04:35:45Z", labels: {}, annotations: {} }, type: "Warning", reason: "Failed", message: "Build failed: error building at STEP \"RUN npm ci\": exit code 1", source: { component: "build-controller" }, firstTimestamp: "2026-06-27T04:35:45Z", lastTimestamp: "2026-06-27T04:35:45Z", count: 1, involvedObject: { kind: "Build", name: "api-build-89", namespace: "default" } },
  { metadata: { name: "fluentd-6s7t8u.17a2b3c4d5e6f", namespace: "observability", uid: uid(73), resourceVersion: "73", creationTimestamp: "2026-06-27T06:00:00Z", labels: {}, annotations: {} }, type: "Warning", reason: "Unschedulable", message: "0/5 nodes are available: insufficient memory.", source: { component: "default-scheduler" }, firstTimestamp: "2026-06-27T06:00:00Z", lastTimestamp: "2026-06-27T06:00:00Z", count: 1, involvedObject: { kind: "Pod", name: "fluentd-6s7t8u", namespace: "observability" } },
  { metadata: { name: "web-ui-build-141.17a0b1c2d3e4f", namespace: "default", uid: uid(74), resourceVersion: "74", creationTimestamp: "2026-06-26T14:03:12Z", labels: {}, annotations: {} }, type: "Normal", reason: "BuildComplete", message: "Build completed successfully", source: { component: "build-controller" }, firstTimestamp: "2026-06-26T14:03:12Z", lastTimestamp: "2026-06-26T14:03:12Z", count: 1, involvedObject: { kind: "Build", name: "web-ui-build-141", namespace: "default" } },
];

const stats: ConsoleStats = {
  totalProjects: projectsData.length,
  runningPods: podsData.filter((p) => p.status.phase === "Running").length,
  totalPods: podsData.length,
  activeBuilds: buildsData.filter((b) => b.status.phase === "Running" || b.status.phase === "Pending").length,
  failedDeployments: deploymentsData.filter((d) => d.status.availableReplicas < d.status.replicas).length,
  cpuUsage: 58,
  memoryUsage: 72,
};

// ── Fetch Functions ──
export async function fetchStats(): Promise<ConsoleStats> {
  await delay(300);
  return stats;
}

export async function fetchProjects(): Promise<Project[]> {
  await delay(400);
  return projectsData;
}

export async function fetchProject(name: string): Promise<Project | null> {
  await delay(200);
  return projectsData.find((p) => p.metadata.name === name) ?? null;
}

export async function fetchPods(namespace?: string): Promise<Pod[]> {
  await delay(500);
  if (namespace) return podsData.filter((p) => p.metadata.namespace === namespace);
  return podsData;
}

export async function fetchPod(name: string): Promise<Pod | null> {
  await delay(300);
  return podsData.find((p) => p.metadata.name === name) ?? null;
}

export async function deletePod(name: string): Promise<void> {
  await delay(400);
  const idx = podsData.findIndex((p) => p.metadata.name === name);
  if (idx !== -1) podsData.splice(idx, 1);
}

export async function fetchDeployments(namespace?: string): Promise<Deployment[]> {
  await delay(400);
  if (namespace) return deploymentsData.filter((d) => d.metadata.namespace === namespace);
  return deploymentsData;
}

export async function fetchDeployment(name: string): Promise<Deployment | null> {
  await delay(300);
  return deploymentsData.find((d) => d.metadata.name === name) ?? null;
}

export async function scaleDeployment(name: string, replicas: number): Promise<void> {
  await delay(500);
  const dep = deploymentsData.find((d) => d.metadata.name === name);
  if (dep) {
    dep.spec.replicas = replicas;
    dep.status.replicas = replicas;
    dep.status.readyReplicas = replicas;
    dep.status.availableReplicas = replicas;
    dep.status.updatedReplicas = replicas;
  }
}

export async function fetchBuilds(namespace?: string): Promise<Build[]> {
  await delay(400);
  if (namespace) return buildsData.filter((b) => b.metadata.namespace === namespace);
  return buildsData;
}

export async function fetchBuild(name: string): Promise<Build | null> {
  await delay(300);
  return buildsData.find((b) => b.metadata.name === name) ?? null;
}

export async function fetchRoutes(namespace?: string): Promise<Route[]> {
  await delay(350);
  if (namespace) return routesData.filter((r) => r.metadata.namespace === namespace);
  return routesData;
}

export async function fetchRoute(name: string): Promise<Route | null> {
  await delay(250);
  return routesData.find((r) => r.metadata.name === name) ?? null;
}

export async function fetchServices(namespace?: string): Promise<Service[]> {
  await delay(350);
  if (namespace) return servicesData.filter((s) => s.metadata.namespace === namespace);
  return servicesData;
}

export async function fetchService(name: string): Promise<Service | null> {
  await delay(250);
  return servicesData.find((s) => s.metadata.name === name) ?? null;
}

export async function fetchPVCs(namespace?: string): Promise<PersistentVolumeClaim[]> {
  await delay(350);
  if (namespace) return pvcData.filter((p) => p.metadata.namespace === namespace);
  return pvcData;
}

export async function fetchPVC(name: string): Promise<PersistentVolumeClaim | null> {
  await delay(250);
  return pvcData.find((p) => p.metadata.name === name) ?? null;
}

export async function fetchEvents(limit = 20): Promise<Event[]> {
  await delay(300);
  return eventsData.slice(0, limit);
}
