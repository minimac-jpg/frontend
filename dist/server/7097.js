export const __rspack_esm_id = 7097;
export const __rspack_esm_ids = [7097];
export const __webpack_modules__ = {
92992(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _tanstack_react_router__rspack_import_7 = __webpack_require__(22679);
/* import */ var _tanstack_react_router__rspack_import_8 = __webpack_require__(45178);
/* import */ var _features_console_api_queries__rspack_import_1 = __webpack_require__(1096);
/* import */ var _features_console_components_ResourceDetailLayout__rspack_import_2 = __webpack_require__(57547);
/* import */ var _features_console_components_YamlViewer__rspack_import_3 = __webpack_require__(23189);
/* import */ var _components_ui_card__rspack_import_4 = __webpack_require__(83461);
/* import */ var _components_ui_button__rspack_import_5 = __webpack_require__(39839);
/* import */ var lucide_react__rspack_import_9 = __webpack_require__(20096);
/* import */ var lucide_react__rspack_import_10 = __webpack_require__(66838);
/* import */ var _features_console_components_ResourceStatusBadge__rspack_import_6 = __webpack_require__(35879);









function getContainerState(state) {
    const keys = Object.keys(state);
    return (keys.length > 0 ? keys[0] : "Unknown") ?? "Unknown";
}
function WorkersPodDetailRoute() {
    const { podName } = (0,_tanstack_react_router__rspack_import_7/* .useParams */.g)({
        from: "/workers/pods/$podName"
    });
    const { data, isLoading } = (0,_features_console_api_queries__rspack_import_1/* .usePod */.zk)(podName);
    const deletePod = (0,_features_console_api_queries__rspack_import_1/* .useDeletePod */.og)();
    const navigate = (0,_tanstack_react_router__rspack_import_8/* .useNavigate */.Z)();
    const containerStatuses = data?.status.containerStatuses ?? [];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_features_console_components_ResourceDetailLayout__rspack_import_2/* .ResourceDetailLayout */.A, {
        title: "Pod",
        resource: data,
        isLoading: isLoading,
        status: data?.status.phase,
        backUrl: "/workers/pods",
        actions: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_button__rspack_import_5/* .Button */.$, {
                    variant: "outline",
                    size: "sm",
                    disabled: true,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_9/* ["default"] */.A, {
                            className: "mr-1.5 size-3.5"
                        }),
                        "Restart"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_button__rspack_import_5/* .Button */.$, {
                    variant: "destructive",
                    size: "sm",
                    onClick: ()=>{
                        deletePod.mutate(podName, {
                            onSuccess: ()=>navigate({
                                    to: "/workers/pods"
                                })
                        });
                    },
                    disabled: deletePod.isPending,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_10/* ["default"] */.A, {
                            className: "mr-1.5 size-3.5"
                        }),
                        "Delete"
                    ]
                })
            ]
        }),
        children: [
            containerStatuses.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_card__rspack_import_4/* .Card */.Zp, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardHeader */.aR, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardTitle */.ZB, {
                            className: "text-sm font-medium",
                            children: "Containers"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardContent */.Wu, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "space-y-2",
                            children: containerStatuses.map((cs)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "flex items-center justify-between rounded-md border px-3 py-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "font-medium",
                                            children: cs.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_features_console_components_ResourceStatusBadge__rspack_import_6/* .ResourceStatusBadge */.o, {
                                                    status: getContainerState(cs.state)
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    className: "font-mono text-xs text-muted-foreground",
                                                    children: cs.image
                                                })
                                            ]
                                        })
                                    ]
                                }, cs.name))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_card__rspack_import_4/* .Card */.Zp, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardHeader */.aR, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardTitle */.ZB, {
                            className: "text-sm font-medium",
                            children: "Pod YAML"
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
  component: () => (WorkersPodDetailRoute)
});


},

};
