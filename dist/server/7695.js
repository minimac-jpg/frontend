export const __rspack_esm_id = 7695;
export const __rspack_esm_ids = [7695];
export const __webpack_modules__ = {
84866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ DashboardRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/code.mjs
var code = __webpack_require__(36908);
// EXTERNAL MODULE: ./src/hooks/use-projects.ts
var use_projects = __webpack_require__(30028);
;// CONCATENATED MODULE: ./src/components/dashboard/project-summary-card.tsx



function ProjectSummaryCard() {
    const { data, isLoading, isError } = (0,use_projects/* .useProjects */.YK)();
    const totalProjects = isLoading ? "…" : isError ? "—" : data?.total ?? 0;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "rounded-xl border bg-card text-card-foreground shadow-sm",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-row items-center gap-4 p-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex size-12 items-center justify-center rounded-lg bg-primary/10",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(code/* ["default"] */.A, {
                        className: "size-6 text-primary"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-3xl font-bold",
                            children: totalProjects
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Total Projects"
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/pickaxe.mjs
var pickaxe = __webpack_require__(91672);
// EXTERNAL MODULE: ./src/features/pipelines/api/queries.ts
var queries = __webpack_require__(3578);
;// CONCATENATED MODULE: ./src/components/dashboard/recent-builds-card.tsx



const statusColor = {
    success: "bg-emerald-500/10 text-emerald-600",
    running: "bg-sky-500/10 text-sky-600",
    failed: "bg-red-500/10 text-red-600",
    queued: "bg-amber-500/10 text-amber-600",
    cancelled: "bg-gray-500/10 text-gray-600"
};
function formatDate(iso) {
    try {
        return new Date(iso).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
    } catch  {
        return iso;
    }
}
function RecentBuildsCard() {
    const { data, isLoading, isError } = (0,queries/* .useRecentBuilds */.qX)(5);
    const builds = data ?? [];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "rounded-xl border bg-card text-card-foreground shadow-sm",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "px-6 py-4 flex items-center gap-2 border-b",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(pickaxe/* ["default"] */.A, {
                        className: "size-5 text-muted-foreground"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                        className: "text-lg font-semibold",
                        children: "Recent Builds"
                    })
                ]
            }),
            isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "px-6 py-8 text-sm text-muted-foreground",
                children: "Loading builds…"
            }) : isError ? /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "px-6 py-8 text-sm text-destructive",
                role: "alert",
                children: "Failed to load builds."
            }) : builds.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "px-6 py-8 text-sm text-muted-foreground",
                children: "No builds yet."
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                    className: "w-full text-sm",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                className: "border-t text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                        className: "px-6 py-3 text-left font-medium",
                                        children: "Build"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                        className: "px-6 py-3 text-left font-medium",
                                        children: "Branch"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                        className: "px-6 py-3 text-left font-medium",
                                        children: "Hash"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                        className: "px-6 py-3 text-left font-medium",
                                        children: "Status"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                        className: "px-6 py-3 text-left font-medium",
                                        children: "User"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                        className: "px-6 py-3 text-left font-medium",
                                        children: "Created"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                            children: builds.map((build)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                    className: "border-t hover:bg-gray-200/90",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                            className: "px-6 py-3 font-medium",
                                            children: [
                                                "#",
                                                build.number
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                            className: "px-6 py-3 text-muted-foreground",
                                            children: build.branch || "—"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                            className: "px-6 py-3 font-mono text-xs text-muted-foreground",
                                            children: build.commitHash ? build.commitHash.slice(0, 8) : "—"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                            className: "px-6 py-3",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: `inline-block rounded-md px-2 py-0.5 text-xs font-medium ${statusColor[build.status] ?? ""}`,
                                                children: build.status
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                            className: "px-6 py-3 text-muted-foreground",
                                            children: build.triggeredBy || "—"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                            className: "px-6 py-3 text-muted-foreground",
                                            children: formatDate(build.createdAt)
                                        })
                                    ]
                                }, build.id))
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useQuery.js + 6 modules
var useQuery = __webpack_require__(5375);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/blocks.mjs
var blocks = __webpack_require__(46165);
// EXTERNAL MODULE: ./src/lib/api/client.ts
var client = __webpack_require__(59943);
;// CONCATENATED MODULE: ./src/components/dashboard/worker-summary-card.tsx




function WorkerSummaryCard() {
    const { data, isLoading, isError } = (0,useQuery/* .useQuery */.I)({
        queryKey: [
            "workers",
            "summary"
        ],
        queryFn: ()=>(0,client/* .apiGet */.Vg)("/api/workers")
    });
    const totalWorkers = isLoading ? "…" : isError ? "—" : data?.total ?? 0;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "rounded-xl border bg-card text-card-foreground shadow-sm",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-row items-center gap-4 p-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex size-12 items-center justify-center rounded-lg bg-primary/10",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(blocks/* ["default"] */.A, {
                        className: "size-6 text-primary"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-3xl font-bold",
                            children: totalWorkers
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Total Workers"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/dashboard/dashboard-summary.tsx




function DashboardSummary() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectSummaryCard, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WorkerSummaryCard, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RecentBuildsCard, {})
        ]
    });
}

;// CONCATENATED MODULE: ./src/routes/index.tsx?tsr-split=component


function DashboardRoute() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: "text-2xl font-semibold tracking-tight",
                        children: "Dashboard"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "mt-1 text-sm text-muted-foreground",
                        children: "Overview of your CI/CD platform"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardSummary, {})
        ]
    });
}



},

};
