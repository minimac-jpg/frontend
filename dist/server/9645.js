export const __rspack_esm_id = 9645;
export const __rspack_esm_ids = [9645];
export const __webpack_modules__ = {
30028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var _tanstack_react_query__rspack_import_1 = __webpack_require__(5375);
/* import */ var _tanstack_react_query__rspack_import_2 = __webpack_require__(43653);
/* import */ var _tanstack_react_query__rspack_import_3 = __webpack_require__(19390);
/* import */ var _lib_api_client__rspack_import_0 = __webpack_require__(59943);


function mapProject(dto) {
    return {
        id: dto.id,
        tenant_id: dto.tenant_id,
        name: dto.name,
        status: dto.status,
        owner: dto.owner,
        createdAt: dto.created_at,
        updatedAt: dto.updated_at
    };
}
function useProjects(limit = 100) {
    return (0,_tanstack_react_query__rspack_import_1/* .useQuery */.I)({
        queryKey: [
            "projects",
            limit
        ],
        queryFn: async ()=>{
            const data = await (0,_lib_api_client__rspack_import_0/* .apiGet */.Vg)(`/api/projects?offset=0&limit=${limit}`);
            return {
                projects: (data.projects ?? []).map(mapProject),
                total: data.total
            };
        }
    });
}
function useCreateProject() {
    const queryClient = (0,_tanstack_react_query__rspack_import_2/* .useQueryClient */.jE)();
    return (0,_tanstack_react_query__rspack_import_3/* .useMutation */.n)({
        mutationFn: async (data)=>{
            const envelope = await (0,_lib_api_client__rspack_import_0/* .apiPost */.$P)("/api/projects", {
                name: data.name,
                ...data.description ? {
                    description: data.description
                } : {}
            });
            return mapProject(envelope.project);
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "projects"
                ]
            });
        }
    });
}
function useUpdateProject() {
    const queryClient = (0,_tanstack_react_query__rspack_import_2/* .useQueryClient */.jE)();
    return (0,_tanstack_react_query__rspack_import_3/* .useMutation */.n)({
        mutationFn: async ({ id, data })=>{
            const envelope = await (0,_lib_api_client__rspack_import_0/* .apiPut */.mu)(`/api/projects/${encodeURIComponent(id)}`, data);
            return mapProject(envelope.project);
        },
        onSuccess: (_result, variables)=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "projects"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "projects",
                    variables.id
                ]
            });
        }
    });
}
function useDeleteProject() {
    const queryClient = (0,_tanstack_react_query__rspack_import_2/* .useQueryClient */.jE)();
    return (0,_tanstack_react_query__rspack_import_3/* .useMutation */.n)({
        mutationFn: (id)=>(0,_lib_api_client__rspack_import_0/* .apiDelete */.Al)(`/api/projects/${encodeURIComponent(id)}`),
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "projects"
                ]
            });
        }
    });
}

__webpack_require__.d(__webpack_exports__, {
  YK: () => (useProjects),
  bL: () => (useCreateProject),
  eW: () => (useDeleteProject),
  sS: () => (useUpdateProject)
});


},

};
