export const __rspack_esm_id = 9267;
export const __rspack_esm_ids = [9267];
export const __webpack_modules__ = {
74430(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);

function LoadingState({ message = "Loading..." }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: "loading-state",
        role: "status",
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "loading-spinner",
                "aria-hidden": "true"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                className: "loading-message",
                children: message
            })
        ]
    });
}

__webpack_require__.d(__webpack_exports__, {
  G: () => (LoadingState)
});


},

};
