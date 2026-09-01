export const __rspack_esm_id = 5872;
export const __rspack_esm_ids = [5872];
export const __webpack_modules__ = {
63571(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);

function PageShell({ title, subtitle, actions, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: "page-shell",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "page-shell-header",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "page-shell-title-group",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                                className: "page-shell-title",
                                children: title
                            }),
                            subtitle && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "page-shell-subtitle",
                                children: subtitle
                            })
                        ]
                    }),
                    actions && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "page-shell-actions",
                        children: actions
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "page-shell-body",
                children: children
            })
        ]
    });
}

__webpack_require__.d(__webpack_exports__, {
  q: () => (PageShell)
});


},

};
