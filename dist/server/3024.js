export const __rspack_esm_id = 3024;
export const __rspack_esm_ids = [3024];
export const __webpack_modules__ = {
98691(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var _radix_ui_primitive__rspack_import_8 = __webpack_require__(70705);
/* import */ var _radix_ui_react_compose_refs__rspack_import_6 = __webpack_require__(1747);
/* import */ var _radix_ui_react_context__rspack_import_2 = __webpack_require__(71953);
/* import */ var _radix_ui_react_dismissable_layer__rspack_import_16 = __webpack_require__(85798);
/* import */ var _radix_ui_react_focus_guards__rspack_import_14 = __webpack_require__(64075);
/* import */ var _radix_ui_react_focus_scope__rspack_import_15 = __webpack_require__(85559);
/* import */ var _radix_ui_react_id__rspack_import_5 = __webpack_require__(46391);
/* import */ var _radix_ui_react_popper__rspack_import_3 = __webpack_require__(20383);
/* import */ var _radix_ui_react_portal__rspack_import_10 = __webpack_require__(26284);
/* import */ var _radix_ui_react_presence__rspack_import_9 = __webpack_require__(82287);
/* import */ var _radix_ui_react_primitive__rspack_import_7 = __webpack_require__(63623);
/* import */ var _radix_ui_react_slot__rspack_import_11 = __webpack_require__(86710);
/* import */ var _radix_ui_react_use_controllable_state__rspack_import_4 = __webpack_require__(36879);
/* import */ var aria_hidden__rspack_import_12 = __webpack_require__(15491);
/* import */ var react_remove_scroll__rspack_import_13 = __webpack_require__(8638);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(95170);
"use client";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/popover.tsx


















var POPOVER_NAME = "Popover";
var [createPopoverContext, createPopoverScope] = (0,_radix_ui_react_context__rspack_import_2/* .createContextScope */.A)(POPOVER_NAME, [
  _radix_ui_react_popper__rspack_import_3/* .createPopperScope */.Bk
]);
var usePopperScope = (0,_radix_ui_react_popper__rspack_import_3/* .createPopperScope */.Bk)();
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
var Popover = /* @__PURE__ */ __name((props) => {
  const {
    __scopePopover,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = false
  } = props;
  const popperScope = usePopperScope(__scopePopover);
  const triggerRef = react__rspack_import_0.useRef(null);
  const [hasCustomAnchor, setHasCustomAnchor] = react__rspack_import_0.useState(false);
  const [open, setOpen] = (0,_radix_ui_react_use_controllable_state__rspack_import_4/* .useControllableState */.i)({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: POPOVER_NAME
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(_radix_ui_react_popper__rspack_import_3/* .Root */.bL, { ...popperScope, children: /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
    PopoverProvider,
    {
      scope: __scopePopover,
      contentId: (0,_radix_ui_react_id__rspack_import_5/* .useId */.B)(),
      triggerRef,
      open,
      onOpenChange: setOpen,
      onOpenToggle: react__rspack_import_0.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      hasCustomAnchor,
      onCustomAnchorAdd: react__rspack_import_0.useCallback(() => setHasCustomAnchor(true), []),
      onCustomAnchorRemove: react__rspack_import_0.useCallback(() => setHasCustomAnchor(false), []),
      modal,
      children
    }
  ) });
}, "Popover");
var ANCHOR_NAME = "PopoverAnchor";
var PopoverAnchor = /* @__PURE__ */ (/* unused pure expression or super */ null && (React.forwardRef(
  /* @__PURE__ */ __name(function PopoverAnchor2(props, forwardedRef) {
    const { __scopePopover, ...anchorProps } = props;
    const context = usePopoverContext(ANCHOR_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
    React.useEffect(() => {
      onCustomAnchorAdd();
      return () => onCustomAnchorRemove();
    }, [onCustomAnchorAdd, onCustomAnchorRemove]);
    return /* @__PURE__ */ jsx(PopperPrimitive.Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }, "PopoverAnchor")
)));
var TRIGGER_NAME = "PopoverTrigger";
var PopoverTrigger = /* @__PURE__ */ react__rspack_import_0.forwardRef(
  /* @__PURE__ */ __name(function PopoverTrigger2(props, forwardedRef) {
    const { __scopePopover, ...triggerProps } = props;
    const context = usePopoverContext(TRIGGER_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const composedTriggerRef = (0,_radix_ui_react_compose_refs__rspack_import_6/* .useComposedRefs */.s)(forwardedRef, context.triggerRef);
    const trigger = /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
      _radix_ui_react_primitive__rspack_import_7/* .Primitive.button */.sG.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : void 0,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: (0,_radix_ui_primitive__rspack_import_8/* .composeEventHandlers */.mK)(props.onClick, context.onOpenToggle)
      }
    );
    return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(_radix_ui_react_popper__rspack_import_3/* .Anchor */.Mz, { asChild: true, ...popperScope, children: trigger });
  }, "PopoverTrigger")
);
var PORTAL_NAME = "PopoverPortal";
var [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME, {
  forceMount: void 0
});
var PopoverPortal = /* @__PURE__ */ __name((props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = usePopoverContext(PORTAL_NAME, __scopePopover);
  return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(PortalProvider, { scope: __scopePopover, forceMount, children: /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(_radix_ui_react_presence__rspack_import_9/* .Presence */.C, { present: forceMount || context.open, children: /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(_radix_ui_react_portal__rspack_import_10/* .Portal */.Z, { asChild: true, container, children }) }) });
}, "PopoverPortal");
var CONTENT_NAME = "PopoverContent";
var PopoverContent = /* @__PURE__ */ react__rspack_import_0.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function PopoverContent2(props, forwardedRef) {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopePopover);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(_radix_ui_react_presence__rspack_import_9/* .Presence */.C, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(PopoverContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(PopoverContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }, "PopoverContent")
);
var Slot = (0,_radix_ui_react_slot__rspack_import_11/* .createSlot */.TL)("PopoverContent.RemoveScroll");
var PopoverContentModal = /* @__PURE__ */ react__rspack_import_0.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function PopoverContentModal2(props, forwardedRef) {
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const contentRef = react__rspack_import_0.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__rspack_import_6/* .useComposedRefs */.s)(forwardedRef, contentRef);
    const isRightClickOutsideRef = react__rspack_import_0.useRef(false);
    react__rspack_import_0.useEffect(() => {
      const content = contentRef.current;
      if (content) return (0,aria_hidden__rspack_import_12/* .hideOthers */.Eq)(content);
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(react_remove_scroll__rspack_import_13/* ["default"] */.A, { as: Slot, allowPinchZoom: true, children: /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
      PopoverContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: (0,_radix_ui_primitive__rspack_import_8/* .composeEventHandlers */.mK)(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          if (!isRightClickOutsideRef.current) context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: (0,_radix_ui_primitive__rspack_import_8/* .composeEventHandlers */.mK)(
          props.onPointerDownOutside,
          (event) => {
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            isRightClickOutsideRef.current = isRightClick;
          },
          { checkForDefaultPrevented: false }
        ),
        onFocusOutside: (0,_radix_ui_primitive__rspack_import_8/* .composeEventHandlers */.mK)(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }, "PopoverContentModal")
);
var PopoverContentNonModal = /* @__PURE__ */ react__rspack_import_0.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function PopoverContentNonModal2(props, forwardedRef) {
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const hasInteractedOutsideRef = react__rspack_import_0.useRef(false);
    const hasPointerDownOutsideRef = react__rspack_import_0.useRef(false);
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
      PopoverContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }, "PopoverContentNonModal")
);
var PopoverContentImpl = /* @__PURE__ */ react__rspack_import_0.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function PopoverContentImpl2(props, forwardedRef) {
    const {
      __scopePopover,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      ...contentProps
    } = props;
    const context = usePopoverContext(CONTENT_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    (0,_radix_ui_react_focus_guards__rspack_import_14/* .useFocusGuards */.Oh)();
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
      _radix_ui_react_focus_scope__rspack_import_15/* .FocusScope */.n,
      {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
          _radix_ui_react_dismissable_layer__rspack_import_16/* .DismissableLayer */.qW,
          {
            asChild: true,
            disableOutsidePointerEvents,
            onInteractOutside,
            onEscapeKeyDown,
            onPointerDownOutside,
            onFocusOutside,
            onDismiss: () => context.onOpenChange(false),
            deferPointerDownOutside: true,
            children: /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
              _radix_ui_react_popper__rspack_import_3/* .Content */.UC,
              {
                "data-state": getState(context.open),
                role: "dialog",
                id: context.contentId,
                ...popperScope,
                ...contentProps,
                ref: forwardedRef,
                style: {
                  ...contentProps.style,
                  // re-namespace exposed content custom properties
                  ...{
                    "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                  }
                }
              }
            )
          }
        )
      }
    );
  }, "PopoverContentImpl")
);
var CLOSE_NAME = "PopoverClose";
var PopoverClose = /* @__PURE__ */ (/* unused pure expression or super */ null && (React.forwardRef(
  /* @__PURE__ */ __name(function PopoverClose2(props, forwardedRef) {
    const { __scopePopover, ...closeProps } = props;
    const context = usePopoverContext(CLOSE_NAME, __scopePopover);
    return /* @__PURE__ */ jsx(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }, "PopoverClose")
)));
var PopoverArrow = /* @__PURE__ */ (/* unused pure expression or super */ null && (React.forwardRef(
  /* @__PURE__ */ __name(function PopoverArrow2(props, forwardedRef) {
    const { __scopePopover, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopePopover);
    return /* @__PURE__ */ jsx(PopperPrimitive.Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }, "PopoverArrow")
)));
function getState(open) {
  return open ? "open" : "closed";
}
__name(getState, "getState");
var Root2 = Popover;
var Anchor2 = (/* unused pure expression or super */ null && (PopoverAnchor));
var Trigger = PopoverTrigger;
var Portal = PopoverPortal;
var Content2 = PopoverContent;
var Close = (/* unused pure expression or super */ null && (PopoverClose));
var Arrow2 = (/* unused pure expression or super */ null && (PopoverArrow));

//# sourceMappingURL=index.mjs.map

__webpack_require__.d(__webpack_exports__, {
  UC: () => (Content2),
  ZL: () => (Portal),
  bL: () => (Root2),
  l9: () => (Trigger)
});


},

};
