export const __rspack_esm_id = 8215;
export const __rspack_esm_ids = [8215];
export const __webpack_modules__ = {
29658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var lucide_react__rspack_import_7 = __webpack_require__(35090);
/* import */ var lucide_react__rspack_import_8 = __webpack_require__(46742);
/* import */ var lucide_react__rspack_import_9 = __webpack_require__(67255);
/* import */ var react__rspack_import_1 = __webpack_require__(58186);
/* import */ var _components_ui_button__rspack_import_2 = __webpack_require__(39839);
/* import */ var _components_ui_combobox__rspack_import_3 = __webpack_require__(21822);
/* import */ var _components_ui_dialog__rspack_import_4 = __webpack_require__(70355);
/* import */ var _components_ui_input__rspack_import_5 = __webpack_require__(16479);
/* import */ var _hooks_use_secrets__rspack_import_6 = __webpack_require__(72566);








function SecretEditForm({ secret, onSuccess, folders = [], projects = [] }) {
    const { mutateAsync: updateSecret, isPending, error } = (0,_hooks_use_secrets__rspack_import_6/* .useUpdateSecret */.fD)(secret.id);
    const [name, setName] = (0,react__rspack_import_1.useState)(secret.name);
    const [value, setValue] = (0,react__rspack_import_1.useState)("");
    const [folder, setFolder] = (0,react__rspack_import_1.useState)(secret.folder ?? null);
    const [project, setProject] = (0,react__rspack_import_1.useState)(secret.project ?? null);
    const [active, setActive] = (0,react__rspack_import_1.useState)(secret.status === "active");
    const [showValue, setShowValue] = (0,react__rspack_import_1.useState)(false);
    const [validationError, setValidationError] = (0,react__rspack_import_1.useState)(null);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setValidationError(null);
        if (!name.trim()) {
            setValidationError("Secret name is required");
            return;
        }
        const data = {};
        if (name.trim() !== secret.name) data.name = name.trim();
        if (value.trim()) data.value = value.trim();
        if (folder !== (secret.folder ?? null)) data.folder = folder ?? undefined;
        if (project !== (secret.project ?? null)) data.project = project ?? undefined;
        const newStatus = active ? "active" : "disabled";
        if (newStatus !== secret.status) data.status = newStatus;
        if (Object.keys(data).length === 0) {
            setValidationError("No changes to save");
            return;
        }
        try {
            await updateSecret(data);
            onSuccess?.();
        } catch  {
        // error captured in mutation error
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("form", {
        onSubmit: handleSubmit,
        noValidate: true,
        className: "grid gap-4",
        children: [
            validationError && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                className: "text-sm text-destructive",
                role: "alert",
                children: validationError
            }),
            error && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                className: "text-sm text-destructive",
                role: "alert",
                children: error.message
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "grid gap-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                        htmlFor: "edit-secret-name",
                        className: "text-sm font-medium",
                        children: "Name"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_input__rspack_import_5/* .Input */.p, {
                        id: "edit-secret-name",
                        value: name,
                        onChange: (e)=>setName(e.target.value),
                        disabled: isPending
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "grid gap-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                        htmlFor: "edit-secret-value",
                        className: "text-sm font-medium",
                        children: "New Value"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_input__rspack_import_5/* .Input */.p, {
                                id: "edit-secret-value",
                                type: showValue ? "text" : "password",
                                value: value,
                                onChange: (e)=>setValue(e.target.value),
                                placeholder: "Leave blank to keep current",
                                className: "pr-9"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                                type: "button",
                                onClick: ()=>setShowValue(!showValue),
                                className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                                tabIndex: -1,
                                children: showValue ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_7/* ["default"] */.A, {
                                    className: "size-4"
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_8/* ["default"] */.A, {
                                    className: "size-4"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "grid gap-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                className: "text-sm font-medium",
                                children: "Folder"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_combobox__rspack_import_3/* .Combobox */.G3, {
                                items: folders,
                                value: folder,
                                onValueChange: setFolder,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_combobox__rspack_import_3/* .ComboboxInput */.oK, {
                                        placeholder: "Select folder",
                                        disabled: isPending
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_combobox__rspack_import_3/* .ComboboxContent */.h5, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_combobox__rspack_import_3/* .ComboboxEmpty */.$U, {
                                                children: "No folders found."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_combobox__rspack_import_3/* .ComboboxList */.ex, {
                                                children: (item)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_combobox__rspack_import_3/* .ComboboxItem */.x4, {
                                                        value: item,
                                                        children: item
                                                    }, item)
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "grid gap-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                className: "text-sm font-medium",
                                children: "Project"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_combobox__rspack_import_3/* .Combobox */.G3, {
                                items: projects,
                                value: project,
                                onValueChange: setProject,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_combobox__rspack_import_3/* .ComboboxInput */.oK, {
                                        placeholder: "Select project",
                                        disabled: isPending
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_combobox__rspack_import_3/* .ComboboxContent */.h5, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_combobox__rspack_import_3/* .ComboboxEmpty */.$U, {
                                                children: "No projects found."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_combobox__rspack_import_3/* .ComboboxList */.ex, {
                                                children: (item)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_combobox__rspack_import_3/* .ComboboxItem */.x4, {
                                                        value: item,
                                                        children: item
                                                    }, item)
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "flex items-center justify-between rounded-lg border p-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "text-sm font-medium",
                                children: "Active"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Secret can be used in pipelines"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                        type: "button",
                        role: "switch",
                        "aria-checked": active,
                        onClick: ()=>setActive(!active),
                        disabled: isPending,
                        className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 ${active ? "bg-primary" : "bg-input"}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                            className: `pointer-events-none inline-block size-5 rounded-full bg-white shadow-sm ring-0 transition-transform ${active ? "translate-x-5" : "translate-x-0"}`
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_dialog__rspack_import_4/* .DialogFooter */.Es, {
                className: "pt-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_dialog__rspack_import_4/* .DialogClose */.HM, {
                        asChild: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_button__rspack_import_2/* .Button */.$, {
                            type: "button",
                            variant: "outline",
                            children: "Cancel"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_button__rspack_import_2/* .Button */.$, {
                        type: "submit",
                        disabled: isPending,
                        children: [
                            isPending && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_9/* ["default"] */.A, {
                                className: "size-4 animate-spin"
                            }),
                            isPending ? "Saving..." : "Save Changes"
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_require__.d(__webpack_exports__, {
  x: () => (SecretEditForm)
});


},
21822(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G3: () => (/* binding */ Combobox),
  h5: () => (/* binding */ ComboboxContent),
  $U: () => (/* binding */ combobox_ComboboxEmpty),
  oK: () => (/* binding */ combobox_ComboboxInput),
  x4: () => (/* binding */ combobox_ComboboxItem),
  ex: () => (/* binding */ combobox_ComboboxList)
});

// UNUSED EXPORTS: ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxCollection, ComboboxGroup, ComboboxLabel, ComboboxSeparator, ComboboxTrigger, ComboboxValue, useComboboxAnchor

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/root/ComboboxRoot.mjs + 24 modules
var ComboboxRoot = __webpack_require__(34902);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/trigger/ComboboxTrigger.mjs + 3 modules
var ComboboxTrigger = __webpack_require__(62485);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/clear/ComboboxClear.mjs
var ComboboxClear = __webpack_require__(55361);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/input/ComboboxInput.mjs + 1 modules
var ComboboxInput = __webpack_require__(4317);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/portal/ComboboxPortal.mjs
var ComboboxPortal = __webpack_require__(19897);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/positioner/ComboboxPositioner.mjs + 10 modules
var ComboboxPositioner = __webpack_require__(8377);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/popup/ComboboxPopup.mjs + 2 modules
var ComboboxPopup = __webpack_require__(38245);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/list/ComboboxList.mjs + 3 modules
var ComboboxList = __webpack_require__(97557);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/item/ComboboxItem.mjs + 2 modules
var ComboboxItem = __webpack_require__(19370);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/item-indicator/ComboboxItemIndicator.mjs
var ComboboxItemIndicator = __webpack_require__(88906);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/empty/ComboboxEmpty.mjs + 1 modules
var ComboboxEmpty = __webpack_require__(98737);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.mjs
var chevron_down = __webpack_require__(23489);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.mjs
var x = __webpack_require__(78265);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.mjs
var check = __webpack_require__(23853);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var dist = __webpack_require__(76912);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(16479);
// EXTERNAL MODULE: ./src/components/ui/textarea.tsx
var ui_textarea = __webpack_require__(57529);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(80828);
;// CONCATENATED MODULE: ./src/components/ui/input-group.tsx






function InputGroup({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        "data-slot": "input-group",
        role: "group",
        className: (0,utils.cn)("group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-input shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5", className),
        ...props
    });
}
const inputGroupAddonVariants = (0,dist/* .cva */.F)("flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4", {
    variants: {
        align: {
            "inline-start": "order-first pl-2 has-[>button]:-ml-1 has-[>kbd]:ml-[-0.15rem]",
            "inline-end": "order-last pr-2 has-[>button]:-mr-1 has-[>kbd]:mr-[-0.15rem]",
            "block-start": "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
            "block-end": "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2"
        }
    },
    defaultVariants: {
        align: "inline-start"
    }
});
function InputGroupAddon({ className, align = "inline-start", ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "group",
        "data-slot": "input-group-addon",
        "data-align": align,
        className: (0,utils.cn)(inputGroupAddonVariants({
            align
        }), className),
        onClick: (e)=>{
            if (e.target.closest("button")) {
                return;
            }
            e.currentTarget.parentElement?.querySelector("input")?.focus();
        },
        ...props
    });
}
const inputGroupButtonVariants = (0,dist/* .cva */.F)("flex items-center gap-2 text-sm shadow-none", {
    variants: {
        size: {
            xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
            sm: "",
            "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
            "icon-sm": "size-8 p-0 has-[>svg]:p-0"
        }
    },
    defaultVariants: {
        size: "xs"
    }
});
function InputGroupButton({ className, type = "button", variant = "ghost", size = "xs", ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
        type: type,
        "data-size": size,
        variant: variant,
        className: (0,utils.cn)(inputGroupButtonVariants({
            size
        }), className),
        ...props
    });
}
function InputGroupText({ className, ...props }) {
    return /*#__PURE__*/ _jsx("span", {
        className: cn("flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    });
}
function InputGroupInput({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
        "data-slot": "input-group-control",
        className: (0,utils.cn)("flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent", className),
        ...props
    });
}
function InputGroupTextarea({ className, ...props }) {
    return /*#__PURE__*/ _jsx(Textarea, {
        "data-slot": "input-group-control",
        className: cn("flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent", className),
        ...props
    });
}


;// CONCATENATED MODULE: ./src/components/ui/combobox.tsx
"use client";







const Combobox = ComboboxRoot/* .ComboboxRoot */.i;
function ComboboxValue({ ...props }) {
    return /*#__PURE__*/ _jsx(ComboboxPrimitive.Value, {
        "data-slot": "combobox-value",
        ...props
    });
}
function combobox_ComboboxTrigger({ className, children, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ComboboxTrigger/* .ComboboxTrigger */.M, {
        "data-slot": "combobox-trigger",
        className: (0,utils.cn)("[&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* ["default"] */.A, {
                className: "pointer-events-none size-4 text-muted-foreground"
            })
        ]
    });
}
function combobox_ComboboxClear({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ComboboxClear/* .ComboboxClear */.V, {
        "data-slot": "combobox-clear",
        render: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputGroupButton, {
            variant: "ghost",
            size: "icon-xs"
        }),
        className: (0,utils.cn)(className),
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* ["default"] */.A, {
            className: "pointer-events-none"
        })
    });
}
function combobox_ComboboxInput({ className, children, disabled = false, showTrigger = true, showClear = false, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(InputGroup, {
        className: (0,utils.cn)("w-auto", className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ComboboxInput/* .ComboboxInput */.o, {
                render: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputGroupInput, {
                    disabled: disabled
                }),
                ...props
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(InputGroupAddon, {
                align: "inline-end",
                children: [
                    showTrigger && /*#__PURE__*/ (0,jsx_runtime.jsx)(InputGroupButton, {
                        size: "icon-xs",
                        variant: "ghost",
                        asChild: true,
                        "data-slot": "input-group-button",
                        className: "group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent",
                        disabled: disabled,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(combobox_ComboboxTrigger, {})
                    }),
                    showClear && /*#__PURE__*/ (0,jsx_runtime.jsx)(combobox_ComboboxClear, {
                        disabled: disabled
                    })
                ]
            }),
            children
        ]
    });
}
function ComboboxContent({ className, side = "bottom", sideOffset = 6, align = "start", alignOffset = 0, anchor, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ComboboxPortal/* .ComboboxPortal */.K, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ComboboxPositioner/* .ComboboxPositioner */.o, {
            side: side,
            sideOffset: sideOffset,
            align: align,
            alignOffset: alignOffset,
            anchor: anchor,
            className: "isolate z-50",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ComboboxPopup/* .ComboboxPopup */.I, {
                "data-slot": "combobox-content",
                "data-chips": !!anchor,
                className: (0,utils.cn)("group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-md bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[chips=true]:min-w-(--anchor-width) data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:border-input/30 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:shadow-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
                ...props
            })
        })
    });
}
function combobox_ComboboxList({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ComboboxList/* .ComboboxList */.e, {
        "data-slot": "combobox-list",
        className: (0,utils.cn)("no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto overscroll-contain p-1 data-empty:p-0", className),
        ...props
    });
}
function combobox_ComboboxItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ComboboxItem/* .ComboboxItem */.x, {
        "data-slot": "combobox-item",
        className: (0,utils.cn)("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ComboboxItemIndicator/* .ComboboxItemIndicator */.Q, {
                render: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center"
                }),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(check/* ["default"] */.A, {
                    className: "pointer-events-none"
                })
            })
        ]
    });
}
function ComboboxGroup({ className, ...props }) {
    return /*#__PURE__*/ _jsx(ComboboxPrimitive.Group, {
        "data-slot": "combobox-group",
        className: cn(className),
        ...props
    });
}
function ComboboxLabel({ className, ...props }) {
    return /*#__PURE__*/ _jsx(ComboboxPrimitive.GroupLabel, {
        "data-slot": "combobox-label",
        className: cn("px-2 py-1.5 text-xs text-muted-foreground", className),
        ...props
    });
}
function ComboboxCollection({ ...props }) {
    return /*#__PURE__*/ _jsx(ComboboxPrimitive.Collection, {
        "data-slot": "combobox-collection",
        ...props
    });
}
function combobox_ComboboxEmpty({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ComboboxEmpty/* .ComboboxEmpty */.$, {
        "data-slot": "combobox-empty",
        className: (0,utils.cn)("hidden w-full justify-center py-2 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex", className),
        ...props
    });
}
function ComboboxSeparator({ className, ...props }) {
    return /*#__PURE__*/ _jsx(ComboboxPrimitive.Separator, {
        "data-slot": "combobox-separator",
        className: cn("-mx-1 my-1 h-px bg-border", className),
        ...props
    });
}
function ComboboxChips({ className, ...props }) {
    return /*#__PURE__*/ _jsx(ComboboxPrimitive.Chips, {
        "data-slot": "combobox-chips",
        className: cn("flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border border-input bg-transparent bg-clip-padding px-2.5 py-1.5 text-sm shadow-xs transition-[color,box-shadow] focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 has-data-[slot=combobox-chip]:px-1.5 dark:bg-input/30 dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40", className),
        ...props
    });
}
function ComboboxChip({ className, children, showRemove = true, ...props }) {
    return /*#__PURE__*/ _jsxs(ComboboxPrimitive.Chip, {
        "data-slot": "combobox-chip",
        className: cn("flex h-[calc(--spacing(5.5))] w-fit items-center justify-center gap-1 rounded-sm bg-muted px-1.5 text-xs font-medium whitespace-nowrap text-foreground has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-0", className),
        ...props,
        children: [
            children,
            showRemove && /*#__PURE__*/ _jsx(ComboboxPrimitive.ChipRemove, {
                render: /*#__PURE__*/ _jsx(Button, {
                    variant: "ghost",
                    size: "icon-xs"
                }),
                className: "-ml-1 opacity-50 hover:opacity-100",
                "data-slot": "combobox-chip-remove",
                children: /*#__PURE__*/ _jsx(XIcon, {
                    className: "pointer-events-none"
                })
            })
        ]
    });
}
function ComboboxChipsInput({ className, ...props }) {
    return /*#__PURE__*/ _jsx(ComboboxPrimitive.Input, {
        "data-slot": "combobox-chip-input",
        className: cn("min-w-16 flex-1 outline-none", className),
        ...props
    });
}
function useComboboxAnchor() {
    return React.useRef(null);
}



},
72566(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w9: () => (/* binding */ useCreateSecret),
  jQ: () => (/* binding */ useDeleteSecret),
  tj: () => (/* binding */ useRotateSecret),
  SY: () => (/* binding */ useSecret),
  r6: () => (/* binding */ useSecretUsage),
  Nc: () => (/* binding */ useSecrets),
  fD: () => (/* binding */ useUpdateSecret)
});

// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useQuery.js + 6 modules
var useQuery = __webpack_require__(5375);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(43653);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useMutation.js + 1 modules
var useMutation = __webpack_require__(19390);
// EXTERNAL MODULE: ./src/lib/api/client.ts
var client = __webpack_require__(59943);
;// CONCATENATED MODULE: ./src/api/secrets.ts

const SECRET_KINDS = new Set([
    "password",
    "token",
    "ssh_key",
    "oidc",
    "cloud_credentials",
    "database_connection_string",
    "docker_registry",
    "kubernetes_service_account",
    "certificate",
    "generic"
]);
const SECRET_STATUSES = new Set([
    "active",
    "disabled",
    "rotating",
    "expired",
    "revoked"
]);
function scopeLabel(scope) {
    if (!scope) return "global";
    switch(scope.type){
        case "organization":
            return `organization:${scope.organization_id ?? ""}`;
        case "project":
            return `project:${scope.project_id ?? ""}`;
        case "repository":
            return `repository:${scope.project_id ?? ""}:${scope.repository_id ?? ""}`;
        case "environment":
            return `environment:${scope.project_id ?? ""}:${scope.environment ?? ""}`;
        case "pipeline":
            return `pipeline:${scope.project_id ?? ""}:${scope.pipeline_id ?? ""}`;
        default:
            return "global";
    }
}
function scopeProjectId(scope) {
    if (scope && (scope.type === "project" || scope.type === "repository" || scope.type === "environment" || scope.type === "pipeline")) {
        return scope.project_id;
    }
    return undefined;
}
function ownerLabel(owner) {
    if (!owner) return "";
    switch(owner.type){
        case "user":
            return owner.display_name || owner.user_id || "user";
        case "project":
            return owner.project_name || owner.project_id || "project";
        case "organization":
            return owner.organization_id || "organization";
        case "system":
            return owner.component || "system";
        default:
            return owner.type;
    }
}
function mapSecret(dto) {
    return {
        id: dto.id,
        name: dto.name,
        kind: dto.kind,
        status: dto.status,
        scope: scopeLabel(dto.scope),
        owner: ownerLabel(dto.owner),
        provider: dto.provider ?? "",
        external_reference: dto.external_reference ?? "",
        current_version: dto.current_version,
        is_rotating: dto.is_rotating ?? false,
        created_at: dto.created_at,
        updated_at: dto.updated_at,
        project: scopeProjectId(dto.scope)
    };
}
function buildScope(data) {
    if (data.project) {
        return {
            type: "project",
            project_id: data.project
        };
    }
    return undefined;
}
async function listSecrets(_limit = 20) {
    const data = await (0,client/* .apiGet */.Vg)("/api/secrets");
    const secrets = (data.secrets ?? []).map(mapSecret);
    return {
        items: secrets,
        total: data.total ?? secrets.length
    };
}
async function getSecret(id) {
    const data = await (0,client/* .apiGet */.Vg)(`/api/secrets/${encodeURIComponent(id)}`);
    return mapSecret(data.secret);
}
async function createSecret(data) {
    const created = await (0,client/* .apiPost */.$P)("/api/secrets", {
        name: data.name,
        kind: SECRET_KINDS.has(data.kind) ? data.kind : "generic",
        scope: buildScope(data),
        owner: undefined,
        provider: data.provider,
        external_reference: data.external_reference,
        label: data.label,
        description: data.description,
        tags: data.tags
    });
    if (data.value) {
        await (0,client/* .apiPost */.$P)(`/api/secrets/${encodeURIComponent(created.secret.id)}/value`, {
            value: data.value
        });
    }
    return mapSecret(created.secret);
}
async function updateSecret(id, data) {
    if (data.value) {
        await (0,client/* .apiPost */.$P)(`/api/secrets/${encodeURIComponent(id)}/value`, {
            value: data.value
        });
    }
    const hasMetadata = data.name !== undefined || data.label !== undefined || data.description !== undefined || data.tags !== undefined || data.status !== undefined;
    if (!hasMetadata) {
        return getSecret(id);
    }
    const updated = await (0,client/* .apiPatch */.$Y)(`/api/secrets/${encodeURIComponent(id)}`, {
        name: data.name,
        label: data.label,
        description: data.description,
        tags: data.tags,
        status: data.status && SECRET_STATUSES.has(data.status) ? data.status : undefined
    });
    return mapSecret(updated.secret);
}
async function deleteSecret(id) {
    await (0,client/* .apiDelete */.Al)(`/api/secrets/${encodeURIComponent(id)}`);
}
async function rotateSecret(id, reason) {
    const data = await (0,client/* .apiPost */.$P)(`/api/secrets/${encodeURIComponent(id)}/rotate`, {
        reason: reason || "manual rotation"
    });
    return mapSecret(data.secret);
}
async function getSecretUsage(id) {
    const data = await (0,client/* .apiGet */.Vg)(`/api/secrets/${encodeURIComponent(id)}/usage`);
    return data.usage ?? [];
}

// EXTERNAL MODULE: ./src/state/auth-store.tsx
var auth_store = __webpack_require__(2639);
;// CONCATENATED MODULE: ./src/hooks/use-secrets.ts



function useSecrets(limit = 20) {
    const { isAuthenticated } = (0,auth_store/* .useAuthStore */.n)();
    return (0,useQuery/* .useQuery */.I)({
        queryKey: [
            "secrets",
            limit
        ],
        queryFn: ()=>listSecrets(limit),
        enabled: isAuthenticated
    });
}
function useSecret(id) {
    const { isAuthenticated } = (0,auth_store/* .useAuthStore */.n)();
    return (0,useQuery/* .useQuery */.I)({
        queryKey: [
            "secrets",
            id
        ],
        queryFn: ()=>getSecret(id),
        enabled: isAuthenticated && !!id
    });
}
function useCreateSecret() {
    const queryClient = (0,QueryClientProvider/* .useQueryClient */.jE)();
    return (0,useMutation/* .useMutation */.n)({
        mutationFn: (data)=>createSecret(data),
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "secrets"
                ]
            });
        }
    });
}
function useUpdateSecret(id) {
    const queryClient = (0,QueryClientProvider/* .useQueryClient */.jE)();
    return (0,useMutation/* .useMutation */.n)({
        mutationFn: (data)=>updateSecret(id, data),
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "secrets"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "secrets",
                    id
                ]
            });
        }
    });
}
function useDeleteSecret() {
    const queryClient = (0,QueryClientProvider/* .useQueryClient */.jE)();
    return (0,useMutation/* .useMutation */.n)({
        mutationFn: (id)=>deleteSecret(id),
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "secrets"
                ]
            });
        }
    });
}
function useRotateSecret() {
    const queryClient = (0,QueryClientProvider/* .useQueryClient */.jE)();
    return (0,useMutation/* .useMutation */.n)({
        mutationFn: ({ id, reason })=>rotateSecret(id, reason),
        onSuccess: (_data, variables)=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "secrets"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "secrets",
                    variables.id
                ]
            });
        }
    });
}
function useSecretUsage(id) {
    const { isAuthenticated } = (0,auth_store/* .useAuthStore */.n)();
    return (0,useQuery/* .useQuery */.I)({
        queryKey: [
            "secrets",
            id,
            "usage"
        ],
        queryFn: ()=>getSecretUsage(id),
        enabled: isAuthenticated && !!id
    });
}


},

};
