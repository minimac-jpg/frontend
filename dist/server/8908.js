export const __rspack_esm_id = 8908;
export const __rspack_esm_ids = [8908];
export const __webpack_modules__ = {
88391(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ ArtifactsIndexRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var useNavigate = __webpack_require__(45178);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useSearch.js
var useSearch = __webpack_require__(24613);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/link.js + 1 modules
var esm_link = __webpack_require__(38639);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.mjs
var icons_search = __webpack_require__(73619);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.mjs
var chevron_down = __webpack_require__(23489);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.mjs
var chevron_right = __webpack_require__(58417);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/upload.mjs
var icons_upload = __webpack_require__(95240);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/settings.mjs
var settings = __webpack_require__(36888);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs
var rotate_ccw = __webpack_require__(20096);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(16479);
// EXTERNAL MODULE: ./src/components/ui/toast.tsx
var toast = __webpack_require__(87202);
;// CONCATENATED MODULE: ./src/hooks/use-debounce.ts

function useDebouncedValue(value, delay) {
    const [debouncedValue, setDebouncedValue] = (0,react.useState)(value);
    (0,react.useEffect)(()=>{
        const timer = setTimeout(()=>setDebouncedValue(value), delay);
        return ()=>clearTimeout(timer);
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}

// EXTERNAL MODULE: ./src/features/artifacts/api/queries.ts + 1 modules
var queries = __webpack_require__(42195);
;// CONCATENATED MODULE: ./src/features/artifacts/components/CoordinateFields.tsx


const FIELD_IDS = {
    groupId: "artifact-group-id",
    artifactId: "artifact-artifact-id",
    version: "artifact-version",
    classifier: "artifact-classifier",
    extension: "artifact-extension",
    checksum: "artifact-checksum"
};
function CoordinateFields({ groupId, artifactId, version, classifier, extension, checksum, onGroupIdChange, onArtifactIdChange, onVersionChange, onClassifierChange, onExtensionChange, onChecksumChange }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("fieldset", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("legend", {
                className: "mb-2 text-sm font-medium text-foreground",
                children: "Coordinates"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                htmlFor: FIELD_IDS.groupId,
                                className: "mb-1 block text-xs text-muted-foreground",
                                children: "Group ID"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                id: FIELD_IDS.groupId,
                                placeholder: "e.g. com.example",
                                value: groupId,
                                onChange: (e)=>onGroupIdChange(e.target.value),
                                className: "h-8 text-xs"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                htmlFor: FIELD_IDS.artifactId,
                                className: "mb-1 block text-xs text-muted-foreground",
                                children: "Artifact ID"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                id: FIELD_IDS.artifactId,
                                placeholder: "e.g. my-lib",
                                value: artifactId,
                                onChange: (e)=>onArtifactIdChange(e.target.value),
                                className: "h-8 text-xs"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                htmlFor: FIELD_IDS.version,
                                className: "mb-1 block text-xs text-muted-foreground",
                                children: "Version"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                id: FIELD_IDS.version,
                                placeholder: "e.g. 1.0.0",
                                value: version,
                                onChange: (e)=>onVersionChange(e.target.value),
                                className: "h-8 text-xs"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                htmlFor: FIELD_IDS.classifier,
                                className: "mb-1 block text-xs text-muted-foreground",
                                children: "Classifier"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                id: FIELD_IDS.classifier,
                                placeholder: "e.g. sources",
                                value: classifier,
                                onChange: (e)=>onClassifierChange(e.target.value),
                                className: "h-8 text-xs"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                htmlFor: FIELD_IDS.extension,
                                className: "mb-1 block text-xs text-muted-foreground",
                                children: "Extension"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                id: FIELD_IDS.extension,
                                placeholder: "e.g. jar",
                                value: extension,
                                onChange: (e)=>onExtensionChange(e.target.value),
                                className: "h-8 text-xs"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                htmlFor: FIELD_IDS.checksum,
                                className: "mb-1 block text-xs text-muted-foreground",
                                children: "Checksum"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                id: FIELD_IDS.checksum,
                                placeholder: "SHA-256 / SHA-1 / MD5",
                                value: checksum,
                                onChange: (e)=>onChecksumChange(e.target.value),
                                className: "h-8 text-xs font-mono"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/ui/checkbox.tsx
var ui_checkbox = __webpack_require__(68008);
// EXTERNAL MODULE: ./src/components/ui/label.tsx
var ui_label = __webpack_require__(16533);
// EXTERNAL MODULE: ./src/features/artifacts/utils/format-colors.ts
var format_colors = __webpack_require__(71313);
;// CONCATENATED MODULE: ./src/features/artifacts/components/FormatFilterList.tsx




const FORMATS = [
    {
        value: "maven",
        label: "Maven"
    },
    {
        value: "npm",
        label: "npm"
    },
    {
        value: "docker",
        label: "Docker"
    },
    {
        value: "pypi",
        label: "PyPI"
    },
    {
        value: "nuget",
        label: "NuGet"
    }
];
function FormatFilterList({ selected, onChange }) {
    function toggle(format, checked) {
        if (checked) {
            onChange([
                ...selected,
                format
            ]);
        } else {
            onChange(selected.filter((f)=>f !== format));
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("fieldset", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("legend", {
                className: "mb-2 text-sm font-medium text-foreground",
                children: "Repository Format"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "space-y-2",
                children: FORMATS.map(({ value, label })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_label/* .Label */.J, {
                        className: "flex items-center gap-2 text-sm font-normal cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_checkbox/* .Checkbox */.S, {
                                checked: selected.includes(value),
                                onCheckedChange: (checked)=>toggle(value, checked === true)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: format_colors/* .formatColorMap */.PF[value],
                                children: label
                            })
                        ]
                    }, value))
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.mjs
var clock = __webpack_require__(70455);
// EXTERNAL MODULE: ./src/components/ui/skeleton.tsx
var skeleton = __webpack_require__(50186);
;// CONCATENATED MODULE: ./src/features/artifacts/components/RecentSearches.tsx




function RecentSearches({ onSelect }) {
    const { data, isLoading } = (0,queries/* .useRecentSearches */.tB)();
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "space-y-2",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                    className: "text-sm font-medium text-foreground",
                    children: "Recent Searches"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                    className: "h-8 w-full"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                    className: "h-8 w-3/4"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                    className: "h-8 w-5/6"
                })
            ]
        });
    }
    if (!data || data.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                className: "mb-2 text-sm font-medium text-foreground",
                children: "Recent Searches"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: "space-y-1",
                children: data.map((s, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            type: "button",
                            onClick: ()=>onSelect(s.query),
                            className: "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-xs text-muted-foreground hover:bg-gray-200/90 hover:text-foreground transition-colors text-left cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(clock/* ["default"] */.A, {
                                    className: "size-3 shrink-0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "truncate",
                                    children: s.query || (s.filters.formats?.join(", ") ?? "all formats")
                                })
                            ]
                        })
                    }, i))
            })
        ]
    });
}

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
// EXTERNAL MODULE: ./src/components/ui/badge.tsx
var badge = __webpack_require__(79318);
// EXTERNAL MODULE: ./src/components/ui/table.tsx
var ui_table = __webpack_require__(21999);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(80828);
;// CONCATENATED MODULE: ./src/features/artifacts/components/ResultsTable.tsx










function formatBytes(bytes) {
    if (bytes === 0) return "0 B";
    const units = [
        "B",
        "KB",
        "MB",
        "GB"
    ];
    const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
    const value = bytes / 1024 ** i;
    return `${value.toFixed(i === 0 ? 0 : 1)} ${units[i] ?? ""}`;
}
function formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
}
const columnHelper = (0,lib/* .createColumnHelper */.FB)();
function ResultsTable({ data, isLoading, error }) {
    const navigate = (0,useNavigate/* .useNavigate */.Z)();
    const [sorting, setSorting] = (0,react.useState)([
        {
            id: "name",
            desc: false
        }
    ]);
    const columns = (0,react.useMemo)(()=>[
            columnHelper.accessor("format", {
                header: "",
                id: "accent",
                enableSorting: false,
                cell: ({ getValue })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (0,utils.cn)("h-full min-h-[2.5rem] w-1", format_colors/* .formatAccentColorMap */.pJ[getValue()])
                    })
            }),
            columnHelper.accessor("name", {
                header: ({ header })=>{
                    const sorted = header.column.getIsSorted();
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "flex items-center gap-1",
                        children: [
                            "Component",
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
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-xs text-muted-foreground",
                                children: row.original.group
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "font-mono text-sm font-medium text-foreground",
                                children: row.original.name
                            })
                        ]
                    })
            }),
            columnHelper.accessor("version", {
                header: ({ header })=>{
                    const sorted = header.column.getIsSorted();
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "flex items-center gap-1",
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
                cell: ({ getValue })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "font-mono text-xs",
                        children: getValue()
                    })
            }),
            columnHelper.accessor("format", {
                header: ({ header })=>{
                    const sorted = header.column.getIsSorted();
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "flex items-center gap-1",
                        children: [
                            "Format",
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
                cell: ({ getValue })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                        variant: "outline",
                        className: (0,utils.cn)("text-xs font-mono", format_colors/* .formatBadgeColorMap */.US[getValue()]),
                        children: getValue()
                    })
            }),
            columnHelper.accessor("repository", {
                header: ({ header })=>{
                    const sorted = header.column.getIsSorted();
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "flex items-center gap-1",
                        children: [
                            "Repository",
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
                cell: ({ getValue })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-xs text-muted-foreground",
                        children: getValue()
                    })
            }),
            columnHelper.accessor("sizeBytes", {
                header: ({ header })=>{
                    const sorted = header.column.getIsSorted();
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "flex items-center gap-1",
                        children: [
                            "Size",
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
                cell: ({ getValue })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-xs font-mono text-muted-foreground",
                        children: formatBytes(getValue())
                    })
            }),
            columnHelper.accessor("modifiedAt", {
                header: ({ header })=>{
                    const sorted = header.column.getIsSorted();
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "flex items-center gap-1",
                        children: [
                            "Modified",
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
                cell: ({ getValue })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-xs text-muted-foreground",
                        children: formatDate(getValue())
                    })
            })
        ], []);
    const table = (0,build_lib/* .useReactTable */.N4)({
        data: data?.results ?? [],
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
                    children: "Failed to load results"
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
    if (!data || data.results.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col items-center justify-center py-16 text-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "text-lg font-medium text-foreground",
                    children: "No results found"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "mt-1 text-sm text-muted-foreground",
                    children: "Try adjusting your search query or filters."
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                className: "text-sm text-muted-foreground",
                children: [
                    data.total,
                    " result",
                    data.total !== 1 ? "s" : ""
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_table/* .Table */.XI, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHeader */.A0, {
                        children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableRow */.Hj, {
                                children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHead */.nd, {
                                        className: (0,utils.cn)(header.column.getCanSort() && "cursor-pointer select-none hover:text-foreground", header.column.id === "accent" && "w-1 p-0"),
                                        onClick: header.column.getToggleSortingHandler(),
                                        children: header.isPlaceholder ? null : (0,build_lib/* .flexRender */.Kv)(header.column.columnDef.header, header.getContext())
                                    }, header.id))
                            }, headerGroup.id))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableBody */.BF, {
                        children: table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableRow */.Hj, {
                                className: "cursor-pointer",
                                onClick: ()=>navigate({
                                        to: "/artifacts/$componentId",
                                        params: {
                                            componentId: row.original.id
                                        }
                                    }),
                                children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                        className: (0,utils.cn)(cell.column.id === "accent" && "p-0 w-1"),
                                        children: (0,build_lib/* .flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext())
                                    }, cell.id))
                            }, row.id))
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader.mjs
var loader = __webpack_require__(70826);
// EXTERNAL MODULE: ./src/components/ui/dialog.tsx
var dialog = __webpack_require__(70355);
// EXTERNAL MODULE: ./src/components/ui/select.tsx
var ui_select = __webpack_require__(24219);
;// CONCATENATED MODULE: ./src/features/artifacts/components/UploadArtifactDialog.tsx










const FORMAT_OPTIONS = [
    {
        value: "maven",
        label: "Maven"
    },
    {
        value: "npm",
        label: "npm"
    },
    {
        value: "docker",
        label: "Docker"
    },
    {
        value: "pypi",
        label: "PyPI"
    },
    {
        value: "nuget",
        label: "NuGet"
    }
];
const INITIAL_STATE = {
    format: "maven",
    repository: "",
    group: "",
    name: "",
    version: "",
    extension: "",
    description: "",
    classifier: "",
    buildId: ""
};
function UploadArtifactDialog({ open, onOpenChange }) {
    const [form, setForm] = (0,react.useState)(INITIAL_STATE);
    const [file, setFile] = (0,react.useState)(null);
    const upload = (0,queries/* .useUploadArtifact */.nc)();
    function update(key, value) {
        setForm((prev)=>({
                ...prev,
                [key]: value
            }));
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (!form.buildId?.trim()) {
            upload.reset();
            toast/* .toast.error */.oR.error("Build ID (UUID) is required.");
            return;
        }
        if (!file) {
            upload.reset();
            toast/* .toast.error */.oR.error("Please choose a file to upload.");
            return;
        }
        try {
            await upload.mutateAsync({
                ...form,
                buildId: form.buildId?.trim() || "",
                file
            });
            toast/* .toast.success */.oR.success("Artifact uploaded successfully.");
            setForm(INITIAL_STATE);
            setFile(null);
            onOpenChange(false);
        } catch (err) {
            toast/* .toast.error */.oR.error(err instanceof Error ? err.message : "Upload failed.");
        }
    }
    function handleOpenChange(open) {
        if (!open) {
            setForm(INITIAL_STATE);
            setFile(null);
            upload.reset();
        }
        onOpenChange(open);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .Dialog */.lG, {
        open: open,
        onOpenChange: handleOpenChange,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogContent */.Cf, {
            className: "sm:max-w-lg",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogHeader */.c7, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTitle */.L3, {
                                children: "Upload Artifact"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogDescription */.rr, {
                                children: "Upload a file for a build. The artifact is stored by the artifacts service."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid gap-4 py-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                                htmlFor: "upload-build-id",
                                                children: "Build ID (UUID)"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                id: "upload-build-id",
                                                placeholder: "e.g. 0b3f7c1e-…",
                                                value: form.buildId ?? "",
                                                onChange: (e)=>update("buildId", e.target.value),
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                                htmlFor: "upload-file",
                                                children: "File"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                id: "upload-file",
                                                type: "file",
                                                onChange: (e)=>setFile(e.target.files?.[0] ?? null),
                                                required: true
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                                htmlFor: "upload-format",
                                                children: "Format"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* .Select */.l6, {
                                                value: form.format,
                                                onValueChange: (v)=>update("format", v),
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectTrigger */.bq, {
                                                        id: "upload-format",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectValue */.yv, {})
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectContent */.gC, {
                                                        children: FORMAT_OPTIONS.map((opt)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                                                value: opt.value,
                                                                children: opt.label
                                                            }, opt.value))
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                                htmlFor: "upload-name",
                                                children: "Name"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                id: "upload-name",
                                                placeholder: "e.g. my-lib",
                                                value: form.name,
                                                onChange: (e)=>update("name", e.target.value),
                                                required: true
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                                htmlFor: "upload-classifier",
                                                children: "Classifier"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                id: "upload-classifier",
                                                placeholder: "e.g. sources (optional)",
                                                value: form.classifier ?? "",
                                                onChange: (e)=>update("classifier", e.target.value || undefined)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                                htmlFor: "upload-repository",
                                                children: "Repository"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                id: "upload-repository",
                                                placeholder: "e.g. maven-releases",
                                                value: form.repository,
                                                onChange: (e)=>update("repository", e.target.value)
                                            })
                                        ]
                                    })
                                ]
                            }),
                            upload.isError && upload.error instanceof Error && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "rounded-md border border-destructive/20 bg-destructive/5 p-3 text-sm text-destructive",
                                role: "alert",
                                children: upload.error.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogFooter */.Es, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                type: "button",
                                variant: "outline",
                                onClick: ()=>handleOpenChange(false),
                                disabled: upload.isPending,
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                type: "submit",
                                disabled: upload.isPending,
                                children: [
                                    upload.isPending ? /*#__PURE__*/ (0,jsx_runtime.jsx)(loader/* ["default"] */.A, {
                                        className: "size-4 animate-spin"
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_upload/* ["default"] */.A, {
                                        className: "size-4"
                                    }),
                                    "Upload"
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/features/artifacts/components/ArtifactSearchScreen.tsx














function filtersFromSearch(search) {
    const format = search.format;
    return {
        query: search.q || undefined,
        formats: Array.isArray(format) && format.length > 0 ? format : typeof format === "string" ? [
            format
        ] : undefined,
        repository: search.repository || undefined,
        groupId: search.groupId || undefined,
        artifactId: search.artifactId || undefined,
        version: search.version || undefined,
        classifier: search.classifier || undefined,
        extension: search.extension || undefined,
        checksum: search.checksum || undefined,
        buildId: search.buildId || undefined
    };
}
function hasAnyFilter(f) {
    return !!(f.query || f.formats && f.formats.length > 0 || f.repository || f.groupId || f.artifactId || f.version || f.classifier || f.extension || f.checksum || f.buildId);
}
function ArtifactSearchScreen() {
    const navigate = (0,useNavigate/* .useNavigate */.Z)();
    const search = (0,useSearch/* .useSearch */.S)({
        from: "/artifacts/"
    });
    const committedFilters = (0,react.useMemo)(()=>filtersFromSearch(search), [
        search
    ]);
    const hasActiveFilters = hasAnyFilter(committedFilters);
    const [query, setQuery] = (0,react.useState)(committedFilters.query ?? "");
    const [selectedFormats, setSelectedFormats] = (0,react.useState)(committedFilters.formats ?? []);
    const [repository, setRepository] = (0,react.useState)(committedFilters.repository ?? "");
    const [groupId, setGroupId] = (0,react.useState)(committedFilters.groupId ?? "");
    const [artifactId, setArtifactId] = (0,react.useState)(committedFilters.artifactId ?? "");
    const [version, setVersion] = (0,react.useState)(committedFilters.version ?? "");
    const [classifier, setClassifier] = (0,react.useState)(committedFilters.classifier ?? "");
    const [extension, setExtension] = (0,react.useState)(committedFilters.extension ?? "");
    const [checksum, setChecksum] = (0,react.useState)(committedFilters.checksum ?? "");
    const [buildId, setBuildId] = (0,react.useState)(committedFilters.buildId ?? "");
    const [advancedOpen, setAdvancedOpen] = (0,react.useState)(!!(committedFilters.groupId || committedFilters.artifactId || committedFilters.version || committedFilters.classifier || committedFilters.extension || committedFilters.checksum || committedFilters.buildId));
    const [uploadOpen, setUploadOpen] = (0,react.useState)(false);
    const debouncedQuery = useDebouncedValue(query, 250);
    const syncUrl = (0,react.useCallback)((overrides)=>{
        navigate({
            to: "/artifacts",
            search: {
                q: overrides.q !== undefined ? overrides.q : debouncedQuery || undefined,
                format: overrides.format !== undefined ? overrides.format : selectedFormats.length > 0 ? selectedFormats : undefined,
                repository: overrides.repository !== undefined ? overrides.repository : repository || undefined,
                groupId: overrides.groupId !== undefined ? overrides.groupId : groupId || undefined,
                artifactId: overrides.artifactId !== undefined ? overrides.artifactId : artifactId || undefined,
                version: overrides.version !== undefined ? overrides.version : version || undefined,
                classifier: overrides.classifier !== undefined ? overrides.classifier : classifier || undefined,
                extension: overrides.extension !== undefined ? overrides.extension : extension || undefined,
                checksum: overrides.checksum !== undefined ? overrides.checksum : checksum || undefined,
                buildId: overrides.buildId !== undefined ? overrides.buildId : buildId || undefined
            },
            replace: true
        });
    }, [
        navigate,
        debouncedQuery,
        selectedFormats,
        repository,
        groupId,
        artifactId,
        version,
        classifier,
        extension,
        checksum,
        buildId
    ]);
    (0,react.useEffect)(()=>{
        if (query !== committedFilters.query) {
            syncUrl({
                q: query || undefined
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        debouncedQuery
    ]);
    (0,react.useEffect)(()=>{
        setQuery(committedFilters.query ?? "");
        setSelectedFormats(committedFilters.formats ?? []);
        setRepository(committedFilters.repository ?? "");
        setGroupId(committedFilters.groupId ?? "");
        setArtifactId(committedFilters.artifactId ?? "");
        setVersion(committedFilters.version ?? "");
        setClassifier(committedFilters.classifier ?? "");
        setExtension(committedFilters.extension ?? "");
        setChecksum(committedFilters.checksum ?? "");
        setBuildId(committedFilters.buildId ?? "");
    }, [
        committedFilters
    ]);
    const searchFilters = (0,react.useMemo)(()=>({
            query: debouncedQuery || committedFilters.query,
            formats: selectedFormats.length > 0 ? selectedFormats : undefined,
            repository: repository || undefined,
            groupId: groupId || undefined,
            artifactId: artifactId || undefined,
            version: version || undefined,
            classifier: classifier || undefined,
            extension: extension || undefined,
            checksum: checksum || undefined,
            buildId: buildId || undefined
        }), [
        debouncedQuery,
        committedFilters.query,
        selectedFormats,
        repository,
        groupId,
        artifactId,
        version,
        classifier,
        extension,
        checksum,
        buildId
    ]);
    const { data, isLoading, error } = (0,queries/* .useArtifactSearch */.AW)(searchFilters);
    const handleClearAll = (0,react.useCallback)(()=>{
        setQuery("");
        setSelectedFormats([]);
        setRepository("");
        setGroupId("");
        setArtifactId("");
        setVersion("");
        setClassifier("");
        setExtension("");
        setChecksum("");
        setBuildId("");
        navigate({
            to: "/artifacts",
            search: {}
        });
    }, [
        navigate
    ]);
    const handleRecentSearchSelect = (0,react.useCallback)((q)=>{
        setQuery(q);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: "text-2xl font-semibold tracking-tight",
                        children: "Artifacts"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "mt-1 text-sm text-muted-foreground",
                        children: "Search and manage build artifacts"
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
                                className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground pointer-events-none"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                placeholder: "Search artifacts…",
                                className: "pl-9",
                                value: query,
                                onChange: (e)=>setQuery(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                        variant: "outline",
                        size: "sm",
                        onClick: ()=>setAdvancedOpen(!advancedOpen),
                        className: "shrink-0 gap-1.5",
                        children: [
                            advancedOpen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* ["default"] */.A, {
                                className: "size-4"
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* ["default"] */.A, {
                                className: "size-4"
                            }),
                            "Advanced"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                        size: "sm",
                        onClick: ()=>setUploadOpen(true),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_upload/* ["default"] */.A, {
                                className: "size-4"
                            }),
                            "Upload Artifact"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_link/* .Link */.N_, {
                        to: "/artifacts/settings",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                            variant: "ghost",
                            size: "icon-sm",
                            "aria-label": "Artifact settings",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(settings/* ["default"] */.A, {
                                className: "size-4"
                            })
                        })
                    })
                ]
            }),
            advancedOpen && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "rounded-lg border bg-muted/30 p-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(FormatFilterList, {
                            selected: selectedFormats,
                            onChange: (formats)=>{
                                setSelectedFormats(formats);
                                syncUrl({
                                    format: formats.length > 0 ? formats : undefined
                                });
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "space-y-3",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CoordinateFields, {
                                groupId: groupId,
                                artifactId: artifactId,
                                version: version,
                                classifier: classifier,
                                extension: extension,
                                checksum: checksum,
                                onGroupIdChange: (v)=>{
                                    setGroupId(v);
                                    syncUrl({
                                        groupId: v || undefined
                                    });
                                },
                                onArtifactIdChange: (v)=>{
                                    setArtifactId(v);
                                    syncUrl({
                                        artifactId: v || undefined
                                    });
                                },
                                onVersionChange: (v)=>{
                                    setVersion(v);
                                    syncUrl({
                                        version: v || undefined
                                    });
                                },
                                onClassifierChange: (v)=>{
                                    setClassifier(v);
                                    syncUrl({
                                        classifier: v || undefined
                                    });
                                },
                                onExtensionChange: (v)=>{
                                    setExtension(v);
                                    syncUrl({
                                        extension: v || undefined
                                    });
                                },
                                onChecksumChange: (v)=>{
                                    setChecksum(v);
                                    syncUrl({
                                        checksum: v || undefined
                                    });
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            htmlFor: "filter-repository",
                                            className: "mb-1 block text-xs text-muted-foreground",
                                            children: "Repository"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            id: "filter-repository",
                                            placeholder: "e.g. maven-releases",
                                            value: repository,
                                            onChange: (e)=>{
                                                setRepository(e.target.value);
                                                syncUrl({
                                                    repository: e.target.value || undefined
                                                });
                                            },
                                            className: "h-8 w-full rounded-md border border-input bg-transparent px-2.5 text-xs shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            htmlFor: "filter-build-id",
                                            className: "mb-1 block text-xs text-muted-foreground",
                                            children: "Build ID (UUID)"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            id: "filter-build-id",
                                            placeholder: "e.g. 0b3f7c1e-…",
                                            value: buildId,
                                            onChange: (e)=>{
                                                setBuildId(e.target.value);
                                                syncUrl({
                                                    buildId: e.target.value || undefined
                                                });
                                            },
                                            className: "h-8 w-full rounded-md border border-input bg-transparent px-2.5 text-xs shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "mt-1 text-[11px] text-muted-foreground",
                                            children: "Required — artifacts are scoped per build."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(RecentSearches, {
                                    onSelect: handleRecentSearchSelect
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex items-center gap-2",
                children: hasActiveFilters && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                    variant: "ghost",
                    size: "xs",
                    onClick: handleClearAll,
                    className: "gap-1 text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(rotate_ccw/* ["default"] */.A, {
                            className: "size-3"
                        }),
                        "Clear"
                    ]
                })
            }),
            !searchFilters.buildId ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col items-center justify-center py-16 text-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-lg font-medium text-foreground",
                        children: "Enter a Build ID to search artifacts"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "mt-1 text-sm text-muted-foreground",
                        children: "The artifacts service lists artifacts per build — set a Build ID (UUID) under Advanced to browse its artifacts."
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultsTable, {
                data: data,
                isLoading: isLoading,
                error: error
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(UploadArtifactDialog, {
                open: uploadOpen,
                onOpenChange: setUploadOpen
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(toast/* .Toaster */.l$, {})
        ]
    });
}

;// CONCATENATED MODULE: ./src/routes/artifacts.index.tsx?tsr-split=component


function ArtifactsIndexRoute() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ArtifactSearchScreen, {});
}



},

};
