export const __rspack_esm_id = 3304;
export const __rspack_esm_ids = [3304];
export const __webpack_modules__ = {
77323(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _features_console_api_queries__rspack_import_1 = __webpack_require__(1096);
/* import */ var _features_console_components_ResourceListTable__rspack_import_2 = __webpack_require__(58032);
/* import */ var _features_console_components_ResourceStatusBadge__rspack_import_3 = __webpack_require__(35879);




const columns = [
    {
        accessorKey: "metadata.name",
        header: "Name",
        cell: (info)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                className: "font-medium",
                children: info.getValue()
            })
    },
    {
        accessorKey: "metadata.namespace",
        header: "Namespace"
    },
    {
        accessorKey: "status.phase",
        header: "Status",
        cell: (info)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_features_console_components_ResourceStatusBadge__rspack_import_3/* .ResourceStatusBadge */.o, {
                status: info.getValue()
            })
    },
    {
        id: "strategy",
        header: "Strategy",
        accessorFn: (row)=>row.spec.strategy.type
    },
    {
        id: "source",
        header: "Source",
        accessorFn: (row)=>row.spec.source.type
    }
];
function WorkersBuildsRoute() {
    const { data, isLoading } = (0,_features_console_api_queries__rspack_import_1/* .useBuilds */.FW)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: "flex flex-col gap-4 p-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                        className: "text-2xl font-semibold tracking-tight",
                        children: "Builds"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "mt-1 text-sm text-muted-foreground",
                        children: "Monitor and manage builds"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_features_console_components_ResourceListTable__rspack_import_2/* .ResourceListTable */.r, {
                data: data,
                isLoading: isLoading,
                columns: columns,
                getDetailUrl: (row)=>`/workers/builds/${row.metadata.name}`
            })
        ]
    });
}


__webpack_require__.d(__webpack_exports__, {
  component: () => (WorkersBuildsRoute)
});


},

};
