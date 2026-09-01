export const __rspack_esm_id = 7687;
export const __rspack_esm_ids = [7687];
export const __webpack_modules__ = {
47591(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _lib_utils__rspack_import_1 = __webpack_require__(80828);


const statusStyles = {
    draft: "bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800/50 dark:text-slate-400 dark:border-slate-700",
    pending_approval: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",
    approved: "bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900/30 dark:text-teal-400 dark:border-teal-800",
    published: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
    failed: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
    cancelled: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
    archived: "bg-stone-100 text-stone-800 border-stone-200 dark:bg-stone-800/50 dark:text-stone-400 dark:border-stone-700"
};
function StatusBadge({ status }) {
    const style = statusStyles[status.toLowerCase()];
    const label = status.replace(/_/g, " ");
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
        className: (0,_lib_utils__rspack_import_1.cn)("inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium capitalize", style ?? "bg-muted text-muted-foreground border-border"),
        children: label
    });
}

__webpack_require__.d(__webpack_exports__, {
  W: () => (StatusBadge)
});


},
72756(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var _tanstack_react_query__rspack_import_1 = __webpack_require__(5375);
/* import */ var _tanstack_react_query__rspack_import_2 = __webpack_require__(43653);
/* import */ var _tanstack_react_query__rspack_import_3 = __webpack_require__(19390);
/* import */ var _lib_api_client__rspack_import_0 = __webpack_require__(59943);


const RELEASES_KEY = "releases";
async function fetchProjectNames() {
    const data = await (0,_lib_api_client__rspack_import_0/* .apiGet */.Vg)("/api/projects?limit=200");
    return new Map(data.projects.map((project)=>[
            project.id,
            project.name
        ]));
}
function releaseDisplayName(version, projectName) {
    return projectName ? `${projectName} ${version}` : version;
}
function mapSummary(dto, projectNames) {
    const projectName = projectNames.get(dto.project_id) ?? null;
    return {
        id: dto.id,
        name: releaseDisplayName(dto.version, projectName),
        version: dto.version,
        title: null,
        kind: null,
        status: dto.status,
        projectId: dto.project_id,
        projectName,
        target: {
            environment_id: null,
            channel: null
        },
        notes: [],
        buildId: null,
        createdAt: dto.created_at,
        updatedAt: dto.created_at,
        publishedAt: dto.published_at
    };
}
function mapFull(dto, projectNames) {
    const projectName = projectNames.get(dto.project_id) ?? null;
    return {
        id: dto.id,
        name: releaseDisplayName(dto.version.semantic_version, projectName),
        version: dto.version.semantic_version,
        title: dto.metadata.title ?? null,
        kind: dto.kind,
        status: dto.status,
        projectId: dto.project_id,
        projectName,
        target: dto.target,
        notes: dto.notes ?? [],
        buildId: dto.metadata.build_id ?? null,
        createdAt: dto.created_at,
        updatedAt: dto.updated_at,
        publishedAt: dto.published_at
    };
}
function mapArtifact(dto, releaseVersion) {
    return {
        id: dto.artifact_id,
        name: dto.name,
        kind: dto.kind ?? null,
        checksum: dto.checksum ?? null,
        sizeBytes: dto.size_bytes,
        required: dto.required,
        appKey: dto.kind ?? "",
        version: releaseVersion,
        buildNumber: 0,
        hash: dto.checksum ?? "",
        buildTime: "",
        updatedAt: "",
        deployedAt: null,
        ticketNumber: "",
        isRemoved: false
    };
}
function useReleases() {
    return (0,_tanstack_react_query__rspack_import_1/* .useQuery */.I)({
        queryKey: [
            RELEASES_KEY
        ],
        queryFn: async ()=>{
            const [list, projectNames] = await Promise.all([
                (0,_lib_api_client__rspack_import_0/* .apiGet */.Vg)("/api/releases?limit=100"),
                fetchProjectNames().catch(()=>new Map())
            ]);
            return list.releases.map((dto)=>mapSummary(dto, projectNames));
        }
    });
}
function useRelease(releaseId) {
    return (0,_tanstack_react_query__rspack_import_1/* .useQuery */.I)({
        queryKey: [
            RELEASES_KEY,
            releaseId
        ],
        queryFn: async ()=>{
            const [data, projectNames] = await Promise.all([
                (0,_lib_api_client__rspack_import_0/* .apiGet */.Vg)(`/api/releases/${encodeURIComponent(releaseId)}`),
                fetchProjectNames().catch(()=>new Map())
            ]);
            return {
                release: mapFull(data.release, projectNames),
                timeline: data.release.timeline?.events ?? []
            };
        },
        enabled: !!releaseId
    });
}
function useReleaseArtifacts(releaseId, releaseVersion) {
    return (0,_tanstack_react_query__rspack_import_1/* .useQuery */.I)({
        queryKey: [
            RELEASES_KEY,
            releaseId,
            "artifacts",
            releaseVersion
        ],
        queryFn: async ()=>{
            const data = await (0,_lib_api_client__rspack_import_0/* .apiGet */.Vg)(`/api/releases/${encodeURIComponent(releaseId)}/artifacts`);
            return (data.artifacts ?? []).map((dto)=>mapArtifact(dto, releaseVersion));
        },
        enabled: !!releaseId
    });
}
function useProjectOptions() {
    return (0,_tanstack_react_query__rspack_import_1/* .useQuery */.I)({
        queryKey: [
            "projects",
            "options"
        ],
        queryFn: async ()=>{
            const data = await (0,_lib_api_client__rspack_import_0/* .apiGet */.Vg)("/api/projects?limit=200");
            return data.projects.map((project)=>({
                    id: project.id,
                    name: project.name
                }));
        }
    });
}
function useCreateRelease() {
    const queryClient = (0,_tanstack_react_query__rspack_import_2/* .useQueryClient */.jE)();
    return (0,_tanstack_react_query__rspack_import_3/* .useMutation */.n)({
        mutationFn: async (input)=>{
            const data = await (0,_lib_api_client__rspack_import_0/* .apiPost */.$P)("/api/releases", {
                project_id: input.projectId,
                version: input.version,
                title: input.title,
                notes: input.notes ?? []
            });
            return mapFull(data.release, new Map());
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    RELEASES_KEY
                ]
            });
        }
    });
}
function useUpdateRelease(releaseId) {
    const queryClient = (0,_tanstack_react_query__rspack_import_2/* .useQueryClient */.jE)();
    return (0,_tanstack_react_query__rspack_import_3/* .useMutation */.n)({
        mutationFn: async (input)=>{
            const data = await (0,_lib_api_client__rspack_import_0/* .apiPut */.mu)(`/api/releases/${encodeURIComponent(releaseId)}`, {
                title: input.title,
                notes: input.notes
            });
            return mapFull(data.release, new Map());
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    RELEASES_KEY
                ]
            });
        }
    });
}
function useReleaseLifecycleMutation(action) {
    const queryClient = (0,_tanstack_react_query__rspack_import_2/* .useQueryClient */.jE)();
    return (0,_tanstack_react_query__rspack_import_3/* .useMutation */.n)({
        mutationFn: async (releaseId)=>{
            const data = await (0,_lib_api_client__rspack_import_0/* .apiPost */.$P)(`/api/releases/${encodeURIComponent(releaseId)}/${action}`, {});
            return mapFull(data.release, new Map());
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    RELEASES_KEY
                ]
            });
        }
    });
}
function useSubmitRelease() {
    return useReleaseLifecycleMutation("submit");
}
function useApproveRelease() {
    return useReleaseLifecycleMutation("approve");
}
function usePublishRelease() {
    return useReleaseLifecycleMutation("publish");
}
function useCancelRelease() {
    return useReleaseLifecycleMutation("cancel");
}

__webpack_require__.d(__webpack_exports__, {
  BQ: () => (useCreateRelease),
  HN: () => (useRelease),
  Sq: () => (useReleaseArtifacts),
  aN: () => (useReleases),
  bt: () => (useProjectOptions),
  cu: () => (useUpdateRelease),
  gM: () => (useApproveRelease),
  l: () => (useSubmitRelease),
  pv: () => (useCancelRelease),
  w9: () => (usePublishRelease)
});


},

};
