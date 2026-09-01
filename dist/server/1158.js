export const __rspack_esm_id = 1158;
export const __rspack_esm_ids = [1158];
export const __webpack_modules__ = {
48869(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _lib_utils__rspack_import_2 = __webpack_require__(80828);
/* import */ var _BuildStatusBadge__rspack_import_1 = __webpack_require__(42583);



const stageColorMap = {
    success: "bg-emerald-500",
    failed: "bg-red-500",
    running: "bg-blue-500",
    queued: "bg-muted-foreground/30",
    unstable: "bg-amber-500",
    aborted: "bg-gray-400",
    cancelled: "bg-orange-400",
    draft: "bg-muted-foreground/30",
    active: "bg-blue-500",
    disabled: "bg-muted-foreground/30",
    archived: "bg-gray-400"
};
function formatStageDuration(ms) {
    if (ms === null) return "—";
    if (ms < 1000) return `${ms}ms`;
    const s = Math.floor(ms / 1000);
    if (s < 60) return `${s}s`;
    return `${Math.floor(s / 60)}m ${s % 60}s`;
}
function PipelineStageView({ stages }) {
    if (stages.length === 0) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: "flex items-center justify-center py-12 text-sm text-muted-foreground",
            children: "No stages for this build."
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: "flex items-start gap-0 min-w-max px-1 py-4",
            children: stages.map((stage, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "flex flex-col items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "flex items-center",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: (0,_lib_utils__rspack_import_2.cn)("flex h-8 w-32 items-center justify-center rounded-md text-xs font-medium text-white", stageColorMap[stage.status]),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "truncate px-2",
                                            children: stage.name
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_BuildStatusBadge__rspack_import_1/* .BuildStatusDot */._c, {
                                            status: stage.status
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "font-mono text-[11px] text-muted-foreground",
                                            children: formatStageDuration(stage.duration)
                                        })
                                    ]
                                })
                            ]
                        }),
                        i < stages.length - 1 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: (0,_lib_utils__rspack_import_2.cn)("mx-0.5 mt-4 h-0.5 w-6", stageColorMap[stage.status])
                        })
                    ]
                }, stage.name))
        })
    });
}

__webpack_require__.d(__webpack_exports__, {
  G: () => (PipelineStageView)
});


},

};
