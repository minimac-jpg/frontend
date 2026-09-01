export const __rspack_esm_id = 585;
export const __rspack_esm_ids = [585];
export const __webpack_modules__ = {
46128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);

function ErrorState({ title = "Error", message, action }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: "error-state",
        role: "alert",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                className: "error-state-title",
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                className: "error-state-message",
                children: message
            }),
            action && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "error-state-action",
                children: action
            })
        ]
    });
}

__webpack_require__.d(__webpack_exports__, {
  W: () => (ErrorState)
});


},

};
