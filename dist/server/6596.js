export const __rspack_esm_id = 6596;
export const __rspack_esm_ids = [6596];
export const __webpack_modules__ = {
21999(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _lib_utils__rspack_import_1 = __webpack_require__(80828);


function Table({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("table", {
            "data-slot": "table",
            className: (0,_lib_utils__rspack_import_1.cn)("w-full caption-bottom text-sm", className),
            ...props
        })
    });
}
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("thead", {
        "data-slot": "table-header",
        className: (0,_lib_utils__rspack_import_1.cn)("[&_tr]:border-b", className),
        ...props
    });
}
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("tbody", {
        "data-slot": "table-body",
        className: (0,_lib_utils__rspack_import_1.cn)("[&_tr:last-child]:border-0", className),
        ...props
    });
}
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ _jsx("tfoot", {
        "data-slot": "table-footer",
        className: cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
        ...props
    });
}
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("tr", {
        "data-slot": "table-row",
        className: (0,_lib_utils__rspack_import_1.cn)("border-b transition-colors hover:bg-gray-200/90 data-[state=selected]:bg-muted", className),
        ...props
    });
}
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
        "data-slot": "table-head",
        className: (0,_lib_utils__rspack_import_1.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    });
}
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
        "data-slot": "table-cell",
        className: (0,_lib_utils__rspack_import_1.cn)("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    });
}
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ _jsx("caption", {
        "data-slot": "table-caption",
        className: cn("mt-4 text-sm text-muted-foreground", className),
        ...props
    });
}


__webpack_require__.d(__webpack_exports__, {
  A0: () => (TableHeader),
  BF: () => (TableBody),
  Hj: () => (TableRow),
  XI: () => (Table),
  nA: () => (TableCell),
  nd: () => (TableHead)
});


},

};
