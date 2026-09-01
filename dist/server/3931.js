export const __rspack_esm_id = 3931;
export const __rspack_esm_ids = [3931];
export const __webpack_modules__ = {
56678(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var _radix_ui_primitive__rspack_import_8 = __webpack_require__(70705);
/* import */ var _radix_ui_react_context__rspack_import_2 = __webpack_require__(71953);
/* import */ var _radix_ui_react_roving_focus__rspack_import_3 = __webpack_require__(47549);
/* import */ var _radix_ui_react_presence__rspack_import_9 = __webpack_require__(82287);
/* import */ var _radix_ui_react_primitive__rspack_import_7 = __webpack_require__(63623);
/* import */ var _radix_ui_react_direction__rspack_import_4 = __webpack_require__(87567);
/* import */ var _radix_ui_react_use_controllable_state__rspack_import_5 = __webpack_require__(36879);
/* import */ var _radix_ui_react_id__rspack_import_6 = __webpack_require__(46391);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(95170);
"use client";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/tabs.tsx











var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = (0,_radix_ui_react_context__rspack_import_2/* .createContextScope */.A)(TABS_NAME, [
  _radix_ui_react_roving_focus__rspack_import_3/* .createRovingFocusGroupScope */.RG
]);
var useRovingFocusGroupScope = (0,_radix_ui_react_roving_focus__rspack_import_3/* .createRovingFocusGroupScope */.RG)();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs = /* @__PURE__ */ react__rspack_import_0.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function Tabs2(props, forwardedRef) {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = "automatic",
      ...tabsProps
    } = props;
    const direction = (0,_radix_ui_react_direction__rspack_import_4/* .useDirection */.jH)(dir);
    const [value, setValue] = (0,_radix_ui_react_use_controllable_state__rspack_import_5/* .useControllableState */.i)({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? "",
      caller: TABS_NAME
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: (0,_radix_ui_react_id__rspack_import_6/* .useId */.B)(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
          _radix_ui_react_primitive__rspack_import_7/* .Primitive.div */.sG.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }, "Tabs")
);
var TAB_LIST_NAME = "TabsList";
var TabsList = /* @__PURE__ */ react__rspack_import_0.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function TabsList2(props, forwardedRef) {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
      _radix_ui_react_roving_focus__rspack_import_3/* .Root */.bL,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
          _radix_ui_react_primitive__rspack_import_7/* .Primitive.div */.sG.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }, "TabsList")
);
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger = /* @__PURE__ */ react__rspack_import_0.forwardRef(
  /* @__PURE__ */ __name(function TabsTrigger2(props, forwardedRef) {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
      _radix_ui_react_roving_focus__rspack_import_3/* .Item */.q7,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
          _radix_ui_react_primitive__rspack_import_7/* .Primitive.button */.sG.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: (0,_radix_ui_primitive__rspack_import_8/* .composeEventHandlers */.mK)(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: (0,_radix_ui_primitive__rspack_import_8/* .composeEventHandlers */.mK)(props.onKeyDown, (event) => {
              if (disabled || event.target !== event.currentTarget) {
                return;
              }
              if ([" ", "Enter"].includes(event.key)) {
                context.onValueChange(value);
              }
            }),
            onFocus: (0,_radix_ui_primitive__rspack_import_8/* .composeEventHandlers */.mK)(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== "manual";
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }, "TabsTrigger")
);
var CONTENT_NAME = "TabsContent";
var TabsContent = /* @__PURE__ */ react__rspack_import_0.forwardRef(
  /* @__PURE__ */ __name(function TabsContent2(props, forwardedRef) {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = react__rspack_import_0.useRef(isSelected);
    react__rspack_import_0.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(_radix_ui_react_presence__rspack_import_9/* .Presence */.C, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
      _radix_ui_react_primitive__rspack_import_7/* .Primitive.div */.sG.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }, "TabsContent")
);
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
__name(makeTriggerId, "makeTriggerId");
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
__name(makeContentId, "makeContentId");
var Root2 = Tabs;
var List = TabsList;
var Trigger = TabsTrigger;
var Content = TabsContent;

//# sourceMappingURL=index.mjs.map

__webpack_require__.d(__webpack_exports__, {
  B8: () => (List),
  UC: () => (Content),
  bL: () => (Root2),
  l9: () => (Trigger)
});


},

};
