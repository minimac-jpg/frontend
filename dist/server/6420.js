export const __rspack_esm_id = 6420;
export const __rspack_esm_ids = [6420];
export const __webpack_modules__ = {
90975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ ProjectDetailRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useParams.js
var useParams = __webpack_require__(22679);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var useNavigate = __webpack_require__(45178);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/link.js + 1 modules
var esm_link = __webpack_require__(38639);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/book-open.mjs
var book_open = __webpack_require__(32853);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bug.mjs
var bug = __webpack_require__(44271);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/git-pull-request.mjs
var git_pull_request = __webpack_require__(80207);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/play.mjs
var play = __webpack_require__(69313);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/settings.mjs
var settings = __webpack_require__(36888);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.mjs
var search = __webpack_require__(73619);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bell.mjs
var bell = __webpack_require__(68612);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/building-2.mjs
var building_2 = __webpack_require__(94614);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/git-branch.mjs
var git_branch = __webpack_require__(43534);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.mjs
var chevron_down = __webpack_require__(23489);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/tags.mjs
var tags = __webpack_require__(36632);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/code.mjs
var code = __webpack_require__(36908);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/download.mjs
var download = __webpack_require__(83911);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
// EXTERNAL MODULE: ./src/components/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(77338);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(16479);
// EXTERNAL MODULE: ./src/components/ui/tooltip.tsx
var tooltip = __webpack_require__(18918);
// EXTERNAL MODULE: ./src/components/common/error-state.tsx
var error_state = __webpack_require__(46128);
// EXTERNAL MODULE: ./src/hooks/use-projects.ts
var use_projects = __webpack_require__(30028);
// EXTERNAL MODULE: ./src/components/ui/separator.tsx
var separator = __webpack_require__(73594);
// EXTERNAL MODULE: ./src/components/ui/textarea.tsx
var ui_textarea = __webpack_require__(57529);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(80828);
;// CONCATENATED MODULE: ./src/components/projects/project-settings-form.tsx









function ProjectSettingsForm({ project, onSuccess }) {
    const navigate = (0,useNavigate/* .useNavigate */.Z)();
    const { mutateAsync: updateProject, isPending, error } = (0,use_projects/* .useUpdateProject */.sS)();
    const { mutateAsync: deleteProject, isPending: isDeleting } = (0,use_projects/* .useDeleteProject */.eW)();
    const [name, setName] = (0,react.useState)(project.name);
    const [description, setDescription] = (0,react.useState)(project.description ?? "");
    const [validationError, setValidationError] = (0,react.useState)(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = (0,react.useState)(false);
    const [prSettings, setPrSettings] = (0,react.useState)([
        {
            key: "merge-commits",
            label: "Allow merge commits",
            description: "Enable merging with a merge commit",
            enabled: true
        },
        {
            key: "squash-merging",
            label: "Allow squash merging",
            description: "Combine all commits into a single commit when merging",
            enabled: true
        },
        {
            key: "rebase-merging",
            label: "Allow rebase merging",
            description: "Rebase commits onto the base branch when merging",
            enabled: false
        },
        {
            key: "update-branches",
            label: "Always suggest updating pull request branches",
            description: "Show an option to update the pull request branch if it is out of date",
            enabled: false
        },
        {
            key: "auto-merge",
            label: "Allow auto-merge",
            description: "Automatically merge a pull request when all required checks pass",
            enabled: true
        },
        {
            key: "delete-head",
            label: "Automatically delete head branches",
            description: "Delete the source branch after a pull request is merged",
            enabled: false
        }
    ]);
    const togglePrSetting = (key)=>{
        setPrSettings((prev)=>prev.map((s)=>s.key === key ? {
                    ...s,
                    enabled: !s.enabled
                } : s));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setValidationError(null);
        try {
            await updateProject({
                id: project.id,
                data: {
                    description: description.trim() || undefined
                }
            });
            onSuccess?.();
        } catch (err) {
        // error captured in mutation error
        }
    };
    const handleDelete = async ()=>{
        try {
            await deleteProject(project.id);
            navigate({
                to: "/projects"
            });
        } catch (err) {
        // error captured in mutation error
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-8",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                        className: "text-lg font-semibold tracking-tight mb-4",
                        children: "General"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                        onSubmit: handleSubmit,
                        noValidate: true,
                        className: "rounded-xl border bg-card p-6 space-y-5",
                        children: [
                            validationError && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive",
                                role: "alert",
                                children: validationError
                            }),
                            error && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive",
                                role: "alert",
                                children: error.message
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        htmlFor: "settings-name",
                                        className: "text-sm font-medium",
                                        children: "Project name"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                        id: "settings-name",
                                        value: name,
                                        onChange: (e)=>setName(e.target.value),
                                        disabled: true
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Project names cannot be changed."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        htmlFor: "settings-description",
                                        className: "text-sm font-medium",
                                        children: "Description"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_textarea/* .Textarea */.T, {
                                        id: "settings-description",
                                        value: description,
                                        onChange: (e)=>setDescription(e.target.value),
                                        disabled: isPending,
                                        rows: 3
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                type: "submit",
                                disabled: isPending,
                                children: isPending ? "Saving..." : "Save changes"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                        className: "text-lg font-semibold tracking-tight mb-4",
                        children: "Pull Requests"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "rounded-xl border bg-card p-6 space-y-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                        className: "text-sm font-medium text-muted-foreground uppercase tracking-wider",
                                        children: "Merge button"
                                    }),
                                    prSettings.slice(0, 3).map((setting)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "flex items-center justify-between gap-4 rounded-lg border border-transparent hover:bg-gray-200/90  -mx-2 px-2 py-2 cursor-pointer transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-sm font-medium",
                                                            children: setting.label
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: setting.description
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                    type: "button",
                                                    role: "switch",
                                                    "aria-checked": setting.enabled,
                                                    onClick: ()=>togglePrSetting(setting.key),
                                                    className: (0,utils.cn)("relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", setting.enabled ? "bg-primary" : "bg-input"),
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: (0,utils.cn)("pointer-events-none block size-4 rounded-full bg-background shadow-lg ring-0 transition-transform", setting.enabled ? "translate-x-4" : "translate-x-0")
                                                    })
                                                })
                                            ]
                                        }, setting.key))
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(separator/* .Separator */.w, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                        className: "text-sm font-medium text-muted-foreground uppercase tracking-wider",
                                        children: "Additional"
                                    }),
                                    prSettings.slice(3).map((setting)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "flex items-center justify-between gap-4 rounded-lg border border-transparent hover:bg-gray-200/90 -mx-2 px-2 py-2 cursor-pointer transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-sm font-medium",
                                                            children: setting.label
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: setting.description
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                    type: "button",
                                                    role: "switch",
                                                    "aria-checked": setting.enabled,
                                                    onClick: ()=>togglePrSetting(setting.key),
                                                    className: (0,utils.cn)("relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", setting.enabled ? "bg-primary" : "bg-input"),
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: (0,utils.cn)("pointer-events-none block size-4 rounded-full bg-background shadow-lg ring-0 transition-transform", setting.enabled ? "translate-x-4" : "translate-x-0")
                                                    })
                                                })
                                            ]
                                        }, setting.key))
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                        className: "text-lg font-semibold tracking-tight mb-4 text-destructive",
                        children: "Danger Zone"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "rounded-xl border border-destructive/20 bg-card p-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                        className: "text-sm font-medium",
                                        children: "Delete this project"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm text-muted-foreground mt-1",
                                        children: "Permanently delete this project and all its data. This action cannot be undone."
                                    })
                                ]
                            }),
                            showDeleteConfirm ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-sm font-medium text-destructive",
                                        children: "Are you sure?"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                        variant: "destructive",
                                        size: "sm",
                                        onClick: handleDelete,
                                        disabled: isDeleting,
                                        children: isDeleting ? "Deleting..." : "Yes, delete"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>setShowDeleteConfirm(false),
                                        children: "Cancel"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                variant: "destructive",
                                size: "sm",
                                onClick: ()=>setShowDeleteConfirm(true),
                                children: "Delete Project"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/routes/projects.$projectName.index.tsx?tsr-split=component












const branches = [
    {
        name: "main",
        isDefault: true
    },
    {
        name: "develop",
        isDefault: false
    },
    {
        name: "feature/new-ui",
        isDefault: false
    },
    {
        name: "feature/auth-flow",
        isDefault: false
    },
    {
        name: "fix/header-styles",
        isDefault: false
    },
    {
        name: "chore/deps-update",
        isDefault: false
    },
    {
        name: "refactor/api-layer",
        isDefault: false
    },
    {
        name: "docs/readme-update",
        isDefault: false
    },
    {
        name: "feature/notifications",
        isDefault: false
    },
    {
        name: "fix/mobile-nav",
        isDefault: false
    }
];
const projects_$projectName_indextsr_split_component_tags = [
    "v2.0.0",
    "v1.5.0",
    "v1.4.2",
    "v1.4.1",
    "v1.3.0",
    "v1.2.0",
    "v1.1.0",
    "v1.0.0",
    "v0.9.0",
    "v0.8.0"
];
const DISPLAY_LIMIT = 7;
const tabs = [
    {
        id: "code",
        label: "Code",
        icon: book_open/* ["default"] */.A
    },
    {
        id: "issues",
        label: "Issues",
        icon: bug/* ["default"] */.A
    },
    {
        id: "pulls",
        label: "Pull Requests",
        icon: git_pull_request/* ["default"] */.A
    },
    {
        id: "builds",
        label: "Builds",
        icon: play/* ["default"] */.A
    },
    {
        id: "settings",
        label: "Settings",
        icon: settings/* ["default"] */.A
    }
];
function ProjectDetailRoute() {
    const { projectName } = (0,useParams/* .useParams */.g)({
        from: "/projects/$projectName"
    });
    const navigate = (0,useNavigate/* .useNavigate */.Z)();
    const { data, isLoading, isError } = (0,use_projects/* .useProjects */.YK)();
    const project = data?.projects.find((p)=>p.name === projectName);
    const [activeTab, setActiveTab] = (0,react.useState)("code");
    const [branchTab, setBranchTab] = (0,react.useState)("branches");
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
            className: "p-6 text-sm text-muted-foreground",
            children: "Loading project…"
        });
    }
    if (isError) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(error_state/* .ErrorState */.W, {
            message: "Failed to load project"
        });
    }
    if (!project) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(error_state/* .ErrorState */.W, {
            message: "Project not found"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "border-b",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-2 text-sm text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_link/* .Link */.N_, {
                                        to: "/projects",
                                        className: "hover:text-foreground transition-colors",
                                        children: "Projects"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "/"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-foreground font-medium",
                                        children: project.name
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                id: "projects-nav",
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative w-48",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(search/* ["default"] */.A, {
                                                className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                placeholder: "Search repositories...",
                                                className: "pl-9 h-9"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* .TooltipProvider */.Bc, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* .Tooltip */.m_, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipTrigger */.k$, {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                            variant: "ghost",
                                                            size: "icon-sm",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(bug/* ["default"] */.A, {
                                                                className: "size-4"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipContent */.ZI, {
                                                        children: "All Issues"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* .Tooltip */.m_, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipTrigger */.k$, {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                            variant: "ghost",
                                                            size: "icon-sm",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(git_pull_request/* ["default"] */.A, {
                                                                className: "size-4"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipContent */.ZI, {
                                                        children: "All Pull Requests"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* .Tooltip */.m_, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipTrigger */.k$, {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                            variant: "ghost",
                                                            size: "icon-sm",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(bell/* ["default"] */.A, {
                                                                className: "size-4"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipContent */.ZI, {
                                                        children: "Notifications"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* .Tooltip */.m_, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipTrigger */.k$, {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                            variant: "ghost",
                                                            size: "icon-sm",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(settings/* ["default"] */.A, {
                                                                className: "size-4"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipContent */.ZI, {
                                                        children: "Settings"
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
                        className: "flex items-center gap-3 mb-4 mt-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex size-10 items-center justify-center rounded-lg border bg-muted",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(building_2/* ["default"] */.A, {
                                    className: "size-5 text-muted-foreground"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                                className: "text-xl font-semibold tracking-tight",
                                                children: project.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium text-muted-foreground",
                                                children: "Private"
                                            })
                                        ]
                                    }),
                                    project.description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm text-muted-foreground mt-0.5",
                                        children: project.description
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "border-b",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
                    className: "flex gap-0 -mb-px",
                    children: tabs.map((tab)=>{
                        const isActive = activeTab === tab.id;
                        const Icon = tab.icon;
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            type: "button",
                            onClick: ()=>setActiveTab(tab.id),
                            className: (0,utils.cn)("flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors", isActive ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                                    className: "size-4"
                                }),
                                tab.label
                            ]
                        }, tab.id);
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "py-6 space-y-4",
                children: [
                    activeTab === "code" && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenu */.rI, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuTrigger */.ty, {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(git_branch/* ["default"] */.A, {
                                                            className: "size-4"
                                                        }),
                                                        "main",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* ["default"] */.A, {
                                                            className: "size-3"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuContent */.SQ, {
                                                className: "w-72 p-0",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "p-2 pb-0",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(search/* ["default"] */.A, {
                                                                    className: "absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                                    placeholder: "Find a branch or tag...",
                                                                    className: "pl-8 h-8"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex border-b px-2 pt-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                type: "button",
                                                                onClick: ()=>setBranchTab("branches"),
                                                                className: (0,utils.cn)("flex-1 pb-2.5 text-sm font-medium text-center border-b-2 transition-colors -mb-0.5", branchTab === "branches" ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
                                                                children: "Branches"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                type: "button",
                                                                onClick: ()=>setBranchTab("tags"),
                                                                className: (0,utils.cn)("flex-1 pb-2.5 text-sm font-medium text-center border-b-2 transition-colors -mb-0.5", branchTab === "tags" ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
                                                                children: "Tags"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "p-1.5 max-h-72 overflow-y-auto",
                                                        children: branchTab === "branches" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                            children: [
                                                                branches.slice(0, DISPLAY_LIMIT).map((b)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuItem */._2, {
                                                                        className: "py-2",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "flex items-center justify-between w-full gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "truncate",
                                                                                    children: b.name
                                                                                }),
                                                                                b.isDefault && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "shrink-0 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary",
                                                                                    children: "default"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }, b.name)),
                                                                branches.length > DISPLAY_LIMIT && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuSeparator */.mB, {}),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuItem */._2, {
                                                                            className: "justify-center text-primary font-medium gap-2",
                                                                            onClick: ()=>navigate({
                                                                                    to: "/projects/$projectName/branches",
                                                                                    params: {
                                                                                        projectName
                                                                                    }
                                                                                }),
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(git_branch/* ["default"] */.A, {
                                                                                    className: "size-4 shrink-0"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    children: "View all branches"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                            children: [
                                                                projects_$projectName_indextsr_split_component_tags.slice(0, DISPLAY_LIMIT).map((t)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuItem */._2, {
                                                                        className: "py-2",
                                                                        children: t
                                                                    }, t)),
                                                                projects_$projectName_indextsr_split_component_tags.length > DISPLAY_LIMIT && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuSeparator */.mB, {}),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuItem */._2, {
                                                                            className: "justify-center text-primary font-medium gap-2",
                                                                            onClick: ()=>navigate({
                                                                                    to: "/projects/$projectName/tags",
                                                                                    params: {
                                                                                        projectName
                                                                                    }
                                                                                }),
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tags/* ["default"] */.A, {
                                                                                    className: "size-4 shrink-0"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    children: "View all tags"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "gap-1.5",
                                        onClick: ()=>navigate({
                                                to: "/projects/$projectName/branches",
                                                params: {
                                                    projectName
                                                }
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(git_branch/* ["default"] */.A, {
                                                className: "size-4"
                                            }),
                                            "18 Branches"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "gap-1.5",
                                        onClick: ()=>navigate({
                                                to: "/projects/$projectName/tags",
                                                params: {
                                                    projectName
                                                }
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(tags/* ["default"] */.A, {
                                                className: "size-4"
                                            }),
                                            "20 Tags"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex-1"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative w-64",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(search/* ["default"] */.A, {
                                                className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                placeholder: "Search code...",
                                                className: "pl-9 h-9"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenu */.rI, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuTrigger */.ty, {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(code/* ["default"] */.A, {
                                                            className: "size-4"
                                                        }),
                                                        "Clone",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* ["default"] */.A, {
                                                            className: "size-3"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuContent */.SQ, {
                                                align: "end",
                                                className: "w-80",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuLabel */.lp, {
                                                        children: "Clone"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuItem */._2, {
                                                        className: "flex-col items-start gap-0.5 py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "HTTPS"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                className: "font-mono text-xs",
                                                                children: [
                                                                    "https://github.com/user/",
                                                                    project.name,
                                                                    ".git"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuItem */._2, {
                                                        className: "flex-col items-start gap-0.5 py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "SSH"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                className: "font-mono text-xs",
                                                                children: [
                                                                    "git@github.com:user/",
                                                                    project.name,
                                                                    ".git"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuSeparator */.mB, {}),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuItem */._2, {
                                                        className: "gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(download/* ["default"] */.A, {
                                                                className: "size-4"
                                                            }),
                                                            "Download ZIP"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "rounded-xl border bg-card",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "border-b px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(book_open/* ["default"] */.A, {
                                                className: "size-4"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "font-medium text-foreground",
                                                children: "README"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "px-6 py-8 text-sm text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                className: "text-xl font-semibold text-foreground mb-2",
                                                children: project.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "mb-4",
                                                children: project.description || "No description provided."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "rounded-lg border border-dashed border-muted-foreground/30 p-6 text-center",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    children: "Get started by adding a README file to your repository."
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    activeTab === "issues" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "rounded-xl border border-dashed border-muted-foreground/30 p-12 text-center text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(bug/* ["default"] */.A, {
                                className: "size-8 mx-auto mb-3 text-muted-foreground/50"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "font-medium text-foreground mb-1",
                                children: "No issues yet"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                children: "Issues will appear here once created."
                            })
                        ]
                    }),
                    activeTab === "pulls" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "rounded-xl border border-dashed border-muted-foreground/30 p-12 text-center text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(git_pull_request/* ["default"] */.A, {
                                className: "size-8 mx-auto mb-3 text-muted-foreground/50"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "font-medium text-foreground mb-1",
                                children: "No pull requests yet"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                children: "Pull requests will appear here once created."
                            })
                        ]
                    }),
                    activeTab === "builds" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "rounded-xl border border-dashed border-muted-foreground/30 p-12 text-center text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(play/* ["default"] */.A, {
                                className: "size-8 mx-auto mb-3 text-muted-foreground/50"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "font-medium text-foreground mb-1",
                                children: "No builds yet"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                children: "Builds will appear here once you run a pipeline."
                            })
                        ]
                    }),
                    activeTab === "settings" && /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectSettingsForm, {
                        project: project
                    })
                ]
            })
        ]
    });
}



},

};
