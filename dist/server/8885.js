export const __rspack_esm_id = 8885;
export const __rspack_esm_ids = [8885];
export const __webpack_modules__ = {
46484(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _tanstack_react_router__rspack_import_5 = __webpack_require__(22679);
/* import */ var _features_console_api_queries__rspack_import_1 = __webpack_require__(1096);
/* import */ var _features_console_components_ResourceDetailLayout__rspack_import_2 = __webpack_require__(57547);
/* import */ var _features_console_components_YamlViewer__rspack_import_3 = __webpack_require__(23189);
/* import */ var _components_ui_card__rspack_import_4 = __webpack_require__(83461);






function WorkersBuildDetailRoute() {
    const { buildName } = (0,_tanstack_react_router__rspack_import_5/* .useParams */.g)({
        from: "/workers/builds/$buildName"
    });
    const { data, isLoading } = (0,_features_console_api_queries__rspack_import_1/* .useBuild */.eK)(buildName);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_features_console_components_ResourceDetailLayout__rspack_import_2/* .ResourceDetailLayout */.A, {
        title: "Build",
        resource: data,
        isLoading: isLoading,
        status: data?.status.phase,
        backUrl: "/workers/builds",
        children: [
            data && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_card__rspack_import_4/* .Card */.Zp, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardHeader */.aR, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardTitle */.ZB, {
                            className: "text-sm font-medium",
                            children: "Build Details"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardContent */.Wu, {
                        className: "text-sm",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("dl", {
                            className: "grid grid-cols-2 gap-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dt", {
                                    className: "text-muted-foreground",
                                    children: "Strategy"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dd", {
                                    children: data.spec.strategy.type
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dt", {
                                    className: "text-muted-foreground",
                                    children: "Source"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("dd", {
                                    children: [
                                        data.spec.source.type,
                                        data.spec.source.git ? ` (${data.spec.source.git.uri})` : ""
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dt", {
                                    className: "text-muted-foreground",
                                    children: "Output Image"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dd", {
                                    className: "font-mono text-xs",
                                    children: data.spec.output.to.name
                                }),
                                data.status.completionTimestamp && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dt", {
                                            className: "text-muted-foreground",
                                            children: "Completed"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dd", {
                                            children: new Date(data.status.completionTimestamp).toLocaleString()
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
                            children: "Build YAML"
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
  component: () => (WorkersBuildDetailRoute)
});


},

};
