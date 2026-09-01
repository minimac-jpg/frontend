export const __rspack_esm_id = 7649;
export const __rspack_esm_ids = [7649];
export const __webpack_modules__ = {
69689(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/number.ts
function clamp(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}
__name(clamp, "clamp");

//# sourceMappingURL=index.mjs.map

__webpack_require__.d(__webpack_exports__, {
  q: () => (clamp)
});


},
93432(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  UC: () => (/* binding */ SelectContent),
  q7: () => (/* binding */ SelectItem),
  VF: () => (/* binding */ SelectItemIndicator),
  p4: () => (/* binding */ SelectItemText),
  ZL: () => (/* binding */ SelectPortal),
  bL: () => (/* binding */ Select),
  l9: () => (/* binding */ SelectTrigger),
  WT: () => (/* binding */ SelectValue)
});

// UNUSED EXPORTS: Arrow, Group, Icon, Label, ScrollDownButton, ScrollUpButton, Select, SelectArrow, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel, SelectPortal, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SelectViewport, Separator, Viewport, createSelectScope, unstable_BubbleInput, unstable_Provider, unstable_SelectBubbleInput, unstable_SelectProvider

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(57947);
// EXTERNAL MODULE: ./node_modules/@radix-ui/number/dist/index.mjs
var dist = __webpack_require__(69689);
// EXTERNAL MODULE: ./node_modules/@radix-ui/primitive/dist/index.mjs
var primitive_dist = __webpack_require__(70705);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-collection/dist/index.mjs
var react_collection_dist = __webpack_require__(88874);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(1747);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(71953);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-direction/dist/index.mjs
var react_direction_dist = __webpack_require__(87567);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var react_dismissable_layer_dist = __webpack_require__(85798);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var react_focus_guards_dist = __webpack_require__(64075);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var react_focus_scope_dist = __webpack_require__(85559);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-id/dist/index.mjs
var react_id_dist = __webpack_require__(46391);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-popper/dist/index.mjs + 1 modules
var react_popper_dist = __webpack_require__(20383);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-portal/dist/index.mjs
var react_portal_dist = __webpack_require__(26284);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-presence/dist/index.mjs
var react_presence_dist = __webpack_require__(82287);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(63623);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs
var react_slot_dist = __webpack_require__(86710);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var react_use_callback_ref_dist = __webpack_require__(6435);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs + 1 modules
var react_use_controllable_state_dist = __webpack_require__(36879);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var react_use_layout_effect_dist = __webpack_require__(17412);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-previous/dist/index.mjs
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/use-previous.tsx

function usePrevious(value) {
  const ref = react.useRef({ value, previous: value });
  return react.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}
__name(usePrevious, "usePrevious");

//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var react_visually_hidden_dist = __webpack_require__(86672);
// EXTERNAL MODULE: ./node_modules/aria-hidden/dist/es2015/index.js
var es2015 = __webpack_require__(15491);
// EXTERNAL MODULE: ./node_modules/react-remove-scroll/dist/es2015/Combination.js + 21 modules
var Combination = __webpack_require__(8638);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-select/dist/index.mjs
"use client";
var dist_defProp = Object.defineProperty;
var dist_name = (target, value) => dist_defProp(target, "name", { value, configurable: true });

// src/select.tsx


























var OPEN_KEYS = [" ", "Enter", "ArrowUp", "ArrowDown"];
var SELECTION_KEYS = [" ", "Enter"];
var SELECT_NAME = "Select";
var [Collection, useCollection, createCollectionScope] = (0,react_collection_dist/* .createCollection */.N)(SELECT_NAME);
var [createSelectContext, createSelectScope] = (0,react_context_dist/* .createContextScope */.A)(SELECT_NAME, [
  createCollectionScope,
  react_popper_dist/* .createPopperScope */.Bk
]);
var usePopperScope = (0,react_popper_dist/* .createPopperScope */.Bk)();
var [SelectProviderImpl, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
function SelectProvider(props) {
  const {
    __scopeSelect,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    value: valueProp,
    defaultValue,
    onValueChange,
    dir,
    name,
    autoComplete,
    disabled,
    required,
    form,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  const [trigger, setTrigger] = react.useState(null);
  const [valueNode, setValueNode] = react.useState(null);
  const [valueNodeHasChildren, setValueNodeHasChildren] = react.useState(false);
  const direction = (0,react_direction_dist/* .useDirection */.jH)(dir);
  const [open, setOpen] = (0,react_use_controllable_state_dist/* .useControllableState */.i)({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: SELECT_NAME
  });
  const [value, setValue] = (0,react_use_controllable_state_dist/* .useControllableState */.i)({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
    caller: SELECT_NAME
  });
  const triggerPointerDownPosRef = react.useRef(null);
  const initialValueRef = react.useRef(value);
  react.useEffect(() => {
    const associatedForm = form ? trigger?.ownerDocument.getElementById(form) : trigger?.form;
    if (associatedForm instanceof HTMLFormElement) {
      const reset = /* @__PURE__ */ dist_name(() => setValue(initialValueRef.current), "reset");
      associatedForm.addEventListener("reset", reset);
      return () => associatedForm.removeEventListener("reset", reset);
    }
  }, [form, trigger, setValue]);
  const isFormControl = trigger ? !!form || !!trigger.closest("form") : true;
  const [nativeOptionsSet, setNativeOptionsSet] = react.useState(/* @__PURE__ */ new Set());
  const contentId = (0,react_id_dist/* .useId */.B)();
  const nativeSelectKey = Array.from(nativeOptionsSet).map((option) => option.props.value).join(";");
  const handleNativeOptionAdd = react.useCallback((option) => {
    setNativeOptionsSet((prev) => new Set(prev).add(option));
  }, []);
  const handleNativeOptionRemove = react.useCallback((option) => {
    setNativeOptionsSet((prev) => {
      const optionsSet = new Set(prev);
      optionsSet.delete(option);
      return optionsSet;
    });
  }, []);
  const context = {
    required,
    trigger,
    onTriggerChange: setTrigger,
    valueNode,
    onValueNodeChange: setValueNode,
    valueNodeHasChildren,
    onValueNodeHasChildrenChange: setValueNodeHasChildren,
    contentId,
    value,
    onValueChange: setValue,
    open,
    onOpenChange: setOpen,
    dir: direction,
    triggerPointerDownPosRef,
    disabled,
    name,
    autoComplete,
    form,
    nativeOptions: nativeOptionsSet,
    nativeSelectKey,
    isFormControl
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_popper_dist/* .Root */.bL, { ...popperScope, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(SelectProviderImpl, { scope: __scopeSelect, ...context, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Collection.Provider, { scope: __scopeSelect, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
    SelectNativeOptionsProvider,
    {
      scope: __scopeSelect,
      onNativeOptionAdd: handleNativeOptionAdd,
      onNativeOptionRemove: handleNativeOptionRemove,
      children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
    }
  ) }) }) });
}
dist_name(SelectProvider, "SelectProvider");
var Select = /* @__PURE__ */ dist_name((props) => {
  const { __scopeSelect, children, ...providerProps } = props;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    SelectProvider,
    {
      __scopeSelect,
      ...providerProps,
      internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
        children,
        isFormControl ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
          SelectBubbleInput,
          {
            __scopeSelect
          }
        ) : null
      ] })
    }
  );
}, "Select");
var TRIGGER_NAME = "SelectTrigger";
var SelectTrigger = /* @__PURE__ */ react.forwardRef(
  /* @__PURE__ */ dist_name(function SelectTrigger2(props, forwardedRef) {
    const { __scopeSelect, disabled = false, ...triggerProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const context = useSelectContext(TRIGGER_NAME, __scopeSelect);
    const isDisabled = context.disabled || disabled;
    const composedRefs = (0,react_compose_refs_dist/* .useComposedRefs */.s)(forwardedRef, context.onTriggerChange);
    const getItems = useCollection(__scopeSelect);
    const pointerTypeRef = react.useRef("touch");
    const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch((search) => {
      const enabledItems = getItems().filter((item) => !item.disabled);
      const currentItem = enabledItems.find((item) => item.value === context.value);
      const nextItem = findNextItem(enabledItems, search, currentItem);
      if (nextItem !== void 0) {
        context.onValueChange(nextItem.value);
      }
    });
    const handleOpen = /* @__PURE__ */ dist_name((pointerEvent) => {
      if (!isDisabled) {
        context.onOpenChange(true);
        resetTypeahead();
      }
      if (pointerEvent) {
        context.triggerPointerDownPosRef.current = {
          x: Math.round(pointerEvent.pageX),
          y: Math.round(pointerEvent.pageY)
        };
      }
    }, "handleOpen");
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_popper_dist/* .Anchor */.Mz, { asChild: true, ...popperScope, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
      react_primitive_dist/* .Primitive.button */.sG.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": context.open ? context.contentId : void 0,
        "aria-expanded": context.open,
        "aria-required": context.required,
        "aria-autocomplete": "none",
        dir: context.dir,
        "data-state": context.open ? "open" : "closed",
        disabled: isDisabled,
        "data-disabled": isDisabled ? "" : void 0,
        "data-placeholder": shouldShowPlaceholder(context.value) ? "" : void 0,
        ...triggerProps,
        ref: composedRefs,
        onClick: (0,primitive_dist/* .composeEventHandlers */.mK)(triggerProps.onClick, (event) => {
          event.currentTarget.focus();
          if (pointerTypeRef.current !== "mouse") {
            handleOpen(event);
          }
        }),
        onPointerDown: (0,primitive_dist/* .composeEventHandlers */.mK)(triggerProps.onPointerDown, (event) => {
          pointerTypeRef.current = event.pointerType;
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) {
            target.releasePointerCapture(event.pointerId);
          }
          if (event.button === 0 && event.ctrlKey === false && event.pointerType === "mouse") {
            handleOpen(event);
            event.preventDefault();
          }
        }),
        onKeyDown: (0,primitive_dist/* .composeEventHandlers */.mK)(triggerProps.onKeyDown, (event) => {
          const isTypingAhead = searchRef.current !== "";
          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
          if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
          if (isTypingAhead && event.key === " ") return;
          if (OPEN_KEYS.includes(event.key)) {
            handleOpen();
            event.preventDefault();
          }
        })
      }
    ) });
  }, "SelectTrigger")
);
var VALUE_NAME = "SelectValue";
var SelectValue = /* @__PURE__ */ react.forwardRef(
  /* @__PURE__ */ dist_name(function SelectValue2(props, forwardedRef) {
    const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
    const context = useSelectContext(VALUE_NAME, __scopeSelect);
    const { onValueNodeHasChildrenChange } = context;
    const hasChildren = children !== void 0;
    const composedRefs = (0,react_compose_refs_dist/* .useComposedRefs */.s)(forwardedRef, context.onValueNodeChange);
    (0,react_use_layout_effect_dist/* .useLayoutEffect */.N)(() => {
      onValueNodeHasChildrenChange(hasChildren);
    }, [onValueNodeHasChildrenChange, hasChildren]);
    const showPlaceholder = shouldShowPlaceholder(context.value);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      react_primitive_dist/* .Primitive.span */.sG.span,
      {
        ...valueProps,
        asChild: showPlaceholder ? false : valueProps.asChild,
        ref: composedRefs,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react.Fragment, { children: showPlaceholder ? placeholder : children }, showPlaceholder ? "placeholder" : "value")
      }
    );
  }, "SelectValue")
);
var SelectIcon = /* @__PURE__ */ (/* unused pure expression or super */ null && (React.forwardRef(
  /* @__PURE__ */ dist_name(function SelectIcon2(props, forwardedRef) {
    const { __scopeSelect, children, ...iconProps } = props;
    return /* @__PURE__ */ jsx(Primitive.span, { "aria-hidden": true, ...iconProps, ref: forwardedRef, children: children || "\u25BC" });
  }, "SelectIcon")
)));
var PORTAL_NAME = "SelectPortal";
var [PortalProvider, usePortalContext] = createSelectContext(PORTAL_NAME, {
  forceMount: void 0
});
var SelectPortal = /* @__PURE__ */ dist_name((props) => {
  const { __scopeSelect, forceMount, ...portalProps } = props;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(PortalProvider, { scope: props.__scopeSelect, forceMount, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_portal_dist/* .Portal */.Z, { asChild: true, ...portalProps }) });
}, "SelectPortal");
var CONTENT_NAME = "SelectContent";
var SelectContent = /* @__PURE__ */ react.forwardRef(
  /* @__PURE__ */ dist_name(function SelectContent2(props, forwardedRef) {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeSelect);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useSelectContext(CONTENT_NAME, props.__scopeSelect);
    const [fragment, setFragment] = react.useState();
    (0,react_use_layout_effect_dist/* .useLayoutEffect */.N)(() => {
      setFragment(new DocumentFragment());
    }, []);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_presence_dist/* .Presence */.C, { present: forceMount || context.open, children: ({ present }) => present ? /* @__PURE__ */ (0,jsx_runtime.jsx)(SelectContentImpl, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(SelectContentFragment, { ...contentProps, fragment }) });
  }, "SelectContent")
);
var SelectContentFragment = /* @__PURE__ */ react.forwardRef(/* @__PURE__ */ dist_name(function SelectContentFragment2(props, forwardedRef) {
  const { __scopeSelect, children, fragment } = props;
  if (!fragment) return null;
  return react_dom.createPortal(
    /* @__PURE__ */ (0,jsx_runtime.jsx)(SelectContentProvider, { scope: __scopeSelect, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Collection.Slot, { scope: __scopeSelect, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { ref: forwardedRef, children }) }) }),
    fragment
  );
}, "SelectContentFragment"));
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME);
var Slot = (0,react_slot_dist/* .createSlot */.TL)("SelectContent.RemoveScroll");
var SelectContentImpl = /* @__PURE__ */ react.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dist_name(function SelectContentImpl2(props, forwardedRef) {
    const { __scopeSelect } = props;
    const {
      position = "item-aligned",
      onCloseAutoFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      //
      // PopperContent props
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      avoidCollisions,
      //
      ...contentProps
    } = props;
    const context = useSelectContext(CONTENT_NAME, __scopeSelect);
    const [content, setContent] = react.useState(null);
    const [viewport, setViewport] = react.useState(null);
    const composedRefs = (0,react_compose_refs_dist/* .useComposedRefs */.s)(forwardedRef, setContent);
    const [selectedItem, setSelectedItem] = react.useState(null);
    const [selectedItemText, setSelectedItemText] = react.useState(
      null
    );
    const getItems = useCollection(__scopeSelect);
    const [isPositioned, setIsPositioned] = react.useState(false);
    const firstValidItemFoundRef = react.useRef(false);
    react.useEffect(() => {
      if (content) return (0,es2015/* .hideOthers */.Eq)(content);
    }, [content]);
    (0,react_focus_guards_dist/* .useFocusGuards */.Oh)();
    const focusFirst = react.useCallback(
      (candidates) => {
        const [firstItem, ...restItems] = getItems().map((item) => item.ref.current);
        const [lastItem] = restItems.slice(-1);
        const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
        for (const candidate of candidates) {
          if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
          candidate?.scrollIntoView({ block: "nearest" });
          if (candidate === firstItem && viewport) viewport.scrollTop = 0;
          if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
          candidate?.focus();
          if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
        }
      },
      [getItems, viewport]
    );
    const focusSelectedItem = react.useCallback(
      () => focusFirst([selectedItem, content]),
      [focusFirst, selectedItem, content]
    );
    react.useEffect(() => {
      if (isPositioned) {
        focusSelectedItem();
      }
    }, [isPositioned, focusSelectedItem]);
    const { onOpenChange, triggerPointerDownPosRef } = context;
    react.useEffect(() => {
      if (content) {
        let pointerMoveDelta = { x: 0, y: 0 };
        const handlePointerMove = /* @__PURE__ */ dist_name((event) => {
          pointerMoveDelta = {
            x: Math.abs(Math.round(event.pageX) - (triggerPointerDownPosRef.current?.x ?? 0)),
            y: Math.abs(Math.round(event.pageY) - (triggerPointerDownPosRef.current?.y ?? 0))
          };
        }, "handlePointerMove");
        const handlePointerUp = /* @__PURE__ */ dist_name((event) => {
          if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) {
            event.preventDefault();
          } else {
            if (!event.composedPath().includes(content)) {
              onOpenChange(false);
            }
          }
          document.removeEventListener("pointermove", handlePointerMove);
          triggerPointerDownPosRef.current = null;
        }, "handlePointerUp");
        if (triggerPointerDownPosRef.current !== null) {
          document.addEventListener("pointermove", handlePointerMove);
          document.addEventListener("pointerup", handlePointerUp, { capture: true, once: true });
        }
        return () => {
          document.removeEventListener("pointermove", handlePointerMove);
          document.removeEventListener("pointerup", handlePointerUp, { capture: true });
        };
      }
    }, [content, onOpenChange, triggerPointerDownPosRef]);
    react.useEffect(() => {
      const close = /* @__PURE__ */ dist_name(() => onOpenChange(false), "close");
      window.addEventListener("blur", close);
      window.addEventListener("resize", close);
      return () => {
        window.removeEventListener("blur", close);
        window.removeEventListener("resize", close);
      };
    }, [onOpenChange]);
    const [searchRef, handleTypeaheadSearch] = useTypeaheadSearch((search) => {
      const enabledItems = getItems().filter((item) => !item.disabled);
      const currentItem = enabledItems.find((item) => item.ref.current === document.activeElement);
      const nextItem = findNextItem(enabledItems, search, currentItem);
      if (nextItem) {
        setTimeout(() => nextItem.ref.current?.focus());
      }
    });
    const itemRefCallback = react.useCallback(
      (node, value, disabled) => {
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
          setSelectedItem(node);
          if (isFirstValidItem) firstValidItemFoundRef.current = true;
        }
      },
      [context.value]
    );
    const handleItemLeave = react.useCallback(() => content?.focus(), [content]);
    const itemTextRefCallback = react.useCallback(
      (node, value, disabled) => {
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
          setSelectedItemText(node);
        }
      },
      [context.value]
    );
    const SelectPosition = position === "popper" ? SelectPopperPosition : SelectItemAlignedPosition;
    const popperContentProps = SelectPosition === SelectPopperPosition ? {
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      avoidCollisions
    } : {};
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      SelectContentProvider,
      {
        scope: __scopeSelect,
        content,
        viewport,
        onViewportChange: setViewport,
        itemRefCallback,
        selectedItem,
        onItemLeave: handleItemLeave,
        itemTextRefCallback,
        focusSelectedItem,
        selectedItemText,
        position,
        isPositioned,
        searchRef,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Combination/* ["default"] */.A, { as: Slot, allowPinchZoom: true, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          react_focus_scope_dist/* .FocusScope */.n,
          {
            asChild: true,
            trapped: context.open,
            onMountAutoFocus: (event) => {
              event.preventDefault();
            },
            onUnmountAutoFocus: (0,primitive_dist/* .composeEventHandlers */.mK)(onCloseAutoFocus, (event) => {
              context.trigger?.focus({ preventScroll: true });
              event.preventDefault();
            }),
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
              react_dismissable_layer_dist/* .DismissableLayer */.qW,
              {
                asChild: true,
                disableOutsidePointerEvents: true,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside: (event) => event.preventDefault(),
                onDismiss: () => context.onOpenChange(false),
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                  SelectPosition,
                  {
                    role: "listbox",
                    id: context.contentId,
                    "data-state": context.open ? "open" : "closed",
                    dir: context.dir,
                    onContextMenu: (event) => event.preventDefault(),
                    ...contentProps,
                    ...popperContentProps,
                    onPlaced: () => setIsPositioned(true),
                    ref: composedRefs,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...contentProps.style
                    },
                    onKeyDown: (0,primitive_dist/* .composeEventHandlers */.mK)(contentProps.onKeyDown, (event) => {
                      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                      if (event.key === "Tab") event.preventDefault();
                      if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
                      if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
                        const items = getItems().filter((item) => !item.disabled);
                        let candidateNodes = items.map((item) => item.ref.current);
                        if (["ArrowUp", "End"].includes(event.key)) {
                          candidateNodes = candidateNodes.slice().reverse();
                        }
                        if (["ArrowUp", "ArrowDown"].includes(event.key)) {
                          const currentElement = event.target;
                          const currentIndex = candidateNodes.indexOf(currentElement);
                          candidateNodes = candidateNodes.slice(currentIndex + 1);
                        }
                        setTimeout(() => focusFirst(candidateNodes));
                        event.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }, "SelectContentImpl")
);
var SelectItemAlignedPosition = /* @__PURE__ */ react.forwardRef(/* @__PURE__ */ dist_name(function SelectItemAlignedPosition2(props, forwardedRef) {
  const { __scopeSelect, onPlaced, ...popperProps } = props;
  const context = useSelectContext(CONTENT_NAME, __scopeSelect);
  const contentContext = useSelectContentContext(CONTENT_NAME, __scopeSelect);
  const [contentWrapper, setContentWrapper] = react.useState(null);
  const [content, setContent] = react.useState(null);
  const composedRefs = (0,react_compose_refs_dist/* .useComposedRefs */.s)(forwardedRef, setContent);
  const getItems = useCollection(__scopeSelect);
  const shouldExpandOnScrollRef = react.useRef(false);
  const shouldRepositionRef = react.useRef(true);
  const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
  const position = react.useCallback(() => {
    if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
      const triggerRect = context.trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const valueNodeRect = context.valueNode.getBoundingClientRect();
      const itemTextRect = selectedItemText.getBoundingClientRect();
      if (context.dir !== "rtl") {
        const itemTextOffset = itemTextRect.left - contentRect.left;
        const left = valueNodeRect.left - itemTextOffset;
        const leftDelta = triggerRect.left - left;
        const minContentWidth = triggerRect.width + leftDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const rightEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedLeft = (0,dist/* .clamp */.q)(left, [
          CONTENT_MARGIN,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(CONTENT_MARGIN, rightEdge - contentWidth)
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.left = clampedLeft + "px";
      } else {
        const itemTextOffset = contentRect.right - itemTextRect.right;
        const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
        const rightDelta = window.innerWidth - triggerRect.right - right;
        const minContentWidth = triggerRect.width + rightDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const leftEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedRight = (0,dist/* .clamp */.q)(right, [
          CONTENT_MARGIN,
          Math.max(CONTENT_MARGIN, leftEdge - contentWidth)
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.right = clampedRight + "px";
      }
      const items = getItems();
      const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
      const itemsHeight = viewport.scrollHeight;
      const contentStyles = window.getComputedStyle(content);
      const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
      const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
      const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
      const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
      const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
      const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
      const viewportStyles = window.getComputedStyle(viewport);
      const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
      const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
      const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
      const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
      const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
      const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
      const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
      const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
      const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
      if (willAlignWithoutTopOverflow) {
        const isLastItem = items.length > 0 && selectedItem === items[items.length - 1].ref.current;
        contentWrapper.style.bottom = "0px";
        const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
        const clampedTriggerMiddleToBottomEdge = Math.max(
          triggerMiddleToBottomEdge,
          selectedItemHalfHeight + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth
        );
        const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
        contentWrapper.style.height = height + "px";
      } else {
        const isFirstItem = items.length > 0 && selectedItem === items[0].ref.current;
        contentWrapper.style.top = "0px";
        const clampedTopEdgeToTriggerMiddle = Math.max(
          topEdgeToTriggerMiddle,
          contentBorderTopWidth + viewport.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight
        );
        const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
        contentWrapper.style.height = height + "px";
        viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
      }
      contentWrapper.style.margin = `${CONTENT_MARGIN}px 0`;
      contentWrapper.style.minHeight = minContentHeight + "px";
      contentWrapper.style.maxHeight = availableHeight + "px";
      onPlaced?.();
      requestAnimationFrame(() => shouldExpandOnScrollRef.current = true);
    }
  }, [
    getItems,
    context.trigger,
    context.valueNode,
    contentWrapper,
    content,
    viewport,
    selectedItem,
    selectedItemText,
    context.dir,
    onPlaced
  ]);
  (0,react_use_layout_effect_dist/* .useLayoutEffect */.N)(() => position(), [position]);
  const [contentZIndex, setContentZIndex] = react.useState();
  (0,react_use_layout_effect_dist/* .useLayoutEffect */.N)(() => {
    if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [content]);
  const handleScrollButtonChange = react.useCallback(
    (node) => {
      if (node && shouldRepositionRef.current === true) {
        position();
        focusSelectedItem?.();
        shouldRepositionRef.current = false;
      }
    },
    [position, focusSelectedItem]
  );
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    SelectViewportProvider,
    {
      scope: __scopeSelect,
      contentWrapper,
      shouldExpandOnScrollRef,
      onScrollButtonChange: handleScrollButtonChange,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "div",
        {
          ref: setContentWrapper,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: contentZIndex
          },
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
            react_primitive_dist/* .Primitive.div */.sG.div,
            {
              ...popperProps,
              ref: composedRefs,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...popperProps.style
              }
            }
          )
        }
      )
    }
  );
}, "SelectItemAlignedPosition"));
var SelectPopperPosition = /* @__PURE__ */ react.forwardRef(/* @__PURE__ */ dist_name(function SelectPopperPosition2(props, forwardedRef) {
  const {
    __scopeSelect,
    align = "start",
    collisionPadding = CONTENT_MARGIN,
    ...popperProps
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    react_popper_dist/* .Content */.UC,
    {
      ...popperScope,
      ...popperProps,
      ref: forwardedRef,
      align,
      collisionPadding,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...popperProps.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
}, "SelectPopperPosition"));
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME, {});
var VIEWPORT_NAME = "SelectViewport";
var SelectViewport = /* @__PURE__ */ (/* unused pure expression or super */ null && (React.forwardRef(
  /* @__PURE__ */ dist_name(function SelectViewport2(props, forwardedRef) {
    const { __scopeSelect, nonce, ...viewportProps } = props;
    const contentContext = useSelectContentContext(VIEWPORT_NAME, __scopeSelect);
    const viewportContext = useSelectViewportContext(VIEWPORT_NAME, __scopeSelect);
    const composedRefs = useComposedRefs(forwardedRef, contentContext.onViewportChange);
    const prevScrollTopRef = React.useRef(0);
    return /* @__PURE__ */ jsxs(Fragment2, { children: [
      /* @__PURE__ */ jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
          },
          nonce
        }
      ),
      /* @__PURE__ */ jsx(Collection.Slot, { scope: __scopeSelect, children: /* @__PURE__ */ jsx(
        Primitive.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...viewportProps,
          ref: composedRefs,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...viewportProps.style
          },
          onScroll: composeEventHandlers(viewportProps.onScroll, (event) => {
            const viewport = event.currentTarget;
            const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
            if (shouldExpandOnScrollRef?.current && contentWrapper) {
              const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
              if (scrolledBy > 0) {
                const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
                const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
                const cssHeight = parseFloat(contentWrapper.style.height);
                const prevHeight = Math.max(cssMinHeight, cssHeight);
                if (prevHeight < availableHeight) {
                  const nextHeight = prevHeight + scrolledBy;
                  const clampedNextHeight = Math.min(availableHeight, nextHeight);
                  const heightDiff = nextHeight - clampedNextHeight;
                  contentWrapper.style.height = clampedNextHeight + "px";
                  if (contentWrapper.style.bottom === "0px") {
                    viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
                    contentWrapper.style.justifyContent = "flex-end";
                  }
                }
              }
            }
            prevScrollTopRef.current = viewport.scrollTop;
          })
        }
      ) })
    ] });
  }, "SelectViewport")
)));
var GROUP_NAME = "SelectGroup";
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME);
var SelectGroup = /* @__PURE__ */ (/* unused pure expression or super */ null && (React.forwardRef(
  /* @__PURE__ */ dist_name(function SelectGroup2(props, forwardedRef) {
    const { __scopeSelect, ...groupProps } = props;
    const groupId = useId();
    return /* @__PURE__ */ jsx(SelectGroupContextProvider, { scope: __scopeSelect, id: groupId, children: /* @__PURE__ */ jsx(Primitive.div, { role: "group", "aria-labelledby": groupId, ...groupProps, ref: forwardedRef }) });
  }, "SelectGroup")
)));
var LABEL_NAME = "SelectLabel";
var SelectLabel = /* @__PURE__ */ (/* unused pure expression or super */ null && (React.forwardRef(
  /* @__PURE__ */ dist_name(function SelectLabel2(props, forwardedRef) {
    const { __scopeSelect, ...labelProps } = props;
    const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
    return /* @__PURE__ */ jsx(Primitive.div, { id: groupContext.id, ...labelProps, ref: forwardedRef });
  }, "SelectLabel")
)));
var ITEM_NAME = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME);
var SelectItem = /* @__PURE__ */ react.forwardRef(
  /* @__PURE__ */ dist_name(function SelectItem2(props, forwardedRef) {
    const {
      __scopeSelect,
      value,
      disabled = false,
      textValue: textValueProp,
      ...itemProps
    } = props;
    const context = useSelectContext(ITEM_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_NAME, __scopeSelect);
    const isSelected = context.value === value;
    const [textValue, setTextValue] = react.useState(textValueProp ?? "");
    const [isFocused, setIsFocused] = react.useState(false);
    const handleItemRefCallback = (0,react_use_callback_ref_dist/* .useCallbackRef */.c)(
      (node) => contentContext.itemRefCallback?.(node, value, disabled)
    );
    const composedRefs = (0,react_compose_refs_dist/* .useComposedRefs */.s)(forwardedRef, handleItemRefCallback);
    const textId = (0,react_id_dist/* .useId */.B)();
    const pointerTypeRef = react.useRef("touch");
    const handleSelect = /* @__PURE__ */ dist_name(() => {
      if (!disabled) {
        context.onValueChange(value);
        context.onOpenChange(false);
      }
    }, "handleSelect");
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      SelectItemContextProvider,
      {
        scope: __scopeSelect,
        value,
        disabled,
        textId,
        isSelected,
        onItemTextChange: react.useCallback((node) => {
          setTextValue((prevTextValue) => prevTextValue || (node?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Collection.ItemSlot,
          {
            scope: __scopeSelect,
            value,
            disabled,
            textValue,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
              react_primitive_dist/* .Primitive.div */.sG.div,
              {
                role: "option",
                "aria-labelledby": textId,
                "data-highlighted": isFocused ? "" : void 0,
                "aria-selected": isSelected && isFocused,
                "data-state": isSelected ? "checked" : "unchecked",
                "aria-disabled": disabled || void 0,
                "data-disabled": disabled ? "" : void 0,
                tabIndex: disabled ? void 0 : -1,
                ...itemProps,
                ref: composedRefs,
                onFocus: (0,primitive_dist/* .composeEventHandlers */.mK)(itemProps.onFocus, () => setIsFocused(true)),
                onBlur: (0,primitive_dist/* .composeEventHandlers */.mK)(itemProps.onBlur, () => setIsFocused(false)),
                onClick: (0,primitive_dist/* .composeEventHandlers */.mK)(itemProps.onClick, () => {
                  if (pointerTypeRef.current !== "mouse") handleSelect();
                }),
                onPointerUp: (0,primitive_dist/* .composeEventHandlers */.mK)(itemProps.onPointerUp, () => {
                  if (pointerTypeRef.current === "mouse") handleSelect();
                }),
                onPointerDown: (0,primitive_dist/* .composeEventHandlers */.mK)(itemProps.onPointerDown, (event) => {
                  pointerTypeRef.current = event.pointerType;
                }),
                onPointerMove: (0,primitive_dist/* .composeEventHandlers */.mK)(itemProps.onPointerMove, (event) => {
                  pointerTypeRef.current = event.pointerType;
                  if (disabled) {
                    contentContext.onItemLeave?.();
                  } else if (pointerTypeRef.current === "mouse") {
                    event.currentTarget.focus({ preventScroll: true });
                  }
                }),
                onPointerLeave: (0,primitive_dist/* .composeEventHandlers */.mK)(itemProps.onPointerLeave, (event) => {
                  if (event.currentTarget === document.activeElement) {
                    contentContext.onItemLeave?.();
                  }
                }),
                onKeyDown: (0,primitive_dist/* .composeEventHandlers */.mK)(itemProps.onKeyDown, (event) => {
                  if (disabled || event.target !== event.currentTarget) {
                    return;
                  }
                  const isTypingAhead = contentContext.searchRef?.current !== "";
                  if (isTypingAhead && event.key === " ") {
                    return;
                  }
                  if (SELECTION_KEYS.includes(event.key)) {
                    handleSelect();
                  }
                  if (event.key === " ") {
                    event.preventDefault();
                  }
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
);
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = /* @__PURE__ */ react.forwardRef(
  /* @__PURE__ */ dist_name(function SelectItemText2(props, forwardedRef) {
    const { __scopeSelect, className, style, ...itemTextProps } = props;
    const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
    const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
    const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
    const [itemTextNode, setItemTextNode] = react.useState(null);
    const handleItemTextRefCallback = (0,react_use_callback_ref_dist/* .useCallbackRef */.c)(
      (node) => contentContext.itemTextRefCallback?.(node, itemContext.value, itemContext.disabled)
    );
    const composedRefs = (0,react_compose_refs_dist/* .useComposedRefs */.s)(
      forwardedRef,
      setItemTextNode,
      itemContext.onItemTextChange,
      handleItemTextRefCallback
    );
    const textContent = itemTextNode?.textContent;
    const nativeOption = react.useMemo(
      () => /* @__PURE__ */ (0,jsx_runtime.jsx)("option", { value: itemContext.value, disabled: itemContext.disabled, children: textContent }, itemContext.value),
      [itemContext.disabled, itemContext.value, textContent]
    );
    const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
    (0,react_use_layout_effect_dist/* .useLayoutEffect */.N)(() => {
      onNativeOptionAdd(nativeOption);
      return () => onNativeOptionRemove(nativeOption);
    }, [onNativeOptionAdd, onNativeOptionRemove, nativeOption]);
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* .Primitive.span */.sG.span, { id: itemContext.textId, ...itemTextProps, ref: composedRefs }),
      itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren && !shouldShowPlaceholder(context.value) ? react_dom.createPortal(itemTextProps.children, context.valueNode) : null
    ] });
  }, "SelectItemText")
);
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicator = /* @__PURE__ */ react.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dist_name(function SelectItemIndicator2(props, forwardedRef) {
    const { __scopeSelect, ...itemIndicatorProps } = props;
    const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
    return itemContext.isSelected ? /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* .Primitive.span */.sG.span, { "aria-hidden": true, ...itemIndicatorProps, ref: forwardedRef }) : null;
  }, "SelectItemIndicator")
);
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = /* @__PURE__ */ (/* unused pure expression or super */ null && (React.forwardRef(/* @__PURE__ */ dist_name(function SelectScrollUpButton2(props, forwardedRef) {
  const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const [canScrollUp, setCanScrollUp] = React.useState(false);
  const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
  useLayoutEffect(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function() {
        const canScrollUp2 = viewport.scrollTop > 0;
        setCanScrollUp(canScrollUp2);
      };
      var handleScroll = handleScroll2;
      dist_name(handleScroll2, "handleScroll");
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollUp ? /* @__PURE__ */ jsx(
    SelectScrollButtonImpl,
    {
      ...props,
      ref: composedRefs,
      onAutoScroll: () => {
        const { viewport, selectedItem } = contentContext;
        if (viewport && selectedItem) {
          viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
        }
      }
    }
  ) : null;
}, "SelectScrollUpButton"))));
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = /* @__PURE__ */ (/* unused pure expression or super */ null && (React.forwardRef(/* @__PURE__ */ dist_name(function SelectScrollDownButton2(props, forwardedRef) {
  const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const [canScrollDown, setCanScrollDown] = React.useState(false);
  const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
  useLayoutEffect(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function() {
        const maxScroll = viewport.scrollHeight - viewport.clientHeight;
        const canScrollDown2 = Math.ceil(viewport.scrollTop) < maxScroll;
        setCanScrollDown(canScrollDown2);
      };
      var handleScroll = handleScroll2;
      dist_name(handleScroll2, "handleScroll");
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollDown ? /* @__PURE__ */ jsx(
    SelectScrollButtonImpl,
    {
      ...props,
      ref: composedRefs,
      onAutoScroll: () => {
        const { viewport, selectedItem } = contentContext;
        if (viewport && selectedItem) {
          viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
        }
      }
    }
  ) : null;
}, "SelectScrollDownButton"))));
var SelectScrollButtonImpl = /* @__PURE__ */ (/* unused pure expression or super */ null && (React.forwardRef(/* @__PURE__ */ dist_name(function SelectScrollButtonImpl2(props, forwardedRef) {
  const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
  const contentContext = useSelectContentContext("SelectScrollButton", __scopeSelect);
  const autoScrollTimerRef = React.useRef(null);
  const getItems = useCollection(__scopeSelect);
  const clearAutoScrollTimer = React.useCallback(() => {
    if (autoScrollTimerRef.current !== null) {
      window.clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  }, []);
  React.useEffect(() => {
    return () => clearAutoScrollTimer();
  }, [clearAutoScrollTimer]);
  useLayoutEffect(() => {
    const activeItem = getItems().find((item) => item.ref.current === document.activeElement);
    activeItem?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [getItems]);
  return /* @__PURE__ */ jsx(
    Primitive.div,
    {
      "aria-hidden": true,
      ...scrollIndicatorProps,
      ref: forwardedRef,
      style: { flexShrink: 0, ...scrollIndicatorProps.style },
      onPointerDown: composeEventHandlers(scrollIndicatorProps.onPointerDown, () => {
        if (autoScrollTimerRef.current === null) {
          autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }
      }),
      onPointerMove: composeEventHandlers(scrollIndicatorProps.onPointerMove, () => {
        contentContext.onItemLeave?.();
        if (autoScrollTimerRef.current === null) {
          autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }
      }),
      onPointerLeave: composeEventHandlers(scrollIndicatorProps.onPointerLeave, () => {
        clearAutoScrollTimer();
      })
    }
  );
}, "SelectScrollButtonImpl"))));
var SelectSeparator = /* @__PURE__ */ (/* unused pure expression or super */ null && (React.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dist_name(function SelectSeparator2(props, forwardedRef) {
    const { __scopeSelect, ...separatorProps } = props;
    return /* @__PURE__ */ jsx(Primitive.div, { "aria-hidden": true, ...separatorProps, ref: forwardedRef });
  }, "SelectSeparator")
)));
var ARROW_NAME = "SelectArrow";
var SelectArrow = /* @__PURE__ */ (/* unused pure expression or super */ null && (React.forwardRef(
  /* @__PURE__ */ dist_name(function SelectArrow2(props, forwardedRef) {
    const { __scopeSelect, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const contentContext = useSelectContentContext(ARROW_NAME, __scopeSelect);
    return contentContext.position === "popper" ? /* @__PURE__ */ jsx(PopperPrimitive.Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef }) : null;
  }, "SelectArrow")
)));
var BUBBLE_INPUT_NAME = "SelectBubbleInput";
var SelectBubbleInput = /* @__PURE__ */ react.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dist_name(function SelectBubbleInput2({ __scopeSelect, ...props }, forwardedRef) {
    const context = useSelectContext(BUBBLE_INPUT_NAME, __scopeSelect);
    const { value, onValueChange, required, disabled, name, autoComplete, form } = context;
    const { nativeOptions, nativeSelectKey } = context;
    const ref = react.useRef(null);
    const composedRefs = (0,react_compose_refs_dist/* .useComposedRefs */.s)(forwardedRef, ref);
    const selectValue = value ?? "";
    const prevValue = usePrevious(selectValue);
    const hasEmptyValueOption = Array.from(nativeOptions).some(
      (option) => (option.props.value ?? "") === ""
    );
    react.useEffect(() => {
      const select = ref.current;
      if (!select) return;
      const selectProto = window.HTMLSelectElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        selectProto,
        "value"
      );
      const setValue = descriptor.set;
      if (prevValue !== selectValue && setValue) {
        const event = new Event("change", { bubbles: true });
        setValue.call(select, selectValue);
        select.dispatchEvent(event);
      }
    }, [prevValue, selectValue]);
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
      react_primitive_dist/* .Primitive.select */.sG.select,
      {
        "aria-hidden": true,
        required,
        tabIndex: -1,
        name,
        autoComplete,
        disabled,
        form,
        onChange: (event) => onValueChange(event.target.value),
        ...props,
        style: { ...react_visually_hidden_dist/* .VISUALLY_HIDDEN_STYLES */.Qg, ...props.style },
        ref: composedRefs,
        defaultValue: selectValue,
        children: [
          shouldShowPlaceholder(value) && !hasEmptyValueOption ? /* @__PURE__ */ (0,jsx_runtime.jsx)("option", { value: "" }) : null,
          Array.from(nativeOptions)
        ]
      },
      nativeSelectKey
    );
  }, "SelectBubbleInput")
);
function isFunction(value) {
  return typeof value === "function";
}
dist_name(isFunction, "isFunction");
function shouldShowPlaceholder(value) {
  return value === "" || value === void 0;
}
dist_name(shouldShowPlaceholder, "shouldShowPlaceholder");
function useTypeaheadSearch(onSearchChange) {
  const handleSearchChange = (0,react_use_callback_ref_dist/* .useCallbackRef */.c)(onSearchChange);
  const searchRef = react.useRef("");
  const timerRef = react.useRef(0);
  const handleTypeaheadSearch = react.useCallback(
    (key) => {
      const search = searchRef.current + key;
      handleSearchChange(search);
      (/* @__PURE__ */ dist_name((function updateSearch(value) {
        searchRef.current = value;
        window.clearTimeout(timerRef.current);
        if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
      }), "updateSearch"))(search);
    },
    [handleSearchChange]
  );
  const resetTypeahead = react.useCallback(() => {
    searchRef.current = "";
    window.clearTimeout(timerRef.current);
  }, []);
  react.useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  return [searchRef, handleTypeaheadSearch, resetTypeahead];
}
dist_name(useTypeaheadSearch, "useTypeaheadSearch");
function findNextItem(items, search, currentItem) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
  let wrappedItems = wrapArray(items, Math.max(currentItemIndex, 0));
  const excludeCurrentItem = normalizedSearch.length === 1;
  if (excludeCurrentItem) wrappedItems = wrappedItems.filter((v) => v !== currentItem);
  const nextItem = wrappedItems.find(
    (item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextItem !== currentItem ? nextItem : void 0;
}
dist_name(findNextItem, "findNextItem");
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
dist_name(wrapArray, "wrapArray");

//# sourceMappingURL=index.mjs.map


},

};
