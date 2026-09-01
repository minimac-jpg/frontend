import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as mock from "./mock-data";

export function useStats() {
  return useQuery({ queryKey: ["console", "stats"], queryFn: mock.fetchStats });
}

export function useProjects() {
  return useQuery({ queryKey: ["console", "projects"], queryFn: mock.fetchProjects });
}

export function useProject(name: string) {
  return useQuery({ queryKey: ["console", "projects", name], queryFn: () => mock.fetchProject(name), enabled: !!name });
}

export function usePods(namespace?: string) {
  return useQuery({ queryKey: ["console", "pods", namespace], queryFn: () => mock.fetchPods(namespace) });
}

export function usePod(name: string) {
  return useQuery({ queryKey: ["console", "pods", name], queryFn: () => mock.fetchPod(name), enabled: !!name });
}

export function useDeletePod() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: (name: string) => mock.deletePod(name), onSuccess: () => qc.invalidateQueries({ queryKey: ["console", "pods"] }) });
}

export function useDeployments(namespace?: string) {
  return useQuery({ queryKey: ["console", "deployments", namespace], queryFn: () => mock.fetchDeployments(namespace) });
}

export function useDeployment(name: string) {
  return useQuery({ queryKey: ["console", "deployments", name], queryFn: () => mock.fetchDeployment(name), enabled: !!name });
}

export function useScaleDeployment() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: ({ name, replicas }: { name: string; replicas: number }) => mock.scaleDeployment(name, replicas), onSuccess: () => qc.invalidateQueries({ queryKey: ["console", "deployments"] }) });
}

export function useBuilds(namespace?: string) {
  return useQuery({ queryKey: ["console", "builds", namespace], queryFn: () => mock.fetchBuilds(namespace) });
}

export function useBuild(name: string) {
  return useQuery({ queryKey: ["console", "builds", name], queryFn: () => mock.fetchBuild(name), enabled: !!name });
}

export function useRoutes(namespace?: string) {
  return useQuery({ queryKey: ["console", "routes", namespace], queryFn: () => mock.fetchRoutes(namespace) });
}

export function useRoute(name: string) {
  return useQuery({ queryKey: ["console", "routes", name], queryFn: () => mock.fetchRoute(name), enabled: !!name });
}

export function useServices(namespace?: string) {
  return useQuery({ queryKey: ["console", "services", namespace], queryFn: () => mock.fetchServices(namespace) });
}

export function useService(name: string) {
  return useQuery({ queryKey: ["console", "services", name], queryFn: () => mock.fetchService(name), enabled: !!name });
}

export function usePVCs(namespace?: string) {
  return useQuery({ queryKey: ["console", "pvcs", namespace], queryFn: () => mock.fetchPVCs(namespace) });
}

export function usePVC(name: string) {
  return useQuery({ queryKey: ["console", "pvcs", name], queryFn: () => mock.fetchPVC(name), enabled: !!name });
}

export function useEvents() {
  return useQuery({ queryKey: ["console", "events"], queryFn: () => mock.fetchEvents() });
}
