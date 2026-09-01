export const __rspack_esm_id = 7859;
export const __rspack_esm_ids = [7859];
export const __webpack_modules__ = {
41710(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ SecretsRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.mjs
var icons_search = __webpack_require__(73619);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/plus.mjs
var plus = __webpack_require__(44207);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/star.mjs
var star = __webpack_require__(37887);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/folder-closed.mjs
var folder_closed = __webpack_require__(4812);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/eye-off.mjs
var eye_off = __webpack_require__(35090);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/eye.mjs
var eye = __webpack_require__(46742);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/pencil.mjs
var pencil = __webpack_require__(30772);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trash-2.mjs
var trash_2 = __webpack_require__(66838);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./src/components/common/empty-state.tsx
var empty_state = __webpack_require__(28425);
// EXTERNAL MODULE: ./src/components/common/error-state.tsx
var error_state = __webpack_require__(46128);
// EXTERNAL MODULE: ./src/components/common/loading-state.tsx
var loading_state = __webpack_require__(74430);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.mjs
var loader_circle = __webpack_require__(67255);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
// EXTERNAL MODULE: ./src/components/ui/combobox.tsx + 1 modules
var combobox = __webpack_require__(21822);
// EXTERNAL MODULE: ./src/components/ui/dialog.tsx
var dialog = __webpack_require__(70355);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(16479);
// EXTERNAL MODULE: ./src/hooks/use-secrets.ts + 1 modules
var use_secrets = __webpack_require__(72566);
;// CONCATENATED MODULE: ./src/components/secrets/secret-create-form.tsx








function SecretCreateForm({ onSuccess, onCancel, folders = [], projects = [] }) {
    const [name, setName] = (0,react.useState)("");
    const [value, setValue] = (0,react.useState)("");
    const [confirmValue, setConfirmValue] = (0,react.useState)("");
    const [folder, setFolder] = (0,react.useState)(null);
    const [project, setProject] = (0,react.useState)(null);
    const [active, setActive] = (0,react.useState)(true);
    const [showValue, setShowValue] = (0,react.useState)(false);
    const createMutation = (0,use_secrets/* .useCreateSecret */.w9)();
    const valueMismatch = value !== confirmValue && confirmValue.length > 0;
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!name.trim() || !value.trim() || value !== confirmValue) return;
        createMutation.mutate({
            name: name.trim(),
            kind: active ? "active" : "disabled",
            value: value.trim(),
            folder: folder ?? undefined,
            project: project ?? undefined
        }, {
            onSuccess
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "grid gap-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        htmlFor: "secret-name",
                        className: "text-sm font-medium",
                        children: "Name *"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                        id: "secret-name",
                        value: name,
                        onChange: (e)=>setName(e.target.value),
                        placeholder: "e.g., GITHUB_TOKEN",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        htmlFor: "secret-value",
                        className: "text-sm font-medium",
                        children: "Value *"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                id: "secret-value",
                                type: showValue ? "text" : "password",
                                value: value,
                                onChange: (e)=>setValue(e.target.value),
                                placeholder: "Enter secret value",
                                required: true,
                                className: "pr-9"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                type: "button",
                                onClick: ()=>setShowValue(!showValue),
                                className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                                tabIndex: -1,
                                children: showValue ? /*#__PURE__*/ (0,jsx_runtime.jsx)(eye_off/* ["default"] */.A, {
                                    className: "size-4"
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(eye/* ["default"] */.A, {
                                    className: "size-4"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        htmlFor: "secret-confirm",
                        className: "text-sm font-medium",
                        children: "Confirm Value *"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                        id: "secret-confirm",
                        type: "password",
                        value: confirmValue,
                        onChange: (e)=>setConfirmValue(e.target.value),
                        placeholder: "Re-enter secret value",
                        required: true
                    }),
                    valueMismatch && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-xs text-destructive",
                        children: "Values do not match"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid gap-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                className: "text-sm font-medium",
                                children: "Folder"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(combobox/* .Combobox */.G3, {
                                items: folders,
                                value: folder,
                                onValueChange: setFolder,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(combobox/* .ComboboxInput */.oK, {
                                        placeholder: "Select folder"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(combobox/* .ComboboxContent */.h5, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(combobox/* .ComboboxEmpty */.$U, {
                                                children: "No folders found."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(combobox/* .ComboboxList */.ex, {
                                                children: (item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(combobox/* .ComboboxItem */.x4, {
                                                        value: item,
                                                        children: item
                                                    }, item)
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid gap-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                className: "text-sm font-medium",
                                children: "Project"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(combobox/* .Combobox */.G3, {
                                items: projects,
                                value: project,
                                onValueChange: setProject,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(combobox/* .ComboboxInput */.oK, {
                                        placeholder: "Select project"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(combobox/* .ComboboxContent */.h5, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(combobox/* .ComboboxEmpty */.$U, {
                                                children: "No projects found."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(combobox/* .ComboboxList */.ex, {
                                                children: (item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(combobox/* .ComboboxItem */.x4, {
                                                        value: item,
                                                        children: item
                                                    }, item)
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between rounded-lg border p-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-sm font-medium",
                                children: "Active"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Secret can be used in pipelines"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        type: "button",
                        role: "switch",
                        "aria-checked": active,
                        onClick: ()=>setActive(!active),
                        className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${active ? "bg-primary" : "bg-input"}`,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: `pointer-events-none inline-block size-5 rounded-full bg-white shadow-sm ring-0 transition-transform ${active ? "translate-x-5" : "translate-x-0"}`
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogFooter */.Es, {
                className: "pt-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                        type: "button",
                        variant: "outline",
                        onClick: onCancel,
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                        type: "submit",
                        disabled: createMutation.isPending || !name.trim() || !value.trim() || value !== confirmValue,
                        children: [
                            createMutation.isPending && /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* ["default"] */.A, {
                                className: "size-4 animate-spin"
                            }),
                            createMutation.isPending ? "Creating..." : "Create Secret"
                        ]
                    })
                ]
            }),
            createMutation.isError && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                className: "text-sm text-destructive",
                role: "alert",
                children: [
                    "Failed to create secret: ",
                    createMutation.error.message
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/secrets/secret-edit-form.tsx
var secret_edit_form = __webpack_require__(29658);
;// CONCATENATED MODULE: ./src/routes/secrets.index.tsx?tsr-split=component












const statusColors = {
    active: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    disabled: "bg-amber-500/10 text-amber-600 dark:text-amber-400"
};
const statusLabels = {
    active: "Active",
    disabled: "Inactive"
};
function SecretsRoute() {
    const { data, isLoading, error } = (0,use_secrets/* .useSecrets */.Nc)();
    const { mutateAsync: deleteSecret, isPending: isDeleting } = (0,use_secrets/* .useDeleteSecret */.jQ)();
    const [showCreate, setShowCreate] = (0,react.useState)(false);
    const [editingSecret, setEditingSecret] = (0,react.useState)(null);
    const [deletingSecret, setDeletingSecret] = (0,react.useState)(null);
    const [search, setSearch] = (0,react.useState)("");
    const [group, setGroup] = (0,react.useState)({
        type: "all"
    });
    const [showValue, setShowValue] = (0,react.useState)(new Set());
    const [favorites, setFavorites] = (0,react.useState)(new Set());
    const toggleShowValue = (id)=>{
        setShowValue((prev)=>{
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };
    const toggleFavorite = (id)=>{
        setFavorites((prev)=>{
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };
    const secrets = data?.items ?? [];
    const folders = (0,react.useMemo)(()=>{
        const set = new Set();
        secrets.forEach((s)=>{
            if (s.folder) set.add(s.folder);
        });
        return Array.from(set).sort();
    }, [
        secrets
    ]);
    const projects = (0,react.useMemo)(()=>{
        const set = new Set();
        secrets.forEach((s)=>{
            if (s.project) set.add(s.project);
        });
        return Array.from(set).sort();
    }, [
        secrets
    ]);
    const filtered = (0,react.useMemo)(()=>{
        let result = secrets;
        // group filter
        if (group.type === "favorites") {
            result = result.filter((s)=>favorites.has(s.id));
        } else if (group.type === "folder") {
            result = result.filter((s)=>s.folder === group.value);
        } else if (group.type === "project") {
            result = result.filter((s)=>s.project === group.value);
        }
        // search
        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter((s)=>s.name.toLowerCase().includes(q) || (s.folder?.toLowerCase() ?? "").includes(q) || (s.project?.toLowerCase() ?? "").includes(q));
        }
        return result;
    }, [
        secrets,
        group,
        search,
        favorites
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col gap-6 p-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                            className: "text-2xl font-semibold tracking-tight",
                            children: "Secrets"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "mt-1 text-sm text-muted-foreground",
                            children: "Manage secrets for your CI/CD pipelines"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(loading_state/* .LoadingState */.G, {
                    message: "Loading secrets..."
                })
            ]
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col gap-6 p-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                            className: "text-2xl font-semibold tracking-tight",
                            children: "Secrets"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "mt-1 text-sm text-muted-foreground",
                            children: "Manage secrets for your CI/CD pipelines"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(error_state/* .ErrorState */.W, {
                    message: "Failed to load secrets"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: "text-2xl font-semibold tracking-tight",
                        children: "Secrets"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "mt-1 text-sm text-muted-foreground",
                        children: "Manage secrets for your CI/CD pipelines"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative flex-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_search/* ["default"] */.A, {
                                className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                placeholder: "Search secrets...",
                                className: "pl-9",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .Dialog */.lG, {
                        open: showCreate,
                        onOpenChange: setShowCreate,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTrigger */.zM, {
                                asChild: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(plus/* ["default"] */.A, {
                                            className: "size-4"
                                        }),
                                        "Create Secret"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogContent */.Cf, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogHeader */.c7, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTitle */.L3, {
                                                children: "Create Secret"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogDescription */.rr, {
                                                children: "Add a new secret to your CI/CD pipelines."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SecretCreateForm, {
                                        folders: folders,
                                        projects: projects,
                                        onSuccess: ()=>setShowCreate(false),
                                        onCancel: ()=>setShowCreate(false)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex gap-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("aside", {
                        className: "hidden w-52 shrink-0 lg:block",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    onClick: ()=>setGroup({
                                            type: "all"
                                        }),
                                    className: `flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${group.type === "all" ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:bg-gray-200/90 hover:text-foreground"}`,
                                    children: [
                                        "All Secrets",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "ml-auto text-xs text-muted-foreground",
                                            children: secrets.length
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    onClick: ()=>setGroup({
                                            type: "favorites"
                                        }),
                                    className: `flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${group.type === "favorites" ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:bg-gray-200/90 hover:text-foreground"}`,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(star/* ["default"] */.A, {
                                            className: "size-4"
                                        }),
                                        "Favorites",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "ml-auto text-xs text-muted-foreground",
                                            children: favorites.size
                                        })
                                    ]
                                }),
                                folders.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "pt-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "mb-1 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
                                            children: "Folders"
                                        }),
                                        folders.map((f)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                onClick: ()=>setGroup({
                                                        type: "folder",
                                                        value: f
                                                    }),
                                                className: `flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${group.type === "folder" && group.value === f ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:bg-gray-200/90 hover:text-foreground"}`,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(folder_closed/* ["default"] */.A, {
                                                        className: "size-4"
                                                    }),
                                                    f,
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "ml-auto text-xs text-muted-foreground",
                                                        children: secrets.filter((s)=>s.folder === f).length
                                                    })
                                                ]
                                            }, f))
                                    ]
                                }),
                                projects.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "pt-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "mb-1 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
                                            children: "Projects"
                                        }),
                                        projects.map((p)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                onClick: ()=>setGroup({
                                                        type: "project",
                                                        value: p
                                                    }),
                                                className: `flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${group.type === "project" && group.value === p ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:bg-gray-200/90 hover:text-foreground"}`,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(folder_closed/* ["default"] */.A, {
                                                        className: "size-4"
                                                    }),
                                                    p,
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "ml-auto text-xs text-muted-foreground",
                                                        children: secrets.filter((s)=>s.project === p).length
                                                    })
                                                ]
                                            }, p))
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "min-w-0 flex-1",
                        children: filtered.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(empty_state/* .EmptyState */.p, {
                            title: search ? "No matching secrets" : "No secrets",
                            description: search ? "Try a different search term or clear the filter." : "Create your first secret to get started.",
                            action: !search ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                onClick: ()=>setShowCreate(true),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(plus/* ["default"] */.A, {
                                        className: "size-4"
                                    }),
                                    "Create Secret"
                                ]
                            }) : undefined
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "overflow-hidden rounded-xl border bg-card",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                                className: "w-full text-sm",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                            className: "border-b bg-muted/30 text-left text-xs font-medium text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                    className: "w-8 px-4 py-3"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                    className: "px-4 py-3",
                                                    children: "Name"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                    className: "px-4 py-3",
                                                    children: "Value"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                    className: "px-4 py-3",
                                                    children: "Folder"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                    className: "px-4 py-3",
                                                    children: "Project"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                    className: "px-4 py-3",
                                                    children: "Status"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                    className: "w-24 px-4 py-3 text-right",
                                                    children: "Actions"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                                        children: filtered.map((secret)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                className: "border-b last:border-0 hover:bg-gray-200/90",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                        className: "px-4 py-3",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                            onClick: ()=>toggleFavorite(secret.id),
                                                            className: "text-muted-foreground hover:text-amber-500",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(star/* ["default"] */.A, {
                                                                className: `size-4 ${favorites.has(secret.id) ? "fill-amber-500 text-amber-500" : ""}`
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                        className: "px-4 py-3 font-medium",
                                                        children: secret.name
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                        className: "px-4 py-3",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                                                    className: "rounded bg-muted px-2 py-0.5 font-mono text-xs",
                                                                    children: showValue.has(secret.id) ? secret.value ?? "—" : "•".repeat(24)
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                    onClick: ()=>toggleShowValue(secret.id),
                                                                    className: "text-muted-foreground hover:text-foreground",
                                                                    children: showValue.has(secret.id) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(eye_off/* ["default"] */.A, {
                                                                        className: "size-3.5"
                                                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(eye/* ["default"] */.A, {
                                                                        className: "size-3.5"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                        className: "px-4 py-3 text-muted-foreground",
                                                        children: secret.folder ?? "—"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                        className: "px-4 py-3 text-muted-foreground",
                                                        children: secret.project ?? "—"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                        className: "px-4 py-3",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: `inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${statusColors[secret.status] ?? statusColors.disabled}`,
                                                            children: statusLabels[secret.status] ?? secret.status
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                        className: "px-4 py-3",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex justify-end gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .Dialog */.lG, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTrigger */.zM, {
                                                                            asChild: true,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                                                variant: "ghost",
                                                                                size: "icon-xs",
                                                                                onClick: ()=>setEditingSecret(secret),
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(pencil/* ["default"] */.A, {
                                                                                    className: "size-3.5"
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogContent */.Cf, {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogHeader */.c7, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTitle */.L3, {
                                                                                            children: "Edit Secret"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogDescription */.rr, {
                                                                                            children: [
                                                                                                "Update ",
                                                                                                secret.name,
                                                                                                "."
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                editingSecret?.id === secret.id && /*#__PURE__*/ (0,jsx_runtime.jsx)(secret_edit_form/* .SecretEditForm */.x, {
                                                                                    secret: editingSecret,
                                                                                    folders: folders,
                                                                                    projects: projects,
                                                                                    onSuccess: ()=>setEditingSecret(null)
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .Dialog */.lG, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTrigger */.zM, {
                                                                            asChild: true,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                                                variant: "ghost",
                                                                                size: "icon-xs",
                                                                                className: "text-destructive hover:text-destructive",
                                                                                onClick: ()=>setDeletingSecret(secret),
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(trash_2/* ["default"] */.A, {
                                                                                    className: "size-3.5"
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogContent */.Cf, {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogHeader */.c7, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTitle */.L3, {
                                                                                            children: "Delete Secret"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogDescription */.rr, {
                                                                                            children: [
                                                                                                "Permanently delete",
                                                                                                " ",
                                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                    className: "font-medium text-foreground",
                                                                                                    children: deletingSecret?.name
                                                                                                }),
                                                                                                "? This action cannot be undone."
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogFooter */.Es, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogClose */.HM, {
                                                                                            asChild: true,
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                                                                variant: "outline",
                                                                                                children: "Cancel"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                                                            variant: "destructive",
                                                                                            disabled: isDeleting,
                                                                                            onClick: async ()=>{
                                                                                                if (!deletingSecret) return;
                                                                                                await deleteSecret(deletingSecret.id);
                                                                                                setDeletingSecret(null);
                                                                                            },
                                                                                            children: isDeleting ? "Deleting..." : "Delete"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }, secret.id))
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}



},

};
