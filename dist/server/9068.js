export const __rspack_esm_id = 9068;
export const __rspack_esm_ids = [9068];
export const __webpack_modules__ = {
59943(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var _lib_auth_client__rspack_import_0 = __webpack_require__(82915);

class ApiError extends Error {
    code;
    status;
    constructor(message, code, status){
        super(message);
        this.name = "ApiError";
        this.code = code;
        this.status = status;
    }
}
let cachedToken = null;
function clearTokenCache() {
    cachedToken = null;
}
async function fetchToken() {
    if (cachedToken) return cachedToken;
    const { data, error } = await _lib_auth_client__rspack_import_0/* .authClient.token */.y.token();
    if (error || !data?.token) {
        throw new ApiError(error?.message ?? "Not authenticated — please sign in.", "AUTH_REQUIRED", 401);
    }
    cachedToken = data.token;
    return cachedToken;
}
function toApiError(payload, fallbackStatus) {
    if (typeof payload === "object" && payload !== null && "error" in payload && typeof payload.error === "object" && payload.error !== null) {
        const body = payload.error;
        return new ApiError(body.message || "Request failed", body.code || "UNKNOWN", body.status || fallbackStatus);
    }
    const legacyMessage = typeof payload === "object" && payload !== null && "error" in payload ? payload.error : undefined;
    return new ApiError(typeof legacyMessage === "string" ? legacyMessage : "Request failed", "UNKNOWN", fallbackStatus);
}
async function rawRequest(path, init, allowRetry) {
    let token;
    try {
        token = await fetchToken();
    } catch (err) {
        clearTokenCache();
        if (err instanceof ApiError) throw err;
        throw new ApiError("Failed to obtain auth token", "AUTH_REQUIRED", 401);
    }
    const headers = new Headers(init?.headers);
    headers.set("Authorization", `Bearer ${token}`);
    if (typeof init?.body === "string" && !headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
    }
    let response;
    try {
        response = await fetch(path, {
            ...init,
            headers
        });
    } catch (err) {
        throw new ApiError(err instanceof Error ? err.message : "Network error", "NETWORK_ERROR", 0);
    }
    if (response.status === 401 && allowRetry) {
        clearTokenCache();
        return rawRequest(path, init, false);
    }
    return response;
}
async function request(path, init, allowRetry) {
    let token;
    try {
        token = await fetchToken();
    } catch (err) {
        clearTokenCache();
        if (err instanceof ApiError) throw err;
        throw new ApiError("Failed to obtain auth token", "AUTH_REQUIRED", 401);
    }
    const headers = new Headers(init?.headers);
    headers.set("Authorization", `Bearer ${token}`);
    if (typeof init?.body === "string" && !headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
    }
    let response;
    try {
        response = await fetch(path, {
            ...init,
            headers
        });
    } catch (err) {
        throw new ApiError(err instanceof Error ? err.message : "Network error", "NETWORK_ERROR", 0);
    }
    if (response.status === 401 && allowRetry) {
        clearTokenCache();
        return request(path, init, false);
    }
    let payload = null;
    const text = await response.text();
    if (text) {
        try {
            payload = JSON.parse(text);
        } catch  {
            payload = null;
        }
    }
    if (!response.ok) {
        throw toApiError(payload, response.status);
    }
    if (typeof payload === "object" && payload !== null && "success" in payload) {
        const envelope = payload;
        if (envelope.success) return envelope.data;
        throw toApiError(envelope, response.status);
    }
    return payload;
}
async function apiFetch(path, init) {
    return request(path, init, true);
}
function apiGet(path) {
    return apiFetch(path);
}
/**
 * Fetch a binary endpoint (e.g. artifact downloads) with the auth token
 * attached, saving the response body as a file via an object URL.
 */ async function apiDownload(path, filename) {
    const response = await rawRequest(path, {
        method: "GET"
    }, true);
    if (!response.ok) {
        let payload = null;
        const text = await response.text();
        if (text) {
            try {
                payload = JSON.parse(text);
            } catch  {
                payload = null;
            }
        }
        throw toApiError(payload, response.status);
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
}
function apiPost(path, body) {
    return apiFetch(path, {
        method: "POST",
        body: body === undefined ? "{}" : JSON.stringify(body)
    });
}
function apiPut(path, body) {
    return apiFetch(path, {
        method: "PUT",
        body: body === undefined ? "{}" : JSON.stringify(body)
    });
}
function apiPatch(path, body) {
    return apiFetch(path, {
        method: "PATCH",
        body: body === undefined ? "{}" : JSON.stringify(body)
    });
}
function apiDelete(path) {
    return apiFetch(path, {
        method: "DELETE"
    });
}

__webpack_require__.d(__webpack_exports__, {
  $P: () => (apiPost),
  $Y: () => (apiPatch),
  Al: () => (apiDelete),
  Jb: () => (apiDownload),
  Vg: () => (apiGet),
  hD: () => (ApiError),
  mu: () => (apiPut),
  nr: () => (apiFetch)
});


},

};
