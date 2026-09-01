export const __rspack_esm_id = 3815;
export const __rspack_esm_ids = [3815];
export const __webpack_modules__ = {
3578(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var _tanstack_react_query__rspack_import_2 = __webpack_require__(5375);
/* import */ var _tanstack_react_query__rspack_import_3 = __webpack_require__(43653);
/* import */ var _tanstack_react_query__rspack_import_4 = __webpack_require__(19390);
/* import */ var _lib_api_client__rspack_import_0 = __webpack_require__(59943);
/* import */ var _lib_auth_client__rspack_import_1 = __webpack_require__(82915);



function useTenantId() {
    const { data: session, isPending } = _lib_auth_client__rspack_import_1/* .authClient.useSession */.y.useSession();
    const tenantId = session?.session?.activeOrganizationId ?? session?.user?.id ?? null;
    return {
        tenantId,
        isPending
    };
}
function requireTenantId(tenantId) {
    if (!tenantId) {
        throw new _lib_api_client__rspack_import_0/* .ApiError */.hD("Not authenticated — please sign in.", "AUTH_REQUIRED", 401);
    }
    return tenantId;
}
function mapPipelineStatus(status) {
    switch(status){
        case "active":
            return "active";
        case "disabled":
            return "disabled";
        case "archived":
            return "archived";
        default:
            return "draft";
    }
}
function mapTriggerKind(kind) {
    if (kind === "schedule") return "scheduled";
    if (kind === "webhook") return "webhook";
    return "manual";
}
function mapJobTriggers(dto) {
    const triggers = dto.triggers ?? dto.metadata?.triggers ?? [];
    for (const trigger of triggers){
        const mapped = mapTriggerKind(trigger?.kind);
        if (mapped !== "manual") return mapped;
    }
    return "manual";
}
function mapJob(dto) {
    return {
        id: dto.id,
        name: dto.name,
        description: dto.metadata?.description ?? null,
        status: mapPipelineStatus(dto.status),
        lastRunAt: null,
        lastDuration: null,
        branch: "",
        trigger: mapJobTriggers(dto),
        createdAt: dto.metadata?.created_at ?? dto.created_at ?? "",
        updatedAt: dto.metadata?.updated_at ?? dto.updated_at ?? "",
        tenant_id: dto.tenant_id,
        project_id: dto.project_id,
        tags: dto.metadata?.tags ?? []
    };
}
function mapBuildStatus(dto) {
    const outcome = dto.result?.outcome;
    if (outcome === "success") return "success";
    if (outcome === "failure") return "failed";
    if (outcome === "cancelled") return "cancelled";
    if (outcome === "timeout") return "failed";
    switch(dto.status){
        case "succeeded":
            return "success";
        case "failed":
            return "failed";
        case "cancelled":
            return "cancelled";
        case "timed_out":
            return "failed";
        case "running":
            return "running";
        default:
            return "queued";
    }
}
function mapBuildTrigger(kind) {
    if (kind === "scheduled") return "scheduled";
    if (kind === "webhook") return "webhook";
    return "manual";
}
function mapBuild(dto) {
    return {
        id: dto.id,
        jobId: dto.metadata?.pipeline_id ?? "",
        number: dto.number,
        status: mapBuildStatus(dto),
        state: dto.state ?? "",
        trigger: mapBuildTrigger(dto.kind),
        branch: dto.metadata?.branch ?? "",
        commitHash: dto.metadata?.commit_sha ?? "",
        commitMessage: "",
        triggeredBy: dto.metadata?.actor ?? "",
        duration: dto.result?.duration_secs != null ? dto.result.duration_secs * 1000 : null,
        createdAt: dto.created_at,
        updatedAt: dto.updated_at,
        stages: [],
        artifacts: [],
        tenant_id: dto.tenant_id,
        project_id: dto.metadata?.project_id ?? "",
        errorMessage: dto.result?.error_message ?? null
    };
}
function mapLogLine(entry) {
    return {
        lineNumber: entry.sequence,
        timestamp: entry.timestamp,
        stream: entry.stream === "stderr" ? "stderr" : "stdout",
        content: entry.message
    };
}
function isBuildLike(value) {
    return typeof value === "object" && value !== null && "id" in value && "number" in value && "status" in value && "stages" in value && "artifacts" in value;
}
function findCachedBuild(client, buildId) {
    for (const query of client.getQueryCache().getAll()){
        const data = query.state.data;
        if (!data) continue;
        if (isBuildLike(data) && data.id === buildId) return data;
        if (Array.isArray(data)) {
            const hit = data.find((d)=>isBuildLike(d) && d.id === buildId);
            if (hit) return hit;
        }
    }
    return undefined;
}
function useJobs() {
    const { tenantId, isPending } = useTenantId();
    return (0,_tanstack_react_query__rspack_import_2/* .useQuery */.I)({
        queryKey: [
            "pipelines",
            "jobs",
            tenantId
        ],
        queryFn: async ()=>{
            requireTenantId(tenantId);
            const data = await (0,_lib_api_client__rspack_import_0/* .apiGet */.Vg)("/api/pipelines?limit=100");
            return (data.items ?? []).map(mapJob);
        },
        enabled: !isPending
    });
}
function useJob(jobId) {
    const { tenantId, isPending } = useTenantId();
    return (0,_tanstack_react_query__rspack_import_2/* .useQuery */.I)({
        queryKey: [
            "pipelines",
            "jobs",
            tenantId,
            jobId
        ],
        queryFn: async ()=>{
            requireTenantId(tenantId);
            const pipeline = await (0,_lib_api_client__rspack_import_0/* .apiGet */.Vg)(`/api/pipelines/${encodeURIComponent(jobId)}`);
            return mapJob(pipeline);
        },
        enabled: !isPending && !!jobId
    });
}
function useBuilds(jobId) {
    const { tenantId, isPending } = useTenantId();
    return (0,_tanstack_react_query__rspack_import_2/* .useQuery */.I)({
        queryKey: [
            "pipelines",
            "jobs",
            tenantId,
            jobId,
            "builds"
        ],
        queryFn: async ()=>{
            requireTenantId(tenantId);
            const data = await (0,_lib_api_client__rspack_import_0/* .apiGet */.Vg)(`/api/builds?pipeline_id=${encodeURIComponent(jobId)}&limit=50`);
            return (data.builds ?? []).map(mapBuild);
        },
        enabled: !isPending && !!jobId,
        refetchInterval: (query)=>{
            const data = query.state.data;
            if (!data) return false;
            const hasActive = data.some((b)=>b.status === "running" || b.status === "queued");
            return hasActive ? 3000 : false;
        }
    });
}
function useBuild(jobId, buildId) {
    return (0,_tanstack_react_query__rspack_import_2/* .useQuery */.I)({
        queryKey: [
            "pipelines",
            "jobs",
            jobId,
            "builds",
            buildId
        ],
        queryFn: async ()=>{
            const data = await (0,_lib_api_client__rspack_import_0/* .apiGet */.Vg)(`/api/builds/${encodeURIComponent(buildId)}`);
            return mapBuild(data.build);
        },
        enabled: !!jobId && !!buildId,
        refetchInterval: (query)=>{
            const data = query.state.data;
            if (!data) return false;
            return data.status === "running" || data.status === "queued" ? 3000 : false;
        }
    });
}
function useBuildArtifacts(buildId) {
    return (0,_tanstack_react_query__rspack_import_2/* .useQuery */.I)({
        queryKey: [
            "pipelines",
            "builds",
            buildId,
            "artifacts"
        ],
        queryFn: async ()=>{
            const data = await (0,_lib_api_client__rspack_import_0/* .apiGet */.Vg)(`/api/artifacts?build_id=${encodeURIComponent(buildId)}&limit=100`);
            return (data.artifacts ?? []).map((artifact)=>({
                    artifactId: artifact.artifact_id,
                    name: artifact.name,
                    size: artifact.size_bytes
                }));
        },
        enabled: !!buildId
    });
}
function useConsoleLog(buildId) {
    const queryClient = (0,_tanstack_react_query__rspack_import_3/* .useQueryClient */.jE)();
    const cachedBuild = findCachedBuild(queryClient, buildId);
    const isActive = cachedBuild?.status === "running" || cachedBuild?.status === "queued";
    return (0,_tanstack_react_query__rspack_import_2/* .useQuery */.I)({
        queryKey: [
            "pipelines",
            "logs",
            buildId
        ],
        queryFn: async ()=>{
            const data = await (0,_lib_api_client__rspack_import_0/* .apiGet */.Vg)(`/api/builds/${encodeURIComponent(buildId)}/logs?limit=200`);
            return (data.entries ?? []).map(mapLogLine);
        },
        enabled: !!buildId,
        refetchInterval: isActive ? 3000 : false
    });
}
function useTriggerBuild() {
    const queryClient = (0,_tanstack_react_query__rspack_import_3/* .useQueryClient */.jE)();
    const { tenantId } = useTenantId();
    return (0,_tanstack_react_query__rspack_import_4/* .useMutation */.n)({
        mutationFn: async (job)=>{
            const data = await (0,_lib_api_client__rspack_import_0/* .apiPost */.$P)("/api/builds", {
                project_id: job.project_id,
                pipeline_id: job.id,
                actor: tenantId ?? undefined
            });
            return mapBuild(data.build);
        },
        onSuccess: (_data, job)=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "pipelines",
                    "jobs",
                    job.tenant_id,
                    job.id,
                    "builds"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "pipelines",
                    "jobs",
                    job.tenant_id,
                    job.id
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "pipelines",
                    "jobs"
                ]
            });
        }
    });
}
function useStopBuild() {
    const queryClient = (0,_tanstack_react_query__rspack_import_3/* .useQueryClient */.jE)();
    return (0,_tanstack_react_query__rspack_import_4/* .useMutation */.n)({
        mutationFn: async ({ buildId })=>{
            const data = await (0,_lib_api_client__rspack_import_0/* .apiPost */.$P)(`/api/builds/${encodeURIComponent(buildId)}/cancel`, {});
            return mapBuild(data.build);
        },
        onSuccess: (_data, { jobId, buildId })=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "pipelines",
                    "jobs",
                    jobId,
                    "builds",
                    buildId
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "pipelines",
                    "jobs",
                    jobId,
                    "builds"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "pipelines",
                    "jobs",
                    jobId
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "pipelines",
                    "jobs"
                ]
            });
        }
    });
}
function useRecentBuilds(limit = 10) {
    const { tenantId, isPending } = useTenantId();
    return (0,_tanstack_react_query__rspack_import_2/* .useQuery */.I)({
        queryKey: [
            "pipelines",
            "recent-builds",
            tenantId,
            limit
        ],
        queryFn: async ()=>{
            requireTenantId(tenantId);
            const data = await (0,_lib_api_client__rspack_import_0/* .apiGet */.Vg)(`/api/builds?limit=${limit}`);
            return (data.builds ?? []).map(mapBuild).sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, limit);
        },
        enabled: !isPending
    });
}

__webpack_require__.d(__webpack_exports__, {
  FW: () => (useBuilds),
  JJ: () => (useJob),
  Os: () => (useJobs),
  ZJ: () => (useBuildArtifacts),
  __: () => (useTriggerBuild),
  eK: () => (useBuild),
  gn: () => (useStopBuild),
  nL: () => (useConsoleLog),
  qX: () => (useRecentBuilds)
});


},

};
