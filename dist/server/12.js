export const __rspack_esm_id = 12;
export const __rspack_esm_ids = [12];
export const __webpack_modules__ = {
32462() {


},
97984(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var radix_ui__rspack_import_1 = __webpack_require__(10947);
/* import */ var _lib_utils__rspack_import_2 = __webpack_require__(80828);



function Avatar({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Root */.bL, {
        "data-slot": "avatar",
        "data-size": size,
        className: (0,_lib_utils__rspack_import_2.cn)("group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten", className),
        ...props
    });
}
function AvatarImage({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Image */._V, {
        "data-slot": "avatar-image",
        className: (0,_lib_utils__rspack_import_2.cn)("aspect-square size-full rounded-full object-cover", className),
        ...props
    });
}
function AvatarFallback({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Fallback */.H4, {
        "data-slot": "avatar-fallback",
        className: (0,_lib_utils__rspack_import_2.cn)("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs", className),
        ...props
    });
}
function AvatarBadge({ className, ...props }) {
    return /*#__PURE__*/ _jsx("span", {
        "data-slot": "avatar-badge",
        className: cn("absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", className),
        ...props
    });
}
function AvatarGroup({ className, ...props }) {
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "avatar-group",
        className: cn("group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", className),
        ...props
    });
}
function AvatarGroupCount({ className, ...props }) {
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "avatar-group-count",
        className: cn("relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", className),
        ...props
    });
}


__webpack_require__.d(__webpack_exports__, {
  BK: () => (AvatarImage),
  eu: () => (Avatar),
  q5: () => (AvatarFallback)
});


},
39839(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var class_variance_authority__rspack_import_1 = __webpack_require__(76912);
/* import */ var radix_ui__rspack_import_2 = __webpack_require__(86710);
/* import */ var _lib_utils__rspack_import_3 = __webpack_require__(80828);




const buttonVariants = (0,class_variance_authority__rspack_import_1/* .cva */.F)("group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/80",
            outline: "border-border bg-background shadow-xs hover:bg-gray-200/90 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-gray-200/90 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-gray-200/90",
            destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
            lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            icon: "size-9",
            "icon-xs": "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? radix_ui__rspack_import_2/* .Root */.bL : "button";
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0,_lib_utils__rspack_import_3.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    });
}


__webpack_require__.d(__webpack_exports__, {
  $: () => (Button)
}, {
  r: buttonVariants
});


},
70355(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var lucide_react__rspack_import_3 = __webpack_require__(78265);
/* import */ var radix_ui__rspack_import_1 = __webpack_require__(64186);
/* import */ var _lib_utils__rspack_import_2 = __webpack_require__(80828);




function Dialog({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Root */.bL, {
        "data-slot": "dialog",
        ...props
    });
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Trigger */.l9, {
        "data-slot": "dialog-trigger",
        ...props
    });
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Portal */.ZL, {
        "data-slot": "dialog-portal",
        ...props
    });
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Close */.bm, {
        "data-slot": "dialog-close",
        ...props
    });
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Overlay */.hJ, {
        "data-slot": "dialog-overlay",
        className: (0,_lib_utils__rspack_import_2.cn)("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
        ...props
    });
}
function DialogContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(DialogPortal, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DialogOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(radix_ui__rspack_import_1/* .Content */.UC, {
                "data-slot": "dialog-content",
                className: (0,_lib_utils__rspack_import_2.cn)("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-6 rounded-xl bg-popover p-6 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-md data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(radix_ui__rspack_import_1/* .Close */.bm, {
                        "data-slot": "dialog-close",
                        className: "absolute top-4 right-4 rounded-sm opacity-70 ring-ring transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_3/* ["default"] */.A, {
                                className: "size-4"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        "data-slot": "dialog-header",
        className: (0,_lib_utils__rspack_import_2.cn)("flex flex-col gap-1.5", className),
        ...props
    });
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        "data-slot": "dialog-footer",
        className: (0,_lib_utils__rspack_import_2.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    });
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Title */.hE, {
        "data-slot": "dialog-title",
        className: (0,_lib_utils__rspack_import_2.cn)("text-lg font-semibold leading-none", className),
        ...props
    });
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Description */.VY, {
        "data-slot": "dialog-description",
        className: (0,_lib_utils__rspack_import_2.cn)("text-sm text-muted-foreground", className),
        ...props
    });
}


__webpack_require__.d(__webpack_exports__, {
  Cf: () => (DialogContent),
  Es: () => (DialogFooter),
  HM: () => (DialogClose),
  L3: () => (DialogTitle),
  c7: () => (DialogHeader),
  lG: () => (Dialog),
  rr: () => (DialogDescription),
  zM: () => (DialogTrigger)
});


},
77338(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var radix_ui__rspack_import_1 = __webpack_require__(36926);
/* import */ var _lib_utils__rspack_import_2 = __webpack_require__(80828);
"use client";




function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Root */.bL, {
        "data-slot": "dropdown-menu",
        ...props
    });
}
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ _jsx(DropdownMenuPrimitive.Portal, {
        "data-slot": "dropdown-menu-portal",
        ...props
    });
}
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Trigger */.l9, {
        "data-slot": "dropdown-menu-trigger",
        ...props
    });
}
function DropdownMenuContent({ className, align = "start", sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Portal */.ZL, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Content */.UC, {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            align: align,
            className: (0,_lib_utils__rspack_import_2.cn)("z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
            ...props
        })
    });
}
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Group */.YJ, {
        "data-slot": "dropdown-menu-group",
        ...props
    });
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Item */.q7, {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0,_lib_utils__rspack_import_2.cn)("group/dropdown-menu-item relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", className),
        ...props
    });
}
function DropdownMenuCheckboxItem({ className, children, checked, inset, ...props }) {
    return /*#__PURE__*/ _jsxs(DropdownMenuPrimitive.CheckboxItem, {
        "data-slot": "dropdown-menu-checkbox-item",
        "data-inset": inset,
        className: cn("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-8 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("span", {
                className: "pointer-events-none absolute right-2 flex items-center justify-center",
                "data-slot": "dropdown-menu-checkbox-item-indicator",
                children: /*#__PURE__*/ _jsx(DropdownMenuPrimitive.ItemIndicator, {
                    children: /*#__PURE__*/ _jsx(CheckIcon, {})
                })
            }),
            children
        ]
    });
}
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ _jsx(DropdownMenuPrimitive.RadioGroup, {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    });
}
function DropdownMenuRadioItem({ className, children, inset, ...props }) {
    return /*#__PURE__*/ _jsxs(DropdownMenuPrimitive.RadioItem, {
        "data-slot": "dropdown-menu-radio-item",
        "data-inset": inset,
        className: cn("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-8 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ _jsx("span", {
                className: "pointer-events-none absolute right-2 flex items-center justify-center",
                "data-slot": "dropdown-menu-radio-item-indicator",
                children: /*#__PURE__*/ _jsx(DropdownMenuPrimitive.ItemIndicator, {
                    children: /*#__PURE__*/ _jsx(CheckIcon, {})
                })
            }),
            children
        ]
    });
}
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Label */.JU, {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0,_lib_utils__rspack_import_2.cn)("px-2 py-1.5 text-xs font-medium text-muted-foreground data-inset:pl-8", className),
        ...props
    });
}
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Separator */.wv, {
        "data-slot": "dropdown-menu-separator",
        className: (0,_lib_utils__rspack_import_2.cn)("-mx-1 my-1 h-px bg-border", className),
        ...props
    });
}
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ _jsx("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: cn("ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground", className),
        ...props
    });
}
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ _jsx(DropdownMenuPrimitive.Sub, {
        "data-slot": "dropdown-menu-sub",
        ...props
    });
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ _jsxs(DropdownMenuPrimitive.SubTrigger, {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: cn("flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-8 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ _jsx(ChevronRightIcon, {
                className: "ml-auto"
            })
        ]
    });
}
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ _jsx(DropdownMenuPrimitive.SubContent, {
        "data-slot": "dropdown-menu-sub-content",
        className: cn("z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
        ...props
    });
}


__webpack_require__.d(__webpack_exports__, {
  I: () => (DropdownMenuGroup),
  SQ: () => (DropdownMenuContent),
  _2: () => (DropdownMenuItem),
  lp: () => (DropdownMenuLabel),
  mB: () => (DropdownMenuSeparator),
  rI: () => (DropdownMenu),
  ty: () => (DropdownMenuTrigger)
});


},
16479(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _lib_utils__rspack_import_1 = __webpack_require__(80828);


function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
        type: type,
        "data-slot": "input",
        className: (0,_lib_utils__rspack_import_1.cn)("h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    });
}


__webpack_require__.d(__webpack_exports__, {
  p: () => (Input)
});


},
16533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _lib_utils__rspack_import_1 = __webpack_require__(80828);


function Label({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
        "data-slot": "label",
        className: (0,_lib_utils__rspack_import_1.cn)("text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    });
}


__webpack_require__.d(__webpack_exports__, {
  J: () => (Label)
});


},
73594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var radix_ui__rspack_import_1 = __webpack_require__(75129);
/* import */ var _lib_utils__rspack_import_2 = __webpack_require__(80828);



function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Root */.b, {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0,_lib_utils__rspack_import_2.cn)("shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch", className),
        ...props
    });
}


__webpack_require__.d(__webpack_exports__, {
  w: () => (Separator)
});


},
50186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _lib_utils__rspack_import_1 = __webpack_require__(80828);


function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        "data-slot": "skeleton",
        className: (0,_lib_utils__rspack_import_1.cn)("animate-pulse rounded-md bg-muted", className),
        ...props
    });
}


__webpack_require__.d(__webpack_exports__, {
  E: () => (Skeleton)
});


},
87202(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var react__rspack_import_1 = __webpack_require__(58186);
/* import */ var _lib_utils__rspack_import_2 = __webpack_require__(80828);



let toasts = [];
let nextId = 1;
const listeners = new Set();
function emit() {
    for (const listener of listeners){
        listener([
            ...toasts
        ]);
    }
}
function push(message, variant) {
    const toast = {
        id: nextId++,
        message,
        variant
    };
    toasts = [
        ...toasts,
        toast
    ];
    emit();
    setTimeout(()=>{
        toasts = toasts.filter((t)=>t.id !== toast.id);
        emit();
    }, 4000);
}
const toast = {
    success: (message)=>push(message, "success"),
    error: (message)=>push(message, "destructive"),
    info: (message)=>push(message, "default")
};
function errorToMessage(err) {
    if (err instanceof Error && err.message) return err.message;
    return "Something went wrong. Please try again.";
}
function Toaster() {
    const [items, setItems] = (0,react__rspack_import_1.useState)(toasts);
    (0,react__rspack_import_1.useEffect)(()=>{
        const listener = (next)=>setItems(next);
        listeners.add(listener);
        return ()=>{
            listeners.delete(listener);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: "fixed bottom-5 right-5 z-50 flex flex-col gap-2",
        children: items.map((toastItem)=>{
            const variantCls = toastItem.variant === "destructive" ? "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-400" : toastItem.variant === "success" ? "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400" : "border-border bg-card text-foreground";
            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: (0,_lib_utils__rspack_import_2.cn)("flex items-center gap-2 rounded-md border px-4 py-2.5 text-[13px] font-medium shadow-md transition-all duration-200", variantCls),
                style: {
                    maxWidth: "320px"
                },
                children: toastItem.message
            }, toastItem.id);
        })
    });
}

__webpack_require__.d(__webpack_exports__, {
  l$: () => (Toaster),
  lV: () => (errorToMessage)
}, {
  oR: toast
});


},
18918(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var radix_ui__rspack_import_1 = __webpack_require__(93845);
/* import */ var _lib_utils__rspack_import_2 = __webpack_require__(80828);



function TooltipProvider({ delayDuration = 0, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Provider */.Kq, {
        "data-slot": "tooltip-provider",
        delayDuration: delayDuration,
        ...props
    });
}
function Tooltip({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Root */.bL, {
        "data-slot": "tooltip",
        ...props
    });
}
function TooltipTrigger({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Trigger */.l9, {
        "data-slot": "tooltip-trigger",
        ...props
    });
}
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Portal */.ZL, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(radix_ui__rspack_import_1/* .Content */.UC, {
            "data-slot": "tooltip-content",
            sideOffset: sideOffset,
            className: (0,_lib_utils__rspack_import_2.cn)("z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(radix_ui__rspack_import_1/* .Arrow */.i3, {
                    className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground"
                })
            ]
        })
    });
}


__webpack_require__.d(__webpack_exports__, {
  Bc: () => (TooltipProvider),
  ZI: () => (TooltipContent),
  k$: () => (TooltipTrigger),
  m_: () => (Tooltip)
});


},
72646(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useAuth)
});

// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(43653);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useQuery.js + 6 modules
var useQuery = __webpack_require__(5375);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useMutation.js + 1 modules
var useMutation = __webpack_require__(19390);
// EXTERNAL MODULE: ./src/lib/auth-client.ts
var auth_client = __webpack_require__(82915);
;// CONCATENATED MODULE: ./src/api/auth.ts

function mapUser(u) {
    return {
        id: u.id,
        displayName: u.name ?? u.email,
        email: u.email,
        avatar: u.image ?? ""
    };
}
async function login(email, password) {
    const { data, error } = await auth_client/* .authClient.signIn.email */.y.signIn.email({
        email,
        password
    });
    if (error) throw new Error(error.message ?? "Login failed");
    if (!data?.user) throw new Error("Login returned no user");
    return mapUser(data.user);
}
async function logout() {
    await auth_client/* .authClient.signOut */.y.signOut();
}
async function whoami() {
    const { data, error } = await auth_client/* .authClient.getSession */.y.getSession();
    if (error || !data?.user) throw new Error("Not authenticated");
    return mapUser(data.user);
}

// EXTERNAL MODULE: ./src/state/auth-store.tsx
var auth_store = __webpack_require__(2639);
;// CONCATENATED MODULE: ./src/hooks/use-auth.ts



function useAuth() {
    const { user, isAuthenticated } = (0,auth_store/* .useAuthStore */.n)();
    const queryClient = (0,QueryClientProvider/* .useQueryClient */.jE)();
    const sessionQuery = (0,useQuery/* .useQuery */.I)({
        queryKey: [
            "auth",
            "session"
        ],
        queryFn: ()=>whoami(),
        retry: false,
        staleTime: 60000
    });
    const loginMutation = (0,useMutation/* .useMutation */.n)({
        mutationFn: (request)=>login(request.email ?? "", request.password ?? ""),
        onSuccess: (data)=>{
            queryClient.setQueryData([
                "auth",
                "session"
            ], data);
            queryClient.invalidateQueries();
        }
    });
    const logoutMutation = (0,useMutation/* .useMutation */.n)({
        mutationFn: ()=>logout(),
        onSettled: ()=>{
            queryClient.setQueryData([
                "auth",
                "session"
            ], null);
            queryClient.clear();
        }
    });
    return {
        token: null,
        user: user ?? sessionQuery.data ?? null,
        isAuthenticated: isAuthenticated || !!sessionQuery.data,
        isLoading: sessionQuery.isLoading && !user,
        login: loginMutation.mutateAsync,
        logout: logoutMutation.mutateAsync,
        isLoggingIn: loginMutation.isPending,
        isLoggingOut: logoutMutation.isPending,
        loginError: loginMutation.error
    };
}


},
20221(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var _lib_auth_client__rspack_import_0 = __webpack_require__(82915);

function useWorkspace() {
    const { data: session, isPending: sessionPending } = _lib_auth_client__rspack_import_0/* .authClient.useSession */.y.useSession();
    const { data: organizations, isPending: organizationsPending, error: organizationsError, refetch } = _lib_auth_client__rspack_import_0/* .authClient.useListOrganizations */.y.useListOrganizations();
    const user = session?.user ?? null;
    const activeOrganizationId = session?.session?.activeOrganizationId ?? null;
    const activeOrganization = organizations?.find((org)=>org.id === activeOrganizationId) ?? null;
    const isPersonal = activeOrganization === null;
    const personalWorkspace = user ? {
        id: user.id,
        name: user.name || user.email,
        kind: "personal"
    } : null;
    const workspaces = organizations ? organizations.map((org)=>({
            id: org.id,
            name: org.name,
            slug: org.slug,
            kind: "organization"
        })) : [];
    async function setActiveOrganization(organizationId) {
        const { error } = await _lib_auth_client__rspack_import_0/* .authClient.organization.setActive */.y.organization.setActive({
            organizationId
        });
        if (error) {
            throw error;
        }
    }
    async function createOrganization(input) {
        const { data, error } = await _lib_auth_client__rspack_import_0/* .authClient.organization.create */.y.organization.create({
            name: input.name,
            slug: input.slug
        });
        if (error) {
            throw error;
        }
        return data;
    }
    return {
        user,
        session,
        activeOrganizationId,
        activeOrganization,
        isPersonal,
        personalWorkspace,
        workspaces,
        isLoading: sessionPending || organizationsPending,
        organizationsError,
        refetch,
        setActiveOrganization,
        createOrganization
    };
}

__webpack_require__.d(__webpack_exports__, {
  h: () => (useWorkspace)
});


},
82915(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var better_auth_react__rspack_import_0 = __webpack_require__(27614);
/* import */ var better_auth_client_plugins__rspack_import_1 = __webpack_require__(15207);
/* import */ var better_auth_client_plugins__rspack_import_2 = __webpack_require__(7960);
/* import */ var better_auth_client_plugins__rspack_import_3 = __webpack_require__(8381);


const authClient = (0,better_auth_react__rspack_import_0/* .createAuthClient */.M)({
    basePath: "/api/session",
    plugins: [
        (0,better_auth_client_plugins__rspack_import_1/* .adminClient */.p)(),
        (0,better_auth_client_plugins__rspack_import_2/* .organizationClient */.VY)(),
        (0,better_auth_client_plugins__rspack_import_3/* .jwtClient */.V)({
            jwks: {
                jwksPath: "/.well-known/jwks.json"
            }
        })
    ]
});

__webpack_require__.d(__webpack_exports__, {
}, {
  y: authClient
});


},
80828(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var clsx__rspack_import_1 = __webpack_require__(38376);
/* import */ var tailwind_merge__rspack_import_0 = __webpack_require__(16068);


function cn(...inputs) {
    return (0,tailwind_merge__rspack_import_0/* .twMerge */.QP)((0,clsx__rspack_import_1/* .clsx */.$)(inputs));
}

__webpack_require__.d(__webpack_exports__, {
  cn: () => (cn)
});


},
87943(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  getRouter: () => (/* binding */ getRouter)
});
// NAMESPACE OBJECT: ./db/schema.ts
var schema_namespaceObject = {};
__webpack_require__.r(schema_namespaceObject);
__webpack_require__.d(schema_namespaceObject, { 
  account: () => (account),
  accountRelations: () => (accountRelations),
  invitation: () => (schema_invitation),
  invitationRelations: () => (invitationRelations),
  jwks: () => (jwks),
  member: () => (member),
  memberRelations: () => (memberRelations),
  organization: () => (schema_organization),
  organizationRelations: () => (organizationRelations),
  session: () => (schema_session),
  sessionRelations: () => (sessionRelations),
  user: () => (schema_user),
  userRelations: () => (userRelations),
  verification: () => (verification) });


// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/router.js + 3 modules
var esm_router = __webpack_require__(81739);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/route.js + 4 modules
var route = __webpack_require__(69677);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/Matches.js + 1 modules
var Matches = __webpack_require__(48341);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/HeadContent.js + 1 modules
var HeadContent = __webpack_require__(91649);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/Match.js + 6 modules
var Match = __webpack_require__(71667);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/Scripts.js
var Scripts = __webpack_require__(50366);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(43653);
// EXTERNAL MODULE: ./src/state/auth-store.tsx
var auth_store = __webpack_require__(2639);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var useNavigate = __webpack_require__(45178);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useRouterState.js
var useRouterState = __webpack_require__(84011);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
;// CONCATENATED MODULE: ./src/components/auth/require-auth.tsx




const PUBLIC_PATHS = [
    "/login"
];
function RequireAuth({ children }) {
    const { isAuthenticated } = (0,auth_store/* .useAuthStore */.n)();
    const navigate = (0,useNavigate/* .useNavigate */.Z)();
    const matches = (0,Matches/* .useMatches */.FE)();
    const redirectSearch = (0,useRouterState/* .useRouterState */.k)({
        select: (state)=>state.location.search
    });
    const isPublicPath = matches.some((m)=>PUBLIC_PATHS.includes(m.pathname));
    const redirectTo = typeof redirectSearch?.redirect === "string" && redirectSearch.redirect.startsWith("/") && !redirectSearch.redirect.startsWith("//") ? redirectSearch.redirect : "/";
    (0,react.useEffect)(()=>{
        if (!isAuthenticated && !isPublicPath) {
            navigate({
                to: "/login",
                replace: true
            });
        }
        if (isAuthenticated && isPublicPath) {
            navigate({
                to: redirectTo,
                replace: true
            });
        }
    }, [
        isAuthenticated,
        isPublicPath,
        redirectTo,
        navigate
    ]);
    if (!isAuthenticated && !isPublicPath) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/link.js + 1 modules
var esm_link = __webpack_require__(38639);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/flower.mjs
var flower = __webpack_require__(17982);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var dist = __webpack_require__(76912);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs
var react_slot_dist = __webpack_require__(86710);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(16479);
// EXTERNAL MODULE: ./src/components/ui/separator.tsx
var separator = __webpack_require__(73594);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.mjs
var x = __webpack_require__(78265);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dialog/dist/index.mjs
var react_dialog_dist = __webpack_require__(64186);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(80828);
;// CONCATENATED MODULE: ./src/components/ui/sheet.tsx
"use client";





function Sheet({ ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react_dialog_dist/* .Root */.bL, {
        "data-slot": "sheet",
        ...props
    });
}
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ _jsx(SheetPrimitive.Trigger, {
        "data-slot": "sheet-trigger",
        ...props
    });
}
function SheetClose({ ...props }) {
    return /*#__PURE__*/ _jsx(SheetPrimitive.Close, {
        "data-slot": "sheet-close",
        ...props
    });
}
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react_dialog_dist/* .Portal */.ZL, {
        "data-slot": "sheet-portal",
        ...props
    });
}
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react_dialog_dist/* .Overlay */.hJ, {
        "data-slot": "sheet-overlay",
        className: (0,utils.cn)("fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
        ...props
    });
}
function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(SheetPortal, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SheetOverlay, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_dialog_dist/* .Content */.UC, {
                "data-slot": "sheet-content",
                "data-side": side,
                className: (0,utils.cn)("fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0,jsx_runtime.jsx)(react_dialog_dist/* .Close */.bm, {
                        "data-slot": "sheet-close",
                        asChild: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                            variant: "ghost",
                            className: "absolute top-4 right-4",
                            size: "icon-sm",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* ["default"] */.A, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "sr-only",
                                    children: "Close"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        "data-slot": "sheet-header",
        className: (0,utils.cn)("flex flex-col gap-1.5 p-4", className),
        ...props
    });
}
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "sheet-footer",
        className: cn("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    });
}
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react_dialog_dist/* .Title */.hE, {
        "data-slot": "sheet-title",
        className: (0,utils.cn)("font-medium text-foreground", className),
        ...props
    });
}
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react_dialog_dist/* .Description */.VY, {
        "data-slot": "sheet-description",
        className: (0,utils.cn)("text-sm text-muted-foreground", className),
        ...props
    });
}


// EXTERNAL MODULE: ./src/components/ui/skeleton.tsx
var skeleton = __webpack_require__(50186);
// EXTERNAL MODULE: ./src/components/ui/tooltip.tsx
var ui_tooltip = __webpack_require__(18918);
;// CONCATENATED MODULE: ./src/hooks/use-mobile.ts

const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    const [isMobile, setIsMobile] = react.useState(undefined);
    react.useEffect(()=>{
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = ()=>{
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return ()=>mql.removeEventListener("change", onChange);
    }, []);
    return !!isMobile;
}

;// CONCATENATED MODULE: ./src/components/ui/sidebar.tsx













const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "11rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = /*#__PURE__*/ react.createContext(null);
function useSidebar() {
    const context = react.useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.");
    }
    return context;
}
function SidebarProvider({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, storageKey = SIDEBAR_COOKIE_NAME, keyboardShortcut = SIDEBAR_KEYBOARD_SHORTCUT, position = "fixed", ...props }) {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = react.useState(false);
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = react.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = react.useCallback((value)=>{
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
            setOpenProp(openState);
        } else {
            _setOpen(openState);
        }
        // This sets the cookie to keep the sidebar state.
        document.cookie = `${storageKey}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    }, [
        setOpenProp,
        open,
        storageKey
    ]);
    // Helper to toggle the sidebar.
    const toggleSidebar = react.useCallback(()=>{
        return isMobile ? setOpenMobile((open)=>!open) : setOpen((open)=>!open);
    }, [
        isMobile,
        setOpen
    ]);
    // Adds a keyboard shortcut to toggle the sidebar.
    react.useEffect(()=>{
        const handleKeyDown = (event)=>{
            if (event.key === keyboardShortcut && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                toggleSidebar();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        toggleSidebar,
        keyboardShortcut
    ]);
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";
    const contextValue = react.useMemo(()=>({
            state,
            open,
            setOpen,
            isMobile,
            openMobile,
            setOpenMobile,
            toggleSidebar,
            position
        }), [
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        toggleSidebar,
        position
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SidebarContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_tooltip/* .TooltipProvider */.Bc, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                "data-slot": "sidebar-wrapper",
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH,
                    "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                    ...style
                },
                className: (0,utils.cn)("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", className),
                ...props,
                children: children
            })
        })
    });
}
function Sidebar({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, dir, ...props }) {
    const { isMobile, state, openMobile, setOpenMobile, position } = useSidebar();
    if (collapsible === "none") {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            "data-slot": "sidebar",
            className: (0,utils.cn)("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", className),
            ...props,
            children: children
        });
    }
    if (isMobile) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Sheet, {
            open: openMobile,
            onOpenChange: setOpenMobile,
            ...props,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(SheetContent, {
                dir: dir,
                "data-sidebar": "sidebar",
                "data-slot": "sidebar",
                "data-mobile": "true",
                className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH_MOBILE
                },
                side: side,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(SheetHeader, {
                        className: "sr-only",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SheetTitle, {
                                children: "Sidebar"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SheetDescription, {
                                children: "Displays the mobile sidebar."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex h-full w-full flex-col",
                        children: children
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,utils.cn)("group peer hidden text-sidebar-foreground", position === "relative" ? "md:flex" : "md:block"),
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        "data-slot": "sidebar",
        children: [
            position === "fixed" && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                "data-slot": "sidebar-gap",
                className: (0,utils.cn)("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                "data-slot": "sidebar-container",
                "data-side": side,
                className: (0,utils.cn)(position === "fixed" ? "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] md:flex" : "relative hidden w-(--sidebar-width) transition-[width] duration-200 ease-linear md:flex", // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", className),
                ...props,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    "data-sidebar": "sidebar",
                    "data-slot": "sidebar-inner",
                    className: "flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border",
                    children: children
                })
            })
        ]
    });
}
function SidebarTrigger({ className, onClick, ...props }) {
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ _jsxs(Button, {
        "data-sidebar": "trigger",
        "data-slot": "sidebar-trigger",
        variant: "ghost",
        size: "icon-sm",
        className: cn(className),
        onClick: (event)=>{
            onClick?.(event);
            toggleSidebar();
        },
        ...props,
        children: [
            /*#__PURE__*/ _jsx(PanelLeftIcon, {}),
            /*#__PURE__*/ _jsx("span", {
                className: "sr-only",
                children: "Toggle Sidebar"
            })
        ]
    });
}
function SidebarRail({ className, ...props }) {
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ _jsx("button", {
        "data-sidebar": "rail",
        "data-slot": "sidebar-rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: cn("absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:start-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex ltr:-translate-x-1/2 rtl:-translate-x-1/2", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className),
        ...props
    });
}
function SidebarInset({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
        "data-slot": "sidebar-inset",
        className: (0,utils.cn)("relative flex w-full flex-1 flex-col bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", className),
        ...props
    });
}
function SidebarInput({ className, ...props }) {
    return /*#__PURE__*/ _jsx(Input, {
        "data-slot": "sidebar-input",
        "data-sidebar": "input",
        className: cn("h-8 w-full bg-background shadow-none", className),
        ...props
    });
}
function SidebarHeader({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        "data-slot": "sidebar-header",
        "data-sidebar": "header",
        className: (0,utils.cn)("flex flex-col gap-2 p-2", className),
        ...props
    });
}
function SidebarFooter({ className, ...props }) {
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "sidebar-footer",
        "data-sidebar": "footer",
        className: cn("flex flex-col gap-2 p-2", className),
        ...props
    });
}
function SidebarSeparator({ className, ...props }) {
    return /*#__PURE__*/ _jsx(Separator, {
        "data-slot": "sidebar-separator",
        "data-sidebar": "separator",
        className: cn("mx-2 w-auto bg-sidebar-border", className),
        ...props
    });
}
function SidebarContent({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        "data-slot": "sidebar-content",
        "data-sidebar": "content",
        className: (0,utils.cn)("no-scrollbar flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
        ...props
    });
}
function SidebarGroup({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        "data-slot": "sidebar-group",
        "data-sidebar": "group",
        className: (0,utils.cn)("relative flex w-full min-w-0 flex-col p-2", className),
        ...props
    });
}
function SidebarGroupLabel({ className, asChild = false, ...props }) {
    const Comp = asChild ? Slot.Root : "div";
    return /*#__PURE__*/ _jsx(Comp, {
        "data-slot": "sidebar-group-label",
        "data-sidebar": "group-label",
        className: cn("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", className),
        ...props
    });
}
function SidebarGroupAction({ className, asChild = false, ...props }) {
    const Comp = asChild ? Slot.Root : "button";
    return /*#__PURE__*/ _jsx(Comp, {
        "data-slot": "sidebar-group-action",
        "data-sidebar": "group-action",
        className: cn("absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:after:hidden [&>svg]:size-4 [&>svg]:shrink-0", className),
        ...props
    });
}
function SidebarGroupContent({ className, ...props }) {
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "sidebar-group-content",
        "data-sidebar": "group-content",
        className: cn("w-full text-sm", className),
        ...props
    });
}
function SidebarMenu({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        "data-slot": "sidebar-menu",
        "data-sidebar": "menu",
        className: (0,utils.cn)("flex w-full min-w-0 flex-col gap-1", className),
        ...props
    });
}
function SidebarMenuItem({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        "data-slot": "sidebar-menu-item",
        "data-sidebar": "menu-item",
        className: (0,utils.cn)("group/menu-item relative", className),
        ...props
    });
}
const sidebarMenuButtonVariants = (0,dist/* .cva */.F)("peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground data-active:bg-sidebar-active data-active:font-medium data-active:text-sidebar-active-foreground data-active:hover:bg-sidebar-active data-active:hover:text-sidebar-active-foreground [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate", {
    variants: {
        variant: {
            default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
        },
        size: {
            default: "h-8 text-sm",
            sm: "h-7 text-xs",
            lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function SidebarMenuButton({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }) {
    const Comp = asChild ? react_slot_dist/* .Root */.bL : "button";
    const { isMobile, state } = useSidebar();
    const button = /*#__PURE__*/ (0,jsx_runtime.jsx)(Comp, {
        "data-slot": "sidebar-menu-button",
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive || undefined,
        className: (0,utils.cn)(sidebarMenuButtonVariants({
            variant,
            size
        }), isActive && "bg-sidebar-active font-medium text-sidebar-active-foreground", className),
        ...props
    });
    if (!tooltip) {
        return button;
    }
    if (typeof tooltip === "string") {
        tooltip = {
            children: tooltip
        };
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_tooltip/* .Tooltip */.m_, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_tooltip/* .TooltipTrigger */.k$, {
                asChild: true,
                children: button
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_tooltip/* .TooltipContent */.ZI, {
                side: "right",
                align: "center",
                hidden: state !== "collapsed" || isMobile,
                ...tooltip
            })
        ]
    });
}
function SidebarMenuAction({ className, asChild = false, showOnHover = false, ...props }) {
    const Comp = asChild ? Slot.Root : "button";
    return /*#__PURE__*/ _jsx(Comp, {
        "data-slot": "sidebar-menu-action",
        "data-sidebar": "menu-action",
        className: cn("absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 after:absolute after:-inset-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:after:hidden [&>svg]:size-4 [&>svg]:shrink-0", showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-active/menu-button:text-sidebar-active-foreground aria-expanded:opacity-100 md:opacity-0", className),
        ...props
    });
}
function SidebarMenuBadge({ className, ...props }) {
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "sidebar-menu-badge",
        "data-sidebar": "menu-badge",
        className: cn("pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-active-foreground", className),
        ...props
    });
}
function SidebarMenuSkeleton({ className, showIcon = false, ...props }) {
    // Random width between 50 to 90%.
    const [width] = React.useState(()=>{
        return `${Math.floor(Math.random() * 40) + 50}%`;
    });
    return /*#__PURE__*/ _jsxs("div", {
        "data-slot": "sidebar-menu-skeleton",
        "data-sidebar": "menu-skeleton",
        className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
        ...props,
        children: [
            showIcon && /*#__PURE__*/ _jsx(Skeleton, {
                className: "size-4 rounded-md",
                "data-sidebar": "menu-skeleton-icon"
            }),
            /*#__PURE__*/ _jsx(Skeleton, {
                className: "h-4 max-w-(--skeleton-width) flex-1",
                "data-sidebar": "menu-skeleton-text",
                style: {
                    "--skeleton-width": width
                }
            })
        ]
    });
}
function SidebarMenuSub({ className, ...props }) {
    return /*#__PURE__*/ _jsx("ul", {
        "data-slot": "sidebar-menu-sub",
        "data-sidebar": "menu-sub",
        className: cn("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5 group-data-[collapsible=icon]:hidden", className),
        ...props
    });
}
function SidebarMenuSubItem({ className, ...props }) {
    return /*#__PURE__*/ _jsx("li", {
        "data-slot": "sidebar-menu-sub-item",
        "data-sidebar": "menu-sub-item",
        className: cn("group/menu-sub-item relative", className),
        ...props
    });
}
function SidebarMenuSubButton({ asChild = false, size = "md", isActive = false, className, ...props }) {
    const Comp = asChild ? Slot.Root : "a";
    return /*#__PURE__*/ _jsx(Comp, {
        "data-slot": "sidebar-menu-sub-button",
        "data-sidebar": "menu-sub-button",
        "data-size": size,
        "data-active": isActive || undefined,
        className: cn("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden group-data-[collapsible=icon]:hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[size=md]:text-sm data-[size=sm]:text-xs         data-active:bg-sidebar-active data-active:text-sidebar-active-foreground data-active:hover:bg-sidebar-active data-active:hover:text-sidebar-active-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", isActive && "bg-sidebar-active text-sidebar-active-foreground", className),
        ...props
    });
}


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/house.mjs
var house = __webpack_require__(49317);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/code.mjs
var code = __webpack_require__(36908);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/rocket.mjs
var rocket = __webpack_require__(19571);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/pickaxe.mjs
var pickaxe = __webpack_require__(91672);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/blocks.mjs
var blocks = __webpack_require__(46165);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/key-round.mjs
var key_round = __webpack_require__(71571);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shapes.mjs
var shapes = __webpack_require__(62749);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/settings.mjs
var settings = __webpack_require__(36888);
;// CONCATENATED MODULE: ./src/components/navigation/nav-config.ts

const navItems = [
    {
        name: "Dashboard",
        path: "/",
        icon: house/* ["default"] */.A
    },
    {
        name: "Projects",
        path: "/projects",
        icon: code/* ["default"] */.A
    },
    {
        name: "Releases",
        path: "/releases",
        icon: rocket/* ["default"] */.A
    },
    // { name: "Pipelines", path: "/pipelines", icon: Workflow },
    {
        name: "Builds",
        path: "/builds",
        icon: pickaxe/* ["default"] */.A
    },
    {
        name: "Workers",
        path: "/workers",
        icon: blocks/* ["default"] */.A
    },
    {
        name: "Secrets",
        path: "/secrets",
        icon: key_round/* ["default"] */.A
    },
    {
        name: "Artifacts",
        path: "/artifacts",
        icon: shapes/* ["default"] */.A
    },
    // { name: "Cache", path: "/cache", icon: Folder },
    {
        name: "Settings",
        path: "/settings",
        icon: settings/* ["default"] */.A
    }
];

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user-round.mjs
var user_round = __webpack_require__(36661);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.mjs
var loader_circle = __webpack_require__(67255);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevrons-up-down.mjs
var chevrons_up_down = __webpack_require__(54788);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.mjs
var check = __webpack_require__(23853);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/building-2.mjs
var building_2 = __webpack_require__(94614);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/plus.mjs
var plus = __webpack_require__(44207);
// EXTERNAL MODULE: ./src/components/ui/dialog.tsx
var dialog = __webpack_require__(70355);
// EXTERNAL MODULE: ./src/components/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(77338);
// EXTERNAL MODULE: ./src/components/ui/label.tsx
var label = __webpack_require__(16533);
// EXTERNAL MODULE: ./src/components/ui/toast.tsx
var toast = __webpack_require__(87202);
// EXTERNAL MODULE: ./src/hooks/use-workspace.ts
var use_workspace = __webpack_require__(20221);
;// CONCATENATED MODULE: ./src/components/navigation/workspace-switcher.tsx
"use client";










function slugify(value) {
    return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function initials(name) {
    const parts = name.split(/\s+/).filter(Boolean);
    const first = parts[0];
    const last = parts.length > 1 ? parts[parts.length - 1] : undefined;
    const result = `${first?.[0] ?? ""}${last?.[0] ?? ""}`;
    return result.length > 0 ? result.toUpperCase() : "?";
}
function WorkspaceSwitcher() {
    const { user, activeOrganization, isPersonal, personalWorkspace, workspaces, isLoading, setActiveOrganization, createOrganization } = (0,use_workspace/* .useWorkspace */.h)();
    const [dialogOpen, setDialogOpen] = (0,react.useState)(false);
    const [name, setName] = (0,react.useState)("");
    const [slug, setSlug] = (0,react.useState)("");
    const [submitting, setSubmitting] = (0,react.useState)(false);
    const [switchingId, setSwitchingId] = (0,react.useState)(null);
    const activeName = isPersonal ? personalWorkspace?.name ?? "Personal" : activeOrganization?.name;
    const activeSubtitle = isPersonal ? "Personal workspace" : `@${activeOrganization?.slug ?? ""}`;
    const handleSelect = async (organizationId)=>{
        try {
            setSwitchingId(organizationId);
            await setActiveOrganization(organizationId);
        } catch (err) {
            toast/* .toast.error */.oR.error(err instanceof Error ? err.message : "Failed to switch workspace");
        } finally{
            setSwitchingId(null);
        }
    };
    const handleCreate = async ()=>{
        if (!name.trim()) return;
        const finalSlug = slug.trim() || slugify(name);
        if (!finalSlug) {
            toast/* .toast.error */.oR.error("Could not generate a slug — enter one manually");
            return;
        }
        try {
            setSubmitting(true);
            await createOrganization({
                name: name.trim(),
                slug: finalSlug
            });
            toast/* .toast.success */.oR.success(`Workspace "${name.trim()}" created`);
            setDialogOpen(false);
            setName("");
            setSlug("");
        } catch (err) {
            toast/* .toast.error */.oR.error(err instanceof Error ? err.message : "Failed to create workspace");
        } finally{
            setSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenu */.rI, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuTrigger */.ty, {
                        asChild: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            type: "button",
                            className: "flex w-full items-center gap-2 rounded-lg p-1 text-left text-sm outline-none hover:bg-gray-200/90 focus-visible:ring-2 focus-visible:ring-ring",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "flex aspect-square size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-sidebar-primary text-sidebar-primary-foreground",
                                    children: isPersonal ? /*#__PURE__*/ (0,jsx_runtime.jsx)(user_round/* ["default"] */.A, {
                                        className: "size-4"
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-xs font-semibold",
                                        children: initials(activeName ?? "?")
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: "grid flex-1 min-w-0 text-left text-sm leading-tight max-md:hidden",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "truncate font-medium",
                                            children: activeName
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "truncate text-xs text-muted-foreground",
                                            children: activeSubtitle
                                        })
                                    ]
                                }),
                                isLoading || switchingId !== null ? /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* ["default"] */.A, {
                                    className: "ml-auto size-4 shrink-0 animate-spin text-muted-foreground max-md:hidden"
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(chevrons_up_down/* ["default"] */.A, {
                                    className: "ml-auto size-4 shrink-0 text-muted-foreground max-md:hidden"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuContent */.SQ, {
                        className: "w-64 rounded-lg",
                        align: "start",
                        sideOffset: 4,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuLabel */.lp, {
                                className: "text-xs text-muted-foreground",
                                children: "Workspaces"
                            }),
                            personalWorkspace && /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuItem */._2, {
                                onClick: ()=>handleSelect(null),
                                className: "gap-2",
                                disabled: switchingId !== null,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(user_round/* ["default"] */.A, {
                                        className: "size-4 shrink-0"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "grid flex-1 min-w-0 text-left leading-tight",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "truncate",
                                                children: [
                                                    "Personal — ",
                                                    personalWorkspace.name
                                                ]
                                            }),
                                            user?.email && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "truncate text-xs text-muted-foreground",
                                                children: user.email
                                            })
                                        ]
                                    }),
                                    isPersonal && /*#__PURE__*/ (0,jsx_runtime.jsx)(check/* ["default"] */.A, {
                                        className: "size-4 shrink-0"
                                    })
                                ]
                            }),
                            workspaces.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuSeparator */.mB, {}),
                            workspaces.map((workspace)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuItem */._2, {
                                    onClick: ()=>handleSelect(workspace.id),
                                    className: "gap-2",
                                    disabled: switchingId !== null,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(building_2/* ["default"] */.A, {
                                            className: "size-4 shrink-0"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "grid flex-1 min-w-0 text-left leading-tight",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "truncate",
                                                    children: workspace.name
                                                }),
                                                workspace.slug && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "truncate text-xs text-muted-foreground",
                                                    children: [
                                                        "@",
                                                        workspace.slug
                                                    ]
                                                })
                                            ]
                                        }),
                                        !isPersonal && activeOrganization?.id === workspace.id && /*#__PURE__*/ (0,jsx_runtime.jsx)(check/* ["default"] */.A, {
                                            className: "size-4 shrink-0"
                                        })
                                    ]
                                }, workspace.id)),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuSeparator */.mB, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuItem */._2, {
                                onClick: ()=>setDialogOpen(true),
                                className: "gap-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(plus/* ["default"] */.A, {
                                        className: "size-4 shrink-0"
                                    }),
                                    "Create organization"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .Dialog */.lG, {
                open: dialogOpen,
                onOpenChange: setDialogOpen,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogContent */.Cf, {
                    className: "sm:max-w-md",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogHeader */.c7, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTitle */.L3, {
                                    children: "Create organization"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogDescription */.rr, {
                                    children: "Create a shared workspace for your team. The slug is used in invitation links and URLs."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid gap-4 py-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(label/* .Label */.J, {
                                            htmlFor: "org-name-input",
                                            children: "Name"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                            id: "org-name-input",
                                            value: name,
                                            onChange: (e)=>setName(e.target.value),
                                            placeholder: "Acme Inc",
                                            disabled: submitting
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(label/* .Label */.J, {
                                            htmlFor: "org-slug-input",
                                            children: "Slug (optional)"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                            id: "org-slug-input",
                                            value: slug,
                                            onChange: (e)=>setSlug(e.target.value),
                                            placeholder: name ? slugify(name) : "acme-inc",
                                            disabled: submitting
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Auto-generated from the name if left blank."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogFooter */.Es, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                    variant: "outline",
                                    onClick: ()=>setDialogOpen(false),
                                    disabled: submitting,
                                    children: "Cancel"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                    onClick: handleCreate,
                                    disabled: submitting || !name.trim(),
                                    children: [
                                        submitting && /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* ["default"] */.A, {
                                            className: "size-4 animate-spin"
                                        }),
                                        "Create"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/layout/app-sidebar.tsx
"use client";






function AppSidebar() {
    const pathname = (0,useRouterState/* .useRouterState */.k)({
        select: (state)=>state.location.pathname
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Sidebar, {
        collapsible: "icon",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(SidebarHeader, {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SidebarMenuButton, {
                        size: "lg",
                        asChild: true,
                        className: "px-1",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_link/* .Link */.N_, {
                            to: "/",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(flower/* ["default"] */.A, {
                                    className: "size-4"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WorkspaceSwitcher, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SidebarContent, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SidebarGroup, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SidebarMenu, {
                        children: navItems.map((item)=>{
                            const isActive = item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(SidebarMenuItem, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SidebarMenuButton, {
                                    asChild: true,
                                    isActive: isActive,
                                    tooltip: item.name,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(esm_link/* .Link */.N_, {
                                        to: item.path,
                                        className: "flex items-center gap-2",
                                        children: [
                                            item.icon && /*#__PURE__*/ (0,jsx_runtime.jsx)(item.icon, {}),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: item.name
                                            })
                                        ]
                                    })
                                })
                            }, item.path);
                        })
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/sparkles.mjs
var sparkles = __webpack_require__(35938);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/badge-check.mjs
var badge_check = __webpack_require__(68743);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/credit-card.mjs
var credit_card = __webpack_require__(73143);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bell.mjs
var bell = __webpack_require__(68612);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/log-out.mjs
var log_out = __webpack_require__(30240);
// EXTERNAL MODULE: ./src/components/ui/avatar.tsx
var avatar = __webpack_require__(97984);
// EXTERNAL MODULE: ./src/hooks/use-auth.ts + 1 modules
var use_auth = __webpack_require__(72646);
;// CONCATENATED MODULE: ./src/state/user-icon.svg
const user_icon_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1NzgxZDYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS11c2VyLWljb24gbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+";
;// CONCATENATED MODULE: ./src/components/navigation/nav-user.tsx
"use client";







function NavUser({ user }) {
    const navigate = (0,useNavigate/* .useNavigate */.Z)();
    const { logout } = (0,use_auth/* .useAuth */.A)();
    const handleLogout = async ()=>{
        await logout();
        navigate({
            to: "/login"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenu */.rI, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuTrigger */.ty, {
                asChild: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                    type: "button",
                    className: "flex items-center gap-2 rounded-lg p-1 text-left text-sm outline-none hover:bg-gray-200/90 focus-visible:ring-2 focus-visible:ring-ring",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(avatar/* .Avatar */.eu, {
                            className: "h-8 w-8 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(avatar/* .AvatarImage */.BK, {
                                    src: user.avatar,
                                    alt: user.displayName
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(avatar/* .AvatarFallback */.q5, {
                                    className: "rounded-lg",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: user_icon_namespaceObject,
                                        alt: "",
                                        className: "size-4"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid flex-1 text-left text-sm leading-tight max-md:hidden",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "truncate font-medium",
                                    children: user.displayName
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "truncate text-xs text-muted-foreground",
                                    children: user.email
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(chevrons_up_down/* ["default"] */.A, {
                            className: "ml-auto size-4 text-muted-foreground max-md:hidden"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuContent */.SQ, {
                className: "w-56 rounded-lg",
                align: "end",
                sideOffset: 4,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuLabel */.lp, {
                        className: "p-0 font-normal",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(avatar/* .Avatar */.eu, {
                                    className: "h-8 w-8 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(avatar/* .AvatarImage */.BK, {
                                            src: user.avatar,
                                            alt: user.displayName
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(avatar/* .AvatarFallback */.q5, {
                                            className: "rounded-lg",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                src: user_icon_namespaceObject,
                                                alt: "",
                                                className: "size-4"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid flex-1 text-left text-sm leading-tight",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "truncate font-medium",
                                            children: user.displayName
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "truncate text-xs text-muted-foreground",
                                            children: user.email
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuSeparator */.mB, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuGroup */.I, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuItem */._2, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(sparkles/* ["default"] */.A, {}),
                                "Upgrade to Pro"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuSeparator */.mB, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuGroup */.I, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuItem */._2, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(badge_check/* ["default"] */.A, {}),
                                    "Account"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuItem */._2, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(credit_card/* ["default"] */.A, {}),
                                    "Billing"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuItem */._2, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(bell/* ["default"] */.A, {}),
                                    "Notifications"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* .DropdownMenuSeparator */.mB, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* .DropdownMenuItem */._2, {
                        onClick: handleLogout,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(log_out/* ["default"] */.A, {}),
                            "Log out"
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/layout/app-shell.tsx





function AppShell({ children }) {
    const { user, isAuthenticated } = (0,auth_store/* .useAuthStore */.n)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(SidebarProvider, {
        defaultOpen: false,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AppSidebar, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(SidebarInset, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
                        className: "flex h-12 shrink-0 items-center justify-end gap-2 border-b px-4",
                        children: isAuthenticated && user && /*#__PURE__*/ (0,jsx_runtime.jsx)(NavUser, {
                            user: user
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                        className: "flex-1 flex flex-col",
                        children: children
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/modern/queryClient.js + 2 modules
var queryClient = __webpack_require__(67697);
;// CONCATENATED MODULE: ./src/state/query-client.ts

const query_client_queryClient = new queryClient/* .QueryClient */.E({
    defaultOptions: {
        queries: {
            staleTime: 30000,
            retry: 1,
            refetchOnWindowFocus: false
        },
        mutations: {
            retry: 0
        }
    }
});

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(32462);
;// CONCATENATED MODULE: ./src/routes/__root.tsx








const Route = (0,route/* .createRootRouteWithContext */.hy)()({
    head: ()=>({
            meta: [
                {
                    charSet: "utf-8"
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                },
                {
                    title: "Maple"
                }
            ]
        }),
    component: RootComponent
});
function RootComponent() {
    const matches = (0,Matches/* .useMatches */.FE)();
    const isLoginRoute = matches.some((m)=>m.pathname === "/login");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("head", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HeadContent/* .HeadContent */.Q, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(QueryClientProvider/* .QueryClientProvider */.Ht, {
                        client: query_client_queryClient,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(auth_store/* .AuthProvider */.O, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RequireAuth, {
                                children: isLoginRoute ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Match/* .Outlet */.sv, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Match/* .Outlet */.sv, {})
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Scripts/* .Scripts */.T, {})
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/lazyRouteComponent.js
var lazyRouteComponent = __webpack_require__(91786);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/fileRoute.js
var fileRoute = __webpack_require__(16169);
;// CONCATENATED MODULE: ./src/routes/index.tsx
const $$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(9068), __webpack_require__.e(3815), __webpack_require__.e(9645), __webpack_require__.e(7695)]).then(__webpack_require__.bind(__webpack_require__, 84866));


const routes_Route = (0,fileRoute/* .createFileRoute */.WK)("/")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)($$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/artifacts.tsx
const artifacts_$$splitComponentImporter = ()=>__webpack_require__.e(/* import() */ 8485).then(__webpack_require__.bind(__webpack_require__, 93028));


const artifacts_Route = (0,fileRoute/* .createFileRoute */.WK)("/artifacts")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(artifacts_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/builds.tsx
const builds_$$splitComponentImporter = ()=>__webpack_require__.e(/* import() */ 4909).then(__webpack_require__.bind(__webpack_require__, 57676));


const builds_Route = (0,fileRoute/* .createFileRoute */.WK)("/builds")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(builds_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/cache.tsx
const cache_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(9068), __webpack_require__.e(585), __webpack_require__.e(5872), __webpack_require__.e(9267), __webpack_require__.e(8210), __webpack_require__.e(6392), __webpack_require__.e(3550)]).then(__webpack_require__.bind(__webpack_require__, 28429));


const cache_Route = (0,fileRoute/* .createFileRoute */.WK)("/cache")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(cache_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/credentials.tsx
const credentials_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(9068), __webpack_require__.e(585), __webpack_require__.e(5872), __webpack_require__.e(9267), __webpack_require__.e(8210), __webpack_require__.e(2835)]).then(__webpack_require__.bind(__webpack_require__, 91310));


const credentials_Route = (0,fileRoute/* .createFileRoute */.WK)("/credentials")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(credentials_$$splitComponentImporter, 'component')
});

// EXTERNAL MODULE: ./src/routes/login.tsx
var login = __webpack_require__(97647);
;// CONCATENATED MODULE: ./src/routes/pipelines.tsx
const pipelines_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(585), __webpack_require__.e(5872), __webpack_require__.e(9267), __webpack_require__.e(8210), __webpack_require__.e(6392), __webpack_require__.e(6885), __webpack_require__.e(3629)]).then(__webpack_require__.bind(__webpack_require__, 10188));


const pipelines_Route = (0,fileRoute/* .createFileRoute */.WK)("/pipelines")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(pipelines_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/projects.tsx
const projects_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(4224), __webpack_require__.e(9595), __webpack_require__.e(6618), __webpack_require__.e(3361), __webpack_require__.e(7060), __webpack_require__.e(2512), __webpack_require__.e(5971), __webpack_require__.e(9068), __webpack_require__.e(9645), __webpack_require__.e(3253)]).then(__webpack_require__.bind(__webpack_require__, 87476));


const projects_Route = (0,fileRoute/* .createFileRoute */.WK)("/projects")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(projects_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/releases.tsx
const releases_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(4339), __webpack_require__.e(7562), __webpack_require__.e(6130), __webpack_require__.e(8852)]).then(__webpack_require__.bind(__webpack_require__, 95759));


const releases_Route = (0,fileRoute/* .createFileRoute */.WK)("/releases")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(releases_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/secrets.tsx

const secrets_Route = (0,fileRoute/* .createFileRoute */.WK)("/secrets")({});

;// CONCATENATED MODULE: ./src/routes/settings.tsx
const settings_$$splitComponentImporter = ()=>__webpack_require__.e(/* import() */ 1925).then(__webpack_require__.bind(__webpack_require__, 55300));


const settings_Route = (0,fileRoute/* .createFileRoute */.WK)("/settings")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(settings_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.tsx
const workers_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(9721), __webpack_require__.e(8521)]).then(__webpack_require__.bind(__webpack_require__, 46224));


const workers_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(workers_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/api/health.ts

const health_Route = (0,fileRoute/* .createFileRoute */.WK)("/api/health")({
    server: {
        handlers: {
            GET: async ()=>new Response(JSON.stringify({
                    status: "ok",
                    service: "frontend"
                }), {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
        }
    }
});

;// CONCATENATED MODULE: ./src/routes/artifacts.index.tsx
const artifacts_index_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(2620), __webpack_require__.e(4768), __webpack_require__.e(4224), __webpack_require__.e(4938), __webpack_require__.e(7649), __webpack_require__.e(5737), __webpack_require__.e(458), __webpack_require__.e(7580), __webpack_require__.e(5367), __webpack_require__.e(3873), __webpack_require__.e(9068), __webpack_require__.e(6596), __webpack_require__.e(3595), __webpack_require__.e(7464), __webpack_require__.e(9472), __webpack_require__.e(5537), __webpack_require__.e(6010), __webpack_require__.e(8908)]).then(__webpack_require__.bind(__webpack_require__, 88391));


const artifacts_index_Route = (0,fileRoute/* .createFileRoute */.WK)("/artifacts/")({
    validateSearch: (search)=>{
        return {
            q: typeof search.q === "string" && search.q.length > 0 ? search.q : undefined,
            format: search.format,
            repository: typeof search.repository === "string" && search.repository.length > 0 ? search.repository : undefined,
            groupId: typeof search.groupId === "string" && search.groupId.length > 0 ? search.groupId : undefined,
            artifactId: typeof search.artifactId === "string" && search.artifactId.length > 0 ? search.artifactId : undefined,
            version: typeof search.version === "string" && search.version.length > 0 ? search.version : undefined,
            classifier: typeof search.classifier === "string" && search.classifier.length > 0 ? search.classifier : undefined,
            extension: typeof search.extension === "string" && search.extension.length > 0 ? search.extension : undefined,
            checksum: typeof search.checksum === "string" && search.checksum.length > 0 ? search.checksum : undefined,
            buildId: typeof search.buildId === "string" && search.buildId.length > 0 ? search.buildId : undefined
        };
    },
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(artifacts_index_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/artifacts.$componentId.tsx
const artifacts_$componentId_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(2249), __webpack_require__.e(7691), __webpack_require__.e(5367), __webpack_require__.e(7148), __webpack_require__.e(2000), __webpack_require__.e(2512), __webpack_require__.e(9549), __webpack_require__.e(9068), __webpack_require__.e(3595), __webpack_require__.e(9472), __webpack_require__.e(8317), __webpack_require__.e(6010), __webpack_require__.e(5171)]).then(__webpack_require__.bind(__webpack_require__, 10670));


const artifacts_$componentId_Route = (0,fileRoute/* .createFileRoute */.WK)("/artifacts/$componentId")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(artifacts_$componentId_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/artifacts.settings.tsx
const artifacts_settings_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(2249), __webpack_require__.e(3595), __webpack_require__.e(5852)]).then(__webpack_require__.bind(__webpack_require__, 86199));


const artifacts_settings_Route = (0,fileRoute/* .createFileRoute */.WK)("/artifacts/settings")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(artifacts_settings_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/builds.index.tsx
const builds_index_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(2620), __webpack_require__.e(4768), __webpack_require__.e(4224), __webpack_require__.e(4938), __webpack_require__.e(7649), __webpack_require__.e(4339), __webpack_require__.e(1985), __webpack_require__.e(9850), __webpack_require__.e(7276), __webpack_require__.e(7562), __webpack_require__.e(6962), __webpack_require__.e(9068), __webpack_require__.e(6596), __webpack_require__.e(7464), __webpack_require__.e(3815), __webpack_require__.e(6668), __webpack_require__.e(8593)]).then(__webpack_require__.bind(__webpack_require__, 22776));


const builds_index_Route = (0,fileRoute/* .createFileRoute */.WK)("/builds/")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(builds_index_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/builds.$jobId.tsx

const builds_$jobId_Route = (0,fileRoute/* .createFileRoute */.WK)("/builds/$jobId")({});

// EXTERNAL MODULE: ./src/routes/invite.$invitationId.tsx
var invite_$invitationId = __webpack_require__(76129);
;// CONCATENATED MODULE: ./src/routes/pipelines.$pipelineId.tsx
const pipelines_$pipelineId_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(585), __webpack_require__.e(5872), __webpack_require__.e(9267), __webpack_require__.e(6392), __webpack_require__.e(6885), __webpack_require__.e(6177), __webpack_require__.e(5672)]).then(__webpack_require__.bind(__webpack_require__, 54107));


const pipelines_$pipelineId_Route = (0,fileRoute/* .createFileRoute */.WK)("/pipelines/$pipelineId")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(pipelines_$pipelineId_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/projects.$projectName.tsx

const projects_$projectName_Route = (0,fileRoute/* .createFileRoute */.WK)("/projects/$projectName")({});

;// CONCATENATED MODULE: ./src/routes/releases.index.tsx
const releases_index_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(4768), __webpack_require__.e(4224), __webpack_require__.e(4938), __webpack_require__.e(7649), __webpack_require__.e(9595), __webpack_require__.e(458), __webpack_require__.e(1802), __webpack_require__.e(7580), __webpack_require__.e(3931), __webpack_require__.e(6618), __webpack_require__.e(639), __webpack_require__.e(8169), __webpack_require__.e(2921), __webpack_require__.e(9068), __webpack_require__.e(6596), __webpack_require__.e(3595), __webpack_require__.e(7464), __webpack_require__.e(8786), __webpack_require__.e(8244), __webpack_require__.e(5537), __webpack_require__.e(7687), __webpack_require__.e(2467)]).then(__webpack_require__.bind(__webpack_require__, 5022));


const releases_index_Route = (0,fileRoute/* .createFileRoute */.WK)("/releases/")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(releases_index_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/releases.$releaseName.tsx
const releases_$releaseName_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(2620), __webpack_require__.e(4768), __webpack_require__.e(2249), __webpack_require__.e(4224), __webpack_require__.e(4938), __webpack_require__.e(7649), __webpack_require__.e(5737), __webpack_require__.e(9595), __webpack_require__.e(458), __webpack_require__.e(1802), __webpack_require__.e(7580), __webpack_require__.e(5109), __webpack_require__.e(683), __webpack_require__.e(3024), __webpack_require__.e(8169), __webpack_require__.e(5992), __webpack_require__.e(9068), __webpack_require__.e(6596), __webpack_require__.e(3595), __webpack_require__.e(7464), __webpack_require__.e(8786), __webpack_require__.e(5537), __webpack_require__.e(7687), __webpack_require__.e(4064), __webpack_require__.e(491)]).then(__webpack_require__.bind(__webpack_require__, 28118));


const releases_$releaseName_Route = (0,fileRoute/* .createFileRoute */.WK)("/releases/$releaseName")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(releases_$releaseName_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/releases.artifacts.tsx
const releases_artifacts_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(5872), __webpack_require__.e(4659)]).then(__webpack_require__.bind(__webpack_require__, 37742));


const releases_artifacts_Route = (0,fileRoute/* .createFileRoute */.WK)("/releases/artifacts")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(releases_artifacts_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/releases.calendar.tsx
const releases_calendar_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(4224), __webpack_require__.e(4938), __webpack_require__.e(7649), __webpack_require__.e(7691), __webpack_require__.e(9595), __webpack_require__.e(458), __webpack_require__.e(1802), __webpack_require__.e(6618), __webpack_require__.e(5109), __webpack_require__.e(3024), __webpack_require__.e(2000), __webpack_require__.e(639), __webpack_require__.e(3361), __webpack_require__.e(8591), __webpack_require__.e(3595), __webpack_require__.e(7464), __webpack_require__.e(8786), __webpack_require__.e(8317), __webpack_require__.e(4064), __webpack_require__.e(7835)]).then(__webpack_require__.bind(__webpack_require__, 41926));


const releases_calendar_Route = (0,fileRoute/* .createFileRoute */.WK)("/releases/calendar")({
    validateSearch: (search)=>{
        return {
            year: typeof search.year === "number" ? search.year : typeof search.year === "string" ? Number.parseInt(search.year, 10) : undefined,
            month: typeof search.month === "number" ? search.month : typeof search.month === "string" ? Number.parseInt(search.month, 10) : undefined
        };
    },
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(releases_calendar_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/secrets.index.tsx
const secrets_index_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(4224), __webpack_require__.e(4938), __webpack_require__.e(7691), __webpack_require__.e(5109), __webpack_require__.e(683), __webpack_require__.e(9576), __webpack_require__.e(703), __webpack_require__.e(9068), __webpack_require__.e(585), __webpack_require__.e(8786), __webpack_require__.e(9267), __webpack_require__.e(8210), __webpack_require__.e(8215), __webpack_require__.e(7859)]).then(__webpack_require__.bind(__webpack_require__, 41710));


const secrets_index_Route = (0,fileRoute/* .createFileRoute */.WK)("/secrets/")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(secrets_index_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/secrets.$secretId.tsx
const secrets_$secretId_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(4938), __webpack_require__.e(683), __webpack_require__.e(9576), __webpack_require__.e(9068), __webpack_require__.e(585), __webpack_require__.e(5872), __webpack_require__.e(8786), __webpack_require__.e(9267), __webpack_require__.e(8215), __webpack_require__.e(6177), __webpack_require__.e(524)]).then(__webpack_require__.bind(__webpack_require__, 73735));


const secrets_$secretId_Route = (0,fileRoute/* .createFileRoute */.WK)("/secrets/$secretId")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(secrets_$secretId_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/settings.index.tsx
const settings_index_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(7691), __webpack_require__.e(8327), __webpack_require__.e(9459), __webpack_require__.e(3269), __webpack_require__.e(9932)]).then(__webpack_require__.bind(__webpack_require__, 43815));


const settings_index_Route = (0,fileRoute/* .createFileRoute */.WK)("/settings/")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(settings_index_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/settings.organization.tsx
const settings_organization_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(4938), __webpack_require__.e(7649), __webpack_require__.e(9549), __webpack_require__.e(9459), __webpack_require__.e(6661), __webpack_require__.e(3595), __webpack_require__.e(7464), __webpack_require__.e(9955)]).then(__webpack_require__.bind(__webpack_require__, 87966));


const settings_organization_Route = (0,fileRoute/* .createFileRoute */.WK)("/settings/organization")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(settings_organization_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.builds.tsx

const workers_builds_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/builds")({});

;// CONCATENATED MODULE: ./src/routes/workers.deployments.tsx

const workers_deployments_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/deployments")({});

;// CONCATENATED MODULE: ./src/routes/workers.overview.tsx
const workers_overview_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(8668), __webpack_require__.e(1097), __webpack_require__.e(6486), __webpack_require__.e(7474)]).then(__webpack_require__.bind(__webpack_require__, 68137));


const workers_overview_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/overview")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(workers_overview_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.persistentvolumeclaims.tsx

const workers_persistentvolumeclaims_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/persistentvolumeclaims")({});

;// CONCATENATED MODULE: ./src/routes/workers.pods.tsx

const workers_pods_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/pods")({});

;// CONCATENATED MODULE: ./src/routes/workers.projects.tsx

const workers_projects_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/projects")({});

;// CONCATENATED MODULE: ./src/routes/workers.routes.tsx

const workers_routes_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/routes")({});

;// CONCATENATED MODULE: ./src/routes/workers.services.tsx

const workers_services_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/services")({});

// EXTERNAL MODULE: ./node_modules/better-auth/dist/auth/full.mjs + 98 modules
var full = __webpack_require__(93268);
// EXTERNAL MODULE: ./node_modules/@better-auth/drizzle-adapter/dist/index.mjs + 2 modules
var drizzle_adapter_dist = __webpack_require__(47014);
// EXTERNAL MODULE: ./node_modules/better-auth/dist/integrations/tanstack-start.mjs + 1 modules
var tanstack_start = __webpack_require__(8104);
// EXTERNAL MODULE: ./node_modules/better-auth/dist/plugins/admin/admin.mjs + 3 modules
var admin = __webpack_require__(72372);
// EXTERNAL MODULE: ./node_modules/better-auth/dist/plugins/organization/organization.mjs + 72 modules
var organization = __webpack_require__(23291);
// EXTERNAL MODULE: ./node_modules/better-auth/dist/plugins/jwt/index.mjs + 8 modules
var jwt = __webpack_require__(45556);
// EXTERNAL MODULE: ./node_modules/@better-auth/core/dist/error/index.mjs
var dist_error = __webpack_require__(52420);
// EXTERNAL MODULE: ./node_modules/drizzle-orm/sql/expressions/conditions.js
var conditions = __webpack_require__(79036);
// EXTERNAL MODULE: ./node_modules/dotenv/lib/main.js
var main = __webpack_require__(73376);
// EXTERNAL MODULE: external "node:path"
var external_node_path_ = __webpack_require__(76760);
// EXTERNAL MODULE: external "node:url"
var external_node_url_ = __webpack_require__(73136);
// EXTERNAL MODULE: ./node_modules/drizzle-orm/postgres-js/driver.js + 23 modules
var driver = __webpack_require__(94954);
// EXTERNAL MODULE: ./node_modules/postgres/src/index.js + 9 modules
var src = __webpack_require__(69462);
// EXTERNAL MODULE: ./node_modules/drizzle-orm/sql/sql.js + 1 modules
var sql = __webpack_require__(70342);
// EXTERNAL MODULE: ./node_modules/drizzle-orm/relations.js + 1 modules
var relations = __webpack_require__(40500);
// EXTERNAL MODULE: ./node_modules/drizzle-orm/pg-core/columns/text.js
var columns_text = __webpack_require__(14492);
// EXTERNAL MODULE: ./node_modules/drizzle-orm/pg-core/table.js + 26 modules
var pg_core_table = __webpack_require__(34522);
// EXTERNAL MODULE: ./node_modules/drizzle-orm/pg-core/columns/boolean.js
var columns_boolean = __webpack_require__(55267);
// EXTERNAL MODULE: ./node_modules/drizzle-orm/pg-core/columns/timestamp.js
var timestamp = __webpack_require__(84559);
// EXTERNAL MODULE: ./node_modules/drizzle-orm/pg-core/indexes.js
var indexes = __webpack_require__(56339);
;// CONCATENATED MODULE: ./db/schema.ts


// Platform ids must be UUIDs: every service's tenant/owner columns are
// UUID-typed and JWT subjects flow into them directly. better-auth delegates
// id generation to the database when the adapter reports UUID support, so
// every id column needs a DB default.
const uuidPk = ()=>(0,columns_text/* .text */.Qq)("id").primaryKey().default((0,sql/* .sql */.ll)`gen_random_uuid()::text`);
const schema_user = (0,pg_core_table/* .pgTable */.cJ)("user", {
    id: uuidPk(),
    name: (0,columns_text/* .text */.Qq)("name").notNull(),
    email: (0,columns_text/* .text */.Qq)("email").notNull().unique(),
    emailVerified: (0,columns_boolean/* .boolean */.zM)("email_verified").default(false).notNull(),
    image: (0,columns_text/* .text */.Qq)("image"),
    role: (0,columns_text/* .text */.Qq)("role").default("user").notNull(),
    banned: (0,columns_boolean/* .boolean */.zM)("banned"),
    banReason: (0,columns_text/* .text */.Qq)("ban_reason"),
    banExpires: (0,timestamp/* .timestamp */.vE)("ban_expires"),
    createdAt: (0,timestamp/* .timestamp */.vE)("created_at").defaultNow().notNull(),
    updatedAt: (0,timestamp/* .timestamp */.vE)("updated_at").defaultNow().$onUpdate(()=>/* @__PURE__ */ new Date()).notNull()
});
const jwks = (0,pg_core_table/* .pgTable */.cJ)("jwks", {
    id: uuidPk(),
    publicKey: (0,columns_text/* .text */.Qq)("public_key").notNull(),
    privateKey: (0,columns_text/* .text */.Qq)("private_key").notNull(),
    alg: (0,columns_text/* .text */.Qq)("alg"),
    createdAt: (0,timestamp/* .timestamp */.vE)("created_at").defaultNow().notNull()
});
const schema_session = (0,pg_core_table/* .pgTable */.cJ)("session", {
    id: uuidPk(),
    expiresAt: (0,timestamp/* .timestamp */.vE)("expires_at").notNull(),
    token: (0,columns_text/* .text */.Qq)("token").notNull().unique(),
    createdAt: (0,timestamp/* .timestamp */.vE)("created_at").defaultNow().notNull(),
    updatedAt: (0,timestamp/* .timestamp */.vE)("updated_at").$onUpdate(()=>/* @__PURE__ */ new Date()).notNull(),
    ipAddress: (0,columns_text/* .text */.Qq)("ip_address"),
    userAgent: (0,columns_text/* .text */.Qq)("user_agent"),
    userId: (0,columns_text/* .text */.Qq)("user_id").notNull().references(()=>schema_user.id, {
        onDelete: "cascade"
    }),
    // Organization plugin: the workspace the session is currently acting as.
    // JWT tenant_id = activeOrganizationId ?? user.id.
    activeOrganizationId: (0,columns_text/* .text */.Qq)("active_organization_id")
}, (table)=>[
        (0,indexes/* .index */.Pe)("session_userId_idx").on(table.userId)
    ]);
const account = (0,pg_core_table/* .pgTable */.cJ)("account", {
    id: uuidPk(),
    issuer: (0,columns_text/* .text */.Qq)("issuer").notNull(),
    accountId: (0,columns_text/* .text */.Qq)("account_id").notNull(),
    providerId: (0,columns_text/* .text */.Qq)("provider_id").notNull(),
    userId: (0,columns_text/* .text */.Qq)("user_id").notNull().references(()=>schema_user.id, {
        onDelete: "cascade"
    }),
    accessToken: (0,columns_text/* .text */.Qq)("access_token"),
    refreshToken: (0,columns_text/* .text */.Qq)("refresh_token"),
    idToken: (0,columns_text/* .text */.Qq)("id_token"),
    accessTokenExpiresAt: (0,timestamp/* .timestamp */.vE)("access_token_expires_at"),
    refreshTokenExpiresAt: (0,timestamp/* .timestamp */.vE)("refresh_token_expires_at"),
    scope: (0,columns_text/* .text */.Qq)("scope"),
    password: (0,columns_text/* .text */.Qq)("password"),
    createdAt: (0,timestamp/* .timestamp */.vE)("created_at").defaultNow().notNull(),
    updatedAt: (0,timestamp/* .timestamp */.vE)("updated_at").$onUpdate(()=>/* @__PURE__ */ new Date()).notNull()
}, (table)=>[
        (0,indexes/* .uniqueIndex */.GL)("account_issuer_accountId_uidx").on(table.issuer, table.accountId),
        (0,indexes/* .index */.Pe)("account_userId_idx").on(table.userId)
    ]);
const verification = (0,pg_core_table/* .pgTable */.cJ)("verification", {
    id: uuidPk(),
    identifier: (0,columns_text/* .text */.Qq)("identifier").notNull(),
    value: (0,columns_text/* .text */.Qq)("value").notNull(),
    expiresAt: (0,timestamp/* .timestamp */.vE)("expires_at").notNull(),
    createdAt: (0,timestamp/* .timestamp */.vE)("created_at").defaultNow().notNull(),
    updatedAt: (0,timestamp/* .timestamp */.vE)("updated_at").defaultNow().$onUpdate(()=>/* @__PURE__ */ new Date()).notNull()
}, (table)=>[
        (0,indexes/* .index */.Pe)("verification_identifier_idx").on(table.identifier)
    ]);
const userRelations = (0,relations/* .relations */.K1)(schema_user, ({ many })=>({
        sessions: many(schema_session),
        accounts: many(account),
        members: many(member)
    }));
const sessionRelations = (0,relations/* .relations */.K1)(schema_session, ({ one })=>({
        user: one(schema_user, {
            fields: [
                schema_session.userId
            ],
            references: [
                schema_user.id
            ]
        })
    }));
const accountRelations = (0,relations/* .relations */.K1)(account, ({ one })=>({
        user: one(schema_user, {
            fields: [
                account.userId
            ],
            references: [
                schema_user.id
            ]
        })
    }));
// ---------------------------------------------------------------------------
// Organization plugin tables (better-auth organizations are the source of
// truth for multi-member workspaces; harlie-tenancy mirrors them for
// quotas/usage/plan lifecycle).
// ---------------------------------------------------------------------------
const schema_organization = (0,pg_core_table/* .pgTable */.cJ)("organization", {
    id: uuidPk(),
    name: (0,columns_text/* .text */.Qq)("name").notNull(),
    slug: (0,columns_text/* .text */.Qq)("slug").notNull().unique(),
    logo: (0,columns_text/* .text */.Qq)("logo"),
    metadata: (0,columns_text/* .text */.Qq)("metadata"),
    createdAt: (0,timestamp/* .timestamp */.vE)("created_at").defaultNow().notNull(),
    updatedAt: (0,timestamp/* .timestamp */.vE)("updated_at").defaultNow().$onUpdate(()=>/* @__PURE__ */ new Date()).notNull()
});
const member = (0,pg_core_table/* .pgTable */.cJ)("member", {
    id: uuidPk(),
    organizationId: (0,columns_text/* .text */.Qq)("organization_id").notNull().references(()=>schema_organization.id, {
        onDelete: "cascade"
    }),
    userId: (0,columns_text/* .text */.Qq)("user_id").notNull().references(()=>schema_user.id, {
        onDelete: "cascade"
    }),
    role: (0,columns_text/* .text */.Qq)("role").default("member").notNull(),
    createdAt: (0,timestamp/* .timestamp */.vE)("created_at").defaultNow().notNull()
}, (table)=>[
        (0,indexes/* .index */.Pe)("member_organizationId_idx").on(table.organizationId),
        (0,indexes/* .index */.Pe)("member_userId_idx").on(table.userId)
    ]);
const schema_invitation = (0,pg_core_table/* .pgTable */.cJ)("invitation", {
    id: uuidPk(),
    organizationId: (0,columns_text/* .text */.Qq)("organization_id").notNull().references(()=>schema_organization.id, {
        onDelete: "cascade"
    }),
    email: (0,columns_text/* .text */.Qq)("email").notNull(),
    role: (0,columns_text/* .text */.Qq)("role"),
    status: (0,columns_text/* .text */.Qq)("status").default("pending").notNull(),
    teamId: (0,columns_text/* .text */.Qq)("team_id"),
    inviterId: (0,columns_text/* .text */.Qq)("inviter_id").notNull().references(()=>schema_user.id, {
        onDelete: "cascade"
    }),
    expiresAt: (0,timestamp/* .timestamp */.vE)("expires_at"),
    createdAt: (0,timestamp/* .timestamp */.vE)("created_at").defaultNow().notNull()
}, (table)=>[
        (0,indexes/* .index */.Pe)("invitation_organizationId_idx").on(table.organizationId),
        (0,indexes/* .index */.Pe)("invitation_email_idx").on(table.email)
    ]);
const organizationRelations = (0,relations/* .relations */.K1)(schema_organization, ({ many })=>({
        members: many(member),
        invitations: many(schema_invitation)
    }));
const memberRelations = (0,relations/* .relations */.K1)(member, ({ one })=>({
        organization: one(schema_organization, {
            fields: [
                member.organizationId
            ],
            references: [
                schema_organization.id
            ]
        }),
        user: one(schema_user, {
            fields: [
                member.userId
            ],
            references: [
                schema_user.id
            ]
        })
    }));
const invitationRelations = (0,relations/* .relations */.K1)(schema_invitation, ({ one })=>({
        organization: one(schema_organization, {
            fields: [
                schema_invitation.organizationId
            ],
            references: [
                schema_organization.id
            ]
        }),
        inviter: one(schema_user, {
            fields: [
                schema_invitation.inviterId
            ],
            references: [
                schema_user.id
            ]
        })
    }));

;// CONCATENATED MODULE: ./src/db/index.ts





const here = (0,external_node_path_.dirname)((0,external_node_url_.fileURLToPath)('file:///Users/mark/Maple/frontend/src/db/index.ts'));
// Load the frontend's .env (local dev database), not the repo root .env.
(0,main.config)({
    path: (0,external_node_path_.resolve)(here, "../../.env")
});
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
}

const client = (0,src/* ["default"] */.A)(connectionString);
const db = (0,driver/* .drizzle */.f)(client, {
    schema: schema_namespaceObject
});

;// CONCATENATED MODULE: ./src/lib/tenancy-sync.ts
// Mirror identity-plane facts (personal workspaces, organizations, members)
// to the platform plane (harlie-tenancy). The platform plane owns quotas,
// usage, plans, and suspension; the identity plane owns who exists and who
// belongs where.
//
// Failures throw: a user/org that exists in better-auth but not in tenancy
// breaks the "every tenant is provisioned" invariant, which is worse than a
// failed request.
const TENANCY_URL = process.env.HARLIE_TENANCY_URL ?? "http://127.0.0.1:3003";
const INTERNAL_TOKEN = process.env.HARLIE_TENANCY_INTERNAL_TOKEN ?? "dev-service-token";
async function tenancy_sync_request(path, body) {
    const res = await fetch(`${TENANCY_URL}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${INTERNAL_TOKEN}`
        },
        body: JSON.stringify(body)
    });
    if (!res.ok) {
        const text = await res.text().catch(()=>"");
        throw new Error(`tenancy sync failed (${res.status}) ${path}: ${text.slice(0, 300)}`);
    }
}
async function provisionTenancy(event) {
    // Retry: a transient tenancy outage must not leave a user/org without a
    // platform record ("every identity has a tenant" invariant).
    let lastError;
    for(let attempt = 0; attempt < 3; attempt++){
        try {
            await call(event);
            return;
        } catch (error) {
            lastError = error;
            await new Promise((resolve)=>setTimeout(resolve, 250 * (attempt + 1)));
        }
    }
    throw lastError;
}
async function call(event) {
    switch(event.kind){
        case "personal":
            // Personal workspace: tenant id = user id, no slug (single-user
            // tenants are addressed by id).
            await tenancy_sync_request("/api/internal/tenants", {
                id: event.id,
                display_name: event.name,
                kind: "personal"
            });
            break;
        case "org":
            await tenancy_sync_request("/api/internal/tenants", {
                id: event.id,
                display_name: event.name,
                slug: event.slug,
                kind: "org"
            });
            break;
        case "member":
            await tenancy_sync_request(`/api/internal/tenants/${event.tenantId}/members`, {
                user_id: event.userId,
                role: event.role
            });
            break;
        case "member-removed":
            await tenancy_sync_request(`/api/internal/tenants/${event.tenantId}/members/${event.userId}/remove`, {});
            break;
    }
}

;// CONCATENATED MODULE: ./src/lib/auth.ts









// Bootstrap admin user ids (promoted in the harlie_web user table).
const adminUserIds = (process.env.HARLIE_ADMIN_USER_IDS ?? "zg9K3rXxVxTnPAzrzd0xS6cSObpMUMtk").split(",").map((id)=>id.trim()).filter(Boolean);
const auth = (0,full/* .betterAuth */.l)({
    baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:5173",
    trustedOrigins: [
        process.env.BETTER_AUTH_URL,
        "http://localhost:5173",
        "http://localhost:8080"
    ].filter((o)=>!!o),
    basePath: "/api/session",
    advanced: {
        cookiePrefix: "harlie",
        database: {
            // Platform ids must be UUIDs: every service's tenant/owner columns
            // are UUID-typed and JWT subjects flow into them directly.
            generateId: "uuid"
        }
    },
    database: (0,drizzle_adapter_dist/* .drizzleAdapter */.y)(db, {
        provider: "pg"
    }),
    emailAndPassword: {
        enabled: true,
        // Hard-off knob for account creation (deploy with "false"; flip to
        // "true" to close even allowlisted signups). The allowlist below is
        // the standing closed-beta policy.
        disableSignUp: process.env.HARLIE_DISABLE_SIGNUP === "true"
    },
    databaseHooks: {
        // Every identity must be a personal tenant or an org: mirror to the
        // platform plane (harlie-tenancy) so quotas/usage/suspension apply.
        // NOTE: organization/member lifecycle does NOT go through
        // databaseHooks (the organization plugin writes via its own adapter,
        // bypassing model hooks) — see the endpoint hooks below.
        user: {
            create: {
                after: async (user)=>{
                    await provisionTenancy({
                        kind: "personal",
                        id: user.id,
                        name: user.name || user.email
                    });
                }
            }
        }
    },
    hooks: {
        before: async (rawCtx)=>{
            // Closed-beta signup policy: only allowlisted emails may create
            // accounts. Enforced server-side (the UI cannot bypass it).
            // HARLIE_SIGNUP_ALLOWLIST: comma-separated emails; empty/unset
            // rejects everyone. Returning nothing passes the request through.
            const ctx = rawCtx;
            if (ctx.path !== "/sign-up/email") return;
            const allowlist = (process.env.HARLIE_SIGNUP_ALLOWLIST ?? "").split(",").map((e)=>e.trim().toLowerCase()).filter(Boolean);
            const email = String(ctx.body?.email ?? "").trim().toLowerCase();
            if (!allowlist.includes(email)) {
                throw new dist_error/* .APIError */.LG("FORBIDDEN", {
                    message: "Signups are currently closed"
                });
            }
        },
        after: async (rawCtx)=>{
            // Org creation → provision the platform tenant record. The
            // creator becomes owner in better-auth's member table (the
            // source of truth for membership); tenancy tracks only the
            // platform record. NOTE: this must be an endpoint hook — the
            // organization plugin bypasses databaseHooks model hooks.
            // The runtime context carries `path` and `context.returned`
            // (better-auth dispatch), but the published MiddlewareInputContext
            // type omits them, hence the local shape. Dispatch always merges
            // the returned `headers`, so never return bare undefined.
            const ok = {
                headers: new Headers()
            };
            const ctx = rawCtx;
            console.log(`[hook] after ctx.path=${ctx.path ?? "<none>"}`);
            if (!ctx.path?.includes("/organization/create")) return ok;
            const returned = ctx.context?.returned;
            if (!returned) return ok;
            const org = returned instanceof Response ? await returned.clone().json().catch(()=>null) : returned;
            if (!org?.id) return ok;
            await provisionTenancy({
                kind: "org",
                id: org.id,
                name: org.name ?? org.slug ?? "organization",
                slug: org.slug ?? ""
            });
            return ok;
        }
    },
    plugins: [
        (0,admin/* .admin */.w)({
            adminUserIds
        }),
        (0,organization/* .organization */.k)({
            // Invitations are sent out-of-band (the UI shows the invitation
            // link); email sending is not configured.
            sendInvitationEmail: async ({ invitation, organization: org })=>{
                console.log(`[invitation] ${invitation.email} invited to ${org.name} (${invitation.id})`);
            }
        }),
        (0,jwt/* .jwt */.a)({
            jwks: {
                keyPairConfig: {
                    alg: "RS256"
                },
                jwksPath: "/.well-known/jwks.json"
            },
            jwt: {
                issuer: "harlie-identity",
                expirationTime: "15m",
                definePayload: async ({ user, session })=>{
                    // Tenant scope: the active organization when the session
                    // is acting as one, otherwise the user's personal tenant.
                    // sub always stays the user id (actor identity).
                    const activeOrgId = session.activeOrganizationId ?? null;
                    let orgRole = null;
                    if (activeOrgId) {
                        const rows = await db.select({
                            role: member.role
                        }).from(member).where((0,conditions/* .and */.Uo)((0,conditions.eq)(member.organizationId, activeOrgId), (0,conditions.eq)(member.userId, user.id))).limit(1);
                        orgRole = rows[0]?.role ?? null;
                    }
                    return {
                        email: user.email,
                        role: user.role ?? "user",
                        tenant_id: activeOrgId ?? user.id,
                        // "personal" when acting on the user's own workspace;
                        // the org member role (owner/admin/member) otherwise.
                        org_role: activeOrgId ? orgRole ?? "member" : "personal"
                    };
                }
            }
        }),
        (0,tanstack_start/* .tanstackStartCookies */.b)()
    ]
});

;// CONCATENATED MODULE: ./src/routes/api/session/$.ts


const $_Route = (0,fileRoute/* .createFileRoute */.WK)("/api/session/$")({
    server: {
        handlers: {
            GET: async ({ request })=>await auth.handler(request),
            POST: async ({ request })=>await auth.handler(request)
        }
    }
});

;// CONCATENATED MODULE: ./src/routes/builds.$jobId.index.tsx
const builds_$jobId_index_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(2620), __webpack_require__.e(4768), __webpack_require__.e(2249), __webpack_require__.e(5737), __webpack_require__.e(1985), __webpack_require__.e(9850), __webpack_require__.e(3931), __webpack_require__.e(7276), __webpack_require__.e(8327), __webpack_require__.e(7827), __webpack_require__.e(9068), __webpack_require__.e(6596), __webpack_require__.e(3815), __webpack_require__.e(6668), __webpack_require__.e(8244), __webpack_require__.e(1158), __webpack_require__.e(1627)]).then(__webpack_require__.bind(__webpack_require__, 57638));


const builds_$jobId_index_Route = (0,fileRoute/* .createFileRoute */.WK)("/builds/$jobId/")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(builds_$jobId_index_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/projects.$projectName.index.tsx
const projects_$projectName_index_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(4224), __webpack_require__.e(4938), __webpack_require__.e(4339), __webpack_require__.e(9850), __webpack_require__.e(7148), __webpack_require__.e(7060), __webpack_require__.e(4897), __webpack_require__.e(3984), __webpack_require__.e(9068), __webpack_require__.e(585), __webpack_require__.e(8786), __webpack_require__.e(9645), __webpack_require__.e(6420)]).then(__webpack_require__.bind(__webpack_require__, 90975));



const tabs = (/* unused pure expression or super */ null && ([
    {
        id: "code",
        label: "Code",
        icon: BookOpen
    },
    {
        id: "issues",
        label: "Issues",
        icon: Bug
    },
    {
        id: "pulls",
        label: "Pull Requests",
        icon: GitPullRequest
    },
    {
        id: "builds",
        label: "Builds",
        icon: Play
    },
    {
        id: "settings",
        label: "Settings",
        icon: Settings
    }
]));
const projects_$projectName_index_Route = (0,fileRoute/* .createFileRoute */.WK)("/projects/$projectName/")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(projects_$projectName_index_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/projects.$projectName.branches.tsx
const projects_$projectName_branches_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(4224), __webpack_require__.e(4938), __webpack_require__.e(4339), __webpack_require__.e(1427), __webpack_require__.e(7036)]).then(__webpack_require__.bind(__webpack_require__, 76407));


const projects_$projectName_branches_Route = (0,fileRoute/* .createFileRoute */.WK)("/projects/$projectName/branches")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(projects_$projectName_branches_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/projects.$projectName.tags.tsx
const projects_$projectName_tags_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(2620), __webpack_require__.e(4224), __webpack_require__.e(1427), __webpack_require__.e(4897), __webpack_require__.e(7209)]).then(__webpack_require__.bind(__webpack_require__, 7040));


const projects_$projectName_tags_Route = (0,fileRoute/* .createFileRoute */.WK)("/projects/$projectName/tags")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(projects_$projectName_tags_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.builds.index.tsx
const workers_builds_index_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(4768), __webpack_require__.e(1097), __webpack_require__.e(6596), __webpack_require__.e(4777), __webpack_require__.e(3304)]).then(__webpack_require__.bind(__webpack_require__, 77323));


const workers_builds_index_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/builds/")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(workers_builds_index_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.builds.$buildName.tsx
const workers_builds_$buildName_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(2620), __webpack_require__.e(2249), __webpack_require__.e(4075), __webpack_require__.e(1097), __webpack_require__.e(6486), __webpack_require__.e(1784), __webpack_require__.e(4838), __webpack_require__.e(8885)]).then(__webpack_require__.bind(__webpack_require__, 46484));


const workers_builds_$buildName_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/builds/$buildName")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(workers_builds_$buildName_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.deployments.index.tsx
const workers_deployments_index_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(4768), __webpack_require__.e(1097), __webpack_require__.e(6596), __webpack_require__.e(4777), __webpack_require__.e(7493)]).then(__webpack_require__.bind(__webpack_require__, 6468));


const workers_deployments_index_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/deployments/")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(workers_deployments_index_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.deployments.$deploymentName.tsx
const workers_deployments_$deploymentName_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(2620), __webpack_require__.e(2249), __webpack_require__.e(4075), __webpack_require__.e(5737), __webpack_require__.e(3954), __webpack_require__.e(1097), __webpack_require__.e(6486), __webpack_require__.e(1784), __webpack_require__.e(4838), __webpack_require__.e(41)]).then(__webpack_require__.bind(__webpack_require__, 41408));


const workers_deployments_$deploymentName_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/deployments/$deploymentName")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(workers_deployments_$deploymentName_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.persistentvolumeclaims.index.tsx
const workers_persistentvolumeclaims_index_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(4768), __webpack_require__.e(1097), __webpack_require__.e(6596), __webpack_require__.e(4777), __webpack_require__.e(6531)]).then(__webpack_require__.bind(__webpack_require__, 30350));


const workers_persistentvolumeclaims_index_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/persistentvolumeclaims/")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(workers_persistentvolumeclaims_index_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.persistentvolumeclaims.$claimName.tsx
const workers_persistentvolumeclaims_$claimName_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(2620), __webpack_require__.e(2249), __webpack_require__.e(4075), __webpack_require__.e(1097), __webpack_require__.e(6486), __webpack_require__.e(1784), __webpack_require__.e(4838), __webpack_require__.e(2872)]).then(__webpack_require__.bind(__webpack_require__, 25659));


const workers_persistentvolumeclaims_$claimName_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/persistentvolumeclaims/$claimName")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(workers_persistentvolumeclaims_$claimName_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.pods.index.tsx
const workers_pods_index_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(4768), __webpack_require__.e(1097), __webpack_require__.e(6596), __webpack_require__.e(4777), __webpack_require__.e(3081)]).then(__webpack_require__.bind(__webpack_require__, 94832));


const workers_pods_index_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/pods/")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(workers_pods_index_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.pods.$podName.tsx
const workers_pods_$podName_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(2620), __webpack_require__.e(2249), __webpack_require__.e(4075), __webpack_require__.e(7691), __webpack_require__.e(5737), __webpack_require__.e(1097), __webpack_require__.e(6486), __webpack_require__.e(1784), __webpack_require__.e(4838), __webpack_require__.e(7097)]).then(__webpack_require__.bind(__webpack_require__, 92992));


const workers_pods_$podName_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/pods/$podName")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(workers_pods_$podName_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.projects.index.tsx
const workers_projects_index_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(4768), __webpack_require__.e(1097), __webpack_require__.e(6596), __webpack_require__.e(4777), __webpack_require__.e(6115)]).then(__webpack_require__.bind(__webpack_require__, 47470));


const workers_projects_index_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/projects/")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(workers_projects_index_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.projects.$projectName.tsx
const workers_projects_$projectName_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(2620), __webpack_require__.e(2249), __webpack_require__.e(4075), __webpack_require__.e(1097), __webpack_require__.e(6486), __webpack_require__.e(1784), __webpack_require__.e(9265)]).then(__webpack_require__.bind(__webpack_require__, 88136));


const workers_projects_$projectName_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/projects/$projectName")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(workers_projects_$projectName_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.routes.index.tsx
const workers_routes_index_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(4768), __webpack_require__.e(1097), __webpack_require__.e(6596), __webpack_require__.e(4777), __webpack_require__.e(2163)]).then(__webpack_require__.bind(__webpack_require__, 7550));


const workers_routes_index_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/routes/")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(workers_routes_index_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.routes.$routeName.tsx
const workers_routes_$routeName_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(2620), __webpack_require__.e(2249), __webpack_require__.e(4075), __webpack_require__.e(1097), __webpack_require__.e(6486), __webpack_require__.e(1784), __webpack_require__.e(4838), __webpack_require__.e(6353)]).then(__webpack_require__.bind(__webpack_require__, 22712));


const workers_routes_$routeName_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/routes/$routeName")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(workers_routes_$routeName_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.services.index.tsx
const workers_services_index_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(4768), __webpack_require__.e(1097), __webpack_require__.e(6596), __webpack_require__.e(4777), __webpack_require__.e(6933)]).then(__webpack_require__.bind(__webpack_require__, 92004));


const workers_services_index_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/services/")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(workers_services_index_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/workers.services.$serviceName.tsx
const workers_services_$serviceName_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(2620), __webpack_require__.e(2249), __webpack_require__.e(4075), __webpack_require__.e(1097), __webpack_require__.e(6486), __webpack_require__.e(1784), __webpack_require__.e(4838), __webpack_require__.e(4581)]).then(__webpack_require__.bind(__webpack_require__, 37748));


const workers_services_$serviceName_Route = (0,fileRoute/* .createFileRoute */.WK)("/workers/services/$serviceName")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(workers_services_$serviceName_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routes/builds.$jobId.builds.$buildId.tsx
const builds_$jobId_builds_$buildId_$$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(2620), __webpack_require__.e(2249), __webpack_require__.e(1985), __webpack_require__.e(9850), __webpack_require__.e(3931), __webpack_require__.e(7276), __webpack_require__.e(5367), __webpack_require__.e(1427), __webpack_require__.e(7562), __webpack_require__.e(7148), __webpack_require__.e(8327), __webpack_require__.e(9611), __webpack_require__.e(9068), __webpack_require__.e(6486), __webpack_require__.e(3815), __webpack_require__.e(9472), __webpack_require__.e(6668), __webpack_require__.e(8244), __webpack_require__.e(1158), __webpack_require__.e(3685)]).then(__webpack_require__.bind(__webpack_require__, 2196));


const builds_$jobId_builds_$buildId_Route = (0,fileRoute/* .createFileRoute */.WK)("/builds/$jobId/builds/$buildId")({
    component: (0,lazyRouteComponent/* .lazyRouteComponent */.Z)(builds_$jobId_builds_$buildId_$$splitComponentImporter, 'component')
});

;// CONCATENATED MODULE: ./src/routeTree.gen.ts
/* eslint-disable */ // @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.


























































const IndexRoute = routes_Route.update({
    id: '/',
    path: '/',
    getParentRoute: ()=>Route
});
const ArtifactsRoute = artifacts_Route.update({
    id: '/artifacts',
    path: '/artifacts',
    getParentRoute: ()=>Route
});
const BuildsRoute = builds_Route.update({
    id: '/builds',
    path: '/builds',
    getParentRoute: ()=>Route
});
const CacheRoute = cache_Route.update({
    id: '/cache',
    path: '/cache',
    getParentRoute: ()=>Route
});
const CredentialsRoute = credentials_Route.update({
    id: '/credentials',
    path: '/credentials',
    getParentRoute: ()=>Route
});
const LoginRoute = login/* .Route.update */.q.update({
    id: '/login',
    path: '/login',
    getParentRoute: ()=>Route
});
const PipelinesRoute = pipelines_Route.update({
    id: '/pipelines',
    path: '/pipelines',
    getParentRoute: ()=>Route
});
const ProjectsRoute = projects_Route.update({
    id: '/projects',
    path: '/projects',
    getParentRoute: ()=>Route
});
const ReleasesRoute = releases_Route.update({
    id: '/releases',
    path: '/releases',
    getParentRoute: ()=>Route
});
const SecretsRoute = secrets_Route.update({
    id: '/secrets',
    path: '/secrets',
    getParentRoute: ()=>Route
});
const SettingsRoute = settings_Route.update({
    id: '/settings',
    path: '/settings',
    getParentRoute: ()=>Route
});
const WorkersRoute = workers_Route.update({
    id: '/workers',
    path: '/workers',
    getParentRoute: ()=>Route
});
const ApiHealthRoute = health_Route.update({
    id: '/api/health',
    path: '/api/health',
    getParentRoute: ()=>Route
});
const ArtifactsIndexRoute = artifacts_index_Route.update({
    id: '/',
    path: '/',
    getParentRoute: ()=>ArtifactsRoute
});
const ArtifactsComponentIdRoute = artifacts_$componentId_Route.update({
    id: '/$componentId',
    path: '/$componentId',
    getParentRoute: ()=>ArtifactsRoute
});
const ArtifactsSettingsRoute = artifacts_settings_Route.update({
    id: '/settings',
    path: '/settings',
    getParentRoute: ()=>ArtifactsRoute
});
const BuildsIndexRoute = builds_index_Route.update({
    id: '/',
    path: '/',
    getParentRoute: ()=>BuildsRoute
});
const BuildsJobIdRoute = builds_$jobId_Route.update({
    id: '/$jobId',
    path: '/$jobId',
    getParentRoute: ()=>BuildsRoute
});
const InviteInvitationIdRoute = invite_$invitationId/* .Route.update */.q.update({
    id: '/invite/$invitationId',
    path: '/invite/$invitationId',
    getParentRoute: ()=>Route
});
const PipelinesPipelineIdRoute = pipelines_$pipelineId_Route.update({
    id: '/$pipelineId',
    path: '/$pipelineId',
    getParentRoute: ()=>PipelinesRoute
});
const ProjectsProjectNameRoute = projects_$projectName_Route.update({
    id: '/$projectName',
    path: '/$projectName',
    getParentRoute: ()=>ProjectsRoute
});
const ReleasesIndexRoute = releases_index_Route.update({
    id: '/',
    path: '/',
    getParentRoute: ()=>ReleasesRoute
});
const ReleasesReleaseNameRoute = releases_$releaseName_Route.update({
    id: '/$releaseName',
    path: '/$releaseName',
    getParentRoute: ()=>ReleasesRoute
});
const ReleasesArtifactsRoute = releases_artifacts_Route.update({
    id: '/artifacts',
    path: '/artifacts',
    getParentRoute: ()=>ReleasesRoute
});
const ReleasesCalendarRoute = releases_calendar_Route.update({
    id: '/calendar',
    path: '/calendar',
    getParentRoute: ()=>ReleasesRoute
});
const SecretsIndexRoute = secrets_index_Route.update({
    id: '/',
    path: '/',
    getParentRoute: ()=>SecretsRoute
});
const SecretsSecretIdRoute = secrets_$secretId_Route.update({
    id: '/$secretId',
    path: '/$secretId',
    getParentRoute: ()=>SecretsRoute
});
const SettingsIndexRoute = settings_index_Route.update({
    id: '/',
    path: '/',
    getParentRoute: ()=>SettingsRoute
});
const SettingsOrganizationRoute = settings_organization_Route.update({
    id: '/organization',
    path: '/organization',
    getParentRoute: ()=>SettingsRoute
});
const WorkersBuildsRoute = workers_builds_Route.update({
    id: '/builds',
    path: '/builds',
    getParentRoute: ()=>WorkersRoute
});
const WorkersDeploymentsRoute = workers_deployments_Route.update({
    id: '/deployments',
    path: '/deployments',
    getParentRoute: ()=>WorkersRoute
});
const WorkersOverviewRoute = workers_overview_Route.update({
    id: '/overview',
    path: '/overview',
    getParentRoute: ()=>WorkersRoute
});
const WorkersPersistentvolumeclaimsRoute = workers_persistentvolumeclaims_Route.update({
    id: '/persistentvolumeclaims',
    path: '/persistentvolumeclaims',
    getParentRoute: ()=>WorkersRoute
});
const WorkersPodsRoute = workers_pods_Route.update({
    id: '/pods',
    path: '/pods',
    getParentRoute: ()=>WorkersRoute
});
const WorkersProjectsRoute = workers_projects_Route.update({
    id: '/projects',
    path: '/projects',
    getParentRoute: ()=>WorkersRoute
});
const WorkersRoutesRoute = workers_routes_Route.update({
    id: '/routes',
    path: '/routes',
    getParentRoute: ()=>WorkersRoute
});
const WorkersServicesRoute = workers_services_Route.update({
    id: '/services',
    path: '/services',
    getParentRoute: ()=>WorkersRoute
});
const ApiSessionSplatRoute = $_Route.update({
    id: '/api/session/$',
    path: '/api/session/$',
    getParentRoute: ()=>Route
});
const BuildsJobIdIndexRoute = builds_$jobId_index_Route.update({
    id: '/',
    path: '/',
    getParentRoute: ()=>BuildsJobIdRoute
});
const ProjectsProjectNameIndexRoute = projects_$projectName_index_Route.update({
    id: '/',
    path: '/',
    getParentRoute: ()=>ProjectsProjectNameRoute
});
const ProjectsProjectNameBranchesRoute = projects_$projectName_branches_Route.update({
    id: '/branches',
    path: '/branches',
    getParentRoute: ()=>ProjectsProjectNameRoute
});
const ProjectsProjectNameTagsRoute = projects_$projectName_tags_Route.update({
    id: '/tags',
    path: '/tags',
    getParentRoute: ()=>ProjectsProjectNameRoute
});
const WorkersBuildsIndexRoute = workers_builds_index_Route.update({
    id: '/',
    path: '/',
    getParentRoute: ()=>WorkersBuildsRoute
});
const WorkersBuildsBuildNameRoute = workers_builds_$buildName_Route.update({
    id: '/$buildName',
    path: '/$buildName',
    getParentRoute: ()=>WorkersBuildsRoute
});
const WorkersDeploymentsIndexRoute = workers_deployments_index_Route.update({
    id: '/',
    path: '/',
    getParentRoute: ()=>WorkersDeploymentsRoute
});
const WorkersDeploymentsDeploymentNameRoute = workers_deployments_$deploymentName_Route.update({
    id: '/$deploymentName',
    path: '/$deploymentName',
    getParentRoute: ()=>WorkersDeploymentsRoute
});
const WorkersPersistentvolumeclaimsIndexRoute = workers_persistentvolumeclaims_index_Route.update({
    id: '/',
    path: '/',
    getParentRoute: ()=>WorkersPersistentvolumeclaimsRoute
});
const WorkersPersistentvolumeclaimsClaimNameRoute = workers_persistentvolumeclaims_$claimName_Route.update({
    id: '/$claimName',
    path: '/$claimName',
    getParentRoute: ()=>WorkersPersistentvolumeclaimsRoute
});
const WorkersPodsIndexRoute = workers_pods_index_Route.update({
    id: '/',
    path: '/',
    getParentRoute: ()=>WorkersPodsRoute
});
const WorkersPodsPodNameRoute = workers_pods_$podName_Route.update({
    id: '/$podName',
    path: '/$podName',
    getParentRoute: ()=>WorkersPodsRoute
});
const WorkersProjectsIndexRoute = workers_projects_index_Route.update({
    id: '/',
    path: '/',
    getParentRoute: ()=>WorkersProjectsRoute
});
const WorkersProjectsProjectNameRoute = workers_projects_$projectName_Route.update({
    id: '/$projectName',
    path: '/$projectName',
    getParentRoute: ()=>WorkersProjectsRoute
});
const WorkersRoutesIndexRoute = workers_routes_index_Route.update({
    id: '/',
    path: '/',
    getParentRoute: ()=>WorkersRoutesRoute
});
const WorkersRoutesRouteNameRoute = workers_routes_$routeName_Route.update({
    id: '/$routeName',
    path: '/$routeName',
    getParentRoute: ()=>WorkersRoutesRoute
});
const WorkersServicesIndexRoute = workers_services_index_Route.update({
    id: '/',
    path: '/',
    getParentRoute: ()=>WorkersServicesRoute
});
const WorkersServicesServiceNameRoute = workers_services_$serviceName_Route.update({
    id: '/$serviceName',
    path: '/$serviceName',
    getParentRoute: ()=>WorkersServicesRoute
});
const BuildsJobIdBuildsBuildIdRoute = builds_$jobId_builds_$buildId_Route.update({
    id: '/builds/$buildId',
    path: '/builds/$buildId',
    getParentRoute: ()=>BuildsJobIdRoute
});
const ArtifactsRouteChildren = {
    ArtifactsComponentIdRoute: ArtifactsComponentIdRoute,
    ArtifactsSettingsRoute: ArtifactsSettingsRoute,
    ArtifactsIndexRoute: ArtifactsIndexRoute
};
const ArtifactsRouteWithChildren = ArtifactsRoute._addFileChildren(ArtifactsRouteChildren);
const BuildsJobIdRouteChildren = {
    BuildsJobIdIndexRoute: BuildsJobIdIndexRoute,
    BuildsJobIdBuildsBuildIdRoute: BuildsJobIdBuildsBuildIdRoute
};
const BuildsJobIdRouteWithChildren = BuildsJobIdRoute._addFileChildren(BuildsJobIdRouteChildren);
const BuildsRouteChildren = {
    BuildsJobIdRoute: BuildsJobIdRouteWithChildren,
    BuildsIndexRoute: BuildsIndexRoute
};
const BuildsRouteWithChildren = BuildsRoute._addFileChildren(BuildsRouteChildren);
const PipelinesRouteChildren = {
    PipelinesPipelineIdRoute: PipelinesPipelineIdRoute
};
const PipelinesRouteWithChildren = PipelinesRoute._addFileChildren(PipelinesRouteChildren);
const ProjectsProjectNameRouteChildren = {
    ProjectsProjectNameBranchesRoute: ProjectsProjectNameBranchesRoute,
    ProjectsProjectNameTagsRoute: ProjectsProjectNameTagsRoute,
    ProjectsProjectNameIndexRoute: ProjectsProjectNameIndexRoute
};
const ProjectsProjectNameRouteWithChildren = ProjectsProjectNameRoute._addFileChildren(ProjectsProjectNameRouteChildren);
const ProjectsRouteChildren = {
    ProjectsProjectNameRoute: ProjectsProjectNameRouteWithChildren
};
const ProjectsRouteWithChildren = ProjectsRoute._addFileChildren(ProjectsRouteChildren);
const ReleasesRouteChildren = {
    ReleasesReleaseNameRoute: ReleasesReleaseNameRoute,
    ReleasesArtifactsRoute: ReleasesArtifactsRoute,
    ReleasesCalendarRoute: ReleasesCalendarRoute,
    ReleasesIndexRoute: ReleasesIndexRoute
};
const ReleasesRouteWithChildren = ReleasesRoute._addFileChildren(ReleasesRouteChildren);
const SecretsRouteChildren = {
    SecretsSecretIdRoute: SecretsSecretIdRoute,
    SecretsIndexRoute: SecretsIndexRoute
};
const SecretsRouteWithChildren = SecretsRoute._addFileChildren(SecretsRouteChildren);
const SettingsRouteChildren = {
    SettingsOrganizationRoute: SettingsOrganizationRoute,
    SettingsIndexRoute: SettingsIndexRoute
};
const SettingsRouteWithChildren = SettingsRoute._addFileChildren(SettingsRouteChildren);
const WorkersBuildsRouteChildren = {
    WorkersBuildsBuildNameRoute: WorkersBuildsBuildNameRoute,
    WorkersBuildsIndexRoute: WorkersBuildsIndexRoute
};
const WorkersBuildsRouteWithChildren = WorkersBuildsRoute._addFileChildren(WorkersBuildsRouteChildren);
const WorkersDeploymentsRouteChildren = {
    WorkersDeploymentsDeploymentNameRoute: WorkersDeploymentsDeploymentNameRoute,
    WorkersDeploymentsIndexRoute: WorkersDeploymentsIndexRoute
};
const WorkersDeploymentsRouteWithChildren = WorkersDeploymentsRoute._addFileChildren(WorkersDeploymentsRouteChildren);
const WorkersPersistentvolumeclaimsRouteChildren = {
    WorkersPersistentvolumeclaimsClaimNameRoute: WorkersPersistentvolumeclaimsClaimNameRoute,
    WorkersPersistentvolumeclaimsIndexRoute: WorkersPersistentvolumeclaimsIndexRoute
};
const WorkersPersistentvolumeclaimsRouteWithChildren = WorkersPersistentvolumeclaimsRoute._addFileChildren(WorkersPersistentvolumeclaimsRouteChildren);
const WorkersPodsRouteChildren = {
    WorkersPodsPodNameRoute: WorkersPodsPodNameRoute,
    WorkersPodsIndexRoute: WorkersPodsIndexRoute
};
const WorkersPodsRouteWithChildren = WorkersPodsRoute._addFileChildren(WorkersPodsRouteChildren);
const WorkersProjectsRouteChildren = {
    WorkersProjectsProjectNameRoute: WorkersProjectsProjectNameRoute,
    WorkersProjectsIndexRoute: WorkersProjectsIndexRoute
};
const WorkersProjectsRouteWithChildren = WorkersProjectsRoute._addFileChildren(WorkersProjectsRouteChildren);
const WorkersRoutesRouteChildren = {
    WorkersRoutesRouteNameRoute: WorkersRoutesRouteNameRoute,
    WorkersRoutesIndexRoute: WorkersRoutesIndexRoute
};
const WorkersRoutesRouteWithChildren = WorkersRoutesRoute._addFileChildren(WorkersRoutesRouteChildren);
const WorkersServicesRouteChildren = {
    WorkersServicesServiceNameRoute: WorkersServicesServiceNameRoute,
    WorkersServicesIndexRoute: WorkersServicesIndexRoute
};
const WorkersServicesRouteWithChildren = WorkersServicesRoute._addFileChildren(WorkersServicesRouteChildren);
const WorkersRouteChildren = {
    WorkersBuildsRoute: WorkersBuildsRouteWithChildren,
    WorkersDeploymentsRoute: WorkersDeploymentsRouteWithChildren,
    WorkersOverviewRoute: WorkersOverviewRoute,
    WorkersPersistentvolumeclaimsRoute: WorkersPersistentvolumeclaimsRouteWithChildren,
    WorkersPodsRoute: WorkersPodsRouteWithChildren,
    WorkersProjectsRoute: WorkersProjectsRouteWithChildren,
    WorkersRoutesRoute: WorkersRoutesRouteWithChildren,
    WorkersServicesRoute: WorkersServicesRouteWithChildren
};
const WorkersRouteWithChildren = WorkersRoute._addFileChildren(WorkersRouteChildren);
const rootRouteChildren = {
    IndexRoute: IndexRoute,
    ArtifactsRoute: ArtifactsRouteWithChildren,
    BuildsRoute: BuildsRouteWithChildren,
    CacheRoute: CacheRoute,
    CredentialsRoute: CredentialsRoute,
    LoginRoute: LoginRoute,
    PipelinesRoute: PipelinesRouteWithChildren,
    ProjectsRoute: ProjectsRouteWithChildren,
    ReleasesRoute: ReleasesRouteWithChildren,
    SecretsRoute: SecretsRouteWithChildren,
    SettingsRoute: SettingsRouteWithChildren,
    WorkersRoute: WorkersRouteWithChildren,
    ApiHealthRoute: ApiHealthRoute,
    InviteInvitationIdRoute: InviteInvitationIdRoute,
    ApiSessionSplatRoute: ApiSessionSplatRoute
};
const routeTree = Route._addFileChildren(rootRouteChildren)._addFileTypes();

;// CONCATENATED MODULE: ./src/router.tsx



function getRouter() {
    const router = (0,esm_router/* .createRouter */.a)({
        routeTree: routeTree,
        context: {
            queryClient: query_client_queryClient
        },
        defaultPreload: "intent",
        scrollRestoration: true
    });
    return router;
}


},
76129(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var _tanstack_react_router__rspack_import_1 = __webpack_require__(91786);
/* import */ var _tanstack_react_router__rspack_import_0 = __webpack_require__(16169);
const $$splitComponentImporter = ()=>Promise.all(/* import() */ [__webpack_require__.e(1985), __webpack_require__.e(4093), __webpack_require__.e(8753)]).then(__webpack_require__.bind(__webpack_require__, 9176));


const Route = (0,_tanstack_react_router__rspack_import_0/* .createFileRoute */.WK)("/invite/$invitationId")({
    validateSearch: (search)=>({
            redirect: typeof search.redirect === "string" ? search.redirect : undefined
        }),
    component: (0,_tanstack_react_router__rspack_import_1/* .lazyRouteComponent */.Z)($$splitComponentImporter, 'component')
});

__webpack_require__.d(__webpack_exports__, {
}, {
  q: Route
});


},
97647(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var _tanstack_react_router__rspack_import_1 = __webpack_require__(91786);
/* import */ var _tanstack_react_router__rspack_import_0 = __webpack_require__(16169);
const $$splitComponentImporter = ()=>__webpack_require__.e(/* import() */ 9067).then(__webpack_require__.bind(__webpack_require__, 9638));


const Route = (0,_tanstack_react_router__rspack_import_0/* .createFileRoute */.WK)("/login")({
    validateSearch: (search)=>({
            redirect: typeof search.redirect === "string" ? search.redirect : undefined
        }),
    component: (0,_tanstack_react_router__rspack_import_1/* .lazyRouteComponent */.Z)($$splitComponentImporter, 'component')
});

__webpack_require__.d(__webpack_exports__, {
}, {
  q: Route
});


},
2639(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var react__rspack_import_1 = __webpack_require__(58186);
/* import */ var _lib_auth_client__rspack_import_2 = __webpack_require__(82915);



const AuthContext = /*#__PURE__*/ (0,react__rspack_import_1.createContext)(null);
function mapUser(u) {
    if (!u) return null;
    return {
        id: u.id,
        displayName: u.name ?? u.email,
        email: u.email,
        avatar: u.image ?? ""
    };
}
function AuthProvider({ children }) {
    const session = _lib_auth_client__rspack_import_2/* .authClient.useSession */.y.useSession();
    const user = mapUser(session.data?.user);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(AuthContext.Provider, {
        value: {
            user,
            isAuthenticated: !!user,
            token: null,
            setAuth: ()=>{},
            clearAuth: ()=>{}
        },
        children: children
    });
}
function useAuthStore() {
    const context = (0,react__rspack_import_1.useContext)(AuthContext);
    if (!context) {
        throw new Error("useAuthStore must be used within AuthProvider");
    }
    return context;
}

__webpack_require__.d(__webpack_exports__, {
  O: () => (AuthProvider),
  n: () => (useAuthStore)
});


},

};
