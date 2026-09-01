export const __rspack_esm_id = 6353;
export const __rspack_esm_ids = [6353];
export const __webpack_modules__ = {
22712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _tanstack_react_router__rspack_import_5 = __webpack_require__(22679);
/* import */ var _features_console_api_queries__rspack_import_1 = __webpack_require__(1096);
/* import */ var _features_console_components_ResourceDetailLayout__rspack_import_2 = __webpack_require__(57547);
/* import */ var _features_console_components_YamlViewer__rspack_import_3 = __webpack_require__(23189);
/* import */ var _components_ui_card__rspack_import_4 = __webpack_require__(83461);






function WorkersRouteDetailRoute() {
    const { routeName } = (0,_tanstack_react_router__rspack_import_5/* .useParams */.g)({
        from: "/workers/routes/$routeName"
    });
    const { data, isLoading } = (0,_features_console_api_queries__rspack_import_1/* .useRoute */.lq)(routeName);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_features_console_components_ResourceDetailLayout__rspack_import_2/* .ResourceDetailLayout */.A, {
        title: "Route",
        resource: data,
        isLoading: isLoading,
        status: data?.status.phase,
        backUrl: "/workers/routes",
        children: [
            data && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_card__rspack_import_4/* .Card */.Zp, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardHeader */.aR, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardTitle */.ZB, {
                            className: "text-sm font-medium",
                            children: "Route Details"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardContent */.Wu, {
                        className: "text-sm",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("dl", {
                            className: "grid grid-cols-2 gap-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dt", {
                                    className: "text-muted-foreground",
                                    children: "Host"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dd", {
                                    className: "font-mono text-xs",
                                    children: data.spec.host
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dt", {
                                    className: "text-muted-foreground",
                                    children: "Path"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dd", {
                                    children: data.spec.path ?? "/"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dt", {
                                    className: "text-muted-foreground",
                                    children: "Target Service"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dd", {
                                    children: data.spec.to.name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dt", {
                                    className: "text-muted-foreground",
                                    children: "Target Port"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dd", {
                                    children: data.spec.port?.targetPort ?? "-"
                                }),
                                data.spec.tls && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dt", {
                                            className: "text-muted-foreground",
                                            children: "TLS Termination"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("dd", {
                                            children: data.spec.tls.termination
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
                            children: "Route YAML"
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
  component: () => (WorkersRouteDetailRoute)
});


},

};
