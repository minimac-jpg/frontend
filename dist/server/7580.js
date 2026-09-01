export const __rspack_esm_id = 7580;
export const __rspack_esm_ids = [7580];
export const __webpack_modules__ = {
64935(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var _radix_ui_react_compose_refs__rspack_import_4 = __webpack_require__(1747);
/* import */ var _radix_ui_react_context__rspack_import_2 = __webpack_require__(71953);
/* import */ var _radix_ui_primitive__rspack_import_6 = __webpack_require__(70705);
/* import */ var _radix_ui_react_use_controllable_state__rspack_import_3 = __webpack_require__(36879);
/* import */ var _radix_ui_react_use_size__rspack_import_8 = __webpack_require__(16021);
/* import */ var _radix_ui_react_presence__rspack_import_7 = __webpack_require__(82287);
/* import */ var _radix_ui_react_primitive__rspack_import_5 = __webpack_require__(63623);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(95170);
"use client";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/checkbox.tsx









var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext, createCheckboxScope] = (0,_radix_ui_react_context__rspack_import_2/* .createContextScope */.A)(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
  const {
    __scopeCheckbox,
    checked: checkedProp,
    children,
    defaultChecked,
    disabled,
    form,
    name,
    onCheckedChange,
    required,
    value = "on",
    // @ts-expect-error
    internal_do_not_use_render
  } = props;
  const [checked, setChecked] = (0,_radix_ui_react_use_controllable_state__rspack_import_3/* .useControllableState */.i)({
    prop: checkedProp,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
    caller: CHECKBOX_NAME
  });
  const [control, setControl] = react__rspack_import_0.useState(null);
  const [bubbleInput, setBubbleInput] = react__rspack_import_0.useState(null);
  const hasConsumerStoppedPropagationRef = react__rspack_import_0.useRef(false);
  const [userInteractionCount, onUserInteraction] = react__rspack_import_0.useReducer(
    (count) => count + 1,
    0
  );
  const isFormControl = control ? !!form || !!control.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    true
  );
  const context = {
    checked,
    disabled,
    setChecked,
    control,
    setControl,
    name,
    form,
    value,
    hasConsumerStoppedPropagationRef,
    userInteractionCount,
    onUserInteraction,
    required,
    defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
    isFormControl,
    bubbleInput,
    setBubbleInput
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
    CheckboxProviderImpl,
    {
      scope: __scopeCheckbox,
      ...context,
      children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
    }
  );
}
__name(CheckboxProvider, "CheckboxProvider");
var TRIGGER_NAME = "CheckboxTrigger";
var CheckboxTrigger = /* @__PURE__ */ react__rspack_import_0.forwardRef(
  /* @__PURE__ */ __name(function CheckboxTrigger2({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) {
    const {
      control,
      value,
      disabled,
      checked,
      required,
      setControl,
      setChecked,
      hasConsumerStoppedPropagationRef,
      onUserInteraction,
      isFormControl,
      bubbleInput
    } = useCheckboxContext(TRIGGER_NAME, __scopeCheckbox);
    const composedRefs = (0,_radix_ui_react_compose_refs__rspack_import_4/* .useComposedRefs */.s)(forwardedRef, setControl);
    const initialCheckedStateRef = react__rspack_import_0.useRef(checked);
    react__rspack_import_0.useEffect(() => {
      const form = control?.form;
      if (form) {
        const reset = /* @__PURE__ */ __name(() => setChecked(initialCheckedStateRef.current), "reset");
        form.addEventListener("reset", reset);
        return () => form.removeEventListener("reset", reset);
      }
    }, [control, setChecked]);
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
      _radix_ui_react_primitive__rspack_import_5/* .Primitive.button */.sG.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        "aria-required": required,
        "data-state": getState(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...checkboxProps,
        ref: composedRefs,
        onKeyDown: (0,_radix_ui_primitive__rspack_import_6/* .composeEventHandlers */.mK)(onKeyDown, (event) => {
          if (event.key === "Enter") event.preventDefault();
        }),
        onClick: (0,_radix_ui_primitive__rspack_import_6/* .composeEventHandlers */.mK)(onClick, (event) => {
          onUserInteraction();
          setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
          if (bubbleInput && isFormControl) {
            hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
            if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
          }
        })
      }
    );
  }, "CheckboxTrigger")
);
var Checkbox = /* @__PURE__ */ react__rspack_import_0.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function Checkbox2(props, forwardedRef) {
    const {
      __scopeCheckbox,
      name,
      checked,
      defaultChecked,
      required,
      disabled,
      value,
      onCheckedChange,
      form,
      ...checkboxProps
    } = props;
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
      CheckboxProvider,
      {
        __scopeCheckbox,
        checked,
        defaultChecked,
        disabled,
        required,
        onCheckedChange,
        name,
        form,
        value,
        internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
            CheckboxTrigger,
            {
              ...checkboxProps,
              ref: forwardedRef,
              __scopeCheckbox
            }
          ),
          isFormControl && /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
            CheckboxBubbleInput,
            {
              __scopeCheckbox
            }
          )
        ] })
      }
    );
  }, "Checkbox")
);
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = /* @__PURE__ */ react__rspack_import_0.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function CheckboxIndicator2(props, forwardedRef) {
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
      _radix_ui_react_presence__rspack_import_7/* .Presence */.C,
      {
        present: forceMount || isIndeterminate(context.checked) || context.checked === true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
          _radix_ui_react_primitive__rspack_import_5/* .Primitive.span */.sG.span,
          {
            "data-state": getState(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef,
            style: { pointerEvents: "none", ...props.style }
          }
        )
      }
    );
  }, "CheckboxIndicator")
);
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput";
var CheckboxBubbleInput = /* @__PURE__ */ react__rspack_import_0.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function CheckboxBubbleInput2({ __scopeCheckbox, onClick, ...props }, forwardedRef) {
    const {
      control,
      hasConsumerStoppedPropagationRef,
      userInteractionCount,
      checked,
      defaultChecked,
      required,
      disabled,
      name,
      value,
      form,
      bubbleInput,
      setBubbleInput
    } = useCheckboxContext(BUBBLE_INPUT_NAME, __scopeCheckbox);
    const composedRefs = (0,_radix_ui_react_compose_refs__rspack_import_4/* .useComposedRefs */.s)(forwardedRef, setBubbleInput);
    const controlSize = (0,_radix_ui_react_use_size__rspack_import_8/* .useSize */.X)(control);
    const shouldStopClickPropagationRef = react__rspack_import_0.useRef(false);
    const prevCheckedRef = react__rspack_import_0.useRef(checked);
    const prevUserInteractionCountRef = react__rspack_import_0.useRef(userInteractionCount);
    react__rspack_import_0.useEffect(() => {
      const input = bubbleInput;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      const isUserInteraction = userInteractionCount !== prevUserInteractionCountRef.current;
      prevUserInteractionCountRef.current = userInteractionCount;
      const checkedChanged = prevCheckedRef.current !== checked;
      prevCheckedRef.current = checked;
      const bubbles = !(isUserInteraction && hasConsumerStoppedPropagationRef.current);
      if (checkedChanged && setChecked) {
        shouldStopClickPropagationRef.current = !isUserInteraction;
        const event = new Event("click", { bubbles });
        input.indeterminate = isIndeterminate(checked);
        setChecked.call(input, isIndeterminate(checked) ? false : checked);
        input.dispatchEvent(event);
        shouldStopClickPropagationRef.current = false;
      }
    }, [bubbleInput, checked, hasConsumerStoppedPropagationRef, userInteractionCount]);
    const defaultCheckedRef = react__rspack_import_0.useRef(isIndeterminate(checked) ? false : checked);
    return /* @__PURE__ */ (0,react_jsx_runtime__rspack_import_1.jsx)(
      _radix_ui_react_primitive__rspack_import_5/* .Primitive.input */.sG.input,
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: defaultChecked ?? defaultCheckedRef.current,
        required,
        disabled,
        name,
        value,
        form,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        onClick: (0,_radix_ui_primitive__rspack_import_6/* .composeEventHandlers */.mK)(onClick, (event) => {
          if (shouldStopClickPropagationRef.current) {
            event.stopPropagation();
          }
        }),
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }, "CheckboxBubbleInput")
);
function isFunction(value) {
  return typeof value === "function";
}
__name(isFunction, "isFunction");
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
__name(isIndeterminate, "isIndeterminate");
function getState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
__name(getState, "getState");

//# sourceMappingURL=index.mjs.map

__webpack_require__.d(__webpack_exports__, {
  C1: () => (CheckboxIndicator),
  bL: () => (Checkbox)
});


},

};
