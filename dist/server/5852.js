export const __rspack_esm_id = 5852;
export const __rspack_esm_ids = [5852];
export const __webpack_modules__ = {
86199(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ ArtifactSettingsRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.mjs
var arrow_left = __webpack_require__(2832);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/link.js + 1 modules
var esm_link = __webpack_require__(38639);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
;// CONCATENATED MODULE: ./src/components/common/card.tsx

function Card({ title, children, className = "" }) {
    const classes = [
        "card",
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes,
        children: [
            title && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "card-header",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                    className: "card-title",
                    children: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "card-body",
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/ui/badge.tsx
var badge = __webpack_require__(79318);
// EXTERNAL MODULE: ./src/components/ui/separator.tsx
var separator = __webpack_require__(73594);
;// CONCATENATED MODULE: ./src/features/artifacts/components/ArtifactSettingsPanel.tsx




function ArtifactSettingsPanel() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
                title: "Repository Connections",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between rounded-md border px-3 py-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-sm font-medium text-foreground",
                                            children: "Maven Central"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-xs text-muted-foreground font-mono",
                                            children: "https://repo1.maven.org/maven2/"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                                    variant: "outline",
                                    className: "text-xs",
                                    children: "Proxy"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between rounded-md border px-3 py-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-sm font-medium text-foreground",
                                            children: "npm Registry"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-xs text-muted-foreground font-mono",
                                            children: "https://registry.npmjs.org/"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                                    variant: "outline",
                                    className: "text-xs",
                                    children: "Proxy"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between rounded-md border px-3 py-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-sm font-medium text-foreground",
                                            children: "Internal Releases"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-xs text-muted-foreground font-mono",
                                            children: "Hosted"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                                    variant: "secondary",
                                    className: "text-xs",
                                    children: "Hosted"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between rounded-md border px-3 py-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-sm font-medium text-foreground",
                                            children: "Docker Registry"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-xs text-muted-foreground font-mono",
                                            children: "https://registry-1.docker.io/"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                                    variant: "outline",
                                    className: "text-xs",
                                    children: "Proxy"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
                title: "Cleanup Policies",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between rounded-md border px-3 py-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-sm text-foreground",
                                    children: "Remove snapshots older than 30 days"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                                    variant: "secondary",
                                    className: "text-xs",
                                    children: "Active"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between rounded-md border px-3 py-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-sm text-foreground",
                                    children: "Remove unreferenced Docker images"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                                    variant: "secondary",
                                    className: "text-xs",
                                    children: "Active"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(separator/* .Separator */.w, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "text-xs text-muted-foreground",
                children: "Artifact settings are read-only in this mock. These will be configurable when a real backend is connected."
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/routes/artifacts.settings.tsx?tsr-split=component





function ArtifactSettingsRoute() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_link/* .Link */.N_, {
                to: "/artifacts",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                    variant: "outline",
                    size: "sm",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_left/* ["default"] */.A, {
                            className: "size-4"
                        }),
                        "Back"
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                            className: "text-2xl font-semibold tracking-tight",
                            children: "Artifact Settings"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "mt-1 text-sm text-muted-foreground",
                            children: "Configure repository connections and cleanup policies."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ArtifactSettingsPanel, {})
        ]
    });
}



},

};
