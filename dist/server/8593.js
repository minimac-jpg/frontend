export const __rspack_esm_id = 8593;
export const __rspack_esm_ids = [8593];
export const __webpack_modules__ = {
22776(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ BuildsIndexRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var useNavigate = __webpack_require__(45178);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.mjs
var search = __webpack_require__(73619);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/plus.mjs
var plus = __webpack_require__(44207);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(16479);
// EXTERNAL MODULE: ./src/components/ui/select.tsx
var ui_select = __webpack_require__(24219);
// EXTERNAL MODULE: ./src/features/pipelines/api/queries.ts
var queries = __webpack_require__(3578);
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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/git-branch.mjs
var git_branch = __webpack_require__(43534);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zap.mjs
var zap = __webpack_require__(91500);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar.mjs
var calendar = __webpack_require__(21953);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/webhook.mjs
var webhook = __webpack_require__(10174);
// EXTERNAL MODULE: ./src/components/ui/skeleton.tsx
var skeleton = __webpack_require__(50186);
// EXTERNAL MODULE: ./src/components/ui/table.tsx
var ui_table = __webpack_require__(21999);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(80828);
// EXTERNAL MODULE: ./src/features/pipelines/components/BuildStatusBadge.tsx
var BuildStatusBadge = __webpack_require__(42583);
;// CONCATENATED MODULE: ./src/features/pipelines/components/JobListTable.tsx









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
function JobListTable({ data, isLoading, error, statusFilter, searchQuery }) {
    const navigate = (0,useNavigate/* .useNavigate */.Z)();
    const [sorting, setSorting] = (0,react.useState)([
        {
            id: "name",
            desc: false
        }
    ]);
    const filtered = (0,react.useMemo)(()=>{
        if (!data) return [];
        let result = data;
        if (statusFilter !== "all") {
            result = result.filter((j)=>j.status === statusFilter);
        }
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter((j)=>j.name.toLowerCase().includes(q) || (j.description ?? "").toLowerCase().includes(q) || j.branch.toLowerCase().includes(q));
        }
        return result;
    }, [
        data,
        statusFilter,
        searchQuery
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
            columnHelper.accessor("name", {
                header: ({ header })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SortHeader, {
                        header: header,
                        label: "Job"
                    }),
                cell: ({ row })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "font-medium text-foreground",
                                children: row.original.name
                            }),
                            row.original.description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "mt-0.5 text-xs text-muted-foreground line-clamp-1",
                                children: row.original.description
                            })
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
            columnHelper.accessor("lastDuration", {
                header: ({ header })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SortHeader, {
                        header: header,
                        label: "Duration"
                    }),
                cell: ({ getValue })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "font-mono text-xs text-muted-foreground",
                        children: (0,BuildStatusBadge/* .formatDuration */.a3)(getValue())
                    })
            }),
            columnHelper.accessor("branch", {
                header: ({ header })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SortHeader, {
                        header: header,
                        label: "Branch"
                    }),
                cell: ({ getValue })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "inline-flex items-center gap-1 text-xs text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(git_branch/* ["default"] */.A, {
                                className: "size-3"
                            }),
                            getValue()
                        ]
                    })
            }),
            columnHelper.accessor("trigger", {
                header: ({ header })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SortHeader, {
                        header: header,
                        label: "Trigger"
                    }),
                cell: ({ getValue })=>{
                    const Icon = getValue() === "manual" ? zap/* ["default"] */.A : getValue() === "scheduled" ? calendar/* ["default"] */.A : webhook/* ["default"] */.A;
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "inline-flex items-center gap-1 text-xs text-muted-foreground capitalize",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                                className: "size-3"
                            }),
                            getValue()
                        ]
                    });
                }
            })
        ], []);
    const table = (0,build_lib/* .useReactTable */.N4)({
        data: filtered,
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
                    children: "Failed to load jobs"
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
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                    className: "h-10 w-3/4"
                })
            ]
        });
    }
    if (filtered.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col items-center justify-center py-16 text-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "text-lg font-medium text-foreground",
                    children: "No jobs found"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "mt-1 text-sm text-muted-foreground",
                    children: searchQuery || statusFilter !== "all" ? "Try adjusting your search or filter." : "Create a new job to get started."
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
                                to: "/builds/$jobId",
                                params: {
                                    jobId: row.original.id
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

;// CONCATENATED MODULE: ./src/routes/builds.index.tsx?tsr-split=component









function BuildsIndexRoute() {
    const navigate = (0,useNavigate/* .useNavigate */.Z)();
    const { data, isLoading, error } = (0,queries/* .useJobs */.Os)();
    const [searchQuery, setSearchQuery] = (0,react.useState)("");
    const [statusFilter, setStatusFilter] = (0,react.useState)("all");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: "text-2xl font-semibold tracking-tight",
                        children: "Builds"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "mt-1 text-sm text-muted-foreground",
                        children: "Monitor and manage your CI/CD pipelines"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative flex-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(search/* ["default"] */.A, {
                                className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground pointer-events-none"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                placeholder: "Search jobs...",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: "h-9 pl-9 text-sm"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* .Select */.l6, {
                        value: statusFilter,
                        onValueChange: (v)=>setStatusFilter(v),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectTrigger */.bq, {
                                className: "h-9 w-36 text-xs",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectValue */.yv, {
                                    placeholder: "All statuses"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* .SelectContent */.gC, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                        value: "all",
                                        children: "All statuses"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                        value: "success",
                                        children: "Success"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                        value: "failed",
                                        children: "Failed"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                        value: "running",
                                        children: "Running"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                        value: "queued",
                                        children: "Queued"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                        value: "unstable",
                                        children: "Unstable"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                        value: "aborted",
                                        children: "Aborted"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                        size: "sm",
                        onClick: ()=>navigate({
                                to: "/pipelines"
                            }),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(plus/* ["default"] */.A, {
                                className: "mr-1.5 size-4"
                            }),
                            "New Job"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(JobListTable, {
                data: data,
                isLoading: isLoading,
                error: error,
                statusFilter: statusFilter,
                searchQuery: searchQuery
            })
        ]
    });
}



},

};
