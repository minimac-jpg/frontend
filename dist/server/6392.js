export const __rspack_esm_id = 6392;
export const __rspack_esm_ids = [6392];
export const __webpack_modules__ = {
4763(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);

const variantClass = {
    default: "badge-default",
    success: "badge-success",
    warning: "badge-warning",
    error: "badge-error",
    info: "badge-info"
};
function Badge({ variant = "default", children }) {
    const classes = [
        "badge",
        variantClass[variant]
    ].join(" ");
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
        className: classes,
        children: children
    });
}

__webpack_require__.d(__webpack_exports__, {
  E: () => (Badge)
});


},

};
