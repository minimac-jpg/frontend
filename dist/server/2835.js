export const __rspack_esm_id = 2835;
export const __rspack_esm_ids = [2835];
export const __webpack_modules__ = {
91310(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ CredentialsRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useQuery.js + 6 modules
var useQuery = __webpack_require__(5375);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(43653);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useMutation.js + 1 modules
var useMutation = __webpack_require__(19390);
// EXTERNAL MODULE: ./src/lib/api/client.ts
var client = __webpack_require__(59943);
;// CONCATENATED MODULE: ./src/api/credentials.ts

const CREDENTIAL_STATUSES = new Set([
    "active",
    "disabled",
    "rotating",
    "expired",
    "revoked"
]);
function scopeLabel(scope) {
    if (!scope) return "global";
    switch(scope.type){
        case "organization":
            return `organization:${scope.organization_id ?? ""}`;
        case "project":
            return `project:${scope.project_id ?? ""}`;
        case "repository":
            return `repository:${scope.project_id ?? ""}:${scope.repository_id ?? ""}`;
        case "environment":
            return `environment:${scope.project_id ?? ""}:${scope.environment ?? ""}`;
        case "pipeline":
            return `pipeline:${scope.project_id ?? ""}:${scope.pipeline_id ?? ""}`;
        default:
            return "global";
    }
}
function mapCredential(dto) {
    return {
        id: dto.id,
        name: dto.name,
        kind: dto.kind,
        status: dto.status,
        scope: scopeLabel(dto.scope),
        label: dto.label ?? "",
        description: dto.description ?? null,
        tags: dto.tags ?? [],
        owner: dto.owner_user_id ?? dto.owner_service_name ?? "",
        created_at: dto.created_at,
        updated_at: dto.updated_at,
        expires_at: dto.expires_at ?? null
    };
}
async function listCredentials(_limit = 20) {
    const data = await (0,client/* .apiGet */.Vg)("/api/credentials");
    const credentials = (data.credentials ?? []).map(mapCredential);
    return {
        items: credentials,
        total: data.total ?? credentials.length
    };
}
async function getCredential(id) {
    const data = await apiGet(`/api/credentials/${encodeURIComponent(id)}`);
    return mapCredential(data.credential);
}
async function createCredential(data) {
    const created = await (0,client/* .apiPost */.$P)("/api/credentials", {
        name: data.name,
        kind: data.kind,
        label: data.label,
        description: data.description,
        tags: data.tags
    });
    return mapCredential(created.credential);
}
async function updateCredential(id, data) {
    const updated = await apiPatch(`/api/credentials/${encodeURIComponent(id)}`, {
        name: data.name,
        label: data.label,
        description: data.description,
        tags: data.tags,
        status: data.status && CREDENTIAL_STATUSES.has(data.status) ? data.status : undefined
    });
    return mapCredential(updated.credential);
}
async function deleteCredential(id) {
    await apiDelete(`/api/credentials/${encodeURIComponent(id)}`);
}
async function rotateCredential(id, reason) {
    const data = await apiPost(`/api/credentials/${encodeURIComponent(id)}/rotate`, {
        reason: reason || "manual rotation"
    });
    return mapCredential(data.credential);
}
async function getCredentialUsage(id) {
    const data = await apiGet(`/api/credentials/${encodeURIComponent(id)}/usage`);
    return data.usage ?? [];
}

// EXTERNAL MODULE: ./src/state/auth-store.tsx
var auth_store = __webpack_require__(2639);
;// CONCATENATED MODULE: ./src/hooks/use-credentials.ts



function useCredentials(limit = 20) {
    const { isAuthenticated } = (0,auth_store/* .useAuthStore */.n)();
    return (0,useQuery/* .useQuery */.I)({
        queryKey: [
            "credentials",
            limit
        ],
        queryFn: ()=>listCredentials(limit),
        enabled: isAuthenticated
    });
}
function useCreateCredential() {
    const queryClient = (0,QueryClientProvider/* .useQueryClient */.jE)();
    return (0,useMutation/* .useMutation */.n)({
        mutationFn: (data)=>createCredential(data),
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "credentials"
                ]
            });
        }
    });
}

;// CONCATENATED MODULE: ./src/components/credentials/credential-create-form.tsx



function CredentialCreateForm({ onSuccess, onCancel }) {
    const [name, setName] = (0,react.useState)("");
    const [kind, setKind] = (0,react.useState)("token");
    const [label, setLabel] = (0,react.useState)("");
    const [description, setDescription] = (0,react.useState)("");
    const [tags, setTags] = (0,react.useState)("");
    const createMutation = useCreateCredential();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!name.trim()) return;
        const tagsList = tags.split(",").map((t)=>t.trim()).filter((t)=>t.length > 0);
        createMutation.mutate({
            name: name.trim(),
            kind,
            label: label.trim() || undefined,
            description: description.trim() || undefined,
            tags: tagsList.length > 0 ? tagsList : undefined
        }, {
            onSuccess: ()=>{
                onSuccess();
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        className: "form credential-create-form",
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        htmlFor: "cred-name",
                        children: "Name *"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                        id: "cred-name",
                        type: "text",
                        value: name,
                        onChange: (e)=>setName(e.target.value),
                        placeholder: "e.g., github-ci-token",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        htmlFor: "cred-kind",
                        children: "Kind *"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                        id: "cred-kind",
                        value: kind,
                        onChange: (e)=>setKind(e.target.value),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                value: "token",
                                children: "Token"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                value: "ssh_key",
                                children: "SSH Key"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                value: "oidc",
                                children: "OIDC"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                value: "cloud_role",
                                children: "Cloud Role"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                value: "docker_registry",
                                children: "Docker Registry"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                value: "kubernetes_service_account",
                                children: "K8s Service Account"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                value: "username_password",
                                children: "Username/Password"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                value: "generic",
                                children: "Generic"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        htmlFor: "cred-label",
                        children: "Label"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                        id: "cred-label",
                        type: "text",
                        value: label,
                        onChange: (e)=>setLabel(e.target.value),
                        placeholder: "Display label"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        htmlFor: "cred-description",
                        children: "Description"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                        id: "cred-description",
                        value: description,
                        onChange: (e)=>setDescription(e.target.value),
                        placeholder: "What this credential is for",
                        rows: 3
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        htmlFor: "cred-tags",
                        children: "Tags (comma-separated)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                        id: "cred-tags",
                        type: "text",
                        value: tags,
                        onChange: (e)=>setTags(e.target.value),
                        placeholder: "production, ci, deploy"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "form-actions",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        type: "button",
                        className: "button",
                        onClick: onCancel,
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        type: "submit",
                        className: "button button-primary",
                        disabled: createMutation.isPending || !name.trim(),
                        children: createMutation.isPending ? "Creating..." : "Create Credential"
                    })
                ]
            }),
            createMutation.isError && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "error-state",
                role: "alert",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                    className: "error-state-message",
                    children: [
                        "Failed to create credential: ",
                        createMutation.error.message
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/common/empty-state.tsx
var empty_state = __webpack_require__(28425);
// EXTERNAL MODULE: ./src/components/common/error-state.tsx
var error_state = __webpack_require__(46128);
// EXTERNAL MODULE: ./src/components/common/loading-state.tsx
var loading_state = __webpack_require__(74430);
;// CONCATENATED MODULE: ./src/components/credentials/credential-card.tsx

function statusColor(status) {
    switch(status){
        case "active":
            return "badge-success";
        case "disabled":
            return "badge-warning";
        case "expired":
            return "badge-danger";
        case "revoked":
            return "badge-neutral";
        case "rotating":
            return "badge-info";
        default:
            return "badge-neutral";
    }
}
function kindLabel(kind) {
    switch(kind){
        case "token":
            return "Token";
        case "ssh_key":
            return "SSH Key";
        case "oidc":
            return "OIDC";
        case "cloud_role":
            return "Cloud Role";
        case "docker_registry":
            return "Docker Registry";
        case "kubernetes_service_account":
            return "K8s Service Account";
        case "username_password":
            return "Username/Password";
        case "generic":
            return "Generic";
        default:
            return kind;
    }
}
function CredentialCard({ credential }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "card credential-card",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "card-header",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: `badge ${statusColor(credential.status)}`,
                        children: credential.status
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "badge badge-outline",
                        children: kindLabel(credential.kind)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                className: "card-title",
                children: credential.name
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "card-subtitle",
                children: credential.label
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "card-meta",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            "Scope: ",
                            credential.scope
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            "Updated: ",
                            new Date(credential.updated_at).toLocaleDateString()
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/credentials/credential-list.tsx






function CredentialList({ onCreateClick }) {
    const { data, isLoading, error } = useCredentials();
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(loading_state/* .LoadingState */.G, {
            message: "Loading credentials..."
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(error_state/* .ErrorState */.W, {
            message: "Failed to load credentials"
        });
    }
    if (!data || data.items.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(empty_state/* .EmptyState */.p, {
            title: "No credentials",
            description: "Create your first credential reference to get started.",
            action: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                className: "button button-primary",
                onClick: onCreateClick,
                children: "Create Credential"
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "credential-list",
        children: data.items.map((credential)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CredentialCard, {
                credential: credential
            }, credential.id))
    });
}

// EXTERNAL MODULE: ./src/components/layout/page-shell.tsx
var page_shell = __webpack_require__(63571);
;// CONCATENATED MODULE: ./src/routes/credentials.tsx?tsr-split=component





function CredentialsRoute() {
    const [showCreateForm, setShowCreateForm] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(page_shell/* .PageShell */.q, {
        title: "Credentials",
        subtitle: "Manage credential references for your project",
        actions: !showCreateForm ? /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
            className: "button button-primary",
            onClick: ()=>setShowCreateForm(true),
            children: "Create Credential"
        }) : undefined,
        children: showCreateForm ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CredentialCreateForm, {
            onSuccess: ()=>setShowCreateForm(false),
            onCancel: ()=>setShowCreateForm(false)
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(CredentialList, {
            onCreateClick: ()=>setShowCreateForm(true)
        })
    });
}



},

};
