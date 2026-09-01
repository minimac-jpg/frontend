export const __rspack_esm_id = 3595;
export const __rspack_esm_ids = [3595];
export const __webpack_modules__ = {
79318(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _lib_utils__rspack_import_2 = __webpack_require__(80828);
/* import */ var class_variance_authority__rspack_import_1 = __webpack_require__(76912);



const badgeVariants = (0,class_variance_authority__rspack_import_1/* .cva */.F)("inline-flex shrink-0 items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-colors", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground",
            secondary: "border-transparent bg-secondary text-secondary-foreground",
            destructive: "border-transparent bg-destructive/10 text-destructive",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
        "data-slot": "badge",
        className: (0,_lib_utils__rspack_import_2.cn)(badgeVariants({
            variant,
            className
        })),
        ...props
    });
}


__webpack_require__.d(__webpack_exports__, {
  E: () => (Badge)
});


},

};
