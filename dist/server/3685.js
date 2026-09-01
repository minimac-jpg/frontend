export const __rspack_esm_id = 3685;
export const __rspack_esm_ids = [3685];
export const __webpack_modules__ = {
2196(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ BuildDetailRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useParams.js
var useParams = __webpack_require__(22679);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/link.js + 1 modules
var esm_link = __webpack_require__(38639);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader.mjs
var loader = __webpack_require__(70826);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/download.mjs
var download = __webpack_require__(83911);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.mjs
var arrow_left = __webpack_require__(2832);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/git-commit-horizontal.mjs
var git_commit_horizontal = __webpack_require__(71438);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.mjs
var user = __webpack_require__(25546);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar.mjs
var calendar = __webpack_require__(21953);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
// EXTERNAL MODULE: ./src/components/ui/card.tsx
var card = __webpack_require__(83461);
// EXTERNAL MODULE: ./src/components/ui/skeleton.tsx
var skeleton = __webpack_require__(50186);
// EXTERNAL MODULE: ./src/components/ui/tabs.tsx
var tabs = __webpack_require__(25967);
// EXTERNAL MODULE: ./src/components/ui/toast.tsx
var toast = __webpack_require__(87202);
// EXTERNAL MODULE: ./src/features/artifacts/api/queries.ts + 1 modules
var queries = __webpack_require__(42195);
// EXTERNAL MODULE: ./src/features/pipelines/api/queries.ts
var api_queries = __webpack_require__(3578);
// EXTERNAL MODULE: ./src/features/pipelines/components/BuildStatusBadge.tsx
var BuildStatusBadge = __webpack_require__(42583);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.mjs
var arrow_down_to_line = __webpack_require__(11270);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(80828);
;// CONCATENATED MODULE: ./src/features/pipelines/components/ConsoleLogViewer.tsx






function ConsoleLogViewer({ data, isLoading, error }) {
    const containerRef = (0,react.useRef)(null);
    const [autoScroll, setAutoScroll] = (0,react.useState)(true);
    const handleScroll = (0,react.useCallback)(()=>{
        if (!containerRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;
        setAutoScroll(isAtBottom);
    }, []);
    (0,react.useEffect)(()=>{
        if (autoScroll && containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [
        data,
        autoScroll
    ]);
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "rounded-md border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive",
            role: "alert",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "font-medium",
                    children: "Failed to load console log"
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
                    className: "h-4 w-full"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                    className: "h-4 w-5/6"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                    className: "h-4 w-4/6"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                    className: "h-4 w-full"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                    className: "h-4 w-3/4"
                })
            ]
        });
    }
    if (!data || data.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "flex items-center justify-center py-12 text-sm text-muted-foreground",
            children: "No console output available."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                ref: containerRef,
                onScroll: handleScroll,
                className: "max-h-[60vh] overflow-auto rounded-lg border bg-black/5 p-4 font-mono text-xs leading-relaxed dark:bg-white/5",
                children: data.map((line)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (0,utils.cn)("whitespace-pre-wrap break-all hover:bg-black/5 dark:hover:bg-white/5", line.stream === "stderr" && "text-red-500 dark:text-red-400"),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "mr-4 select-none text-muted-foreground/40",
                                children: String(line.lineNumber).padStart(4, " ")
                            }),
                            line.content
                        ]
                    }, line.lineNumber))
            }),
            !autoScroll && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                variant: "outline",
                size: "sm",
                className: "absolute bottom-3 right-3",
                onClick: ()=>{
                    setAutoScroll(true);
                    containerRef.current?.scrollTo({
                        top: containerRef.current.scrollHeight,
                        behavior: "smooth"
                    });
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down_to_line/* ["default"] */.A, {
                        className: "mr-1 size-3.5"
                    }),
                    "Scroll to bottom"
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/features/pipelines/components/PipelineStageView.tsx
var PipelineStageView = __webpack_require__(48869);
;// CONCATENATED MODULE: ./src/routes/builds.$jobId.builds.$buildId.tsx?tsr-split=component














function formatDateTime(iso) {
    return new Date(iso).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}
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
function ArtifactDownloadButton({ artifact }) {
    const [isDownloading, setIsDownloading] = (0,react.useState)(false);
    async function handleDownload() {
        setIsDownloading(true);
        try {
            await (0,queries/* .downloadArtifact */.bk)(artifact.artifactId, artifact.name);
        } catch (err) {
            toast/* .toast.error */.oR.error(`Download failed: ${(0,toast/* .errorToMessage */.lV)(err)}`);
        } finally{
            setIsDownloading(false);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
        variant: "outline",
        size: "xs",
        onClick: handleDownload,
        disabled: isDownloading,
        children: [
            isDownloading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(loader/* ["default"] */.A, {
                className: "mr-1 size-3 animate-spin"
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(download/* ["default"] */.A, {
                className: "mr-1 size-3"
            }),
            "Download"
        ]
    });
}
function BuildDetailRoute() {
    const { jobId, buildId } = (0,useParams/* .useParams */.g)({
        from: "/builds/$jobId/builds/$buildId"
    });
    const { data: build, isLoading, error } = (0,api_queries/* .useBuild */.eK)(jobId, buildId);
    const { data: buildArtifacts } = (0,api_queries/* .useBuildArtifacts */.ZJ)(buildId);
    const { data: logData, isLoading: logLoading, error: logError } = (0,api_queries/* .useConsoleLog */.nL)(buildId);
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col gap-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                    className: "h-6 w-32"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                    className: "h-10 w-full"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                    className: "h-64 w-full"
                })
            ]
        });
    }
    if (error || !build) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "rounded-md border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive",
            role: "alert",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "font-medium",
                children: error?.message ?? "Build not found"
            })
        });
    }
    const artifacts = buildArtifacts ?? build.artifacts;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(esm_link/* .Link */.N_, {
                to: "/builds/$jobId",
                params: {
                    jobId
                },
                className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_left/* ["default"] */.A, {
                        className: "size-4"
                    }),
                    "Back to pipeline"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex flex-wrap items-start justify-between gap-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                    className: "text-2xl font-semibold tracking-tight",
                                    children: [
                                        "#",
                                        build.number
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(BuildStatusBadge/* .BuildStatusBadge */.cj, {
                                    status: build.status
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "mt-1 text-sm text-muted-foreground",
                            children: build.commitMessage
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-wrap gap-4 text-xs text-muted-foreground",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "inline-flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(git_commit_horizontal/* ["default"] */.A, {
                                className: "size-3.5"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "font-mono",
                                children: build.commitHash.slice(0, 7)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "inline-flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(user/* ["default"] */.A, {
                                className: "size-3.5"
                            }),
                            build.triggeredBy
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "inline-flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(calendar/* ["default"] */.A, {
                                className: "size-3.5"
                            }),
                            formatDateTime(build.createdAt)
                        ]
                    }),
                    build.duration !== null && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "font-mono",
                        children: (0,BuildStatusBadge/* .formatDuration */.a3)(build.duration)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* .Tabs */.tU, {
                defaultValue: "console",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* .TabsList */.j7, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* .TabsTrigger */.Xi, {
                                value: "console",
                                children: "Console Output"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* .TabsTrigger */.Xi, {
                                value: "stages",
                                children: "Stages"
                            }),
                            artifacts.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* .TabsTrigger */.Xi, {
                                value: "artifacts",
                                children: [
                                    "Artifacts (",
                                    artifacts.length,
                                    ")"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* .TabsContent */.av, {
                        value: "console",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ConsoleLogViewer, {
                            data: logData,
                            isLoading: logLoading,
                            error: logError
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* .TabsContent */.av, {
                        value: "stages",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PipelineStageView/* .PipelineStageView */.G, {
                            stages: build.stages
                        })
                    }),
                    artifacts.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* .TabsContent */.av, {
                        value: "artifacts",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
                            children: artifacts.map((artifact)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* .Card */.Zp, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardHeader */.aR, {
                                            className: "pb-3",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardTitle */.ZB, {
                                                className: "text-sm font-medium truncate",
                                                children: artifact.name
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardContent */.Wu, {
                                            className: "pb-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "font-mono text-xs text-muted-foreground",
                                                        children: formatBytes(artifact.size)
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArtifactDownloadButton, {
                                                        artifact: artifact
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }, artifact.name))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(toast/* .Toaster */.l$, {})
        ]
    });
}



},

};
