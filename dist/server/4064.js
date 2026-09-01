export const __rspack_esm_id = 4064;
export const __rspack_esm_ids = [4064];
export const __webpack_modules__ = {
1692(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _components_ui_badge__rspack_import_1 = __webpack_require__(79318);


function PageTitle({ title, subtitle, greenBadge, badge, hasSidebar }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "flex items-center gap-2.5 mb-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                        className: `${hasSidebar ? "text-xl" : "text-2xl"}  font-semibold tracking-tight`,
                        children: title
                    }),
                    greenBadge && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_badge__rspack_import_1/* .Badge */.E, {
                        variant: "outline",
                        className: "border-green-200 bg-green-50 text-green-700 text-[11px] font-bold uppercase tracking-wide dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
                        children: greenBadge
                    }),
                    badge && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_badge__rspack_import_1/* .Badge */.E, {
                        variant: "outline",
                        className: "border-border bg-secondary text-muted-foreground text-[11px] font-bold uppercase tracking-wide",
                        children: badge
                    })
                ]
            }),
            subtitle && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                className: "mt-1 text-sm text-muted-foreground",
                children: subtitle
            })
        ]
    });
}

__webpack_require__.d(__webpack_exports__, {
  s: () => (PageTitle)
});


},
20732(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var radix_ui__rspack_import_1 = __webpack_require__(98691);
/* import */ var _lib_utils__rspack_import_2 = __webpack_require__(80828);



function Popover({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Root */.bL, {
        "data-slot": "popover",
        ...props
    });
}
function PopoverTrigger({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Trigger */.l9, {
        "data-slot": "popover-trigger",
        ...props
    });
}
function PopoverContent({ className, align = "center", sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Portal */.ZL, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Content */.UC, {
            "data-slot": "popover-content",
            align: align,
            sideOffset: sideOffset,
            className: (0,_lib_utils__rspack_import_2.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
            ...props
        })
    });
}


__webpack_require__.d(__webpack_exports__, {
  AM: () => (Popover),
  Wv: () => (PopoverTrigger),
  hl: () => (PopoverContent)
});


},

};
