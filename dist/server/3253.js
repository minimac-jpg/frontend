export const __rspack_esm_id = 3253;
export const __rspack_esm_ids = [3253];
export const __webpack_modules__ = {
87476(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ ProjectsRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var useNavigate = __webpack_require__(45178);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/link.js + 1 modules
var esm_link = __webpack_require__(38639);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.mjs
var search = __webpack_require__(73619);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/plus.mjs
var plus = __webpack_require__(44207);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bug.mjs
var bug = __webpack_require__(44271);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bell.mjs
var bell = __webpack_require__(68612);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/settings.mjs
var settings = __webpack_require__(36888);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/external-link.mjs
var external_link = __webpack_require__(91443);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./src/hooks/use-projects.ts
var use_projects = __webpack_require__(30028);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
// EXTERNAL MODULE: ./src/components/ui/dialog.tsx
var dialog = __webpack_require__(70355);
// EXTERNAL MODULE: ./src/components/ui/tooltip.tsx
var tooltip = __webpack_require__(18918);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(16479);
// EXTERNAL MODULE: ./node_modules/date-fns/formatDistanceToNow.js + 9 modules
var formatDistanceToNow = __webpack_require__(68190);
;// CONCATENATED MODULE: ./src/components/projects/projects-page.tsx
"use client";










function formatUpdated(iso) {
    try {
        return (0,formatDistanceToNow/* .formatDistanceToNow */.m)(new Date(iso), {
            addSuffix: true
        });
    } catch  {
        return iso;
    }
}
function ProjectsPage() {
    const [searchQuery, setSearchQuery] = (0,react.useState)("");
    const [open, setOpen] = (0,react.useState)(false);
    const [name, setName] = (0,react.useState)("");
    const [description, setDescription] = (0,react.useState)("");
    const { data, isLoading, isError, error } = (0,use_projects/* .useProjects */.YK)();
    const createProject = (0,use_projects/* .useCreateProject */.bL)();
    const navigate = (0,useNavigate/* .useNavigate */.Z)();
    const projects = data?.projects ?? [];
    const filtered = searchQuery.trim() ? projects.filter((p)=>p.name.toLowerCase().includes(searchQuery.toLowerCase()) || (p.description ?? "").toLowerCase().includes(searchQuery.toLowerCase()) || p.status.toLowerCase().includes(searchQuery.toLowerCase()) || p.owner.display_name.toLowerCase().includes(searchQuery.toLowerCase())) : [];
    const showAll = !searchQuery.trim();
    const handleCreate = async ()=>{
        if (!name.trim()) return;
        try {
            const project = await createProject.mutateAsync({
                name: name.trim(),
                description: description.trim() || undefined
            });
            setOpen(false);
            setName("");
            setDescription("");
            navigate({
                to: "/projects/$projectName",
                params: {
                    projectName: project.name
                }
            });
        } catch  {
        // error surfaced via createProject.error
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: "text-2xl font-semibold tracking-tight",
                        children: "Projects"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "mt-1 text-sm text-muted-foreground",
                        children: "Manage your projects and repositories"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                id: "projects-nav",
                className: "flex items-center gap-3 border-b pb-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative flex-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(search/* ["default"] */.A, {
                                className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                placeholder: "Search projects...",
                                className: "pl-9",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .Dialog */.lG, {
                        open: open,
                        onOpenChange: setOpen,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTrigger */.zM, {
                                asChild: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(plus/* ["default"] */.A, {
                                            className: "size-4"
                                        }),
                                        "Create Project"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogContent */.Cf, {
                                className: "sm:max-w-lg",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogHeader */.c7, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTitle */.L3, {
                                                children: "Create Project"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogDescription */.rr, {
                                                children: "Set up a new project in your workspace."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "grid gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "grid gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                        className: "text-sm font-medium",
                                                        htmlFor: "project-name",
                                                        children: "Project Name"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                        id: "project-name",
                                                        placeholder: "my-awesome-project",
                                                        value: name,
                                                        onChange: (e)=>setName(e.target.value)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "grid gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                        className: "text-sm font-medium",
                                                        htmlFor: "project-desc",
                                                        children: "Description"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                        id: "project-desc",
                                                        placeholder: "A short description of your project",
                                                        value: description,
                                                        onChange: (e)=>setDescription(e.target.value)
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    createProject.error && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive",
                                        role: "alert",
                                        children: createProject.error.message
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogFooter */.Es, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                variant: "outline",
                                                onClick: ()=>setOpen(false),
                                                children: "Cancel"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                onClick: handleCreate,
                                                disabled: !name.trim() || createProject.isPending,
                                                children: createProject.isPending ? "Creating..." : "Create"
                                            })
                                        ]
                                    })
                                ]
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
            }),
            isLoading && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children: "Loading projects…"
            }),
            isError && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                className: "text-sm text-destructive",
                role: "alert",
                children: [
                    "Failed to load projects",
                    error instanceof Error ? `: ${error.message}` : ""
                ]
            }),
            searchQuery.trim() && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                        className: "text-sm font-medium text-muted-foreground mb-3",
                        children: [
                            "Search results for “",
                            searchQuery,
                            "”"
                        ]
                    }),
                    filtered.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-sm text-muted-foreground",
                        children: "No projects found."
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                            className: "w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                        className: "border-b text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                className: "px-4 py-3 text-left font-medium",
                                                children: "Name"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                className: "px-4 py-3 text-left font-medium",
                                                children: "Description"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                className: "px-4 py-3 text-left font-medium",
                                                children: "Status"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                className: "px-4 py-3 text-left font-medium",
                                                children: "Owner"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                className: "px-4 py-3 text-right font-medium",
                                                children: "Updated"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                                    children: filtered.map((project)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectRow, {
                                            project: project
                                        }, project.id))
                                })
                            ]
                        })
                    })
                ]
            }),
            showAll && !isLoading && !isError && /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                        className: "text-sm font-semibold mb-3",
                        children: "All projects"
                    }),
                    projects.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "rounded-xl border border-dashed border-muted-foreground/30 p-12 text-center text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "font-medium text-foreground mb-1",
                                children: "No projects yet"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                children: "Create your first project to get started."
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                        children: projects.map((project)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(esm_link/* .Link */.N_, {
                                to: "/projects/$projectName",
                                params: {
                                    projectName: project.name
                                },
                                className: "rounded-xl border bg-card p-4 shadow-sm hover:shadow-md transition-shadow block",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "font-medium text-sm text-primary",
                                                children: project.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "inline-block rounded-md bg-muted px-1.5 py-0.5 text-xs font-medium shrink-0",
                                                children: project.status
                                            })
                                        ]
                                    }),
                                    project.description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-xs text-muted-foreground mt-0.5",
                                        children: project.description
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-3 mt-3 text-xs text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: project.owner.display_name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    "Updated ",
                                                    formatUpdated(project.updatedAt)
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, project.id))
                    })
                ]
            })
        ]
    });
}
function ProjectRow({ project }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
        className: "border-b last:border-0 hover:bg-gray-200/90 cursor-pointer",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                className: "px-4 py-3",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(esm_link/* .Link */.N_, {
                    to: "/projects/$projectName",
                    params: {
                        projectName: project.name
                    },
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "font-medium text-primary",
                            children: project.name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* ["default"] */.A, {
                            className: "size-3 text-muted-foreground"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                className: "px-4 py-3 text-muted-foreground",
                children: project.description ?? "—"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                className: "px-4 py-3",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: "inline-block rounded-md bg-muted px-2 py-0.5 text-xs font-medium",
                    children: project.status
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                className: "px-4 py-3 text-muted-foreground",
                children: project.owner.display_name
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                className: "px-4 py-3 text-right text-muted-foreground",
                children: formatUpdated(project.updatedAt)
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/routes/projects.tsx?tsr-split=component


function ProjectsRoute() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectsPage, {});
}



},

};
