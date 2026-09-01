export const __rspack_esm_id = 6486;
export const __rspack_esm_ids = [6486];
export const __webpack_modules__ = {
83461(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _lib_utils__rspack_import_1 = __webpack_require__(80828);


function Card({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        "data-slot": "card",
        className: (0,_lib_utils__rspack_import_1.cn)("rounded-xl border bg-card text-card-foreground", className),
        ...props
    });
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        "data-slot": "card-header",
        className: (0,_lib_utils__rspack_import_1.cn)("flex flex-col gap-1.5 px-6 pt-6", className),
        ...props
    });
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
        "data-slot": "card-title",
        className: (0,_lib_utils__rspack_import_1.cn)("font-semibold leading-none tracking-tight", className),
        ...props
    });
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ _jsx("p", {
        "data-slot": "card-description",
        className: cn("text-sm text-muted-foreground", className),
        ...props
    });
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        "data-slot": "card-content",
        className: (0,_lib_utils__rspack_import_1.cn)("px-6 pb-6 pt-4", className),
        ...props
    });
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "card-footer",
        className: cn("flex items-center border-t px-6 py-4", className),
        ...props
    });
}


__webpack_require__.d(__webpack_exports__, {
  Wu: () => (CardContent),
  ZB: () => (CardTitle),
  Zp: () => (Card),
  aR: () => (CardHeader)
});


},

};
