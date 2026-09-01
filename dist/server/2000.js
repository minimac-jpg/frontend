export const __rspack_esm_id = 2000;
export const __rspack_esm_ids = [2000];
export const __webpack_modules__ = {
53939(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var _radix_ui_react_context__rspack_import_2 = __webpack_require__(71953);
/* import */ var _radix_ui_react_compose_refs__rspack_import_4 = __webpack_require__(1747);
/* import */ var _radix_ui_react_dialog__rspack_import_3 = __webpack_require__(64186);
/* import */ var _radix_ui_primitive__rspack_import_5 = __webpack_require__(70705);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(95170);
"use client";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/alert-dialog.tsx







var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext, createAlertDialogScope] = (0,_radix_ui_react_context__rspack_import_2/* .createContextScope */.A)(ROOT_NAME, [
  _radix_ui_react_dialog__rspack_import_3/* .createDialogScope */.Hs
]);
var useDialogScope = (0,_radix_ui_react_dialog__rspack_import_3/* .createDialogScope */.Hs)();
var AlertDialog = /* @__PURE__ */ __name((props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(_radix_ui_react_dialog__rspack_import_3/* .Root */.bL, { ...dialogScope, ...alertDialogProps, modal: true });
}, "AlertDialog");
var AlertDialogTrigger = react__rspack_import_0.forwardRef(
  /* @__PURE__ */ __name(function AlertDialogTrigger2(props, forwardedRef) {
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(_radix_ui_react_dialog__rspack_import_3/* .Trigger */.l9, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }, "AlertDialogTrigger")
);
var AlertDialogPortal = /* @__PURE__ */ __name((props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(_radix_ui_react_dialog__rspack_import_3/* .Portal */.ZL, { ...dialogScope, ...portalProps });
}, "AlertDialogPortal");
var AlertDialogOverlay = react__rspack_import_0.forwardRef(
  /* @__PURE__ */ __name(function AlertDialogOverlay2(props, forwardedRef) {
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(_radix_ui_react_dialog__rspack_import_3/* .Overlay */.hJ, { ...dialogScope, ...overlayProps, ref: forwardedRef });
  }, "AlertDialogOverlay")
);
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var AlertDialogContent = react__rspack_import_0.forwardRef(
  /* @__PURE__ */ __name(function AlertDialogContent2(props, forwardedRef) {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = react__rspack_import_0.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__rspack_import_4/* .useComposedRefs */.s)(forwardedRef, contentRef);
    const cancelRef = react__rspack_import_0.useRef(null);
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
      _radix_ui_react_dialog__rspack_import_3/* .Content */.UC,
      {
        role: "alertdialog",
        ...dialogScope,
        ...contentProps,
        ref: composedRefs,
        onOpenAutoFocus: (0,_radix_ui_primitive__rspack_import_5/* .composeEventHandlers */.mK)(contentProps.onOpenAutoFocus, (event) => {
          event.preventDefault();
          cancelRef.current?.focus({ preventScroll: true });
        }),
        onPointerDownOutside: (event) => event.preventDefault(),
        onInteractOutside: (event) => event.preventDefault(),
        children
      }
    ) });
  }, "AlertDialogContent")
);
var AlertDialogTitle = react__rspack_import_0.forwardRef(
  /* @__PURE__ */ __name(function AlertDialogTitle2(props, forwardedRef) {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(_radix_ui_react_dialog__rspack_import_3/* .Title */.hE, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }, "AlertDialogTitle")
);
var AlertDialogDescription = react__rspack_import_0.forwardRef(/* @__PURE__ */ __name(function AlertDialogDescription2(props, forwardedRef) {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(_radix_ui_react_dialog__rspack_import_3/* .Description */.VY, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
}, "AlertDialogDescription"));
var AlertDialogAction = react__rspack_import_0.forwardRef(
  /* @__PURE__ */ __name(function AlertDialogAction2(props, forwardedRef) {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(_radix_ui_react_dialog__rspack_import_3/* .Close */.bm, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }, "AlertDialogAction")
);
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel = react__rspack_import_0.forwardRef(
  /* @__PURE__ */ __name(function AlertDialogCancel2(props, forwardedRef) {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = (0,_radix_ui_react_compose_refs__rspack_import_4/* .useComposedRefs */.s)(forwardedRef, cancelRef);
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(_radix_ui_react_dialog__rspack_import_3/* .Close */.bm, { ...dialogScope, ...cancelProps, ref });
  }, "AlertDialogCancel")
);
var Root2 = AlertDialog;
var Trigger2 = AlertDialogTrigger;
var Portal2 = AlertDialogPortal;
var Overlay2 = AlertDialogOverlay;
var Content2 = AlertDialogContent;
var Action = AlertDialogAction;
var Cancel = AlertDialogCancel;
var Title2 = AlertDialogTitle;
var Description2 = AlertDialogDescription;

//# sourceMappingURL=index.mjs.map

__webpack_require__.d(__webpack_exports__, {
  UC: () => (Content2),
  VY: () => (Description2),
  ZD: () => (Cancel),
  ZL: () => (Portal2),
  bL: () => (Root2),
  hE: () => (Title2),
  hJ: () => (Overlay2),
  l9: () => (Trigger2),
  rc: () => (Action)
});


},

};
