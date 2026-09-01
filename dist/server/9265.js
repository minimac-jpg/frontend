export const __rspack_esm_id = 9265;
export const __rspack_esm_ids = [9265];
export const __webpack_modules__ = {
88136(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _tanstack_react_router__rspack_import_3 = __webpack_require__(22679);
/* import */ var _features_console_api_queries__rspack_import_1 = __webpack_require__(1096);
/* import */ var _features_console_components_ResourceDetailLayout__rspack_import_2 = __webpack_require__(57547);




function WorkersProjectDetailRoute() {
    const { projectName } = (0,_tanstack_react_router__rspack_import_3/* .useParams */.g)({
        from: "/workers/projects/$projectName"
    });
    const { data, isLoading } = (0,_features_console_api_queries__rspack_import_1/* .useProject */.By)(projectName);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_features_console_components_ResourceDetailLayout__rspack_import_2/* .ResourceDetailLayout */.A, {
        title: "Project",
        resource: data,
        isLoading: isLoading,
        status: data?.status.phase,
        backUrl: "/workers/projects"
    });
}


__webpack_require__.d(__webpack_exports__, {
  component: () => (WorkersProjectDetailRoute)
});


},

};
