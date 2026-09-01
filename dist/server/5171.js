export const __rspack_esm_id = 5171;
export const __rspack_esm_ids = [5171];
export const __webpack_modules__ = {
10670(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ ArtifactDetailRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useParams.js
var useParams = __webpack_require__(22679);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var useNavigate = __webpack_require__(45178);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.mjs
var arrow_left = __webpack_require__(2832);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/copy.mjs
var icons_copy = __webpack_require__(41084);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/external-link.mjs
var external_link = __webpack_require__(91443);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader.mjs
var loader = __webpack_require__(70826);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/download.mjs
var download = __webpack_require__(83911);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trash-2.mjs
var trash_2 = __webpack_require__(66838);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./src/components/ui/alert-dialog.tsx
var alert_dialog = __webpack_require__(2428);
// EXTERNAL MODULE: ./src/components/ui/badge.tsx
var badge = __webpack_require__(79318);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
// EXTERNAL MODULE: ./src/components/ui/separator.tsx
var separator = __webpack_require__(73594);
// EXTERNAL MODULE: ./src/components/ui/skeleton.tsx
var skeleton = __webpack_require__(50186);
// EXTERNAL MODULE: ./src/components/ui/toast.tsx
var toast = __webpack_require__(87202);
// EXTERNAL MODULE: ./src/components/ui/tooltip.tsx
var tooltip = __webpack_require__(18918);
// EXTERNAL MODULE: ./src/features/artifacts/api/queries.ts + 1 modules
var queries = __webpack_require__(42195);
// EXTERNAL MODULE: ./src/features/artifacts/utils/format-colors.ts
var format_colors = __webpack_require__(71313);
;// CONCATENATED MODULE: ./src/features/artifacts/components/AssetList.tsx






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
function AssetList({ assets, artifactId }) {
    const [downloadingAsset, setDownloadingAsset] = (0,react.useState)(null);
    async function handleDownload(asset) {
        setDownloadingAsset(asset.name);
        try {
            await (0,queries/* .downloadArtifact */.bk)(artifactId, asset.name);
        } catch (err) {
            toast/* .toast.error */.oR.error(`Download failed: ${(0,toast/* .errorToMessage */.lV)(err)}`);
        } finally{
            setDownloadingAsset(null);
        }
    }
    if (assets.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "rounded-md border border-dashed border-border p-4 text-center text-sm text-muted-foreground",
            children: "No assets associated with this component."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "divide-y divide-border rounded-md border",
        children: assets.map((asset)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between gap-4 px-3 py-2.5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "truncate text-sm font-mono text-foreground",
                                children: asset.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: "text-xs text-muted-foreground",
                                children: [
                                    formatBytes(asset.sizeBytes),
                                    " \xb7 ",
                                    asset.contentType
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                        variant: "outline",
                        size: "xs",
                        onClick: ()=>handleDownload(asset),
                        disabled: downloadingAsset !== null,
                        children: [
                            downloadingAsset === asset.name ? /*#__PURE__*/ (0,jsx_runtime.jsx)(loader/* ["default"] */.A, {
                                className: "size-3 animate-spin"
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(download/* ["default"] */.A, {
                                className: "size-3"
                            }),
                            "Download"
                        ]
                    })
                ]
            }, asset.name))
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.mjs
var check = __webpack_require__(23853);
;// CONCATENATED MODULE: ./src/features/artifacts/components/ChecksumBlock.tsx





function CopyableField({ label, value }) {
    const [copied, setCopied] = (0,react.useState)(false);
    async function copy() {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-1",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("dt", {
                className: "text-xs font-medium text-muted-foreground",
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("dd", {
                className: "flex items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                        className: "flex-1 truncate rounded bg-muted px-2 py-1 text-xs font-mono text-foreground",
                        children: value
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipProvider */.Bc, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* .Tooltip */.m_, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipTrigger */.k$, {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                        variant: "ghost",
                                        size: "icon-xs",
                                        onClick: copy,
                                        className: "shrink-0",
                                        children: copied ? /*#__PURE__*/ (0,jsx_runtime.jsx)(check/* ["default"] */.A, {
                                            className: "size-3 text-emerald-500"
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_copy/* ["default"] */.A, {
                                            className: "size-3"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipContent */.ZI, {
                                    side: "top",
                                    children: copied ? "Copied!" : "Copy to clipboard"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function ChecksumBlock({ checksums }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                className: "text-sm font-medium text-foreground",
                children: "Checksums"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("dl", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyableField, {
                        label: "SHA-256",
                        value: checksums.sha256
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyableField, {
                        label: "SHA-1",
                        value: checksums.sha1
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyableField, {
                        label: "MD5",
                        value: checksums.md5
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/features/artifacts/components/ArtifactDetailPanel.tsx















function ArtifactDetailPanel_formatBytes(bytes) {
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
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}
function ArtifactDetailPanel({ componentId }) {
    const navigate = (0,useNavigate/* .useNavigate */.Z)();
    const { data: component, isLoading, error } = (0,queries/* .useArtifactDetail */.lB)(componentId);
    const deleteArtifact = (0,queries/* .useDeleteArtifact */.nz)();
    const [isDownloading, setIsDownloading] = (0,react.useState)(false);
    const handleCopyCoordinates = (0,react.useCallback)(async ()=>{
        if (!component) return;
        const coords = `${component.group}:${component.name}:${component.version}`;
        await navigator.clipboard.writeText(coords);
    }, [
        component
    ]);
    const handleDownload = (0,react.useCallback)(async ()=>{
        if (!component || component.assets.length === 0) return;
        setIsDownloading(true);
        try {
            await (0,queries/* .downloadArtifact */.bk)(component.id, component.assets[0]?.name ?? component.name);
        } catch (err) {
            toast/* .toast.error */.oR.error(`Download failed: ${(0,toast/* .errorToMessage */.lV)(err)}`);
        } finally{
            setIsDownloading(false);
        }
    }, [
        component
    ]);
    const handleDelete = (0,react.useCallback)(()=>{
        if (!component) return;
        deleteArtifact.mutate(component.id, {
            onSuccess: ()=>{
                toast/* .toast.success */.oR.success("Artifact deleted.");
                navigate({
                    to: "/artifacts"
                });
            },
            onError: (err)=>{
                toast/* .toast.error */.oR.error(`Delete failed: ${(0,toast/* .errorToMessage */.lV)(err)}`);
            }
        });
    }, [
        component,
        deleteArtifact,
        navigate
    ]);
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "space-y-4 p-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                    variant: "ghost",
                    size: "sm",
                    onClick: ()=>navigate({
                            to: "/artifacts"
                        }),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_left/* ["default"] */.A, {
                            className: "size-4"
                        }),
                        "Back to search"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "rounded-md border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive",
                    role: "alert",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "font-medium",
                            children: "Failed to load component"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "mt-1 text-destructive/80",
                            children: error.message
                        })
                    ]
                })
            ]
        });
    }
    if (isLoading || !component) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "space-y-4 p-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                    variant: "ghost",
                    size: "sm",
                    disabled: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_left/* ["default"] */.A, {
                            className: "size-4"
                        }),
                        "Back to search"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                            className: "h-8 w-96"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                            className: "h-5 w-64"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "grid grid-cols-4 gap-4",
                            children: Array.from({
                                length: 4
                            }).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                                    className: "h-20"
                                }, i))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                            className: "h-48 w-full"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                            className: "h-32 w-full"
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-6 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                variant: "ghost",
                size: "sm",
                onClick: ()=>navigate({
                        to: "/artifacts"
                    }),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_left/* ["default"] */.A, {
                        className: "size-4"
                    }),
                    "Back to search"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-start justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-xs text-muted-foreground font-mono",
                                        children: component.group
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                        className: "truncate text-xl font-semibold text-foreground",
                                        children: component.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "font-mono text-sm text-muted-foreground",
                                        children: [
                                            "v",
                                            component.version
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-2 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                                        variant: "outline",
                                        className: format_colors/* .formatBadgeColorMap */.US[component.format],
                                        children: component.format
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(badge/* .Badge */.E, {
                                        variant: "secondary",
                                        className: "font-mono text-xs",
                                        children: [
                                            ".",
                                            component.extension
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    component.description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "mt-2 text-sm text-muted-foreground",
                        children: component.description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(separator/* .Separator */.w, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-2 gap-4 sm:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dt", {
                                className: "text-xs font-medium text-muted-foreground",
                                children: "Version"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dd", {
                                className: "font-mono text-sm text-foreground",
                                children: component.version
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dt", {
                                className: "text-xs font-medium text-muted-foreground",
                                children: "Repository"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dd", {
                                className: "text-sm text-foreground",
                                children: component.repository
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dt", {
                                className: "text-xs font-medium text-muted-foreground",
                                children: "Last Modified"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dd", {
                                className: "text-sm text-foreground",
                                children: formatDate(component.modifiedAt)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dt", {
                                className: "text-xs font-medium text-muted-foreground",
                                children: "Size"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dd", {
                                className: "font-mono text-sm text-foreground",
                                children: ArtifactDetailPanel_formatBytes(component.sizeBytes)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(separator/* .Separator */.w, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipProvider */.Bc, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* .Tooltip */.m_, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipTrigger */.k$, {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: handleCopyCoordinates,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_copy/* ["default"] */.A, {
                                                className: "size-3.5"
                                            }),
                                            "Copy Coordinates"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* .TooltipContent */.ZI, {
                                    side: "top",
                                    children: "group:name:version"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                        variant: "outline",
                        size: "sm",
                        asChild: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                            href: `/artifacts?q=${component.name}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* ["default"] */.A, {
                                    className: "size-3.5"
                                }),
                                "View all versions"
                            ]
                        })
                    }),
                    component.assets.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                        variant: "outline",
                        size: "sm",
                        onClick: handleDownload,
                        disabled: isDownloading,
                        children: [
                            isDownloading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(loader/* ["default"] */.A, {
                                className: "size-3.5 animate-spin"
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(download/* ["default"] */.A, {
                                className: "size-3.5"
                            }),
                            "Download"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* .AlertDialog */.Lt, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* .AlertDialogTrigger */.tv, {
                                asChild: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                    variant: "destructive",
                                    size: "sm",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(trash_2/* ["default"] */.A, {
                                            className: "size-3.5"
                                        }),
                                        "Delete"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* .AlertDialogContent */.EO, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* .AlertDialogHeader */.wd, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* .AlertDialogTitle */.r7, {
                                                children: "Delete component?"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* .AlertDialogDescription */.$v, {
                                                children: [
                                                    "This will permanently delete",
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        className: "font-medium text-foreground",
                                                        children: [
                                                            component.group,
                                                            ":",
                                                            component.name,
                                                            ":",
                                                            component.version
                                                        ]
                                                    }),
                                                    " ",
                                                    "and all its assets. This action cannot be undone."
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* .AlertDialogFooter */.ck, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* .AlertDialogCancel */.Zr, {
                                                children: "Cancel"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* .AlertDialogAction */.Rx, {
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    handleDelete();
                                                },
                                                disabled: deleteArtifact.isPending,
                                                children: deleteArtifact.isPending ? /*#__PURE__*/ (0,jsx_runtime.jsx)(loader/* ["default"] */.A, {
                                                    className: "size-3.5 animate-spin"
                                                }) : "Delete"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(separator/* .Separator */.w, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                        className: "mb-3 text-sm font-medium text-foreground",
                        children: [
                            "Assets (",
                            component.assets.length,
                            ")"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetList, {
                        assets: component.assets,
                        artifactId: component.id
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(separator/* .Separator */.w, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ChecksumBlock, {
                checksums: component.checksums
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(toast/* .Toaster */.l$, {}),
            component.dependents.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(separator/* .Separator */.w, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                className: "mb-3 text-sm font-medium text-foreground",
                                children: [
                                    "Used by (",
                                    component.dependents.length,
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "divide-y divide-border rounded-md border",
                                children: component.dependents.map((dep)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center justify-between px-3 py-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "font-mono text-sm text-foreground",
                                                children: dep.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "font-mono text-xs text-muted-foreground",
                                                children: dep.version
                                            })
                                        ]
                                    }, `${dep.name}@${dep.version}`))
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/routes/artifacts.$componentId.tsx?tsr-split=component



function ArtifactDetailRoute() {
    const { componentId } = (0,useParams/* .useParams */.g)({
        from: "/artifacts/$componentId"
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ArtifactDetailPanel, {
        componentId: componentId
    });
}



},

};
