export const __rspack_esm_id = 8244;
export const __rspack_esm_ids = [8244];
export const __webpack_modules__ = {
25967(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var react__rspack_import_1 = __webpack_require__(58186);
/* import */ var class_variance_authority__rspack_import_4 = __webpack_require__(76912);
/* import */ var radix_ui__rspack_import_2 = __webpack_require__(56678);
/* import */ var _lib_utils__rspack_import_3 = __webpack_require__(80828);
"use client";





function Tabs({ className, orientation = "horizontal", ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_2/* .Root */.bL, {
        "data-slot": "tabs",
        "data-orientation": orientation,
        className: (0,_lib_utils__rspack_import_3.cn)("group/tabs flex gap-2 data-horizontal:flex-col", className),
        ...props
    });
}
const tabsListVariants = (0,class_variance_authority__rspack_import_4/* .cva */.F)("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none", {
    variants: {
        variant: {
            default: "bg-muted",
            line: "gap-1 bg-transparent"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function TabsList({ className, variant = "default", ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_2/* .List */.B8, {
        "data-slot": "tabs-list",
        "data-variant": variant,
        className: (0,_lib_utils__rspack_import_3.cn)(tabsListVariants({
            variant
        }), className),
        ...props
    });
}
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_2/* .Trigger */.l9, {
        "data-slot": "tabs-trigger",
        className: (0,_lib_utils__rspack_import_3.cn)("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent", "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", className),
        ...props
    });
}
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_2/* .Content */.UC, {
        "data-slot": "tabs-content",
        className: (0,_lib_utils__rspack_import_3.cn)("flex-1 text-sm outline-none", className),
        ...props
    });
}


__webpack_require__.d(__webpack_exports__, {
  Xi: () => (TabsTrigger),
  av: () => (TabsContent),
  j7: () => (TabsList),
  tU: () => (Tabs)
});


},

};
