export const __rspack_esm_id = 1627;
export const __rspack_esm_ids = [1627];
export const __webpack_modules__ = {
57638(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ JobDetailRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useParams.js
var useParams = __webpack_require__(22679);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/link.js + 1 modules
var esm_link = __webpack_require__(38639);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.mjs
var arrow_left = __webpack_require__(2832);
// EXTERNAL MODULE: ./src/components/ui/skeleton.tsx
var skeleton = __webpack_require__(50186);
// EXTERNAL MODULE: ./src/components/ui/tabs.tsx
var tabs = __webpack_require__(25967);
// EXTERNAL MODULE: ./src/features/pipelines/api/queries.ts
var queries = __webpack_require__(3578);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var useNavigate = __webpack_require__(45178);
// EXTERNAL MODULE: ./node_modules/@tanstack/table-core/build/lib/index.mjs
var lib = __webpack_require__(44228);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-table/build/lib/index.mjs
var build_lib = __webpack_require__(46390);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up.mjs
var arrow_up = __webpack_require__(53540);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down.mjs
var arrow_down = __webpack_require__(6611);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up-down.mjs
var arrow_up_down = __webpack_require__(2282);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.mjs
var user = __webpack_require__(25546);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./src/components/ui/table.tsx
var ui_table = __webpack_require__(21999);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(80828);
// EXTERNAL MODULE: ./src/features/pipelines/components/BuildStatusBadge.tsx
var BuildStatusBadge = __webpack_require__(42583);
;// CONCATENATED MODULE: ./src/features/pipelines/components/BuildHistoryList.tsx









const columnHelper = (0,lib/* .createColumnHelper */.FB)();
function SortHeader({ header, label }) {
    const sorted = header.column.getIsSorted();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        className: "flex items-center gap-1",
        children: [
            label,
            sorted === "asc" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up/* ["default"] */.A, {
                className: "size-3"
            }) : sorted === "desc" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down/* ["default"] */.A, {
                className: "size-3"
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up_down/* ["default"] */.A, {
                className: "size-3 text-muted-foreground/50"
            })
        ]
    });
}
function formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}
function BuildHistoryList({ builds, isLoading, error, jobId }) {
    const navigate = (0,useNavigate/* .useNavigate */.Z)();
    const [sorting, setSorting] = (0,react.useState)([
        {
            id: "number",
            desc: true
        }
    ]);
    const columns = (0,react.useMemo)(()=>[
            columnHelper.accessor("status", {
                header: "",
                id: "accent",
                enableSorting: false,
                cell: ({ getValue })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(BuildStatusBadge/* .BuildStatusDot */._c, {
                        status: getValue()
                    })
            }),
            columnHelper.accessor("number", {
                header: ({ header })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SortHeader, {
                        header: header,
                        label: "#"
                    }),
                cell: ({ getValue })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "font-mono text-xs text-muted-foreground",
                        children: [
                            "#",
                            getValue()
                        ]
                    })
            }),
            columnHelper.accessor("status", {
                header: ({ header })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SortHeader, {
                        header: header,
                        label: "Status"
                    }),
                cell: ({ getValue })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(BuildStatusBadge/* .BuildStatusBadge */.cj, {
                        status: getValue()
                    })
            }),
            columnHelper.accessor("commitMessage", {
                header: ({ header })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SortHeader, {
                        header: header,
                        label: "Commit"
                    }),
                cell: ({ row })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-xs text-foreground",
                                children: row.original.commitMessage
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "ml-2 font-mono text-[11px] text-muted-foreground",
                                children: row.original.commitHash.slice(0, 7)
                            })
                        ]
                    })
            }),
            columnHelper.accessor("triggeredBy", {
                header: ({ header })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SortHeader, {
                        header: header,
                        label: "Triggered by"
                    }),
                cell: ({ getValue })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "inline-flex items-center gap-1 text-xs text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(user/* ["default"] */.A, {
                                className: "size-3"
                            }),
                            getValue()
                        ]
                    })
            }),
            columnHelper.accessor("duration", {
                header: ({ header })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SortHeader, {
                        header: header,
                        label: "Duration"
                    }),
                cell: ({ getValue })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "font-mono text-xs text-muted-foreground",
                        children: (0,BuildStatusBadge/* .formatDuration */.a3)(getValue())
                    })
            }),
            columnHelper.accessor("createdAt", {
                header: ({ header })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SortHeader, {
                        header: header,
                        label: "Started"
                    }),
                cell: ({ getValue })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-xs text-muted-foreground",
                        children: formatDate(getValue())
                    })
            })
        ], []);
    const table = (0,build_lib/* .useReactTable */.N4)({
        data: builds ?? [],
        columns,
        state: {
            sorting
        },
        onSortingChange: setSorting,
        getCoreRowModel: (0,lib/* .getCoreRowModel */.HT)(),
        getSortedRowModel: (0,lib/* .getSortedRowModel */.h5)()
    });
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "rounded-md border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive",
            role: "alert",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "font-medium",
                    children: "Failed to load builds"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "mt-1 text-destructive/80",
                    children: error.message
                })
            ]
        });
    }
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "space-y-2",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                    className: "h-8 w-48"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                    className: "h-10 w-full"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                    className: "h-10 w-full"
                })
            ]
        });
    }
    if (!builds || builds.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col items-center justify-center py-16 text-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "text-lg font-medium text-foreground",
                    children: "No builds yet"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "mt-1 text-sm text-muted-foreground",
                    children: "Trigger a build to see results here."
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_table/* .Table */.XI, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHeader */.A0, {
                children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableRow */.Hj, {
                        children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHead */.nd, {
                                className: (0,utils.cn)(header.column.getCanSort() && "cursor-pointer select-none hover:text-foreground", header.column.id === "accent" && "w-2 p-0"),
                                onClick: header.column.getToggleSortingHandler(),
                                children: header.isPlaceholder ? null : (0,build_lib/* .flexRender */.Kv)(header.column.columnDef.header, header.getContext())
                            }, header.id))
                    }, headerGroup.id))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableBody */.BF, {
                children: table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableRow */.Hj, {
                        className: "cursor-pointer",
                        onClick: ()=>navigate({
                                to: "/builds/$jobId/builds/$buildId",
                                params: {
                                    jobId,
                                    buildId: row.original.id
                                }
                            }),
                        children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                className: (0,utils.cn)(cell.column.id === "accent" && "p-0 w-2"),
                                children: (0,build_lib/* .flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext())
                            }, cell.id))
                    }, row.id))
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square.mjs
var square = __webpack_require__(87982);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/play.mjs
var play = __webpack_require__(69313);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs
var rotate_ccw = __webpack_require__(20096);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
;// CONCATENATED MODULE: ./src/features/pipelines/components/JobDetailHeader.tsx




function JobDetailHeader({ job, onTrigger, onStop, isTriggering, isStopping }) {
    const isRunning = job.status === "running" || job.status === "queued";
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-wrap items-start justify-between gap-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                className: "text-2xl font-semibold tracking-tight",
                                children: job.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(BuildStatusBadge/* .BuildStatusBadge */.cj, {
                                status: job.status
                            })
                        ]
                    }),
                    job.description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "mt-1 text-sm text-muted-foreground",
                        children: job.description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                    isRunning ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                        variant: "destructive",
                        size: "sm",
                        onClick: onStop,
                        disabled: isStopping,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(square/* ["default"] */.A, {
                                className: "mr-1.5 size-3.5"
                            }),
                            isStopping ? "Stopping..." : "Stop"
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                        variant: "default",
                        size: "sm",
                        onClick: onTrigger,
                        disabled: isTriggering,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(play/* ["default"] */.A, {
                                className: "mr-1.5 size-3.5"
                            }),
                            isTriggering ? "Triggering..." : "Run"
                        ]
                    }),
                    !isRunning && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                        variant: "outline",
                        size: "sm",
                        onClick: onTrigger,
                        disabled: isTriggering,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(rotate_ccw/* ["default"] */.A, {
                                className: "mr-1.5 size-3.5"
                            }),
                            "Rebuild"
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/features/pipelines/components/PipelineStageView.tsx
var PipelineStageView = __webpack_require__(48869);
;// CONCATENATED MODULE: ./src/routes/builds.$jobId.index.tsx?tsr-split=component









function JobDetailRoute() {
    const { jobId } = (0,useParams/* .useParams */.g)({
        from: "/builds/$jobId"
    });
    const { data: job, isLoading: jobLoading, error: jobError } = (0,queries/* .useJob */.JJ)(jobId);
    const { data: builds, isLoading: buildsLoading, error: buildsError } = (0,queries/* .useBuilds */.FW)(jobId);
    const { mutateAsync: triggerBuild, isPending: isTriggering } = (0,queries/* .useTriggerBuild */.__)();
    const { mutateAsync: stopBuild, isPending: isStopping } = (0,queries/* .useStopBuild */.gn)();
    const handleTrigger = ()=>{
        if (job) triggerBuild(job);
    };
    const handleStop = ()=>{
        if (!builds) return;
        const active = builds.find((b)=>b.status === "running" || b.status === "queued");
        if (active) stopBuild({
            jobId,
            buildId: active.id
        });
    };
    if (jobLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col gap-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                    className: "h-8 w-64"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                    className: "h-10 w-full"
                })
            ]
        });
    }
    if (jobError || !job) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "rounded-md border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive",
            role: "alert",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "font-medium",
                children: jobError?.message ?? "Job not found"
            })
        });
    }
    const latestStages = builds && builds.length > 0 ? builds.sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0]?.stages ?? [] : [];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(esm_link/* .Link */.N_, {
                to: "/builds",
                className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_left/* ["default"] */.A, {
                        className: "size-4"
                    }),
                    "All pipelines"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(JobDetailHeader, {
                job: job,
                onTrigger: handleTrigger,
                onStop: handleStop,
                isTriggering: isTriggering,
                isStopping: isStopping
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* .Tabs */.tU, {
                defaultValue: "history",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* .TabsList */.j7, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* .TabsTrigger */.Xi, {
                                value: "history",
                                children: "Build History"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* .TabsTrigger */.Xi, {
                                value: "stages",
                                children: "Stages"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* .TabsContent */.av, {
                        value: "history",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BuildHistoryList, {
                            builds: builds,
                            isLoading: buildsLoading,
                            error: buildsError,
                            jobId: jobId
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* .TabsContent */.av, {
                        value: "stages",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "rounded-xl border bg-card p-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: "mb-3 text-sm font-medium text-foreground",
                                    children: "Latest build stages"
                                }),
                                buildsLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                                    className: "h-16 w-full"
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(PipelineStageView/* .PipelineStageView */.G, {
                                    stages: latestStages
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}



},

};
