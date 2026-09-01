export const __rspack_esm_id = 3550;
export const __rspack_esm_ids = [3550];
export const __webpack_modules__ = {
28429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ CacheRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useQuery.js + 6 modules
var useQuery = __webpack_require__(5375);
// EXTERNAL MODULE: ./src/lib/api/client.ts
var client = __webpack_require__(59943);
;// CONCATENATED MODULE: ./src/api/cache.ts

function mapCacheEntry(dto) {
    const expired = dto.expires_at ? new Date(dto.expires_at).getTime() <= Date.now() : false;
    return {
        cache_id: dto.key,
        key: dto.key,
        kind: "build",
        status: expired ? "expired" : "active",
        size_bytes: dto.size_bytes,
        checksum: dto.checksum ?? null,
        scope: dto.scope,
        project_id: null,
        repository_id: null,
        branch: null,
        build_id: null,
        access_count: dto.hits,
        immutable: false,
        compressed: false,
        created_at: dto.created_at,
        last_used_at: dto.last_accessed_at
    };
}
async function listCacheEntries(scope = "default") {
    const data = await (0,client/* .apiGet */.Vg)(`/api/cache/${encodeURIComponent(scope)}`);
    const items = (data.entries ?? []).map(mapCacheEntry);
    return {
        items,
        total: items.length
    };
}

// EXTERNAL MODULE: ./src/hooks/use-auth.ts + 1 modules
var use_auth = __webpack_require__(72646);
;// CONCATENATED MODULE: ./src/hooks/use-cache.ts



function useCacheEntries(limit = 50) {
    const { isAuthenticated } = (0,use_auth/* .useAuth */.A)();
    return (0,useQuery/* .useQuery */.I)({
        queryKey: [
            "cacheEntries",
            limit
        ],
        queryFn: ()=>listCacheEntries(),
        enabled: isAuthenticated
    });
}

// EXTERNAL MODULE: ./src/components/common/empty-state.tsx
var empty_state = __webpack_require__(28425);
// EXTERNAL MODULE: ./src/components/common/error-state.tsx
var error_state = __webpack_require__(46128);
// EXTERNAL MODULE: ./src/components/common/loading-state.tsx
var loading_state = __webpack_require__(74430);
// EXTERNAL MODULE: ./src/components/common/badge.tsx
var badge = __webpack_require__(4763);
;// CONCATENATED MODULE: ./src/components/cache/cache-card.tsx


function formatSize(bytes) {
    if (bytes === 0) return "0 B";
    const units = [
        "B",
        "KB",
        "MB",
        "GB"
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / 1024 ** i).toFixed(1)} ${units[i]}`;
}
function formatDate(iso) {
    try {
        return new Date(iso).toLocaleString();
    } catch  {
        return iso;
    }
}
function kindVariant(kind) {
    switch(kind.toLowerCase()){
        case "build":
            return "success";
        case "dependency":
            return "info";
        case "artifact":
            return "info";
        default:
            return "default";
    }
}
function statusVariant(status) {
    switch(status){
        case "active":
            return "success";
        case "pending":
            return "warning";
        case "expired":
        case "evicted":
            return "error";
        default:
            return "default";
    }
}
function CacheCard({ entry }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "cache-card",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "cache-card-header",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                        className: "cache-card-key",
                        children: entry.key
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "cache-card-badges",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                                variant: kindVariant(entry.kind),
                                children: entry.kind
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                                variant: statusVariant(entry.status),
                                children: entry.status
                            }),
                            entry.immutable && /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                                variant: "info",
                                children: "immutable"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "cache-card-meta",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "cache-card-size",
                        children: formatSize(entry.size_bytes)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "cache-card-scope",
                        children: entry.scope
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "cache-card-id",
                        children: entry.cache_id
                    }),
                    entry.branch && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "cache-card-branch",
                        children: entry.branch
                    })
                ]
            }),
            entry.checksum && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "cache-card-checksum",
                children: entry.checksum
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "cache-card-footer",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "cache-card-access",
                        children: [
                            "accessed ",
                            entry.access_count,
                            " time",
                            entry.access_count !== 1 ? "s" : ""
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "cache-card-date",
                        children: formatDate(entry.created_at)
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/cache/cache-list.tsx






function CacheList() {
    const { data, isLoading, error } = useCacheEntries();
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(loading_state/* .LoadingState */.G, {
            message: "Loading cache entries..."
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(error_state/* .ErrorState */.W, {
            message: error.message
        });
    }
    if (!data || data.items.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(empty_state/* .EmptyState */.p, {
            title: "No cache entries",
            description: "Cache entries will appear here after builds use caching."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "cache-list",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "cache-list-header",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                    className: "cache-list-count",
                    children: [
                        data.total,
                        " cache ",
                        data.total !== 1 ? "entries" : "entry"
                    ]
                })
            }),
            data.items.map((entry)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CacheCard, {
                    entry: entry
                }, entry.cache_id))
        ]
    });
}

// EXTERNAL MODULE: ./src/components/layout/page-shell.tsx
var page_shell = __webpack_require__(63571);
;// CONCATENATED MODULE: ./src/routes/cache.tsx?tsr-split=component



function CacheRoute() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(page_shell/* .PageShell */.q, {
        title: "Cache",
        subtitle: "View cache entries and activity",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CacheList, {})
    });
}



},

};
