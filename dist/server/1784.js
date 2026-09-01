export const __rspack_esm_id = 1784;
export const __rspack_esm_ids = [1784];
export const __webpack_modules__ = {
57547(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _ResourceStatusBadge__rspack_import_1 = __webpack_require__(35879);
/* import */ var _components_ui_card__rspack_import_2 = __webpack_require__(83461);
/* import */ var _components_ui_skeleton__rspack_import_3 = __webpack_require__(50186);
/* import */ var _components_ui_button__rspack_import_4 = __webpack_require__(39839);
/* import */ var lucide_react__rspack_import_6 = __webpack_require__(2832);
/* import */ var lucide_react__rspack_import_7 = __webpack_require__(72761);
/* import */ var lucide_react__rspack_import_8 = __webpack_require__(70688);
/* import */ var lucide_react__rspack_import_9 = __webpack_require__(70455);
/* import */ var _tanstack_react_router__rspack_import_5 = __webpack_require__(45178);







function ResourceDetailLayout({ title, resource, isLoading, status, backUrl, actions, children }) {
    const navigate = (0,_tanstack_react_router__rspack_import_5/* .useNavigate */.Z)();
    if (isLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "flex flex-col gap-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_skeleton__rspack_import_3/* .Skeleton */.E, {
                    className: "h-8 w-48"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_skeleton__rspack_import_3/* .Skeleton */.E, {
                    className: "h-32 w-full"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_skeleton__rspack_import_3/* .Skeleton */.E, {
                    className: "h-64 w-full"
                })
            ]
        });
    }
    if (!resource) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
            className: "py-12 text-center text-sm text-muted-foreground",
            children: "Resource not found"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_button__rspack_import_4/* .Button */.$, {
                                variant: "ghost",
                                size: "icon",
                                onClick: ()=>navigate({
                                        to: backUrl
                                    }),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_6/* ["default"] */.A, {
                                    className: "size-4"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                                                className: "text-2xl font-semibold tracking-tight",
                                                children: title
                                            }),
                                            status && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_ResourceStatusBadge__rspack_import_1/* .ResourceStatusBadge */.o, {
                                                status: status
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: "mt-0.5 font-mono text-xs text-muted-foreground",
                                        children: resource.metadata.name
                                    })
                                ]
                            })
                        ]
                    }),
                    actions && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "flex items-center gap-2",
                        children: actions
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "grid gap-4 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "lg:col-span-2 space-y-4",
                        children: children
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_card__rspack_import_2/* .Card */.Zp, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_2/* .CardHeader */.aR, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_2/* .CardTitle */.ZB, {
                                        className: "text-sm font-medium",
                                        children: "Metadata"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_card__rspack_import_2/* .CardContent */.Wu, {
                                    className: "space-y-3 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_7/* ["default"] */.A, {
                                                    className: "mt-0.5 size-4 shrink-0 text-muted-foreground"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Name"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                            className: "font-mono text-xs",
                                                            children: resource.metadata.name
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_8/* ["default"] */.A, {
                                                    className: "mt-0.5 size-4 shrink-0 text-muted-foreground"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Namespace"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                            className: "font-mono text-xs",
                                                            children: resource.metadata.namespace
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_9/* ["default"] */.A, {
                                                    className: "mt-0.5 size-4 shrink-0 text-muted-foreground"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Created"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                            className: "font-mono text-xs",
                                                            children: resource.metadata.creationTimestamp ? new Date(resource.metadata.creationTimestamp).toLocaleString() : "Unknown"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_7/* ["default"] */.A, {
                                                    className: "mt-0.5 size-4 shrink-0 text-muted-foreground"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: "UID"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                            className: "font-mono text-xs break-all",
                                                            children: resource.metadata.uid
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_require__.d(__webpack_exports__, {
  A: () => (ResourceDetailLayout)
});


},

};
