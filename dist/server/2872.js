export const __rspack_esm_id = 2872;
export const __rspack_esm_ids = [2872];
export const __webpack_modules__ = {
25659(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _tanstack_react_router__rspack_import_5 = __webpack_require__(22679);
/* import */ var _features_console_api_queries__rspack_import_1 = __webpack_require__(1096);
/* import */ var _features_console_components_ResourceDetailLayout__rspack_import_2 = __webpack_require__(57547);
/* import */ var _features_console_components_YamlViewer__rspack_import_3 = __webpack_require__(23189);
/* import */ var _components_ui_card__rspack_import_4 = __webpack_require__(83461);






function WorkersPVCDetailRoute() {
    const { claimName } = (0,_tanstack_react_router__rspack_import_5/* .useParams */.g)({
        from: "/workers/persistentvolumeclaims/$claimName"
    });
    const { data, isLoading } = (0,_features_console_api_queries__rspack_import_1/* .usePVC */.t7)(claimName);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_features_console_components_ResourceDetailLayout__rspack_import_2/* .ResourceDetailLayout */.A, {
        title: "Persistent Volume Claim",
        resource: data,
        isLoading: isLoading,
        status: data?.status.phase,
        backUrl: "/workers/persistentvolumeclaims",
        children: [
            data && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_card__rspack_import_4/* .Card */.Zp, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardHeader */.aR, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardTitle */.ZB, {
                            className: "text-sm font-medium",
                            children: "PVC Details"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardContent */.Wu, {
                        className: "text-sm",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("dl", {
                            className: "grid grid-cols-2 gap-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dt", {
                                    className: "text-muted-foreground",
                                    children: "Access Modes"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dd", {
                                    children: (data.spec.accessModes ?? []).join(", ")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dt", {
                                    className: "text-muted-foreground",
                                    children: "Requested Storage"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dd", {
                                    className: "font-mono text-xs",
                                    children: data.spec.resources.requests.storage
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dt", {
                                    className: "text-muted-foreground",
                                    children: "Storage Class"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dd", {
                                    children: data.spec.storageClassName ?? "-"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dt", {
                                    className: "text-muted-foreground",
                                    children: "Volume Mode"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dd", {
                                    children: data.spec.volumeMode ?? "-"
                                }),
                                data.status.capacity?.storage && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dt", {
                                            className: "text-muted-foreground",
                                            children: "Actual Capacity"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dd", {
                                            className: "font-mono text-xs",
                                            children: data.status.capacity.storage
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_card__rspack_import_4/* .Card */.Zp, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardHeader */.aR, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardTitle */.ZB, {
                            className: "text-sm font-medium",
                            children: "PVC YAML"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardContent */.Wu, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_features_console_components_YamlViewer__rspack_import_3/* .YamlViewer */.G, {
                            obj: data
                        })
                    })
                ]
            })
        ]
    });
}


__webpack_require__.d(__webpack_exports__, {
  component: () => (WorkersPVCDetailRoute)
});


},

};
