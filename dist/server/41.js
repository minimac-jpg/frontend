export const __rspack_esm_id = 41;
export const __rspack_esm_ids = [41];
export const __webpack_modules__ = {
41408(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _tanstack_react_router__rspack_import_6 = __webpack_require__(22679);
/* import */ var _features_console_api_queries__rspack_import_1 = __webpack_require__(1096);
/* import */ var _features_console_components_ResourceDetailLayout__rspack_import_2 = __webpack_require__(57547);
/* import */ var _features_console_components_YamlViewer__rspack_import_3 = __webpack_require__(23189);
/* import */ var _components_ui_card__rspack_import_4 = __webpack_require__(83461);
/* import */ var _components_ui_button__rspack_import_5 = __webpack_require__(39839);
/* import */ var lucide_react__rspack_import_7 = __webpack_require__(20096);
/* import */ var lucide_react__rspack_import_8 = __webpack_require__(649);
/* import */ var lucide_react__rspack_import_9 = __webpack_require__(44207);








function WorkersDeploymentDetailRoute() {
    const { deploymentName } = (0,_tanstack_react_router__rspack_import_6/* .useParams */.g)({
        from: "/workers/deployments/$deploymentName"
    });
    const { data, isLoading } = (0,_features_console_api_queries__rspack_import_1/* .useDeployment */.hF)(deploymentName);
    const scaleDeployment = (0,_features_console_api_queries__rspack_import_1/* .useScaleDeployment */.Lp)();
    const specReplicas = data?.spec.replicas ?? 0;
    const readyReplicas = data?.status.readyReplicas ?? 0;
    const availableReplicas = data?.status.availableReplicas ?? 0;
    const handleScale = (delta)=>{
        const newReplicas = Math.max(0, specReplicas + delta);
        scaleDeployment.mutate({
            name: deploymentName,
            replicas: newReplicas
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_features_console_components_ResourceDetailLayout__rspack_import_2/* .ResourceDetailLayout */.A, {
        title: "Deployment",
        resource: data,
        isLoading: isLoading,
        status: data?.status.phase,
        backUrl: "/workers/deployments",
        actions: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_button__rspack_import_5/* .Button */.$, {
            variant: "outline",
            size: "sm",
            disabled: true,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_7/* ["default"] */.A, {
                    className: "mr-1.5 size-3.5"
                }),
                "Rollback"
            ]
        }),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_card__rspack_import_4/* .Card */.Zp, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardHeader */.aR, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardTitle */.ZB, {
                            className: "text-sm font-medium",
                            children: "Scaling"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_card__rspack_import_4/* .CardContent */.Wu, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_button__rspack_import_5/* .Button */.$, {
                                    variant: "outline",
                                    size: "icon",
                                    onClick: ()=>handleScale(-1),
                                    disabled: specReplicas <= 0 || scaleDeployment.isPending,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_8/* ["default"] */.A, {
                                        className: "size-4"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            className: "text-2xl font-bold",
                                            children: specReplicas
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Replicas"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_button__rspack_import_5/* .Button */.$, {
                                    variant: "outline",
                                    size: "icon",
                                    onClick: ()=>handleScale(1),
                                    disabled: scaleDeployment.isPending,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_9/* ["default"] */.A, {
                                        className: "size-4"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "ml-4 flex gap-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    className: "text-muted-foreground",
                                                    children: "Ready: "
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    className: "font-medium text-emerald-500",
                                                    children: readyReplicas
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    className: "text-muted-foreground",
                                                    children: "Available: "
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    className: "font-medium text-emerald-500",
                                                    children: availableReplicas
                                                })
                                            ]
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
                            children: "Deployment YAML"
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
  component: () => (WorkersDeploymentDetailRoute)
});


},

};
