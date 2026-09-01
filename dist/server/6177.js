export const __rspack_esm_id = 6177;
export const __rspack_esm_ids = [6177];
export const __webpack_modules__ = {
37208(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);

function Button({ variant = "primary", size = "md", children, className = "", ...props }) {
    const classes = [
        "btn",
        `btn-${variant}`,
        `btn-${size}`,
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
        className: classes,
        type: "button",
        ...props,
        children: children
    });
}

__webpack_require__.d(__webpack_exports__, {
  $: () => (Button)
});


},

};
