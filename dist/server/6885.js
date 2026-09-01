export const __rspack_esm_id = 6885;
export const __rspack_esm_ids = [6885];
export const __webpack_modules__ = {
5252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fm: () => (/* binding */ useCompilePipeline),
  IM: () => (/* binding */ usePipeline),
  be: () => (/* binding */ usePipelines),
  tp: () => (/* binding */ useRunPipeline),
  mu: () => (/* binding */ useValidatePipeline)
});

// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useQuery.js + 6 modules
var useQuery = __webpack_require__(5375);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useMutation.js + 1 modules
var useMutation = __webpack_require__(19390);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(43653);
;// CONCATENATED MODULE: ./src/config/api-config.ts
const env = ({ "MODE":"production","DEV":false,"PROD":true,"SSR":true,"BASE_URL":"/","ASSET_PREFIX":"" });
const apiConfig = {
    baseUrl: env.PUBLIC_API_BASE_URL ?? "/api",
    timeout: 30000
};

;// CONCATENATED MODULE: ./src/api/errors.ts
class ApiError extends Error {
    status;
    statusText;
    body;
    constructor(status, statusText, body){
        super(`API error ${status}: ${statusText}`);
        this.name = "ApiError";
        this.status = status;
        this.statusText = statusText;
        this.body = body;
    }
    get isUnauthorized() {
        return this.status === 401;
    }
    get isForbidden() {
        return this.status === 403;
    }
    get isNotFound() {
        return this.status === 404;
    }
    get isServerError() {
        return this.status >= 500;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            statusText: this.statusText,
            body: this.body
        };
    }
}

;// CONCATENATED MODULE: ./src/api/client.ts


class ApiClient {
    baseUrl;
    timeout;
    constructor(baseUrl){
        this.baseUrl = baseUrl ?? apiConfig.baseUrl;
        this.timeout = apiConfig.timeout;
    }
    async request(path, options = {}) {
        const { method = "GET", body, headers = {} } = options;
        const requestHeaders = {
            "Content-Type": "application/json",
            ...headers
        };
        const controller = new AbortController();
        const timeoutId = setTimeout(()=>controller.abort(), this.timeout);
        try {
            // `credentials: 'include'` ensures httpOnly session cookies are sent
            // with every request, replacing the previous Authorization header flow.
            const response = await fetch(`${this.baseUrl}${path}`, {
                method,
                headers: requestHeaders,
                body: body ? JSON.stringify(body) : undefined,
                signal: controller.signal,
                credentials: "include"
            });
            clearTimeout(timeoutId);
            if (!response.ok) {
                const errorBody = await response.text();
                throw new ApiError(response.status, response.statusText, errorBody);
            }
            const text = await response.text();
            if (!text) {
                return undefined;
            }
            const json = JSON.parse(text);
            // Unwrap { success, data } envelope if present
            if (json && typeof json === "object" && "success" in json && "data" in json) {
                return json.data;
            }
            return json;
        } catch (error) {
            clearTimeout(timeoutId);
            if (error instanceof ApiError) {
                throw error;
            }
            throw new ApiError(0, "Network error", String(error));
        }
    }
    async get(path, _token) {
        return this.request(path);
    }
    async post(path, body, _token) {
        return this.request(path, {
            method: "POST",
            body
        });
    }
    async put(path, body, _token) {
        return this.request(path, {
            method: "PUT",
            body
        });
    }
    async patch(path, body, _token) {
        return this.request(path, {
            method: "PATCH",
            body
        });
    }
    async delete(path, _token) {
        return this.request(path, {
            method: "DELETE"
        });
    }
}

const apiClient = new ApiClient();

;// CONCATENATED MODULE: ./src/api/pipelines.ts

async function listPipelines(token, projectId, page = 1, pageSize = 20) {
    const params = new URLSearchParams({
        page: String(page),
        pageSize: String(pageSize)
    });
    if (projectId) {
        params.set("projectId", projectId);
    }
    const data = await apiClient.get(`/pipelines?${params.toString()}`, token);
    if (Array.isArray(data)) {
        return {
            items: data,
            total: data.length,
            page,
            pageSize
        };
    }
    return data;
}
async function getPipeline(id, token) {
    return apiClient.get(`/pipelines/${id}`, token);
}
async function validatePipeline(file, token) {
    return apiClient.post("/pipelines/validate", {
        file
    }, token);
}
async function compilePipeline(id, token) {
    return apiClient.post(`/pipelines/${id}/compile`, {}, token);
}
async function runPipeline(id, token) {
    return apiClient.post(`/pipelines/${id}/run`, {}, token);
}

// EXTERNAL MODULE: ./src/hooks/use-auth.ts + 1 modules
var use_auth = __webpack_require__(72646);
;// CONCATENATED MODULE: ./src/hooks/use-pipelines.ts



function usePipelines(projectId, page = 1, pageSize = 20) {
    const { token, isAuthenticated } = (0,use_auth/* .useAuth */.A)();
    return (0,useQuery/* .useQuery */.I)({
        queryKey: [
            "pipelines",
            projectId,
            page,
            pageSize
        ],
        queryFn: ()=>listPipelines(token, projectId, page, pageSize),
        enabled: isAuthenticated
    });
}
function usePipeline(id) {
    const { token, isAuthenticated } = (0,use_auth/* .useAuth */.A)();
    return (0,useQuery/* .useQuery */.I)({
        queryKey: [
            "pipelines",
            id
        ],
        queryFn: ()=>getPipeline(id, token),
        enabled: isAuthenticated && !!id
    });
}
function useValidatePipeline() {
    const { token } = (0,use_auth/* .useAuth */.A)();
    return (0,useMutation/* .useMutation */.n)({
        mutationFn: ({ file })=>validatePipeline(file, token)
    });
}
function useCompilePipeline() {
    const { token } = (0,use_auth/* .useAuth */.A)();
    const queryClient = (0,QueryClientProvider/* .useQueryClient */.jE)();
    return (0,useMutation/* .useMutation */.n)({
        mutationFn: (id)=>compilePipeline(id, token),
        onSuccess: (_result, id)=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "pipelines",
                    id
                ]
            });
        }
    });
}
function useRunPipeline() {
    const { token } = (0,use_auth/* .useAuth */.A)();
    const queryClient = (0,QueryClientProvider/* .useQueryClient */.jE)();
    return (0,useMutation/* .useMutation */.n)({
        mutationFn: (id)=>runPipeline(id, token),
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "builds"
                ]
            });
        }
    });
}


},

};
