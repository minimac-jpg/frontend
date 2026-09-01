export const __rspack_esm_id = 2467;
export const __rspack_esm_ids = [2467];
export const __webpack_modules__ = {
5022(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ ReleasesIndexRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/plus.mjs
var plus = __webpack_require__(44207);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
// EXTERNAL MODULE: ./src/components/ui/tabs.tsx
var tabs = __webpack_require__(25967);
// EXTERNAL MODULE: ./src/components/ui/badge.tsx
var badge = __webpack_require__(79318);
// EXTERNAL MODULE: ./src/hooks/use-releases.ts
var use_releases = __webpack_require__(72756);
// EXTERNAL MODULE: ./node_modules/date-fns/format.js + 17 modules
var format = __webpack_require__(21377);
// EXTERNAL MODULE: ./node_modules/date-fns/isToday.js
var isToday = __webpack_require__(66117);
// EXTERNAL MODULE: ./node_modules/date-fns/isYesterday.js + 2 modules
var isYesterday = __webpack_require__(310);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up.mjs
var arrow_up = __webpack_require__(53540);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down.mjs
var arrow_down = __webpack_require__(6611);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up-down.mjs
var arrow_up_down = __webpack_require__(2282);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/ellipsis.mjs
var ellipsis = __webpack_require__(14890);
// EXTERNAL MODULE: ./src/components/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(77338);
// EXTERNAL MODULE: ./src/components/releases/status-badge.tsx
var status_badge = __webpack_require__(47591);
;// CONCATENATED MODULE: ./src/components/releases/columns.tsx






function relativeDate(dateStr) {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return null;
    const formatted = (0,format/* .format */.GP)(d, "MMM d, yyyy");
    if ((0,isToday/* .isToday */.c)(d)) return {
        date: formatted,
        label: "Today"
    };
    if ((0,isYesterday/* .isYesterday */.P)(d)) return {
        date: formatted,
        label: "Yesterday"
    };
    const diff = Math.round((d.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    if (diff > 0) return {
        date: formatted,
        label: `in ${diff}d`
    };
    if (diff < 0) return {
        date: formatted,
        label: `${Math.abs(diff)}d ago`
    };
    return {
        date: formatted,
        label: "Today"
    };
}
function TimestampCell({ date }) {
    const rel = relativeDate(date);
    if (!rel) return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: "text-sm text-muted-foreground",
        children: "—"
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-sm",
                children: rel.date
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-xs text-muted-foreground",
                children: rel.label
            })
        ]
    });
}
function sortableHeader(label) {
    return ({ header })=>{
        const sorted = header.column.getIsSorted();
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
            className: "flex items-center gap-1 text-xs font-medium",
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
    };
}
function createColumns(onEdit) {
    return [
        {
            accessorKey: "name",
            header: sortableHeader("Release"),
            cell: ({ row })=>{
                const release = row.original;
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "font-medium text-sm",
                            children: release.name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-xs text-muted-foreground font-mono",
                            children: release.id
                        })
                    ]
                });
            },
            sortingFn: (a, b)=>a.original.name.localeCompare(b.original.name)
        },
        {
            id: "project",
            header: sortableHeader("Project"),
            cell: ({ row })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: "text-sm",
                    children: row.original.projectName ?? "—"
                }),
            sortingFn: (a, b)=>(a.original.projectName ?? "").localeCompare(b.original.projectName ?? "")
        },
        {
            id: "kind",
            header: sortableHeader("Kind"),
            cell: ({ row })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: "text-sm text-muted-foreground",
                    children: row.original.kind ? row.original.kind.replace(/_/g, " ") : "—"
                }),
            sortingFn: (a, b)=>(a.original.kind ?? "").localeCompare(b.original.kind ?? "")
        },
        {
            accessorKey: "createdAt",
            header: sortableHeader("Created"),
            cell: ({ row })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TimestampCell, {
                    date: row.original.createdAt
                }),
            sortingFn: (a, b)=>new Date(a.original.createdAt).getTime() - new Date(b.original.createdAt).getTime()
        },
        {
            id: "publishedAt",
            header: sortableHeader("Published"),
            cell: ({ row })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TimestampCell, {
                    date: row.original.publishedAt
                }),
            sortingFn: (a, b)=>new Date(a.original.publishedAt ?? 0).getTime() - new Date(b.original.publishedAt ?? 0).getTime()
        },
        {
            accessorKey: "status",
            header: sortableHeader("Status"),
            cell: ({ row })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(status_badge/* .StatusBadge */.W, {
                    status: row.original.status
                })
        },
        {
            id: "actions",
            enableSorting: false,
            header: ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "w-8"
                }),
            cell: ({ row })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex justify-end",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenu */.rI, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuTrigger */.ty, {
                                asChild: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "size-8",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ellipsis/* ["default"] */.A, {
                                            className: "size-4"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "sr-only",
                                            children: "Actions"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuContent */.SQ, {
                                align: "end",
                                children: row.original.status === "draft" && /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuItem */._2, {
                                    onSelect: ()=>onEdit?.(row.original),
                                    children: "Edit release"
                                })
                            })
                        ]
                    })
                })
        }
    ];
}

// EXTERNAL MODULE: ./src/components/ui/dialog.tsx
var dialog = __webpack_require__(70355);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(16479);
// EXTERNAL MODULE: ./src/components/ui/label.tsx
var ui_label = __webpack_require__(16533);
// EXTERNAL MODULE: ./src/components/ui/select.tsx
var ui_select = __webpack_require__(24219);
// EXTERNAL MODULE: ./src/components/ui/textarea.tsx
var ui_textarea = __webpack_require__(57529);
;// CONCATENATED MODULE: ./src/components/releases/release-dialog.tsx









// Matches ReleaseVersion::parse in harlie-releases (semver::Version::parse).
const SEMVER_PATTERN = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/;
function ReleaseDialog({ open, onOpenChange, release, onSave }) {
    const isEdit = !!release;
    const { data: projects = [], isLoading: projectsLoading } = (0,use_releases/* .useProjectOptions */.bt)();
    const createRelease = (0,use_releases/* .useCreateRelease */.BQ)();
    const updateRelease = (0,use_releases/* .useUpdateRelease */.cu)(release?.id ?? "");
    const [projectId, setProjectId] = (0,react.useState)("");
    const [version, setVersion] = (0,react.useState)(release?.version ?? "");
    const [title, setTitle] = (0,react.useState)(release?.title ?? "");
    const [notes, setNotes] = (0,react.useState)(release?.notes[0]?.body ?? "");
    const [projectError, setProjectError] = (0,react.useState)(null);
    const [versionError, setVersionError] = (0,react.useState)(null);
    const [requestError, setRequestError] = (0,react.useState)(null);
    const isPending = createRelease.isPending || updateRelease.isPending;
    function resetForm() {
        setProjectId("");
        setVersion("");
        setTitle("");
        setNotes("");
        setProjectError(null);
        setVersionError(null);
        setRequestError(null);
    }
    function handleOpenChange(nextOpen) {
        if (!nextOpen && !isEdit) {
            resetForm();
        }
        onOpenChange(nextOpen);
    }
    async function handleSave() {
        setRequestError(null);
        const trimmedTitle = title.trim();
        const trimmedNotes = notes.trim();
        const nextNotes = trimmedNotes ? [
            {
                title: "Notes",
                body: trimmedNotes,
                format: "markdown"
            }
        ] : undefined;
        if (isEdit) {
            try {
                await updateRelease.mutateAsync({
                    title: trimmedTitle || undefined,
                    notes: nextNotes
                });
                onSave();
            } catch (err) {
                setRequestError(err instanceof Error ? err.message : "Failed to update release");
            }
            return;
        }
        const trimmedVersion = version.trim();
        let hasError = false;
        if (!projectId) {
            setProjectError("Select a project");
            hasError = true;
        } else {
            setProjectError(null);
        }
        if (!SEMVER_PATTERN.test(trimmedVersion)) {
            setVersionError("Version must be valid semver, e.g. 1.2.3");
            hasError = true;
        } else {
            setVersionError(null);
        }
        if (hasError) return;
        try {
            await createRelease.mutateAsync({
                projectId,
                version: trimmedVersion,
                title: trimmedTitle || undefined,
                notes: nextNotes
            });
            onSave();
        } catch (err) {
            setRequestError(err instanceof Error ? err.message : "Failed to create release");
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .Dialog */.lG, {
        open: open,
        onOpenChange: handleOpenChange,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogContent */.Cf, {
            className: "sm:max-w-xl max-h-[90vh] overflow-y-auto",
            onOpenAutoFocus: (e)=>e.preventDefault(),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogHeader */.c7, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTitle */.L3, {
                            children: isEdit ? "Edit release" : "Create release"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogDescription */.rr, {
                            children: isEdit ? "Only the title and notes of a draft release can be updated." : "Fill in the details to create a new release."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid gap-5",
                    children: [
                        isEdit && release ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                            htmlFor: "release-version",
                                            children: "Version"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                            id: "release-version",
                                            value: release.version,
                                            readOnly: true,
                                            className: "text-muted-foreground"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                            htmlFor: "release-project",
                                            children: "Project"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                            id: "release-project",
                                            value: release.projectName ?? release.projectId,
                                            readOnly: true,
                                            className: "text-muted-foreground"
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                            htmlFor: "release-project",
                                            children: "Project"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* .Select */.l6, {
                                            value: projectId,
                                            onValueChange: setProjectId,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectTrigger */.bq, {
                                                    id: "release-project",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectValue */.yv, {
                                                        placeholder: projectsLoading ? "Loading projects…" : "Select project"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectContent */.gC, {
                                                    children: projects.map((project)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                                            value: project.id,
                                                            children: project.name
                                                        }, project.id))
                                                })
                                            ]
                                        }),
                                        projectError && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-xs text-destructive",
                                            children: projectError
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                            htmlFor: "fix-version",
                                            children: "Version"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                            id: "fix-version",
                                            value: version,
                                            onChange: (e)=>setVersion(e.target.value),
                                            placeholder: "e.g. 1.2.3"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Semantic version (MAJOR.MINOR.PATCH)."
                                        }),
                                        versionError && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-xs text-destructive",
                                            children: versionError
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid gap-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                    htmlFor: "release-title",
                                    children: "Title"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                    id: "release-title",
                                    value: title,
                                    onChange: (e)=>setTitle(e.target.value),
                                    placeholder: "e.g. Q3 payments drop"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid gap-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                    htmlFor: "release-notes",
                                    children: "Notes"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_textarea/* .Textarea */.T, {
                                    id: "release-notes",
                                    value: notes,
                                    onChange: (e)=>setNotes(e.target.value),
                                    placeholder: "Release notes (markdown supported)",
                                    className: "min-h-28"
                                })
                            ]
                        }),
                        requestError && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-xs text-destructive",
                            children: requestError
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogFooter */.Es, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                            variant: "outline",
                            onClick: ()=>handleOpenChange(false),
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                            onClick: handleSave,
                            disabled: isPending || isEdit && !release,
                            children: isPending ? "Saving…" : isEdit ? "Save changes" : "Create release"
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var useNavigate = __webpack_require__(45178);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-table/build/lib/index.mjs
var lib = __webpack_require__(46390);
// EXTERNAL MODULE: ./node_modules/@tanstack/table-core/build/lib/index.mjs
var build_lib = __webpack_require__(44228);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/inbox.mjs
var inbox = __webpack_require__(26257);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevrons-left.mjs
var chevrons_left = __webpack_require__(34395);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.mjs
var chevron_left = __webpack_require__(89358);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.mjs
var chevron_right = __webpack_require__(58417);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevrons-right.mjs
var chevrons_right = __webpack_require__(30622);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(80828);
// EXTERNAL MODULE: ./src/components/ui/table.tsx
var ui_table = __webpack_require__(21999);
;// CONCATENATED MODULE: ./src/components/releases/releases-data-table.tsx









const PAGE_SIZES = [
    8,
    10,
    20,
    50
];
function ReleasesDataTable({ columns, data }) {
    const navigate = (0,useNavigate/* .useNavigate */.Z)();
    const [sorting, setSorting] = (0,react.useState)([]);
    const table = (0,lib/* .useReactTable */.N4)({
        data,
        columns,
        state: {
            sorting
        },
        onSortingChange: setSorting,
        getCoreRowModel: (0,build_lib/* .getCoreRowModel */.HT)(),
        getSortedRowModel: (0,build_lib/* .getSortedRowModel */.h5)(),
        getPaginationRowModel: (0,build_lib/* .getPaginationRowModel */.kW)(),
        initialState: {
            pagination: {
                pageSize: 10
            }
        }
    });
    const rowCount = data.length;
    const { pageIndex, pageSize } = table.getState().pagination;
    const pageCount = table.getPageCount();
    const from = rowCount === 0 ? 0 : pageIndex * pageSize + 1;
    const to = Math.min((pageIndex + 1) * pageSize, rowCount);
    const canPrev = table.getCanPreviousPage();
    const canNext = table.getCanNextPage();
    const pageNumbers = (0,react.useMemo)(()=>{
        const total = pageCount;
        const current = pageIndex + 1;
        const pages = [];
        if (total <= 7) {
            for(let i = 1; i <= total; i++)pages.push(i);
        } else {
            pages.push(1);
            if (current > 3) pages.push("ellipsis");
            const start = Math.max(2, current - 1);
            const end = Math.min(total - 1, current + 1);
            for(let i = start; i <= end; i++)pages.push(i);
            if (current < total - 2) pages.push("ellipsis");
            pages.push(total);
        }
        return pages;
    }, [
        pageCount,
        pageIndex
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "rounded-md border",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_table/* .Table */.XI, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHeader */.A0, {
                            children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableRow */.Hj, {
                                    children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableHead */.nd, {
                                            className: (0,utils.cn)(header.column.getCanSort() && "cursor-pointer select-none hover:text-foreground"),
                                            onClick: header.column.getToggleSortingHandler(),
                                            children: header.isPlaceholder ? null : (0,lib/* .flexRender */.Kv)(header.column.columnDef.header, header.getContext())
                                        }, header.id))
                                }, headerGroup.id))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableBody */.BF, {
                            children: table.getRowModel().rows.length > 0 ? table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableRow */.Hj, {
                                    className: "cursor-pointer",
                                    onClick: ()=>navigate({
                                            to: "/releases/$releaseName",
                                            params: {
                                                releaseName: encodeURIComponent(row.original.name)
                                            }
                                        }),
                                    children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                            children: (0,lib/* .flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext())
                                        }, cell.id))
                                }, row.id)) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableRow */.Hj, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_table/* .TableCell */.nA, {
                                    colSpan: columns.length,
                                    className: "h-48 text-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col items-center justify-center gap-2 text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(inbox/* ["default"] */.A, {
                                                className: "size-10"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-sm font-medium",
                                                children: "No releases found"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-xs",
                                                children: "Try adjusting your search or filters."
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "Showing ",
                            from,
                            "–",
                            to,
                            " of ",
                            rowCount,
                            " ",
                            rowCount === 1 ? "release" : "releases"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-1.5 text-sm text-muted-foreground",
                                children: [
                                    "Rows per page",
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* .Select */.l6, {
                                        value: String(pageSize),
                                        onValueChange: (v)=>table.setPageSize(Number(v)),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectTrigger */.bq, {
                                                className: "h-7 w-16 text-xs",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectValue */.yv, {})
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectContent */.gC, {
                                                children: PAGE_SIZES.map((s)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                                        value: String(s),
                                                        className: "text-xs",
                                                        children: s
                                                    }, s))
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "size-7",
                                        disabled: !canPrev,
                                        onClick: ()=>table.setPageIndex(0),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(chevrons_left/* ["default"] */.A, {
                                                className: "size-3.5"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "sr-only",
                                                children: "First page"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "size-7",
                                        disabled: !canPrev,
                                        onClick: ()=>table.previousPage(),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_left/* ["default"] */.A, {
                                                className: "size-3.5"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "sr-only",
                                                children: "Previous page"
                                            })
                                        ]
                                    }),
                                    pageNumbers.map((p, idx)=>p === "ellipsis" ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "flex size-7 items-center justify-center text-xs text-muted-foreground",
                                            children: "…"
                                        }, `ellipsis-${p}-${idx}`) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                            variant: p === pageIndex + 1 ? "default" : "ghost",
                                            size: "icon",
                                            className: "size-7 text-xs",
                                            onClick: ()=>table.setPageIndex(p - 1),
                                            children: p
                                        }, p)),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "size-7",
                                        disabled: !canNext,
                                        onClick: ()=>table.nextPage(),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* ["default"] */.A, {
                                                className: "size-3.5"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "sr-only",
                                                children: "Next page"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "size-7",
                                        disabled: !canNext,
                                        onClick: ()=>table.setPageIndex(pageCount - 1),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(chevrons_right/* ["default"] */.A, {
                                                className: "size-3.5"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "sr-only",
                                                children: "Last page"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.mjs
var search = __webpack_require__(73619);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs
var sliders_horizontal = __webpack_require__(46352);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.mjs
var x = __webpack_require__(78265);
// EXTERNAL MODULE: ./src/components/ui/checkbox.tsx
var ui_checkbox = __webpack_require__(68008);
;// CONCATENATED MODULE: ./src/components/releases/releases-table-toolbar.tsx








const defaultFilterState = {
    search: "",
    statuses: []
};
const allStatuses = [
    "draft",
    "pending_approval",
    "approved",
    "published",
    "failed",
    "cancelled",
    "archived"
];
const statusLabels = {
    draft: "Draft",
    pending_approval: "Pending approval",
    approved: "Approved",
    published: "Published",
    failed: "Failed",
    cancelled: "Cancelled",
    archived: "Archived"
};
function countBy(items, key) {
    const counts = new Map();
    for (const item of items){
        const k = key(item);
        counts.set(k, (counts.get(k) ?? 0) + 1);
    }
    return counts;
}
function ReleasesTableToolbar({ filter, onFilterChange, data, isDrawerOpen, onToggleDrawer, hideDrawer = false, drawerOnly = false }) {
    const activeFilterCount = filter.statuses.length;
    function update(partial) {
        onFilterChange({
            ...filter,
            ...partial
        });
    }
    function clearAll() {
        onFilterChange(defaultFilterState);
    }
    function removeStatus(status) {
        update({
            statuses: filter.statuses.filter((s)=>s !== status)
        });
    }
    function matchesSearch(r) {
        if (!filter.search) return true;
        const q = filter.search.toLowerCase();
        return r.name.toLowerCase().includes(q) || r.version.toLowerCase().includes(q) || (r.projectName ?? "").toLowerCase().includes(q) || r.id.toLowerCase().includes(q) || (r.title ?? "").toLowerCase().includes(q) || r.status.toLowerCase().includes(q);
    }
    function filteredWithout(category) {
        return data.filter((r)=>{
            if (!matchesSearch(r)) return false;
            if (category !== "statuses" && filter.statuses.length > 0) {
                if (!filter.statuses.includes(r.status)) return false;
            }
            return true;
        });
    }
    const statusFacetCounts = countBy(filteredWithout("statuses"), (r)=>r.status);
    const pills = [];
    for (const s of filter.statuses){
        pills.push({
            id: `status-${s}`,
            label: statusLabels[s] ?? s,
            onRemove: ()=>removeStatus(s)
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-2",
        children: [
            !drawerOnly && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative flex-1 max-w-sm",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(search/* ["default"] */.A, {
                                className: "absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground pointer-events-none"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                placeholder: "Search releases...",
                                value: filter.search,
                                onChange: (e)=>update({
                                        search: e.target.value
                                    }),
                                className: "h-8 pl-8"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                        variant: "outline",
                        size: "sm",
                        onClick: onToggleDrawer,
                        className: (0,utils.cn)("relative h-8", isDrawerOpen && "bg-accent text-accent-foreground"),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(sliders_horizontal/* ["default"] */.A, {
                                className: "mr-1.5 size-3.5"
                            }),
                            "Filter",
                            activeFilterCount > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                                variant: "secondary",
                                className: "ml-1.5 size-4 rounded-full p-0 text-[10px] font-medium tabular-nums leading-none flex items-center justify-center",
                                children: activeFilterCount
                            })
                        ]
                    }),
                    pills.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-wrap items-center gap-1.5",
                        children: [
                            pills.map((pill)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(badge/* .Badge */.E, {
                                    variant: "secondary",
                                    className: "h-6 gap-1 px-2 text-xs font-normal",
                                    children: [
                                        pill.label,
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            type: "button",
                                            onClick: pill.onRemove,
                                            className: "ml-0.5 rounded-full hover:bg-gray-200/90 p-0.5",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* ["default"] */.A, {
                                                    className: "size-3"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "sr-only",
                                                    children: [
                                                        "Remove ",
                                                        pill.label,
                                                        " filter"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, pill.id)),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                type: "button",
                                onClick: clearAll,
                                className: "text-xs text-muted-foreground hover:text-foreground underline",
                                children: "Clear all"
                            })
                        ]
                    })
                ]
            }),
            isDrawerOpen && !hideDrawer && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "border rounded-md p-4 bg-card space-y-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                className: "text-xs font-medium text-muted-foreground",
                                children: "Status"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1",
                                children: allStatuses.map((s)=>{
                                    const count = statusFacetCounts.get(s) ?? 0;
                                    const isChecked = filter.statuses.includes(s);
                                    const id = `filter-status-${s}`;
                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-2 rounded-sm px-1 py-1 text-sm hover:bg-gray-200/90",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_checkbox/* .Checkbox */.S, {
                                                id: id,
                                                checked: isChecked,
                                                onCheckedChange: ()=>{
                                                    update({
                                                        statuses: isChecked ? filter.statuses.filter((st)=>st !== s) : [
                                                            ...filter.statuses,
                                                            s
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
                                                        children: statusLabels[s] ?? s
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "text-xs text-muted-foreground tabular-nums shrink-0",
                                                        children: count
                                                    })
                                                ]
                                            })
                                        ]
                                    }, s);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                            variant: "ghost",
                            size: "sm",
                            onClick: clearAll,
                            className: "h-8 text-xs",
                            children: "Reset all"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/releases/releases-page.tsx











function matchRelease(release, filter) {
    if (filter.search) {
        const q = filter.search.toLowerCase();
        const matched = release.name.toLowerCase().includes(q) || release.version.toLowerCase().includes(q) || (release.projectName ?? "").toLowerCase().includes(q) || release.id.toLowerCase().includes(q) || (release.title ?? "").toLowerCase().includes(q) || release.status.toLowerCase().includes(q);
        if (!matched) return false;
    }
    if (filter.statuses.length > 0 && !filter.statuses.includes(release.status)) return false;
    return true;
}
function ReleasesPage() {
    const { data: allReleases = [], isLoading, isError, error } = (0,use_releases/* .useReleases */.aN)();
    const [tab, setTab] = (0,react.useState)("active");
    const [filter, setFilter] = (0,react.useState)(defaultFilterState);
    const [isDrawerOpen, setIsDrawerOpen] = (0,react.useState)(false);
    const [dialogOpen, setDialogOpen] = (0,react.useState)(false);
    const [editingRelease, setEditingRelease] = (0,react.useState)(undefined);
    const activeReleases = (0,react.useMemo)(()=>allReleases.filter((r)=>r.status !== "archived"), [
        allReleases
    ]);
    const archivedReleases = (0,react.useMemo)(()=>allReleases.filter((r)=>r.status === "archived"), [
        allReleases
    ]);
    const sourceData = tab === "active" ? activeReleases : archivedReleases;
    const filteredData = (0,react.useMemo)(()=>sourceData.filter((r)=>matchRelease(r, filter)), [
        sourceData,
        filter
    ]);
    const handleCreateRelease = (0,react.useCallback)(()=>{
        setEditingRelease(undefined);
        setDialogOpen(true);
    }, []);
    const handleEdit = (0,react.useCallback)((release)=>{
        setEditingRelease(release);
        setDialogOpen(true);
    }, []);
    const handleSave = (0,react.useCallback)(()=>{
        setDialogOpen(false);
        setEditingRelease(undefined);
    }, []);
    const columns = (0,react.useMemo)(()=>createColumns(handleEdit), [
        handleEdit
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                className: "text-2xl font-semibold tracking-tight",
                                children: "Releases"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "mt-1 text-sm text-muted-foreground",
                                children: "Manage software releases across environments"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                        onClick: handleCreateRelease,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(plus/* ["default"] */.A, {
                                className: "mr-1.5 size-4"
                            }),
                            "Create release"
                        ]
                    })
                ]
            }),
            isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex items-center justify-center py-20 text-muted-foreground",
                children: "Loading releases…"
            }) : isError ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col items-center gap-2 py-20 text-muted-foreground",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-sm font-medium text-destructive",
                        children: "Failed to load releases"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-xs",
                        children: error instanceof Error ? error.message : "Unknown error"
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* .Tabs */.tU, {
                value: tab,
                onValueChange: (v)=>{
                    setTab(v);
                    setIsDrawerOpen(false);
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* .TabsList */.j7, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* .TabsTrigger */.Xi, {
                                                value: "active",
                                                className: "gap-1.5",
                                                children: [
                                                    "Active",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                                                        variant: "secondary",
                                                        className: "rounded-full px-1.5 text-[11px] font-normal tabular-nums",
                                                        children: activeReleases.length
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* .TabsTrigger */.Xi, {
                                                value: "archived",
                                                className: "gap-1.5",
                                                children: [
                                                    "Archived",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                                                        variant: "secondary",
                                                        className: "rounded-full px-1.5 text-[11px] font-normal tabular-nums",
                                                        children: archivedReleases.length
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ReleasesTableToolbar, {
                                        filter: filter,
                                        onFilterChange: setFilter,
                                        data: sourceData,
                                        isDrawerOpen: isDrawerOpen,
                                        onToggleDrawer: ()=>setIsDrawerOpen((v)=>!v),
                                        hideDrawer: true
                                    })
                                ]
                            }),
                            isDrawerOpen && /*#__PURE__*/ (0,jsx_runtime.jsx)(ReleasesTableToolbar, {
                                filter: filter,
                                onFilterChange: setFilter,
                                data: sourceData,
                                isDrawerOpen: isDrawerOpen,
                                onToggleDrawer: ()=>setIsDrawerOpen((v)=>!v),
                                drawerOnly: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* .TabsContent */.av, {
                        value: tab,
                        className: "mt-4 space-y-4",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReleasesDataTable, {
                            columns: columns,
                            data: filteredData
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ReleaseDialog, {
                open: dialogOpen,
                onOpenChange: (open)=>{
                    setDialogOpen(open);
                    if (!open) setEditingRelease(undefined);
                },
                release: editingRelease,
                onSave: handleSave
            }, editingRelease?.id ?? "create")
        ]
    });
}

;// CONCATENATED MODULE: ./src/routes/releases.index.tsx?tsr-split=component


function ReleasesIndexRoute() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReleasesPage, {});
}



},

};
