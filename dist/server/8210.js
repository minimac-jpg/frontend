export const __rspack_esm_id = 8210;
export const __rspack_esm_ids = [8210];
export const __webpack_modules__ = {
28425(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);

function EmptyState({ title, description, action }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: "empty-state",
        role: "status",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                className: "empty-state-title",
                children: title
            }),
            description && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                className: "empty-state-description",
                children: description
            }),
            action && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "empty-state-action",
                children: action
            })
        ]
    });
}

__webpack_require__.d(__webpack_exports__, {
  p: () => (EmptyState)
});


},

};
