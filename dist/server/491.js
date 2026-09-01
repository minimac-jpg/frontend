export const __rspack_esm_id = 491;
export const __rspack_esm_ids = [491];
export const __webpack_modules__ = {
28118(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ ReleaseDetailRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useParams.js
var useParams = __webpack_require__(22679);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var useNavigate = __webpack_require__(45178);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./src/hooks/use-releases.ts
var use_releases = __webpack_require__(72756);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/link.js + 1 modules
var esm_link = __webpack_require__(38639);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.mjs
var arrow_left = __webpack_require__(2832);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/settings.mjs
var settings = __webpack_require__(36888);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(80828);
// EXTERNAL MODULE: ./src/components/releases/status-badge.tsx
var status_badge = __webpack_require__(47591);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-table/build/lib/index.mjs
var lib = __webpack_require__(46390);
// EXTERNAL MODULE: ./node_modules/@tanstack/table-core/build/lib/index.mjs
var build_lib = __webpack_require__(44228);
// EXTERNAL MODULE: ./node_modules/date-fns/format.js + 17 modules
var format = __webpack_require__(21377);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up.mjs
var arrow_up = __webpack_require__(53540);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down.mjs
var arrow_down = __webpack_require__(6611);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up-down.mjs
var arrow_up_down = __webpack_require__(2282);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/pencil.mjs
var pencil = __webpack_require__(30772);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trash.mjs
var trash = __webpack_require__(10279);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.mjs
var search = __webpack_require__(73619);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs
var sliders_horizontal = __webpack_require__(46352);
// EXTERNAL MODULE: ./src/components/ui/badge.tsx
var badge = __webpack_require__(79318);
// EXTERNAL MODULE: ./src/components/ui/checkbox.tsx
var ui_checkbox = __webpack_require__(68008);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(16479);
// EXTERNAL MODULE: ./src/components/ui/label.tsx
var ui_label = __webpack_require__(16533);
// EXTERNAL MODULE: ./src/components/ui/table.tsx
var ui_table = __webpack_require__(21999);
;// CONCATENATED MODULE: ./src/components/releases/release-artifacts-table.tsx












const appKeys = [
    "JAVA",
    "SPRINGBOOT",
    "WWW",
    "REACT"
];
const defaultFilter = {
    search: "",
    appKeys: [],
    updatedAtFrom: "",
    updatedAtTo: "",
    deployedAtFrom: "",
    deployedAtTo: ""
};
function ReleaseArtifactsTable({ data }) {
    const [sorting, setSorting] = (0,react.useState)([]);
    const [filter, setFilter] = (0,react.useState)(defaultFilter);
    const [drawerOpen, setDrawerOpen] = (0,react.useState)(false);
    function update(partial) {
        setFilter((prev)=>({
                ...prev,
                ...partial
            }));
    }
    function clearAll() {
        setFilter(defaultFilter);
    }
    const filteredData = (0,react.useMemo)(()=>{
        return data.filter((a)=>{
            if (filter.search) {
                const q = filter.search.toLowerCase();
                const matched = a.name.toLowerCase().includes(q) || a.appKey.toLowerCase().includes(q) || a.version.toLowerCase().includes(q) || a.ticketNumber.toLowerCase().includes(q);
                if (!matched) return false;
            }
            if (filter.appKeys.length > 0 && !filter.appKeys.includes(a.appKey)) return false;
            if (filter.updatedAtFrom && a.updatedAt && a.updatedAt < filter.updatedAtFrom) return false;
            if (filter.updatedAtTo && a.updatedAt && a.updatedAt > filter.updatedAtTo) return false;
            if (filter.deployedAtFrom && a.deployedAt && a.deployedAt < filter.deployedAtFrom) return false;
            if (filter.deployedAtTo && a.deployedAt && a.deployedAt > filter.deployedAtTo) return false;
            return true;
        });
    }, [
        data,
        filter
    ]);
    const sortedData = (0,react.useMemo)(()=>[
            ...filteredData
        ].sort((a, b)=>Number(a.isRemoved) - Number(b.isRemoved)), [
        filteredData
    ]);
    const activeCount = data.filter((a)=>!a.isRemoved).length;
    const removedCount = data.filter((a)=>a.isRemoved).length;
    const appKeyFacetCounts = (0,react.useMemo)(()=>{
        const counts = new Map();
        for (const a of data){
            counts.set(a.appKey, (counts.get(a.appKey) ?? 0) + 1);
        }
        return counts;
    }, [
        data
    ]);
    const columns = (0,react.useMemo)(()=>[
            {
                accessorKey: "name",
                header: ({ header })=>{
                    const sorted = header.column.getIsSorted();
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "flex items-center gap-1 text-xs font-medium",
                        children: [
                            "Name",
                            sorted === "asc" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up/* ["default"] */.A, {
                                className: "size-3"
                            }) : sorted === "desc" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down/* ["default"] */.A, {
                                className: "size-3"
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up_down/* ["default"] */.A, {
                                className: "size-3 text-muted-foreground/50"
                            })
                        ]
                    });
                },
                cell: ({ row })=>{
                    const a = row.original;
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "inline-flex items-center gap-2 font-medium text-sm",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: (0,utils.cn)("h-1.5 w-1.5 rounded-full shrink-0", a.isRemoved ? "bg-zinc-400" : "bg-green-500")
                            }),
                            a.name
                        ]
                    });
                }
            },
            {
                accessorKey: "appKey",
                header: ({ header })=>{
                    const sorted = header.column.getIsSorted();
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "flex items-center gap-1 text-xs font-medium",
                        children: [
                            "App Key",
                            sorted === "asc" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up/* ["default"] */.A, {
                                className: "size-3"
                            }) : sorted === "desc" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down/* ["default"] */.A, {
                                className: "size-3"
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up_down/* ["default"] */.A, {
                                className: "size-3 text-muted-foreground/50"
                            })
                        ]
                    });
                },
                cell: ({ row })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground bg-muted",
                        children: row.original.appKey
                    })
            },
            {
                id: "version",
                header: ({ header })=>{
                    const sorted = header.column.getIsSorted();
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "flex items-center gap-1 text-xs font-medium",
                        children: [
                            "Version",
                            sorted === "asc" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up/* ["default"] */.A, {
                                className: "size-3"
                            }) : sorted === "desc" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down/* ["default"] */.A, {
                                className: "size-3"
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up_down/* ["default"] */.A, {
                                className: "size-3 text-muted-foreground/50"
                            })
                        ]
                    });
                },
                cell: ({ row })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col leading-snug",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "font-semibold",
                                children: row.original.version
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "text-muted-foreground/70 text-xs",
                                children: [
                                    "Build: ",
                                    row.original.buildNumber
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "text-muted-foreground/70 text-xs",
                                children: [
                                    "Hash: ",
                                    row.original.hash
                                ]
                            })
                        ]
                    })
            },
            {
                accessorKey: "buildTime",
                header: ({ header })=>{
                    const sorted = header.column.getIsSorted();
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "flex items-center gap-1 text-xs font-medium",
                        children: [
                            "Build Time",
                            sorted === "asc" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up/* ["default"] */.A, {
                                className: "size-3"
                            }) : sorted === "desc" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down/* ["default"] */.A, {
                                className: "size-3"
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up_down/* ["default"] */.A, {
                                className: "size-3 text-muted-foreground/50"
                            })
                        ]
                    });
                },
                cell: ({ row })=>{
                    try {
                        return (0,format/* .format */.GP)(new Date(row.original.buildTime), "MMM d, yyyy");
                    } catch  {
                        return row.original.buildTime;
                    }
                }
            },
            {
                accessorKey: "updatedAt",
                header: ({ header })=>{
                    const sorted = header.column.getIsSorted();
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "flex items-center gap-1 text-xs font-medium",
                        children: [
                            "Updated At",
                            sorted === "asc" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up/* ["default"] */.A, {
                                className: "size-3"
                            }) : sorted === "desc" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down/* ["default"] */.A, {
                                className: "size-3"
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up_down/* ["default"] */.A, {
                                className: "size-3 text-muted-foreground/50"
                            })
                        ]
                    });
                },
                cell: ({ row })=>{
                    try {
                        return (0,format/* .format */.GP)(new Date(row.original.updatedAt), "MMM d, yyyy");
                    } catch  {
                        return row.original.updatedAt;
                    }
                }
            },
            {
                accessorKey: "deployedAt",
                header: ({ header })=>{
                    const sorted = header.column.getIsSorted();
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "flex items-center gap-1 text-xs font-medium",
                        children: [
                            "Deployed At",
                            sorted === "asc" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up/* ["default"] */.A, {
                                className: "size-3"
                            }) : sorted === "desc" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down/* ["default"] */.A, {
                                className: "size-3"
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up_down/* ["default"] */.A, {
                                className: "size-3 text-muted-foreground/50"
                            })
                        ]
                    });
                },
                cell: ({ row })=>{
                    if (!row.original.deployedAt) return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-muted-foreground",
                        children: "—"
                    });
                    try {
                        return (0,format/* .format */.GP)(new Date(row.original.deployedAt), "MMM d, yyyy");
                    } catch  {
                        return row.original.deployedAt;
                    }
                }
            },
            {
                accessorKey: "ticketNumber",
                header: ({ header })=>{
                    const sorted = header.column.getIsSorted();
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "flex items-center gap-1 text-xs font-medium",
                        children: [
                            "Ticket",
                            sorted === "asc" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up/* ["default"] */.A, {
                                className: "size-3"
                            }) : sorted === "desc" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down/* ["default"] */.A, {
                                className: "size-3"
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up_down/* ["default"] */.A, {
                                className: "size-3 text-muted-foreground/50"
                            })
                        ]
                    });
                },
                cell: ({ row })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-muted-foreground",
                        children: row.original.ticketNumber
                    })
            },
            {
                id: "actions",
                enableSorting: false,
                header: ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "w-16"
                    }),
                cell: ({ row })=>{
                    const a = row.original;
                    if (a.isRemoved) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex justify-end",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                size: "sm",
                                className: "h-7 text-xs bg-green-600 hover:bg-green-700",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "mr-1 text-lg leading-none",
                                        children: "+"
                                    }),
                                    " Restore"
                                ]
                            })
                        });
                    }
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex justify-end gap-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                size: "sm",
                                className: "h-7 w-7 p-0 bg-blue-100 text-blue-700 hover:bg-blue-200",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(pencil/* ["default"] */.A, {
                                    className: "size-3.5"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                size: "sm",
                                variant: "destructive",
                                className: "h-7 w-7 p-0",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(trash/* ["default"] */.A, {
                                    className: "size-3.5"
                                })
                            })
                        ]
                    });
                }
            }
        ], []);
    const table = (0,lib/* .useReactTable */.N4)({
        data: sortedData,
        columns,
        state: {
            sorting
        },
        onSortingChange: setSorting,
        getCoreRowModel: (0,build_lib/* .getCoreRowModel */.HT)(),
        getSortedRowModel: (0,build_lib/* .getSortedRowModel */.h5)()
    });
    const activeFilterCount = filter.appKeys.length + (filter.updatedAtFrom || filter.updatedAtTo ? 1 : 0) + (filter.deployedAtFrom || filter.deployedAtTo ? 1 : 0);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-2 mb-6 flex-wrap",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 text-green-700 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                className: "h-3.5 w-3.5",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                        x: "3",
                                        y: "3",
                                        width: "7",
                                        height: "7",
                                        rx: "1"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                        x: "14",
                                        y: "3",
                                        width: "7",
                                        height: "7",
                                        rx: "1"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                        x: "14",
                                        y: "14",
                                        width: "7",
                                        height: "7",
                                        rx: "1"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                        x: "3",
                                        y: "14",
                                        width: "7",
                                        height: "7",
                                        rx: "1"
                                    })
                                ]
                            }),
                            "Latest build not deployed"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 text-amber-700 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                className: "h-3.5 w-3.5",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("polyline", {
                                        points: "23 4 23 10 17 10"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                        d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
                                    })
                                ]
                            }),
                            "Not yet deployed"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                className: "h-3.5 w-3.5",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                        d: "m3.3 7 8.7 5 8.7-5"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                        d: "M12 22V12"
                                    })
                                ]
                            }),
                            "Latest build deployed"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary text-muted-foreground px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                className: "h-3.5 w-3.5",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                        d: "m4.9 4.9 14.2 14.2"
                                    })
                                ]
                            }),
                            "Removed from release"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between gap-4 mb-3 flex-wrap",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                className: "text-lg font-semibold",
                                children: "Artifacts"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(badge/* .Badge */.E, {
                                variant: "outline",
                                className: "border-green-200 bg-green-50 text-green-700 text-[11px] font-bold uppercase tracking-wide dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
                                children: [
                                    activeCount,
                                    " Active"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(badge/* .Badge */.E, {
                                variant: "outline",
                                className: "border-border bg-secondary text-muted-foreground text-[11px] font-bold uppercase tracking-wide",
                                children: [
                                    removedCount,
                                    " Removed"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative w-64",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(search/* ["default"] */.A, {
                                        className: "absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground pointer-events-none"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                        placeholder: "Search artifacts...",
                                        value: filter.search,
                                        onChange: (e)=>update({
                                                search: e.target.value
                                            }),
                                        className: "h-9 pl-8"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                variant: "outline",
                                size: "icon",
                                className: (0,utils.cn)("h-9 w-9", drawerOpen && "bg-accent"),
                                onClick: ()=>setDrawerOpen((v)=>!v),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(sliders_horizontal/* ["default"] */.A, {
                                    className: "size-4"
                                })
                            })
                        ]
                    })
                ]
            }),
            drawerOpen && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "rounded-lg border border-border bg-card overflow-hidden mb-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid grid-cols-3 divide-x divide-border",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "p-4 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                        className: "text-[11px] font-bold text-muted-foreground uppercase tracking-wide",
                                        children: "App Key"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "space-y-1",
                                        children: appKeys.map((ak)=>{
                                            const count = appKeyFacetCounts.get(ak) ?? 0;
                                            const isChecked = filter.appKeys.includes(ak);
                                            const id = `ak-${ak}`;
                                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-2 py-1 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_checkbox/* .Checkbox */.S, {
                                                        id: id,
                                                        checked: isChecked,
                                                        onCheckedChange: ()=>{
                                                            update({
                                                                appKeys: isChecked ? filter.appKeys.filter((k)=>k !== ak) : [
                                                                    ...filter.appKeys,
                                                                    ak
                                                                ]
                                                            });
                                                        }
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                        htmlFor: id,
                                                        className: "flex items-center gap-3 cursor-pointer min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "truncate",
                                                                children: ak
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "text-xs text-muted-foreground tabular-nums shrink-0",
                                                                children: count
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, ak);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "p-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                        className: "text-[11px] font-bold text-muted-foreground uppercase tracking-wide",
                                        children: "Updated At"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                type: "date",
                                                value: filter.updatedAtFrom,
                                                onChange: (e)=>update({
                                                        updatedAtFrom: e.target.value
                                                    }),
                                                className: "h-8 text-xs",
                                                placeholder: "From"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                type: "date",
                                                value: filter.updatedAtTo,
                                                min: filter.updatedAtFrom || undefined,
                                                onChange: (e)=>update({
                                                        updatedAtTo: e.target.value
                                                    }),
                                                className: "h-8 text-xs",
                                                placeholder: "To"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "p-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                        className: "text-[11px] font-bold text-muted-foreground uppercase tracking-wide",
                                        children: "Deployed At"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                type: "date",
                                                value: filter.deployedAtFrom,
                                                onChange: (e)=>update({
                                                        deployedAtFrom: e.target.value
                                                    }),
                                                className: "h-8 text-xs",
                                                placeholder: "From"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                type: "date",
                                                value: filter.deployedAtTo,
                                                min: filter.deployedAtFrom || undefined,
                                                onChange: (e)=>update({
                                                        deployedAtTo: e.target.value
                                                    }),
                                                className: "h-8 text-xs",
                                                placeholder: "To"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex items-center justify-end px-4 py-2.5 border-t border-border bg-secondary/50",
                        children: activeFilterCount > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: clearAll,
                            className: "text-xs text-muted-foreground underline decoration-border hover:text-foreground transition-colors",
                            children: "Reset all"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "rounded-lg border border-border bg-card overflow-hidden",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_table/* .Table */.XI, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHeader */.A0, {
                            children: table.getHeaderGroups().map((hg)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableRow */.Hj, {
                                    children: hg.headers.map((header)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHead */.nd, {
                                            className: (0,utils.cn)("text-[11px] font-semibold text-muted-foreground uppercase tracking-wide", header.column.getCanSort() && "cursor-pointer select-none hover:text-foreground"),
                                            onClick: header.column.getToggleSortingHandler(),
                                            children: header.isPlaceholder ? null : (0,lib/* .flexRender */.Kv)(header.column.columnDef.header, header.getContext())
                                        }, header.id))
                                }, hg.id))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableBody */.BF, {
                            children: table.getRowModel().rows.length > 0 ? table.getRowModel().rows.map((row)=>{
                                const a = row.original;
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableRow */.Hj, {
                                    className: (0,utils.cn)("border-b border-border last:border-b-0", a.isRemoved && "opacity-50"),
                                    style: a.isRemoved ? {} : {
                                        boxShadow: "inset 3px 0 0 0 " + (a.deployedAt ? "#22c55e" : "#f59e0b")
                                    },
                                    children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                            className: "py-3",
                                            children: (0,lib/* .flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext())
                                        }, cell.id))
                                }, row.id);
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableRow */.Hj, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                    colSpan: columns.length,
                                    className: "h-24 text-center text-muted-foreground",
                                    children: "No artifacts match your search or filters."
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/ui/select.tsx
var ui_select = __webpack_require__(24219);
// EXTERNAL MODULE: ./src/components/common/page-title.tsx
var page_title = __webpack_require__(1692);
;// CONCATENATED MODULE: ./src/components/releases/releases-detail-deploy-env-tab.tsx






const environmentOptions = [
    "Dev",
    "QA",
    "QA2",
    "Staging",
    "Production"
];
function DeployEnvTab({ artifacts }) {
    const [sortDir, setSortDir] = (0,react.useState)("asc");
    const [selections, setSelections] = (0,react.useState)({});
    const activeArtifacts = (0,react.useMemo)(()=>artifacts.filter((a)=>!a.isRemoved), [
        artifacts
    ]);
    const sorted = (0,react.useMemo)(()=>{
        const sorted = [
            ...activeArtifacts
        ].sort((a, b)=>a.name.localeCompare(b.name));
        if (sortDir === "desc") sorted.reverse();
        return sorted;
    }, [
        activeArtifacts,
        sortDir
    ]);
    function setEnv(artifactId, col, value) {
        setSelections((prev)=>({
                ...prev,
                [artifactId]: {
                    qa: "",
                    stg: "",
                    prd: "",
                    ...prev[artifactId],
                    [col]: value
                }
            }));
    }
    function getEnv(artifactId, col) {
        return selections[artifactId]?.[col] ?? "";
    }
    function renderSelect(artifact, col) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* .Select */.l6, {
            value: getEnv(artifact.id, col),
            onValueChange: (v)=>setEnv(artifact.id, col, v),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectTrigger */.bq, {
                    className: "h-9 w-full text-muted-foreground data-placeholder:text-muted-foreground",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectValue */.yv, {
                        placeholder: "Select Environment"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectContent */.gC, {
                    children: environmentOptions.map((env)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                            value: env,
                            children: env
                        }, env))
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(page_title/* .PageTitle */.s, {
                title: "Deployment Environments",
                subtitle: "Select the default deployment environment for each artifact when the release is in different statuses. You will still have the option to select a different environment when creating a deployment.",
                hasSidebar: true,
                badge: `${activeArtifacts.length} Artifacts`
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "mt-6"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "rounded-lg border border-border bg-card overflow-hidden",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_table/* .Table */.XI, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHeader */.A0, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_table/* .TableRow */.Hj, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHead */.nd, {
                                        className: "w-[28%] cursor-pointer select-none text-[11px] font-semibold text-muted-foreground uppercase tracking-wide hover:text-foreground",
                                        onClick: ()=>setSortDir((d)=>d === "asc" ? "desc" : "asc"),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "inline-flex items-center gap-1.5",
                                            children: [
                                                "Name",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up_down/* ["default"] */.A, {
                                                    className: "size-3.5 text-muted-foreground"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHead */.nd, {
                                        className: "w-[24%] text-[11px] font-semibold text-muted-foreground uppercase tracking-wide",
                                        children: "QA"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHead */.nd, {
                                        className: "w-[24%] text-[11px] font-semibold text-muted-foreground uppercase tracking-wide",
                                        children: "STG"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHead */.nd, {
                                        className: "w-[24%] text-[11px] font-semibold text-muted-foreground uppercase tracking-wide",
                                        children: "PRD"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableBody */.BF, {
                            children: sorted.length > 0 ? sorted.map((artifact)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_table/* .TableRow */.Hj, {
                                    className: "border-b border-border last:border-b-0",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                            className: "py-3 font-medium",
                                            children: artifact.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                            className: "py-3",
                                            children: renderSelect(artifact, "qa")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                            className: "py-3",
                                            children: renderSelect(artifact, "stg")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                            className: "py-3",
                                            children: renderSelect(artifact, "prd")
                                        })
                                    ]
                                }, artifact.id)) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableRow */.Hj, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                    colSpan: 4,
                                    className: "h-24 text-center text-muted-foreground",
                                    children: "No active artifacts found."
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.mjs
var check = __webpack_require__(23853);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.mjs
var x = __webpack_require__(78265);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.mjs
var clock = __webpack_require__(70455);
;// CONCATENATED MODULE: ./src/components/releases/release-detail-checklist.tsx



function ReleaseChecklistTab({ checklist, onChecklistChange, onShowToast }) {
    const signedOffCount = checklist.filter((c)=>c.itemValue === "yes").length;
    const totalCount = checklist.length;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(page_title/* .PageTitle */.s, {
                title: "Release Checklist",
                subtitle: "Track sign-off status for each checklist item required before this release can ship. Select Yes or No to record a sign-off, or clear an item to reset it.",
                badge: `${signedOffCount} of ${totalCount} Signed Off`,
                hasSidebar: true
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "mt-6"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex flex-col gap-2",
                children: checklist.map((item, i)=>{
                    const yesChecked = item.itemValue === "yes";
                    const noChecked = item.itemValue === "no";
                    let statusIcon;
                    if (item.itemValue === "yes") {
                        statusIcon = /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "flex items-center justify-center size-7 rounded-full bg-green-100 text-green-700 shrink-0 dark:bg-green-900/30 dark:text-green-400",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(check/* ["default"] */.A, {
                                className: "size-4"
                            })
                        });
                    } else if (item.itemValue === "no") {
                        statusIcon = /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "flex items-center justify-center size-7 rounded-full bg-red-100 text-red-700 shrink-0 dark:bg-red-900/30 dark:text-red-400",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* ["default"] */.A, {
                                className: "size-4"
                            })
                        });
                    } else {
                        statusIcon = /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "flex items-center justify-center size-7 rounded-full bg-secondary text-muted-foreground shrink-0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(clock/* ["default"] */.A, {
                                className: "size-3.5"
                            })
                        });
                    }
                    let metaLine;
                    if (item.signOffBy) {
                        metaLine = /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                "Signed off by",
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-foreground font-medium",
                                    children: item.signOffBy
                                }),
                                " ",
                                "on ",
                                item.signOffAt,
                                item.updatedBy && item.updatedAt && (item.updatedBy !== item.signOffBy || item.updatedAt !== item.signOffAt) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        " ",
                                        "\\u00b7 updated by",
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-foreground font-medium",
                                            children: item.updatedBy
                                        }),
                                        " ",
                                        "on ",
                                        item.updatedAt
                                    ]
                                })
                            ]
                        });
                    } else {
                        metaLine = "Not yet signed off";
                    }
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "rounded-lg border border-border bg-card px-4 py-3.5",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center gap-3.5",
                            children: [
                                statusIcon,
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "font-medium leading-tight",
                                            children: item.itemName
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-[12.5px] text-muted-foreground mt-0.5",
                                            children: metaLine
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-4 shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "flex items-center gap-1.5 text-sm cursor-pointer select-none",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    type: "radio",
                                                    name: `checklist-${item.itemName}`,
                                                    className: "checklist-radio size-3.5 accent-primary",
                                                    checked: yesChecked,
                                                    onChange: ()=>{
                                                        onChecklistChange(i, "yes");
                                                        onShowToast(`${item.itemName} marked Yes`, "success");
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "Yes"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "flex items-center gap-1.5 text-sm cursor-pointer select-none",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    type: "radio",
                                                    name: `checklist-${item.itemName}`,
                                                    className: "checklist-radio size-3.5 accent-primary",
                                                    checked: noChecked,
                                                    onChange: ()=>{
                                                        onChecklistChange(i, "no");
                                                        onShowToast(`${item.itemName} marked No`, "destructive");
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "No"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                            type: "button",
                                            className: "text-[12.5px] text-muted-foreground underline decoration-border hover:text-foreground transition-colors",
                                            onClick: ()=>{
                                                onChecklistChange(i, null);
                                                onShowToast(`${item.itemName} cleared`);
                                            },
                                            children: "Clear"
                                        })
                                    ]
                                })
                            ]
                        })
                    }, item.itemName);
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bold.mjs
var bold = __webpack_require__(14606);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/italic.mjs
var italic = __webpack_require__(50575);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/heading-1.mjs
var heading_1 = __webpack_require__(69381);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/list.mjs
var list = __webpack_require__(62235);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/list-ordered.mjs
var list_ordered = __webpack_require__(59563);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/link.mjs
var icons_link = __webpack_require__(23023);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/save.mjs
var save = __webpack_require__(9680);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/pencil-line.mjs
var pencil_line = __webpack_require__(91287);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/eye.mjs
var eye = __webpack_require__(46742);
// EXTERNAL MODULE: ./src/components/ui/textarea.tsx
var ui_textarea = __webpack_require__(57529);
;// CONCATENATED MODULE: ./src/components/releases/release-detail-information.tsx





function renderMarkdown(text) {
    let html = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    html = html.replace(/^### (.+)$/gm, "<h3 class='text-lg font-semibold mt-4 mb-1'>$1</h3>").replace(/^## (.+)$/gm, "<h2 class='text-xl font-semibold mt-5 mb-2'>$1</h2>").replace(/^# (.+)$/gm, "<h1 class='text-2xl font-semibold mt-6 mb-2'>$1</h1>");
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`(.+?)`/g, "<code class='rounded bg-muted px-1 py-0.5 text-xs font-mono'>$1</code>");
    html = html.replace(/^- (.+)$/gm, "<li class='ml-5 list-disc text-sm'>$1</li>").replace(/^\d+\. (.+)$/gm, "<li class='ml-5 list-decimal text-sm'>$1</li>");
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2' class='text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300'>$1</a>");
    html = html.replace(/\n\n/g, "</p><p class='text-sm'>").replace(/\n/g, "<br />");
    html = `<p class='text-sm'>${html}</p>`;
    return html;
}
const toolbarItems = [
    {
        label: "Bold",
        icon: bold/* ["default"] */.A,
        prefix: "**",
        suffix: "**"
    },
    {
        label: "Italic",
        icon: italic/* ["default"] */.A,
        prefix: "*",
        suffix: "*"
    },
    {
        label: "Heading",
        icon: heading_1/* ["default"] */.A,
        prefix: "## ",
        suffix: ""
    },
    {
        label: "Bullet List",
        icon: list/* ["default"] */.A,
        prefix: "- ",
        suffix: ""
    },
    {
        label: "Numbered List",
        icon: list_ordered/* ["default"] */.A,
        prefix: "1. ",
        suffix: ""
    },
    {
        label: "Link",
        icon: icons_link/* ["default"] */.A,
        prefix: "[",
        suffix: "](url)"
    }
];
function ReleaseInformationTab({ initialContent = "" }) {
    const [content, setContent] = (0,react.useState)(initialContent);
    const [editing, setEditing] = (0,react.useState)(false);
    const [editorTab, setEditorTab] = (0,react.useState)("write");
    const insertMarkdown = (0,react.useCallback)((prefix, suffix)=>{
        const textarea = document.querySelector("#release-notes-textarea");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selected = content.slice(start, end);
        const before = content.slice(0, start);
        const after = content.slice(end);
        const inserted = prefix + selected + suffix;
        setContent(before + inserted + after);
        requestAnimationFrame(()=>{
            textarea.focus();
            textarea.setSelectionRange(start + prefix.length, start + prefix.length + selected.length);
        });
    }, [
        content
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                        className: "text-lg font-semibold",
                        children: "Release Information"
                    }),
                    editing ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        type: "button",
                        onClick: ()=>setEditing(false),
                        className: "inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(save/* ["default"] */.A, {
                                className: "size-3.5"
                            }),
                            "Save"
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        type: "button",
                        onClick: ()=>setEditing(true),
                        className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(pencil_line/* ["default"] */.A, {
                                className: "size-3.5"
                            }),
                            "Edit"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "text-sm text-muted-foreground mb-4 max-w-3xl",
                children: "Add release notes, known issues, and any other information relevant to this release. Markdown formatting is supported."
            }),
            !editing ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "min-h-[280px] rounded-lg border border-border bg-card p-4",
                children: content ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "prose prose-sm max-w-none dark:prose-invert",
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown preview
                    dangerouslySetInnerHTML: {
                        __html: renderMarkdown(content)
                    }
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Nothing to preview yet."
                })
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "rounded-lg border border-border bg-card overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between border-b border-border bg-muted/50",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex items-center gap-0.5 px-2 py-1.5",
                                children: toolbarItems.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        type: "button",
                                        title: item.label,
                                        onClick: ()=>insertMarkdown(item.prefix, item.suffix),
                                        className: "inline-flex items-center justify-center size-7 rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(item.icon, {
                                            className: "size-3.5"
                                        })
                                    }, item.label))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-0.5 px-2 py-1.5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        type: "button",
                                        onClick: ()=>setEditorTab("write"),
                                        className: (0,utils.cn)("inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors", editorTab === "write" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(pencil_line/* ["default"] */.A, {
                                                className: "size-3"
                                            }),
                                            "Write"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        type: "button",
                                        onClick: ()=>setEditorTab("preview"),
                                        className: (0,utils.cn)("inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors", editorTab === "preview" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(eye/* ["default"] */.A, {
                                                className: "size-3"
                                            }),
                                            "Preview"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    editorTab === "write" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_textarea/* .Textarea */.T, {
                        id: "release-notes-textarea",
                        placeholder: "Write your release notes in markdown...",
                        value: content,
                        onChange: (e)=>setContent(e.target.value),
                        className: "min-h-[280px] rounded-none border-0 resize-y focus-visible:ring-0"
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "min-h-[280px] p-4",
                        children: content ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "prose prose-sm max-w-none dark:prose-invert",
                            // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown preview
                            dangerouslySetInnerHTML: {
                                __html: renderMarkdown(content)
                            }
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Nothing to preview yet."
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/plus.mjs
var plus = __webpack_require__(44207);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.mjs
var chevron_down = __webpack_require__(23489);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.mjs
var chevron_right = __webpack_require__(58417);
;// CONCATENATED MODULE: ./src/data/dummyData.tsx
// TYPES
// DATA
const releaseChecklist = (/* unused pure expression or super */ null && ([
    {
        releaseName: 'release/ABC123.0',
        itemName: 'QA Sign Off',
        itemValue: 'yes',
        signOffBy: 'QA Test User',
        signOffAt: 'Apr 3, 2025',
        updatedBy: 'QA Test User',
        updatedAt: 'Apr 3, 2025',
        isRequired: true
    },
    {
        releaseName: 'release/ABC123.0',
        itemName: 'STG Sign Off',
        itemValue: 'yes',
        signOffBy: 'STG Test User',
        signOffAt: 'Apr 3, 2025',
        updatedBy: 'STG Test User',
        updatedAt: 'Apr 3, 2025',
        isRequired: true
    },
    {
        releaseName: 'release/ABC123.0',
        itemName: 'UAT Sign Off',
        itemValue: 'yes',
        signOffBy: 'UAT Test User',
        signOffAt: 'Apr 3, 2025',
        updatedBy: 'UAT Test User',
        updatedAt: 'Apr 3, 2025',
        isRequired: true
    },
    {
        releaseName: 'release/ABC123.0',
        itemName: 'Dynamic Vulnerability Scan',
        itemValue: null,
        signOffBy: null,
        signOffAt: null,
        updatedBy: null,
        updatedAt: null,
        isRequired: true
    },
    {
        releaseName: 'release/ABC123.0',
        itemName: 'Penetration Testing',
        itemValue: null,
        signOffBy: null,
        signOffAt: null,
        updatedBy: null,
        updatedAt: null,
        isRequired: true
    },
    {
        releaseName: 'release/ABC123.0',
        itemName: 'Safety Risk Management',
        itemValue: null,
        signOffBy: null,
        signOffAt: null,
        updatedBy: null,
        updatedAt: null,
        isRequired: true
    },
    {
        releaseName: 'release/ABC123.0',
        itemName: 'NOC Training',
        itemValue: 'yes',
        signOffBy: 'NOC Test User',
        signOffAt: 'Apr 3, 2025',
        updatedBy: 'NOC Test User',
        updatedAt: 'Apr 3, 2025',
        isRequired: true
    }
]));
const dummyData_releases = (/* unused pure expression or super */ null && ([
    {
        id: 1,
        name: 'release/BCB342',
        numberOfArtifacts: 1,
        status: 'archived',
        team: 'Two-Tone',
        scrumMaster: 'Don Remon',
        stageDate: '2025-04-03 02:36:34',
        estProdDate: '2025-08-02 08:36:11',
        archivedDate: '2025-03-06 17:41:50',
        defaultEnv: 'STG',
        releaseChecklist
    },
    {
        id: 2,
        name: 'hotfix/KAO3920',
        numberOfArtifacts: 2,
        status: 'archived',
        team: 'SAFEWAY',
        scrumMaster: 'Chad Fanning',
        stageDate: '2025-03-08 14:22:15',
        estProdDate: '2025-05-30 02:08:47',
        archivedDate: '2025-04-13 23:07:18',
        defaultEnv: 'STG',
        releaseChecklist
    },
    {
        id: 3,
        name: 'release/GHD830',
        numberOfArtifacts: 3,
        status: 'qa certified',
        team: 'Degree',
        scrumMaster: 'Rockie Gives',
        stageDate: '2025-03-13 14:53:44',
        estProdDate: '2025-04-15 07:02:14',
        archivedDate: '2025-04-16 18:12:17',
        defaultEnv: 'QA1',
        releaseChecklist
    },
    {
        id: 4,
        name: 'release/ABC123',
        numberOfArtifacts: 4,
        status: 'canceled',
        team: 'LBEL',
        scrumMaster: 'Adriana Comoletti',
        stageDate: '2025-03-07 01:31:46',
        estProdDate: '2025-05-14 11:14:02',
        archivedDate: '2025-04-13 18:39:06',
        defaultEnv: 'QA2',
        releaseChecklist
    },
    {
        id: 5,
        name: 'hotfix/HDK832',
        numberOfArtifacts: 5,
        status: 'initialized',
        team: 'Blue',
        scrumMaster: 'Leo Ghiroldi',
        stageDate: '2025-03-14 19:33:06',
        estProdDate: '2025-04-16 01:27:41',
        archivedDate: '2025-03-30 20:30:18',
        defaultEnv: 'QA2',
        releaseChecklist
    },
    {
        id: 6,
        name: 'release/XYZ5678',
        numberOfArtifacts: 6,
        status: 'in qa',
        team: 'Sertra',
        scrumMaster: 'Isacco Clawe',
        stageDate: '2025-03-14 18:54:56',
        estProdDate: '2025-06-11 20:29:10',
        archivedDate: '2025-03-26 05:39:49',
        defaultEnv: 'QA2',
        releaseChecklist
    },
    {
        id: 7,
        name: 'release/DEF372',
        numberOfArtifacts: 7,
        status: 'archived',
        team: 'Sike',
        scrumMaster: 'Damiano Brainsby',
        stageDate: '2025-04-02 19:29:16',
        estProdDate: '2025-04-10 06:48:13',
        archivedDate: '2025-04-18 15:44:56',
        defaultEnv: 'STG',
        releaseChecklist
    },
    {
        id: 8,
        name: 'release/LMN4321',
        numberOfArtifacts: 8,
        status: 'open',
        team: 'Burton',
        scrumMaster: 'Grover Feyer',
        stageDate: '2025-04-26 21:54:31',
        estProdDate: '2025-08-09 01:33:48',
        archivedDate: '2025-04-08 12:05:47',
        defaultEnv: 'STG',
        releaseChecklist
    },
    {
        id: 9,
        name: 'hotfix/KAO3920',
        numberOfArtifacts: 9,
        status: 'in qa',
        team: 'Xyntha',
        scrumMaster: 'Myrtice Verdon',
        stageDate: '2025-03-30 12:20:13',
        estProdDate: '2025-07-22 11:06:01',
        archivedDate: '2025-04-13 01:46:23',
        defaultEnv: 'QA1',
        releaseChecklist
    },
    {
        id: 10,
        name: 'release/JKL9876',
        numberOfArtifacts: 10,
        status: 'canceled',
        team: 'Support',
        scrumMaster: 'Eduardo Thirlwall',
        stageDate: '2025-04-11 02:25:05',
        estProdDate: '2025-08-01 05:14:50',
        archivedDate: '2025-04-26 03:16:08',
        defaultEnv: 'STG',
        releaseChecklist
    },
    {
        id: 11,
        name: 'release/GHD830',
        numberOfArtifacts: 11,
        status: 'released',
        team: 'COCOA BUTTER',
        scrumMaster: 'Keene Applewhite',
        stageDate: '2025-04-01 06:04:46',
        estProdDate: '2025-05-26 03:11:11',
        archivedDate: '2025-03-21 15:29:17',
        defaultEnv: 'QA1',
        releaseChecklist
    },
    {
        id: 12,
        name: 'hotfix/HDK832',
        numberOfArtifacts: 12,
        status: 'open',
        team: 'Pleo',
        scrumMaster: 'Nancie Cossor',
        stageDate: '2025-03-28 11:03:38',
        estProdDate: '2025-05-16 19:46:37',
        archivedDate: '2025-04-21 04:14:11',
        defaultEnv: 'QA2',
        releaseChecklist
    },
    {
        id: 13,
        name: 'release/GHD830',
        numberOfArtifacts: 13,
        status: 'released',
        team: 'WINRHO',
        scrumMaster: 'Aldus Dosedale',
        stageDate: '2025-03-05 03:41:10',
        estProdDate: '2025-04-12 23:16:38',
        archivedDate: '2025-03-03 06:44:34',
        defaultEnv: 'QA2',
        releaseChecklist
    },
    {
        id: 14,
        name: 'release/DEF372',
        numberOfArtifacts: 14,
        status: 'initialized',
        team: 'Badger',
        scrumMaster: 'Andrus Hutcheons',
        stageDate: '2025-03-11 18:47:57',
        estProdDate: '2025-06-19 03:43:13',
        archivedDate: '2025-03-23 18:45:59',
        defaultEnv: 'QA1',
        releaseChecklist
    },
    {
        id: 15,
        name: 'release/DEF372',
        numberOfArtifacts: 15,
        status: 'released',
        team: 'Dial',
        scrumMaster: 'Thorsten Duffell',
        stageDate: '2025-03-15 16:27:11',
        estProdDate: '2025-04-17 05:08:43',
        archivedDate: '2025-03-03 01:38:16',
        defaultEnv: 'STG',
        releaseChecklist
    },
    {
        id: 16,
        name: 'hotfix/KAO3920',
        numberOfArtifacts: 16,
        status: 'released',
        team: 'Prednisone',
        scrumMaster: 'Pavel Ledrun',
        stageDate: '2025-04-22 09:51:26',
        estProdDate: '2025-07-14 20:07:21',
        archivedDate: '2025-03-08 10:49:43',
        defaultEnv: 'QA1',
        releaseChecklist
    },
    {
        id: 17,
        name: 'release/BCB342',
        numberOfArtifacts: 17,
        status: 'initialized',
        team: 'Cephalexin',
        scrumMaster: 'Brit Casotti',
        stageDate: '2025-03-01 16:29:02',
        estProdDate: '2025-04-30 13:02:47',
        archivedDate: '2025-04-13 05:42:17',
        defaultEnv: 'QA2',
        releaseChecklist
    },
    {
        id: 18,
        name: 'release/GHD830',
        numberOfArtifacts: 18,
        status: 'stage certified',
        team: 'Equaline',
        scrumMaster: 'Nathaniel Wolfart',
        stageDate: '2025-04-12 15:43:37',
        estProdDate: '2025-06-06 00:59:32',
        archivedDate: '2025-04-16 04:16:05',
        defaultEnv: 'QA2',
        releaseChecklist
    },
    {
        id: 19,
        name: 'hotfix/HDK833',
        numberOfArtifacts: 19,
        status: 'stage certified',
        team: 'LISINOPRIL',
        scrumMaster: 'Bartie Beevens',
        stageDate: '2025-03-12 01:31:24',
        estProdDate: '2025-07-18 20:47:44',
        archivedDate: '2025-03-10 23:15:45',
        defaultEnv: 'QA1',
        releaseChecklist
    },
    {
        id: 20,
        name: 'release/PQR2468',
        numberOfArtifacts: 20,
        status: 'open',
        team: 'Levodopa',
        scrumMaster: 'Michaelina McGiffin',
        stageDate: '2025-03-18 14:51:15',
        estProdDate: '2025-07-30 07:46:14',
        archivedDate: '2025-03-09 17:04:44',
        defaultEnv: 'QA1',
        releaseChecklist
    }
]));
const environments = (/* unused pure expression or super */ null && ([
    {
        id: '1',
        name: 'IN2',
        type: 'IN2',
        silos: '',
        deploymentType: [
            'green',
            'blue'
        ],
        deploymentHandler: 'AWX Tower',
        updatedAt: 'Nov 21, 2023',
        updatedBy: 'Test User'
    },
    {
        id: '2',
        name: 'QA1',
        type: 'QA1',
        silos: '',
        deploymentType: [
            'green',
            'blue'
        ],
        deploymentHandler: 'AWX Tower',
        updatedAt: 'Oct 1, 2024',
        updatedBy: 'Test User'
    },
    {
        id: '3',
        name: 'PRE',
        type: 'PRE',
        silos: '',
        deploymentType: [
            'green',
            'blue'
        ],
        deploymentHandler: 'AWX Tower',
        updatedAt: 'Apr 18, 2024',
        updatedBy: 'Test User'
    },
    {
        id: '4',
        name: 'PRD',
        type: 'PRD',
        silos: '',
        deploymentType: [
            'green',
            'blue'
        ],
        deploymentHandler: 'AWX Tower',
        updatedAt: 'Jan 3, 2024',
        updatedBy: 'Test User'
    }
]));
const databaseScripts = [
    {
        id: '1',
        releaseName: 'hotfix/HDK832',
        name: 'app1',
        database: 'data_house',
        type: 'Type1',
        hash: 'ACD321SA',
        pullRequest: '',
        createdAt: '2025-02-31 02:19:58',
        updatedAt: '2025-03-31 02:19:58',
        deployedAt: 'IN2',
        fileNames: [
            'filename.sql',
            'filename2.sql'
        ],
        isRemoved: false
    },
    {
        id: '2',
        releaseName: 'hotfix/HDK832',
        name: 'app2',
        database: 'data_house2',
        type: 'Type2',
        hash: 'ACD321DA',
        pullRequest: '',
        createdAt: '2025-02-31 02:19:58',
        updatedAt: '2025-03-31 02:19:58',
        deployedAt: 'IN2',
        fileNames: [
            'filename.sql',
            'filename2.sql'
        ],
        isRemoved: false
    },
    {
        id: '2',
        releaseName: 'hotfix/HDK832',
        name: 'app2',
        database: 'data_house2',
        type: 'Type1',
        hash: 'ACD321DA',
        pullRequest: '',
        createdAt: '2025-02-31 02:19:58',
        updatedAt: '2025-03-31 02:19:58',
        deployedAt: 'IN2',
        fileNames: [
            'filename.sql',
            'filename2.sql'
        ],
        isRemoved: true
    }
];
const dummyData_artifacts = (/* unused pure expression or super */ null && ([
    {
        id: 1,
        name: 'Keylex',
        appKey: 'REACT',
        releaseName: 'release_DEF372',
        version: '0.9.0',
        buildNumber: 16,
        hash: '375NG73BE',
        buildTime: '2025-03-31 02:19:58',
        createdAt: '2024-05-05 21:15:01',
        updatedAt: '2024-10-13 11:45:34',
        deployedAt: '2024-10-29 19:27:21',
        archivedDate: '2024-07-10 11:10:05',
        status: 'archived',
        ticketNumber: 'XGH-8003',
        isRemoved: false,
        isDeployed: false
    },
    {
        id: 2,
        name: 'Transcof',
        appKey: 'JAVA',
        releaseName: 'hotfix/HDK832',
        version: '5.4',
        buildNumber: 23,
        hash: '799OH98GW',
        buildTime: '2024-10-06 06:44:36',
        createdAt: '2024-11-22 17:38:10',
        updatedAt: '2024-08-21 06:40:34',
        deployedAt: '2024-05-18 12:10:12',
        archivedDate: '2025-02-14 20:51:02',
        status: 'active',
        ticketNumber: 'UJI-4352',
        isRemoved: false,
        isDeployed: false
    },
    {
        id: 3,
        name: 'Quo Lux',
        appKey: 'SPRINGBOOT',
        releaseName: 'release_GHD830',
        version: '0.91',
        buildNumber: 12,
        hash: '029VZ09WW',
        buildTime: '2024-09-27 10:36:59',
        createdAt: '2024-11-30 03:02:38',
        updatedAt: '2024-06-27 23:23:42',
        deployedAt: '2024-08-26 02:06:46',
        archivedDate: '2024-09-24 15:34:49',
        status: 'archived',
        ticketNumber: 'UOQ-8105',
        isRemoved: false,
        isDeployed: true
    },
    {
        id: 4,
        name: 'Duobam',
        appKey: 'SPRINGBOOT',
        releaseName: 'hotfix/KAO3920',
        version: '3.92',
        buildNumber: 19,
        hash: '731OY74SQ',
        buildTime: '2024-08-19 08:41:28',
        createdAt: '2024-08-07 19:23:08',
        updatedAt: '2025-02-22 14:30:17',
        deployedAt: '2025-04-29 04:58:00',
        archivedDate: '2024-11-18 21:26:49',
        status: 'active',
        ticketNumber: 'PHO-5780',
        isRemoved: true,
        isDeployed: false
    },
    {
        id: 5,
        name: 'Prodder',
        appKey: 'SPRINGBOOT',
        releaseName: 'release/ABC123',
        version: '4.25',
        buildNumber: 2,
        hash: '958XW69GA',
        buildTime: '2024-05-05 14:13:34',
        createdAt: '2025-01-22 06:51:00',
        updatedAt: '2025-01-15 01:55:58',
        deployedAt: '2024-05-19 13:55:20',
        archivedDate: '2024-05-13 09:20:32',
        status: 'archived',
        ticketNumber: 'MXR-4171',
        isRemoved: false,
        isDeployed: false
    },
    {
        id: 6,
        name: 'Home Ing',
        appKey: 'WWW',
        releaseName: 'release/ABC123',
        version: '7.2',
        buildNumber: 3,
        hash: '941MZ12QK',
        buildTime: '2025-02-26 02:04:51',
        createdAt: '2024-05-08 04:33:39',
        updatedAt: '2024-10-15 19:18:25',
        deployedAt: '2024-05-26 09:11:36',
        archivedDate: '2024-05-05 00:13:26',
        status: 'active',
        ticketNumber: 'RPU-1442',
        isRemoved: false,
        isDeployed: true
    },
    {
        id: 7,
        name: 'Tres-Zap',
        appKey: 'SPRINGBOOT',
        releaseName: 'hotfix/HDK832',
        version: '4.1',
        buildNumber: 7,
        hash: '744NG46SB',
        buildTime: '2024-09-08 08:31:37',
        createdAt: '2025-02-18 21:15:20',
        updatedAt: '2025-04-13 15:50:44',
        deployedAt: '2024-07-22 20:17:32',
        archivedDate: '2025-03-11 22:52:06',
        status: 'archived',
        ticketNumber: 'AFO-0500',
        isRemoved: false,
        isDeployed: false
    },
    {
        id: 8,
        name: 'Zoolab',
        appKey: 'REACT',
        releaseName: 'release/ABC123',
        version: '2.8',
        buildNumber: 3,
        hash: '594MG12AJ',
        buildTime: '2024-10-15 15:06:28',
        createdAt: '2024-08-22 03:25:14',
        updatedAt: '2025-03-13 15:51:16',
        deployedAt: '2024-08-10 02:33:30',
        archivedDate: '2024-12-13 11:58:46',
        status: 'archived',
        ticketNumber: 'HTD-3154',
        isRemoved: false,
        isDeployed: false
    },
    {
        id: 9,
        name: 'A-Solowarm',
        appKey: 'WWW',
        releaseName: 'hotfix/HDK832',
        version: '0.29',
        buildNumber: 10,
        hash: '127UF78WF',
        buildTime: '2024-10-27 23:35:05',
        createdAt: '2024-08-03 12:27:49',
        updatedAt: '2024-05-14 00:06:32',
        deployedAt: '2025-02-23 16:22:53',
        archivedDate: '2025-01-15 01:40:16',
        status: 'archived',
        ticketNumber: 'RSL-5121',
        isRemoved: true,
        isDeployed: false
    },
    {
        id: 10,
        name: 'Lotstring',
        appKey: 'WWW',
        releaseName: 'hotfix/HDK832',
        version: '0.7.7',
        buildNumber: 14,
        hash: '535CB14MF',
        buildTime: '2025-01-28 04:31:59',
        createdAt: '2025-04-25 16:00:18',
        updatedAt: '2024-10-12 04:30:45',
        deployedAt: '2024-10-28 05:19:07',
        archivedDate: '2025-03-16 03:09:15',
        status: 'archived',
        ticketNumber: 'MJQ-5232',
        isRemoved: true,
        isDeployed: true
    },
    {
        id: 11,
        name: 'Aerified',
        appKey: 'WWW',
        releaseName: 'release_GHD830',
        version: '4.5',
        buildNumber: 24,
        hash: '957HB32WH',
        buildTime: '2025-02-17 22:58:56',
        createdAt: '2025-02-03 09:24:12',
        updatedAt: '2025-02-10 02:35:44',
        deployedAt: '2024-05-16 07:39:00',
        archivedDate: '2025-04-11 05:47:53',
        status: 'active',
        ticketNumber: 'LDZ-7242',
        isRemoved: true,
        isDeployed: false
    },
    {
        id: 12,
        name: 'Alpha',
        appKey: 'WWW',
        releaseName: 'release_DEF372',
        version: '4.6.7',
        buildNumber: 20,
        hash: '115QL95RH',
        buildTime: '2025-01-26 22:43:38',
        createdAt: '2024-07-12 14:10:00',
        updatedAt: '2024-06-06 21:45:09',
        deployedAt: '2024-10-01 03:16:09',
        archivedDate: '2024-05-30 21:54:19',
        status: 'archived',
        ticketNumber: 'QOP-0169',
        isRemoved: true,
        isDeployed: false
    },
    {
        id: 13,
        name: 'Zamit',
        appKey: 'REACT',
        releaseName: 'release/ABC123',
        version: '3.1.3',
        buildNumber: 19,
        hash: '313TF21KD',
        buildTime: '2024-05-22 14:51:25',
        createdAt: '2024-12-17 13:12:25',
        updatedAt: '2025-04-16 08:56:23',
        deployedAt: '2024-09-16 02:21:07',
        archivedDate: '2025-01-27 09:32:07',
        status: 'active',
        ticketNumber: 'PXM-2766',
        isRemoved: false,
        isDeployed: true
    },
    {
        id: 14,
        name: 'Job',
        appKey: 'WWW',
        releaseName: 'release_DEF372',
        version: '5.78',
        buildNumber: 1,
        hash: '446ZQ31HK',
        buildTime: '2024-11-17 21:09:51',
        createdAt: '2024-10-21 12:19:24',
        updatedAt: '2025-04-28 17:50:42',
        deployedAt: '2024-11-22 12:21:14',
        archivedDate: '2024-09-28 17:31:03',
        status: 'active',
        ticketNumber: 'DAO-0159',
        isRemoved: false,
        isDeployed: false
    },
    {
        id: 15,
        name: 'Keylex',
        appKey: 'WWW',
        releaseName: 'hotfix/KAO3920',
        version: '6.86',
        buildNumber: 1,
        hash: '674FZ58IQ',
        buildTime: '2024-06-22 23:05:48',
        createdAt: '2024-09-18 06:38:38',
        updatedAt: '2024-12-25 19:49:02',
        deployedAt: '2024-11-26 22:23:49',
        archivedDate: '2024-06-25 08:00:54',
        status: 'active',
        ticketNumber: 'GYF-7959',
        isRemoved: false,
        isDeployed: false
    },
    {
        id: 16,
        name: 'Alpha',
        appKey: 'JAVA',
        releaseName: 'release_GHD830',
        version: '7.8.1',
        buildNumber: 16,
        hash: '605HL13JQ',
        buildTime: '2025-04-12 23:45:17',
        createdAt: '2025-01-21 04:48:53',
        updatedAt: '2024-07-30 05:42:23',
        deployedAt: '2024-11-10 15:19:39',
        archivedDate: '2025-02-07 09:01:06',
        status: 'active',
        ticketNumber: 'OXQ-4130',
        isRemoved: false,
        isDeployed: false
    },
    {
        id: 17,
        name: 'Stim',
        appKey: 'SPRINGBOOT',
        releaseName: 'hotfix/HDK832',
        version: '9.6.0',
        buildNumber: 15,
        hash: '039DX62IA',
        buildTime: '2025-02-11 20:45:36',
        createdAt: '2024-10-05 06:27:04',
        updatedAt: '2024-05-14 22:33:35',
        deployedAt: '2024-08-26 14:07:35',
        archivedDate: '2025-02-14 12:38:00',
        status: 'active',
        ticketNumber: 'DKY-0151',
        isRemoved: false,
        isDeployed: true
    },
    {
        id: 18,
        name: 'Subin',
        appKey: 'SPRINGBOOT',
        releaseName: 'release/ABC123',
        version: '7.1',
        buildNumber: 2,
        hash: '519XV19DL',
        buildTime: '2024-11-21 16:52:10',
        createdAt: '2025-02-15 08:18:07',
        updatedAt: '2025-03-14 01:09:55',
        deployedAt: '2025-01-04 03:45:37',
        archivedDate: '2024-12-16 02:54:26',
        status: 'active',
        ticketNumber: 'XJM-1317',
        isRemoved: false,
        isDeployed: false
    },
    {
        id: 19,
        name: 'Cardify',
        appKey: 'WWW',
        releaseName: 'hotfix/KAO3920',
        version: '0.51',
        buildNumber: 14,
        hash: '172IE83AK',
        buildTime: '2025-02-01 23:01:21',
        createdAt: '2025-04-14 21:45:00',
        updatedAt: '2024-11-14 03:45:17',
        deployedAt: '2024-05-13 17:03:38',
        archivedDate: '2024-08-27 17:05:06',
        status: 'active',
        ticketNumber: 'LRA-7524',
        isRemoved: false,
        isDeployed: true
    },
    {
        id: 20,
        name: 'Temp',
        appKey: 'REACT',
        releaseName: 'release_GHD830',
        version: '7.85',
        buildNumber: 2,
        hash: '579KX58NJ',
        buildTime: '2025-03-26 11:20:28',
        createdAt: '2025-02-20 16:13:22',
        updatedAt: '2024-05-02 01:42:12',
        deployedAt: '2025-03-01 07:10:52',
        archivedDate: '2025-03-12 01:33:05',
        status: 'active',
        ticketNumber: 'EES-0453',
        isRemoved: false,
        isDeployed: true
    },
    {
        id: 21,
        name: 'Cardguard',
        appKey: 'JAVA',
        releaseName: 'hotfix/HDK832',
        version: '0.3.9',
        buildNumber: 3,
        hash: '264FL31XB',
        buildTime: '2025-02-20 10:34:34',
        createdAt: '2024-06-19 09:42:19',
        updatedAt: '2024-07-28 23:06:14',
        deployedAt: '2024-11-19 05:18:04',
        archivedDate: '2024-06-04 02:38:19',
        status: 'active',
        ticketNumber: 'GPC-0755',
        isRemoved: false,
        isDeployed: false
    },
    {
        id: 22,
        name: 'Tres-Zap',
        appKey: 'SPRINGBOOT',
        releaseName: 'hotfix/KAO3920',
        version: '0.86',
        buildNumber: 6,
        hash: '622ED43KH',
        buildTime: '2024-12-02 17:32:22',
        createdAt: '2025-03-08 16:15:28',
        updatedAt: '2025-03-05 10:42:43',
        deployedAt: '2024-09-21 00:27:48',
        archivedDate: '2024-10-15 10:44:00',
        status: 'active',
        ticketNumber: 'TTT-3120',
        isRemoved: false,
        isDeployed: true
    },
    {
        id: 23,
        name: 'Bigtax',
        appKey: 'SPRINGBOOT',
        releaseName: 'release_DEF372',
        version: '7.6.5',
        buildNumber: 18,
        hash: '162SV47IX',
        buildTime: '2024-09-16 01:25:24',
        createdAt: '2025-01-10 12:51:45',
        updatedAt: '2024-06-18 03:50:16',
        deployedAt: '2025-02-20 04:57:29',
        archivedDate: '2025-02-14 20:27:16',
        status: 'active',
        ticketNumber: 'MYG-0446',
        isRemoved: false,
        isDeployed: true
    },
    {
        id: 24,
        name: 'Pannier',
        appKey: 'REACT',
        releaseName: 'release/ABC123',
        version: '0.40',
        buildNumber: 19,
        hash: '714IN37WF',
        buildTime: '2024-06-29 22:02:41',
        createdAt: '2024-08-10 15:00:07',
        updatedAt: '2025-03-01 21:23:05',
        deployedAt: '2024-05-11 01:38:10',
        archivedDate: '2024-05-26 05:34:46',
        status: 'archived',
        ticketNumber: 'DFX-8106',
        isRemoved: false,
        isDeployed: true
    },
    {
        id: 25,
        name: 'Quo Lux',
        appKey: 'JAVA',
        releaseName: 'hotfix/HDK832',
        version: '0.96',
        buildNumber: 3,
        hash: '702CK84HG',
        buildTime: '2025-03-13 01:27:19',
        createdAt: '2025-01-28 22:06:14',
        updatedAt: '2025-02-25 08:38:29',
        deployedAt: '2024-12-16 02:53:38',
        archivedDate: '2025-01-31 11:45:23',
        status: 'active',
        ticketNumber: 'PYN-5045',
        isRemoved: false,
        isDeployed: false
    },
    {
        id: 26,
        name: 'Overhold',
        appKey: 'REACT',
        releaseName: 'hotfix/KAO3920',
        version: '3.0.1',
        buildNumber: 16,
        hash: '475HY10ZQ',
        buildTime: '2024-11-07 12:23:42',
        createdAt: '2025-04-18 02:36:29',
        updatedAt: '2024-09-03 02:41:23',
        deployedAt: '2025-01-02 22:37:07',
        archivedDate: '2025-01-24 18:40:14',
        status: 'active',
        ticketNumber: 'GYE-0153',
        isRemoved: false,
        isDeployed: true
    },
    {
        id: 27,
        name: 'It',
        appKey: 'JAVA',
        releaseName: 'release/ABC123',
        version: '0.3.5',
        buildNumber: 9,
        hash: '992OZ56XG',
        buildTime: '2024-06-29 08:06:42',
        createdAt: '2025-03-18 02:16:58',
        updatedAt: '2024-09-30 03:29:50',
        deployedAt: '2025-01-04 15:30:30',
        archivedDate: '2024-11-29 20:29:53',
        status: 'active',
        ticketNumber: 'ORF-2753',
        isRemoved: false,
        isDeployed: false
    },
    {
        id: 28,
        name: 'Voyatouch',
        appKey: 'WWW',
        releaseName: 'release_DEF372',
        version: '0.43',
        buildNumber: 17,
        hash: '451XQ46AC',
        buildTime: '2024-05-14 11:18:12',
        createdAt: '2024-11-25 18:48:59',
        updatedAt: '2024-05-05 13:42:05',
        deployedAt: '2024-11-02 19:31:16',
        archivedDate: '2024-09-11 11:32:43',
        status: 'archived',
        ticketNumber: 'ACL-8578',
        isRemoved: true,
        isDeployed: true
    },
    {
        id: 29,
        name: 'Span',
        appKey: 'SPRINGBOOT',
        releaseName: 'release/ABC123',
        version: '7.0',
        buildNumber: 11,
        hash: '511FX33VD',
        buildTime: '2025-04-14 04:33:12',
        createdAt: '2024-08-26 12:22:34',
        updatedAt: '2025-03-23 19:32:35',
        deployedAt: '2024-11-09 03:03:13',
        archivedDate: '2024-09-30 23:55:45',
        status: 'active',
        ticketNumber: 'PQP-7217',
        isRemoved: false,
        isDeployed: false
    },
    {
        id: 30,
        name: 'Flowdesk',
        appKey: 'JAVA',
        releaseName: 'release/ABC123',
        version: '6.6',
        buildNumber: 10,
        hash: '376EU76CX',
        buildTime: '2024-05-16 15:31:50',
        createdAt: '2025-04-29 16:11:57',
        updatedAt: '2024-09-19 07:04:48',
        deployedAt: '2024-09-12 03:48:42',
        archivedDate: '2024-10-23 06:53:26',
        status: 'archived',
        ticketNumber: 'JFQ-3815',
        isRemoved: false,
        isDeployed: true
    }
]));
const defaultEnvArtifacts = [
    {
        id: 1,
        name: 'artifact 1',
        appKey: 'SPRINGBOOT',
        releaseName: 'hotfix/HDK832',
        version: '0.1.0',
        buildNumber: 2,
        hash: 'ADE32DE',
        buildTime: '2025-02-21 09:44:34',
        updatedBy: 'QA Test User',
        updatedAt: '2025-02-21 09:44:34',
        deployedAt: '2025-02-21 09:44:34',
        status: 'successful'
    }
];
const defaultEnvArtifacts2 = [
    {
        id: 1,
        name: 'artifact 1',
        appKey: 'SPRINGBOOT',
        releaseName: 'hotfix/HDK832',
        version: '0.1.0',
        buildNumber: 2,
        hash: 'ADE32DE',
        buildTime: '2025-02-21 09:44:34',
        updatedBy: 'PRD Test User',
        updatedAt: '2025-02-21 09:44:34',
        deployedAt: '2025-02-21 09:44:34',
        status: 'successful'
    },
    {
        id: 2,
        name: 'artifact 2',
        appKey: 'JBOSS',
        releaseName: 'hotfix/HDK832',
        version: '0.2.0',
        buildNumber: 4,
        hash: 'FV33VFV',
        buildTime: '2025-02-21 09:44:34',
        updatedBy: 'PRD Test User',
        updatedAt: '2025-02-21 09:44:34',
        deployedAt: '2025-02-21 09:44:34',
        status: 'successful'
    }
];
const deployments = [
    {
        id: 1,
        deploymentNumber: 'STG-02',
        environment: 'STG',
        numberOfArtifacts: 24,
        status: 'failed',
        bat: 'successful',
        createdBy: 'Frankie Olpin',
        createdAt: '2025-02-21 09:44:34',
        ticketNumber: 'AHS-282',
        rollback: false,
        artifacts: defaultEnvArtifacts,
        releaseName: 'release/BCB342'
    },
    {
        id: 2,
        deploymentNumber: 'STG-39',
        environment: 'PRD',
        numberOfArtifacts: 13,
        status: 'failed',
        bat: 'successful',
        createdBy: 'Sloane Boulden',
        createdAt: '2024-12-29 07:05:40',
        ticketNumber: 'HYT-182',
        rollback: false,
        artifacts: defaultEnvArtifacts,
        releaseName: 'release/ABC123'
    },
    {
        id: 3,
        deploymentNumber: 'STG-95',
        environment: 'PRD',
        numberOfArtifacts: 10,
        status: 'failed',
        bat: 'failed',
        createdBy: 'Nickolai Leftridge',
        createdAt: '2025-04-23 18:03:32',
        ticketNumber: 'HYT-182',
        rollback: true,
        artifacts: defaultEnvArtifacts,
        releaseName: 'release/BCB342'
    },
    {
        id: 4,
        deploymentNumber: 'STG-45',
        environment: 'PRD',
        numberOfArtifacts: 1,
        status: 'successful',
        bat: 'successful',
        createdBy: 'Pauly Rea',
        createdAt: '2024-09-05 01:32:20',
        ticketNumber: 'DEF-137',
        rollback: false,
        artifacts: defaultEnvArtifacts2,
        releaseName: 'hotfix/HDK832'
    },
    {
        id: 5,
        deploymentNumber: 'STG-57',
        environment: 'DEFAULT.ENV',
        numberOfArtifacts: 12,
        status: 'successful',
        bat: 'successful',
        createdBy: 'Skip Bohin',
        createdAt: '2024-12-29 03:04:37',
        ticketNumber: 'AHS-282',
        rollback: true,
        artifacts: defaultEnvArtifacts,
        releaseName: 'hotfix/KAO3920'
    },
    {
        id: 6,
        deploymentNumber: 'STG-01',
        environment: 'STG',
        numberOfArtifacts: 21,
        status: 'successful',
        bat: 'failed',
        createdBy: 'Delcina Grimsdell',
        createdAt: '2024-05-26 13:41:55',
        ticketNumber: 'HYT-182',
        rollback: true,
        artifacts: defaultEnvArtifacts,
        releaseName: 'release/ABC123'
    },
    {
        id: 7,
        deploymentNumber: 'STG-38',
        environment: 'STG',
        numberOfArtifacts: 15,
        status: 'failed',
        bat: 'failed',
        createdBy: 'Tandi Dake',
        createdAt: '2024-12-08 20:47:52',
        ticketNumber: 'ABC-123',
        rollback: false,
        artifacts: defaultEnvArtifacts,
        releaseName: 'hotfix/KAO3920'
    },
    {
        id: 8,
        deploymentNumber: 'STG-96',
        environment: 'STG',
        numberOfArtifacts: 16,
        status: 'successful',
        bat: 'failed',
        createdBy: 'Rosco Gladman',
        createdAt: '2025-04-03 04:12:14',
        ticketNumber: 'HYT-182',
        rollback: false,
        artifacts: defaultEnvArtifacts,
        releaseName: 'release/ABC123'
    },
    {
        id: 9,
        deploymentNumber: 'STG-65',
        environment: 'PRD',
        numberOfArtifacts: 21,
        status: 'successful',
        bat: 'successful',
        createdBy: 'Darcy Flawn',
        createdAt: '2024-08-12 06:23:02',
        ticketNumber: 'ABC-123',
        rollback: true,
        artifacts: defaultEnvArtifacts,
        releaseName: 'release/ABC123'
    },
    {
        id: 10,
        deploymentNumber: 'STG-51',
        environment: 'DEFAULT.ENV',
        numberOfArtifacts: 20,
        status: 'successful',
        bat: 'successful',
        createdBy: 'Rorke Chrippes',
        createdAt: '2024-12-27 10:19:06',
        ticketNumber: 'DEF-137',
        rollback: false,
        artifacts: defaultEnvArtifacts,
        releaseName: 'release/ABC123'
    },
    {
        id: 11,
        deploymentNumber: 'STG-60',
        environment: 'DEFAULT.ENV',
        numberOfArtifacts: 12,
        status: 'successful',
        bat: 'successful',
        createdBy: 'Madelyn Fulger',
        createdAt: '2024-11-15 14:02:54',
        ticketNumber: 'DEF-137',
        rollback: false,
        artifacts: defaultEnvArtifacts,
        releaseName: ''
    },
    {
        id: 12,
        deploymentNumber: 'STG-57',
        environment: 'STG',
        numberOfArtifacts: 18,
        status: 'successful',
        bat: 'failed',
        createdBy: 'Kaitlin Dusey',
        createdAt: '2025-03-24 23:49:17',
        ticketNumber: 'DEF-137',
        rollback: false,
        artifacts: defaultEnvArtifacts,
        releaseName: ''
    },
    {
        id: 13,
        deploymentNumber: 'STG-77',
        environment: 'DEFAULT.ENV',
        numberOfArtifacts: 2,
        status: 'successful',
        bat: 'failed',
        createdBy: 'Tam Siward',
        createdAt: '2024-05-23 00:36:39',
        ticketNumber: 'HYT-182',
        rollback: true,
        artifacts: defaultEnvArtifacts,
        releaseName: 'hotfix/HDK832'
    },
    {
        id: 14,
        deploymentNumber: 'STG-37',
        environment: 'PRD',
        numberOfArtifacts: 4,
        status: 'failed',
        bat: 'successful',
        createdBy: 'Fan Marquiss',
        createdAt: '2024-05-20 03:15:56',
        ticketNumber: 'ABC-123',
        rollback: false,
        artifacts: defaultEnvArtifacts,
        releaseName: 'hotfix/KAO3920'
    },
    {
        id: 15,
        deploymentNumber: 'STG-89',
        environment: 'STG',
        numberOfArtifacts: 24,
        status: 'failed',
        bat: 'failed',
        createdBy: 'Happy Dinsdale',
        createdAt: '2024-09-23 01:48:16',
        ticketNumber: 'ABC-123',
        rollback: true,
        artifacts: defaultEnvArtifacts,
        releaseName: 'release/BCB342'
    },
    {
        id: 16,
        deploymentNumber: 'STG-29',
        environment: 'DEFAULT.ENV',
        numberOfArtifacts: 3,
        status: 'failed',
        bat: 'successful',
        createdBy: 'Fleming Vickery',
        createdAt: '2025-01-26 06:50:48',
        ticketNumber: 'AHS-282',
        rollback: true,
        artifacts: defaultEnvArtifacts,
        releaseName: ''
    },
    {
        id: 17,
        deploymentNumber: 'STG-17',
        environment: 'PRD',
        numberOfArtifacts: 14,
        status: 'failed',
        bat: 'failed',
        createdBy: 'Alf Warret',
        createdAt: '2024-07-02 18:05:24',
        ticketNumber: 'ABC-123',
        rollback: true,
        artifacts: defaultEnvArtifacts,
        releaseName: 'hotfix/KAO3920'
    },
    {
        id: 18,
        deploymentNumber: 'STG-92',
        environment: 'DEFAULT.ENV',
        numberOfArtifacts: 1,
        status: 'successful',
        bat: 'failed',
        createdBy: 'Ailsun Schwandner',
        createdAt: '2025-03-28 21:57:09',
        ticketNumber: 'HYT-182',
        rollback: false,
        artifacts: defaultEnvArtifacts,
        releaseName: 'release/BCB342'
    },
    {
        id: 19,
        deploymentNumber: 'STG-38',
        environment: 'STG',
        numberOfArtifacts: 24,
        status: 'successful',
        bat: 'failed',
        createdBy: 'Norrie Isham',
        createdAt: '2024-07-31 15:28:19',
        ticketNumber: 'HYT-182',
        rollback: true,
        artifacts: defaultEnvArtifacts,
        releaseName: 'release/DEF372'
    },
    {
        id: 20,
        deploymentNumber: 'STG-29',
        environment: 'DEFAULT.ENV',
        numberOfArtifacts: 14,
        status: 'failed',
        bat: 'successful',
        createdBy: 'Blondell Jurries',
        createdAt: '2024-10-17 13:50:02',
        ticketNumber: 'ABC-123',
        rollback: true,
        artifacts: defaultEnvArtifacts,
        releaseName: 'release/BCB342'
    },
    {
        id: 21,
        deploymentNumber: 'STG-85',
        environment: 'DEFAULT.ENV',
        numberOfArtifacts: 25,
        status: 'successful',
        bat: 'successful',
        createdBy: 'Sybilla Champerlen',
        createdAt: '2024-11-14 02:44:10',
        ticketNumber: 'DEF-137',
        rollback: true,
        artifacts: defaultEnvArtifacts,
        releaseName: 'release/ABC123'
    },
    {
        id: 22,
        deploymentNumber: 'STG-58',
        environment: 'STG',
        numberOfArtifacts: 16,
        status: 'successful',
        bat: 'successful',
        createdBy: 'Raviv Whittet',
        createdAt: '2024-09-30 01:59:50',
        ticketNumber: 'HYT-182',
        rollback: true,
        artifacts: defaultEnvArtifacts,
        releaseName: 'release/ABC123'
    },
    {
        id: 23,
        deploymentNumber: 'STG-69',
        environment: 'DEFAULT.ENV',
        numberOfArtifacts: 11,
        status: 'successful',
        bat: 'successful',
        createdBy: 'Devin Greenstock',
        createdAt: '2025-04-21 22:31:46',
        ticketNumber: 'AHS-282',
        rollback: false,
        artifacts: defaultEnvArtifacts,
        releaseName: 'release/ABC123'
    },
    {
        id: 24,
        deploymentNumber: 'STG-18',
        environment: 'PRD',
        numberOfArtifacts: 25,
        status: 'failed',
        bat: 'successful',
        createdBy: 'Bartholemy Olek',
        createdAt: '2024-11-19 14:05:15',
        ticketNumber: 'AHS-282',
        rollback: false,
        artifacts: defaultEnvArtifacts,
        releaseName: ''
    },
    {
        id: 25,
        deploymentNumber: 'STG-39',
        environment: 'PRD',
        numberOfArtifacts: 21,
        status: 'failed',
        bat: 'successful',
        createdBy: 'Emmie Hyams',
        createdAt: '2025-01-13 00:22:22',
        ticketNumber: 'AHS-282',
        rollback: true,
        artifacts: defaultEnvArtifacts,
        releaseName: 'release/DEF372'
    }
];

;// CONCATENATED MODULE: ./src/components/releases/release-detail-database.tsx








function DatabaseTab({ releaseName }) {
    const data = (0,react.useMemo)(()=>databaseScripts.filter((d)=>d.releaseName === releaseName), [
        releaseName
    ]);
    const [sortKey, setSortKey] = (0,react.useState)("name");
    const [sortDir, setSortDir] = (0,react.useState)("asc");
    const [expanded, setExpanded] = (0,react.useState)(new Set());
    const active = data.filter((d)=>!d.isRemoved);
    const removed = data.filter((d)=>d.isRemoved);
    const sorted = (0,react.useMemo)(()=>{
        const sorted = [
            ...data
        ].sort((a, b)=>{
            const aVal = a[sortKey];
            const bVal = b[sortKey];
            const cmp = String(aVal).localeCompare(String(bVal));
            return sortDir === "asc" ? cmp : -cmp;
        });
        return sorted;
    }, [
        data,
        sortKey,
        sortDir
    ]);
    function toggleSort(key) {
        if (sortKey === key) {
            setSortDir((d)=>d === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortDir("asc");
        }
    }
    function toggleExpand(id) {
        setExpanded((prev)=>{
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }
    function renderSortHead(label, key) {
        const active = sortKey === key;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHead */.nd, {
            className: "cursor-pointer select-none text-[11px] font-semibold text-muted-foreground uppercase tracking-wide hover:text-foreground",
            onClick: ()=>toggleSort(key),
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: "inline-flex items-center gap-1",
                children: [
                    label,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up_down/* ["default"] */.A, {
                        className: (0,utils.cn)("size-3", active && "text-foreground")
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-start justify-between gap-4 mt-4 mb-3 flex-wrap",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(page_title/* .PageTitle */.s, {
                        title: "Database",
                        subtitle: "Database migrations and changes for this release.",
                        greenBadge: active.length > 0 ? `${active.length} Active` : undefined,
                        badge: removed.length > 0 ? `${removed.length} Removed` : undefined,
                        hasSidebar: true
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                        size: "sm",
                        className: "h-8 text-xs gap-1.5 shrink-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(plus/* ["default"] */.A, {
                                className: "size-3.5"
                            }),
                            "Create Deployment"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "rounded-lg border border-border bg-card overflow-hidden",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_table/* .Table */.XI, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHeader */.A0, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_table/* .TableRow */.Hj, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHead */.nd, {
                                        className: "w-8"
                                    }),
                                    renderSortHead("Name", "name"),
                                    renderSortHead("Database", "database"),
                                    renderSortHead("Type", "type"),
                                    renderSortHead("Hash", "hash"),
                                    renderSortHead("Pull Request", "pullRequest"),
                                    renderSortHead("Created At", "createdAt"),
                                    renderSortHead("Updated At", "updatedAt"),
                                    renderSortHead("Deployed At", "deployedAt"),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHead */.nd, {
                                        className: "w-16 text-center text-[11px] font-semibold text-muted-foreground uppercase tracking-wide"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableBody */.BF, {
                            children: sorted.length > 0 ? sorted.flatMap((row, i)=>{
                                const rowKey = `db-row-${i}`;
                                const isExpanded = expanded.has(rowKey);
                                const isRemoved = row.isRemoved;
                                const rows = [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_table/* .TableRow */.Hj, {
                                        className: (0,utils.cn)("border-b border-border cursor-pointer", isRemoved && "opacity-50"),
                                        onClick: ()=>row.fileNames.length > 0 && toggleExpand(rowKey),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                                className: "py-3",
                                                children: row.fileNames.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "inline-flex items-center justify-center size-6 rounded-md text-muted-foreground",
                                                    children: isExpanded ? /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* ["default"] */.A, {
                                                        className: "size-3.5"
                                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* ["default"] */.A, {
                                                        className: "size-3.5"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                                className: "py-3 font-medium",
                                                children: row.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                                className: "py-3",
                                                children: row.database
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                                className: "py-3",
                                                children: row.type
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                                className: "py-3 text-xs font-mono",
                                                children: row.hash
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                                className: "py-3 text-muted-foreground text-xs",
                                                children: row.pullRequest || "\u2014"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                                className: "py-3 text-xs whitespace-nowrap",
                                                children: row.createdAt
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                                className: "py-3 text-xs whitespace-nowrap",
                                                children: row.updatedAt
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                                className: "py-3 text-xs",
                                                children: row.deployedAt
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                                className: "py-3 text-center",
                                                onClick: (e)=>e.stopPropagation(),
                                                children: isRemoved ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                                    size: "sm",
                                                    className: "h-7 text-xs bg-green-600 hover:bg-green-700 gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(plus/* ["default"] */.A, {
                                                            className: "size-3"
                                                        }),
                                                        " Restore"
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                    size: "sm",
                                                    variant: "destructive",
                                                    className: "h-7 w-7 p-0",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(trash/* ["default"] */.A, {
                                                        className: "size-3.5"
                                                    })
                                                })
                                            })
                                        ]
                                    }, rowKey)
                                ];
                                if (isExpanded && row.fileNames.length > 0) {
                                    rows.push(/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableRow */.Hj, {
                                        className: "bg-muted/30",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                            colSpan: 10,
                                            className: "px-8 py-3",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1",
                                                        children: "Files"
                                                    }),
                                                    row.fileNames.map((file)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-sm font-mono text-muted-foreground",
                                                            children: file
                                                        }, file))
                                                ]
                                            })
                                        })
                                    }, `${rowKey}-files`));
                                }
                                return rows;
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableRow */.Hj, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                    colSpan: 10,
                                    className: "h-24 text-center text-muted-foreground",
                                    children: "No database scripts found."
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs
var rotate_ccw = __webpack_require__(20096);
;// CONCATENATED MODULE: ./src/components/releases/release-detail-deployments.tsx







const statusStyle = {
    successful: {
        label: "Succeeded",
        color: "#22c55e"
    },
    failed: {
        label: "Failed",
        color: "#ef4444"
    },
    in_progress: {
        label: "In Progress",
        color: "#3b82f6"
    },
    pending: {
        label: "Pending",
        color: "#a1a1aa"
    }
};
const batStyle = {
    successful: "border-green-200 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
    failed: "border-red-200 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
    pending: "border-amber-200 bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800"
};
const artifactStatusStyle = {
    successful: "border-green-200 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
    failed: "border-red-200 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
    pending: "border-amber-200 bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",
    skipped: "border-border bg-secondary text-muted-foreground"
};
function DeploymentsTab({ releaseName }) {
    const data = (0,react.useMemo)(()=>deployments.filter((d)=>d.releaseName === releaseName), [
        releaseName
    ]);
    const envs = (0,react.useMemo)(()=>{
        const set = new Set(data.map((d)=>d.environment));
        return Array.from(set);
    }, [
        data
    ]);
    const [collapsed, setCollapsed] = (0,react.useState)(new Set());
    const [expanded, setExpanded] = (0,react.useState)(new Set());
    function toggleEnv(env) {
        setCollapsed((prev)=>{
            const next = new Set(prev);
            if (next.has(env)) next.delete(env);
            else next.add(env);
            return next;
        });
    }
    function toggleDeployment(id) {
        setExpanded((prev)=>{
            const next = new Set(prev);
            const key = String(id);
            if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });
    }
    function batBadge(bat) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            className: (0,utils.cn)("inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold", batStyle[bat] ?? batStyle.pending),
            children: bat === "successful" ? "Passed" : bat === "failed" ? "Failed" : "Pending"
        });
    }
    function artifactStatusBadge(status) {
        const labels = {
            successful: "Deployed",
            failed: "Failed",
            pending: "Pending",
            skipped: "Skipped"
        };
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            className: (0,utils.cn)("inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold", artifactStatusStyle[status] ?? artifactStatusStyle.pending),
            children: labels[status] ?? status
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between gap-4 mb-6 flex-wrap",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                        className: "text-lg font-semibold",
                        children: "Deployments"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                        size: "sm",
                        className: "h-9 text-sm gap-1.5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(plus/* ["default"] */.A, {
                                className: "size-4"
                            }),
                            "Create Deployment"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex flex-col gap-3",
                children: envs.length > 0 ? envs.map((env)=>{
                    const envRows = data.filter((d)=>d.environment === env);
                    const isCollapsed = collapsed.has(env);
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "rounded-lg border border-border bg-card overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                type: "button",
                                onClick: ()=>toggleEnv(env),
                                className: "w-full flex items-center gap-2.5 px-4 py-3 text-left hover:bg-secondary/40 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* ["default"] */.A, {
                                        className: (0,utils.cn)("size-4 shrink-0 text-muted-foreground transition-transform", !isCollapsed && "rotate-90")
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "font-semibold",
                                        children: env
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(badge/* .Badge */.E, {
                                        variant: "outline",
                                        className: "text-[11px] font-bold",
                                        children: [
                                            envRows.length,
                                            " deployment",
                                            envRows.length === 1 ? "" : "s"
                                        ]
                                    })
                                ]
                            }),
                            !isCollapsed && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "grid grid-cols-8 gap-3 px-3.5 py-2.5 bg-secondary/50 border-t border-border text-[11px] font-semibold text-muted-foreground uppercase tracking-wide",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                children: "Deployment ID"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                children: "Artifacts"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                children: "BAT"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                children: "Created By"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                children: "Created At"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                children: "Ticket"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                children: "Rollback"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {})
                                        ]
                                    }),
                                    envRows.map((d)=>{
                                        const st = statusStyle[d.status] ?? statusStyle.pending;
                                        const isExpanded = expanded.has(String(d.id));
                                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    role: "button",
                                                    tabIndex: 0,
                                                    className: "grid grid-cols-8 gap-3 px-3.5 py-2.5 items-center cursor-pointer hover:bg-secondary/40 transition-colors border-t border-border",
                                                    onClick: ()=>toggleDeployment(d.id),
                                                    onKeyDown: (e)=>{
                                                        if (e.key === "Enter" || e.key === " ") toggleDeployment(d.id);
                                                    },
                                                    style: {
                                                        boxShadow: `inset 3px 0 0 0 ${st?.color ?? "#a1a1aa"}`
                                                    },
                                                    title: `Status: ${st?.label ?? "Unknown"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center gap-2 font-medium truncate",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* ["default"] */.A, {
                                                                    className: (0,utils.cn)("size-3.5 shrink-0 text-muted-foreground transition-transform", isExpanded && "rotate-90")
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "size-2 rounded-full shrink-0",
                                                                    style: {
                                                                        backgroundColor: st?.color ?? "#a1a1aa"
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "truncate",
                                                                    children: d.deploymentNumber
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "text-muted-foreground",
                                                            children: [
                                                                d.artifacts?.length ?? 0,
                                                                " artifact",
                                                                (d.artifacts?.length ?? 0) === 1 ? "" : "s"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            children: batBadge(d.bat)
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "text-muted-foreground truncate",
                                                            children: d.createdBy
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "text-muted-foreground whitespace-nowrap",
                                                            children: d.createdAt
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: d.ticketNumber ? "text-blue-600 font-medium dark:text-blue-400" : "text-muted-foreground/50",
                                                            children: d.ticketNumber || "\u2013"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            children: d.rollback ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "text-foreground",
                                                                children: "Yes"
                                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "text-muted-foreground",
                                                                children: "No"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                                            size: "sm",
                                                            className: "h-7 text-[11.5px] gap-1 bg-blue-600 hover:bg-blue-700 text-white",
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                            /* redeploy action */ },
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(rotate_ccw/* ["default"] */.A, {
                                                                    className: "size-3"
                                                                }),
                                                                "Redeploy"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                isExpanded && d.artifacts && d.artifacts.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "bg-secondary/30 px-3.5 py-3 pl-8",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "grid grid-cols-7 gap-3 px-3.5 pb-1.5 text-[10.5px] font-semibold text-muted-foreground uppercase tracking-wide",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    children: "App Key"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    children: "Name"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    children: "Version"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    children: "Build #"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    children: "Hash"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    children: "Build Date"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    children: "Status"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "rounded-md border border-border bg-card divide-y divide-border",
                                                            children: d.artifacts.map((a)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "grid grid-cols-7 gap-3 px-3.5 py-2 text-[12.5px] items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                className: "inline-flex items-center rounded-md border border-border bg-secondary px-1.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wide text-muted-foreground",
                                                                                children: a.appKey
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                            className: "font-medium truncate",
                                                                            children: a.name
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                            className: "text-muted-foreground",
                                                                            children: a.version
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                            className: "text-muted-foreground",
                                                                            children: a.buildNumber
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                            className: "font-mono text-muted-foreground truncate",
                                                                            children: a.hash
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                            className: "text-muted-foreground whitespace-nowrap",
                                                                            children: a.buildTime
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                            children: artifactStatusBadge(a.status)
                                                                        })
                                                                    ]
                                                                }, a.id))
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "flex justify-end pt-2 pr-1",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                className: "text-[11px] text-muted-foreground/60",
                                                                children: [
                                                                    "Created by ",
                                                                    d.createdBy,
                                                                    " at ",
                                                                    d.createdAt
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                isExpanded && (!d.artifacts || d.artifacts.length === 0) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "bg-secondary/30 px-8 py-4 text-sm text-muted-foreground",
                                                    children: "No artifacts for this deployment."
                                                })
                                            ]
                                        }, d.id);
                                    })
                                ]
                            })
                        ]
                    }, env);
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "rounded-lg border border-border bg-card p-12 text-center text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                            className: "text-sm font-semibold text-foreground mb-1",
                            children: "Deployments"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-[13px]",
                            children: "Deployment history for this release will appear here."
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/ui/tooltip.tsx
var tooltip = __webpack_require__(18918);
// EXTERNAL MODULE: ./src/components/ui/popover.tsx
var popover = __webpack_require__(20732);
// EXTERNAL MODULE: ./src/components/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(77338);
;// CONCATENATED MODULE: ./src/components/releases/release-detail-page.tsx

















const tabs = [
    {
        id: "artifacts",
        label: "Artifacts"
    },
    {
        id: "deployments",
        label: "Deployments"
    },
    {
        id: "deployment-environments",
        label: "Deployment Environments"
    },
    {
        id: "database",
        label: "Database"
    },
    {
        id: "release-checklist",
        label: "Release Checklist"
    },
    {
        id: "release-information",
        label: "Release Information"
    }
];
function formatDate(value) {
    if (!value) return "\u2014";
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return "\u2014";
    return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
}
function ReleaseDetailPage({ releaseId, fallback }) {
    const [activeTab, setActiveTab] = (0,react.useState)("artifacts");
    const [checklist, setChecklist] = (0,react.useState)([]);
    const [toasts, setToasts] = (0,react.useState)([]);
    const { data, isLoading } = (0,use_releases/* .useRelease */.HN)(releaseId);
    const release = data?.release ?? fallback;
    const { data: artifacts = [], isLoading: artifactsLoading } = (0,use_releases/* .useReleaseArtifacts */.Sq)(releaseId, release.version);
    const submitRelease = (0,use_releases/* .useSubmitRelease */.l)();
    const approveRelease = (0,use_releases/* .useApproveRelease */.gM)();
    const publishRelease = (0,use_releases/* .usePublishRelease */.w9)();
    const cancelRelease = (0,use_releases/* .useCancelRelease */.pv)();
    const showToast = (0,react.useCallback)((message, variant)=>{
        const id = Date.now() + Math.random();
        setToasts((prev)=>[
                ...prev,
                {
                    id,
                    message,
                    variant
                }
            ]);
        setTimeout(()=>{
            setToasts((prev)=>prev.filter((t)=>t.id !== id));
        }, 3000);
    }, []);
    async function runLifecycleAction(mutation, action) {
        try {
            await mutation.mutateAsync(release.id);
            showToast(action === "submit" ? "Release submitted for approval" : action === "approve" ? "Release approved" : action === "publish" ? "Release published" : "Release cancelled", "success");
        } catch (err) {
            showToast(err instanceof Error ? err.message : "Action failed", "destructive");
        }
    }
    const lifecycleActions = [];
    if (release.status === "draft") {
        lifecycleActions.push({
            label: "Submit for approval",
            action: "submit",
            mutation: submitRelease
        });
    }
    if (release.status === "pending_approval") {
        lifecycleActions.push({
            label: "Approve",
            action: "approve",
            mutation: approveRelease
        });
    }
    if (release.status === "approved") {
        lifecycleActions.push({
            label: "Publish",
            action: "publish",
            mutation: publishRelease
        });
    }
    if (release.status === "draft" || release.status === "pending_approval" || release.status === "approved") {
        lifecycleActions.push({
            label: "Cancel release",
            action: "cancel",
            mutation: cancelRelease
        });
    }
    function handleChecklistChange(index, value) {
        setChecklist((prev)=>prev.map((item, i)=>{
                if (i !== index) return item;
                if (value === null) {
                    return {
                        ...item,
                        itemValue: null,
                        signOffBy: null,
                        signOffAt: null,
                        updatedBy: null,
                        updatedAt: null
                    };
                }
                const todayStr = new Date().toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                });
                return {
                    ...item,
                    itemValue: value,
                    signOffBy: "You",
                    signOffAt: todayStr,
                    updatedBy: "You",
                    updatedAt: todayStr
                };
            }));
    }
    const activeArtifacts = artifacts.filter((a)=>!a.isRemoved);
    const deployedCount = activeArtifacts.filter((a)=>a.deployedAt !== null).length;
    const totalActive = activeArtifacts.length;
    const artifactsPct = totalActive ? Math.round(deployedCount / totalActive * 100) : 0;
    const signedOffCount = checklist.filter((c)=>c.itemValue === "yes").length;
    const totalChecklist = checklist.length;
    const checklistPct = totalChecklist ? Math.round(signedOffCount / totalChecklist * 100) : 0;
    const notDeployedCount = totalActive - deployedCount;
    const unsignedCount = checklist.filter((c)=>c.itemValue !== "yes").length;
    const outstandingTotal = notDeployedCount + unsignedCount;
    const anyPending = submitRelease.isPending || approveRelease.isPending || publishRelease.isPending || cancelRelease.isPending;
    if (isLoading && !data) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "flex flex-col items-center justify-center gap-4 py-20 text-muted-foreground",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "text-sm",
                children: "Loading release…"
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-4 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(esm_link/* .Link */.N_, {
                to: "/releases",
                className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_left/* ["default"] */.A, {
                        className: "size-4"
                    }),
                    "Back to Releases"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-start justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-3 mb-3 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                        className: "text-2xl font-semibold tracking-tight",
                                        children: release.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(status_badge/* .StatusBadge */.W, {
                                        status: release.status
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-3 gap-x-10 gap-y-2.5 max-w-4xl",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col gap-0.5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-[11px] font-medium text-muted-foreground uppercase tracking-wide",
                                                children: "Version"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-sm",
                                                children: release.version
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col gap-0.5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-[11px] font-medium text-muted-foreground uppercase tracking-wide",
                                                children: "Kind"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-sm",
                                                children: release.kind ? release.kind.replace(/_/g, " ") : "\u2014"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col gap-0.5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-[11px] font-medium text-muted-foreground uppercase tracking-wide",
                                                children: "Project"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-sm",
                                                children: release.projectName ?? release.projectId
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col gap-0.5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-[11px] font-medium text-muted-foreground uppercase tracking-wide",
                                                children: "Created"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-sm",
                                                children: formatDate(release.createdAt)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col gap-0.5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-[11px] font-medium text-muted-foreground uppercase tracking-wide",
                                                children: "Published"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-sm",
                                                children: formatDate(release.publishedAt)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col gap-0.5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-[11px] font-medium text-muted-foreground uppercase tracking-wide",
                                                children: "Target"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-sm",
                                                children: release.target.channel ? release.target.channel.type + (release.target.channel.value ? ` (${release.target.channel.value})` : "") : release.target.environment_id ? release.target.environment_id : "\u2014"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipProvider */.Bc, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .Tooltip */.m_, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(popover/* .Popover */.AM, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipTrigger */.k$, {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* .PopoverTrigger */.Wv, {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                variant: "outline",
                                                size: "icon",
                                                className: "shrink-0",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(settings/* ["default"] */.A, {
                                                    className: "size-4"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipContent */.ZI, {
                                        side: "left",
                                        children: "Settings"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* .PopoverContent */.hl, {
                                        align: "end",
                                        className: "w-48 p-1.5",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                lifecycleActions.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                        type: "button",
                                                        disabled: anyPending,
                                                        className: "w-full rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:opacity-50",
                                                        onClick: ()=>runLifecycleAction(item.mutation, item.action),
                                                        children: item.label
                                                    }, item.action)),
                                                lifecycleActions.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuSeparator */.mB, {}),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                    type: "button",
                                                    className: "w-full rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground",
                                                    onClick: ()=>showToast("Opening linked Teams channel\u2026"),
                                                    children: "Teams Channel"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                    type: "button",
                                                    className: "w-full rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground",
                                                    onClick: ()=>showToast("Opening SDLC branch details\u2026"),
                                                    children: "SDLC Branch"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuSeparator */.mB, {}),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                    type: "button",
                                                    className: "w-full rounded-sm px-2 py-1.5 text-left text-sm text-destructive hover:bg-destructive/10",
                                                    children: "Delete Release"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "rounded-lg border border-border bg-card p-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1.5",
                                children: "Artifacts Deployed"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex items-baseline gap-2",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: "text-2xl font-semibold tracking-tight",
                                    children: [
                                        deployedCount,
                                        " / ",
                                        totalActive
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "mt-2.5 h-1.5 w-full rounded-full bg-secondary overflow-hidden",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "h-full rounded-full bg-blue-500 transition-all duration-300",
                                    style: {
                                        width: `${artifactsPct}%`
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "rounded-lg border border-border bg-card p-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1.5",
                                children: "Checklist Signed Off"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex items-baseline gap-2",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: "text-2xl font-semibold tracking-tight",
                                    children: [
                                        signedOffCount,
                                        " / ",
                                        totalChecklist
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "mt-2.5 h-1.5 w-full rounded-full bg-secondary overflow-hidden",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "h-full rounded-full bg-green-500 transition-all duration-300",
                                    style: {
                                        width: `${checklistPct}%`
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "rounded-lg border border-border bg-card p-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1.5",
                                children: "Items Outstanding"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-baseline gap-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-2xl font-semibold tracking-tight",
                                        children: outstandingTotal
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-[13px] text-muted-foreground",
                                        children: "not deployed or unsigned"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: "mt-2.5 text-[12.5px] text-muted-foreground",
                                children: [
                                    notDeployedCount,
                                    " artifact",
                                    notDeployedCount === 1 ? "" : "s",
                                    " not deployed \\u00b7",
                                    " ",
                                    unsignedCount,
                                    " checklist item",
                                    unsignedCount === 1 ? "" : "s",
                                    " unsigned"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex items-center gap-6 border-b border-border overflow-x-auto",
                role: "tablist",
                children: tabs.map((tab)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        type: "button",
                        role: "tab",
                        "aria-selected": activeTab === tab.id,
                        onClick: ()=>setActiveTab(tab.id),
                        className: (0,utils.cn)("relative pb-3 text-sm font-medium whitespace-nowrap transition-colors", activeTab === tab.id ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"),
                        children: [
                            tab.label,
                            activeTab === tab.id && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "absolute left-0 right-0 bottom-[-1px] h-0.5 bg-foreground rounded-full"
                            })
                        ]
                    }, tab.id))
            }),
            activeTab === "artifacts" && (artifactsLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "py-12 text-center text-muted-foreground",
                children: "Loading artifacts…"
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ReleaseArtifactsTable, {
                data: artifacts
            })),
            activeTab === "deployments" && /*#__PURE__*/ (0,jsx_runtime.jsx)(DeploymentsTab, {
                releaseName: release.name
            }),
            activeTab === "deployment-environments" && /*#__PURE__*/ (0,jsx_runtime.jsx)(DeployEnvTab, {
                artifacts: artifacts
            }),
            activeTab === "database" && /*#__PURE__*/ (0,jsx_runtime.jsx)(DatabaseTab, {
                releaseName: release.name
            }),
            activeTab === "release-checklist" && /*#__PURE__*/ (0,jsx_runtime.jsx)(ReleaseChecklistTab, {
                checklist: checklist,
                onChecklistChange: handleChecklistChange,
                onShowToast: showToast
            }),
            activeTab === "release-information" && /*#__PURE__*/ (0,jsx_runtime.jsx)(ReleaseInformationTab, {
                initialContent: release.notes.length > 0 ? release.notes.map((note)=>note.body).join("\n\n") : ""
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "fixed bottom-5 right-5 flex flex-col gap-2 z-50",
                children: toasts.map((toast)=>{
                    const variantCls = toast.variant === "destructive" ? "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-400" : toast.variant === "success" ? "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400" : "border-border bg-card text-foreground";
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (0,utils.cn)("flex items-center gap-2 rounded-md border px-4 py-2.5 text-[13px] font-medium shadow-md transition-all duration-200", variantCls),
                        style: {
                            maxWidth: "320px"
                        },
                        children: toast.message
                    }, toast.id);
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/routes/releases.$releaseName.tsx?tsr-split=component





function ReleaseDetailRoute() {
    const { releaseName } = (0,useParams/* .useParams */.g)({
        from: "/releases/$releaseName"
    });
    const navigate = (0,useNavigate/* .useNavigate */.Z)();
    const { data: releases = [], isLoading } = (0,use_releases/* .useReleases */.aN)();
    const release = (0,react.useMemo)(()=>{
        const decoded = decodeURIComponent(releaseName);
        return releases.find((r)=>r.name === decoded || r.version === decoded || r.id === decoded || r.title !== null && r.title === decoded);
    }, [
        releases,
        releaseName
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "flex flex-col items-center justify-center gap-4 py-20 text-muted-foreground",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "text-sm",
                children: "Loading release…"
            })
        });
    }
    if (!release) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col items-center justify-center gap-4 py-20 text-muted-foreground",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "text-lg font-medium",
                    children: "Release not found"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    type: "button",
                    onClick: ()=>navigate({
                            to: "/releases"
                        }),
                    className: "text-sm underline hover:text-foreground",
                    children: "Back to releases"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReleaseDetailPage, {
        releaseId: release.id,
        fallback: release
    });
}



},

};
