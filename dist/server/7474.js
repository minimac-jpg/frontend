export const __rspack_esm_id = 7474;
export const __rspack_esm_ids = [7474];
export const __webpack_modules__ = {
68137(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ WorkersOverviewRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./src/features/console/api/queries.ts + 1 modules
var queries = __webpack_require__(1096);
// EXTERNAL MODULE: ./src/components/ui/card.tsx
var card = __webpack_require__(83461);
// EXTERNAL MODULE: ./src/components/ui/skeleton.tsx
var skeleton = __webpack_require__(50186);
// EXTERNAL MODULE: ./src/features/console/components/ResourceStatusBadge.tsx
var ResourceStatusBadge = __webpack_require__(35879);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-alert.mjs
var circle_alert = __webpack_require__(23562);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/activity.mjs
var activity = __webpack_require__(65916);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(80828);
;// CONCATENATED MODULE: ./src/features/console/components/ConsoleOverview.tsx







function ConsoleOverview() {
    const { data: stats, isLoading: statsLoading } = (0,queries/* .useStats */.J3)();
    const { data: pods, isLoading: podsLoading } = (0,queries/* .usePods */.a2)();
    const { data: events } = (0,queries/* .useEvents */.LJ)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: "text-2xl font-semibold tracking-tight",
                        children: "Cluster Overview"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "mt-1 text-sm text-muted-foreground",
                        children: "Monitor cluster health and resource usage"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* .Card */.Zp, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardHeader */.aR, {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardTitle */.ZB, {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "Projects"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardContent */.Wu, {
                                children: statsLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                                    className: "h-8 w-12"
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-3xl font-bold",
                                    children: stats?.totalProjects
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* .Card */.Zp, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardHeader */.aR, {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardTitle */.ZB, {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "Running Pods"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardContent */.Wu, {
                                children: statsLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                                    className: "h-8 w-12"
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    className: "text-3xl font-bold text-emerald-500",
                                    children: [
                                        stats?.runningPods,
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                "/",
                                                stats?.totalPods
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* .Card */.Zp, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardHeader */.aR, {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardTitle */.ZB, {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "Active Builds"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardContent */.Wu, {
                                children: statsLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                                    className: "h-8 w-12"
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-3xl font-bold text-blue-500",
                                    children: stats?.activeBuilds
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* .Card */.Zp, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardHeader */.aR, {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardTitle */.ZB, {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "Failed Deployments"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardContent */.Wu, {
                                children: statsLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                                    className: "h-8 w-12"
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: (0,utils.cn)("text-3xl font-bold", (stats?.failedDeployments ?? 0) > 0 ? "text-red-500" : "text-emerald-500"),
                                    children: stats?.failedDeployments
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid gap-4 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* .Card */.Zp, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardHeader */.aR, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardTitle */.ZB, {
                                    className: "text-sm font-medium",
                                    children: "Resource Usage"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardContent */.Wu, {
                                className: "space-y-4",
                                children: statsLoading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                                            className: "h-4 w-full"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                                            className: "h-4 w-full"
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mb-1 flex justify-between text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-muted-foreground",
                                                            children: "CPU"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                            className: "font-mono",
                                                            children: [
                                                                stats?.cpuUsage,
                                                                "%"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "h-2 overflow-hidden rounded-full bg-muted",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: (0,utils.cn)("h-full rounded-full transition-all", (stats?.cpuUsage ?? 0) > 80 ? "bg-red-500" : "bg-blue-500"),
                                                        style: {
                                                            width: `${stats?.cpuUsage ?? 0}%`
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mb-1 flex justify-between text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Memory"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                            className: "font-mono",
                                                            children: [
                                                                stats?.memoryUsage,
                                                                "%"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "h-2 overflow-hidden rounded-full bg-muted",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: (0,utils.cn)("h-full rounded-full transition-all", (stats?.memoryUsage ?? 0) > 80 ? "bg-red-500" : "bg-blue-500"),
                                                        style: {
                                                            width: `${stats?.memoryUsage ?? 0}%`
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* .Card */.Zp, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardHeader */.aR, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardTitle */.ZB, {
                                    className: "text-sm font-medium",
                                    children: "Recent Events"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardContent */.Wu, {
                                className: "max-h-64 space-y-2 overflow-y-auto",
                                children: !events ? /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                                    className: "h-10 w-full"
                                }) : events.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "py-8 text-center text-sm text-muted-foreground",
                                    children: "No recent events"
                                }) : events.map((e)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-start gap-2 rounded-md border p-2 text-xs",
                                        children: [
                                            e.type === "Warning" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_alert/* ["default"] */.A, {
                                                className: "mt-0.5 size-3.5 shrink-0 text-red-500"
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(activity/* ["default"] */.A, {
                                                className: "mt-0.5 size-3.5 shrink-0 text-blue-500"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        className: "font-medium text-foreground",
                                                        children: e.reason
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        className: "text-muted-foreground",
                                                        children: e.message
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        className: "mt-0.5 text-muted-foreground/60",
                                                        children: [
                                                            e.involvedObject.kind,
                                                            " ",
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "font-mono",
                                                                children: e.involvedObject.name
                                                            }),
                                                            " / ",
                                                            e.metadata.namespace
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, e.metadata.uid))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* .Card */.Zp, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardHeader */.aR, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardTitle */.ZB, {
                            className: "text-sm font-medium",
                            children: "Pods by Status"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* .CardContent */.Wu, {
                        children: podsLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* .Skeleton */.E, {
                            className: "h-10 w-full"
                        }) : !pods || pods.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "py-8 text-center text-sm text-muted-foreground",
                            children: "No pods found"
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex flex-wrap gap-2",
                            children: Object.entries(pods.reduce((acc, p)=>{
                                acc[p.status.phase] = (acc[p.status.phase] ?? 0) + 1;
                                return acc;
                            }, {})).map(([status, count])=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ResourceStatusBadge/* .ResourceStatusBadge */.o, {
                                            status: status
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "font-mono text-xs text-muted-foreground",
                                            children: count
                                        })
                                    ]
                                }, status))
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/routes/workers.overview.tsx?tsr-split=component


function WorkersOverviewRoute() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ConsoleOverview, {});
}



},

};
