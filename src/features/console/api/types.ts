export type K8sStatus = "Running" | "Pending" | "Failed" | "Succeeded" | "Unknown" | "Terminating" | "CrashLoopBackOff" | "Completed" | "Active";

export interface K8sObjectMeta {
  name: string;
  namespace: string;
  uid: string;
  resourceVersion: string;
  creationTimestamp: string;
  labels: Record<string, string>;
  annotations: Record<string, string>;
}

export interface Project {
  metadata: K8sObjectMeta;
  status: { phase: "Active" | "Terminating"; displayName?: string };
}

export interface Pod {
  metadata: K8sObjectMeta;
  spec: {
    nodeName: string;
    containers: { name: string; image: string; ports?: { containerPort: number }[] }[];
    restartPolicy: string;
  };
  status: {
    phase: string;
    podIP: string;
    hostIP: string;
    startTime: string;
    conditions: { type: string; status: string; lastTransitionTime: string; reason?: string }[];
    containerStatuses: { name: string; image: string; ready: boolean; restartCount: number; state: Record<string, unknown> }[];
  };
}

export interface Deployment {
  metadata: K8sObjectMeta;
  spec: {
    replicas: number;
    selector: { matchLabels: Record<string, string> };
    template: { metadata: { labels: Record<string, string> }; spec: { containers: { name: string; image: string }[] } };
  };
  status: {
    phase: string;
    replicas: number;
    readyReplicas: number;
    availableReplicas: number;
    updatedReplicas: number;
    conditions: { type: string; status: string; reason?: string; message?: string; lastTransitionTime: string }[];
  };
}

export type BuildPhase = "New" | "Pending" | "Running" | "Complete" | "Failed" | "Error" | "Cancelled";

export interface Build {
  metadata: K8sObjectMeta;
  spec: {
    source: { type: string; git?: { uri: string; ref: string } };
    strategy: { type: string };
    output: { to: { kind: string; name: string } };
  };
  status: {
    phase: BuildPhase;
    startTimestamp?: string;
    completionTimestamp?: string;
    duration?: number;
    logSnippet?: string;
  };
}

export interface Route {
  metadata: K8sObjectMeta;
  spec: {
    host: string;
    path?: string;
    to: { kind: string; name: string; weight: number };
    port?: { targetPort: string };
    tls?: { termination: string; insecureEdgeTerminationPolicy?: string };
  };
  status: { phase: string; ingress: { host: string; conditions: { type: string; status: string }[] }[] };
}

export interface Service {
  metadata: K8sObjectMeta;
  spec: {
    clusterIP: string;
    externalIP?: string;
    ports: { name: string; port: number; targetPort: number; protocol: string }[];
    selector: Record<string, string>;
    type: string;
  };
  status: { phase: string };
}

export interface PersistentVolumeClaim {
  metadata: K8sObjectMeta;
  spec: {
    accessModes: string[];
    resources: { requests: { storage: string } };
    storageClassName: string;
    volumeMode: string;
  };
  status: { phase: string; capacity?: { storage: string } };
}

export interface Event {
  metadata: K8sObjectMeta;
  type: "Normal" | "Warning";
  reason: string;
  message: string;
  source: { component: string };
  firstTimestamp: string;
  lastTimestamp: string;
  count: number;
  involvedObject: { kind: string; name: string; namespace: string };
}

export interface ConsoleStats {
  totalProjects: number;
  runningPods: number;
  totalPods: number;
  activeBuilds: number;
  failedDeployments: number;
  cpuUsage: number;
  memoryUsage: number;
}
