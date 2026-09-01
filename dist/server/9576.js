export const __rspack_esm_id = 9576;
export const __rspack_esm_ids = [9576];
export const __webpack_modules__ = {
55361(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var _base_ui_utils_store__rspack_import_5 = __webpack_require__(92477);
/* import */ var _root_ComboboxRootContext_mjs__rspack_import_4 = __webpack_require__(60598);
/* import */ var _internals_useRenderElement_mjs__rspack_import_10 = __webpack_require__(21724);
/* import */ var _store_mjs__rspack_import_6 = __webpack_require__(81612);
/* import */ var _internals_use_button_index_mjs__rspack_import_7 = __webpack_require__(78973);
/* import */ var _internals_field_root_context_FieldRootContext_mjs__rspack_import_3 = __webpack_require__(36649);
/* import */ var _internals_useTransitionStatus_mjs__rspack_import_8 = __webpack_require__(11924);
/* import */ var _internals_stateAttributesMapping_mjs__rspack_import_1 = __webpack_require__(55032);
/* import */ var _internals_useOpenChangeComplete_mjs__rspack_import_9 = __webpack_require__(83378);
/* import */ var _internals_createBaseUIEventDetails_mjs__rspack_import_12 = __webpack_require__(93201);
/* import */ var _internals_reasons_mjs__rspack_import_11 = __webpack_require__(5355);
/* import */ var _utils_popupStateMapping_mjs__rspack_import_2 = __webpack_require__(7574);
'use client';














const stateAttributesMapping = {
  ..._internals_stateAttributesMapping_mjs__rspack_import_1/* .transitionStatusMapping */.G,
  ..._utils_popupStateMapping_mjs__rspack_import_2/* .triggerOpenStateMapping */.qV
};

/**
 * Clears the value when clicked.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
const ComboboxClear = /*#__PURE__*/react__rspack_import_0.forwardRef(function ComboboxClear(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp = false,
    nativeButton = true,
    keepMounted = false,
    style,
    ...elementProps
  } = componentProps;
  const {
    disabled: fieldDisabled
  } = (0,_internals_field_root_context_FieldRootContext_mjs__rspack_import_3/* .useFieldRootContext */.V$)();
  const store = (0,_root_ComboboxRootContext_mjs__rspack_import_4/* .useComboboxRootContext */.Ee)();
  const selectionMode = (0,_base_ui_utils_store__rspack_import_5/* .useStore */.P)(store, _store_mjs__rspack_import_6/* .selectors.selectionMode */.T.selectionMode);
  const comboboxDisabled = (0,_base_ui_utils_store__rspack_import_5/* .useStore */.P)(store, _store_mjs__rspack_import_6/* .selectors.disabled */.T.disabled);
  const readOnly = (0,_base_ui_utils_store__rspack_import_5/* .useStore */.P)(store, _store_mjs__rspack_import_6/* .selectors.readOnly */.T.readOnly);
  const open = (0,_base_ui_utils_store__rspack_import_5/* .useStore */.P)(store, _store_mjs__rspack_import_6/* .selectors.open */.T.open);
  const selectedValue = (0,_base_ui_utils_store__rspack_import_5/* .useStore */.P)(store, _store_mjs__rspack_import_6/* .selectors.selectedValue */.T.selectedValue);
  const hasSelectionChips = (0,_base_ui_utils_store__rspack_import_5/* .useStore */.P)(store, _store_mjs__rspack_import_6/* .selectors.hasSelectionChips */.T.hasSelectionChips);
  const inputValue = (0,_root_ComboboxRootContext_mjs__rspack_import_4/* .useComboboxInputValueContext */.dc)();
  let visible = false;
  if (selectionMode === 'none') {
    visible = inputValue !== '';
  } else if (selectionMode === 'single') {
    visible = selectedValue != null;
  } else {
    visible = hasSelectionChips;
  }
  const disabled = fieldDisabled || comboboxDisabled || disabledProp;
  const {
    buttonRef,
    getButtonProps
  } = (0,_internals_use_button_index_mjs__rspack_import_7/* .useButton */.s)({
    native: nativeButton,
    disabled
  });
  const {
    mounted,
    transitionStatus,
    setMounted
  } = (0,_internals_useTransitionStatus_mjs__rspack_import_8/* .useTransitionStatus */.$)(visible);
  const state = {
    disabled,
    visible,
    open,
    transitionStatus
  };
  (0,_internals_useOpenChangeComplete_mjs__rspack_import_9/* .useOpenChangeComplete */.v)({
    open: visible,
    ref: store.state.clearRef,
    onComplete() {
      if (!visible) {
        setMounted(false);
      }
    }
  });
  const element = (0,_internals_useRenderElement_mjs__rspack_import_10/* .useRenderElement */.o)('button', componentProps, {
    state,
    ref: [forwardedRef, buttonRef, store.state.clearRef],
    props: [{
      tabIndex: -1,
      children: 'x',
      // Avoid stealing focus from the input.
      onMouseDown(event) {
        event.preventDefault();
      },
      onClick(event) {
        if (disabled || readOnly) {
          return;
        }
        const type = store.state.keyboardActiveRef.current ? _internals_reasons_mjs__rspack_import_11/* .keyboard */.QJ : _internals_reasons_mjs__rspack_import_11/* .pointer */.Wn;
        store.state.setInputValue('', (0,_internals_createBaseUIEventDetails_mjs__rspack_import_12/* .createChangeEventDetails */.d)(_internals_reasons_mjs__rspack_import_11/* .clearPress */.R0, event.nativeEvent));
        if (selectionMode !== 'none') {
          store.state.setSelectedValue(Array.isArray(selectedValue) ? [] : null, (0,_internals_createBaseUIEventDetails_mjs__rspack_import_12/* .createChangeEventDetails */.d)(_internals_reasons_mjs__rspack_import_11/* .clearPress */.R0, event.nativeEvent));
          // A distinct object shape: `Store.update` iterates own keys, so passing an explicit
          // `selectedIndex: undefined` would overwrite the state instead of leaving it alone.
          store.state.setIndices({
            activeIndex: null,
            selectedIndex: null,
            type
          });
        } else {
          store.state.setIndices({
            activeIndex: null,
            type
          });
        }
        store.state.inputRef.current?.focus();
      }
    }, elementProps, getButtonProps],
    stateAttributesMapping
  });
  const shouldRender = keepMounted || mounted;
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (false) {}
__webpack_require__.d(__webpack_exports__, {
}, {
  V: ComboboxClear
});


},
98737(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ ComboboxEmpty_ComboboxEmpty)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/useRenderElement.mjs + 4 modules
var useRenderElement = __webpack_require__(21724);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/root/ComboboxRootContext.mjs
var ComboboxRootContext = __webpack_require__(60598);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/platform/os.mjs
var os = __webpack_require__(28229);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useTimeout.mjs
var useTimeout = __webpack_require__(37227);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/combobox/utils/useInitialLiveRegionTextMutation.mjs
'use client';





// Word Joiner is invisible and zero-width, so it forces a text mutation without shifting layout.
const LIVE_REGION_MARKER = '\u2060';
// Safari VoiceOver needed roughly 200ms to reliably notice the initial polite live-region change.
const INITIAL_LIVE_REGION_TEXT_MUTATION_RESET_DELAY = 200;
function findLastTextNode(root) {
  const walker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let lastTextNode = null;
  while (walker.nextNode()) {
    const textNode = walker.currentNode;
    if (textNode.nodeValue !== '') {
      lastTextNode = textNode;
    }
  }
  return lastTextNode;
}
function useInitialLiveRegionTextMutation() {
  const timeout = (0,useTimeout/* .useTimeout */.Z)();
  const rootRef = react.useRef(null);

  // Only the initial mounted announcement needs the marker; later text updates announce naturally.
  react.useEffect(() => {
    if (os/* .ios */.s4) {
      return undefined;
    }
    const root = rootRef.current;
    if (root == null) {
      return undefined;
    }
    const textNode = findLastTextNode(root);
    if (textNode == null) {
      return undefined;
    }
    const originalValue = textNode.data;
    const markedValue = `${originalValue}${LIVE_REGION_MARKER}`;
    textNode.nodeValue = markedValue;
    timeout.start(INITIAL_LIVE_REGION_TEXT_MUTATION_RESET_DELAY, () => {
      if (textNode.nodeValue === markedValue) {
        textNode.nodeValue = originalValue;
      }
    });
    return () => {
      timeout.clear();
      if (textNode.nodeValue === markedValue) {
        textNode.nodeValue = originalValue;
      }
    };
  }, [rootRef, timeout]);
  return rootRef;
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/combobox/empty/ComboboxEmpty.mjs
'use client';






/**
 * Renders its children only when the list is empty.
 * Requires the `items` prop on the root component.
 * Announces changes politely to screen readers.
 * This component's root element must remain mounted in the DOM to announce
 * changes consistently across screen readers. Avoid hiding or removing the
 * component itself with `display: none`, `hidden`, `aria-hidden`, or conditional
 * rendering. Prefer updating or conditionally rendering its children instead.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
const ComboboxEmpty_ComboboxEmpty = /*#__PURE__*/react.forwardRef(function ComboboxEmpty(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    children: childrenProp,
    ...elementProps
  } = componentProps;
  const {
    filteredItems
  } = (0,ComboboxRootContext/* .useComboboxDerivedItemsContext */.Dc)();
  const store = (0,ComboboxRootContext/* .useComboboxRootContext */.Ee)();
  const emptyRef = useInitialLiveRegionTextMutation();
  const children = filteredItems.length === 0 ? childrenProp : null;
  return (0,useRenderElement/* .useRenderElement */.o)('div', componentProps, {
    ref: [forwardedRef, store.state.emptyRef, emptyRef],
    props: [{
      children,
      role: 'status',
      'aria-live': 'polite',
      'aria-atomic': true
    }, elementProps]
  });
});
if (false) {}

},
4317(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ ComboboxInput_ComboboxInput)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/store/useStore.mjs + 1 modules
var useStore = __webpack_require__(92477);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useStableCallback.mjs
var useStableCallback = __webpack_require__(77942);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/platform/os.mjs
var os = __webpack_require__(28229);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/platform/engine.mjs
var engine = __webpack_require__(6509);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/useBaseUiId.mjs
var useBaseUiId = __webpack_require__(35641);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/useRenderElement.mjs + 4 modules
var useRenderElement = __webpack_require__(21724);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/root/ComboboxRootContext.mjs
var ComboboxRootContext = __webpack_require__(60598);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/utils/stateAttributesMapping.mjs
var stateAttributesMapping = __webpack_require__(32201);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/store.mjs
var combobox_store = __webpack_require__(81612);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
var FieldRootContext = __webpack_require__(36649);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/field-constants/constants.mjs
var constants = __webpack_require__(43236);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/labelable-provider/LabelableContext.mjs
var LabelableContext = __webpack_require__(16742);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/combobox/chips/ComboboxChipsContext.mjs
'use client';


const ComboboxChipsContext = /*#__PURE__*/react.createContext(undefined);
if (false) {}
function useComboboxChipsContext() {
  return react.useContext(ComboboxChipsContext);
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/event.mjs
var utils_event = __webpack_require__(61489);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/positioner/ComboboxPositionerContext.mjs
var ComboboxPositionerContext = __webpack_require__(68150);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
var createBaseUIEventDetails = __webpack_require__(93201);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/reason-parts.mjs
var reason_parts = __webpack_require__(5355);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/direction-context/DirectionContext.mjs
var DirectionContext = __webpack_require__(26246);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/utils/ComboboxInternalDismissButton.mjs
var ComboboxInternalDismissButton = __webpack_require__(18215);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/utils/parts.mjs
var parts = __webpack_require__(97099);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/combobox/input/ComboboxInput.mjs
'use client';






















/**
 * A text input to search for items in the list.
 * Renders an `<input>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */

const ComboboxInput_ComboboxInput = /*#__PURE__*/react.forwardRef(function ComboboxInput(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp = false,
    id: idProp,
    style,
    ...elementProps
  } = componentProps;
  const {
    state: fieldState,
    disabled: fieldDisabled,
    setTouched,
    setFocused,
    validationMode,
    validation
  } = (0,FieldRootContext/* .useFieldRootContext */.V$)();
  const {
    labelId: fieldLabelId
  } = (0,LabelableContext/* .useLabelableContext */.H)();
  const comboboxChipsContext = useComboboxChipsContext();
  const positioning = (0,ComboboxPositionerContext/* .useComboboxPositionerContext */.O)(true);
  const hasPositionerParent = Boolean(positioning);
  const store = (0,ComboboxRootContext/* .useComboboxRootContext */.Ee)();
  // `inputValue` can't be placed in the store.
  // https://github.com/mui/base-ui/issues/2703
  const inputValue = (0,ComboboxRootContext/* .useComboboxInputValueContext */.dc)();
  const direction = (0,DirectionContext/* .useDirection */.j)();
  const required = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.required */.T.required);
  const comboboxDisabled = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.disabled */.T.disabled);
  const readOnly = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.readOnly */.T.readOnly);
  const name = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.name */.T.name);
  const form = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.form */.T.form);
  const selectionMode = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.selectionMode */.T.selectionMode);
  const autoHighlightMode = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.autoHighlight */.T.autoHighlight);
  const inputProps = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.inputProps */.T.inputProps);
  const triggerProps = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.triggerProps */.T.triggerProps);
  const open = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.open */.T.open);
  const mounted = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.mounted */.T.mounted);
  const selectedValue = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.selectedValue */.T.selectedValue);
  const rootId = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.id */.T.id);
  const inline = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.inline */.T.inline);
  const modal = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.modal */.T.modal);
  const autoHighlightEnabled = Boolean(autoHighlightMode);
  const popupSide = (0,parts/* .usePopupSide */.Xb)(store);
  const disabled = fieldDisabled || comboboxDisabled || disabledProp;
  const listEmpty = (0,parts/* .useListEmpty */.$B)();
  const isInsidePopup = hasPositionerParent || inline;
  const focusManagerModal = !isInsidePopup || modal;
  const id = (0,useBaseUiId/* .useBaseUiId */.e)(idProp ?? (!isInsidePopup ? rootId : undefined));
  const fieldStateForInput = hasPositionerParent ? constants/* .DEFAULT_FIELD_STATE_ATTRIBUTES */.HH : fieldState;
  const [composingValue, setComposingValue] = react.useState(null);
  const isComposingRef = react.useRef(false);
  const lastActiveIndexRef = react.useRef(null);
  const shouldRestoreActiveIndexRef = react.useRef(false);
  const inputOwnsFormValue = selectionMode === 'none' && !hasPositionerParent;
  const setInputElement = (0,useStableCallback/* .useStableCallback */.K)(element => {
    const nextIsInsidePopup = hasPositionerParent || store.state.inline;
    if (nextIsInsidePopup && !store.state.hasInputValue) {
      store.state.setInputValue('', (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)((/* inlined export .none */"none")));
    }
    store.update({
      inputElement: element,
      inputInsidePopup: nextIsInsidePopup,
      inputOwnsFormValue
    });
  });
  const validationProps = hasPositionerParent ? elementProps : validation.getValidationProps(disabled, elementProps);
  function clearHighlight() {
    store.state.setIndices({
      activeIndex: null,
      selectedIndex: null,
      type: store.state.keyboardActiveRef.current ? reason_parts/* .keyboard */.QJ : reason_parts/* .pointer */.Wn
    });
  }
  function markPointerActive() {
    store.state.keyboardActiveRef.current = false;
  }
  const state = {
    ...fieldStateForInput,
    open,
    disabled,
    readOnly,
    popupSide,
    listEmpty
  };
  function handleKeyDown(event) {
    if (!comboboxChipsContext) {
      return undefined;
    }
    let nextIndex;
    const {
      highlightedChipIndex
    } = comboboxChipsContext;
    const renderedChipsCount = comboboxChipsContext.chipsRef.current.length;
    const [previousChipKey, nextChipKey] = (0,parts/* .getChipNavigationKeys */.ln)(direction);
    if (highlightedChipIndex !== undefined) {
      if (event.key === previousChipKey) {
        event.preventDefault();
        if (highlightedChipIndex > 0) {
          nextIndex = highlightedChipIndex - 1;
        } else {
          nextIndex = undefined;
        }
      } else if (event.key === nextChipKey) {
        event.preventDefault();
        if (highlightedChipIndex < renderedChipsCount - 1) {
          nextIndex = highlightedChipIndex + 1;
        } else {
          nextIndex = undefined;
        }
      } else if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();
        // Move highlight appropriately after removal.
        nextIndex = (0,parts/* .getIndexAfterChipRemoval */.jr)(highlightedChipIndex, selectedValue.length);
        clearHighlight();
      }
      return nextIndex;
    }

    // Handle navigation when no chip is highlighted
    if (event.key === previousChipKey && (event.currentTarget.selectionStart ?? 0) === 0 && selectedValue.length > 0) {
      event.preventDefault();
      nextIndex = renderedChipsCount > 0 ? renderedChipsCount - 1 : undefined;
    }
    return nextIndex;
  }
  const element = (0,useRenderElement/* .useRenderElement */.o)('input', componentProps, {
    state,
    ref: [forwardedRef, store.state.inputRef, setInputElement],
    props: [inputProps, triggerProps, {
      value: composingValue ?? inputValue,
      'aria-readonly': readOnly || undefined,
      'aria-required': required || undefined,
      'aria-labelledby': fieldLabelId,
      disabled,
      readOnly,
      required: selectionMode === 'none' ? required : undefined,
      form,
      ...(inputOwnsFormValue && name && {
        name
      }),
      id,
      onFocus() {
        setFocused(true);
        if (!inline || !shouldRestoreActiveIndexRef.current) {
          return;
        }
        shouldRestoreActiveIndexRef.current = false;
        const nextActiveIndex = lastActiveIndexRef.current;
        if (nextActiveIndex == null ||
        // `valuesRef` can be sparse, so guard against restoring a removed slot.
        !Object.hasOwn(store.state.valuesRef.current, nextActiveIndex)) {
          return;
        }
        store.state.setIndices({
          activeIndex: nextActiveIndex
        });
      },
      onBlur() {
        setTouched(true);
        setFocused(false);
        const activeIndex = store.state.activeIndex;
        if (inline && activeIndex !== null && autoHighlightMode !== 'always') {
          lastActiveIndexRef.current = activeIndex;
          shouldRestoreActiveIndexRef.current = true;
          store.state.setIndices({
            activeIndex: null
          });
        }
        if (validationMode === 'onBlur') {
          const valueToValidate = selectionMode === 'none' ? inputValue : selectedValue;
          validation.commit(valueToValidate);
        }
      },
      onCompositionStart(event) {
        if (os/* .android */.yA) {
          return;
        }
        isComposingRef.current = true;
        setComposingValue(event.currentTarget.value);
      },
      onCompositionEnd(event) {
        isComposingRef.current = false;
        const next = event.currentTarget.value;
        setComposingValue(null);
        store.state.setInputValue(next, (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .inputChange */.pf, event.nativeEvent));
      },
      onChange(event) {
        const nativeEvent = event.nativeEvent;
        // Autofill may not provide `inputType` (Chrome) or may report
        // `insertReplacementText` (Firefox).
        const inputType = nativeEvent.inputType;
        const autofillLikeInput = !inputType || inputType === 'insertReplacementText';
        // During composition the input is always considered typed into.
        const shouldOpenOnInput = isComposingRef.current || !autofillLikeInput;
        function maybeOpenOnInput(trimmed) {
          if (readOnly || disabled || !trimmed || !shouldOpenOnInput) {
            return;
          }
          store.state.setOpen(true, (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .inputChange */.pf, nativeEvent));
          // When autoHighlight is enabled, keep the highlight (will be set to 0 in root).
          if (!autoHighlightEnabled) {
            clearHighlight();
          }
        }

        // During IME composition, avoid propagating controlled updates to prevent
        // filtering the options prematurely so `Empty` won't show incorrectly.
        // We can't rely on this check for Android due to how it handles composition
        // events with some keyboards (e.g. Samsung keyboard with predictive text on
        // treats all text as always-composing).
        // https://github.com/mui/base-ui/issues/2942
        if (isComposingRef.current) {
          const nextVal = event.currentTarget.value;
          setComposingValue(nextVal);
          if (nextVal === '' && !store.state.openOnInputClick && !store.state.inputInsidePopup) {
            store.state.setOpen(false, (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .inputClear */.qs, nativeEvent));
          }
          const trimmed = nextVal.trim();
          const shouldMaintainHighlight = autoHighlightEnabled && trimmed !== '';
          maybeOpenOnInput(trimmed);
          if (open && store.state.activeIndex !== null && !shouldMaintainHighlight) {
            clearHighlight();
          }
          return;
        }
        const inputChangeDetails = (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .inputChange */.pf, nativeEvent);
        store.state.setInputValue(event.currentTarget.value, inputChangeDetails);
        if (inputChangeDetails.isCanceled) {
          return;
        }
        const empty = event.currentTarget.value === '';
        const clearDetails = (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .inputClear */.qs, nativeEvent);
        if (empty && !store.state.inputInsidePopup) {
          if (selectionMode === 'single') {
            store.state.setSelectedValue(null, clearDetails);
          }
          if (!store.state.openOnInputClick) {
            store.state.setOpen(false, clearDetails);
          }
        }
        maybeOpenOnInput(event.currentTarget.value.trim());

        // When the user types, ensure the list resets its highlight so that
        // virtual focus returns to the input (aria-activedescendant is
        // cleared).
        if (open && store.state.activeIndex !== null && !autoHighlightEnabled) {
          clearHighlight();
        }
      },
      onKeyDown(event) {
        if (disabled || readOnly) {
          return;
        }
        if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) {
          return;
        }
        store.state.keyboardActiveRef.current = true;
        const input = event.currentTarget;
        const scrollAmount = input.scrollWidth - input.clientWidth;
        const isRTL = direction === 'rtl';
        if (event.key === 'Home') {
          (0,utils_event/* .stopEvent */.jo)(event);
          const cursor = engine/* .gecko */.cn && isRTL ? input.value.length : 0;
          input.setSelectionRange(cursor, cursor);
          input.scrollLeft = 0;
          return;
        }
        if (event.key === 'End') {
          (0,utils_event/* .stopEvent */.jo)(event);
          const cursor = engine/* .gecko */.cn && isRTL ? 0 : input.value.length;
          input.setSelectionRange(cursor, cursor);
          input.scrollLeft = isRTL ? -scrollAmount : scrollAmount;
          return;
        }
        if (!mounted && event.key === 'Escape') {
          const isClear = selectionMode === 'multiple' && Array.isArray(selectedValue) ? selectedValue.length === 0 : selectedValue === null;
          const details = (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .escapeKey */.jv, event.nativeEvent);
          const value = selectionMode === 'multiple' ? [] : null;
          store.state.setInputValue('', details);
          store.state.setSelectedValue(value, details);
          if (!isClear && !store.state.inline && !details.isPropagationAllowed) {
            event.stopPropagation();
          }
          return;
        }

        // Handle deletion when no chip is highlighted and the input is empty.
        if (comboboxChipsContext && event.key === 'Backspace' && input.value === '' && comboboxChipsContext.highlightedChipIndex === undefined && Array.isArray(selectedValue) && selectedValue.length > 0) {
          const renderedChipsCount = comboboxChipsContext.chipsRef.current.length;
          const removalIndex = renderedChipsCount > 0 ? renderedChipsCount - 1 : selectedValue.length - 1;
          const newValue = selectedValue.filter((_, index) => index !== removalIndex);
          // If the removed item was also the active (highlighted) item, clear highlight
          clearHighlight();
          store.state.setSelectedValue(newValue, (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)((/* inlined export .none */"none"), event.nativeEvent));
          return;
        }
        const hadHighlightedChip = comboboxChipsContext?.highlightedChipIndex !== undefined;
        const nextIndex = handleKeyDown(event);
        comboboxChipsContext?.setHighlightedChipIndex(nextIndex);
        if (nextIndex !== undefined) {
          comboboxChipsContext?.chipsRef.current[nextIndex]?.focus();
        } else if (hadHighlightedChip) {
          store.state.inputRef.current?.focus();
        }

        // event.isComposing
        if (event.which === 229) {
          return;
        }
        if (event.key === 'Enter' && open) {
          const activeIndex = store.state.activeIndex;
          const nativeEvent = event.nativeEvent;
          if (activeIndex === null) {
            if (inline) {
              return;
            }

            // Allow form submission when no item is highlighted.
            store.state.setOpen(false, (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)((/* inlined export .none */"none"), nativeEvent));
            return;
          }
          (0,utils_event/* .stopEvent */.jo)(event);
          (0,parts/* .clickHighlightedItem */.L6)(store, activeIndex, nativeEvent);
        }
      },
      onPointerMove: markPointerActive,
      onPointerDown: markPointerActive
    }, validationProps],
    stateAttributesMapping: stateAttributesMapping/* .triggerStateAttributesMapping */.d
  });
  const renderedInput = hasPositionerParent ? /*#__PURE__*/(0,jsx_runtime.jsx)(FieldRootContext/* .FieldRootContext.Provider */.eZ.Provider, {
    value: FieldRootContext/* .DEFAULT_FIELD_ROOT_CONTEXT */.er,
    children: element
  }) : element;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [open && focusManagerModal && /*#__PURE__*/(0,jsx_runtime.jsx)(ComboboxInternalDismissButton/* .ComboboxInternalDismissButton */.p, {
      ref: store.state.startDismissRef
    }), renderedInput]
  });
});
if (false) {}

},
88906(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var _item_ComboboxItemContext_mjs__rspack_import_2 = __webpack_require__(52264);
/* import */ var _internals_useTransitionStatus_mjs__rspack_import_3 = __webpack_require__(11924);
/* import */ var _internals_useOpenChangeComplete_mjs__rspack_import_6 = __webpack_require__(83378);
/* import */ var _internals_useRenderElement_mjs__rspack_import_4 = __webpack_require__(21724);
/* import */ var _internals_stateAttributesMapping_mjs__rspack_import_5 = __webpack_require__(55032);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(95170);
'use client';








/**
 * Indicates whether the item is selected.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */

const ComboboxItemIndicator = /*#__PURE__*/react__rspack_import_0.forwardRef(function ComboboxItemIndicator(componentProps, forwardedRef) {
  const {
    selected
  } = (0,_item_ComboboxItemContext_mjs__rspack_import_2/* .useComboboxItemContext */.b)();
  const shouldRender = componentProps.keepMounted || selected;
  if (!shouldRender) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return /*#__PURE__*/(0,react_jsx_runtime__rspack_import_1.jsx)(Inner, {
    ...componentProps,
    ref: forwardedRef
  });
});

// Split the core implementation to avoid paying the hook costs unless the element needs to mount.
if (false) {}
const Inner = /*#__PURE__*/react__rspack_import_0.memo(/*#__PURE__*/react__rspack_import_0.forwardRef((componentProps, forwardedRef) => {
  const {
    render,
    className,
    style,
    keepMounted,
    ...elementProps
  } = componentProps;
  const {
    selected
  } = (0,_item_ComboboxItemContext_mjs__rspack_import_2/* .useComboboxItemContext */.b)();
  const indicatorRef = react__rspack_import_0.useRef(null);
  const {
    transitionStatus,
    setMounted
  } = (0,_internals_useTransitionStatus_mjs__rspack_import_3/* .useTransitionStatus */.$)(selected);
  const state = {
    selected,
    transitionStatus
  };
  const element = (0,_internals_useRenderElement_mjs__rspack_import_4/* .useRenderElement */.o)('span', componentProps, {
    ref: [forwardedRef, indicatorRef],
    state,
    props: [{
      'aria-hidden': true,
      children: '✔️'
    }, elementProps],
    stateAttributesMapping: _internals_stateAttributesMapping_mjs__rspack_import_5/* .transitionStatusMapping */.G
  });
  (0,_internals_useOpenChangeComplete_mjs__rspack_import_6/* .useOpenChangeComplete */.v)({
    open: selected,
    ref: indicatorRef,
    onComplete() {
      if (!selected) {
        setMounted(false);
      }
    }
  });
  return element;
}));
if (false) {}
__webpack_require__.d(__webpack_exports__, {
}, {
  Q: ComboboxItemIndicator
});


},
19370(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: () => (/* binding */ ComboboxItem_ComboboxItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(57947);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/store/useStore.mjs + 1 modules
var useStore = __webpack_require__(92477);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useIsoLayoutEffect.mjs
var useIsoLayoutEffect = __webpack_require__(74732);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/root/ComboboxRootContext.mjs
var ComboboxRootContext = __webpack_require__(60598);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/composite/list/CompositeListContext.mjs
var CompositeListContext = __webpack_require__(72191);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/internals/composite/list/useCompositeListItem.mjs
'use client';




/**
 * Used to register a list item and its index (DOM position) in the `CompositeList`.
 */
function useCompositeListItem(params = {}) {
  const {
    guess,
    label,
    metadata,
    textRef,
    index: externalIndex
  } = params;
  const {
    register,
    unregister,
    subscribeMapChange,
    nextIndexRef
  } = (0,CompositeListContext/* .useCompositeListContext */.M)();

  // Guess the index from the render order. This avoids a re-render after mount for
  // flat lists rendered in DOM order; when the guess is wrong (grouped or out-of-order
  // rendering), the commit flush corrects it before paint.
  const indexRef = react.useRef(-1);
  const [internalIndex, setInternalIndex] = react.useState(externalIndex == null && guess ? () => {
    if (indexRef.current === -1) {
      const newIndex = nextIndexRef.current;
      nextIndexRef.current += 1;
      indexRef.current = newIndex;
    }
    return indexRef.current;
  } : -1);
  const index = externalIndex ?? internalIndex;
  const componentRef = react.useRef(null);

  // Deliberately identity-sensitive: nested items sharing one DOM node rely on ref attachment
  // order to decide which registration wins, and republishing from an effect instead would let
  // an inner item's later update silently take ownership from the outer one.
  const ref = react.useCallback(node => {
    const previousNode = componentRef.current;
    if (previousNode) {
      unregister(previousNode);
    }
    componentRef.current = node;
    if (node) {
      register(node, {
        metadata: metadata ?? null,
        index: externalIndex ?? null,
        label,
        textRef
      });
    }
  }, [externalIndex, register, unregister, metadata, label, textRef]);
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (externalIndex != null) {
      return undefined;
    }
    return subscribeMapChange(map => {
      const i = componentRef.current ? map.get(componentRef.current)?.index : null;
      if (i != null) {
        setInternalIndex(i);
      }
    });
  }, [externalIndex, subscribeMapChange]);
  return {
    ref,
    index
  };
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/useRenderElement.mjs + 4 modules
var useRenderElement = __webpack_require__(21724);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/item/ComboboxItemContext.mjs
var ComboboxItemContext = __webpack_require__(52264);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/store.mjs
var combobox_store = __webpack_require__(81612);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/use-button/useButton.mjs + 3 modules
var useButton = __webpack_require__(78973);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/combobox/row/ComboboxRowContext.mjs
'use client';


const ComboboxRowContext = /*#__PURE__*/react.createContext(false);
if (false) {}
function useComboboxRowContext() {
  return react.useContext(ComboboxRowContext);
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/itemEquality.mjs
var itemEquality = __webpack_require__(5815);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/combobox/item/ComboboxItem.mjs
'use client';














function ComboboxItemInner(props) {
  const {
    componentProps,
    forwardedRef,
    virtualized,
    indexFromFilter
  } = props;
  const {
    render,
    className,
    style,
    value: itemValue = null,
    index: indexProp,
    disabled: disabledProp = false,
    nativeButton = false,
    ...elementProps
  } = componentProps;
  const textRef = react.useRef(null);
  const listItem = useCompositeListItem({
    guess: true,
    index: indexProp,
    textRef
  });
  const store = (0,ComboboxRootContext/* .useComboboxRootContext */.Ee)();
  const isRow = useComboboxRowContext();
  const hasItems = (0,ComboboxRootContext/* .useComboboxHasItemsContext */.Eg)();
  const selectionMode = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.selectionMode */.T.selectionMode);
  const rootDisabled = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.disabled */.T.disabled);
  const readOnly = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.readOnly */.T.readOnly);
  const isItemEqualToValue = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.isItemEqualToValue */.T.isItemEqualToValue);
  const disabled = rootDisabled || disabledProp;
  const selectable = selectionMode !== 'none';
  const index = indexProp ?? indexFromFilter ?? listItem.index;
  const hasRegistered = index !== -1;
  const rootId = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.id */.T.id);
  const highlighted = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.isActive */.T.isActive, index);
  const matchesSelectedValue = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.isSelected */.T.isSelected, itemValue);
  const itemProps = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.itemProps */.T.itemProps);
  const itemRef = react.useRef(null);
  const id = rootId != null && hasRegistered ? `${rootId}-${index}` : undefined;
  const selected = matchesSelectedValue && selectable;
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    const shouldRun = hasRegistered && (virtualized || indexProp != null);
    if (!shouldRun) {
      return undefined;
    }
    const list = store.state.listRef.current;
    list[index] = itemRef.current;
    return () => {
      delete list[index];
    };
  }, [hasRegistered, virtualized, index, indexProp, store]);
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (!hasRegistered || hasItems) {
      return undefined;
    }
    const visibleMap = store.state.valuesRef.current;
    visibleMap[index] = itemValue;
    return () => {
      delete visibleMap[index];
    };
  }, [hasRegistered, hasItems, index, itemValue, store]);
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (!hasRegistered || hasItems) {
      return;
    }

    // Runs while closed as well (the list can stay mounted via `keepMounted` or a
    // force-mount) so the index tracks the item's composite position, keeping features
    // like closed-trigger typeahead in sync when the rendered order changes.
    const selectedValue = store.state.selectedValue;
    const lastSelectedValue = Array.isArray(selectedValue) ? selectedValue[selectedValue.length - 1] : selectedValue;
    if ((0,itemEquality/* .compareItemEquality */.tl)(itemValue, lastSelectedValue, isItemEqualToValue)) {
      store.set('selectedIndex', index);
    }
  }, [hasRegistered, hasItems, store, index, itemValue, isItemEqualToValue]);
  const {
    getButtonProps,
    buttonRef
  } = (0,useButton/* .useButton */.s)({
    disabled,
    focusableWhenDisabled: true,
    native: nativeButton,
    composite: true
  });
  const state = {
    disabled,
    selected,
    highlighted
  };
  function commitSelection(nativeEvent) {
    function selectItem() {
      store.state.handleSelection(nativeEvent, itemValue);
    }
    if (store.state.submitOnItemClick) {
      react_dom.flushSync(selectItem);
      store.state.requestSubmit();
    } else {
      selectItem();
    }
  }
  const defaultProps = {
    id,
    role: isRow ? 'gridcell' : 'option',
    'aria-selected': selectable ? selected : undefined,
    // Focusable items steal focus from the input upon mouseup.
    // Warn if the user renders a natively focusable element like `<button>`,
    // as it should be a `<div>` instead.
    tabIndex: undefined,
    onPointerDownCapture(event) {
      // The compat `mouseup` only fires for the primary pointer, so a non-primary
      // touch must not overwrite the shared ref — a mismatch would make the primary
      // pointer's release read as a drag-select and commit a second time after `click`.
      if (event.isPrimary) {
        store.state.pointerDownItemRef.current = event.currentTarget;
      }
      event.preventDefault();
    },
    onMouseDown(event) {
      // iOS Safari can emit a synthetic mousedown for touch taps without a preceding
      // pointerdown. Prevent default here too so tapping an item does not blur the input.
      event.preventDefault();
    },
    onClick(event) {
      if (disabled || readOnly) {
        return;
      }
      commitSelection(event.nativeEvent);
    },
    onMouseUp(event) {
      const pointerStartedOnItem = store.state.pointerDownItemRef.current === event.currentTarget;
      store.state.pointerDownItemRef.current = null;
      if (disabled || readOnly || event.button !== 0 || pointerStartedOnItem || !highlighted) {
        return;
      }
      commitSelection(event.nativeEvent);
    }
  };
  const element = (0,useRenderElement/* .useRenderElement */.o)('div', componentProps, {
    ref: [buttonRef, forwardedRef, listItem.ref, itemRef],
    state,
    props: [itemProps, defaultProps, elementProps, getButtonProps]
  });
  const contextValue = react.useMemo(() => ({
    selected,
    textRef
  }), [selected, textRef]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ComboboxItemContext/* .ComboboxItemContext.Provider */.s.Provider, {
    value: contextValue,
    children: element
  });
}

/**
 * Resolves the index from the filtered items for the virtualized fallback (no `index` prop).
 * Isolated here so that this per-keystroke subscription to the derived-items context is only
 * paid by virtualized items. Those re-render on every input change anyway — the parent
 * virtualizer re-windows the list as the filtered set changes — so the extra subscription costs
 * them nothing, while it keeps every non-virtualized item off that context.
 */
function ComboboxItemVirtualizedIndex(props) {
  const {
    componentProps,
    forwardedRef
  } = props;
  const store = (0,ComboboxRootContext/* .useComboboxRootContext */.Ee)();
  const isItemEqualToValue = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.isItemEqualToValue */.T.isItemEqualToValue);
  const {
    flatFilteredItems
  } = (0,ComboboxRootContext/* .useComboboxDerivedItemsContext */.Dc)();
  const indexFromFilter = (0,itemEquality/* .findItemIndex */.Vz)(flatFilteredItems, componentProps.value ?? null, isItemEqualToValue);

  // Only reached when `virtualized` is true (see the wrapper below).
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ComboboxItemInner, {
    componentProps: componentProps,
    forwardedRef: forwardedRef,
    virtualized: true,
    indexFromFilter: indexFromFilter
  });
}

/**
 * An individual item in the list.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
const ComboboxItem_ComboboxItem = /*#__PURE__*/react.memo(/*#__PURE__*/react.forwardRef(function ComboboxItem(componentProps, forwardedRef) {
  const store = (0,ComboboxRootContext/* .useComboboxRootContext */.Ee)();
  const virtualized = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.virtualized */.T.virtualized);

  // `virtualized` (and whether an item provides an explicit `index`) must be stable for an
  // item's lifetime: the two branches return different component types, so flipping it at
  // runtime remounts the item and resets its refs and effects.
  if (virtualized && componentProps.index == null) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(ComboboxItemVirtualizedIndex, {
      componentProps: componentProps,
      forwardedRef: forwardedRef
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ComboboxItemInner, {
    componentProps: componentProps,
    forwardedRef: forwardedRef,
    virtualized: virtualized,
    indexFromFilter: undefined
  });
}));
if (false) {}

},
52264(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _base_ui_utils_formatErrorMessage__rspack_import_1 = __webpack_require__(98103);
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
'use client';



const ComboboxItemContext = /*#__PURE__*/react__rspack_import_0.createContext(undefined);
if (false) {}
function useComboboxItemContext() {
  const context = react__rspack_import_0.useContext(ComboboxItemContext);
  if (!context) {
    throw new Error( false ? 0 : (0,_base_ui_utils_formatErrorMessage__rspack_import_1/* ["default"] */.A)(19));
  }
  return context;
}
__webpack_require__.d(__webpack_exports__, {
  b: () => (useComboboxItemContext)
}, {
  s: ComboboxItemContext
});


},
97557(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ ComboboxList_ComboboxList)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/store/useStore.mjs + 1 modules
var useStore = __webpack_require__(92477);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useStableCallback.mjs
var useStableCallback = __webpack_require__(77942);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/useRenderElement.mjs + 4 modules
var useRenderElement = __webpack_require__(21724);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/root/ComboboxRootContext.mjs
var ComboboxRootContext = __webpack_require__(60598);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/positioner/ComboboxPositionerContext.mjs
var ComboboxPositionerContext = __webpack_require__(68150);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/store.mjs
var combobox_store = __webpack_require__(81612);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/combobox/collection/GroupCollectionContext.mjs
'use client';



const GroupCollectionContext = /*#__PURE__*/react.createContext(null);
if (false) {}
function useGroupCollectionContext() {
  return react.useContext(GroupCollectionContext);
}
function GroupCollectionProvider(props) {
  const {
    children,
    items
  } = props;
  const contextValue = React.useMemo(() => ({
    items
  }), [items]);
  return /*#__PURE__*/_jsx(GroupCollectionContext.Provider, {
    value: contextValue,
    children: children
  });
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/combobox/collection/ComboboxCollection.mjs
'use client';





/**
 * Renders filtered list items.
 * Doesn't render its own HTML element.
 *
 * If rendering a flat list, pass a function child to the `List` component instead, which implicitly wraps it.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */

function ComboboxCollection(props) {
  const {
    children
  } = props;
  const {
    filteredItems
  } = (0,ComboboxRootContext/* .useComboboxDerivedItemsContext */.Dc)();
  const groupContext = useGroupCollectionContext();
  const itemsToRender = groupContext ? groupContext.items : filteredItems;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
    children: itemsToRender.map(children)
  });
}
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useRefWithInit.mjs
var useRefWithInit = __webpack_require__(24351);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useIsoLayoutEffect.mjs
var useIsoLayoutEffect = __webpack_require__(74732);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/composite/list/CompositeListContext.mjs
var CompositeListContext = __webpack_require__(72191);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/internals/composite/list/CompositeList.mjs
/* eslint-disable no-bitwise */
'use client';







/**
 * Provides context for a list of items in a composite component.
 */
function CompositeList(props) {
  const {
    children,
    elementsRef,
    labelsRef,
    onMapChange: onMapChangeProp
  } = props;
  const onMapChange = (0,useStableCallback/* .useStableCallback */.K)(onMapChangeProp);
  const [, setMapTick] = react.useState(false);
  const listeners = (0,useRefWithInit/* .useRefWithInit */.j)(createListeners).current;
  const map = (0,useRefWithInit/* .useRefWithInit */.j)(createMap).current;
  const nextIndexRef = react.useRef(0);
  const isDirtyRef = react.useRef(true);
  const itemsRef = react.useRef([]);
  const mutationObserverRef = react.useRef(null);

  // Item effects can run without their parent rendering. Schedule one synchronous
  // parent update for the whole commit so refs are rebuilt before paint and while
  // the originating React event is still inside `act()` in tests.
  const scheduleMapUpdate = (0,useStableCallback/* .useStableCallback */.K)(() => {
    if (isDirtyRef.current) {
      return;
    }
    isDirtyRef.current = true;
    setMapTick(tick => !tick);
  });
  const register = (0,useStableCallback/* .useStableCallback */.K)((node, registration) => {
    map.set(node, registration);
    scheduleMapUpdate();
  });
  const unregister = (0,useStableCallback/* .useStableCallback */.K)(node => {
    map.delete(node);
    scheduleMapUpdate();
  });
  const syncRefs = (0,useStableCallback/* .useStableCallback */.K)(items => {
    const nextMap = new Map();
    elementsRef.current.length = 0;
    if (labelsRef) {
      labelsRef.current.length = 0;
    }
    items.forEach(item => {
      nextMap.set(item.element, {
        ...(item.registration.metadata ?? {}),
        index: item.index
      });
      elementsRef.current[item.index] = item.element;
      if (labelsRef) {
        labelsRef.current[item.index] = item.registration.label !== undefined ? item.registration.label : item.registration.textRef?.current?.textContent ?? item.element.textContent;
      }
    });
    nextIndexRef.current = elementsRef.current.length;
    return nextMap;
  });
  function observe(sortedNodes) {
    mutationObserverRef.current?.disconnect();
    mutationObserverRef.current = null;

    // A single item can't reorder.
    if (typeof MutationObserver !== 'function' || sortedNodes.length < 2) {
      return;
    }
    const mutationObserver = new MutationObserver(entries => {
      // Only verify the order after a move: a node that was removed and later
      // re-added within the same batch. Additions and removals alone can't
      // change the relative order of the remaining items, and items that mount
      // or unmount re-sort through `register`/`unregister`.
      if (!hasMovedNode(entries)) {
        return;
      }
      let previousConnectedNode = null;

      // If any connected node now appears before the previous connected node,
      // wrappers/items moved and the index map needs to be rebuilt.
      for (const node of sortedNodes) {
        if (!node.isConnected) {
          continue;
        }
        if (previousConnectedNode && sortByDocumentPosition(previousConnectedNode, node) > 0) {
          mutationObserver.disconnect();
          scheduleMapUpdate();
          return;
        }
        previousConnectedNode = node;
      }
    });
    mutationObserverRef.current = mutationObserver;

    // A reorder that changes item indexes must invert at least one adjacent pair
    // from the previous sorted order. Observing each pair's common parent catches
    // both direct item moves and ancestor wrapper moves at the boundary.
    const roots = new Set();
    for (let i = 1; i < sortedNodes.length; i += 1) {
      const root = getCommonAncestor(sortedNodes[i - 1], sortedNodes[i]);
      if (root) {
        roots.add(root);
      }
    }
    roots.forEach(root => mutationObserver.observe(root, {
      childList: true
    }));
  }
  const flush = (0,useStableCallback/* .useStableCallback */.K)(() => {
    const [items, automaticNodes] = getCompositeListSnapshot(map);
    const nextMap = syncRefs(items);
    observe(automaticNodes);
    itemsRef.current = items;
    isDirtyRef.current = false;
    listeners.forEach(listener => listener(nextMap));
    onMapChange(nextMap);
  });
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    // Re-copy the last committed snapshot when the ref objects change or Strict Mode replays
    // effects without reattaching callback refs.
    if (!isDirtyRef.current) {
      syncRefs(itemsRef.current);
    }
    return () => {
      elementsRef.current = [];
      if (labelsRef) {
        labelsRef.current = [];
      }
    };
  }, [elementsRef, labelsRef, syncRefs]);
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (isDirtyRef.current) {
      flush();
    }
  });
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    return () => {
      mutationObserverRef.current?.disconnect();
      // React 18 Strict Mode replays effects without replaying callback refs.
      // Mark the retained map dirty so the replay rebuilds refs and observation.
      isDirtyRef.current = true;
    };
  }, []);
  const subscribeMapChange = (0,useStableCallback/* .useStableCallback */.K)(fn => {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  });
  const contextValue = react.useMemo(() => ({
    register,
    unregister,
    subscribeMapChange,
    nextIndexRef
  }), [register, unregister, subscribeMapChange, nextIndexRef]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CompositeListContext/* .CompositeListContext.Provider */.D.Provider, {
    value: contextValue,
    children: children
  });
}
function createMap() {
  return new Map();
}
function createListeners() {
  return new Set();
}
function getCompositeListSnapshot(map) {
  const reservedIndices = new Set();
  const items = [];
  const automaticItems = [];
  map.forEach((registration, node) => {
    if (!node.isConnected) {
      return;
    }
    const index = registration.index;
    const item = {
      index: index ?? -1,
      element: node,
      registration
    };
    if (index === null) {
      automaticItems.push(item);
    } else if (index >= 0) {
      reservedIndices.add(index);
      items.push(item);
    }
  });
  let nextAutomaticIndex = 0;
  automaticItems.sort((a, b) => sortByDocumentPosition(a.element, b.element));
  automaticItems.forEach(item => {
    while (reservedIndices.has(nextAutomaticIndex)) {
      nextAutomaticIndex += 1;
    }
    item.index = nextAutomaticIndex;
    items.push(item);
    nextAutomaticIndex += 1;
  });
  if (reservedIndices.size > 0) {
    items.sort((a, b) => a.index - b.index);
  }
  return [items, automaticItems.map(item => item.element)];
}
function getCommonAncestor(firstNode, lastNode) {
  let ancestor = firstNode.parentElement;

  // The `parentElement` walk cannot cross shadow boundaries, so the native
  // `contains` is sufficient here.
  while (ancestor && !ancestor.contains(lastNode)) {
    ancestor = ancestor.parentElement;
  }
  return ancestor;
}
function hasMovedNode(entries) {
  for (const entry of entries) {
    for (let i = 0; i < entry.removedNodes.length; i += 1) {
      if (entry.removedNodes[i].isConnected) {
        return true;
      }
    }
  }
  return false;
}
function sortByDocumentPosition(a, b) {
  // `DOCUMENT_POSITION_CONTAINED_BY` is always reported alongside `FOLLOWING`, and `CONTAINS`
  // alongside `PRECEDING`, so testing `FOLLOWING` alone orders siblings and nested items alike.
  return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/event.mjs
var utils_event = __webpack_require__(61489);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/utils/parts.mjs
var parts = __webpack_require__(97099);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/combobox/list/ComboboxList.mjs
'use client';













/**
 * A list container for the items.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */

const ComboboxList_ComboboxList = /*#__PURE__*/react.forwardRef(function ComboboxList(componentProps, forwardedRef) {
  var _ComboboxCollection;
  const {
    render,
    className,
    style,
    children,
    ...elementProps
  } = componentProps;
  const store = (0,ComboboxRootContext/* .useComboboxRootContext */.Ee)();
  const floatingRootContext = (0,ComboboxRootContext/* .useComboboxFloatingContext */.ui)();
  const hasPositionerContext = Boolean((0,ComboboxPositionerContext/* .useComboboxPositionerContext */.O)(true));
  const {
    filteredItems,
    hasItems
  } = (0,ComboboxRootContext/* .useComboboxDerivedItemsContext */.Dc)();
  const selectionMode = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.selectionMode */.T.selectionMode);
  const grid = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.grid */.T.grid);
  const listProps = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.listProps */.T.listProps);
  const virtualized = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.virtualized */.T.virtualized);
  const forceMounted = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.forceMounted */.T.forceMounted);
  const multiple = selectionMode === 'multiple';
  const empty = filteredItems.length === 0;
  const setPositionerElement = (0,useStableCallback/* .useStableCallback */.K)(element => {
    store.set('positionerElement', element);
  });
  const setListElement = (0,useStableCallback/* .useStableCallback */.K)(element => {
    store.set('listElement', element);
  });

  // Support "closed template" API: if children is a function, implicitly wrap it
  // with a Combobox.Collection that reads items from context/root.
  // Ensures this component's `listProps` subscription does not cause <Combobox.Item>
  // to re-render on every active index change.
  const resolvedChildren = react.useMemo(() => {
    if (typeof children === 'function') {
      return _ComboboxCollection || (_ComboboxCollection = /*#__PURE__*/(0,jsx_runtime.jsx)(ComboboxCollection, {
        children: children
      }));
    }
    return children;
  }, [children]);
  const state = {
    empty
  };
  const floatingId = floatingRootContext.useState('floatingId');
  const element = (0,useRenderElement/* .useRenderElement */.o)('div', componentProps, {
    state,
    ref: [forwardedRef, setListElement, hasPositionerContext ? null : setPositionerElement],
    props: [listProps, {
      children: resolvedChildren,
      tabIndex: -1,
      id: floatingId,
      role: grid ? 'grid' : 'listbox',
      'aria-multiselectable': multiple ? 'true' : undefined,
      onKeyDown(event) {
        if (store.state.disabled || store.state.readOnly) {
          return;
        }
        if (event.key === 'Enter') {
          const activeIndex = store.state.activeIndex;
          if (activeIndex == null) {
            // Allow form submission when no item is highlighted.
            return;
          }
          (0,utils_event/* .stopEvent */.jo)(event);
          (0,parts/* .clickHighlightedItem */.L6)(store, activeIndex, event.nativeEvent);
        }
      },
      onKeyDownCapture() {
        store.state.keyboardActiveRef.current = true;
      },
      onPointerMoveCapture() {
        store.state.keyboardActiveRef.current = false;
      }
    }, elementProps]
  });
  if (virtualized) {
    return element;
  }

  // With the `items` prop, typeahead labels are derived from the items so they survive the list
  // unmounting (unmounting clears the registered labels). Rendered labels only need to be
  // registered when the list is force-mounted to match browser autofill against rendered text.
  const labelsRef = hasItems && !forceMounted ? undefined : store.state.labelsRef;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CompositeList, {
    elementsRef: store.state.listRef,
    labelsRef: labelsRef,
    children: element
  });
});
if (false) {}

},
38245(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: () => (/* binding */ ComboboxPopup_ComboboxPopup)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/store/useStore.mjs + 1 modules
var useStore = __webpack_require__(92477);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useIsoLayoutEffect.mjs
var useIsoLayoutEffect = __webpack_require__(74732);
// EXTERNAL MODULE: ./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
var floating_ui_utils_dom = __webpack_require__(54951);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/addEventListener.mjs
var addEventListener = __webpack_require__(89362);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/mergeCleanups.mjs
var mergeCleanups = __webpack_require__(17964);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useMergedRefs.mjs
var useMergedRefs = __webpack_require__(34244);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useValueAsRef.mjs
var useValueAsRef = __webpack_require__(77888);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useStableCallback.mjs
var useStableCallback = __webpack_require__(77942);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useTimeout.mjs
var useTimeout = __webpack_require__(37227);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/platform/engine.mjs
var engine = __webpack_require__(6509);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useAnimationFrame.mjs
var useAnimationFrame = __webpack_require__(72055);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/owner.mjs
var owner = __webpack_require__(61402);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/utils/FocusGuard.mjs + 1 modules
var FocusGuard = __webpack_require__(9492);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/shadowDom.mjs
var shadowDom = __webpack_require__(55638);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/element.mjs
var utils_element = __webpack_require__(97965);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/event.mjs
var utils_event = __webpack_require__(61489);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/tabbable.mjs
var tabbable = __webpack_require__(12914);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/nodes.mjs
var nodes = __webpack_require__(98642);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/composite.mjs
var composite = __webpack_require__(14280);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
var createBaseUIEventDetails = __webpack_require__(93201);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/reason-parts.mjs
var reason_parts = __webpack_require__(5355);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/createAttribute.mjs
var createAttribute = __webpack_require__(3825);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/enqueueFocus.mjs
var enqueueFocus = __webpack_require__(93597);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/markOthers.mjs
// Modified to add conditional `aria-hidden` support:
// https://github.com/theKashey/aria-hidden/blob/9220c8f4a4fd35f63bee5510a9f41a37264382d4/src/index.ts


const counters = {
  inert: new WeakMap(),
  'aria-hidden': new WeakMap()
};
const markerName = 'data-base-ui-inert';
const uncontrolledElementsSets = {
  inert: new WeakSet(),
  'aria-hidden': new WeakSet()
};
let markerCounterMap = new WeakMap();
let lockCount = 0;
function getUncontrolledElementsSet(controlAttribute) {
  return uncontrolledElementsSets[controlAttribute];
}
function unwrapHost(node) {
  if (!node) {
    return null;
  }
  return (0,floating_ui_utils_dom/* .isShadowRoot */.Ng)(node) ? node.host : unwrapHost(node.parentNode);
}
const correctElements = (parent, targets) => targets.map(target => {
  if (parent.contains(target)) {
    return target;
  }
  const correctedTarget = unwrapHost(target);
  if (parent.contains(correctedTarget)) {
    return correctedTarget;
  }
  return null;
}).filter(x => x != null);
const buildKeepSet = targets => {
  const keep = new Set();
  targets.forEach(target => {
    let node = target;
    while (node && !keep.has(node)) {
      keep.add(node);
      node = node.parentNode;
    }
  });
  return keep;
};
const collectOutsideElements = (root, keepElements, stopElements) => {
  const outside = [];
  const walk = parent => {
    if (!parent || stopElements.has(parent)) {
      return;
    }
    Array.from(parent.children).forEach(node => {
      if ((0,floating_ui_utils_dom/* .getNodeName */.mq)(node) === 'script') {
        return;
      }
      if (keepElements.has(node)) {
        walk(node);
      } else {
        outside.push(node);
      }
    });
  };
  walk(root);
  return outside;
};
function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, inert, {
  mark = true
}) {
  let controlAttribute = null;
  if (inert) {
    controlAttribute = 'inert';
  } else if (ariaHidden) {
    controlAttribute = 'aria-hidden';
  }
  let counterMap = null;
  let uncontrolledElementsSet = null;
  const avoidElements = correctElements(body, uncorrectedAvoidElements);
  const markerTargets = mark ? collectOutsideElements(body, buildKeepSet(avoidElements), new Set(avoidElements)) : [];
  const hiddenElements = [];
  const markedElements = [];
  if (controlAttribute) {
    const map = counters[controlAttribute];
    const currentUncontrolledElementsSet = getUncontrolledElementsSet(controlAttribute);
    uncontrolledElementsSet = currentUncontrolledElementsSet;
    counterMap = map;
    const ariaLiveElements = correctElements(body, Array.from(body.querySelectorAll('[aria-live]')));
    const controlElements = avoidElements.concat(ariaLiveElements);
    const controlTargets = collectOutsideElements(body, buildKeepSet(controlElements), new Set(controlElements));
    controlTargets.forEach(node => {
      const attr = node.getAttribute(controlAttribute);
      const alreadyHidden = attr !== null && attr !== 'false';
      const counterValue = (map.get(node) || 0) + 1;
      map.set(node, counterValue);
      hiddenElements.push(node);
      if (counterValue === 1 && alreadyHidden) {
        currentUncontrolledElementsSet.add(node);
      }
      if (!alreadyHidden) {
        node.setAttribute(controlAttribute, controlAttribute === 'inert' ? '' : 'true');
      }
    });
  }
  if (mark) {
    markerTargets.forEach(node => {
      const markerValue = (markerCounterMap.get(node) || 0) + 1;
      markerCounterMap.set(node, markerValue);
      markedElements.push(node);
      if (markerValue === 1) {
        node.setAttribute(markerName, '');
      }
    });
  }
  lockCount += 1;
  return () => {
    if (counterMap) {
      hiddenElements.forEach(element => {
        const currentCounterValue = counterMap.get(element) || 0;
        const counterValue = currentCounterValue - 1;
        counterMap.set(element, counterValue);
        if (!counterValue) {
          if (!uncontrolledElementsSet?.has(element) && controlAttribute) {
            element.removeAttribute(controlAttribute);
          }
          uncontrolledElementsSet?.delete(element);
        }
      });
    }
    if (mark) {
      markedElements.forEach(element => {
        const markerValue = (markerCounterMap.get(element) || 0) - 1;
        markerCounterMap.set(element, markerValue);
        if (!markerValue) {
          element.removeAttribute(markerName);
        }
      });
    }
    lockCount -= 1;
    if (!lockCount) {
      counters.inert = new WeakMap();
      counters['aria-hidden'] = new WeakMap();
      uncontrolledElementsSets.inert = new WeakSet();
      uncontrolledElementsSets['aria-hidden'] = new WeakSet();
      markerCounterMap = new WeakMap();
    }
  };
}
function markOthers(avoidElements, options = {}) {
  const {
    ariaHidden = false,
    inert = false,
    mark = true
  } = options;
  const body = (0,owner/* .ownerDocument */.R)(avoidElements[0]).body;
  return applyAttributeToOthers(avoidElements, body, ariaHidden, inert, {
    mark
  });
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/components/FloatingPortal.mjs
var FloatingPortal = __webpack_require__(31280);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/components/FloatingTree.mjs
var FloatingTree = __webpack_require__(50826);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/constants.mjs
var constants = __webpack_require__(80617);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/utils/resolveRef.mjs
var resolveRef = __webpack_require__(77386);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/floating-ui-react/components/FloatingFocusManager.mjs
'use client';





























function getEventType(event, lastInteractionType) {
  const win = (0,floating_ui_utils_dom/* .getWindow */.zk)((0,shadowDom/* .getTarget */.EW)(event));
  if (event instanceof win.KeyboardEvent) {
    return 'keyboard';
  }
  if (event instanceof win.FocusEvent) {
    // Focus events can be caused by a preceding pointer interaction (e.g., focusout on outside press).
    // Prefer the last known pointer type if provided, else treat as keyboard.
    return lastInteractionType || 'keyboard';
  }
  if ('pointerType' in event) {
    return event.pointerType || 'keyboard';
  }
  if ('touches' in event) {
    return 'touch';
  }
  if (event instanceof win.MouseEvent) {
    // onClick events may not contain pointer events, and will fall through to here
    return lastInteractionType || (event.detail === 0 ? 'keyboard' : 'mouse');
  }
  return '';
}
const LIST_LIMIT = 20;
let previouslyFocusedElements = [];
function clearDisconnectedPreviouslyFocusedElements() {
  previouslyFocusedElements = previouslyFocusedElements.filter(entry => {
    return entry.deref()?.isConnected;
  });
}
function addPreviouslyFocusedElement(element) {
  clearDisconnectedPreviouslyFocusedElements();
  if (element && (0,floating_ui_utils_dom/* .getNodeName */.mq)(element) !== 'body') {
    previouslyFocusedElements.push(new WeakRef(element));
    if (previouslyFocusedElements.length > LIST_LIMIT) {
      previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
    }
  }
}
function getPreviouslyFocusedElement() {
  clearDisconnectedPreviouslyFocusedElements();
  return previouslyFocusedElements[previouslyFocusedElements.length - 1]?.deref();
}
function getFirstTabbableElement(container) {
  if (!container) {
    return null;
  }
  if ((0,tabbable/* .isTabbable */.AO)(container)) {
    return container;
  }
  return (0,tabbable/* .tabbable */.Kr)(container)[0] || container;
}
function handleTabIndex(floatingFocusElement) {
  if (floatingFocusElement.hasAttribute('tabindex') && !floatingFocusElement.hasAttribute('data-tabindex')) {
    return;
  }
  if (!floatingFocusElement.getAttribute('role')?.includes('dialog')) {
    return;
  }
  const focusableElements = (0,tabbable/* .focusable */.nq)(floatingFocusElement);
  const tabbableContent = focusableElements.filter(element => {
    const dataTabIndex = element.getAttribute('data-tabindex') || '';
    return (0,tabbable/* .isTabbable */.AO)(element) || element.hasAttribute('data-tabindex') && !dataTabIndex.startsWith('-');
  });
  const tabIndex = floatingFocusElement.getAttribute('tabindex');
  if (tabbableContent.length === 0) {
    if (tabIndex !== '0') {
      floatingFocusElement.setAttribute('tabindex', '0');
      // Mark our own write so the externally-managed early-return above doesn't
      // mistake it for a user-authored `tabindex` and freeze management.
      floatingFocusElement.setAttribute('data-tabindex', '0');
    }
  } else if (tabIndex !== '-1' || floatingFocusElement.hasAttribute('data-tabindex') && floatingFocusElement.getAttribute('data-tabindex') !== '-1') {
    floatingFocusElement.setAttribute('tabindex', '-1');
    floatingFocusElement.setAttribute('data-tabindex', '-1');
  }
}
/**
 * Provides focus management for the floating element.
 * @see https://floating-ui.com/docs/FloatingFocusManager
 * @internal
 */
function FloatingFocusManager(props) {
  const {
    context,
    children,
    disabled = false,
    initialFocus = true,
    returnFocus = true,
    restoreFocus = false,
    modal = true,
    closeOnFocusOut = true,
    openInteractionType = '',
    nextFocusableElement,
    previousFocusableElement,
    beforeContentFocusGuardRef,
    externalTree,
    getInsideElements
  } = props;
  const store = 'rootStore' in context ? context.rootStore : context;
  const open = store.useState('open');
  const domReference = store.useState('domReferenceElement');
  const floating = store.useState('floatingElement');
  const {
    events,
    dataRef
  } = store.context;
  const getNodeId = (0,useStableCallback/* .useStableCallback */.K)(() => dataRef.current.floatingContext?.nodeId);
  const ignoreInitialFocus = initialFocus === false;
  // A typeable combobox reference (e.g. input/textarea) with `initialFocus={false}`
  // has different focus semantics: focus is not trapped inside the floating element,
  // so in the modal case the guards are not rendered, but `aria-hidden` is still
  // applied to the outside nodes.
  const isUntrappedTypeableCombobox = (0,utils_element/* .isTypeableCombobox */.WZ)(domReference) && ignoreInitialFocus;
  const initialFocusRef = (0,useValueAsRef/* .useValueAsRef */.u)(initialFocus);
  const returnFocusRef = (0,useValueAsRef/* .useValueAsRef */.u)(returnFocus);
  const openInteractionTypeRef = (0,useValueAsRef/* .useValueAsRef */.u)(openInteractionType);
  const openRef = (0,useValueAsRef/* .useValueAsRef */.u)(open);
  const tree = (0,FloatingTree/* .useFloatingTree */.cq)(externalTree);
  const portalContext = (0,FloatingPortal/* .usePortalContext */.vB)();
  const preventReturnFocusRef = react.useRef(false);
  const isPointerDownRef = react.useRef(false);
  const pointerDownOutsideRef = react.useRef(false);
  const lastFocusedTabbableRef = react.useRef(null);
  const closeTypeRef = react.useRef('');
  const lastInteractionTypeRef = react.useRef('');
  const beforeGuardRef = react.useRef(null);
  const afterGuardRef = react.useRef(null);
  const mergedBeforeGuardRef = (0,useMergedRefs/* .useMergedRefs */.a)(beforeGuardRef, beforeContentFocusGuardRef, portalContext?.beforeInsideRef);
  const mergedAfterGuardRef = (0,useMergedRefs/* .useMergedRefs */.a)(afterGuardRef, portalContext?.afterInsideRef);
  const blurTimeout = (0,useTimeout/* .useTimeout */.Z)();
  const pointerDownTimeout = (0,useTimeout/* .useTimeout */.Z)();
  const restoreFocusFrame = (0,useAnimationFrame/* .useAnimationFrame */.NR)();
  const isInsidePortal = portalContext != null;
  const floatingFocusElement = (0,utils_element/* .getFloatingFocusElement */.nd)(floating);
  const getTabbableContent = (0,useStableCallback/* .useStableCallback */.K)((container = floatingFocusElement) => {
    return container ? (0,tabbable/* .tabbable */.Kr)(container) : [];
  });
  const getResolvedInsideElements = (0,useStableCallback/* .useStableCallback */.K)(() => getInsideElements?.().filter(element => element != null) ?? []);

  // Prevent Tab from escaping the modal when there are no tabbable elements.
  react.useEffect(() => {
    if (disabled || !modal) {
      return undefined;
    }
    function onKeyDown(event) {
      if (event.key === 'Tab') {
        // The focus guards have nothing to focus, so we need to stop the event.
        if ((0,shadowDom/* .contains */.gR)(floatingFocusElement, (0,shadowDom/* .activeElement */.RS)((0,owner/* .ownerDocument */.R)(floatingFocusElement))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) {
          (0,utils_event/* .stopEvent */.jo)(event);
        }
      }
    }
    const doc = (0,owner/* .ownerDocument */.R)(floatingFocusElement);
    return (0,addEventListener/* .addEventListener */.q)(doc, 'keydown', onKeyDown);
  }, [disabled, floatingFocusElement, modal, isUntrappedTypeableCombobox, getTabbableContent]);

  // Track pointer/keyboard interactions to disambiguate focus and outside presses.
  react.useEffect(() => {
    if (disabled || !open) {
      return undefined;
    }
    const doc = (0,owner/* .ownerDocument */.R)(floatingFocusElement);
    function clearPointerDownOutside() {
      pointerDownOutsideRef.current = false;
    }
    function onPointerDown(event) {
      const target = (0,shadowDom/* .getTarget */.EW)(event);
      const insideElements = getResolvedInsideElements();
      const pointerTargetInside = (0,shadowDom/* .contains */.gR)(floating, target) || (0,shadowDom/* .contains */.gR)(domReference, target) || (0,shadowDom/* .contains */.gR)(portalContext?.portalNode, target) || insideElements.some(element => element === target || (0,shadowDom/* .contains */.gR)(element, target));
      pointerDownOutsideRef.current = !pointerTargetInside;
      lastInteractionTypeRef.current = event.pointerType || 'keyboard';
      if (target?.closest(`[${constants/* .CLICK_TRIGGER_IDENTIFIER */.Kd}]`)) {
        isPointerDownRef.current = true;
        // Reset on the next tick so a single click on a click-trigger doesn't
        // permanently suppress focus-out closing for the lifetime of the instance.
        pointerDownTimeout.start(0, () => {
          isPointerDownRef.current = false;
        });
      }
    }
    function onKeyDown() {
      lastInteractionTypeRef.current = 'keyboard';
    }
    return (0,mergeCleanups/* .mergeCleanups */.g)((0,addEventListener/* .addEventListener */.q)(doc, 'pointerdown', onPointerDown, true), (0,addEventListener/* .addEventListener */.q)(doc, 'pointerup', clearPointerDownOutside, true), (0,addEventListener/* .addEventListener */.q)(doc, 'pointercancel', clearPointerDownOutside, true), (0,addEventListener/* .addEventListener */.q)(doc, 'keydown', onKeyDown, true),
    // Avoid a stale `true` leaking into the next open (e.g. keep-mounted popups)
    // if the popup dismissed between pointerdown and pointerup.
    clearPointerDownOutside);
  }, [disabled, floating, domReference, floatingFocusElement, open, portalContext, pointerDownTimeout, getResolvedInsideElements]);

  // Close on focus out and restore focus within the floating tree when needed.
  react.useEffect(() => {
    if (disabled || !closeOnFocusOut) {
      return undefined;
    }
    const doc = (0,owner/* .ownerDocument */.R)(floatingFocusElement);

    // In Safari, buttons lose focus when pressing them.
    function handlePointerDown() {
      isPointerDownRef.current = true;
      pointerDownTimeout.start(0, () => {
        isPointerDownRef.current = false;
      });
    }
    function handleFocusIn(event) {
      const target = (0,shadowDom/* .getTarget */.EW)(event);
      if ((0,tabbable/* .isTabbable */.AO)(target)) {
        lastFocusedTabbableRef.current = target;
      }
    }
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      const currentTarget = event.currentTarget;
      const target = (0,shadowDom/* .getTarget */.EW)(event);

      // When focus is lost to the body (e.g. on a backdrop press), record the element that
      // had focus so a confirmation dialog opened while the body is focused can return focus
      // to it. Scoped to `modal` to avoid non-modal popups polluting the shared stack.
      if (modal && relatedTarget == null && target != null && (0,shadowDom/* .contains */.gR)(floating, target)) {
        addPreviouslyFocusedElement(target);
      }
      queueMicrotask(() => {
        const nodeId = getNodeId();
        const triggers = store.context.triggerElements;
        const insideElements = getResolvedInsideElements();
        const isRelatedFocusGuard = relatedTarget?.hasAttribute((0,createAttribute/* .createAttribute */.F)('focus-guard')) && [beforeGuardRef.current, afterGuardRef.current, portalContext?.beforeInsideRef.current, portalContext?.afterInsideRef.current, portalContext?.beforeOutsideRef.current, portalContext?.afterOutsideRef.current, (0,resolveRef/* .resolveRef */.q)(previousFocusableElement), (0,resolveRef/* .resolveRef */.q)(nextFocusableElement)].includes(relatedTarget);
        const movedToUnrelatedNode = !((0,shadowDom/* .contains */.gR)(domReference, relatedTarget) || (0,shadowDom/* .contains */.gR)(floating, relatedTarget) || (0,shadowDom/* .contains */.gR)(relatedTarget, floating) || (0,shadowDom/* .contains */.gR)(portalContext?.portalNode, relatedTarget) || insideElements.some(element => element === relatedTarget || (0,shadowDom/* .contains */.gR)(element, relatedTarget)) || triggers.hasMatchingElement(trigger => (0,shadowDom/* .contains */.gR)(trigger, relatedTarget)) || isRelatedFocusGuard || tree && ((0,nodes/* .getNodeChildren */.CM)(tree.nodesRef.current, nodeId).find(node => (0,shadowDom/* .contains */.gR)(node.context?.elements.floating, relatedTarget) || (0,shadowDom/* .contains */.gR)(node.context?.elements.domReference, relatedTarget)) || (0,nodes/* .getNodeAncestors */.$4)(tree.nodesRef.current, nodeId).find(node => [node.context?.elements.floating, (0,utils_element/* .getFloatingFocusElement */.nd)(node.context?.elements.floating)].includes(relatedTarget) || node.context?.elements.domReference === relatedTarget)));
        if (currentTarget === domReference && floatingFocusElement) {
          handleTabIndex(floatingFocusElement);
        }

        // Restore focus to the previously focused tabbable element to prevent
        // focus from being lost outside the floating tree.
        if (restoreFocus && currentTarget !== domReference && !(0,composite/* .isElementVisible */.J9)(target) && (0,shadowDom/* .activeElement */.RS)(doc) === doc.body) {
          // Let `FloatingPortal` effect knows that focus is still inside the
          // floating tree.
          if ((0,floating_ui_utils_dom/* .isHTMLElement */.sb)(floatingFocusElement)) {
            floatingFocusElement.focus();
            // If explicitly requested to restore focus to the popup container, do not search
            // for the next/previous tabbable element.
            if (restoreFocus === 'popup') {
              // If the focused element is removed on pointerdown, the browser
              // tries to move focus to it right after the `.focus()` call above,
              // but because it's removed in the same tick, focus is lost instead.
              // Re-focusing asynchronously (next frame) wins that race.
              restoreFocusFrame.request(() => {
                floatingFocusElement.focus();
              });
              return;
            }
          }
          const tabbableContent = getTabbableContent();
          const prevTabbable = lastFocusedTabbableRef.current;
          const nodeToFocus = (prevTabbable && tabbableContent.includes(prevTabbable) ? prevTabbable : null) || tabbableContent[tabbableContent.length - 1] || floatingFocusElement;
          if ((0,floating_ui_utils_dom/* .isHTMLElement */.sb)(nodeToFocus)) {
            nodeToFocus.focus();
          }
        }

        // https://github.com/floating-ui/floating-ui/issues/3060
        if (dataRef.current.insideReactTree) {
          dataRef.current.insideReactTree = false;
          return;
        }

        // Focus did not move inside the floating tree, and there are no tabbable
        // portal guards to handle closing.
        if ((isUntrappedTypeableCombobox ? true : !modal) && relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && (
        // Fix React 18 Strict Mode returnFocus due to double rendering.
        // For an "untrapped" typeable combobox (input role=combobox with
        // initialFocus=false), re-opening the popup and tabbing out should still close it even
        // when the previously focused element (e.g. the next tabbable outside the popup) is
        // focused again. Otherwise, the popup remains open on the second Tab sequence:
        // click input -> Tab (closes) -> click input -> Tab.
        // Allow closing when `isUntrappedTypeableCombobox` regardless of the previously focused element.
        isUntrappedTypeableCombobox || relatedTarget !== getPreviouslyFocusedElement())) {
          preventReturnFocusRef.current = true;
          store.setOpen(false, (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .focusOut */.Xn, event));
        }
      });
    }
    function markInsideReactTree() {
      if (pointerDownOutsideRef.current) {
        return;
      }
      dataRef.current.insideReactTree = true;
      blurTimeout.start(0, () => {
        dataRef.current.insideReactTree = false;
      });
    }
    const domReferenceElement = (0,floating_ui_utils_dom/* .isHTMLElement */.sb)(domReference) ? domReference : null;
    if (!floating && !domReferenceElement) {
      return undefined;
    }
    return (0,mergeCleanups/* .mergeCleanups */.g)(domReferenceElement && (0,addEventListener/* .addEventListener */.q)(domReferenceElement, 'focusout', handleFocusOutside), domReferenceElement && (0,addEventListener/* .addEventListener */.q)(domReferenceElement, 'pointerdown', handlePointerDown), floating && (0,addEventListener/* .addEventListener */.q)(floating, 'focusin', handleFocusIn), floating && (0,addEventListener/* .addEventListener */.q)(floating, 'focusout', handleFocusOutside), floating && portalContext && (0,addEventListener/* .addEventListener */.q)(floating, 'focusout', markInsideReactTree, true));
  }, [disabled, domReference, floating, floatingFocusElement, modal, tree, portalContext, store, closeOnFocusOut, restoreFocus, getTabbableContent, isUntrappedTypeableCombobox, getNodeId, dataRef, blurTimeout, pointerDownTimeout, restoreFocusFrame, nextFocusableElement, previousFocusableElement, getResolvedInsideElements]);

  // Hide everything outside the floating tree from assistive tech while open.
  react.useEffect(() => {
    if (disabled || !floating || !open) {
      return undefined;
    }

    // Don't hide portals nested within the parent portal.
    const portalNodes = Array.from(portalContext?.portalNode?.querySelectorAll(`[${(0,createAttribute/* .createAttribute */.F)('portal')}]`) || []);
    const ancestors = tree ? (0,nodes/* .getNodeAncestors */.$4)(tree.nodesRef.current, getNodeId()) : [];
    const rootAncestorComboboxDomReference = ancestors.find(node => (0,utils_element/* .isTypeableCombobox */.WZ)(node.context?.elements.domReference || null))?.context?.elements.domReference;
    const controlInsideElements = [floating, ...portalNodes, beforeGuardRef.current, afterGuardRef.current, portalContext?.beforeOutsideRef.current, portalContext?.afterOutsideRef.current, ...getResolvedInsideElements()];
    const insideElements = [...controlInsideElements, rootAncestorComboboxDomReference, (0,resolveRef/* .resolveRef */.q)(previousFocusableElement), (0,resolveRef/* .resolveRef */.q)(nextFocusableElement), isUntrappedTypeableCombobox ? domReference : null].filter(x => x != null);
    const ariaHiddenCleanup = markOthers(insideElements, {
      ariaHidden: modal || isUntrappedTypeableCombobox,
      mark: false
    });
    const markerInsideElements = [floating, ...portalNodes].filter(x => x != null);
    const markerCleanup = markOthers(markerInsideElements);
    return () => {
      markerCleanup();
      ariaHiddenCleanup();
    };
  }, [open, disabled, domReference, floating, modal, portalContext, isUntrappedTypeableCombobox, tree, getNodeId, nextFocusableElement, previousFocusableElement, getResolvedInsideElements]);

  // Focus the initial element when the floating element opens.
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (!open || disabled || !(0,floating_ui_utils_dom/* .isHTMLElement */.sb)(floatingFocusElement)) {
      return;
    }
    closeTypeRef.current = '';
    lastInteractionTypeRef.current = '';
    const doc = (0,owner/* .ownerDocument */.R)(floatingFocusElement);
    const previouslyFocusedElement = (0,shadowDom/* .activeElement */.RS)(doc);

    // Wait for any layout effect state setters to execute to set `tabIndex`.
    queueMicrotask(() => {
      const initialFocusValueOrFn = initialFocusRef.current;
      const resolvedInitialFocus = typeof initialFocusValueOrFn === 'function' ? initialFocusValueOrFn(openInteractionTypeRef.current || '') : initialFocusValueOrFn;

      // `null` should fallback to default behavior in case of an empty ref.
      if (resolvedInitialFocus === undefined || resolvedInitialFocus === false) {
        return;
      }
      const focusAlreadyInsideFloatingEl = (0,shadowDom/* .contains */.gR)(floatingFocusElement, previouslyFocusedElement);
      if (focusAlreadyInsideFloatingEl) {
        return;
      }
      let focusableElements = null;
      const getDefaultFocusElement = () => {
        if (focusableElements == null) {
          focusableElements = getTabbableContent(floatingFocusElement);
        }
        return focusableElements[0] || floatingFocusElement;
      };
      let elToFocus;
      if (resolvedInitialFocus === true || resolvedInitialFocus === null) {
        elToFocus = getDefaultFocusElement();
      } else {
        elToFocus = (0,resolveRef/* .resolveRef */.q)(resolvedInitialFocus);
      }
      elToFocus = elToFocus || getDefaultFocusElement();
      const hadFocusInside = (0,shadowDom/* .contains */.gR)(floatingFocusElement, (0,shadowDom/* .activeElement */.RS)(doc));

      // enqueueFocus returns a rAF-cancel function; we intentionally don't cancel this focus.
      void (0,enqueueFocus/* .enqueueFocus */.p)(elToFocus, {
        preventScroll: elToFocus === floatingFocusElement,
        shouldFocus() {
          // This focus is queued on the next animation frame. If the floating element has closed
          // before it runs — e.g. tabbing out of a kept-mounted popup — don't pull focus back
          // onto the initial element after it has legitimately moved elsewhere.
          if (!openRef.current) {
            return false;
          }
          if (hadFocusInside) {
            return true;
          }
          const currentActiveElement = (0,shadowDom/* .activeElement */.RS)(doc);
          const focusMovedInside = currentActiveElement !== elToFocus && (0,shadowDom/* .contains */.gR)(floatingFocusElement, currentActiveElement);
          return !focusMovedInside;
        }
      });
    });
  }, [disabled, open, floatingFocusElement, getTabbableContent, initialFocusRef, openInteractionTypeRef, openRef]);

  // Track return focus targets and restore focus on unmount/close.
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (disabled || !floatingFocusElement) {
      return undefined;
    }
    const doc = (0,owner/* .ownerDocument */.R)(floatingFocusElement);
    const elementFocusedBeforeOpen = (0,shadowDom/* .activeElement */.RS)(doc);
    // Only an explicit `null` interaction type represents a programmatic open.
    // `undefined` is normalized to `''` by the prop default, so it never reaches
    // here as nullish and is intentionally not treated as programmatic.
    const preferPreviousFocus = openInteractionTypeRef.current == null;
    addPreviouslyFocusedElement(elementFocusedBeforeOpen);
    function onOpenChangeLocal(details) {
      if (!details.open) {
        closeTypeRef.current = getEventType(details.nativeEvent, lastInteractionTypeRef.current);
      }
      if (details.reason === reason_parts/* .triggerHover */.N7 && details.nativeEvent.type === 'mouseleave') {
        preventReturnFocusRef.current = true;
      }
      if (details.reason !== reason_parts/* .outsidePress */.Np) {
        return;
      }
      if (details.nested) {
        preventReturnFocusRef.current = false;
      } else if ((0,utils_event/* .isVirtualClick */.YF)(details.nativeEvent) || (0,utils_event/* .isVirtualPointerEvent */.Pg)(details.nativeEvent)) {
        preventReturnFocusRef.current = false;
      } else {
        // On outside press, only return focus to the reference when the browser supports the
        // `focus({ preventScroll })` option; without it, restoring focus scrolls the page.
        // Chrome on Android and Samsung Internet still don't support `preventScroll`
        // (https://issues.chromium.org/issues/41453122), so the runtime check keeps return
        // focus disabled there to avoid the scroll jump.
        let isPreventScrollSupported = false;
        (0,owner/* .ownerDocument */.R)(floatingFocusElement).createElement('div').focus({
          get preventScroll() {
            isPreventScrollSupported = true;
            return false;
          }
        });
        if (isPreventScrollSupported) {
          preventReturnFocusRef.current = false;
        } else {
          preventReturnFocusRef.current = true;
        }
      }
    }
    events.on('openchange', onOpenChangeLocal);
    function getReturnElement(closeType) {
      const returnFocusValueOrFn = returnFocusRef.current;
      let resolvedReturnFocusValue = typeof returnFocusValueOrFn === 'function' ? returnFocusValueOrFn(closeType) : returnFocusValueOrFn;

      // `null` should fallback to default behavior in case of an empty ref.
      if (resolvedReturnFocusValue === undefined || resolvedReturnFocusValue === false) {
        return null;
      }
      if (resolvedReturnFocusValue === null) {
        resolvedReturnFocusValue = true;
      }
      const referenceReturnElement = domReference?.isConnected ? domReference : null;
      const previousReturnElement = elementFocusedBeforeOpen?.isConnected && (0,floating_ui_utils_dom/* .getNodeName */.mq)(elementFocusedBeforeOpen) !== 'body' ? elementFocusedBeforeOpen : null;
      let defaultReturnElement = preferPreviousFocus ? previousReturnElement || referenceReturnElement : referenceReturnElement || previousReturnElement;
      if (!defaultReturnElement) {
        defaultReturnElement = getPreviouslyFocusedElement() || null;
      }
      if (typeof resolvedReturnFocusValue === 'boolean') {
        return defaultReturnElement;
      }
      return (0,resolveRef/* .resolveRef */.q)(resolvedReturnFocusValue) || defaultReturnElement || null;
    }
    return () => {
      events.off('openchange', onOpenChangeLocal);
      const activeEl = (0,shadowDom/* .activeElement */.RS)(doc);
      const insideElements = getResolvedInsideElements();
      const isFocusInsideFloatingTree = (0,shadowDom/* .contains */.gR)(floating, activeEl) || insideElements.some(element => element === activeEl || (0,shadowDom/* .contains */.gR)(element, activeEl)) || tree && (0,nodes/* .getNodeChildren */.CM)(tree.nodesRef.current, getNodeId(), false).some(node => (0,shadowDom/* .contains */.gR)(node.context?.elements.floating, activeEl));

      // eslint-disable-next-line react-hooks/exhaustive-deps
      const returnFocusValueOrFn = returnFocusRef.current;
      const closeType = closeTypeRef.current;
      const returnElement = getReturnElement(closeType);
      queueMicrotask(() => {
        // `returnElement` if it is tabbable, otherwise its first tabbable child,
        // otherwise `returnElement` itself (which may not be tabbable at all).
        const tabbableReturnElement = getFirstTabbableElement(returnElement);
        const hasExplicitReturnFocus = typeof returnFocusValueOrFn !== 'boolean';
        if (returnFocusValueOrFn && !preventReturnFocusRef.current && (0,floating_ui_utils_dom/* .isHTMLElement */.sb)(tabbableReturnElement) && (
        // If the focus moved somewhere else after mount, avoid returning focus
        // since it likely entered a different element which should be
        // respected: https://github.com/floating-ui/floating-ui/issues/2607
        !hasExplicitReturnFocus && tabbableReturnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) {
          const focusOptions = {
            preventScroll: true
          };
          if (closeType === 'keyboard') {
            focusOptions.focusVisible = true;
          }
          tabbableReturnElement.focus(focusOptions);
        }
        preventReturnFocusRef.current = false;
      });
    };
  }, [disabled, floating, floatingFocusElement, returnFocusRef, openInteractionTypeRef, events, tree, domReference, getNodeId, getResolvedInsideElements]);

  // Safari may randomly scroll to the bottom of the page if an input inside a popup has focus
  // when the popup unmounts from the DOM.
  // By blurring it before the popup unmounts, we can prevent this behavior.
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (!engine/* .webkit */.Fp || open || !floating) {
      return;
    }
    const activeEl = (0,shadowDom/* .activeElement */.RS)((0,owner/* .ownerDocument */.R)(floating));
    if (!(0,floating_ui_utils_dom/* .isHTMLElement */.sb)(activeEl) || !(0,utils_element/* .isTypeableElement */.$u)(activeEl)) {
      return;
    }
    if ((0,shadowDom/* .contains */.gR)(floating, activeEl)) {
      activeEl.blur();
    }
  }, [open, floating]);

  // Synchronize the focus manager state (modal, closeOnFocusOut, open, etc.) to the
  // FloatingPortal context, which uses it to decide whether to render its own guards.
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (disabled || !portalContext) {
      return undefined;
    }
    portalContext.setFocusManagerState({
      modal,
      closeOnFocusOut,
      open,
      onOpenChange: store.setOpen,
      domReference
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [disabled, portalContext, modal, open, store, closeOnFocusOut, domReference]);

  // Keep the floating element tabIndex in sync and clear stale focus records.
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (disabled || !floatingFocusElement) {
      return undefined;
    }
    handleTabIndex(floatingFocusElement);
    return () => {
      queueMicrotask(clearDisconnectedPreviouslyFocusedElements);
    };
  }, [disabled, floatingFocusElement]);
  const shouldRenderGuards = !disabled && (modal ? !isUntrappedTypeableCombobox : true) && (isInsidePortal || modal);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [shouldRenderGuards && /*#__PURE__*/(0,jsx_runtime.jsx)(FocusGuard/* .FocusGuard */.U, {
      "data-type": "inside",
      ref: mergedBeforeGuardRef,
      onFocus: event => {
        if (modal) {
          const els = getTabbableContent();
          // enqueueFocus returns a rAF-cancel function we don't need here.
          void (0,enqueueFocus/* .enqueueFocus */.p)(els[els.length - 1]);
        } else if (portalContext?.portalNode) {
          preventReturnFocusRef.current = false;
          if ((0,tabbable/* .isOutsideEvent */.Qp)(event, portalContext.portalNode)) {
            const nextTabbable = (0,tabbable/* .getNextTabbable */.vF)(domReference);
            nextTabbable?.focus();
          } else {
            (0,resolveRef/* .resolveRef */.q)(previousFocusableElement ?? portalContext.beforeOutsideRef)?.focus();
          }
        }
      }
    }), children, shouldRenderGuards && /*#__PURE__*/(0,jsx_runtime.jsx)(FocusGuard/* .FocusGuard */.U, {
      "data-type": "inside",
      ref: mergedAfterGuardRef,
      onFocus: event => {
        if (modal) {
          // enqueueFocus returns a rAF-cancel function we don't need here.
          void (0,enqueueFocus/* .enqueueFocus */.p)(getTabbableContent()[0]);
        } else if (portalContext?.portalNode) {
          if (closeOnFocusOut) {
            preventReturnFocusRef.current = true;
          }
          if ((0,tabbable/* .isOutsideEvent */.Qp)(event, portalContext.portalNode)) {
            const prevTabbable = (0,tabbable/* .getPreviousTabbable */.XJ)(domReference);
            prevTabbable?.focus();
          } else {
            (0,resolveRef/* .resolveRef */.q)(nextFocusableElement ?? portalContext.afterOutsideRef)?.focus();
          }
        }
      }
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/useRenderElement.mjs + 4 modules
var useRenderElement = __webpack_require__(21724);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/root/ComboboxRootContext.mjs
var ComboboxRootContext = __webpack_require__(60598);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/store.mjs
var combobox_store = __webpack_require__(81612);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/utils/popupStateMapping.mjs
var popupStateMapping = __webpack_require__(7574);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/positioner/ComboboxPositionerContext.mjs
var ComboboxPositionerContext = __webpack_require__(68150);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs + 1 modules
var useOpenChangeComplete = __webpack_require__(83378);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/stateAttributesMapping.mjs
var stateAttributesMapping = __webpack_require__(55032);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/getDisabledMountTransitionStyles.mjs
var getDisabledMountTransitionStyles = __webpack_require__(21646);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/utils/ComboboxInternalDismissButton.mjs
var ComboboxInternalDismissButton = __webpack_require__(18215);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/root/utils/index.mjs
var utils = __webpack_require__(47614);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/utils/parts.mjs
var parts = __webpack_require__(97099);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/combobox/popup/ComboboxPopup.mjs
'use client';


















const ComboboxPopup_stateAttributesMapping = {
  ...popupStateMapping/* .popupStateMapping */.GW,
  ...stateAttributesMapping/* .transitionStatusMapping */.G
};

/**
 * A container for the list.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
const ComboboxPopup_ComboboxPopup = /*#__PURE__*/react.forwardRef(function ComboboxPopup(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    initialFocus,
    finalFocus,
    ...elementProps
  } = componentProps;
  const store = (0,ComboboxRootContext/* .useComboboxRootContext */.Ee)();
  const positioning = (0,ComboboxPositionerContext/* .useComboboxPositionerContext */.O)();
  const floatingRootContext = (0,ComboboxRootContext/* .useComboboxFloatingContext */.ui)();
  const mounted = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.mounted */.T.mounted);
  const open = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.open */.T.open);
  const openMethod = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.openMethod */.T.openMethod);
  const popupProps = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.popupProps */.T.popupProps);
  const transitionStatus = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.transitionStatus */.T.transitionStatus);
  const inputInsidePopup = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.inputInsidePopup */.T.inputInsidePopup);
  const inputElement = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.inputElement */.T.inputElement);
  const modal = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.modal */.T.modal);
  const rootId = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.id */.T.id);
  const empty = (0,parts/* .useListEmpty */.$B)();
  const popupId = elementProps.id ?? (inputInsidePopup ? (0,utils/* .getComboboxPopupId */.xj)(rootId) : undefined);
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    // Prefer the rendered DOM id, which a `render` prop element or function may override.
    store.set('popupId', store.state.popupRef.current?.id || popupId);
    return () => {
      store.set('popupId', undefined);
    };
  }, [store, popupId]);
  (0,useOpenChangeComplete/* .useOpenChangeComplete */.v)({
    open,
    ref: store.state.popupRef,
    onComplete() {
      if (open) {
        store.state.onOpenChangeComplete(true);
      }
    }
  });
  const state = {
    open,
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden,
    transitionStatus,
    empty
  };
  const element = (0,useRenderElement/* .useRenderElement */.o)('div', componentProps, {
    state,
    ref: [forwardedRef, store.state.popupRef],
    props: [popupProps, {
      id: popupId,
      role: inputInsidePopup ? 'dialog' : 'presentation',
      onFocus(event) {
        const target = (0,shadowDom/* .getTarget */.EW)(event.nativeEvent);
        if (openMethod !== 'touch' && ((0,shadowDom/* .contains */.gR)(store.state.listElement, target) || target === event.currentTarget)) {
          store.state.inputRef.current?.focus();
        }
      }
    }, (0,getDisabledMountTransitionStyles/* .getDisabledMountTransitionStyles */.d)(transitionStatus), elementProps],
    stateAttributesMapping: ComboboxPopup_stateAttributesMapping
  });

  // Default initial focus logic:
  // If opened by touch, focus the popup element to prevent the virtual keyboard from opening
  // (this is required for Android specifically as iOS handles this automatically).
  const computedDefaultInitialFocus = inputInsidePopup ? interactionType => interactionType === 'touch' ? store.state.popupRef.current : inputElement : false;
  const resolvedInitialFocus = initialFocus === undefined ? computedDefaultInitialFocus : initialFocus;
  let resolvedFinalFocus;
  if (finalFocus != null) {
    resolvedFinalFocus = finalFocus;
  } else {
    resolvedFinalFocus = inputInsidePopup ? undefined : false;
  }
  const focusManagerModal = !inputInsidePopup || modal;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(FloatingFocusManager, {
    context: floatingRootContext,
    disabled: !mounted,
    modal: focusManagerModal,
    openInteractionType: openMethod,
    initialFocus: resolvedInitialFocus,
    returnFocus: resolvedFinalFocus,
    getInsideElements: () => [store.state.startDismissRef.current, store.state.endDismissRef.current],
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [element, focusManagerModal && /*#__PURE__*/(0,jsx_runtime.jsx)(ComboboxInternalDismissButton/* .ComboboxInternalDismissButton */.p, {
        ref: store.state.endDismissRef
      })]
    })
  });
});
if (false) {}

},
19897(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var _base_ui_utils_store__rspack_import_3 = __webpack_require__(92477);
/* import */ var _floating_ui_react_index_mjs__rspack_import_6 = __webpack_require__(31280);
/* import */ var _root_ComboboxRootContext_mjs__rspack_import_2 = __webpack_require__(60598);
/* import */ var _ComboboxPortalContext_mjs__rspack_import_5 = __webpack_require__(83226);
/* import */ var _store_mjs__rspack_import_4 = __webpack_require__(81612);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(95170);
'use client';








/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */

const ComboboxPortal = /*#__PURE__*/react__rspack_import_0.forwardRef(function ComboboxPortal(props, forwardedRef) {
  const {
    keepMounted = false,
    ...portalProps
  } = props;
  const store = (0,_root_ComboboxRootContext_mjs__rspack_import_2/* .useComboboxRootContext */.Ee)();
  const mounted = (0,_base_ui_utils_store__rspack_import_3/* .useStore */.P)(store, _store_mjs__rspack_import_4/* .selectors.mounted */.T.mounted);
  const forceMounted = (0,_base_ui_utils_store__rspack_import_3/* .useStore */.P)(store, _store_mjs__rspack_import_4/* .selectors.forceMounted */.T.forceMounted);
  const shouldRender = mounted || keepMounted || forceMounted;
  if (!shouldRender) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__rspack_import_1.jsx)(_ComboboxPortalContext_mjs__rspack_import_5/* .ComboboxPortalContext.Provider */.P.Provider, {
    value: keepMounted,
    children: /*#__PURE__*/(0,react_jsx_runtime__rspack_import_1.jsx)(_floating_ui_react_index_mjs__rspack_import_6/* .FloatingPortal */.XF, {
      ref: forwardedRef,
      ...portalProps
    })
  });
});
if (false) {}
__webpack_require__.d(__webpack_exports__, {
}, {
  K: ComboboxPortal
});


},
83226(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _base_ui_utils_formatErrorMessage__rspack_import_1 = __webpack_require__(98103);
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
'use client';



const ComboboxPortalContext = /*#__PURE__*/react__rspack_import_0.createContext(undefined);
if (false) {}
function useComboboxPortalContext() {
  const context = react__rspack_import_0.useContext(ComboboxPortalContext);
  if (context === undefined) {
    throw new Error( false ? 0 : (0,_base_ui_utils_formatErrorMessage__rspack_import_1/* ["default"] */.A)(20));
  }
  return context;
}
__webpack_require__.d(__webpack_exports__, {
  s: () => (useComboboxPortalContext)
}, {
  P: ComboboxPortalContext
});


},
8377(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ ComboboxPositioner_ComboboxPositioner)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/store/useStore.mjs + 1 modules
var useStore = __webpack_require__(92477);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useIsoLayoutEffect.mjs
var useIsoLayoutEffect = __webpack_require__(74732);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useStableCallback.mjs
var useStableCallback = __webpack_require__(77942);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/reactVersion.mjs
var reactVersion = __webpack_require__(15934);
;// CONCATENATED MODULE: ./node_modules/@base-ui/utils/inertValue.mjs

function inertValue(value) {
  if ((0,reactVersion/* .isReactVersionAtLeast */._)(19)) {
    return value;
  }
  // compatibility with React < 19
  return value ? 'true' : undefined;
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/root/ComboboxRootContext.mjs
var ComboboxRootContext = __webpack_require__(60598);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/positioner/ComboboxPositionerContext.mjs
var ComboboxPositionerContext = __webpack_require__(68150);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/utils/parts.mjs
var parts = __webpack_require__(97099);
// EXTERNAL MODULE: ./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var floating_ui_utils = __webpack_require__(51541);
// EXTERNAL MODULE: ./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
var floating_ui_utils_dom = __webpack_require__(54951);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/owner.mjs
var owner = __webpack_require__(61402);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useValueAsRef.mjs
var useValueAsRef = __webpack_require__(77888);
// EXTERNAL MODULE: ./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var floating_ui_react_dom = __webpack_require__(67587);
// EXTERNAL MODULE: ./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs + 1 modules
var floating_ui_dom = __webpack_require__(72486);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/components/FloatingTree.mjs
var FloatingTree = __webpack_require__(50826);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/floating-ui-react/hooks/useFloating.mjs
'use client';








/**
 * Provides data to position a floating element and context to add interactions.
 * @see https://floating-ui.com/docs/useFloating
 */
function useFloating(options = {}) {
  const internalStore = useFloatingRootContext(options);
  const store = options.rootContext || internalStore;
  return useFloatingWithStore(options, store);
}

/**
 * Base UI's private `useFloating` path. The caller must supply the root store, so this skips the
 * internal root-context hook used by the public Floating UI-compatible API.
 */
function useBaseUIFloating(options) {
  return useFloatingWithStore(options, options.rootContext);
}
function useFloatingWithStore(options, store) {
  const {
    nodeId,
    externalTree
  } = options;
  const referenceElement = store.useState('referenceElement');
  const floatingElement = store.useState('floatingElement');
  const domReferenceElement = store.useState('domReferenceElement');
  const open = store.useState('open');
  const floatingId = store.useState('floatingId');
  const [positionReference, setPositionReferenceRaw] = react.useState(null);
  const [localDomReference, setLocalDomReference] = react.useState(undefined);
  const [localFloatingElement, setLocalFloatingElement] = react.useState(undefined);
  const domReferenceRef = react.useRef(null);
  const tree = (0,FloatingTree/* .useFloatingTree */.cq)(externalTree);
  const storeElements = react.useMemo(() => ({
    reference: referenceElement,
    floating: floatingElement,
    domReference: domReferenceElement
  }), [referenceElement, floatingElement, domReferenceElement]);
  const position = (0,floating_ui_react_dom/* .useFloating */.we)({
    ...options,
    elements: {
      ...storeElements,
      ...(positionReference && {
        reference: positionReference
      })
    }
  });
  const localDomReferenceElement = (0,floating_ui_utils_dom/* .isElement */.vq)(localDomReference) ? localDomReference : null;
  const syncedFloatingElement = localFloatingElement === undefined ? store.state.floatingElement : localFloatingElement;
  store.useSyncedValue('referenceElement', localDomReference ?? null);
  store.useSyncedValue('domReferenceElement', localDomReference === undefined ? domReferenceElement : localDomReferenceElement);
  store.useSyncedValue('floatingElement', syncedFloatingElement);
  const setPositionReference = react.useCallback(node => {
    const computedPositionReference = (0,floating_ui_utils_dom/* .isElement */.vq)(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      getClientRects: () => node.getClientRects(),
      contextElement: node
    } : node;
    // Store the positionReference in state if the DOM reference is specified externally via the
    // `elements.reference` option. This ensures that it won't be overridden on future renders.
    setPositionReferenceRaw(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = react.useCallback(node => {
    if ((0,floating_ui_utils_dom/* .isElement */.vq)(node) || node === null) {
      domReferenceRef.current = node;
      setLocalDomReference(node);
    }

    // Backwards-compatibility for passing a virtual element to `reference`
    // after it has set the DOM reference.
    if ((0,floating_ui_utils_dom/* .isElement */.vq)(position.refs.reference.current) || position.refs.reference.current === null ||
    // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !(0,floating_ui_utils_dom/* .isElement */.vq)(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs, setLocalDomReference]);
  const setFloating = react.useCallback(node => {
    setLocalFloatingElement(node);
    position.refs.setFloating(node);
  }, [position.refs]);
  const refs = react.useMemo(() => ({
    ...position.refs,
    setReference,
    setFloating,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setFloating, setPositionReference]);
  const elements = react.useMemo(() => ({
    ...position.elements,
    domReference: domReferenceElement
  }), [position.elements, domReferenceElement]);
  const context = react.useMemo(() => ({
    ...position,
    dataRef: store.context.dataRef,
    open,
    onOpenChange: store.setOpen,
    events: store.context.events,
    floatingId,
    refs,
    elements,
    nodeId,
    rootStore: store
  }), [position, refs, elements, nodeId, store, open, floatingId]);
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (domReferenceElement) {
      domReferenceRef.current = domReferenceElement;
    }
  }, [domReferenceElement]);
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    store.context.dataRef.current.floatingContext = context;
    const node = tree?.nodesRef.current.find(n => n.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return react.useMemo(() => ({
    ...position,
    context,
    refs,
    elements,
    rootStore: store
  }), [position, refs, elements, context, store]);
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/direction-context/DirectionContext.mjs
var DirectionContext = __webpack_require__(26246);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/floating-ui-react/middleware/arrow.mjs

/**
 * Fork of the original `arrow` middleware from Floating UI that allows
 * configuring the offset parent.
 */
const baseArrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0,
      offsetParent = 'real'
    } = (0,floating_ui_utils/* .evaluate */._3)(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = (0,floating_ui_utils/* .getPaddingObject */.nI)(padding);
    const coords = {
      x,
      y
    };
    const axis = (0,floating_ui_utils/* .getAlignmentAxis */.Dz)(placement);
    const length = (0,floating_ui_utils/* .getAxisLength */.sq)(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = offsetParent === 'real' ? await platform.getOffsetParent?.(element) : elements.floating;
    let clientSize = elements.floating[clientProp] || rects.floating[length];

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await platform.isElement?.(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = Math.min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = Math.min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = (0,floating_ui_utils/* .clamp */.qE)(min, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && (0,floating_ui_utils/* .getAlignment */.Sg)(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    // eslint-disable-next-line no-nested-ternary
    const alignmentOffset = shouldAddOffset ? center < min ? center - min : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = (options, deps) => ({
  ...baseArrow(options),
  options: [options, deps]
});
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/hideMiddleware.mjs
const hide = {
  name: 'hide',
  async fn(state) {
    const {
      width,
      height,
      x,
      y
    } = state.rects.reference;
    const anchorHidden = width === 0 && height === 0 && x === 0 && y === 0;
    // Mirrors Floating UI's `hide()` referenceHidden strategy. Floating UI injects
    // `detectOverflow` into the middleware platform before invoking middleware.
    const overflow = await state.platform.detectOverflow(state, {
      elementContext: 'reference'
    });
    const referenceHidden = overflow.top - height >= 0 || overflow.right - width >= 0 || overflow.bottom - height >= 0 || overflow.left - width >= 0;
    return {
      data: {
        referenceHidden: referenceHidden || anchorHidden
      }
    };
  }
};
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/adaptiveOriginConstants.mjs
const DEFAULT_SIDES = {
  sideX: 'left',
  sideY: 'top'
};

// Self-contained stand-in for Floating UI's `Middleware` type. Referencing the real type in
// store state makes `tsc` declaration emit reference `Platform`/`detectOverflow` from
// `@floating-ui/core` internals, which fails as non-portable (TS2883) in consuming builds.
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/internals/useAnchorPositioning.mjs
'use client';













const AVAILABLE_WIDTH_VAR = '--available-width';
const AVAILABLE_HEIGHT_VAR = '--available-height';
function getLogicalSide(sideParam, renderedSide, isRtl) {
  const isLogicalSideParam = sideParam === 'inline-start' || sideParam === 'inline-end';
  const logicalRight = isRtl ? 'inline-start' : 'inline-end';
  const logicalLeft = isRtl ? 'inline-end' : 'inline-start';
  return {
    top: 'top',
    right: isLogicalSideParam ? logicalRight : 'right',
    bottom: 'bottom',
    left: isLogicalSideParam ? logicalLeft : 'left'
  }[renderedSide];
}
function getOffsetData(state, sideParam, isRtl) {
  const {
    rects,
    placement
  } = state;
  const data = {
    side: getLogicalSide(sideParam, (0,floating_ui_utils/* .getSide */.C0)(placement), isRtl),
    align: (0,floating_ui_utils/* .getAlignment */.Sg)(placement) || 'center',
    anchor: {
      width: rects.reference.width,
      height: rects.reference.height
    },
    positioner: {
      width: rects.floating.width,
      height: rects.floating.height
    }
  };
  return data;
}
/**
 * Provides standardized anchor positioning behavior for floating elements. Wraps Floating UI's
 * `useFloating` hook.
 */
function useAnchorPositioning(params) {
  return useAnchorPositioningWithHook(params, useBaseUIFloating);
}
function useAnchorPositioningWithHook(params, useFloatingHook) {
  const {
    // Public parameters
    anchor,
    positionMethod = 'absolute',
    side: sideParam = 'bottom',
    sideOffset = 0,
    align = 'center',
    alignOffset = 0,
    collisionBoundary,
    collisionPadding: collisionPaddingParam = 5,
    sticky = false,
    arrowPadding = 5,
    disableAnchorTracking = false,
    inline: inlineMiddleware,
    // Private parameters
    keepMounted = false,
    floatingRootContext,
    mounted,
    collisionAvoidance,
    shift,
    nodeId,
    adaptiveOrigin,
    lazyFlip = false,
    externalTree
  } = params;
  const [mountSide, setMountSide] = react.useState(null);
  if (!mounted && mountSide !== null) {
    setMountSide(null);
  }
  const collisionAvoidanceSide = collisionAvoidance.side || 'flip';
  const collisionAvoidanceAlign = collisionAvoidance.align || 'flip';
  const collisionAvoidanceFallbackAxisSide = collisionAvoidance.fallbackAxisSide || 'end';
  const shiftCrossAxis = shift?.crossAxis ?? false;
  const shiftRootBoundary = shift?.rootBoundary;
  const anchorFn = typeof anchor === 'function' ? anchor : undefined;
  const anchorFnCallback = (0,useStableCallback/* .useStableCallback */.K)(anchorFn);
  const anchorDep = anchorFn ? anchorFnCallback : anchor;
  const anchorValueRef = (0,useValueAsRef/* .useValueAsRef */.u)(anchor);
  const mountedRef = (0,useValueAsRef/* .useValueAsRef */.u)(mounted);
  const direction = (0,DirectionContext/* .useDirection */.j)();
  const isRtl = direction === 'rtl';
  const side = mountSide || {
    top: 'top',
    right: 'right',
    bottom: 'bottom',
    left: 'left',
    'inline-end': isRtl ? 'left' : 'right',
    'inline-start': isRtl ? 'right' : 'left'
  }[sideParam];
  const placement = align === 'center' ? side : `${side}-${align}`;
  let collisionPadding = collisionPaddingParam;
  if (typeof collisionPadding === 'number') {
    collisionPadding = {
      top: collisionPadding,
      right: collisionPadding,
      bottom: collisionPadding,
      left: collisionPadding
    };
  } else if (collisionPadding) {
    collisionPadding = {
      top: collisionPadding.top || 0,
      right: collisionPadding.right || 0,
      bottom: collisionPadding.bottom || 0,
      left: collisionPadding.left || 0
    };
  }

  // Create a bias to the preferred side.
  // On iOS, when the mobile software keyboard opens, the input is exactly centered
  // in the viewport, but this can cause it to flip to the top undesirably.
  // The bias is only applied to `flip()` so it doesn't shift the resting position
  // computed by `shift()` and `size()` away from the requested `collisionPadding`.
  const bias = 1;
  const biasTop = sideParam === 'bottom' ? bias : 0;
  const biasBottom = sideParam === 'top' ? bias : 0;
  const biasLeft = sideParam === 'right' ? bias : 0;
  const biasRight = sideParam === 'left' ? bias : 0;
  const commonCollisionProps = {
    boundary: collisionBoundary === 'clipping-ancestors' ? 'clippingAncestors' : collisionBoundary,
    padding: collisionPadding
  };

  // Using a ref assumes that the arrow element is always present in the DOM for the lifetime of the
  // popup. If this assumption ends up being false, we can switch to state to manage the arrow's
  // presence.
  const arrowRef = react.useRef(null);

  // Keep these reactive if they're not functions
  const sideOffsetRef = (0,useValueAsRef/* .useValueAsRef */.u)(sideOffset);
  const alignOffsetRef = (0,useValueAsRef/* .useValueAsRef */.u)(alignOffset);
  const sideOffsetDep = typeof sideOffset !== 'function' ? sideOffset : 0;
  const alignOffsetDep = typeof alignOffset !== 'function' ? alignOffset : 0;
  const middleware = [];
  if (inlineMiddleware) {
    middleware.push(inlineMiddleware);
  }
  middleware.push((0,floating_ui_react_dom/* .offset */.cY)(state => {
    const data = getOffsetData(state, sideParam, isRtl);
    const sideAxis = typeof sideOffsetRef.current === 'function' ? sideOffsetRef.current(data) : sideOffsetRef.current;
    const alignAxis = typeof alignOffsetRef.current === 'function' ? alignOffsetRef.current(data) : alignOffsetRef.current;
    return {
      mainAxis: sideAxis,
      crossAxis: alignAxis,
      alignmentAxis: alignAxis
    };
  }, [sideOffsetDep, alignOffsetDep, isRtl, sideParam]));
  const shiftDisabled = collisionAvoidanceAlign === 'none' && collisionAvoidanceSide !== 'shift';
  const crossAxisShiftEnabled = !shiftDisabled && (sticky || shiftCrossAxis || collisionAvoidanceSide === 'shift');
  const flipMiddleware = collisionAvoidanceSide === 'none' ? null : (0,floating_ui_react_dom/* .flip */.UU)({
    ...commonCollisionProps,
    // Ensure the popup flips if it's been limited by its --available-height and it resizes.
    // Since the size() padding is smaller than the flip() padding, flip() will take precedence.
    padding: {
      top: collisionPadding.top + bias + biasTop,
      right: collisionPadding.right + bias + biasRight,
      bottom: collisionPadding.bottom + bias + biasBottom,
      left: collisionPadding.left + bias + biasLeft
    },
    mainAxis: !shiftCrossAxis && collisionAvoidanceSide === 'flip',
    crossAxis: collisionAvoidanceAlign === 'flip' ? 'alignment' : false,
    fallbackAxisSideDirection: collisionAvoidanceFallbackAxisSide
  });
  const shiftMiddleware = shiftDisabled ? null : (0,floating_ui_react_dom/* .shift */.BN)({
    ...commonCollisionProps,
    // Use the Layout Viewport to avoid shifting around when pinch-zooming.
    rootBoundary: shiftRootBoundary,
    mainAxis: collisionAvoidanceAlign !== 'none',
    crossAxis: crossAxisShiftEnabled,
    limiter: sticky || shiftCrossAxis ? undefined : (0,floating_ui_react_dom/* .limitShift */.ER)(limitData => {
      if (!arrowRef.current) {
        return {};
      }
      const {
        width,
        height
      } = arrowRef.current.getBoundingClientRect();
      const sideAxis = (0,floating_ui_utils/* .getSideAxis */.TV)((0,floating_ui_utils/* .getSide */.C0)(limitData.placement));
      const arrowSize = sideAxis === 'y' ? width : height;
      const offsetAmount = sideAxis === 'y' ? collisionPadding.left + collisionPadding.right : collisionPadding.top + collisionPadding.bottom;
      return {
        offset: arrowSize / 2 + offsetAmount / 2
      };
    })
  }, [commonCollisionProps, sticky, shiftCrossAxis, shiftRootBoundary, collisionPadding, collisionAvoidanceAlign]);

  // https://floating-ui.com/docs/flip#combining-with-shift
  if (collisionAvoidanceSide === 'shift' || collisionAvoidanceAlign === 'shift' || align === 'center') {
    middleware.push(shiftMiddleware, flipMiddleware);
  } else {
    middleware.push(flipMiddleware, shiftMiddleware);
  }
  middleware.push((0,floating_ui_react_dom/* .size */.Ej)({
    ...commonCollisionProps,
    apply({
      elements: {
        floating
      },
      availableWidth,
      availableHeight,
      rects
    }) {
      if (!mountedRef.current) {
        return;
      }
      const floatingStyle = floating.style;
      floatingStyle.setProperty(AVAILABLE_WIDTH_VAR, `${availableWidth}px`);
      floatingStyle.setProperty(AVAILABLE_HEIGHT_VAR, `${availableHeight}px`);

      // Snap anchor dimensions to device pixels to ensure the popup's visual width matches the anchor's one.
      const dpr = (0,floating_ui_utils_dom/* .getWindow */.zk)(floating).devicePixelRatio || 1;
      const {
        x,
        y,
        width,
        height
      } = rects.reference;
      const anchorWidth = (Math.round((x + width) * dpr) - Math.round(x * dpr)) / dpr;
      const anchorHeight = (Math.round((y + height) * dpr) - Math.round(y * dpr)) / dpr;
      floatingStyle.setProperty('--anchor-width', `${anchorWidth}px`);
      floatingStyle.setProperty('--anchor-height', `${anchorHeight}px`);
    }
  }), arrow(state => ({
    // `transform-origin` calculations rely on an element existing. If the arrow hasn't been set,
    // we'll create a fake element.
    element: arrowRef.current || (0,owner/* .ownerDocument */.R)(state.elements.floating).createElement('div'),
    padding: arrowPadding,
    offsetParent: 'floating'
  }), [arrowPadding]), {
    name: 'transformOrigin',
    fn(state) {
      const {
        elements,
        middlewareData,
        placement: renderedPlacement,
        rects,
        y
      } = state;
      const currentRenderedSide = (0,floating_ui_utils/* .getSide */.C0)(renderedPlacement);
      const currentRenderedAxis = (0,floating_ui_utils/* .getSideAxis */.TV)(currentRenderedSide);
      const arrowEl = arrowRef.current;
      const arrowX = middlewareData.arrow?.x || 0;
      const arrowY = middlewareData.arrow?.y || 0;
      const arrowWidth = arrowEl?.clientWidth || 0;
      const arrowHeight = arrowEl?.clientHeight || 0;
      const transformX = arrowX + arrowWidth / 2;
      const transformY = arrowY + arrowHeight / 2;
      const shiftY = Math.abs(middlewareData.shift?.y || 0);
      const halfAnchorHeight = rects.reference.height / 2;
      const sideOffsetValue = typeof sideOffset === 'function' ? sideOffset(getOffsetData(state, sideParam, isRtl)) : sideOffset;
      const isOverlappingAnchor = shiftY > sideOffsetValue;
      const adjacentTransformOrigin = {
        top: `${transformX}px calc(100% + ${sideOffsetValue}px)`,
        bottom: `${transformX}px ${-sideOffsetValue}px`,
        left: `calc(100% + ${sideOffsetValue}px) ${transformY}px`,
        right: `${-sideOffsetValue}px ${transformY}px`
      }[currentRenderedSide];
      const overlapTransformOrigin = `${transformX}px ${rects.reference.y + halfAnchorHeight - y}px`;
      elements.floating.style.setProperty('--transform-origin', crossAxisShiftEnabled && currentRenderedAxis === 'y' && isOverlappingAnchor ? overlapTransformOrigin : adjacentTransformOrigin);
      return {};
    }
  }, hide, adaptiveOrigin);
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    // Ensure positioning doesn't run initially for `keepMounted` elements that
    // aren't initially open.
    if (!mounted && floatingRootContext) {
      floatingRootContext.update({
        referenceElement: null,
        floatingElement: null,
        domReferenceElement: null,
        positionReference: null
      });
    }
  }, [mounted, floatingRootContext]);
  const autoUpdateOptions = react.useMemo(() => ({
    elementResize: !disableAnchorTracking && typeof ResizeObserver !== 'undefined',
    layoutShift: !disableAnchorTracking && typeof IntersectionObserver !== 'undefined'
  }), [disableAnchorTracking]);
  const {
    refs,
    elements,
    x,
    y,
    middlewareData,
    update,
    placement: renderedPlacement,
    context,
    isPositioned,
    floatingStyles: originalFloatingStyles
  } = useFloatingHook({
    rootContext: floatingRootContext,
    open: keepMounted ? mounted : undefined,
    placement,
    middleware,
    strategy: positionMethod,
    whileElementsMounted: keepMounted ? undefined : (...args) => (0,floating_ui_dom/* .autoUpdate */.ll)(...args, autoUpdateOptions),
    nodeId,
    externalTree
  });
  const {
    sideX,
    sideY
  } = middlewareData.adaptiveOrigin || DEFAULT_SIDES;

  // Default to `fixed` when not positioned to prevent `autoFocus` scroll jumps.
  // This ensures the popup is inside the viewport initially before it gets positioned.
  const resolvedPosition = isPositioned ? positionMethod : 'fixed';
  const floatingStyles = react.useMemo(() => {
    let base;
    if (!isPositioned) {
      // Until a position for the current open is computed, ignore any coordinates retained from a
      // previous open (or from a pass that measured the hidden popup as 0x0). Rendering the
      // full-size popup at such stale coordinates can overflow the layout viewport, which makes
      // mobile Chrome zoom the page out and reflow everything the popup is anchored to.
      base = {
        position: resolvedPosition,
        top: 0,
        left: 0
      };
    } else if (adaptiveOrigin) {
      base = {
        position: resolvedPosition,
        [sideX]: x,
        [sideY]: y
      };
    } else {
      base = {
        ...originalFloatingStyles,
        position: resolvedPosition
      };
    }

    // Seed the available size vars so consumer `max-height: min(x, var(--available-height))` rules
    // resolve to a valid length on the first positioning pass, before `size()` writes the real
    // values. Without a fallback the unresolved `var()` invalidates the whole declaration, so the
    // popup is measured unconstrained while `flip()` picks its side, against the full content
    // height rather than the capped one. Seeded unconditionally (not only while `!isPositioned`):
    // the keys must stay present with a constant value so React's per-property style diff never
    // rewrites them after mount, preserving the px values `size()` sets imperatively. Moving them
    // into the `!isPositioned` branch makes React remove them once positioned, wiping `size()`'s
    // values and leaving the popup unconstrained.
    base[AVAILABLE_WIDTH_VAR] = '100vw';
    base[AVAILABLE_HEIGHT_VAR] = '100vh';
    if (!isPositioned) {
      base.opacity = 0;
    }
    return base;
  }, [adaptiveOrigin, resolvedPosition, sideX, x, sideY, y, originalFloatingStyles, isPositioned]);
  const registeredPositionReferenceRef = react.useRef(null);
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (!mounted) {
      return;
    }
    const anchorValue = anchorValueRef.current;
    const resolvedAnchor = typeof anchorValue === 'function' ? anchorValue() : anchorValue;
    const unwrappedElement = (isRef(resolvedAnchor) ? resolvedAnchor.current : resolvedAnchor) || null;
    const finalAnchor = unwrappedElement || null;
    if (finalAnchor !== registeredPositionReferenceRef.current) {
      refs.setPositionReference(finalAnchor);
      registeredPositionReferenceRef.current = finalAnchor;
    }
  }, [mounted, refs, anchorDep, anchorValueRef]);
  react.useEffect(() => {
    if (!mounted) {
      return;
    }
    const anchorValue = anchorValueRef.current;

    // Refs from parent components are set after useLayoutEffect runs and are available in useEffect.
    // Therefore, if the anchor is a ref, we need to update the position reference in useEffect.
    if (typeof anchorValue === 'function') {
      return;
    }
    if (isRef(anchorValue) && anchorValue.current !== registeredPositionReferenceRef.current) {
      refs.setPositionReference(anchorValue.current);
      registeredPositionReferenceRef.current = anchorValue.current;
    }
  }, [mounted, refs, anchorDep, anchorValueRef]);
  react.useEffect(() => {
    if (keepMounted && mounted && elements.reference && elements.floating) {
      return (0,floating_ui_dom/* .autoUpdate */.ll)(elements.reference, elements.floating, update, autoUpdateOptions);
    }
    return undefined;
  }, [keepMounted, mounted, elements, update, autoUpdateOptions]);
  const renderedSide = (0,floating_ui_utils/* .getSide */.C0)(renderedPlacement);
  const logicalRenderedSide = getLogicalSide(sideParam, renderedSide, isRtl);
  const renderedAlign = (0,floating_ui_utils/* .getAlignment */.Sg)(renderedPlacement) || 'center';
  const anchorHidden = Boolean(middlewareData.hide?.referenceHidden);

  // Locks the flip (makes it "sticky") so it doesn't prefer a given placement
  // and flips back lazily, not eagerly. Ideal for filtered lists that change
  // the size of the popup dynamically to avoid unwanted flipping when typing.
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (lazyFlip && mounted && isPositioned && renderedSide !== side) {
      setMountSide(renderedSide);
    }
  }, [lazyFlip, mounted, isPositioned, renderedSide, side]);
  const arrowStyles = react.useMemo(() => ({
    position: 'absolute',
    top: middlewareData.arrow?.y,
    left: middlewareData.arrow?.x
  }), [middlewareData.arrow]);
  const arrowUncentered = middlewareData.arrow?.centerOffset !== 0;
  return react.useMemo(() => ({
    positionerStyles: floatingStyles,
    arrowStyles,
    arrowRef,
    arrowUncentered,
    side: logicalRenderedSide,
    align: renderedAlign,
    physicalSide: renderedSide,
    anchorHidden,
    refs,
    context,
    isPositioned,
    update
  }), [floatingStyles, arrowStyles, arrowRef, arrowUncentered, logicalRenderedSide, renderedAlign, renderedSide, anchorHidden, refs, context, isPositioned, update]);
}
function isRef(param) {
  return param != null && 'current' in param;
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/portal/ComboboxPortalContext.mjs
var ComboboxPortalContext = __webpack_require__(83226);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/constants.mjs
var constants = __webpack_require__(80617);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/store.mjs
var combobox_store = __webpack_require__(81612);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/InternalBackdrop.mjs


/**
 * @internal
 */

const InternalBackdrop_InternalBackdrop = /*#__PURE__*/react.forwardRef(function InternalBackdrop(props, ref) {
  const {
    cutout,
    ...otherProps
  } = props;
  let clipPath;
  if (cutout) {
    const rect = cutout.getBoundingClientRect();
    clipPath = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${rect.left}px ${rect.top}px,${rect.left}px ${rect.bottom}px,${rect.right}px ${rect.bottom}px,${rect.right}px ${rect.top}px,${rect.left}px ${rect.top}px)`;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    ref: ref,
    role: "presentation"
    // Ensures Floating UI's outside press detection runs, as it considers
    // it an element that existed when the popup rendered.
    ,
    "data-base-ui-inert": "",
    ...otherProps,
    style: {
      position: 'fixed',
      inset: 0,
      userSelect: 'none',
      WebkitUserSelect: 'none',
      clipPath
    }
  });
});
if (false) {}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/utils/popupStateMapping.mjs
var popupStateMapping = __webpack_require__(7574);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/useRenderElement.mjs + 4 modules
var useRenderElement = __webpack_require__(21724);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/getDisabledMountTransitionStyles.mjs
var getDisabledMountTransitionStyles = __webpack_require__(21646);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/usePositioner.mjs
'use client';




/**
 * Renders the shared outer Positioner element used by popup components.
 * Applies the common role, hidden state, transition styles, state attributes, and optional inert styling.
 */
function usePositioner(componentProps, state, {
  styles,
  transitionStatus,
  props,
  refs,
  hidden,
  inert = false
}) {
  const style = {
    ...styles
  };
  if (inert) {
    style.pointerEvents = 'none';
  }
  return (0,useRenderElement/* .useRenderElement */.o)('div', componentProps, {
    state,
    ref: refs,
    props: [{
      role: 'presentation',
      hidden,
      style
    }, (0,getDisabledMountTransitionStyles/* .getDisabledMountTransitionStyles */.d)(transitionStatus), props],
    stateAttributesMapping: popupStateMapping/* .popupStateMapping */.GW
  });
}
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/addEventListener.mjs
var addEventListener = __webpack_require__(89362);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/platform/engine.mjs
var engine = __webpack_require__(6509);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/platform/os.mjs
var os = __webpack_require__(28229);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useTimeout.mjs
var useTimeout = __webpack_require__(37227);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useAnimationFrame.mjs
var useAnimationFrame = __webpack_require__(72055);
;// CONCATENATED MODULE: ./node_modules/@base-ui/utils/useScrollLock.mjs
'use client';








let originalHtmlStyles = {};
let originalBodyStyles = {};
let originalHtmlScrollBehavior = '';

// The viewport's overflow comes from <html> when it establishes its own scroll container, and
// propagates from <body> otherwise. An `overflow` style on the other element doesn't lock the page.
function getViewportScroller(html, body) {
  return (0,floating_ui_utils_dom/* .isOverflowElement */.ZU)(html) ? html : body;
}
function isPageScrollLocked(win, html, body) {
  return /hidden|clip/.test(win.getComputedStyle(getViewportScroller(html, body)).overflowY);
}
function hasInsetScrollbars(referenceElement) {
  if (typeof document === 'undefined') {
    return false;
  }
  const doc = (0,owner/* .ownerDocument */.R)(referenceElement);
  const win = (0,floating_ui_utils_dom/* .getWindow */.zk)(doc);
  return win.innerWidth - doc.documentElement.clientWidth > 0;
}
function supportsStableScrollbarGutter(referenceElement) {
  const supported = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('scrollbar-gutter', 'stable');
  if (!supported || typeof document === 'undefined') {
    return false;
  }
  const doc = (0,owner/* .ownerDocument */.R)(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const scrollContainer = getViewportScroller(html, body);
  const originalScrollContainerOverflowY = scrollContainer.style.overflowY;
  const originalHtmlStyleGutter = html.style.scrollbarGutter;
  html.style.scrollbarGutter = 'stable';
  scrollContainer.style.overflowY = 'scroll';
  const before = scrollContainer.offsetWidth;
  scrollContainer.style.overflowY = 'hidden';
  const after = scrollContainer.offsetWidth;
  scrollContainer.style.overflowY = originalScrollContainerOverflowY;
  html.style.scrollbarGutter = originalHtmlStyleGutter;
  return before === after;
}
function preventScrollOverlayScrollbars(referenceElement) {
  const doc = (0,owner/* .ownerDocument */.R)(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;

  // If an `overflow` style is present on <html>, we need to lock it, because a lock on <body>
  // won't have any effect.
  // But if <body> has an `overflow` style (like `overflow-x: hidden`), we need to lock it
  // instead, as sticky elements shift otherwise.
  const elementToLock = getViewportScroller(html, body);
  const originalElementToLockStyles = {
    overflowY: elementToLock.style.overflowY,
    overflowX: elementToLock.style.overflowX
  };
  Object.assign(elementToLock.style, {
    overflowY: 'hidden',
    overflowX: 'hidden'
  });
  return () => {
    Object.assign(elementToLock.style, originalElementToLockStyles);
  };
}
function preventScrollInsetScrollbars(referenceElement) {
  const doc = (0,owner/* .ownerDocument */.R)(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const win = (0,floating_ui_utils_dom/* .getWindow */.zk)(html);
  let scrollTop = 0;
  let scrollLeft = 0;
  let updateGutterOnly = false;
  const resizeFrame = useAnimationFrame/* .AnimationFrame.create */.KP.create();

  // Pinch-zoom in Safari causes a shift. Just don't lock scroll if there's any pinch-zoom.
  if (engine/* .webkit */.Fp && (win.visualViewport?.scale ?? 1) !== 1) {
    return () => {};
  }
  function lockScroll() {
    /* DOM reads: */

    const htmlStyles = win.getComputedStyle(html);
    const bodyStyles = win.getComputedStyle(body);
    const htmlScrollbarGutterValue = htmlStyles.scrollbarGutter || '';
    const hasBothEdges = htmlScrollbarGutterValue.includes('both-edges');
    const scrollbarGutterValue = hasBothEdges ? 'stable both-edges' : 'stable';
    scrollTop = html.scrollTop;
    scrollLeft = html.scrollLeft;
    originalHtmlStyles = {
      scrollbarGutter: html.style.scrollbarGutter,
      overflowY: html.style.overflowY,
      overflowX: html.style.overflowX
    };
    originalHtmlScrollBehavior = html.style.scrollBehavior;
    originalBodyStyles = {
      position: body.style.position,
      height: body.style.height,
      width: body.style.width,
      boxSizing: body.style.boxSizing,
      overflowY: body.style.overflowY,
      overflowX: body.style.overflowX,
      scrollBehavior: body.style.scrollBehavior
    };
    const isScrollableY = html.scrollHeight > html.clientHeight;
    const isScrollableX = html.scrollWidth > html.clientWidth;
    const hasConstantOverflowY = htmlStyles.overflowY === 'scroll' || bodyStyles.overflowY === 'scroll';
    const hasConstantOverflowX = htmlStyles.overflowX === 'scroll' || bodyStyles.overflowX === 'scroll';

    // Values can be negative in Firefox
    const scrollbarWidth = Math.max(0, win.innerWidth - body.clientWidth);
    const scrollbarHeight = Math.max(0, win.innerHeight - body.clientHeight);

    // Avoid shift due to the default <body> margin. This does cause elements to be clipped
    // with whitespace. Warn if <body> has margins?
    const marginY = parseFloat(bodyStyles.marginTop) + parseFloat(bodyStyles.marginBottom);
    const marginX = parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight);
    const elementToLock = getViewportScroller(html, body);
    updateGutterOnly = supportsStableScrollbarGutter(referenceElement);

    /*
     * DOM writes:
     * Do not read the DOM past this point!
     */

    if (updateGutterOnly) {
      html.style.scrollbarGutter = scrollbarGutterValue;
      elementToLock.style.overflowY = 'hidden';
      elementToLock.style.overflowX = 'hidden';
      return;
    }
    Object.assign(html.style, {
      scrollbarGutter: scrollbarGutterValue,
      overflowY: 'hidden',
      overflowX: 'hidden'
    });
    if (isScrollableY || hasConstantOverflowY) {
      html.style.overflowY = 'scroll';
    }
    if (isScrollableX || hasConstantOverflowX) {
      html.style.overflowX = 'scroll';
    }
    Object.assign(body.style, {
      position: 'relative',
      height: marginY || scrollbarHeight ? `calc(100dvh - ${marginY + scrollbarHeight}px)` : '100dvh',
      width: marginX || scrollbarWidth ? `calc(100vw - ${marginX + scrollbarWidth}px)` : '100vw',
      boxSizing: 'border-box',
      // Assign the longhands that `cleanup` restores, so nothing is left behind.
      overflowY: 'hidden',
      overflowX: 'hidden',
      scrollBehavior: 'unset'
    });
    body.scrollTop = scrollTop;
    body.scrollLeft = scrollLeft;
    html.setAttribute('data-base-ui-scroll-locked', '');
    html.style.scrollBehavior = 'unset';
  }
  function cleanup() {
    Object.assign(html.style, originalHtmlStyles);
    Object.assign(body.style, originalBodyStyles);
    if (!updateGutterOnly) {
      html.scrollTop = scrollTop;
      html.scrollLeft = scrollLeft;
      html.removeAttribute('data-base-ui-scroll-locked');
      html.style.scrollBehavior = originalHtmlScrollBehavior;
    }
  }
  function handleResize() {
    cleanup();
    resizeFrame.request(lockScroll);
  }
  lockScroll();
  const unsubscribeResize = (0,addEventListener/* .addEventListener */.q)(win, 'resize', handleResize);
  return () => {
    resizeFrame.cancel();
    cleanup();
    // Sometimes this cleanup can run after test teardown because it is called
    // in a `setTimeout(fn, 0)`. Guard the returned cleanup to avoid calling
    // `removeEventListener` when it is no longer available in tests.
    if (typeof win.removeEventListener === 'function') {
      unsubscribeResize();
    }
  };
}
class ScrollLocker {
  lockCount = 0;
  restore = null;
  timeoutLock = useTimeout/* .Timeout.create */.E.create();
  timeoutUnlock = useTimeout/* .Timeout.create */.E.create();
  acquire(referenceElement) {
    this.lockCount += 1;
    if (this.lockCount === 1 && this.restore === null) {
      this.timeoutLock.start(0, () => this.lock(referenceElement));
    }
    return this.release;
  }
  release = () => {
    this.lockCount -= 1;
    if (this.lockCount === 0 && this.restore) {
      this.timeoutUnlock.start(0, this.unlock);
    }
  };
  unlock = () => {
    if (this.lockCount === 0 && this.restore) {
      this.restore?.();
      this.restore = null;
    }
  };
  lock(referenceElement) {
    if (this.lockCount === 0 || this.restore !== null) {
      return;
    }
    const doc = (0,owner/* .ownerDocument */.R)(referenceElement);
    const html = doc.documentElement;
    const body = doc.body;
    const win = (0,floating_ui_utils_dom/* .getWindow */.zk)(html);

    // The page is already locked, either by the site author or by a non-Base UI overlay that
    // hasn't cleaned up yet. Leave it alone and wait for the lock to clear before taking over,
    // otherwise we'd snapshot the locked state and restore it after our own lock is released.
    if (isPageScrollLocked(win, html, body)) {
      const observer = new win.MutationObserver(() => {
        if (isPageScrollLocked(win, html, body)) {
          return;
        }
        observer.disconnect();
        this.restore = null;
        this.lock(referenceElement);
      });

      // Watch every attribute: locks are applied through inline styles, classes, or attributes
      // paired with a stylesheet (`data-scroll-locked` in react-remove-scroll, for example).
      const options = {
        attributes: true
      };
      observer.observe(html, options);
      observer.observe(body, options);
      this.restore = () => observer.disconnect();
      return;
    }
    const hasOverlayScrollbars = os/* .ios */.s4 || !hasInsetScrollbars(referenceElement);

    // On iOS, scroll locking does not work if the navbar is collapsed. Due to numerous
    // side effects and bugs that arise on iOS, it must be researched extensively before
    // being enabled to ensure it doesn't cause the following issues:
    // - Textboxes must scroll into view when focused, nor cause a glitchy scroll animation.
    // - The navbar must not force itself into view and cause layout shift.
    // - Scroll containers must not flicker upon closing a popup when it has an exit animation.
    this.restore = hasOverlayScrollbars ? preventScrollOverlayScrollbars(referenceElement) : preventScrollInsetScrollbars(referenceElement);
  }
}
const SCROLL_LOCKER = new ScrollLocker();

/**
 * Locks the scroll of the document when enabled.
 *
 * @param enabled - Whether to enable the scroll lock.
 * @param referenceElement - Element to use as a reference for lock calculations.
 */
function useScrollLock(enabled = true, referenceElement = null) {
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (!enabled) {
      return undefined;
    }
    return SCROLL_LOCKER.acquire(referenceElement);
  }, [enabled, referenceElement]);
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/useAnchoredPopupScrollLock.mjs
'use client';






// Touch-opened popups normally avoid scroll locking so users can still swipe outside to dismiss.
// This hook re-enables scroll lock only when the popup is effectively full-width.
// Treat popups with up to 20px of total horizontal gutter as full-width so common ~10px side
// padding still locks scroll, since that leaves too little outside space for a reliable swipe.
const VIEWPORT_WIDTH_TOLERANCE_PX = 20;

/**
 * Manages scroll lock for anchored popups. For non-touch opens, scroll lock is applied when
 * enabled. For touch opens, scroll lock is applied only when the positioner width is effectively
 * viewport-sized.
 */
function useAnchoredPopupScrollLock(enabled, touchOpen, positionerElement, referenceElement) {
  const [touchOpenShouldLockScroll, setTouchOpenShouldLockScroll] = react.useState(false);
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (!enabled || !touchOpen || positionerElement == null) {
      setTouchOpenShouldLockScroll(false);
      return;
    }
    const viewportWidth = (0,owner/* .ownerDocument */.R)(positionerElement).documentElement.clientWidth;
    const popupWidth = positionerElement.offsetWidth;
    setTouchOpenShouldLockScroll(viewportWidth > 0 && popupWidth > 0 && popupWidth >= viewportWidth - VIEWPORT_WIDTH_TOLERANCE_PX);
  }, [enabled, touchOpen, positionerElement]);
  useScrollLock(enabled && (!touchOpen || touchOpenShouldLockScroll), referenceElement);
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/combobox/positioner/ComboboxPositioner.mjs
'use client';

















/**
 * Positions the popup against the trigger.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */

const ComboboxPositioner_ComboboxPositioner = /*#__PURE__*/react.forwardRef(function ComboboxPositioner(componentProps, forwardedRef) {
  const {
    render,
    className,
    anchor,
    // `useAnchorPositioning` applies the same defaults to the undefined values; the names
    // remain destructured to exclude the props from `elementProps`.
    positionMethod,
    side,
    align,
    sideOffset,
    alignOffset,
    collisionBoundary = 'clipping-ancestors',
    collisionPadding,
    arrowPadding,
    sticky,
    disableAnchorTracking = false,
    collisionAvoidance = constants/* .DROPDOWN_COLLISION_AVOIDANCE */.uD,
    style: styleProp,
    ...elementProps
  } = componentProps;
  const store = (0,ComboboxRootContext/* .useComboboxRootContext */.Ee)();
  const floatingRootContext = (0,ComboboxRootContext/* .useComboboxFloatingContext */.ui)();
  const keepMounted = (0,ComboboxPortalContext/* .useComboboxPortalContext */.s)();
  const modal = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.modal */.T.modal);
  const open = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.open */.T.open);
  const mounted = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.mounted */.T.mounted);
  const openMethod = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.openMethod */.T.openMethod);
  const positionerElement = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.positionerElement */.T.positionerElement);
  const triggerElement = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.triggerElement */.T.triggerElement);
  const inputElement = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.inputElement */.T.inputElement);
  const inputGroupElement = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.inputGroupElement */.T.inputGroupElement);
  const inputInsidePopup = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.inputInsidePopup */.T.inputInsidePopup);
  const transitionStatus = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.transitionStatus */.T.transitionStatus);
  const empty = (0,parts/* .useListEmpty */.$B)();
  const resolvedAnchor = anchor ?? (inputInsidePopup ? triggerElement : inputGroupElement ?? inputElement);
  const positioning = useAnchorPositioning({
    anchor: resolvedAnchor,
    floatingRootContext,
    positionMethod,
    mounted,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    disableAnchorTracking,
    keepMounted,
    collisionAvoidance,
    lazyFlip: true
  });
  useAnchoredPopupScrollLock(open && modal, openMethod === 'touch', positionerElement, triggerElement);
  const state = {
    open,
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden,
    empty
  };
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    store.set('popupSide', positioning.side);
  }, [store, positioning.side]);
  const setPositionerElement = (0,useStableCallback/* .useStableCallback */.K)(element => {
    store.set('positionerElement', element);
  });
  const element = usePositioner(componentProps, state, {
    styles: positioning.positionerStyles,
    transitionStatus,
    props: elementProps,
    refs: [forwardedRef, setPositionerElement],
    hidden: !mounted,
    inert: !open
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ComboboxPositionerContext/* .ComboboxPositionerContext.Provider */.Z.Provider, {
    value: positioning,
    children: [mounted && modal && /*#__PURE__*/(0,jsx_runtime.jsx)(InternalBackdrop_InternalBackdrop, {
      inert: inertValue(!open),
      cutout: inputGroupElement ?? inputElement ?? triggerElement
    }), element]
  });
});
if (false) {}

},
68150(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _base_ui_utils_formatErrorMessage__rspack_import_1 = __webpack_require__(98103);
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
'use client';



const ComboboxPositionerContext = /*#__PURE__*/react__rspack_import_0.createContext(undefined);
if (false) {}
function useComboboxPositionerContext(optional) {
  const context = react__rspack_import_0.useContext(ComboboxPositionerContext);
  if (context === undefined && !optional) {
    throw new Error( false ? 0 : (0,_base_ui_utils_formatErrorMessage__rspack_import_1/* ["default"] */.A)(21));
  }
  return context;
}
__webpack_require__.d(__webpack_exports__, {
  O: () => (useComboboxPositionerContext)
}, {
  Z: ComboboxPositionerContext
});


},
34902(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  i: () => (/* binding */ ComboboxRoot)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
;// CONCATENATED MODULE: ./node_modules/@base-ui/utils/useControlled.mjs
'use client';

// TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes, dependency arrays are intentionally ignored
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */


function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = 'value'
}) {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = react.useRef(controlled !== undefined);
  const [valueState, setValue] = react.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (false) {}
  const setValueIfUncontrolled = react.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
function serializeToDevModeString(input) {
  let nextId = 0;
  const seen = new WeakMap();
  try {
    const result = JSON.stringify(input, function replacer(key, value) {
      if (key === '_owner' && this != null && typeof this === 'object' && '$$typeof' in this) {
        return undefined;
      }
      if (typeof value === 'bigint') {
        return `__bigint__:${value}`;
      }
      if (value !== null && typeof value === 'object') {
        const id = seen.get(value);
        if (id !== undefined) {
          return `__object__:${id}`;
        }
        seen.set(value, nextId);
        nextId += 1;
      }
      return value;
    });
    return result ?? `__top__:${typeof input}`;
  } catch {
    return '__unserializable__';
  }
}
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useIsoLayoutEffect.mjs
var utils_useIsoLayoutEffect = __webpack_require__(74732);
;// CONCATENATED MODULE: ./node_modules/@base-ui/utils/useOnFirstRender.mjs
'use client';


function useOnFirstRender(fn) {
  const ref = react.useRef(true);
  if (ref.current) {
    ref.current = false;
    fn();
  }
}
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useStableCallback.mjs
var utils_useStableCallback = __webpack_require__(77942);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useMergedRefs.mjs
var useMergedRefs = __webpack_require__(34244);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useValueAsRef.mjs
var useValueAsRef = __webpack_require__(77888);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/visuallyHidden.mjs
var visuallyHidden = __webpack_require__(30200);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useRefWithInit.mjs
var utils_useRefWithInit = __webpack_require__(24351);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/store/useStore.mjs + 1 modules
var useStore = __webpack_require__(92477);
;// CONCATENATED MODULE: ./node_modules/@base-ui/utils/store/Store.mjs

/**
 * A data store implementation that allows subscribing to state changes and updating the state.
 * It uses an observer pattern to notify subscribers when the state changes.
 */
class Store {
  /**
   * The current state of the store.
   * This property is updated immediately when the state changes as a result of calling {@link setState}, {@link update}, or {@link set}.
   * To subscribe to state changes, use the {@link useState} method. The value returned by {@link useState} is updated after the component renders (similarly to React's useState).
   * The values can be used directly (to avoid subscribing to the store) in effects or event handlers.
   *
   * Do not modify properties in state directly. Instead, use the provided methods to ensure proper state management and listener notification.
   */

  // Internal state to handle recursive `setState()` calls

  constructor(state) {
    this.state = state;
    this.listeners = new Set();
    this.updateTick = 0;
  }

  /**
   * Registers a listener that will be called whenever the store's state changes.
   *
   * @param fn The listener function to be called on state changes.
   * @returns A function to unsubscribe the listener.
   */
  subscribe = fn => {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  };

  /**
   * Returns the current state of the store.
   */
  getSnapshot = () => {
    return this.state;
  };

  /**
   * Updates the entire store's state and notifies all registered listeners.
   *
   * @param newState The new state to set for the store.
   */
  setState(newState) {
    if (this.state === newState) {
      return;
    }
    this.state = newState;
    this.updateTick += 1;
    const currentTick = this.updateTick;
    for (const listener of this.listeners) {
      if (currentTick !== this.updateTick) {
        // If the tick has changed, a recursive `setState` call has been made,
        // and it has already notified all listeners.
        return;
      }
      listener(newState);
    }
  }

  /**
   * Merges the provided changes into the current state and notifies listeners if there are changes.
   *
   * @param changes An object containing the changes to apply to the current state.
   */
  update(changes) {
    for (const key in changes) {
      if (!Object.is(this.state[key], changes[key])) {
        this.setState({
          ...this.state,
          ...changes
        });
        return;
      }
    }
  }

  /**
   * Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
   *
   * @param key The key in the store's state to update.
   * @param value The new value to set for the specified key.
   */
  set(key, value) {
    if (!Object.is(this.state[key], value)) {
      this.setState({
        ...this.state,
        [key]: value
      });
    }
  }

  /**
   * Gives the state a new reference and updates all registered listeners.
   */
  notifyAll() {
    const newState = {
      ...this.state
    };
    this.setState(newState);
  }
  use(selector, a1, a2, a3) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (0,useStore/* .useStore */.P)(this, selector, a1, a2, a3);
  }
}
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/empty.mjs
var empty = __webpack_require__(11716);
// EXTERNAL MODULE: ./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
var floating_ui_utils_dom = __webpack_require__(54951);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useId.mjs
var utils_useId = __webpack_require__(84941);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/popups/popupTriggerMap.mjs
/**
 * Development-only reverse index of element to registered id, keyed by the owning map.
 *
 * Registration would otherwise have to scan every entry to detect an element claimed by two ids,
 * making the mount of many triggers sharing one handle quadratic. Kept module-scoped, lazily
 * initialized, and read only from `process.env.NODE_ENV` guards so production builds drop it along
 * with the checks.
 */
let devElementIdsByMap;
function getDevElementIds(map) {
  devElementIdsByMap ??= new WeakMap();
  let elementIds = devElementIdsByMap.get(map);
  if (!elementIds) {
    elementIds = new WeakMap();
    devElementIdsByMap.set(map, elementIds);
  }
  return elementIds;
}

/**
 * Data structure to keep track of popup trigger elements by their IDs.
 *
 * Element lookups iterate the id map rather than maintaining a parallel Set. Registration is O(1),
 * while `hasElement` and `hasMatchingElement` are linear in the number of triggers.
 */
class PopupTriggerMap {
  constructor() {
    this.idMap = new Map();
  }

  /**
   * Adds a trigger element with the given ID.
   *
   * Note: The provided element is assumed to not be registered under multiple IDs.
   */
  add(id, element) {
    if (false) {}
    this.idMap.set(id, element);
  }

  /**
   * Removes the trigger element with the given ID.
   */
  delete(id) {
    if (false) {}
    this.idMap.delete(id);
  }

  /**
   * Whether the given element is registered as a trigger.
   */
  hasElement(element) {
    for (const registered of this.idMap.values()) {
      if (registered === element) {
        return true;
      }
    }
    return false;
  }

  /**
   * Whether there is a registered trigger element matching the given predicate.
   */
  hasMatchingElement(predicate) {
    for (const element of this.idMap.values()) {
      if (predicate(element)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Returns the trigger element associated with the given ID, or undefined if no such element exists.
   */
  getById(id) {
    return this.idMap.get(id);
  }

  /**
   * Returns an iterable of all registered trigger entries, where each entry is a tuple of [id, element].
   */
  entries() {
    return this.idMap.entries();
  }

  /**
   * Returns an iterable of all registered trigger elements.
   */
  elements() {
    return this.idMap.values();
  }

  /**
   * Returns the number of registered trigger elements.
   */
  get size() {
    return this.idMap.size;
  }
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/components/FloatingTree.mjs
var FloatingTree = __webpack_require__(50826);
;// CONCATENATED MODULE: ./node_modules/@base-ui/utils/store/ReactStore.mjs
/* False positives - ESLint thinks we're calling a hook from a class component. */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';








/**
 * A Store that supports controlled state keys, non-reactive values and provides utility methods for React.
 */
class ReactStore extends Store {
  /**
   * Creates a new ReactStore instance.
   *
   * @param state Initial state of the store.
   * @param context Non-reactive context values.
   * @param selectors Optional selectors for use with `useState`.
   */
  constructor(state, context = {}, selectors) {
    super(state);
    this.context = context;
    this.selectors = selectors;
  }

  /**
   * Non-reactive values such as refs, callbacks, etc.
   */

  /**
   * Synchronizes a single external value into the store.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValue(key, value) {
    react.useDebugValue(key);
    // eslint-disable-next-line consistent-this
    const store = this;
    (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
      if (store.state[key] !== value) {
        store.set(key, value);
      }
    }, [store, key, value]);
  }

  /**
   * Synchronizes a single external value into the store and
   * cleans it up (sets to `undefined`) on unmount.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValueWithCleanup(key, value) {
    // eslint-disable-next-line consistent-this
    const store = this;
    (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
      if (store.state[key] !== value) {
        store.set(key, value);
      }
      return () => {
        store.set(key, undefined);
      };
    }, [store, key, value]);
  }

  /**
   * Synchronizes multiple external values into the store.
   *
   * Note that the while the values in `state` are updated immediately, the values returned
   * by `useState` are updated before the next render (similarly to React's `useState`).
   */
  useSyncedValues(statePart) {
    // eslint-disable-next-line consistent-this
    const store = this;
    if (false) {}
    const dependencies = Object.values(statePart);
    (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
      store.update(statePart);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [store, ...dependencies]);
  }

  /**
   * Registers a controllable prop pair (`controlled`, `defaultValue`) for a specific key. If `controlled`
   * is non-undefined, the store's state at `key` is updated to match `controlled`.
   */
  useControlledProp(key, controlled) {
    react.useDebugValue(key);
    // eslint-disable-next-line consistent-this
    const store = this;
    const isControlled = controlled !== undefined;
    (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
      if (isControlled && !Object.is(store.state[key], controlled)) {
        // Set the internal state to match the controlled value.
        store.setState({
          ...store.state,
          [key]: controlled
        });
      }
    }, [store, key, controlled, isControlled]);
    if (false) {}
  }

  /** Gets the current value from the store using a selector with the provided key.
   *
   * @param key Key of the selector to use.
   */

  select(key, a1, a2, a3) {
    const selector = this.selectors[key];
    return selector(this.state, a1, a2, a3);
  }

  /**
   * Returns a value from the store's state using a selector function.
   * Used to subscribe to specific parts of the state.
   * This methods causes a rerender whenever the selected state changes.
   *
   * @param key Key of the selector to use.
   */

  useState(key, a1, a2, a3) {
    react.useDebugValue(key);
    return (0,useStore/* .useStore */.P)(this, this.selectors[key], a1, a2, a3);
  }

  /**
   * Wraps a function with `useStableCallback` to ensure it has a stable reference
   * and assigns it to the context.
   *
   * @param key Key of the event callback. Must be a function in the context.
   * @param fn Function to assign.
   */
  useContextCallback(key, fn) {
    react.useDebugValue(key);
    const stableFunction = (0,utils_useStableCallback/* .useStableCallback */.K)(fn ?? empty/* .NOOP */.tE);
    this.context[key] = stableFunction;
  }

  /**
   * Returns a stable setter function for a specific key in the store's state.
   * It's commonly used to pass as a ref callback to React elements.
   *
   * @param key Key of the state to set.
   */
  useStateSetter(key) {
    const ref = react.useRef(undefined);
    if (ref.current === undefined) {
      ref.current = value => {
        this.set(key, value);
      };
    }
    return ref.current;
  }

  /**
   * Observes changes derived from the store's selectors and calls the listener when the selected value changes.
   *
   * @param key Key of the selector to observe.
   * @param listener Listener function called when the selector result changes.
   */

  observe(selector, listener) {
    let selectFn;
    if (typeof selector === 'function') {
      selectFn = selector;
    } else {
      selectFn = this.selectors[selector];
    }
    let prevValue = selectFn(this.state);
    listener(prevValue, prevValue, this);
    return this.subscribe(nextState => {
      const nextValue = selectFn(nextState);
      if (!Object.is(prevValue, nextValue)) {
        const oldValue = prevValue;
        prevValue = nextValue;
        listener(nextValue, oldValue, this);
      }
    });
  }
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/createEventEmitter.mjs
function createEventEmitter() {
  const map = new Map();
  return {
    emit(event, data) {
      map.get(event)?.forEach(listener => listener(data));
    },
    on(event, listener) {
      if (!map.has(event)) {
        map.set(event, new Set());
      }
      map.get(event).add(listener);
    },
    off(event, listener) {
      map.get(event)?.delete(listener);
    }
  };
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/event.mjs
var utils_event = __webpack_require__(61489);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/floating-ui-react/components/FloatingRootStore.mjs



const FloatingRootStore_selectors = {
  open: state => state.open,
  transitionStatus: state => state.transitionStatus,
  domReferenceElement: state => state.domReferenceElement,
  referenceElement: state => state.positionReference ?? state.referenceElement,
  floatingElement: state => state.floatingElement,
  floatingId: state => state.floatingId
};
class FloatingRootStore extends ReactStore {
  constructor(options) {
    const {
      syncOnly,
      nested,
      onOpenChange,
      triggerElements,
      ...initialState
    } = options;
    super({
      ...initialState,
      positionReference: initialState.referenceElement,
      domReferenceElement: initialState.referenceElement
    }, {
      onOpenChange,
      dataRef: {
        current: {}
      },
      events: createEventEmitter(),
      nested,
      triggerElements
    }, FloatingRootStore_selectors);
    this.syncOnly = syncOnly;
  }

  /**
   * Syncs the event used by hover logic to distinguish hover-open from click-like interaction.
   */
  syncOpenEvent = (newOpen, event) => {
    if (!newOpen || !this.state.open ||
    // Prevent a pending hover-open from overwriting a click-open event, while allowing
    // click events to upgrade a hover-open.
    event != null && (0,utils_event/* .isClickLikeEvent */.Ev)(event)) {
      this.context.dataRef.current.openEvent = newOpen ? event : undefined;
    }
  };

  /**
   * Runs the root-owned side effects for an open state change.
   */
  dispatchOpenChange = (newOpen, eventDetails) => {
    this.syncOpenEvent(newOpen, eventDetails.event);
    const details = {
      open: newOpen,
      reason: eventDetails.reason,
      nativeEvent: eventDetails.event,
      nested: this.context.nested,
      triggerElement: eventDetails.trigger
    };
    this.context.events.emit('openchange', details);
  };

  /**
   * Emits the `openchange` event through the internal event emitter and calls the `onOpenChange` handler with the provided arguments.
   *
   * @param newOpen The new open state.
   * @param eventDetails Details about the event that triggered the open state change.
   */
  setOpen = (newOpen, eventDetails) => {
    if (this.syncOnly) {
      this.context.onOpenChange?.(newOpen, eventDetails);
      return;
    }
    this.dispatchOpenChange(newOpen, eventDetails);
    this.context.onOpenChange?.(newOpen, eventDetails);
  };
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/floating-ui-react/hooks/useFloatingRootContext.mjs
'use client';








function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange,
    elements = {}
  } = options;
  const floatingId = (0,utils_useId/* .useId */.B)();
  const nested = (0,FloatingTree/* .useFloatingParentNodeId */.R1)() != null;
  if (false) {}
  const store = (0,utils_useRefWithInit/* .useRefWithInit */.j)(() => new FloatingRootStore({
    open,
    transitionStatus: undefined,
    onOpenChange,
    referenceElement: elements.reference ?? null,
    floatingElement: elements.floating ?? null,
    triggerElements: new PopupTriggerMap(),
    floatingId,
    syncOnly: false,
    nested
  })).current;
  (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    const valuesToSync = {
      open,
      floatingId
    };

    // Only sync elements that are defined to avoid overwriting existing ones
    if (elements.reference !== undefined) {
      valuesToSync.referenceElement = elements.reference;
      valuesToSync.domReferenceElement = (0,floating_ui_utils_dom/* .isElement */.vq)(elements.reference) ? elements.reference : null;
    }
    if (elements.floating !== undefined) {
      valuesToSync.floatingElement = elements.floating;
    }
    store.update(valuesToSync);
  }, [open, floatingId, elements.reference, elements.floating, store]);
  store.context.onOpenChange = onOpenChange;
  store.context.nested = nested;
  return store;
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/hooks/useClick.mjs
var useClick = __webpack_require__(36265);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/addEventListener.mjs
var addEventListener = __webpack_require__(89362);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/mergeCleanups.mjs
var mergeCleanups = __webpack_require__(17964);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/owner.mjs
var owner = __webpack_require__(61402);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useTimeout.mjs
var useTimeout = __webpack_require__(37227);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/platform/engine.mjs
var engine = __webpack_require__(6509);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
var createBaseUIEventDetails = __webpack_require__(93201);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/reason-parts.mjs
var reason_parts = __webpack_require__(5355);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/createAttribute.mjs
var createAttribute = __webpack_require__(3825);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/element.mjs
var utils_element = __webpack_require__(97965);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/shadowDom.mjs
var shadowDom = __webpack_require__(55638);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/nodes.mjs
var utils_nodes = __webpack_require__(98642);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/floating-ui-react/hooks/useDismiss.mjs
'use client';

/* eslint-disable no-underscore-dangle */















function alwaysFalse() {
  return false;
}
function normalizeProp(normalizable) {
  return {
    escapeKey: typeof normalizable === 'boolean' ? normalizable : normalizable?.escapeKey ?? false,
    outsidePress: typeof normalizable === 'boolean' ? normalizable : normalizable?.outsidePress ?? true
  };
}
/**
 * Closes the floating element when a dismissal is requested — by default, when
 * the user presses the `escape` key or outside of the floating element.
 * @see https://floating-ui.com/docs/useDismiss
 */
function useDismiss(context, props = {}) {
  const {
    enabled = true,
    escapeKey = true,
    outsidePress: outsidePressProp = true,
    outsidePressEvent = 'sloppy',
    referencePress = alwaysFalse,
    bubbles,
    externalTree
  } = props;
  const store = 'rootStore' in context ? context.rootStore : context;
  const open = store.useState('open');
  const floatingElement = store.useState('floatingElement');
  const {
    dataRef
  } = store.context;
  const tree = (0,FloatingTree/* .useFloatingTree */.cq)(externalTree);
  const outsidePressFn = (0,utils_useStableCallback/* .useStableCallback */.K)(typeof outsidePressProp === 'function' ? outsidePressProp : () => false);
  const outsidePress = typeof outsidePressProp === 'function' ? outsidePressFn : outsidePressProp;
  const outsidePressEnabled = outsidePress !== false;
  const getOutsidePressEventProp = (0,utils_useStableCallback/* .useStableCallback */.K)(() => outsidePressEvent);
  const {
    escapeKey: escapeKeyBubbles,
    outsidePress: outsidePressBubbles
  } = normalizeProp(bubbles);
  const pressStartedInsideRef = react.useRef(false);
  const pressStartPreventedRef = react.useRef(false);
  // Ignore only the very next outside click after dragging from inside to outside.
  const suppressNextOutsideClickRef = react.useRef(false);
  const isComposingRef = react.useRef(false);
  const currentPointerTypeRef = react.useRef('');
  const touchStateRef = react.useRef(null);
  const cancelDismissOnEndTimeout = (0,useTimeout/* .useTimeout */.Z)();
  const clearInsideReactTreeTimeout = (0,useTimeout/* .useTimeout */.Z)();
  const clearInsideReactTree = (0,utils_useStableCallback/* .useStableCallback */.K)(() => {
    clearInsideReactTreeTimeout.clear();
    dataRef.current.insideReactTree = false;
  });
  const hasBlockingChild = (0,utils_useStableCallback/* .useStableCallback */.K)(bubbleKey => {
    const nodeId = dataRef.current.floatingContext?.nodeId;
    const children = tree ? (0,utils_nodes/* .getNodeChildren */.CM)(tree.nodesRef.current, nodeId) : [];
    return children.some(child => child.context?.open && !child.context.dataRef.current[bubbleKey]);
  });
  const isEventWithinOwnElements = (0,utils_useStableCallback/* .useStableCallback */.K)(event => {
    return (0,utils_element/* .isEventTargetWithin */.F2)(event, store.select('floatingElement')) || (0,utils_element/* .isEventTargetWithin */.F2)(event, store.select('domReferenceElement'));
  });
  const closeOnReferencePress = (0,utils_useStableCallback/* .useStableCallback */.K)(event => {
    if (!referencePress()) {
      return;
    }
    store.setOpen(false, (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .triggerPress */.Ui, event.nativeEvent));
  });
  const closeOnEscapeKeyDown = (0,utils_useStableCallback/* .useStableCallback */.K)(event => {
    if (!open || !enabled || !escapeKey || event.key !== 'Escape') {
      return;
    }

    // Wait until IME is settled. Pressing `Escape` while composing should
    // close the compose menu, but not the floating element.
    if (isComposingRef.current) {
      return;
    }
    if (!escapeKeyBubbles && hasBlockingChild('__escapeKeyBubbles')) {
      return;
    }
    const native = (0,utils_event/* .isReactEvent */.O_)(event) ? event.nativeEvent : event;
    const eventDetails = (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .escapeKey */.jv, native);
    store.setOpen(false, eventDetails);
    if (!eventDetails.isCanceled) {
      event.preventDefault();
    }
    if (!escapeKeyBubbles && !eventDetails.isPropagationAllowed) {
      event.stopPropagation();
    }
  });
  const markInsideReactTree = (0,utils_useStableCallback/* .useStableCallback */.K)(() => {
    dataRef.current.insideReactTree = true;
    clearInsideReactTreeTimeout.start(0, clearInsideReactTree);
  });
  const markPressStartedInsideReactTree = (0,utils_useStableCallback/* .useStableCallback */.K)(event => {
    if (!open || !enabled || event.button !== 0) {
      return;
    }
    const target = (0,shadowDom/* .getTarget */.EW)(event.nativeEvent);

    // Only treat presses that start within the floating DOM subtree as inside.
    // This avoids suppressing parent dismissal when interacting with nested portals.
    if (!(0,shadowDom/* .contains */.gR)(store.select('floatingElement'), target)) {
      return;
    }
    if (!pressStartedInsideRef.current) {
      pressStartedInsideRef.current = true;
      pressStartPreventedRef.current = false;
    }
  });
  const markInsidePressStartPrevented = (0,utils_useStableCallback/* .useStableCallback */.K)(event => {
    if (!open || !enabled) {
      return;
    }
    if (!(event.defaultPrevented || event.nativeEvent.defaultPrevented)) {
      return;
    }
    if (pressStartedInsideRef.current) {
      pressStartPreventedRef.current = true;
    }
  });
  react.useEffect(() => {
    if (!open || !enabled) {
      return clearInsideReactTree;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    const compositionTimeout = new useTimeout/* .Timeout */.E();
    const preventedPressSuppressionTimeout = new useTimeout/* .Timeout */.E();
    function handleCompositionStart() {
      compositionTimeout.clear();
      isComposingRef.current = true;
    }
    function handleCompositionEnd() {
      // Safari fires `compositionend` before `keydown`, so we need to wait
      // until the next tick to set `isComposing` to `false`.
      // https://bugs.webkit.org/show_bug.cgi?id=165004
      compositionTimeout.start(
      // 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
      // Only apply to WebKit for the test to remain 0ms.
      engine/* .webkit */.Fp ? 5 : 0, () => {
        isComposingRef.current = false;
      });
    }
    function suppressImmediateOutsideClickAfterPreventedStart() {
      suppressNextOutsideClickRef.current = true;
      // Firefox can emit the synthetic outside click in a later task after
      // pointer lock exit, so microtask clearing is too early here.
      preventedPressSuppressionTimeout.start(0, () => {
        suppressNextOutsideClickRef.current = false;
      });
    }
    function resetPressStartState() {
      pressStartedInsideRef.current = false;
      pressStartPreventedRef.current = false;
    }
    function getOutsidePressEvent() {
      const type = currentPointerTypeRef.current;
      const computedType = type === 'pen' || !type ? 'mouse' : type;
      const outsidePressEventValue = getOutsidePressEventProp();
      const resolved = typeof outsidePressEventValue === 'function' ? outsidePressEventValue() : outsidePressEventValue;
      if (typeof resolved === 'string') {
        return resolved;
      }
      return resolved[computedType];
    }
    function shouldIgnoreEvent(event) {
      const computedOutsidePressEvent = getOutsidePressEvent();
      return computedOutsidePressEvent === 'intentional' && event.type !== 'click' || computedOutsidePressEvent === 'sloppy' && event.type === 'click';
    }
    function isEventWithinFloatingTree(event) {
      const nodeId = dataRef.current.floatingContext?.nodeId;
      const targetIsInsideChildren = tree && (0,utils_nodes/* .getNodeChildren */.CM)(tree.nodesRef.current, nodeId).some(node => (0,utils_element/* .isEventTargetWithin */.F2)(event, node.context?.elements.floating));
      return isEventWithinOwnElements(event) || targetIsInsideChildren;
    }
    function closeOnPressOutside(event) {
      if (shouldIgnoreEvent(event)) {
        // A new press began outside the floating element and its trigger. Clear any
        // leftover drag-out suppression so this press's eventual click can dismiss.
        if (event.type !== 'click' && !isEventWithinOwnElements(event)) {
          preventedPressSuppressionTimeout.clear();
          suppressNextOutsideClickRef.current = false;
        }
        clearInsideReactTree();
        return;
      }
      if (dataRef.current.insideReactTree) {
        clearInsideReactTree();
        return;
      }
      const target = (0,shadowDom/* .getTarget */.EW)(event);
      const inertSelector = `[${(0,createAttribute/* .createAttribute */.F)('inert')}]`;
      const targetRoot = (0,floating_ui_utils_dom/* .isElement */.vq)(target) ? target.getRootNode() : null;
      const markers = Array.from(((0,floating_ui_utils_dom/* .isShadowRoot */.Ng)(targetRoot) ? targetRoot : (0,owner/* .ownerDocument */.R)(store.select('floatingElement'))).querySelectorAll(inertSelector));
      const triggers = store.context.triggerElements;

      // If another trigger is clicked, don't close the floating element.
      if (target && (triggers.hasElement(target) || triggers.hasMatchingElement(trigger => (0,shadowDom/* .contains */.gR)(trigger, target)))) {
        return;
      }
      let targetRootAncestor = (0,floating_ui_utils_dom/* .isElement */.vq)(target) ? target : null;
      while (targetRootAncestor && !(0,floating_ui_utils_dom/* .isLastTraversableNode */.eu)(targetRootAncestor)) {
        const nextParent = (0,floating_ui_utils_dom/* .getParentNode */.$4)(targetRootAncestor);
        if ((0,floating_ui_utils_dom/* .isLastTraversableNode */.eu)(nextParent) || !(0,floating_ui_utils_dom/* .isElement */.vq)(nextParent)) {
          break;
        }
        targetRootAncestor = nextParent;
      }

      // Check if the click occurred on a third-party element injected after the
      // floating element rendered.
      if (markers.length && (0,floating_ui_utils_dom/* .isElement */.vq)(target) && !(0,utils_element/* .isRootElement */.tZ)(target) &&
      // Clicked on a direct ancestor (e.g. FloatingOverlay).
      !(0,shadowDom/* .contains */.gR)(target, store.select('floatingElement')) &&
      // If the target root element contains none of the markers, then the
      // element was injected after the floating element rendered.
      markers.every(marker => !(0,shadowDom/* .contains */.gR)(targetRootAncestor, marker))) {
        return;
      }

      // Check if the click occurred on the scrollbar
      // Skip for touch events: scrollbars don't receive touch events on most platforms
      if ((0,floating_ui_utils_dom/* .isHTMLElement */.sb)(target) && !('touches' in event)) {
        const lastTraversableNode = (0,floating_ui_utils_dom/* .isLastTraversableNode */.eu)(target);
        const style = (0,floating_ui_utils_dom/* .getComputedStyle */.L9)(target);
        const scrollRe = /auto|scroll/;
        const isScrollableX = lastTraversableNode || scrollRe.test(style.overflowX);
        const isScrollableY = lastTraversableNode || scrollRe.test(style.overflowY);
        const canScrollX = isScrollableX && target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
        const canScrollY = isScrollableY && target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
        const isRTL = style.direction === 'rtl';

        // Check click position relative to scrollbar.
        // In some browsers it is possible to change the <body> (or window)
        // scrollbar to the left side, but is very rare and is difficult to
        // check for. Plus, for modal dialogs with backdrops, it is more
        // important that the backdrop is checked but not so much the window.
        const pressedVerticalScrollbar = canScrollY && (isRTL ? event.offsetX <= target.offsetWidth - target.clientWidth : event.offsetX > target.clientWidth);
        const pressedHorizontalScrollbar = canScrollX && event.offsetY > target.clientHeight;
        if (pressedVerticalScrollbar || pressedHorizontalScrollbar) {
          return;
        }
      }
      if (isEventWithinFloatingTree(event)) {
        return;
      }

      // In intentional mode, a press that starts inside and ends outside gets
      // one suppressed outside click. Run this after inside-target checks so
      // inside clicks don't consume the one-shot suppression.
      if (getOutsidePressEvent() === 'intentional' && suppressNextOutsideClickRef.current) {
        preventedPressSuppressionTimeout.clear();
        suppressNextOutsideClickRef.current = false;
        return;
      }
      if (typeof outsidePress === 'function' && !outsidePress(event)) {
        return;
      }
      if (hasBlockingChild('__outsidePressBubbles')) {
        return;
      }
      store.setOpen(false, (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .outsidePress */.Np, event));
      clearInsideReactTree();
    }
    function handlePointerDown(event) {
      if (getOutsidePressEvent() !== 'sloppy' || event.pointerType === 'touch' || !store.select('open') || !enabled || isEventWithinOwnElements(event)) {
        return;
      }
      closeOnPressOutside(event);
    }
    function handleTouchStart(event) {
      if (getOutsidePressEvent() !== 'sloppy' || !store.select('open') || !enabled || isEventWithinOwnElements(event)) {
        return;
      }
      const touch = event.touches[0];
      if (touch) {
        touchStateRef.current = {
          startTime: Date.now(),
          startX: touch.clientX,
          startY: touch.clientY,
          dismissOnTouchEnd: false,
          dismissOnMouseDown: true
        };
        cancelDismissOnEndTimeout.start(1000, () => {
          if (touchStateRef.current) {
            touchStateRef.current.dismissOnTouchEnd = false;
            touchStateRef.current.dismissOnMouseDown = false;
          }
        });
      }
    }
    function addTargetEventListenerOnce(event, listener) {
      const target = (0,shadowDom/* .getTarget */.EW)(event);
      if (!target) {
        return;
      }
      const unsubscribe = (0,addEventListener/* .addEventListener */.q)(target, event.type, () => {
        listener(event);
        unsubscribe();
      });
    }
    function handleTouchStartCapture(event) {
      currentPointerTypeRef.current = 'touch';
      addTargetEventListenerOnce(event, handleTouchStart);
    }
    function closeOnPressOutsideCapture(event) {
      cancelDismissOnEndTimeout.clear();
      if (event.type === 'pointerdown') {
        currentPointerTypeRef.current = event.pointerType;
      }
      if (event.type === 'mousedown' && touchStateRef.current && !touchStateRef.current.dismissOnMouseDown) {
        return;
      }
      addTargetEventListenerOnce(event, targetEvent => {
        if (targetEvent.type === 'pointerdown') {
          handlePointerDown(targetEvent);
        } else {
          closeOnPressOutside(targetEvent);
        }
      });
    }
    function handlePressEndCapture(event) {
      if (!pressStartedInsideRef.current) {
        return;
      }
      const pressStartedInsideDefaultPrevented = pressStartPreventedRef.current;
      resetPressStartState();
      if (getOutsidePressEvent() !== 'intentional') {
        return;
      }
      if (event.type === 'pointercancel') {
        if (pressStartedInsideDefaultPrevented) {
          suppressImmediateOutsideClickAfterPreventedStart();
        }
        return;
      }
      if (isEventWithinFloatingTree(event)) {
        return;
      }

      // If pointerdown was prevented, no click may be generated for that
      // interaction. However, Firefox may still emit an immediate click after
      // pointerup (e.g. NumberField scrub with pointer lock), so suppress for
      // one tick to absorb that synthetic click only.
      if (pressStartedInsideDefaultPrevented) {
        suppressImmediateOutsideClickAfterPreventedStart();
        return;
      }

      // Avoid suppressing when outsidePress explicitly ignores this target.
      if (typeof outsidePress === 'function' && !outsidePress(event)) {
        return;
      }
      preventedPressSuppressionTimeout.clear();
      suppressNextOutsideClickRef.current = true;
      clearInsideReactTree();
    }
    function handleTouchMove(event) {
      if (getOutsidePressEvent() !== 'sloppy' || !touchStateRef.current || isEventWithinOwnElements(event)) {
        return;
      }
      const touch = event.touches[0];
      if (!touch) {
        return;
      }
      const deltaX = Math.abs(touch.clientX - touchStateRef.current.startX);
      const deltaY = Math.abs(touch.clientY - touchStateRef.current.startY);
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (distance > 5) {
        touchStateRef.current.dismissOnTouchEnd = true;
      }
      if (distance > 10) {
        closeOnPressOutside(event);
        cancelDismissOnEndTimeout.clear();
        touchStateRef.current = null;
      }
    }
    function handleTouchMoveCapture(event) {
      addTargetEventListenerOnce(event, handleTouchMove);
    }
    function handleTouchEnd(event) {
      if (getOutsidePressEvent() !== 'sloppy' || !touchStateRef.current || isEventWithinOwnElements(event)) {
        return;
      }
      if (touchStateRef.current.dismissOnTouchEnd) {
        closeOnPressOutside(event);
      }
      cancelDismissOnEndTimeout.clear();
      touchStateRef.current = null;
    }
    function handleTouchEndCapture(event) {
      addTargetEventListenerOnce(event, handleTouchEnd);
    }
    const doc = (0,owner/* .ownerDocument */.R)(floatingElement);
    const unsubscribe = (0,mergeCleanups/* .mergeCleanups */.g)(escapeKey && (0,mergeCleanups/* .mergeCleanups */.g)((0,addEventListener/* .addEventListener */.q)(doc, 'keydown', closeOnEscapeKeyDown), (0,addEventListener/* .addEventListener */.q)(doc, 'compositionstart', handleCompositionStart), (0,addEventListener/* .addEventListener */.q)(doc, 'compositionend', handleCompositionEnd)), outsidePressEnabled && (0,mergeCleanups/* .mergeCleanups */.g)((0,addEventListener/* .addEventListener */.q)(doc, 'click', closeOnPressOutsideCapture, true), (0,addEventListener/* .addEventListener */.q)(doc, 'pointerdown', closeOnPressOutsideCapture, true), (0,addEventListener/* .addEventListener */.q)(doc, 'pointerup', handlePressEndCapture, true), (0,addEventListener/* .addEventListener */.q)(doc, 'pointercancel', handlePressEndCapture, true), (0,addEventListener/* .addEventListener */.q)(doc, 'mousedown', closeOnPressOutsideCapture, true), (0,addEventListener/* .addEventListener */.q)(doc, 'mouseup', handlePressEndCapture, true), (0,addEventListener/* .addEventListener */.q)(doc, 'touchstart', handleTouchStartCapture, true), (0,addEventListener/* .addEventListener */.q)(doc, 'touchmove', handleTouchMoveCapture, true), (0,addEventListener/* .addEventListener */.q)(doc, 'touchend', handleTouchEndCapture, true)));
    return () => {
      unsubscribe();
      compositionTimeout.clear();
      preventedPressSuppressionTimeout.clear();
      resetPressStartState();
      suppressNextOutsideClickRef.current = false;
      clearInsideReactTree();
    };
  }, [dataRef, floatingElement, escapeKey, outsidePressEnabled, outsidePress, open, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, clearInsideReactTree, getOutsidePressEventProp, hasBlockingChild, isEventWithinOwnElements, tree, store, cancelDismissOnEndTimeout]);
  const reference = react.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    onPointerDown: closeOnReferencePress,
    onClick: closeOnReferencePress
  }), [closeOnEscapeKeyDown, closeOnReferencePress]);
  const floating = react.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    // `onMouseDown` may be blocked if `event.preventDefault()` is called in
    // `onPointerDown`, such as with <NumberField.ScrubArea>.
    // See https://github.com/mui/base-ui/pull/3379
    onPointerDown: markInsidePressStartPrevented,
    onMouseDown: markInsidePressStartPrevented,
    onClickCapture: markInsideReactTree,
    onMouseDownCapture(event) {
      markInsideReactTree();
      markPressStartedInsideReactTree(event);
    },
    onPointerDownCapture(event) {
      markInsideReactTree();
      markPressStartedInsideReactTree(event);
    },
    onMouseUpCapture: markInsideReactTree,
    onTouchEndCapture: markInsideReactTree,
    onTouchMoveCapture: markInsideReactTree
  }), [closeOnEscapeKeyDown, markInsideReactTree, markPressStartedInsideReactTree, markInsidePressStartPrevented]);
  return react.useMemo(() => enabled ? {
    reference,
    floating,
    trigger: reference
  } : {}, [enabled, reference, floating]);
}
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useAnimationFrame.mjs
var useAnimationFrame = __webpack_require__(72055);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/composite.mjs
var composite = __webpack_require__(14280);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/constants.mjs
var constants = __webpack_require__(12526);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/enqueueFocus.mjs
var enqueueFocus = __webpack_require__(93597);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/floating-ui-react/hooks/useListNavigation.mjs
'use client';

















const ESCAPE = 'Escape';

// WebKit fires zero-delta `mousemove`/`pointermove` events when the list scrolls
// beneath a stationary pointer, moving the highlight during keyboard navigation.
// https://github.com/mui/base-ui/issues/4002
function isStationaryWebKitPointer(event) {
  return engine/* .webkit */.Fp && event.movementX === 0 && event.movementY === 0;
}
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case 'vertical':
      return vertical;
    case 'horizontal':
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
function isMainOrientationKey(key, orientation) {
  const vertical = key === constants/* .ARROW_UP */.il || key === constants/* .ARROW_DOWN */.Jd;
  const horizontal = key === constants/* .ARROW_LEFT */.eR || key === constants/* .ARROW_RIGHT */.RJ;
  return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === constants/* .ARROW_DOWN */.Jd;
  const horizontal = rtl ? key === constants/* .ARROW_LEFT */.eR : key === constants/* .ARROW_RIGHT */.RJ;
  return doSwitch(orientation, vertical, horizontal) || key === 'Enter' || key === ' ' || key === '';
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === constants/* .ARROW_LEFT */.eR : key === constants/* .ARROW_RIGHT */.RJ;
  const horizontal = key === constants/* .ARROW_DOWN */.Jd;
  return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl, grid) {
  const vertical = rtl ? key === constants/* .ARROW_RIGHT */.RJ : key === constants/* .ARROW_LEFT */.eR;
  const horizontal = key === constants/* .ARROW_UP */.il;
  if (orientation === 'both' || orientation === 'horizontal' && grid) {
    return key === ESCAPE;
  }
  return doSwitch(orientation, vertical, horizontal);
}
/**
 * Adds arrow key-based navigation of a list of items, either using real DOM
 * focus or virtual focus.
 * @see https://floating-ui.com/docs/useListNavigation
 */
function useListNavigation(context, props) {
  const {
    listRef,
    activeIndex,
    onNavigate: onNavigateProp = () => {},
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loopFocus = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = 'auto',
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = undefined,
    orientation = 'vertical',
    parentOrientation,
    id,
    resetOnPointerLeave = true,
    externalTree,
    grid: navigateGrid
  } = props;
  const isGrid = navigateGrid != null;
  if (false) {}
  const store = 'rootStore' in context ? context.rootStore : context;
  const open = store.useState('open');
  const floatingElement = store.useState('floatingElement');
  const domReferenceElement = store.useState('domReferenceElement');
  const dataRef = store.context.dataRef;
  const floatingFocusElement = (0,utils_element/* .getFloatingFocusElement */.nd)(floatingElement);
  const typeableComboboxReference = (0,utils_element/* .isTypeableCombobox */.WZ)(domReferenceElement);
  const floatingFocusElementRef = (0,useValueAsRef/* .useValueAsRef */.u)(floatingFocusElement);
  const parentId = (0,FloatingTree/* .useFloatingParentNodeId */.R1)();
  const tree = (0,FloatingTree/* .useFloatingTree */.cq)(externalTree);
  const focusItemOnOpenRef = react.useRef(focusItemOnOpen);
  const indexRef = react.useRef(selectedIndex ?? -1);
  const keyRef = react.useRef(null);
  const isPointerModalityRef = react.useRef(true);
  const onNavigate = (0,utils_useStableCallback/* .useStableCallback */.K)(event => {
    onNavigateProp(indexRef.current === -1 ? null : indexRef.current, event);
  });
  const previousMountedRef = react.useRef(!!floatingElement);
  const previousOpenRef = react.useRef(open);
  const forceSyncFocusRef = react.useRef(false);
  const forceScrollIntoViewRef = react.useRef(false);
  const cancelQueuedFocusRef = react.useRef(null);
  const disabledIndicesRef = (0,useValueAsRef/* .useValueAsRef */.u)(disabledIndices);
  const latestOpenRef = (0,useValueAsRef/* .useValueAsRef */.u)(open);
  const selectedIndexRef = (0,useValueAsRef/* .useValueAsRef */.u)(selectedIndex);
  const resetOnPointerLeaveRef = (0,useValueAsRef/* .useValueAsRef */.u)(resetOnPointerLeave);
  const focusFrame = (0,useAnimationFrame/* .useAnimationFrame */.NR)();
  const waitForListPopulatedFrame = (0,useAnimationFrame/* .useAnimationFrame */.NR)();
  const focusItem = (0,utils_useStableCallback/* .useStableCallback */.K)(() => {
    function runFocus(item) {
      if (virtual) {
        tree?.events.emit('virtualfocus', item);
      } else {
        cancelQueuedFocusRef.current = (0,enqueueFocus/* .enqueueFocus */.p)(item, {
          sync: forceSyncFocusRef.current,
          preventScroll: true
        });
      }
    }
    const initialItem = listRef.current[indexRef.current];
    const forceScrollIntoView = forceScrollIntoViewRef.current;
    if (initialItem) {
      runFocus(initialItem);
    }
    const scheduler = forceSyncFocusRef.current ? callback => callback() : callback => focusFrame.request(callback);
    scheduler(() => {
      const waitedItem = listRef.current[indexRef.current] || initialItem;
      if (!waitedItem) {
        return;
      }
      if (!initialItem) {
        runFocus(waitedItem);
      }
      const shouldScrollIntoView =
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      item && (forceScrollIntoView || !isPointerModalityRef.current);
      if (shouldScrollIntoView) {
        // JSDOM doesn't support `.scrollIntoView()` but it's widely supported
        // by all browsers.
        waitedItem.scrollIntoView?.({
          block: 'nearest',
          inline: 'nearest'
        });
      }
    });
  });
  (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    dataRef.current.orientation = orientation;
  }, [dataRef, orientation]);

  // Sync `selectedIndex` to be the `activeIndex` upon opening the floating
  // element. Also, reset `activeIndex` upon closing the floating element.
  (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (!enabled) {
      return;
    }
    if (open && floatingElement) {
      indexRef.current = selectedIndex ?? -1;
      if (focusItemOnOpenRef.current && selectedIndex != null) {
        // Regardless of the pointer modality, we want to ensure the selected
        // item comes into view when the floating element is opened.
        forceScrollIntoViewRef.current = true;
        onNavigate();
      }
    } else if (previousMountedRef.current) {
      // Reset the active index when the list is no longer open and mounted (closing or
      // unmounting). `onNavigate` is a stable callback that always forwards to the latest
      // `onNavigate` prop.
      indexRef.current = -1;
      onNavigate();
    }
  }, [enabled, open, floatingElement, selectedIndex, onNavigate]);

  // Sync `activeIndex` to be the focused item while the floating element is
  // open.
  (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (!enabled) {
      return;
    }
    if (!open) {
      forceSyncFocusRef.current = false;
      return;
    }
    if (!floatingElement) {
      return;
    }
    if (activeIndex == null) {
      forceSyncFocusRef.current = false;
      if (selectedIndexRef.current != null) {
        return;
      }

      // Reset while the floating element was open (e.g. the list changed).
      if (previousMountedRef.current) {
        indexRef.current = -1;
        focusItem();
      }

      // Initial sync.
      if ((!previousOpenRef.current || !previousMountedRef.current) && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
        let runs = 0;
        const waitForListPopulated = () => {
          if (listRef.current[0] == null) {
            // Avoid letting the browser paint if possible on the first try,
            // otherwise use rAF. Don't try more than twice, since something
            // is wrong otherwise.
            if (runs < 2) {
              const scheduler = runs ? callback => waitForListPopulatedFrame.request(callback) : queueMicrotask;
              scheduler(waitForListPopulated);
            }
            runs += 1;
          } else {
            // Initially focus the first non-disabled item. `disabledIndices` is deliberately
            // omitted here so attribute-disabled items (`disabled`/`aria-disabled`) are skipped
            // on open even when the consumer passes an empty `disabledIndices` array. Passing it
            // would regress that behavior (see mui/base-ui#2604).
            indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? (0,composite/* .getMinListIndex */.Zb)(listRef) : (0,composite/* .getMaxListIndex */.vB)(listRef);
            keyRef.current = null;
            onNavigate();
          }
        };
        waitForListPopulated();
      }
    } else if (!(0,composite/* .isIndexOutOfListBounds */.du)(listRef.current, activeIndex)) {
      indexRef.current = activeIndex;
      focusItem();
      forceScrollIntoViewRef.current = false;
    }
  }, [enabled, open, floatingElement, activeIndex, selectedIndexRef, nested, listRef, orientation, rtl, onNavigate, focusItem, waitForListPopulatedFrame]);

  // Ensure the parent floating element has focus when a nested child closes
  // to allow arrow key navigation to work after the pointer leaves the child.
  (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (!enabled || floatingElement || !tree || virtual || !previousMountedRef.current) {
      return;
    }
    const nodes = tree.nodesRef.current;
    const parent = nodes.find(node => node.id === parentId)?.context?.elements.floating;
    // `floatingElement` is null here (see the guard above), so resolve the owner document from an
    // in-DOM element for realm-safety (shadow DOM/iframes): the reference element, falling back to
    // the parent floating element when the reference is virtual (`domReferenceElement` is null).
    const activeEl = (0,shadowDom/* .activeElement */.RS)((0,owner/* .ownerDocument */.R)(domReferenceElement ?? parent ?? null));
    const treeContainsActiveEl = nodes.some(node => node.context && (0,shadowDom/* .contains */.gR)(node.context.elements.floating, activeEl));
    if (parent && !treeContainsActiveEl && isPointerModalityRef.current) {
      parent.focus({
        preventScroll: true
      });
    }
  }, [enabled, floatingElement, domReferenceElement, tree, parentId, virtual]);
  (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    previousOpenRef.current = open;
    previousMountedRef.current = !!floatingElement;
  });
  (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (!open) {
      keyRef.current = null;
      focusItemOnOpenRef.current = focusItemOnOpen;
    }
  }, [open, focusItemOnOpen]);
  const hasActiveIndex = activeIndex != null;
  const syncCurrentTarget = (0,utils_useStableCallback/* .useStableCallback */.K)(event => {
    if (!latestOpenRef.current) {
      return;
    }
    const index = listRef.current.indexOf(event.currentTarget);
    if (index !== -1 && (indexRef.current !== index || activeIndex !== index)) {
      indexRef.current = index;
      onNavigate(event);
    }
  });
  const getParentOrientation = (0,utils_useStableCallback/* .useStableCallback */.K)(() => {
    return parentOrientation ?? tree?.nodesRef.current.find(node => node.id === parentId)?.context?.dataRef?.current.orientation;
  });
  const getMinEnabledIndex = (0,utils_useStableCallback/* .useStableCallback */.K)(() => {
    return (0,composite/* .getMinListIndex */.Zb)(listRef, disabledIndicesRef.current);
  });
  const commonOnKeyDown = (0,utils_useStableCallback/* .useStableCallback */.K)(event => {
    isPointerModalityRef.current = false;
    forceSyncFocusRef.current = true;

    // When composing a character, Chrome fires ArrowDown twice. Firefox/Safari
    // don't appear to suffer from this. `event.isComposing` is avoided due to
    // Safari not supporting it properly (although it's not needed in the first
    // place for Safari, just avoiding any possible issues).
    if (event.which === 229) {
      return;
    }

    // If the floating element is animating out, ignore navigation. Otherwise,
    // the `activeIndex` gets set to 0 despite not being open so the next time
    // the user ArrowDowns, the first item won't be focused.
    if (!latestOpenRef.current && event.currentTarget === floatingFocusElementRef.current) {
      return;
    }
    if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl, isGrid)) {
      // If the nested list's close key is also the parent navigation key,
      // let the parent navigate. Otherwise, stop propagating the event.
      if (!isMainOrientationKey(event.key, getParentOrientation())) {
        (0,utils_event/* .stopEvent */.jo)(event);
      }
      store.setOpen(false, (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .listNavigation */.Dq, event.nativeEvent));
      if ((0,floating_ui_utils_dom/* .isHTMLElement */.sb)(domReferenceElement)) {
        if (virtual) {
          tree?.events.emit('virtualfocus', domReferenceElement);
        } else {
          domReferenceElement.focus();
        }
      }
      return;
    }
    const currentIndex = indexRef.current;
    const minIndex = (0,composite/* .getMinListIndex */.Zb)(listRef, disabledIndices);
    const maxIndex = (0,composite/* .getMaxListIndex */.vB)(listRef, disabledIndices);
    if (!typeableComboboxReference) {
      if (event.key === 'Home') {
        (0,utils_event/* .stopEvent */.jo)(event);
        indexRef.current = minIndex;
        onNavigate(event);
      }
      if (event.key === 'End') {
        (0,utils_event/* .stopEvent */.jo)(event);
        indexRef.current = maxIndex;
        onNavigate(event);
      }
    }

    // Grid navigation is injected by grid-capable consumers so non-grid
    // consumers (menu, select) tree-shake the grid helpers out.
    if (navigateGrid != null) {
      const index = navigateGrid(event, indexRef.current, listRef, orientation, loopFocus, rtl, disabledIndices, minIndex, maxIndex);
      if (index != null) {
        indexRef.current = index;
        onNavigate(event);
      }
      if (orientation === 'both') {
        return;
      }
    }
    if (isMainOrientationKey(event.key, orientation)) {
      (0,utils_event/* .stopEvent */.jo)(event);

      // Reset the index if no item is focused.
      if (open && !virtual && (0,shadowDom/* .activeElement */.RS)(event.currentTarget.ownerDocument) === event.currentTarget) {
        indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
        onNavigate(event);
        return;
      }
      if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
        if (loopFocus) {
          if (currentIndex >= maxIndex) {
            if (allowEscape && currentIndex !== listRef.current.length) {
              indexRef.current = -1;
            } else {
              // Give time for virtualizers to update the listRef.
              forceSyncFocusRef.current = false;
              indexRef.current = minIndex;
            }
          } else {
            indexRef.current = (0,composite/* .findNonDisabledListIndex */.BF)(listRef.current, {
              startingIndex: currentIndex,
              disabledIndices
            });
          }
        } else {
          indexRef.current = Math.min(maxIndex, (0,composite/* .findNonDisabledListIndex */.BF)(listRef.current, {
            startingIndex: currentIndex,
            disabledIndices
          }));
        }
      } else if (loopFocus) {
        if (currentIndex <= minIndex) {
          if (allowEscape && currentIndex !== -1) {
            indexRef.current = listRef.current.length;
          } else {
            // Give time for virtualizers to update the listRef.
            forceSyncFocusRef.current = false;
            indexRef.current = maxIndex;
          }
        } else {
          indexRef.current = (0,composite/* .findNonDisabledListIndex */.BF)(listRef.current, {
            startingIndex: currentIndex,
            decrement: true,
            disabledIndices
          });
        }
      } else {
        indexRef.current = Math.max(minIndex, (0,composite/* .findNonDisabledListIndex */.BF)(listRef.current, {
          startingIndex: currentIndex,
          decrement: true,
          disabledIndices
        }));
      }
      if ((0,composite/* .isIndexOutOfListBounds */.du)(listRef.current, indexRef.current)) {
        indexRef.current = -1;
      }
      onNavigate(event);
    }
  });
  const item = react.useMemo(() => {
    const itemProps = {
      onFocus(event) {
        forceSyncFocusRef.current = true;
        syncCurrentTarget(event);
      },
      onClick: ({
        currentTarget
      }) => currentTarget.focus({
        preventScroll: true
      }),
      // Safari
      onMouseMove(event) {
        if (isStationaryWebKitPointer(event)) {
          return;
        }
        forceSyncFocusRef.current = true;
        forceScrollIntoViewRef.current = false;
        if (focusItemOnHover) {
          syncCurrentTarget(event);
        }
      },
      onPointerLeave(event) {
        if (!latestOpenRef.current || !isPointerModalityRef.current || event.pointerType === 'touch') {
          return;
        }
        forceSyncFocusRef.current = true;
        const relatedTarget = event.relatedTarget;
        if (!focusItemOnHover || listRef.current.includes(relatedTarget)) {
          return;
        }
        if (!resetOnPointerLeaveRef.current) {
          return;
        }
        cancelQueuedFocusRef.current?.();
        cancelQueuedFocusRef.current = null;
        indexRef.current = -1;
        onNavigate(event);
        if (!virtual) {
          const floatingFocusEl = floatingFocusElementRef.current;
          const activeEl = (0,shadowDom/* .activeElement */.RS)((0,owner/* .ownerDocument */.R)(floatingFocusEl));
          if (floatingFocusEl && (0,shadowDom/* .contains */.gR)(floatingFocusEl, activeEl)) {
            floatingFocusEl.focus({
              preventScroll: true
            });
          }
        }
      }
    };
    return itemProps;
  }, [syncCurrentTarget, latestOpenRef, floatingFocusElementRef, focusItemOnHover, listRef, onNavigate, resetOnPointerLeaveRef, virtual]);
  const ariaActiveDescendantProp = react.useMemo(() => {
    return virtual && open && hasActiveIndex && {
      'aria-activedescendant': `${id}-${activeIndex}`
    };
  }, [virtual, open, hasActiveIndex, id, activeIndex]);
  const floating = react.useMemo(() => {
    return {
      'aria-orientation': orientation === 'both' ? undefined : orientation,
      ...(!typeableComboboxReference ? ariaActiveDescendantProp : {}),
      onKeyDown(event) {
        // Close submenu on Shift+Tab
        if (event.key === 'Tab' && event.shiftKey && open && !virtual) {
          // If the event originated from within a nested element (e.g., a Dialog opened from
          // within the menu), don't close the menu. The nested element has its own focus
          // management and should handle the Tab key.
          const target = (0,shadowDom/* .getTarget */.EW)(event.nativeEvent);
          if (target && !(0,shadowDom/* .contains */.gR)(floatingFocusElementRef.current, target)) {
            return;
          }
          (0,utils_event/* .stopEvent */.jo)(event);
          store.setOpen(false, (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .focusOut */.Xn, event.nativeEvent));
          if ((0,floating_ui_utils_dom/* .isHTMLElement */.sb)(domReferenceElement)) {
            domReferenceElement.focus();
          }
          return;
        }
        commonOnKeyDown(event);
      },
      onPointerMove(event) {
        if (isStationaryWebKitPointer(event)) {
          return;
        }
        isPointerModalityRef.current = true;
      }
    };
  }, [ariaActiveDescendantProp, commonOnKeyDown, floatingFocusElementRef, orientation, typeableComboboxReference, store, open, virtual, domReferenceElement]);
  const trigger = react.useMemo(() => {
    function openOnNavigationKeyDown(event) {
      store.setOpen(true, (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .listNavigation */.Dq, event.nativeEvent, event.currentTarget));
    }
    function checkVirtualMouse(event) {
      if (focusItemOnOpen === 'auto' && (0,utils_event/* .isVirtualClick */.YF)(event.nativeEvent)) {
        focusItemOnOpenRef.current = !virtual;
      }
    }
    function checkVirtualPointer(event) {
      // `pointerdown` fires first, reset the state then perform the checks.
      focusItemOnOpenRef.current = focusItemOnOpen;
      if (focusItemOnOpen === 'auto' && (0,utils_event/* .isVirtualPointerEvent */.Pg)(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    return {
      onKeyDown(event) {
        // non-reactive open state (to prevent re-creation of the handler)
        const currentOpen = store.select('open');
        isPointerModalityRef.current = false;
        const isArrowKey = event.key.startsWith('Arrow');
        const isParentCrossOpenKey = isCrossOrientationOpenKey(event.key, getParentOrientation(), rtl);
        const isMainKey = isMainOrientationKey(event.key, orientation);
        const isNavigationKey = (nested ? isParentCrossOpenKey : isMainKey) || event.key === 'Enter' || event.key.trim() === '';
        if (virtual && currentOpen) {
          return commonOnKeyDown(event);
        }

        // If a floating element should not open on arrow key down, avoid
        // setting `activeIndex` while it's closed.
        if (!currentOpen && !openOnArrowKeyDown && isArrowKey) {
          return undefined;
        }
        if (isNavigationKey) {
          const isParentMainKey = isMainOrientationKey(event.key, getParentOrientation());
          keyRef.current = nested && isParentMainKey ? null : event.key;
        }
        if (nested) {
          if (isParentCrossOpenKey) {
            (0,utils_event/* .stopEvent */.jo)(event);
            if (currentOpen) {
              indexRef.current = getMinEnabledIndex();
              onNavigate(event);
            } else {
              openOnNavigationKeyDown(event);
            }
          }
          return undefined;
        }
        if (isMainKey) {
          if (selectedIndexRef.current != null) {
            indexRef.current = selectedIndexRef.current;
          }
          (0,utils_event/* .stopEvent */.jo)(event);
          if (!currentOpen && openOnArrowKeyDown) {
            openOnNavigationKeyDown(event);
          } else {
            commonOnKeyDown(event);
          }
          if (currentOpen) {
            onNavigate(event);
          }
        }
        return undefined;
      },
      onFocus(event) {
        if (store.select('open') && !virtual) {
          indexRef.current = -1;
          onNavigate(event);
        }
      },
      onPointerDown: checkVirtualPointer,
      onPointerEnter: checkVirtualPointer,
      onMouseDown: checkVirtualMouse,
      onClick: checkVirtualMouse
    };
  }, [commonOnKeyDown, focusItemOnOpen, getMinEnabledIndex, nested, onNavigate, store, openOnArrowKeyDown, orientation, getParentOrientation, rtl, selectedIndexRef, virtual]);
  const reference = react.useMemo(() => {
    return {
      ...ariaActiveDescendantProp,
      ...trigger
    };
  }, [ariaActiveDescendantProp, trigger]);
  return react.useMemo(() => enabled ? {
    reference,
    floating,
    item,
    trigger
  } : {}, [enabled, reference, floating, trigger, item]);
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/floating-ui-react/hooks/gridNavigation.mjs


/**
 * Positional arguments are deliberate: property names of an options object
 * don't minify, and the signature is locked to the caller via `typeof` on the
 * `grid` option of `useListNavigation`.
 *
 * The injected grid navigator only ever operates on a uniform 1x1 grid (sizes are
 * always `1x1` and packing is never dense), so the cell-map machinery that supports
 * multi-cell items collapses to an identity transform over the item list. Calling
 * `getGridNavigatedIndex` directly keeps the cell-map helpers
 * (`createGridCellMap`/`getGridCellIndexOfCorner`/`getGridCellIndices`) out of
 * grid-combobox bundles.
 */
function gridNavigation(event, prevIndex, listRef, orientation, loopFocus, rtl, disabledIndices, minIndex, maxIndex, cols = 2) {
  const nextIndex = (0,composite/* .getGridNavigatedIndex */.Kg)(listRef.current, {
    event,
    orientation,
    loopFocus,
    rtl,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    // An out-of-range previous index falls back to the first enabled item.
    prevIndex: prevIndex > maxIndex ? minIndex : prevIndex,
    stopEvent: true
  });

  // `getGridNavigatedIndex` can return an out-of-bounds sentinel (e.g. `-1` when there is no
  // previous item to move from); surface that as `undefined` so the caller treats it as
  // "no navigation" rather than highlighting index `-1`.
  return (0,composite/* .isIndexOutOfListBounds */.du)(listRef.current, nextIndex) ? undefined : nextIndex;
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/root/ComboboxRootContext.mjs
var ComboboxRootContext = __webpack_require__(60598);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/store.mjs
var combobox_store = __webpack_require__(81612);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs + 1 modules
var internals_useOpenChangeComplete = __webpack_require__(83378);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
var FieldRootContext = __webpack_require__(36649);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/internals/field-register-control/useRegisterFieldControl.mjs
'use client';




function useRegisterFieldControl(controlRef, id, value, getFormValueOverride, enabled = true, name) {
  const {
    registerFieldControl
  } = (0,FieldRootContext/* .useFieldRootContext */.V$)();
  const sourceRef = (0,utils_useRefWithInit/* .useRefWithInit */.j)(() => Symbol());

  // Re-register without unregistering first: re-registration with the same id updates the
  // form's fields Map entry in place, while a delete + re-add would move the field to the
  // end of the Map every time its value changes.
  (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    const source = sourceRef.current;
    if (!enabled) {
      registerFieldControl(source, undefined);
      return;
    }
    const registration = {
      controlRef,
      getValue: getFormValueOverride,
      id,
      name,
      value
    };
    registerFieldControl(source, registration);
  }, [controlRef, enabled, getFormValueOverride, id, name, registerFieldControl, sourceRef, value]);
  (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    const source = sourceRef.current;
    return () => {
      registerFieldControl(source, undefined);
    };
  }, [registerFieldControl, sourceRef]);
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/internals/form-context/FormContext.mjs
'use client';



const FormContext = /*#__PURE__*/react.createContext({
  elementRef: {
    current: null
  },
  formRef: {
    current: {
      fields: new Map()
    }
  },
  errors: {},
  clearErrors: empty/* .NOOP */.tE,
  validationMode: 'onSubmit',
  submitAttemptedRef: {
    current: false
  }
});
if (false) {}
function useFormContext() {
  return react.useContext(FormContext);
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/labelable-provider/useLabelableId.mjs
var useLabelableId = __webpack_require__(39083);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/root/utils/index.mjs
var utils = __webpack_require__(47614);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/resolveValueLabel.mjs + 1 modules
var resolveValueLabel = __webpack_require__(73241);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/stringifyLocale.mjs
function stringifyLocale(locale) {
  if (Array.isArray(locale)) {
    return locale.map(value => stringifyLocale(value)).join(',');
  }
  if (locale == null) {
    return '';
  }
  return String(locale);
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/internals/filter.mjs


const filterCache = new Map();
function filter_getFilter(options = {}) {
  const mergedOptions = {
    usage: 'search',
    sensitivity: 'base',
    ignorePunctuation: true,
    ...options
  };
  const cacheKey = `${stringifyLocale(options.locale)}|${JSON.stringify(mergedOptions)}`;
  const cachedFilter = filterCache.get(cacheKey);
  if (cachedFilter) {
    return cachedFilter;
  }
  const collator = new Intl.Collator(options.locale, mergedOptions);
  const filter = {
    contains(item, query, itemToString) {
      if (!query) {
        return true;
      }
      const itemString = (0,resolveValueLabel/* .stringifyAsLabel */.yg)(item, itemToString);
      for (let i = 0; i <= itemString.length - query.length; i += 1) {
        if (collator.compare(itemString.slice(i, i + query.length), query) === 0) {
          return true;
        }
      }
      return false;
    },
    startsWith(item, query, itemToString) {
      if (!query) {
        return true;
      }
      const itemString = (0,resolveValueLabel/* .stringifyAsLabel */.yg)(item, itemToString);
      return collator.compare(itemString.slice(0, query.length), query) === 0;
    },
    endsWith(item, query, itemToString) {
      if (!query) {
        return true;
      }
      const itemString = (0,resolveValueLabel/* .stringifyAsLabel */.yg)(item, itemToString);
      const queryLength = query.length;
      return itemString.length >= queryLength && collator.compare(itemString.slice(itemString.length - queryLength), query) === 0;
    }
  };
  filterCache.set(cacheKey, filter);
  return filter;
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/combobox/root/utils/useFilter.mjs
'use client';




/**
 * Matches items against a query using `Intl.Collator` for robust string matching.
 */
const useCoreFilter = filter_getFilter;
/**
 * Matches items against a query using `Intl.Collator` for robust string matching.
 */
function useComboboxFilter(options = {}) {
  const {
    multiple = false,
    value,
    ...collatorOptions
  } = options;
  const coreFilter = getFilter(collatorOptions);
  const contains = React.useCallback((item, query, itemToString) => {
    if (multiple) {
      return createCollatorItemFilter(coreFilter, itemToString)(item, query);
    }
    return createSingleSelectionCollatorFilter(coreFilter, itemToString, value)(item, query);
  }, [coreFilter, value, multiple]);
  return React.useMemo(() => ({
    ...coreFilter,
    contains
  }), [contains, coreFilter]);
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/useTransitionStatus.mjs
var internals_useTransitionStatus = __webpack_require__(11924);
;// CONCATENATED MODULE: ./node_modules/@base-ui/utils/useEnhancedClickHandler.mjs
'use client';


/**
 * Provides a cross-browser way to determine the type of the pointer used to click.
 * Safari and Firefox do not provide the PointerEvent to the click handler (they use MouseEvent) yet.
 * Additionally, this implementation detects if the click was triggered by the keyboard.
 *
 * @param handler The function to be called when the button is clicked. The first parameter is the original event and the second parameter is the pointer type.
 */
function useEnhancedClickHandler(handler) {
  const lastClickInteractionTypeRef = react.useRef('');
  const handlePointerDown = react.useCallback(event => {
    if (event.defaultPrevented) {
      return;
    }
    lastClickInteractionTypeRef.current = event.pointerType;
    handler(event, event.pointerType);
  }, [handler]);
  const handleClick = react.useCallback(event => {
    // event.detail has the number of clicks performed on the element. 0 means it was triggered by the keyboard.
    if (event.detail === 0) {
      handler(event, 'keyboard');
      return;
    }
    if ('pointerType' in event) {
      // Chrome and Edge correctly use PointerEvent
      handler(event, event.pointerType);
    } else {
      handler(event, lastClickInteractionTypeRef.current);
    }
    lastClickInteractionTypeRef.current = '';
  }, [handler]);
  return {
    onClick: handleClick,
    onPointerDown: handlePointerDown
  };
}
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/platform/os.mjs
var os = __webpack_require__(28229);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/internals/useValueChanged.mjs
'use client';




function useValueChanged(value, onChange) {
  const valueRef = react.useRef(value);
  const onChangeCallback = (0,utils_useStableCallback/* .useStableCallback */.K)(onChange);
  (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (valueRef.current !== value) {
      onChangeCallback(valueRef.current);
    }
    valueRef.current = value;
  }, [value, onChangeCallback]);
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/useOpenInteractionType.mjs
'use client';






function useOpenMethodTriggerProps(open, setOpenMethod) {
  const handleTriggerClick = (0,utils_useStableCallback/* .useStableCallback */.K)((_, interactionType) => {
    const isOpen = typeof open === 'function' ? open() : open;
    if (!isOpen) {
      setOpenMethod(interactionType || (
      // On iOS Safari, the hitslop around touch targets means tapping outside an element's
      // bounds does not fire `pointerdown` but does fire `mousedown`. The `interactionType`
      // will be "" in that case.
      os/* .ios */.s4 ? 'touch' : ''));
    }
  });
  const {
    onClick,
    onPointerDown
  } = useEnhancedClickHandler(handleTriggerClick);
  return react.useMemo(() => ({
    onClick,
    onPointerDown
  }), [onClick, onPointerDown]);
}

/**
 * Determines the interaction type (keyboard, mouse, touch, etc.) that opened the component.
 *
 * @param open The open state of the component.
 */
function useOpenInteractionType(open) {
  const [openMethod, setOpenMethod] = react.useState(null);
  const triggerProps = useOpenMethodTriggerProps(open, setOpenMethod);
  useValueChanged(open, previousOpen => {
    if (previousOpen && !open) {
      setOpenMethod(null);
    }
  });
  return react.useMemo(() => ({
    openMethod,
    triggerProps
  }), [openMethod, triggerProps]);
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/scrollable.mjs

function scrollable_isScrollableY(element, allowOverflowIntent = false) {
  const {
    overflowY
  } = (0,floating_ui_utils_dom/* .getComputedStyle */.L9)(element);
  if (overflowY !== 'auto' && overflowY !== 'scroll') {
    return false;
  }
  // When `allowOverflowIntent` is true, a container that overflows only once extra space is
  // added (e.g. drawer keyboard scroll slack) still counts, as long as it has layout size on
  // the axis.
  return allowOverflowIntent ? element.clientHeight > 0 : element.scrollHeight > element.clientHeight;
}
function scrollable_isScrollableX(element, allowOverflowIntent = false) {
  const {
    overflowX
  } = getComputedStyle(element);
  if (overflowX !== 'auto' && overflowX !== 'scroll') {
    return false;
  }
  return allowOverflowIntent ? element.clientWidth > 0 : element.scrollWidth > element.clientWidth;
}
function isScrollable(element, axis, allowOverflowIntent = false) {
  return axis === 'vertical' ? scrollable_isScrollableY(element, allowOverflowIntent) : scrollable_isScrollableX(element, allowOverflowIntent);
}
function hasScrollableAncestor(target, root, axes) {
  // `getParentNode` crosses shadow boundaries (and slots), so a target inside a shadow root
  // still walks up to scrollable ancestors in the light DOM.
  let node = target;
  while (isHTMLElement(node) && node !== root && !isLastTraversableNode(node)) {
    for (const axis of axes) {
      if (isScrollable(node, axis)) {
        return true;
      }
    }
    node = getParentNode(node);
  }
  return false;
}
function findScrollableTouchTarget(target, root, axis = 'vertical', allowOverflowIntent = false) {
  // `getParentNode` crosses shadow boundaries (and slots), so a target inside a shadow root
  // still reaches a scrollable ancestor in the light DOM.
  let node = isHTMLElement(target) ? target : null;
  while (isHTMLElement(node) && node !== root && !isLastTraversableNode(node)) {
    if (isScrollable(node, axis, allowOverflowIntent)) {
      return node;
    }
    node = getParentNode(node);
  }
  return isScrollable(root, axis, allowOverflowIntent) ? root : null;
}
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(57947);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/popups/popupStoreUtils.mjs
'use client';















const FOCUSABLE_POPUP_PROPS = {
  tabIndex: -1,
  [constants/* .FOCUSABLE_ATTRIBUTE */.Ed]: ''
};

/**
 * Returns the default `initialFocus` resolver for a popup. When opened by touch it focuses the
 * popup element itself to prevent the virtual keyboard from opening (required for Android
 * specifically; iOS handles this automatically). Otherwise it falls back to the default behavior.
 */
function createDefaultInitialFocus(popupRef) {
  return interactionType => interactionType === 'touch' ? popupRef.current : true;
}

/**
 * The subset of a popup handle that a Root needs to bind its store to. Both the real handle classes
 * and any test double satisfy it.
 */

/**
 * Creates and owns a popup store on behalf of a Root part. The store is created exactly once, with
 * controlled props and root state synced separately after creation. Sets up the synced floating
 * root context and returns the store.
 *
 * @param createStore Factory that builds the store. Called exactly once, receiving the floating id
 * and whether the popup is nested inside another floating element, both resolved on the first render.
 * @param treatPopupAsFloatingElement Whether the popup element is passed to Floating UI as the
 * floating element instead of the default positioner.
 */
function usePopupRootStore(createStore, treatPopupAsFloatingElement = false) {
  const floatingId = useId();
  const nested = useFloatingParentNodeId() != null;
  const store = useRefWithInit(() => createStore(floatingId, nested)).current;
  useSyncedFloatingRootContext({
    popupStore: store,
    treatPopupAsFloatingElement,
    floatingRootContext: store.state.floatingRootContext,
    floatingId,
    nested,
    onOpenChange: store.setOpen
  });
  return store;
}

/**
 * Attaches a Root's store to a handle for this component's committed lifetime. Popup Roots render
 * it before their interactions and user children so its layout effect runs before descendant layout
 * effects. This lets descendants call the handle during the Root's initial commit without attaching
 * during render, which would leak suspended or abandoned stores. Store subscribers are notified by
 * `attachStore` in this ordinary layout phase, where React permits synchronous updates.
 *
 * Popup Roots must render this component only when a handle is present so handle-less Roots avoid
 * mounting an extra fiber and layout effect.
 */
function PopupHandleAttachment({
  handle,
  store
}) {
  useIsoLayoutEffect(() => {
    return handle.attachStore(store);
  }, [handle, store]);
  return null;
}

/**
 * Returns a callback ref that registers/unregisters the trigger element in the store.
 *
 * @param store The Store instance where the trigger should be registered.
 */
function useTriggerRegistration(id, store) {
  // Keep track of the currently registered element to unregister it on unmount or id change.
  const registeredElementIdRef = React.useRef(null);
  const registeredElementRef = React.useRef(null);
  return React.useCallback(element => {
    if (id === undefined) {
      return;
    }
    let shouldSyncTriggerCount = false;
    if (registeredElementIdRef.current !== null) {
      const registeredId = registeredElementIdRef.current;
      const registeredElement = registeredElementRef.current;
      const currentElement = store.context.triggerElements.getById(registeredId);
      if (registeredElement && currentElement === registeredElement) {
        store.context.triggerElements.delete(registeredId);
        shouldSyncTriggerCount = true;
      }
      registeredElementIdRef.current = null;
      registeredElementRef.current = null;
    }
    if (element !== null) {
      registeredElementIdRef.current = id;
      registeredElementRef.current = element;
      store.context.triggerElements.add(id, element);
      shouldSyncTriggerCount = true;
    }
    if (shouldSyncTriggerCount) {
      const triggerCount = store.context.triggerElements.size;
      if (store.select('open') && store.state.triggerCount !== triggerCount) {
        store.set('triggerCount', triggerCount);
      }
    }
  }, [store, id]);
}
function setPopupOpenState(state, open, trigger, preventUnmountOnClose = false) {
  if (open) {
    // Opening starts a new close cycle, so clear any previous request to keep the popup mounted.
    state.preventUnmountingOnClose = false;
  } else if (preventUnmountOnClose) {
    state.preventUnmountingOnClose = true;
  }
  const triggerId = trigger?.id ?? null;

  // If a popup is closing, the `trigger` may be undefined.
  // We want to keep the previous value so that exit animations are played and focus is returned correctly.
  if (triggerId || open) {
    state.activeTriggerId = triggerId;
    state.activeTriggerElement = trigger ?? null;
  }
}
function attachPreventUnmountOnClose(eventDetails) {
  let preventUnmountOnClose = false;
  eventDetails.preventUnmountOnClose = () => {
    preventUnmountOnClose = true;
  };
  return () => preventUnmountOnClose;
}

/**
 * Runs the shared open-change sequence for a popup store: notifies `onOpenChange`,
 * honors cancellation, dispatches the floating root change, maps the reason to an
 * `instantType`, and commits the state update (synchronously for hover so
 * `getAnimations()` observes it). Stores supply their own differences via
 * `extraState` (e.g. the last change reason) and `onBeforeDispatch` (e.g. updating
 * inline-rect coordinates).
 */
function applyPopupOpenChange(store, nextOpen, eventDetails, options = {}) {
  const reason = eventDetails.reason;
  const isHover = reason === REASONS.triggerHover;
  const isFocusOpen = nextOpen && reason === REASONS.triggerFocus;
  const isDismissClose = !nextOpen && (reason === REASONS.triggerPress || reason === REASONS.escapeKey);
  const shouldPreventUnmountOnClose = attachPreventUnmountOnClose(eventDetails);
  store.context.onOpenChange?.(nextOpen, eventDetails);
  if (eventDetails.isCanceled) {
    return;
  }
  options.onBeforeDispatch?.();
  store.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
  const changeState = () => {
    // Spread `extraState` first so `open` always reflects `nextOpen`, keeping it in
    // sync with the value already passed to `dispatchOpenChange`/`setPopupOpenState`.
    const updatedState = {
      ...options.extraState,
      open: nextOpen
    };
    if (isFocusOpen) {
      updatedState.instantType = 'focus';
    } else if (isDismissClose) {
      updatedState.instantType = 'dismiss';
    } else if (isHover) {
      updatedState.instantType = undefined;
    }
    setPopupOpenState(updatedState, nextOpen, eventDetails.trigger, shouldPreventUnmountOnClose());
    store.update(updatedState);
  };
  if (isHover) {
    // Flush synchronously for hover so `node.getAnimations()` sees the new state.
    ReactDOM.flushSync(changeState);
  } else {
    changeState();
  }
}

/**
 * Sets up trigger data forwarding to the store.
 *
 * @param triggerId Id of the trigger.
 * @param triggerElementRef Ref for the trigger DOM element.
 * @param store The Store instance managing the popup state.
 * @param stateUpdates An object with state updates to apply when the trigger is active.
 */
function useTriggerDataForwarding(triggerId, triggerElementRef, store, stateUpdates) {
  const isMountedByThisTrigger = store.useState('isMountedByTrigger', triggerId);
  const baseRegisterTrigger = useTriggerRegistration(triggerId, store);

  // Applies trigger-owned state (active-trigger ownership and payload) when the trigger registers.
  // Stable so payload/`stateUpdates` changes do not change the ref identity (which would needlessly
  // churn registration); it reads the latest closure values when invoked.
  const applyTriggerData = useStableCallback(element => {
    const open = store.select('open');
    const activeTriggerId = store.select('activeTriggerId');
    if (activeTriggerId === triggerId) {
      store.update({
        activeTriggerElement: element,
        ...(open ? stateUpdates : null)
      });
      return;
    }
    if (activeTriggerId == null && open) {
      // If a popup is already open, a detached trigger can mount before any active trigger
      // has been established. Claim the first registered trigger so trigger-owned focus
      // management and ARIA relationships work.
      store.update({
        activeTriggerId: triggerId,
        activeTriggerElement: element,
        ...stateUpdates
      });
    }
  });

  // Intentionally NOT stable. Its identity is derived from `baseRegisterTrigger`, which is keyed on
  // `[store, id]`, so when a handle-backed trigger's store pointer swaps the merged ref re-fires —
  // unregistering from the previous store and registering into the new one. This lets a detached
  // trigger follow its handle's currently-attached store across attach/detach/remount. (A stable
  // callback would keep its identity and never re-fire on a store swap.)
  const registerTrigger = React.useCallback(element => {
    baseRegisterTrigger(element);
    if (element) {
      applyTriggerData(element);
    }
  }, [baseRegisterTrigger, applyTriggerData]);
  useIsoLayoutEffect(() => {
    if (isMountedByThisTrigger) {
      store.update({
        activeTriggerElement: triggerElementRef.current,
        ...stateUpdates
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMountedByThisTrigger, store, triggerElementRef, ...Object.values(stateUpdates)]);
  return {
    registerTrigger,
    isMountedByThisTrigger
  };
}
/**
 * Keeps trigger registration state synchronized while the popup is open.
 *
 * When a popup opens without an explicit trigger id and exactly one trigger is registered, that
 * trigger is claimed as the active trigger. When the active trigger id is still registered but its
 * element changed, the active element is refreshed. When the active trigger id is missing from the
 * registry but the same element is still registered under a different id (e.g. the rendered trigger
 * carries its own DOM `id` that differs from Base UI's internal trigger id), the active id is
 * reassociated to the registered id instead of being treated as lost. When the active trigger
 * unregisters, the default path preserves existing ownership so non-closing popup families do not
 * silently claim a different trigger while staying open.
 *
 * If `closeOnActiveTriggerUnmount` is enabled, unregistering a previously resolved active trigger
 * requests a close after a microtask so a same-tick replacement trigger with the same id can
 * register first. An active trigger id that has not matched a registered trigger yet is treated as
 * pending and does not request a close.
 *
 * This should be called on the Root part.
 *
 * @param store The Store instance managing the popup state.
 * @param options Options for active trigger unmount behavior.
 */
function useImplicitActiveTrigger(store, options = {}) {
  const {
    closeOnActiveTriggerUnmount = false
  } = options;
  // Distinguishes a trigger that unmounted from a new active trigger that has not hydrated yet.
  const resolvedActiveTriggerIdRef = React.useRef(null);
  const open = store.useState('open');
  const reactiveTriggerCount = store.useState('triggerCount');
  // Subscribe to the active trigger id so the reconciliation below reruns when ownership moves to
  // another trigger while the popup stays open (e.g. a focus/hover handoff between triggers).
  const activeTriggerId = store.useState('activeTriggerId');
  // Subscribe to the active trigger element so the reconciliation reruns when a pending active
  // trigger registers in a commit where the trigger count nets out unchanged (registration
  // forwards the element to the store when the registering trigger matches the active id).
  // Without this, the id would never be marked resolved and a later genuine unmount would be
  // misclassified as pending, disabling `closeOnActiveTriggerUnmount`.
  const reactiveActiveTriggerElement = store.useState('activeTriggerElement');
  useIsoLayoutEffect(() => {
    if (!open) {
      resolvedActiveTriggerIdRef.current = null;
      if (store.state.triggerCount !== 0) {
        store.set('triggerCount', 0);
      }
      return;
    }
    const triggerCount = store.context.triggerElements.size;
    const stateUpdates = {};
    if (store.state.triggerCount !== triggerCount) {
      stateUpdates.triggerCount = triggerCount;
    }
    const currentActiveTriggerId = store.select('activeTriggerId');
    let lostActiveTriggerId = null;
    if (currentActiveTriggerId) {
      const activeTriggerElement = store.context.triggerElements.getById(currentActiveTriggerId);
      if (!activeTriggerElement) {
        for (const [triggerId, triggerElement] of store.context.triggerElements.entries()) {
          if (triggerElement === store.state.activeTriggerElement) {
            stateUpdates.activeTriggerId = triggerId;
            stateUpdates.activeTriggerElement = triggerElement;
            resolvedActiveTriggerIdRef.current = triggerId;
            break;
          }
        }
        if (stateUpdates.activeTriggerId === undefined) {
          if (resolvedActiveTriggerIdRef.current === currentActiveTriggerId) {
            lostActiveTriggerId = currentActiveTriggerId;
          } else {
            resolvedActiveTriggerIdRef.current = null;
          }
        }
      } else {
        resolvedActiveTriggerIdRef.current = currentActiveTriggerId;
        if (activeTriggerElement !== store.state.activeTriggerElement) {
          stateUpdates.activeTriggerElement = activeTriggerElement;
        }
      }
    } else {
      resolvedActiveTriggerIdRef.current = null;
    }
    if (!lostActiveTriggerId && !currentActiveTriggerId && triggerCount === 1) {
      const iteratorResult = store.context.triggerElements.entries().next();
      if (!iteratorResult.done) {
        const [implicitTriggerId, implicitTriggerElement] = iteratorResult.value;
        stateUpdates.activeTriggerId = implicitTriggerId;
        stateUpdates.activeTriggerElement = implicitTriggerElement;
        resolvedActiveTriggerIdRef.current = implicitTriggerId;
      }
    }
    if (stateUpdates.triggerCount !== undefined || stateUpdates.activeTriggerId !== undefined || stateUpdates.activeTriggerElement !== undefined) {
      store.update(stateUpdates);
    }
    if (lostActiveTriggerId) {
      if (closeOnActiveTriggerUnmount) {
        // Defer so a same-tick replacement trigger with the same id can register first.
        queueMicrotask(() => {
          if (store.select('open') && store.select('activeTriggerId') === lostActiveTriggerId && !store.context.triggerElements.getById(lostActiveTriggerId)) {
            const eventDetails = createChangeEventDetails((/* inlined export .none */"none"));
            store.setOpen(false, eventDetails);
            // If closing is canceled, keep the previous active trigger ownership for the
            // still-open popup instead of claiming another trigger implicitly.
            if (!eventDetails.isCanceled) {
              store.update({
                activeTriggerId: null,
                activeTriggerElement: null
              });
            }
          }
        });
      }
    }
  }, [open, store, reactiveTriggerCount, activeTriggerId, reactiveActiveTriggerElement, closeOnActiveTriggerUnmount]);
}

/**
 * Manages the mounted state of the popup.
 * Sets up the transition status listeners and handles unmounting when needed.
 * Updates the `mounted`, `transitionStatus`, and `preventUnmountingOnClose` states in the store.
 *
 * @param open Whether the popup is open.
 * @param store The Store instance managing the popup state.
 * @param onUnmount Optional callback to be called when the popup is unmounted.
 *
 * @returns A function to forcibly unmount the popup.
 */
function useOpenStateTransitions(open, store, onUnmount) {
  const {
    mounted,
    setMounted,
    transitionStatus
  } = useTransitionStatus(open);
  const preventUnmountingOnClose = store.useState('preventUnmountingOnClose');
  // Opening starts a new close cycle. Clear during render so the close-completion hook below
  // reads the synchronized value on the same pass.
  const syncedPreventUnmountingOnClose = open ? false : preventUnmountingOnClose;
  store.useSyncedValues({
    mounted,
    transitionStatus,
    preventUnmountingOnClose: syncedPreventUnmountingOnClose
  });
  const forceUnmount = useStableCallback(() => {
    setMounted(false);
    store.update({
      activeTriggerId: null,
      activeTriggerElement: null,
      mounted: false,
      preventUnmountingOnClose: false
    });
    onUnmount?.();
    store.context.onOpenChangeComplete?.(false);
  });
  useOpenChangeComplete({
    enabled: mounted && !open && !syncedPreventUnmountingOnClose,
    open,
    ref: store.context.popupRef,
    onComplete() {
      if (!open) {
        forceUnmount();
      }
    }
  });
  return {
    forceUnmount,
    transitionStatus
  };
}
function usePopupInteractionProps(store, statePart) {
  store.useSyncedValues(statePart);
  useIsoLayoutEffect(() => () => {
    store.update({
      activeTriggerProps: EMPTY_OBJECT,
      inactiveTriggerProps: EMPTY_OBJECT,
      popupProps: EMPTY_OBJECT
    });
  }, [store]);
}
function usePopupRootSync(store, open) {
  useIsoLayoutEffect(() => {
    if (!open && store.state.openMethod !== null) {
      store.set('openMethod', null);
    }
  }, [open, store]);
  useIsoLayoutEffect(() => () => {
    if (store.state.openMethod !== null) {
      store.set('openMethod', null);
    }
  }, [store]);
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/merge-props/mergeProps.mjs
var mergeProps = __webpack_require__(23057);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/itemEquality.mjs
var itemEquality = __webpack_require__(5815);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/internals/areArraysEqual.mjs
function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/combobox/root/utils/constants.mjs
const NO_ACTIVE_VALUE = Symbol('none');
const INITIAL_LAST_HIGHLIGHT = {
  value: NO_ACTIVE_VALUE,
  index: -1
};
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/direction-context/DirectionContext.mjs
var DirectionContext = __webpack_require__(26246);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/combobox/root/AriaCombobox.mjs
'use client';








































/**
 * @internal
 */

function AriaCombobox(props) {
  const {
    id: idProp,
    onOpenChangeComplete: onOpenChangeCompleteProp,
    defaultSelectedValue = null,
    selectedValue: selectedValueProp,
    onSelectedValueChange,
    defaultInputValue: defaultInputValueProp,
    inputValue: inputValueProp,
    open: openProp,
    defaultOpen = false,
    selectionMode,
    onItemHighlighted: onItemHighlightedProp,
    name: nameProp,
    form,
    disabled: disabledProp = false,
    readOnly = false,
    required = false,
    inputRef: inputRefProp,
    grid = false,
    items,
    filteredItems: filteredItemsProp,
    filter: filterProp,
    openOnInputClick = true,
    autoHighlight = false,
    keepHighlight = false,
    highlightItemOnHover = true,
    loopFocus = true,
    itemToStringLabel,
    itemToStringValue,
    isItemEqualToValue = itemEquality/* .defaultItemEquality */.jd,
    virtualized = false,
    inline: inlineProp = false,
    fillInputOnItemPress = true,
    modal = false,
    limit = -1,
    autoComplete = 'list',
    formAutoComplete,
    locale,
    submitOnItemClick = false
  } = props;
  const {
    clearErrors
  } = useFormContext();
  const {
    setDirty,
    validityData,
    setFilled,
    name: fieldName,
    disabled: fieldDisabled,
    setTouched,
    setFocused,
    validationMode,
    validation
  } = (0,FieldRootContext/* .useFieldRootContext */.V$)();
  const direction = (0,DirectionContext/* .useDirection */.j)();
  const id = (0,useLabelableId/* .useLabelableId */.l)({
    id: idProp
  });
  const collatorFilter = useCoreFilter({
    locale
  });
  const [queryChangedAfterOpen, setQueryChangedAfterOpen] = react.useState(false);
  const [closeQuery, setCloseQuery] = react.useState(null);
  const listRef = react.useRef([]);
  const labelsRef = react.useRef([]);
  const popupRef = react.useRef(null);
  const inputRef = react.useRef(null);
  const startDismissRef = react.useRef(null);
  const endDismissRef = react.useRef(null);
  const emptyRef = react.useRef(null);
  const keyboardActiveRef = react.useRef(true);
  const hadInputClearRef = react.useRef(false);
  const chipsContainerRef = react.useRef(null);
  const clearRef = react.useRef(null);
  const selectionEventRef = react.useRef(null);
  const lastHighlightRef = react.useRef(INITIAL_LAST_HIGHLIGHT);
  const pendingQueryHighlightRef = react.useRef(null);

  /**
   * Contains the currently visible list of item values post-filtering.
   */
  const valuesRef = react.useRef([]);
  /**
   * The item element that received the last `pointerdown`, used to detect whether a
   * `mouseup` on an item belongs to a drag-select gesture that started elsewhere.
   */
  const pointerDownItemRef = react.useRef(null);
  const disabled = fieldDisabled || disabledProp;
  const name = fieldName ?? nameProp;
  const multiple = selectionMode === 'multiple';
  const single = selectionMode === 'single';
  const hasInputValue = inputValueProp !== undefined || defaultInputValueProp !== undefined;
  const hasItems = items !== undefined;
  const hasFilteredItemsProp = filteredItemsProp !== undefined;
  let autoHighlightMode;
  if (autoHighlight === 'always') {
    autoHighlightMode = 'always';
  } else {
    autoHighlightMode = autoHighlight ? 'input-change' : false;
  }
  const [selectedValue, setSelectedValueUnwrapped] = useControlled({
    controlled: selectedValueProp,
    default: multiple ? defaultSelectedValue ?? empty/* .EMPTY_ARRAY */.Ml : defaultSelectedValue,
    name: 'Combobox',
    state: 'selectedValue'
  });
  const filter = react.useMemo(() => {
    if (filterProp === null) {
      return () => true;
    }
    if (filterProp !== undefined) {
      return filterProp;
    }
    // `shouldBypassFiltering` already empties the query whenever a single selection's label
    // matches it exactly, so the filter never needs a selection-aware variant here.
    return (0,utils/* .createCollatorItemFilter */.I2)(collatorFilter, itemToStringLabel);
  }, [filterProp, collatorFilter, itemToStringLabel]);

  // If neither inputValue nor defaultInputValue are provided, derive it from the
  // selected value for single mode so the input reflects the selection on mount.
  const initialDefaultInputValue = (0,utils_useRefWithInit/* .useRefWithInit */.j)(() => {
    if (hasInputValue) {
      return defaultInputValueProp ?? '';
    }
    if (single) {
      return (0,resolveValueLabel/* .stringifyAsLabel */.yg)(selectedValue, itemToStringLabel);
    }
    return '';
  }).current;
  const [inputValue, setInputValueUnwrapped] = useControlled({
    controlled: inputValueProp,
    default: initialDefaultInputValue,
    name: 'Combobox',
    state: 'inputValue'
  });
  const [open, setOpenUnwrapped] = useControlled({
    controlled: openProp,
    default: defaultOpen,
    name: 'Combobox',
    state: 'open'
  });
  const isGrouped = (0,resolveValueLabel/* .isGroupedItems */.Li)(items);
  const query = closeQuery ?? String(inputValue).trim();
  const selectedLabelString = single ? (0,resolveValueLabel/* .stringifyAsLabel */.yg)(selectedValue, itemToStringLabel) : '';
  const shouldBypassFiltering = single && !queryChangedAfterOpen && query !== '' && selectedLabelString.length === query.length && collatorFilter.contains(selectedLabelString, query);
  const filterQuery = shouldBypassFiltering ? '' : query;
  const shouldIgnoreExternalFiltering = hasItems && hasFilteredItemsProp && shouldBypassFiltering;
  const flatItems = react.useMemo(() => {
    if (!items) {
      return empty/* .EMPTY_ARRAY */.Ml;
    }
    if (isGrouped) {
      return items.flatMap(group => group.items);
    }
    return items;
  }, [items, isGrouped]);
  const filteredItems = react.useMemo(() => {
    if (filteredItemsProp && !shouldIgnoreExternalFiltering) {
      return filteredItemsProp;
    }
    if (!items) {
      return empty/* .EMPTY_ARRAY */.Ml;
    }
    if (isGrouped) {
      const groupedItems = items;
      const resultingGroups = [];
      let currentCount = 0;
      for (const group of groupedItems) {
        if (limit > -1 && currentCount >= limit) {
          break;
        }
        const remainingLimit = limit > -1 ? limit - currentCount : Infinity;
        const itemsToTake = filterQuery === '' ? group.items.slice(0, remainingLimit) : [];
        if (filterQuery !== '') {
          for (const item of group.items) {
            if (itemsToTake.length >= remainingLimit) {
              break;
            }
            if (filter(item, filterQuery, itemToStringLabel)) {
              itemsToTake.push(item);
            }
          }
        }
        if (itemsToTake.length > 0) {
          const newGroup = {
            ...group,
            items: itemsToTake
          };
          resultingGroups.push(newGroup);
          currentCount += itemsToTake.length;
        }
      }
      return resultingGroups;
    }
    if (filterQuery === '') {
      return limit > -1 ? flatItems.slice(0, limit) :
      // The cast here is done as `flatItems` is readonly.
      // valuesRef.current, a mutable ref, can be set to `flatFilteredItems`, which may
      // reference this exact readonly value, creating a mutation risk.
      // However, <Combobox.Item> can never mutate this value as the mutating effect
      // bails early when `items` is provided, and this is only ever returned
      // when `items` is provided due to the early return at the top of this hook.
      flatItems;
    }
    const limitedItems = [];
    for (const item of flatItems) {
      if (limit > -1 && limitedItems.length >= limit) {
        break;
      }
      if (filter(item, filterQuery, itemToStringLabel)) {
        limitedItems.push(item);
      }
    }
    return limitedItems;
  }, [filteredItemsProp, shouldIgnoreExternalFiltering, items, isGrouped, filterQuery, limit, filter, itemToStringLabel, flatItems]);
  const flatFilteredItems = react.useMemo(() => {
    if (isGrouped) {
      const groups = filteredItems;
      return groups.flatMap(g => g.items);
    }
    return filteredItems;
  }, [filteredItems, isGrouped]);
  const store = (0,utils_useRefWithInit/* .useRefWithInit */.j)(() => {
    // An inline list open on the first render never gets a closed pass of the closed-state
    // sync effect below, and `items`-prop lists don't self-register their index the way
    // individually rendered `<Combobox.Item>`s do, so the selected item was never highlighted.
    // Seeding the index here lets list navigation highlight and scroll to the selection on
    // mount. Computed once by construction, so a selection or list that resolves after mount
    // doesn't move an existing highlight or scroll the list away.
    let initialSelectedIndex = null;
    if (inlineProp && open && hasItems && selectionMode !== 'none') {
      initialSelectedIndex = (0,itemEquality/* .findSelectionIndex */.Gu)(flatFilteredItems, selectedValue, isItemEqualToValue, multiple);
    }
    return new Store({
      id,
      labelId: undefined,
      selectedValue,
      open,
      items,
      selectionMode,
      listRef,
      labelsRef,
      popupRef,
      emptyRef,
      inputRef,
      startDismissRef,
      endDismissRef,
      keyboardActiveRef,
      chipsContainerRef,
      clearRef,
      valuesRef,
      pointerDownItemRef,
      selectionEventRef,
      name,
      form,
      disabled,
      readOnly,
      required,
      grid,
      virtualized,
      openOnInputClick,
      itemToStringLabel,
      isItemEqualToValue,
      modal,
      autoHighlight: autoHighlightMode,
      submitOnItemClick,
      hasInputValue,
      mounted: false,
      forceMounted: false,
      transitionStatus: 'idle',
      inline: inlineProp,
      activeIndex: null,
      selectedIndex: initialSelectedIndex,
      popupProps: {},
      listProps: {},
      inputProps: {},
      triggerProps: {},
      itemProps: empty/* .EMPTY_OBJECT */.t0,
      positionerElement: null,
      listElement: null,
      popupId: undefined,
      triggerElement: null,
      inputElement: null,
      inputGroupElement: null,
      popupSide: null,
      openMethod: null,
      inputInsidePopup: true,
      // Avoid duplicate names in the server HTML. Popup inputs aren't rendered
      // until after hydration, so the hidden input takes over then if needed.
      inputOwnsFormValue: selectionMode === 'none',
      // Placeholder callbacks replaced on first render
      onOpenChangeComplete: empty/* .NOOP */.tE,
      setOpen: empty/* .NOOP */.tE,
      setInputValue: empty/* .NOOP */.tE,
      setSelectedValue: empty/* .NOOP */.tE,
      setIndices: empty/* .NOOP */.tE,
      handleSelection: empty/* .NOOP */.tE,
      forceMount: empty/* .NOOP */.tE,
      requestSubmit: empty/* .NOOP */.tE
    });
  }).current;
  const fieldRawValue = selectionMode === 'none' ? inputValue : selectedValue;
  const fieldStringValue = react.useMemo(() => {
    if (selectionMode === 'none') {
      return fieldRawValue;
    }
    if (Array.isArray(selectedValue)) {
      return selectedValue.map(value => (0,resolveValueLabel/* .stringifyAsValue */.T)(value, itemToStringValue));
    }
    return (0,resolveValueLabel/* .stringifyAsValue */.T)(selectedValue, itemToStringValue);
  }, [fieldRawValue, itemToStringValue, selectionMode, selectedValue]);
  const onItemHighlighted = (0,utils_useStableCallback/* .useStableCallback */.K)(onItemHighlightedProp);
  const onOpenChangeComplete = (0,utils_useStableCallback/* .useStableCallback */.K)(onOpenChangeCompleteProp);
  const activeIndex = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.activeIndex */.T.activeIndex);
  const selectedIndex = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.selectedIndex */.T.selectedIndex);
  const positionerElement = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.positionerElement */.T.positionerElement);
  const listElement = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.listElement */.T.listElement);
  const triggerElement = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.triggerElement */.T.triggerElement);
  const inputElement = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.inputElement */.T.inputElement);
  const inputGroupElement = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.inputGroupElement */.T.inputGroupElement);
  const inline = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.inline */.T.inline);
  const inputInsidePopup = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.inputInsidePopup */.T.inputInsidePopup);
  const inputOwnsFormValue = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.inputOwnsFormValue */.T.inputOwnsFormValue);
  const triggerRef = (0,useValueAsRef/* .useValueAsRef */.u)(triggerElement);
  const {
    mounted,
    setMounted,
    transitionStatus
  } = (0,internals_useTransitionStatus/* .useTransitionStatus */.$)(open);
  const {
    openMethod,
    triggerProps
  } = useOpenInteractionType(open);
  const getStringifiedValueForForm = (0,utils_useStableCallback/* .useStableCallback */.K)(() => fieldStringValue);
  useRegisterFieldControl(inputInsidePopup ? triggerRef : inputRef, id, fieldRawValue, getStringifiedValueForForm, !disabled, nameProp);
  const forceMount = (0,utils_useStableCallback/* .useStableCallback */.K)(() => {
    if (items) {
      // Ensure typeahead works on a closed list.
      labelsRef.current = flatFilteredItems.map(item => (0,resolveValueLabel/* .stringifyAsLabel */.yg)(item, itemToStringLabel));
    } else {
      store.set('forceMounted', true);
    }
  });

  /**
   * Emits `onItemHighlighted` for the item at `index`, or clears the highlight when `index` is `-1`
   * (a no-op if nothing was highlighted). Keeps `lastHighlightRef` in sync with what was emitted.
   */
  const emitHighlight = (0,utils_useStableCallback/* .useStableCallback */.K)((value, index, type) => {
    if (index === -1) {
      if (lastHighlightRef.current === INITIAL_LAST_HIGHLIGHT) {
        return;
      }
      lastHighlightRef.current = INITIAL_LAST_HIGHLIGHT;
    } else {
      lastHighlightRef.current = {
        value,
        index
      };
    }
    onItemHighlighted(value, (0,createBaseUIEventDetails/* .createGenericEventDetails */.M)(type, undefined, {
      index
    }));
  });
  const setIndices = (0,utils_useStableCallback/* .useStableCallback */.K)(options => {
    store.update(options);
    const activeIndexOption = options.activeIndex;
    if (activeIndexOption === undefined) {
      return;
    }
    const type = options.type || (/* inlined export .none */"none");
    if (activeIndexOption === null) {
      emitHighlight(undefined, -1, type);
    } else {
      emitHighlight(valuesRef.current[activeIndexOption], activeIndexOption, type);
    }
  });
  const setInputValue = (0,utils_useStableCallback/* .useStableCallback */.K)((next, eventDetails) => {
    hadInputClearRef.current = eventDetails.reason === reason_parts/* .inputClear */.qs;
    props.onInputValueChange?.(next, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }

    // If user is typing, ensure we don't auto-highlight on open due to a race
    // with the post-open effect that sets this flag.
    if (eventDetails.reason === reason_parts/* .inputChange */.pf) {
      // A controlled popup may ignore a close request. Resuming input proves the popup
      // is remaining open, so release the query captured for an exit animation.
      if (open && closeQuery !== null) {
        setCloseQuery(null);
      }
      const event = eventDetails.event;
      const inputType = event.inputType;
      // Treat composition commits as typed input; autofill may omit `inputType` or
      // report `insertReplacementText`.
      const isTypedInput = event.type === 'compositionend' || inputType != null && inputType !== '' && inputType !== 'insertReplacementText';
      if (isTypedInput) {
        const hasQuery = next.trim() !== '';
        if (hasQuery) {
          setQueryChangedAfterOpen(true);
        }
        // Defer index updates until after the filtered items have been derived to ensure
        // `onItemHighlighted` receives the latest item.
        pendingQueryHighlightRef.current = {
          hasQuery
        };

        // Virtualized lists own their scroller. Reset regular lists directly so a stale
        // composite registry cannot select a reordered item and scrolling cannot escape
        // the popup.
        const list = store.state.listElement;
        if (!store.state.virtualized && list) {
          const popup = popupRef.current;
          for (const ancestor of (0,floating_ui_utils_dom/* .getOverflowAncestors */.v9)(list.firstElementChild ?? list)) {
            if (!(0,floating_ui_utils_dom/* .isHTMLElement */.sb)(ancestor) || (popup ? !(0,shadowDom/* .contains */.gR)(popup, ancestor) : ancestor.getAttribute('role') === 'dialog')) {
              break;
            }
            if (scrollable_isScrollableY(ancestor)) {
              ancestor.scrollTop = 0;
              break;
            }
          }
        }
        if (hasQuery && autoHighlightMode && store.state.activeIndex == null && (open || inline)) {
          store.set('activeIndex', 0);
        }
      }
    } else if (eventDetails.reason === reason_parts/* .inputClear */.qs && next === '' && store.state.inputInsidePopup) {
      // A programmatic clear of an active query (e.g. after selecting an item with the
      // input inside the popup): restore the highlight to the selected item.
      pendingQueryHighlightRef.current = {
        hasQuery: false,
        selection: true
      };
    }
    setInputValueUnwrapped(next);
  });
  const setOpen = (0,utils_useStableCallback/* .useStableCallback */.K)((nextOpen, eventDetails) => {
    if (open === nextOpen) {
      return;
    }

    // If the `Empty` component is not used, the positioner or popup should be hidden
    // with CSS. In this case, allow the Escape key to bubble to close a parent popup
    // if there are no items to show.
    if (eventDetails.reason === reason_parts/* .escapeKey */.jv && hasItems && flatFilteredItems.length === 0 && !emptyRef.current) {
      eventDetails.allowPropagation();
    }
    props.onOpenChange?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }

    // If reopening interrupts the close animation, handleUnmount won't run to clear the
    // frozen closeQuery and pending popup input.
    if (nextOpen && inputInsidePopup && !inline && closeQuery !== null) {
      setQueryChangedAfterOpen(false);
      setCloseQuery(null);
      if (inputValue !== '' && eventDetails.reason !== reason_parts/* .inputChange */.pf) {
        setInputValue('', (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .inputClear */.qs, eventDetails.event));
      }
    }
    if (!nextOpen && queryChangedAfterOpen) {
      if (single) {
        if (!inline) {
          setCloseQuery(query);
        }
        // Avoid a flicker when closing the popup with an empty query.
        if (query === '') {
          setQueryChangedAfterOpen(false);
        }
      } else if (multiple) {
        if (!inline) {
          // Freeze the current query so filtering remains stable while exiting.
          setCloseQuery(query);
        }
        if (inputInsidePopup) {
          setIndices({
            activeIndex: null
          });
        }

        // Clear the input immediately on close while retaining filtering via closeQuery for exit animations
        // if the input is outside the popup. When the input is inside the popup, defer the clear until
        // unmount so the filtered list doesn't flash to unfiltered during the exit animation.
        if (!inputInsidePopup || inline) {
          setInputValue('', (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .inputClear */.qs, eventDetails.event));
        }
      }
    }
    setOpenUnwrapped(nextOpen);
    if (!nextOpen && inputInsidePopup && (eventDetails.reason === reason_parts/* .focusOut */.Xn || eventDetails.reason === reason_parts/* .outsidePress */.Np)) {
      setTouched(true);
      setFocused(false);
      if (validationMode === 'onBlur') {
        const valueToValidate = selectionMode === 'none' ? inputValue : selectedValue;
        validation.commit(valueToValidate);
      }
    }
  });
  const setSelectedValue = (0,utils_useStableCallback/* .useStableCallback */.K)((nextValue, eventDetails) => {
    // Cast to `any` due to conditional value type (single vs. multiple).
    // The runtime implementation already ensures the correct value shape.
    onSelectedValueChange?.(nextValue, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    setSelectedValueUnwrapped(nextValue);
    const shouldFillInput = selectionMode === 'none' && popupRef.current && fillInputOnItemPress || single && !store.state.inputInsidePopup;
    if (shouldFillInput) {
      setInputValue((0,resolveValueLabel/* .stringifyAsLabel */.yg)(nextValue, itemToStringLabel), (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(eventDetails.reason, eventDetails.event));
    }
  });
  const handleSelection = (0,utils_useStableCallback/* .useStableCallback */.K)((event, itemValue) => {
    const targetEl = (0,shadowDom/* .getTarget */.EW)(event);
    const overrideEvent = selectionEventRef.current ?? event;
    selectionEventRef.current = null;
    const eventDetails = (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .itemPress */.Bo, overrideEvent);

    // Let the link handle the click.
    const href = targetEl?.closest('a')?.getAttribute('href');
    if (href) {
      if (href.startsWith('#')) {
        setOpen(false, eventDetails);
      }
      return;
    }
    if (multiple) {
      const currentSelectedValue = Array.isArray(selectedValue) ? selectedValue : [];
      const isCurrentlySelected = (0,itemEquality/* .selectedValueIncludes */.kJ)(currentSelectedValue, itemValue, isItemEqualToValue);
      const nextValue = isCurrentlySelected ? (0,itemEquality/* .removeItem */.Ai)(currentSelectedValue, itemValue, isItemEqualToValue) : [...currentSelectedValue, itemValue];
      setSelectedValue(nextValue, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      const wasFiltering = inputRef.current ? inputRef.current.value.trim() !== '' : false;
      if (!wasFiltering) {
        return;
      }
      if (store.state.inputInsidePopup) {
        setInputValue('', (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .inputClear */.qs, eventDetails.event));
      } else {
        setOpen(false, eventDetails);
      }
    } else {
      setSelectedValue(itemValue, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      setOpen(false, eventDetails);
    }
  });
  const requestSubmit = (0,utils_useStableCallback/* .useStableCallback */.K)(() => {
    const formElement = validation.inputRef.current?.form ?? store.state.inputElement?.form;
    if (formElement && typeof formElement.requestSubmit === 'function') {
      formElement.requestSubmit();
    }
  });
  const handleUnmount = (0,utils_useStableCallback/* .useStableCallback */.K)(() => {
    setMounted(false);
    onOpenChangeComplete?.(false);
    setQueryChangedAfterOpen(false);
    setCloseQuery(null);
    if (selectionMode === 'none') {
      setIndices({
        activeIndex: null,
        selectedIndex: null
      });
    } else {
      setIndices({
        activeIndex: null
      });
    }

    // Multiple selection mode:
    // If the user typed a filter and didn't select in multiple mode, clear the input
    // after close completes to avoid mid-exit flicker and start fresh on next open.
    if (multiple && inputRef.current && inputRef.current.value !== '' && !hadInputClearRef.current) {
      setInputValue('', (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .inputClear */.qs));
    }

    // Single selection mode:
    // - If input is rendered inside the popup, clear it so the next open is blank
    // - If input is outside the popup, sync it to the selected value
    if (single) {
      if (store.state.inputInsidePopup) {
        if (inputRef.current && inputRef.current.value !== '') {
          setInputValue('', (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .inputClear */.qs));
        }
      } else {
        const stringVal = (0,resolveValueLabel/* .stringifyAsLabel */.yg)(selectedValue, itemToStringLabel);
        if (inputRef.current && inputRef.current.value !== stringVal) {
          // If no selection was made, treat this as clearing the typed filter.
          const reason = stringVal === '' ? reason_parts/* .inputClear */.qs : (/* inlined export .none */"none");
          setInputValue(stringVal, (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason));
        }
      }
    }
  });

  // Support composing the Dialog component around an inline combobox.
  // `[role="dialog"]` is more interoperable than using a context, e.g. it can work
  // with third-party modal libraries, though the limitation is that the closest
  // `role=dialog` part must be the animated element.
  const resolvedPopupRef = react.useMemo(() => {
    if (inline && positionerElement) {
      return {
        current: positionerElement.closest('[role="dialog"]')
      };
    }
    return popupRef;
  }, [inline, positionerElement]);
  (0,internals_useOpenChangeComplete/* .useOpenChangeComplete */.v)({
    enabled: !props.actionsRef,
    open,
    ref: resolvedPopupRef,
    onComplete() {
      if (!open) {
        handleUnmount();
      }
    }
  });
  react.useImperativeHandle(props.actionsRef, () => ({
    unmount: handleUnmount
  }), [handleUnmount]);
  (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(function syncClosedState() {
    if (open) {
      return;
    }

    // State-driven (not tied to the internal event path) so controlled closes
    // also clear a pointerdown that never received a matching item mouseup.
    pointerDownItemRef.current = null;
    if (selectionMode === 'none') {
      return;
    }

    // Without `items`, look the selection up in the live registry of mounted item
    // values (the list stays mounted while closed when closed-state features need
    // it — trigger interaction and rendered-label autofill force-mount it). Mounted
    // items re-assert the index themselves when their registration moves; when
    // nothing is mounted the lookup resolves to `null` and each item re-registers
    // the index on the next open.
    const registry = hasItems ? flatItems : valuesRef.current;
    setIndices({
      selectedIndex: (0,itemEquality/* .findSelectionIndex */.Gu)(registry, selectedValue, isItemEqualToValue, multiple)
    });
  }, [open, selectedValue, selectionMode, multiple, hasItems, flatItems, isItemEqualToValue, setIndices]);
  (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (items) {
      valuesRef.current = flatFilteredItems;
      listRef.current.length = flatFilteredItems.length;
    }
  }, [items, flatFilteredItems]);
  (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    const pendingHighlight = pendingQueryHighlightRef.current;
    if (pendingHighlight) {
      // A directly rendered list remains visible when the popup state is closed, while a
      // kept-mounted Positioner is hidden and should stay inert.
      const listIsNavigable = open || inline || store.state.positionerElement?.hidden === false;
      if (pendingHighlight.hasQuery) {
        if (autoHighlightMode && listIsNavigable) {
          store.set('activeIndex', 0);
        }
        pendingQueryHighlightRef.current = null;
      } else if (String(inputValue).trim() === '') {
        // Only handle the clear once it has committed (a controlled input may reject it),
        // so a restore cannot fire while a query is still active.
        pendingQueryHighlightRef.current = null;
        if (listIsNavigable) {
          const clearedBySelection = pendingHighlight.selection;
          if (autoHighlightMode === 'always' && !clearedBySelection && store.state.selectionMode === 'none') {
            // There is no selection to restore in Autocomplete. Keep the first-item reset
            // synchronous so list navigation sees it before a directly rendered list closes.
            store.set('activeIndex', 0);
          }

          // Items re-mounted by the clear publish their composite indices in a follow-up
          // commit, so the item registries are mid-update here. Defer past React's cascade.
          queueMicrotask(() => {
            if (!store.state.open && !store.state.inline || inputRef.current && inputRef.current.value.trim() !== '') {
              return;
            }

            // Return the highlight to the selected item, the same anchor the popup uses
            // when it first opens. Read the selection through the store so consumers can
            // pass an inline `isItemEqualToValue` or a fresh `selectedValue` array without
            // re-running this effect on every render.
            const currentSelectedValue = store.state.selectedValue;
            const isMultiple = store.state.selectionMode === 'multiple';
            const lastSelectedValue = isMultiple && Array.isArray(currentSelectedValue) ? currentSelectedValue[currentSelectedValue.length - 1] : currentSelectedValue;
            const hasSelection = store.state.selectionMode !== 'none' && lastSelectedValue != null;
            if (hasSelection || clearedBySelection) {
              const registry = hasItems || hasFilteredItemsProp ? flatFilteredItems : valuesRef.current;
              // A selection that is no longer in the list drops the highlight rather than
              // leaving it on whichever item now occupies that index.
              store.set('activeIndex', hasSelection ? (0,itemEquality/* .findSelectionIndex */.Gu)(registry, currentSelectedValue, store.state.isItemEqualToValue, isMultiple) : null);
            } else if (autoHighlightMode === 'always') {
              store.set('activeIndex', 0);
            }
          });
        }
      }
    }
    if (!open && !inline) {
      return;
    }
    const shouldUseFlatFilteredItems = hasItems || hasFilteredItemsProp;
    const candidateItems = shouldUseFlatFilteredItems ? flatFilteredItems : valuesRef.current;
    const storeActiveIndex = store.state.activeIndex;
    if (storeActiveIndex == null) {
      if (autoHighlightMode === 'always' && candidateItems.length > 0) {
        store.set('activeIndex', 0);
        return;
      }
      emitHighlight(undefined, -1, (/* inlined export .none */"none"));
      return;
    }
    if (storeActiveIndex >= candidateItems.length) {
      emitHighlight(undefined, -1, (/* inlined export .none */"none"));
      store.set('activeIndex', null);
      return;
    }
    const itemValue = candidateItems[storeActiveIndex];
    const previouslyHighlightedItemValue = lastHighlightRef.current.value;
    const isSameItem = previouslyHighlightedItemValue !== NO_ACTIVE_VALUE && (0,itemEquality/* .compareItemEquality */.tl)(itemValue, previouslyHighlightedItemValue, store.state.isItemEqualToValue);
    if (lastHighlightRef.current.index !== storeActiveIndex || !isSameItem) {
      emitHighlight(itemValue, storeActiveIndex, (/* inlined export .none */"none"));
    }
  }, [activeIndex, autoHighlightMode, emitHighlight, hasFilteredItemsProp, hasItems, flatFilteredItems, inline, open, store,
  // Reruns the effect when the query changes without affecting the deps above, such as
  // clearing the input when no items are filtered out (individually rendered items).
  inputValue]);
  (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (selectionMode === 'none') {
      setFilled(String(inputValue) !== '');
      return;
    }
    setFilled(multiple ? Array.isArray(selectedValue) && selectedValue.length > 0 : selectedValue != null);
  }, [setFilled, selectionMode, inputValue, selectedValue, multiple]);

  // Ensures that the active index is not set to 0 when the list is empty.
  // This avoids needing to press ArrowDown twice under certain conditions.
  react.useEffect(() => {
    if (hasItems && autoHighlightMode && flatFilteredItems.length === 0) {
      setIndices({
        activeIndex: null
      });
    }
  }, [hasItems, autoHighlightMode, flatFilteredItems.length, setIndices]);
  function isSelectedValueDirty(value) {
    const initialValue = validityData.initialValue;
    if (Array.isArray(value) && Array.isArray(initialValue)) {
      return !areArraysEqual(value, initialValue, (itemValue, initialItemValue) => (0,itemEquality/* .compareItemEquality */.tl)(itemValue, initialItemValue, isItemEqualToValue));
    }
    return value !== initialValue;
  }
  useValueChanged(query, () => {
    if (!open || query === '' || query === String(initialDefaultInputValue)) {
      return;
    }
    setQueryChangedAfterOpen(true);
  });
  function syncInputToSelectedLabel() {
    const nextInputValue = (0,resolveValueLabel/* .stringifyAsLabel */.yg)(selectedValue, itemToStringLabel);
    if (inputValue !== nextInputValue) {
      setInputValue(nextInputValue, (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)((/* inlined export .none */"none")));
    }
  }
  useValueChanged(selectedValue, () => {
    if (selectionMode === 'none') {
      return;
    }
    clearErrors(name);
    setDirty(isSelectedValueDirty(selectedValue));
    validation.change(selectedValue);
    if (single && !hasInputValue && !inputInsidePopup) {
      syncInputToSelectedLabel();
    }
  });
  useValueChanged(inputValue, () => {
    if (selectionMode !== 'none') {
      return;
    }
    clearErrors(name);
    setDirty(inputValue !== validityData.initialValue);
    validation.change(inputValue);
  });
  useValueChanged(items, () => {
    if (!single || hasInputValue || inputInsidePopup || queryChangedAfterOpen) {
      return;
    }
    syncInputToSelectedLabel();
  });
  const floatingRootContext = useFloatingRootContext({
    open: inline ? true : open,
    onOpenChange: setOpen,
    elements: {
      reference: inputInsidePopup ? triggerElement : inputElement,
      floating: positionerElement
    }
  });
  const ariaHasPopup = grid ? 'grid' : 'listbox';
  // An inline list isn't gated on `open`: it renders for as long as it's in the tree, so the
  // combobox is permanently expanded even while the internal open state is `false`.
  const expanded = open || inline;
  const ariaExpanded = expanded ? 'true' : 'false';
  const role = react.useMemo(() => {
    const isPlainInput = inputElement?.tagName === 'INPUT';
    // During SSR and initial hydration, the input ref is not available yet.
    // Assume an input-like control so combobox ARIA attributes are present.
    const shouldTreatAsInput = inputElement == null || isPlainInput;
    // A non-input control only takes on combobox semantics while the list is exposed, which for
    // an inline list is the whole time.
    const shouldApplyAria = shouldTreatAsInput || expanded;
    const reference = shouldTreatAsInput ? {
      autoComplete: 'off',
      spellCheck: 'false',
      autoCorrect: 'off',
      autoCapitalize: 'none'
    } : {};
    if (shouldApplyAria) {
      reference.role = 'combobox';
      reference['aria-expanded'] = ariaExpanded;
      reference['aria-haspopup'] = ariaHasPopup;
      reference['aria-controls'] = expanded ? listElement?.id : undefined;
      reference['aria-autocomplete'] = autoComplete;
    }
    return {
      reference,
      floating: {
        role: 'presentation'
      }
    };
  }, [inputElement, expanded, ariaExpanded, ariaHasPopup, listElement?.id, autoComplete]);
  const click = (0,useClick/* .useClick */.k)(floatingRootContext, {
    enabled: !readOnly && !disabled && openOnInputClick,
    event: 'mousedown-only',
    toggle: false,
    // Apply a small delay for touch to let mobile viewport/keyboard positioning settle.
    // This avoids top-bottom flip flickers if the preferred position is "top" when first tapping.
    touchOpenDelay: inputInsidePopup ? 0 : 100,
    reason: reason_parts/* .inputPress */._J
  });
  const dismiss = useDismiss(floatingRootContext, {
    enabled: !readOnly && !disabled && !inline,
    outsidePressEvent: {
      mouse: 'sloppy',
      // The visual viewport (affected by the mobile software keyboard) can be
      // somewhat small. The user may want to scroll the screen to see more of
      // the popup.
      touch: 'intentional'
    },
    // Without a popup, let the Escape key bubble the event up to other popups' handlers.
    bubbles: inline ? true : undefined,
    outsidePress(event) {
      const target = (0,shadowDom/* .getTarget */.EW)(event);
      return !(0,shadowDom/* .contains */.gR)(triggerElement, target) && !(0,shadowDom/* .contains */.gR)(clearRef.current, target) && !(0,shadowDom/* .contains */.gR)(chipsContainerRef.current, target) && !(0,shadowDom/* .contains */.gR)(inputGroupElement, target);
    }
  });
  const listNavigation = useListNavigation(floatingRootContext, {
    enabled: !readOnly && !disabled,
    id,
    listRef,
    activeIndex,
    selectedIndex,
    virtual: true,
    loopFocus,
    allowEscape: loopFocus && !autoHighlightMode,
    focusItemOnOpen: queryChangedAfterOpen || selectionMode === 'none' && !autoHighlightMode ? false : 'auto',
    focusItemOnHover: highlightItemOnHover,
    resetOnPointerLeave: !keepHighlight,
    orientation: grid ? 'horizontal' : undefined,
    rtl: direction === 'rtl',
    disabledIndices: empty/* .EMPTY_ARRAY */.Ml,
    grid: grid ? gridNavigation : undefined,
    onNavigate(nextActiveIndex, event) {
      // Retain the highlight only while actually transitioning out or closed.
      if (!event && !open || transitionStatus === 'ending') {
        return;
      }
      if (!event) {
        setIndices({
          activeIndex: nextActiveIndex
        });
      } else {
        setIndices({
          activeIndex: nextActiveIndex,
          type: keyboardActiveRef.current ? reason_parts/* .keyboard */.QJ : reason_parts/* .pointer */.Wn
        });
      }
    }
  });
  const inputProps = react.useMemo(() => (0,mergeProps/* .mergeProps */.v6)(listNavigation.reference, {
    onKeyDown(event) {
      // In grid mode the navigation hook treats ArrowLeft/ArrowRight as horizontal
      // grid movement. When the input has focus and no item is highlighted the user
      // is still editing the query, so let the input keep its native caret behavior.
      if (grid && store.state.activeIndex == null && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
        event.preventBaseUIHandler();
      }
    }
  }, dismiss.reference, click.reference, role.reference), [listNavigation.reference, dismiss.reference, click.reference, role.reference, grid, store]);
  const popupProps = react.useMemo(() => (0,mergeProps/* .mergeProps */.v6)(FOCUSABLE_POPUP_PROPS, dismiss.floating), [dismiss.floating]);
  const listProps = react.useMemo(() => (0,mergeProps/* .mergeProps */.v6)(listNavigation.floating, role.floating), [listNavigation.floating, role.floating]);
  const itemProps = react.useMemo(() => {
    const listNavigationItemProps = listNavigation.item;
    if (!listNavigationItemProps) {
      return empty/* .EMPTY_OBJECT */.t0;
    }

    // Combobox keeps focus on the input; item focus would incorrectly sync
    // list navigation state from DOM focus.
    return {
      ...listNavigationItemProps,
      onFocus: undefined
    };
  }, [listNavigation.item]);
  useOnFirstRender(() => {
    store.update({
      inline: inlineProp,
      popupProps,
      listProps,
      inputProps,
      triggerProps,
      itemProps,
      setOpen,
      setInputValue,
      setSelectedValue,
      setIndices,
      handleSelection,
      forceMount,
      requestSubmit,
      onOpenChangeComplete
    });
  });
  (0,utils_useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    store.update({
      id,
      selectedValue,
      open,
      mounted,
      transitionStatus,
      items,
      inline: inlineProp,
      popupProps,
      listProps,
      inputProps,
      triggerProps,
      openMethod,
      itemProps,
      selectionMode,
      name,
      form,
      disabled,
      readOnly,
      required,
      grid,
      virtualized,
      openOnInputClick,
      itemToStringLabel,
      modal,
      autoHighlight: autoHighlightMode,
      isItemEqualToValue,
      submitOnItemClick,
      hasInputValue,
      inputOwnsFormValue: selectionMode === 'none' && (inlineProp || !store.state.inputInsidePopup)
    });
  }, [store, id, selectedValue, open, mounted, transitionStatus, items, popupProps, listProps, inputProps, itemProps, openMethod, triggerProps, selectionMode, name, disabled, readOnly, required, grid, virtualized, openOnInputClick, itemToStringLabel, modal, isItemEqualToValue, submitOnItemClick, hasInputValue, inlineProp, autoHighlightMode, form]);
  const hiddenInputRef = (0,useMergedRefs/* .useMergedRefs */.a)(inputRefProp, validation.inputRef);
  const itemsContextValue = react.useMemo(() => ({
    query,
    hasItems,
    filteredItems,
    flatFilteredItems
  }), [query, hasItems, filteredItems, flatFilteredItems]);
  const serializedValue = react.useMemo(() => {
    if (Array.isArray(fieldRawValue)) {
      return '';
    }
    return (0,resolveValueLabel/* .stringifyAsValue */.T)(fieldRawValue, itemToStringValue);
  }, [fieldRawValue, itemToStringValue]);
  const hasMultipleSelection = multiple && Array.isArray(selectedValue) && selectedValue.length > 0;
  const hiddenInputName = multiple || selectionMode === 'none' && inputOwnsFormValue ? undefined : name;
  const hiddenInputs = react.useMemo(() => {
    if (!multiple || !Array.isArray(selectedValue) || !name) {
      return null;
    }
    return selectedValue.map(value => {
      const currentSerializedValue = (0,resolveValueLabel/* .stringifyAsValue */.T)(value, itemToStringValue);
      return /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
        type: "hidden",
        form: form,
        name: name,
        value: currentSerializedValue,
        disabled: disabled
      }, currentSerializedValue);
    });
  }, [multiple, selectedValue, form, name, itemToStringValue, disabled]);
  const children = /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [props.children, /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
      ...validation.getValidationProps(disabled, {
        // Move focus when the hidden input is focused.
        onFocus() {
          if (inputInsidePopup) {
            triggerElement?.focus();
            return;
          }
          (inputRef.current || triggerElement)?.focus();
        },
        // Handle browser autofill.
        onChange(event) {
          // Workaround for https://github.com/react/react/issues/9023
          if (event.nativeEvent.defaultPrevented || disabled || readOnly) {
            return;
          }
          const nextValue = event.currentTarget.value;
          const nextValueLower = nextValue.toLowerCase();
          const details = (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)((/* inlined export .none */"none"), event.nativeEvent);
          const findSerializedMatchIndex = () => valuesRef.current.findIndex(candidate => (0,resolveValueLabel/* .stringifyAsValue */.T)(candidate, itemToStringValue).toLowerCase() === nextValueLower || (0,resolveValueLabel/* .stringifyAsLabel */.yg)(candidate, itemToStringLabel).toLowerCase() === nextValueLower);
          function handleChange() {
            // Browser autofill only writes a single scalar value.
            if (multiple) {
              return;
            }
            if (selectionMode === 'none') {
              setInputValue(nextValue, details);
              return;
            }

            // Preserve the original serialized matching, then fall back to rendered text,
            // which browsers can autofill for primitive values like `value="US">United States`.
            let matchingIndex = findSerializedMatchIndex();
            if (matchingIndex === -1) {
              matchingIndex = valuesRef.current.findIndex((_, index) => {
                const renderedLabel = labelsRef.current[index];
                return renderedLabel != null && renderedLabel.toLowerCase() === nextValueLower;
              });
            }
            const matchingValue = matchingIndex === -1 ? undefined : valuesRef.current[matchingIndex];
            if (matchingValue != null) {
              // `setSelectedValue` may be canceled by `onValueChange`; rely on
              // `useValueChanged` to mark the field dirty and run validation only
              // when the value actually changes.
              setSelectedValue?.(matchingValue, details);
            }
          }

          // Only single-selection autofill matches against the registered values/labels.
          // `multiple` ignores autofill and `none` just writes the input value, so avoid the
          // sticky `forceMounted` mount (which never resets) for those modes.
          if (single) {
            forceMount();
            if (items && findSerializedMatchIndex() === -1) {
              // `forceMount` only refreshes the derived labels for the `items` prop. When
              // serialized matching misses, also mount the list so rendered labels (which can
              // differ from the serialized values) are registered for autofill matching.
              store.set('forceMounted', true);
            }
          }
          queueMicrotask(handleChange);
        }
      }),
      id: id && hiddenInputName == null ? `${id}-hidden-input` : undefined,
      form: form,
      name: hiddenInputName,
      autoComplete: formAutoComplete,
      disabled: disabled,
      required: required && !hasMultipleSelection,
      readOnly: readOnly,
      value: serializedValue,
      ref: hiddenInputRef,
      style: hiddenInputName ? visuallyHidden/* .visuallyHiddenInput */.a : visuallyHidden/* .visuallyHidden */.Q,
      tabIndex: -1,
      "aria-hidden": true,
      suppressHydrationWarning: true
    }), hiddenInputs]
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ComboboxRootContext/* .ComboboxRootContext.Provider */.vx.Provider, {
    value: store,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ComboboxRootContext/* .ComboboxFloatingContext.Provider */.Hw.Provider, {
      value: floatingRootContext,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ComboboxRootContext/* .ComboboxHasItemsContext.Provider */.XD.Provider, {
        value: hasItems,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ComboboxRootContext/* .ComboboxDerivedItemsContext.Provider */.kN.Provider, {
          value: itemsContextValue,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ComboboxRootContext/* .ComboboxInputValueContext.Provider */.KR.Provider, {
            value: inputValue,
            children: children
          })
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/combobox/root/ComboboxRoot.mjs
'use client';




/**
 * Groups all parts of the combobox.
 * Doesn't render its own HTML element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */

function ComboboxRoot(props) {
  const {
    multiple = false,
    defaultValue,
    value,
    onValueChange,
    autoComplete,
    ...other
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(AriaCombobox, {
    ...other,
    selectionMode: multiple ? 'multiple' : 'single',
    selectedValue: value,
    defaultSelectedValue: defaultValue,
    onSelectedValueChange: onValueChange,
    formAutoComplete: autoComplete
  });
}

},
60598(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _base_ui_utils_formatErrorMessage__rspack_import_1 = __webpack_require__(98103);
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
'use client';



const ComboboxRootContext = /*#__PURE__*/react__rspack_import_0.createContext(undefined);
if (false) {}
const ComboboxFloatingContext = /*#__PURE__*/react__rspack_import_0.createContext(undefined);
if (false) {}
const ComboboxDerivedItemsContext = /*#__PURE__*/react__rspack_import_0.createContext(undefined);
if (false) {}
const ComboboxHasItemsContext = /*#__PURE__*/react__rspack_import_0.createContext(false);
// `inputValue` can't be placed in the store.
// https://github.com/mui/base-ui/issues/2703
if (false) {}
const ComboboxInputValueContext = /*#__PURE__*/react__rspack_import_0.createContext('');
if (false) {}
function useComboboxRootContext() {
  const context = react__rspack_import_0.useContext(ComboboxRootContext);
  if (!context) {
    throw new Error( false ? 0 : (0,_base_ui_utils_formatErrorMessage__rspack_import_1/* ["default"] */.A)(22));
  }
  return context;
}
function useComboboxFloatingContext() {
  const context = react__rspack_import_0.useContext(ComboboxFloatingContext);
  if (!context) {
    throw new Error( false ? 0 : (0,_base_ui_utils_formatErrorMessage__rspack_import_1/* ["default"] */.A)(23));
  }
  return context;
}
function useComboboxDerivedItemsContext() {
  const context = react__rspack_import_0.useContext(ComboboxDerivedItemsContext);
  if (!context) {
    throw new Error( false ? 0 : (0,_base_ui_utils_formatErrorMessage__rspack_import_1/* ["default"] */.A)(24));
  }
  return context;
}
function useComboboxInputValueContext() {
  return react__rspack_import_0.useContext(ComboboxInputValueContext);
}
function useComboboxHasItemsContext() {
  return react__rspack_import_0.useContext(ComboboxHasItemsContext);
}
__webpack_require__.d(__webpack_exports__, {
  Dc: () => (useComboboxDerivedItemsContext),
  Ee: () => (useComboboxRootContext),
  Eg: () => (useComboboxHasItemsContext),
  dc: () => (useComboboxInputValueContext),
  ui: () => (useComboboxFloatingContext)
}, {
  Hw: ComboboxFloatingContext,
  KR: ComboboxInputValueContext,
  XD: ComboboxHasItemsContext,
  kN: ComboboxDerivedItemsContext,
  vx: ComboboxRootContext
});


},
47614(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

/**
 * Derives the default id assigned to `Combobox.Popup` when the input is rendered inside it.
 * Shared by the popup (which applies it) and the trigger (which references it via `aria-controls`)
 * so the convention only lives in one place.
 */
function getComboboxPopupId(rootId) {
  return rootId == null ? undefined : `${rootId}-popup`;
}

/**
 * Enhanced filter using Intl.Collator for more robust string matching.
 * Uses the provided `itemToStringLabel` function if available, otherwise falls back to:
 * • When `item` is an object with a `value` property, that property is used.
 * • When `item` is a primitive (e.g. `string`), it is used directly.
 */
function createCollatorItemFilter(collatorFilter, itemToStringLabel) {
  return (item, query) => {
    if (item == null) {
      return false;
    }
    return collatorFilter.contains(item, query, itemToStringLabel);
  };
}

/**
 * Enhanced filter for single selection mode using Intl.Collator that shows all items
 * when query is empty or matches the current selection, making it easier to browse options.
 */
function createSingleSelectionCollatorFilter(collatorFilter, itemToStringLabel, selectedValue) {
  return (item, query) => {
    if (item == null) {
      return false;
    }
    if (!query) {
      return true;
    }
    const selectedString = selectedValue != null ? stringifyAsLabel(selectedValue, itemToStringLabel) : '';

    // Handle case-insensitive matching consistently
    if (selectedString && collatorFilter.contains(selectedString, query) && selectedString.length === query.length) {
      return true;
    }
    return collatorFilter.contains(item, query, itemToStringLabel);
  };
}
__webpack_require__.d(__webpack_exports__, {
  I2: () => (createCollatorItemFilter),
  xj: () => (getComboboxPopupId)
});


},
81612(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _internals_itemEquality_mjs__rspack_import_1 = __webpack_require__(5815);
/* import */ var _internals_resolveValueLabel_mjs__rspack_import_0 = __webpack_require__(73241);


const selectors = {
  id: state => state.id,
  labelId: state => state.labelId,
  items: state => state.items,
  selectedValue: state => state.selectedValue,
  hasSelectionChips: state => {
    const selectedValue = state.selectedValue;
    return Array.isArray(selectedValue) && selectedValue.length > 0;
  },
  hasSelectedValue: state => {
    const {
      selectedValue,
      selectionMode
    } = state;
    if (selectedValue == null) {
      return false;
    }
    if (selectionMode === 'multiple' && Array.isArray(selectedValue)) {
      return selectedValue.length > 0;
    }
    return true;
  },
  hasNullItemLabel: (state, enabled) => {
    return enabled ? (0,_internals_resolveValueLabel_mjs__rspack_import_0/* .hasNullItemLabel */.Dp)(state.items) : false;
  },
  open: state => state.open,
  mounted: state => state.mounted,
  forceMounted: state => state.forceMounted,
  inline: state => state.inline,
  activeIndex: state => state.activeIndex,
  selectedIndex: state => state.selectedIndex,
  isActive: (state, index) => state.activeIndex === index,
  isSelected: (state, itemValue) => {
    const comparer = state.isItemEqualToValue;
    const selectedValue = state.selectedValue;
    if (Array.isArray(selectedValue)) {
      return selectedValue.some(selectedItem => (0,_internals_itemEquality_mjs__rspack_import_1/* .compareItemEquality */.tl)(itemValue, selectedItem, comparer));
    }
    return (0,_internals_itemEquality_mjs__rspack_import_1/* .compareItemEquality */.tl)(itemValue, selectedValue, comparer);
  },
  transitionStatus: state => state.transitionStatus,
  popupProps: state => state.popupProps,
  listProps: state => state.listProps,
  inputProps: state => state.inputProps,
  triggerProps: state => state.triggerProps,
  itemProps: state => state.itemProps,
  positionerElement: state => state.positionerElement,
  listElement: state => state.listElement,
  popupId: state => state.popupId,
  triggerElement: state => state.triggerElement,
  inputElement: state => state.inputElement,
  inputGroupElement: state => state.inputGroupElement,
  popupSide: state => state.popupSide,
  openMethod: state => state.openMethod,
  inputInsidePopup: state => state.inputInsidePopup,
  inputOwnsFormValue: state => state.inputOwnsFormValue,
  selectionMode: state => state.selectionMode,
  name: state => state.name,
  form: state => state.form,
  disabled: state => state.disabled,
  readOnly: state => state.readOnly,
  required: state => state.required,
  grid: state => state.grid,
  virtualized: state => state.virtualized,
  itemToStringLabel: state => state.itemToStringLabel,
  isItemEqualToValue: state => state.isItemEqualToValue,
  modal: state => state.modal,
  autoHighlight: state => state.autoHighlight
};
__webpack_require__.d(__webpack_exports__, {
}, {
  T: selectors
});


},
62485(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ ComboboxTrigger_ComboboxTrigger)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/store/useStore.mjs + 1 modules
var useStore = __webpack_require__(92477);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useStableCallback.mjs
var useStableCallback = __webpack_require__(77942);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useTimeout.mjs
var useTimeout = __webpack_require__(37227);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/owner.mjs
var owner = __webpack_require__(61402);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/useRenderElement.mjs + 4 modules
var useRenderElement = __webpack_require__(21724);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/use-button/useButton.mjs + 3 modules
var useButton = __webpack_require__(78973);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/root/ComboboxRootContext.mjs
var ComboboxRootContext = __webpack_require__(60598);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/utils/stateAttributesMapping.mjs
var stateAttributesMapping = __webpack_require__(32201);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/store.mjs
var combobox_store = __webpack_require__(81612);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
var FieldRootContext = __webpack_require__(36649);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/labelable-provider/LabelableContext.mjs
var LabelableContext = __webpack_require__(16742);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/shadowDom.mjs
var shadowDom = __webpack_require__(55638);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/event.mjs
var utils_event = __webpack_require__(61489);
// EXTERNAL MODULE: ./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
var floating_ui_utils_dom = __webpack_require__(54951);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/platform/env.mjs
var env = __webpack_require__(56888);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/getPseudoElementBounds.mjs


// Tolerance around the element bounds so a fast click whose pointer drifts slightly
// during press-release isn't mistaken for a drag-off-and-release cancellation.
// Matches typical OS/browser drag-initiation thresholds.
const BOUNDARY_OFFSET = 5;

/**
 * Determines if a mouse event occurred within the bounds of an element
 * (including its pseudo-elements), with a small tolerance for pointer drift.
 */
function isMouseWithinBounds(event, element) {
  const bounds = getPseudoElementBounds(element);
  return event.clientX >= bounds.left - BOUNDARY_OFFSET && event.clientX <= bounds.right + BOUNDARY_OFFSET && event.clientY >= bounds.top - BOUNDARY_OFFSET && event.clientY <= bounds.bottom + BOUNDARY_OFFSET;
}
function getPseudoElementBounds(element) {
  const elementRect = element.getBoundingClientRect();
  const win = (0,floating_ui_utils_dom/* .getWindow */.zk)(element);

  // Avoid "Not implemented: window.getComputedStyle(elt, pseudoElt)" in jsdom.
  if (env/* .jsdom */.I) {
    return elementRect;
  }
  const beforeStyles = win.getComputedStyle(element, '::before');
  const afterStyles = win.getComputedStyle(element, '::after');
  const hasPseudoElements = beforeStyles.content !== 'none' || afterStyles.content !== 'none';
  if (!hasPseudoElements) {
    return elementRect;
  }

  // Get dimensions of pseudo-elements
  const beforeWidth = parseFloat(beforeStyles.width) || 0;
  const beforeHeight = parseFloat(beforeStyles.height) || 0;
  const afterWidth = parseFloat(afterStyles.width) || 0;
  const afterHeight = parseFloat(afterStyles.height) || 0;

  // Calculate max dimensions including pseudo-elements
  const totalWidth = Math.max(elementRect.width, beforeWidth, afterWidth);
  const totalHeight = Math.max(elementRect.height, beforeHeight, afterHeight);

  // Calculate the differences to extend the bounds
  const widthDiff = totalWidth - elementRect.width;
  const heightDiff = totalHeight - elementRect.height;
  return {
    left: elementRect.left - widthDiff / 2,
    right: elementRect.right + widthDiff / 2,
    top: elementRect.top - heightDiff / 2,
    bottom: elementRect.bottom + heightDiff / 2
  };
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
var createBaseUIEventDetails = __webpack_require__(93201);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/reason-parts.mjs
var reason_parts = __webpack_require__(5355);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useIsoLayoutEffect.mjs
var useIsoLayoutEffect = __webpack_require__(74732);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/empty.mjs
var empty = __webpack_require__(11716);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/utils/composite.mjs
var composite = __webpack_require__(14280);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/floating-ui-react/hooks/useTypeahead.mjs
'use client';









/**
 * Provides a matching callback that can be used to focus an item as the user
 * types, often used in tandem with `useListNavigation()`.
 * @see https://floating-ui.com/docs/useTypeahead
 */
function useTypeahead(context, props) {
  const {
    listRef,
    elementsRef,
    activeIndex,
    onMatch: onMatchProp,
    disabledIndices,
    onTyping,
    enabled = true,
    resetMs = 750,
    selectedIndex = null
  } = props;
  const store = 'rootStore' in context ? context.rootStore : context;
  const open = store.useState('open');
  const timeout = (0,useTimeout/* .useTimeout */.Z)();
  const stringRef = react.useRef('');
  const prevIndexRef = react.useRef(selectedIndex ?? activeIndex ?? -1);
  const matchIndexRef = react.useRef(null);
  const onKeyDown = (0,useStableCallback/* .useStableCallback */.K)(event => {
    function getElement(index) {
      return elementsRef?.current[index];
    }
    function isItemAvailable(index) {
      const element = getElement(index);
      if (element && !(0,composite/* .isElementVisible */.J9)(element) || element?.matches(':disabled')) {
        return false;
      }
      // Visibility and native disabled state are handled above; pass an empty
      // element list so `isListIndexDisabled` resolves only the explicit
      // `disabledIndices` (array/predicate) and skips its own fallbacks.
      // Consumers that don't pass `disabledIndices` keep matching every visible
      // item except native disabled elements provided through `elementsRef`.
      return disabledIndices == null || !(0,composite/* .isListIndexDisabled */.FP)(empty/* .EMPTY_ARRAY */.Ml, index, disabledIndices);
    }
    function getMatchingIndex(list, string, startIndex = 0) {
      if (list.length === 0) {
        return -1;
      }
      const normalizedStartIndex = (startIndex % list.length + list.length) % list.length;
      const lowerString = string.toLowerCase();
      for (let offset = 0; offset < list.length; offset += 1) {
        const index = (normalizedStartIndex + offset) % list.length;
        const text = list[index];
        if (!text?.toLowerCase().startsWith(lowerString) || !isItemAvailable(index)) {
          continue;
        }
        return index;
      }
      return -1;
    }
    const listContent = listRef.current;
    if (stringRef.current.length > 0 && event.key === ' ') {
      // Space should continue the in-progress typeahead session.
      (0,utils_event/* .stopEvent */.jo)(event);
      onTyping?.(true);
    }
    if (stringRef.current.length > 0 && stringRef.current[0] !== ' ') {
      if (getMatchingIndex(listContent, stringRef.current) === -1 && event.key !== ' ') {
        onTyping?.(false);
      }
    }
    if (listContent == null ||
    // Character key.
    event.key.length !== 1 ||
    // Modifier key.
    event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }
    if (open && event.key !== ' ') {
      (0,utils_event/* .stopEvent */.jo)(event);
      onTyping?.(true);
    }

    // Capture whether this is a new typing session before mutating the string.
    const isNewSession = stringRef.current === '';
    if (isNewSession) {
      prevIndexRef.current = selectedIndex ?? activeIndex ?? -1;
    }

    // Bail out if the list contains a word like "llama" or "aaron". TODO:
    // allow it in this case, too. Unavailable items are skipped while matching, so
    // they must be ignored here as well — otherwise a hidden or disabled double-letter
    // label would block rapid cycling through the available items.
    const allowRapidSuccessionOfFirstLetter = listContent.every((text, index) => text && isItemAvailable(index) ? text[0]?.toLowerCase() !== text[1]?.toLowerCase() : true);

    // Allows the user to cycle through items that start with the same letter
    // in rapid succession.
    if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
      stringRef.current = '';
      prevIndexRef.current = matchIndexRef.current;
    }
    stringRef.current += event.key;
    timeout.start(resetMs, () => {
      stringRef.current = '';
      prevIndexRef.current = matchIndexRef.current;
      onTyping?.(false);
    });

    // Compute the starting index for this search.
    // If this is a new typing session (string is empty), base it on the current
    // selection/active item; otherwise continue from the last matched index.
    const prevIndex = isNewSession ? selectedIndex ?? activeIndex ?? -1 : prevIndexRef.current;
    const startIndex = (prevIndex ?? 0) + 1;
    const index = getMatchingIndex(listContent, stringRef.current, startIndex);
    if (index !== -1) {
      onMatchProp?.(index);
      matchIndexRef.current = index;
    } else if (event.key !== ' ') {
      stringRef.current = '';
      onTyping?.(false);
    }
  });
  const onBlur = (0,useStableCallback/* .useStableCallback */.K)(event => {
    const next = event.relatedTarget;
    const currentDomReferenceElement = store.select('domReferenceElement');
    const currentFloatingElement = store.select('floatingElement');
    const withinComposite = (0,shadowDom/* .contains */.gR)(currentDomReferenceElement, next) || (0,shadowDom/* .contains */.gR)(currentFloatingElement, next);

    // Keep the session if focus moves within the composite (reference <-> floating).
    if (withinComposite) {
      return;
    }

    // End the current typing session when focus leaves the composite entirely.
    timeout.clear();
    stringRef.current = '';
    prevIndexRef.current = matchIndexRef.current;
    onTyping?.(false);
  });
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    if (!open && selectedIndex !== null) {
      return;
    }
    timeout.clear();
    matchIndexRef.current = null;
    if (stringRef.current !== '') {
      stringRef.current = '';
    }
  }, [open, selectedIndex, timeout]);
  const sharedProps = react.useMemo(() => ({
    onKeyDown,
    onBlur
  }), [onKeyDown, onBlur]);
  return react.useMemo(() => enabled ? {
    reference: sharedProps,
    floating: sharedProps
  } : {}, [enabled, sharedProps]);
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/floating-ui-react/hooks/useClick.mjs
var useClick = __webpack_require__(36265);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/internals/labelable-provider/useLabelableId.mjs
var useLabelableId = __webpack_require__(39083);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/resolveAriaLabelledBy.mjs
'use client';

function getDefaultLabelId(id) {
  return id == null ? undefined : `${id}-label`;
}
function resolveAriaLabelledBy(fieldLabelId, localLabelId) {
  return fieldLabelId ?? localLabelId;
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/root/utils/index.mjs
var utils = __webpack_require__(47614);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/combobox/utils/parts.mjs
var parts = __webpack_require__(97099);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/combobox/trigger/ComboboxTrigger.mjs
'use client';























/**
 * A button that opens the popup.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
const ComboboxTrigger_ComboboxTrigger = /*#__PURE__*/react.forwardRef(function ComboboxTrigger(componentProps, forwardedRef) {
  const {
    render,
    className,
    nativeButton = true,
    disabled: disabledProp = false,
    id: idProp,
    style,
    ...elementProps
  } = componentProps;
  const {
    state: fieldState,
    disabled: fieldDisabled,
    setTouched,
    setFocused,
    validationMode,
    validation
  } = (0,FieldRootContext/* .useFieldRootContext */.V$)();
  const {
    labelId: fieldLabelId
  } = (0,LabelableContext/* .useLabelableContext */.H)();
  const store = (0,ComboboxRootContext/* .useComboboxRootContext */.Ee)();
  const selectionMode = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.selectionMode */.T.selectionMode);
  const comboboxDisabled = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.disabled */.T.disabled);
  const readOnly = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.readOnly */.T.readOnly);
  const required = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.required */.T.required);
  const positionerElement = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.positionerElement */.T.positionerElement);
  const listElement = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.listElement */.T.listElement);
  const storedPopupId = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.popupId */.T.popupId);
  const triggerProps = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.triggerProps */.T.triggerProps);
  const inputInsidePopup = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.inputInsidePopup */.T.inputInsidePopup);
  const rootId = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.id */.T.id);
  const comboboxLabelId = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.labelId */.T.labelId);
  const open = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.open */.T.open);
  const selectedValue = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.selectedValue */.T.selectedValue);
  const activeIndex = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.activeIndex */.T.activeIndex);
  const selectedIndex = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.selectedIndex */.T.selectedIndex);
  const hasSelectedValue = (0,useStore/* .useStore */.P)(store, combobox_store/* .selectors.hasSelectedValue */.T.hasSelectedValue);
  const floatingRootContext = (0,ComboboxRootContext/* .useComboboxFloatingContext */.ui)();
  const inputValue = (0,ComboboxRootContext/* .useComboboxInputValueContext */.dc)();
  const focusTimeout = (0,useTimeout/* .useTimeout */.Z)();
  const disabled = fieldDisabled || comboboxDisabled || disabledProp;
  const listEmpty = (0,parts/* .useListEmpty */.$B)();
  const popupSide = (0,parts/* .usePopupSide */.Xb)(store);
  (0,useLabelableId/* .useLabelableId */.l)({
    id: inputInsidePopup ? idProp : undefined
  });
  const id = inputInsidePopup ? idProp ?? rootId : idProp;
  const ariaLabelledBy = resolveAriaLabelledBy(fieldLabelId, comboboxLabelId);
  let ariaControls;
  if (open && inputInsidePopup) {
    // Fall back to the default id while the popup registers its own (custom ids are stored once the
    // popup mounts), so `aria-controls` is set on the same commit `open` becomes `true`.
    ariaControls = storedPopupId ?? (0,utils/* .getComboboxPopupId */.xj)(rootId);
  } else if (open) {
    ariaControls = listElement?.id;
  }
  const currentPointerTypeRef = react.useRef('');
  function trackPointerType(event) {
    currentPointerTypeRef.current = event.pointerType;
  }
  const {
    reference: triggerTypeaheadProps
  } = useTypeahead(floatingRootContext, {
    enabled: !open && !readOnly && !comboboxDisabled && selectionMode === 'single',
    listRef: store.state.labelsRef,
    activeIndex,
    selectedIndex,
    onMatch(index) {
      const nextSelectedValue = store.state.valuesRef.current[index];
      if (nextSelectedValue !== undefined) {
        store.state.setSelectedValue(nextSelectedValue, (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)((/* inlined export .none */"none")));
      }
    }
  });
  const {
    reference: triggerClickProps
  } = (0,useClick/* .useClick */.k)(floatingRootContext, {
    enabled: !readOnly && !comboboxDisabled,
    event: 'mousedown'
  });
  const {
    buttonRef,
    getButtonProps
  } = (0,useButton/* .useButton */.s)({
    native: nativeButton,
    disabled
  });
  const state = {
    ...fieldState,
    open,
    disabled,
    popupSide,
    listEmpty,
    placeholder: selectionMode === 'none' ? false : !hasSelectedValue
  };
  const setTriggerElement = (0,useStableCallback/* .useStableCallback */.K)(element => {
    store.set('triggerElement', element);
  });
  const element = (0,useRenderElement/* .useRenderElement */.o)('button', componentProps, {
    ref: [forwardedRef, buttonRef, setTriggerElement],
    state,
    props: [triggerProps, triggerClickProps, triggerTypeaheadProps, {
      id,
      tabIndex: inputInsidePopup ? 0 : -1,
      role: inputInsidePopup ? 'combobox' : undefined,
      'aria-expanded': open,
      'aria-haspopup': inputInsidePopup ? 'dialog' : 'listbox',
      'aria-controls': ariaControls,
      'aria-required': inputInsidePopup ? required || undefined : undefined,
      'aria-labelledby': ariaLabelledBy,
      onPointerDown: trackPointerType,
      onPointerEnter: trackPointerType,
      onFocus() {
        setFocused(true);
        if (disabled || readOnly) {
          return;
        }
        focusTimeout.start(0, store.state.forceMount);
      },
      onBlur(event) {
        // If focus is moving into the popup, don't count it as a blur.
        if ((0,shadowDom/* .contains */.gR)(positionerElement, event.relatedTarget)) {
          return;
        }
        setTouched(true);
        setFocused(false);
        if (validationMode === 'onBlur') {
          const valueToValidate = selectionMode === 'none' ? inputValue : selectedValue;
          validation.commit(valueToValidate);
        }
      },
      onMouseDown(event) {
        if (disabled || readOnly) {
          return;
        }
        if (!inputInsidePopup) {
          floatingRootContext.set('domReferenceElement', event.currentTarget);
        }

        // Ensure items are registered for initial selection highlight.
        store.state.forceMount();
        if (currentPointerTypeRef.current !== 'touch') {
          store.state.inputRef.current?.focus();
          if (!inputInsidePopup) {
            event.preventDefault();
          }
        }
        if (open) {
          return;
        }
        const doc = (0,owner/* .ownerDocument */.R)(event.currentTarget);
        function handleMouseUp(mouseEvent) {
          const currentTriggerElement = store.state.triggerElement;
          if (!currentTriggerElement) {
            return;
          }
          const mouseUpTarget = (0,shadowDom/* .getTarget */.EW)(mouseEvent);
          const positioner = store.state.positionerElement;
          const list = store.state.listElement;
          if ((0,shadowDom/* .contains */.gR)(currentTriggerElement, mouseUpTarget) || (0,shadowDom/* .contains */.gR)(positioner, mouseUpTarget) || (0,shadowDom/* .contains */.gR)(list, mouseUpTarget)) {
            return;
          }
          if (isMouseWithinBounds(mouseEvent, currentTriggerElement)) {
            return;
          }
          store.state.setOpen(false, (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .cancelOpen */.LO, mouseEvent));
        }
        if (inputInsidePopup) {
          doc.addEventListener('mouseup', handleMouseUp, {
            once: true
          });
        }
      },
      onKeyDown(event) {
        if (readOnly) {
          return;
        }
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          (0,utils_event/* .stopEvent */.jo)(event);
          store.state.setOpen(true, (0,createBaseUIEventDetails/* .createChangeEventDetails */.d)(reason_parts/* .listNavigation */.Dq, event.nativeEvent));
          store.state.inputRef.current?.focus();
        }
      }
    }, validation.getValidationProps(disabled, elementProps), getButtonProps],
    stateAttributesMapping: stateAttributesMapping/* .triggerStateAttributesMapping */.d
  });
  return element;
});
if (false) {}

},
18215(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var _base_ui_utils_useMergedRefs__rspack_import_4 = __webpack_require__(34244);
/* import */ var _base_ui_utils_visuallyHidden__rspack_import_7 = __webpack_require__(30200);
/* import */ var _internals_use_button_index_mjs__rspack_import_3 = __webpack_require__(78973);
/* import */ var _internals_createBaseUIEventDetails_mjs__rspack_import_5 = __webpack_require__(93201);
/* import */ var _internals_reasons_mjs__rspack_import_6 = __webpack_require__(5355);
/* import */ var _root_ComboboxRootContext_mjs__rspack_import_2 = __webpack_require__(60598);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(95170);
'use client';









/**
 * @internal
 */
const ComboboxInternalDismissButton = /*#__PURE__*/react__rspack_import_0.forwardRef(function ComboboxInternalDismissButton(_, forwardedRef) {
  const store = (0,_root_ComboboxRootContext_mjs__rspack_import_2/* .useComboboxRootContext */.Ee)();
  const {
    buttonRef,
    getButtonProps
  } = (0,_internals_use_button_index_mjs__rspack_import_3/* .useButton */.s)({
    native: false
  });
  const mergedRef = (0,_base_ui_utils_useMergedRefs__rspack_import_4/* .useMergedRefs */.a)(forwardedRef, buttonRef);
  function handleDismiss(event) {
    store.state.setOpen(false, (0,_internals_createBaseUIEventDetails_mjs__rspack_import_5/* .createChangeEventDetails */.d)(_internals_reasons_mjs__rspack_import_6/* .closePress */.SR, event.nativeEvent, event.currentTarget));
  }
  const dismissProps = getButtonProps({
    onClick: handleDismiss
  });
  return /*#__PURE__*/(0,react_jsx_runtime__rspack_import_1.jsx)("span", {
    ref: mergedRef,
    ...dismissProps,
    "aria-label": "Dismiss",
    tabIndex: undefined,
    style: _base_ui_utils_visuallyHidden__rspack_import_7/* .visuallyHiddenInput */.a
  });
});
if (false) {}
__webpack_require__.d(__webpack_exports__, {
}, {
  p: ComboboxInternalDismissButton
});


},
97099(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _base_ui_utils_store__rspack_import_0 = __webpack_require__(92477);
/* import */ var _root_ComboboxRootContext_mjs__rspack_import_2 = __webpack_require__(60598);
/* import */ var _store_mjs__rspack_import_1 = __webpack_require__(81612);
'use client';




/**
 * The popup side is only meaningful while the positioner is mounted, as the store retains the
 * last resolved side after the popup unmounts.
 */
function usePopupSide(store) {
  const mounted = (0,_base_ui_utils_store__rspack_import_0/* .useStore */.P)(store, _store_mjs__rspack_import_1/* .selectors.mounted */.T.mounted);
  const popupSide = (0,_base_ui_utils_store__rspack_import_0/* .useStore */.P)(store, _store_mjs__rspack_import_1/* .selectors.popupSide */.T.popupSide);
  const positionerElement = (0,_base_ui_utils_store__rspack_import_0/* .useStore */.P)(store, _store_mjs__rspack_import_1/* .selectors.positionerElement */.T.positionerElement);
  return mounted && positionerElement ? popupSide : null;
}

/**
 * Whether the filtered list has no items to show.
 */
function useListEmpty() {
  return (0,_root_ComboboxRootContext_mjs__rspack_import_2/* .useComboboxDerivedItemsContext */.Dc)().filteredItems.length === 0;
}

/**
 * The arrow keys that move the chip highlight backwards and forwards, in that order.
 */
function getChipNavigationKeys(direction) {
  return direction === 'rtl' ? ['ArrowRight', 'ArrowLeft'] : ['ArrowLeft', 'ArrowRight'];
}

/**
 * Where the highlight lands once the chip at `index` is removed, or `undefined` for no highlight.
 */
function getIndexAfterChipRemoval(index, chipCount) {
  const nextIndex = index >= chipCount - 1 ? chipCount - 2 : index;
  return nextIndex >= 0 ? nextIndex : undefined;
}

/**
 * Commits the highlighted item by clicking it, tagging the originating event so the item's
 * handler can attribute the selection to it.
 */
function clickHighlightedItem(store, activeIndex, nativeEvent) {
  const listItem = store.state.listRef.current[activeIndex];
  if (listItem) {
    store.state.selectionEventRef.current = nativeEvent;
    listItem.click();
    store.state.selectionEventRef.current = null;
  }
}
__webpack_require__.d(__webpack_exports__, {
  $B: () => (useListEmpty),
  L6: () => (clickHighlightedItem),
  Xb: () => (usePopupSide),
  jr: () => (getIndexAfterChipRemoval),
  ln: () => (getChipNavigationKeys)
});


},
32201(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _utils_popupStateMapping_mjs__rspack_import_0 = __webpack_require__(7574);
/* import */ var _internals_field_constants_constants_mjs__rspack_import_1 = __webpack_require__(43236);


const triggerStateAttributesMapping = {
  ..._utils_popupStateMapping_mjs__rspack_import_0/* .pressableTriggerOpenStateMapping */.jL,
  ..._internals_field_constants_constants_mjs__rspack_import_1/* .fieldValidityMapping */.dc,
  popupSide: side => side ? {
    'data-popup-side': side
  } : null,
  listEmpty: empty => empty ? {
    'data-list-empty': ''
  } : null
};
__webpack_require__.d(__webpack_exports__, {
}, {
  d: triggerStateAttributesMapping
});


},
31280(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var react_dom__rspack_import_1 = __webpack_require__(57947);
/* import */ var _floating_ui_utils_dom__rspack_import_8 = __webpack_require__(54951);
/* import */ var _base_ui_utils_addEventListener__rspack_import_12 = __webpack_require__(89362);
/* import */ var _base_ui_utils_mergeCleanups__rspack_import_11 = __webpack_require__(17964);
/* import */ var _base_ui_utils_useId__rspack_import_5 = __webpack_require__(84941);
/* import */ var _base_ui_utils_useIsoLayoutEffect__rspack_import_7 = __webpack_require__(74732);
/* import */ var _base_ui_utils_useStableCallback__rspack_import_6 = __webpack_require__(77942);
/* import */ var _base_ui_utils_empty__rspack_import_4 = __webpack_require__(11716);
/* import */ var _utils_FocusGuard_mjs__rspack_import_13 = __webpack_require__(9492);
/* import */ var _utils_tabbable_mjs__rspack_import_10 = __webpack_require__(12914);
/* import */ var _internals_createBaseUIEventDetails_mjs__rspack_import_15 = __webpack_require__(93201);
/* import */ var _internals_reasons_mjs__rspack_import_16 = __webpack_require__(5355);
/* import */ var _utils_createAttribute_mjs__rspack_import_3 = __webpack_require__(3825);
/* import */ var _internals_useRenderElement_mjs__rspack_import_9 = __webpack_require__(21724);
/* import */ var _internals_constants_mjs__rspack_import_14 = __webpack_require__(80617);
/* import */ var react_jsx_runtime__rspack_import_2 = __webpack_require__(95170);
'use client';


















const PortalContext = /*#__PURE__*/react__rspack_import_0.createContext(null);
if (false) {}
const usePortalContext = () => react__rspack_import_0.useContext(PortalContext);
const attr = (0,_utils_createAttribute_mjs__rspack_import_3/* .createAttribute */.F)('portal');
function useFloatingPortalNode(props = {}) {
  const {
    ref,
    container: containerProp,
    componentProps = _base_ui_utils_empty__rspack_import_4/* .EMPTY_OBJECT */.t0,
    elementProps
  } = props;
  const uniqueId = (0,_base_ui_utils_useId__rspack_import_5/* .useId */.B)();
  const portalContext = usePortalContext();
  const parentPortalNode = portalContext?.portalNode;
  const [containerElement, setContainerElement] = react__rspack_import_0.useState(null);
  const [portalNode, setPortalNode] = react__rspack_import_0.useState(null);
  const setPortalNodeRef = (0,_base_ui_utils_useStableCallback__rspack_import_6/* .useStableCallback */.K)(node => {
    if (node !== null) {
      // the useIsoLayoutEffect below watching containerProp / parentPortalNode
      // sets setPortalNode(null) when the container becomes null or changes.
      // So even though the ref callback now ignores null, the portal node still gets cleared.
      setPortalNode(node);
    }
  });
  const containerRef = react__rspack_import_0.useRef(null);
  (0,_base_ui_utils_useIsoLayoutEffect__rspack_import_7/* .useIsoLayoutEffect */.g)(() => {
    // Wait for the container to be resolved if explicitly `null`.
    if (containerProp === null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    const resolvedContainer = (containerProp && ((0,_floating_ui_utils_dom__rspack_import_8/* .isNode */.Ll)(containerProp) ? containerProp : containerProp.current)) ?? parentPortalNode ?? document.body;
    if (resolvedContainer == null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    if (containerRef.current !== resolvedContainer) {
      containerRef.current = resolvedContainer;
      setPortalNode(null);
      setContainerElement(resolvedContainer);
    }
  }, [containerProp, parentPortalNode]);
  const portalElement = (0,_internals_useRenderElement_mjs__rspack_import_9/* .useRenderElement */.o)('div', componentProps, {
    ref: [ref, setPortalNodeRef],
    props: [{
      id: uniqueId,
      [attr]: ''
    }, elementProps]
  });

  // This `createPortal` call injects `portalElement` into the `container`.
  // Another call inside `FloatingPortal`/`FloatingPortalLite` then injects the children into `portalElement`.
  const portalSubtree = containerElement && portalElement ? /*#__PURE__*/react_dom__rspack_import_1.createPortal(portalElement, containerElement) : null;
  return {
    node: portalNode,
    // `id` and `render` props can override or remove the generated ID. Use the exact
    // rendered value so `aria-owns` never points at an ID absent from the DOM.
    nodeId: /*#__PURE__*/react__rspack_import_0.isValidElement(portalElement) ? portalElement.props.id : undefined,
    subtree: portalSubtree
  };
}

/**
 * Portals the floating element into a given container element — by default,
 * outside of the app root and into the body.
 * This is necessary to ensure the floating element can appear outside any
 * potential parent containers that cause clipping (such as `overflow: hidden`),
 * while retaining its location in the React tree.
 * @see https://floating-ui.com/docs/FloatingPortal
 * @internal
 */
const FloatingPortal = /*#__PURE__*/react__rspack_import_0.forwardRef(function FloatingPortal(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    children,
    container,
    ...elementProps
  } = componentProps;
  const {
    node: portalNode,
    nodeId: portalNodeId,
    subtree: portalSubtree
  } = useFloatingPortalNode({
    container,
    ref: forwardedRef,
    componentProps,
    elementProps
  });
  const beforeOutsideRef = react__rspack_import_0.useRef(null);
  const afterOutsideRef = react__rspack_import_0.useRef(null);
  const beforeInsideRef = react__rspack_import_0.useRef(null);
  const afterInsideRef = react__rspack_import_0.useRef(null);
  const [focusManagerState, setFocusManagerState] = react__rspack_import_0.useState(null);
  const focusInsideDisabledRef = react__rspack_import_0.useRef(false);
  const modal = focusManagerState?.modal;
  const open = focusManagerState?.open;
  const shouldRenderGuards = !!focusManagerState && !focusManagerState.modal && focusManagerState.open && !!portalNode;

  // https://codesandbox.io/s/tabbable-portal-f4tng?file=/src/TabbablePortal.tsx
  react__rspack_import_0.useEffect(() => {
    if (!portalNode || modal) {
      return undefined;
    }

    // Make sure elements inside the portal element are tabbable only when the
    // portal has already been focused, either by tabbing into a focus trap
    // element outside or using the mouse.
    function onFocus(event) {
      if (portalNode && event.relatedTarget && (0,_utils_tabbable_mjs__rspack_import_10/* .isOutsideEvent */.Qp)(event)) {
        if (event.type === 'focusin') {
          if (focusInsideDisabledRef.current) {
            (0,_utils_tabbable_mjs__rspack_import_10/* .enableFocusInside */.yV)(portalNode);
            focusInsideDisabledRef.current = false;
          }
        } else {
          (0,_utils_tabbable_mjs__rspack_import_10/* .disableFocusInside */.N)(portalNode);
          focusInsideDisabledRef.current = true;
        }
      }
    }

    // Listen to the event on the capture phase so they run before the focus
    // trap elements onFocus prop is called.
    return (0,_base_ui_utils_mergeCleanups__rspack_import_11/* .mergeCleanups */.g)((0,_base_ui_utils_addEventListener__rspack_import_12/* .addEventListener */.q)(portalNode, 'focusin', onFocus, true), (0,_base_ui_utils_addEventListener__rspack_import_12/* .addEventListener */.q)(portalNode, 'focusout', onFocus, true));
  }, [portalNode, modal]);
  (0,_base_ui_utils_useIsoLayoutEffect__rspack_import_7/* .useIsoLayoutEffect */.g)(() => {
    if (!portalNode || open !== true || !focusInsideDisabledRef.current) {
      return;
    }

    // Restore tabbability before the focus manager's queued focus-on-open step runs.
    (0,_utils_tabbable_mjs__rspack_import_10/* .enableFocusInside */.yV)(portalNode);
    focusInsideDisabledRef.current = false;
  }, [open, portalNode]);
  const portalContextValue = react__rspack_import_0.useMemo(() => ({
    beforeOutsideRef,
    afterOutsideRef,
    beforeInsideRef,
    afterInsideRef,
    portalNode,
    setFocusManagerState
  }), [portalNode]);
  return /*#__PURE__*/(0,react_jsx_runtime__rspack_import_2.jsxs)(react__rspack_import_0.Fragment, {
    children: [portalSubtree, /*#__PURE__*/(0,react_jsx_runtime__rspack_import_2.jsxs)(PortalContext.Provider, {
      value: portalContextValue,
      children: [shouldRenderGuards && portalNode && /*#__PURE__*/(0,react_jsx_runtime__rspack_import_2.jsx)(_utils_FocusGuard_mjs__rspack_import_13/* .FocusGuard */.U, {
        "data-type": "outside",
        ref: beforeOutsideRef,
        onFocus: event => {
          if ((0,_utils_tabbable_mjs__rspack_import_10/* .isOutsideEvent */.Qp)(event, portalNode)) {
            beforeInsideRef.current?.focus();
          } else {
            const domReference = focusManagerState ? focusManagerState.domReference : null;
            const prevTabbable = (0,_utils_tabbable_mjs__rspack_import_10/* .getPreviousTabbable */.XJ)(domReference);
            prevTabbable?.focus();
          }
        }
      }), shouldRenderGuards && portalNode && /*#__PURE__*/(0,react_jsx_runtime__rspack_import_2.jsx)("span", {
        "aria-owns": portalNodeId,
        style: _internals_constants_mjs__rspack_import_14/* .ownerVisuallyHidden */.z_
      }), portalNode && /*#__PURE__*/react_dom__rspack_import_1.createPortal(children, portalNode), shouldRenderGuards && portalNode && /*#__PURE__*/(0,react_jsx_runtime__rspack_import_2.jsx)(_utils_FocusGuard_mjs__rspack_import_13/* .FocusGuard */.U, {
        "data-type": "outside",
        ref: afterOutsideRef,
        onFocus: event => {
          if ((0,_utils_tabbable_mjs__rspack_import_10/* .isOutsideEvent */.Qp)(event, portalNode)) {
            afterInsideRef.current?.focus();
          } else {
            const domReference = focusManagerState ? focusManagerState.domReference : null;
            const nextTabbable = (0,_utils_tabbable_mjs__rspack_import_10/* .getNextTabbable */.vF)(domReference);
            nextTabbable?.focus();
            if (focusManagerState?.closeOnFocusOut) {
              focusManagerState?.onOpenChange(false, (0,_internals_createBaseUIEventDetails_mjs__rspack_import_15/* .createChangeEventDetails */.d)(_internals_reasons_mjs__rspack_import_16/* .focusOut */.Xn, event.nativeEvent));
            }
          }
        }
      })]
    })]
  });
});
if (false) {}
__webpack_require__.d(__webpack_exports__, {
}, {
  XF: FloatingPortal,
  vB: usePortalContext
});


},
50826(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
var react__rspack_import_0_namespace_cache;
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(95170);
'use client';







const FloatingNodeContext = /*#__PURE__*/react__rspack_import_0.createContext(null);
if (false) {}
const FloatingTreeContext = /*#__PURE__*/react__rspack_import_0.createContext(null);

/**
 * Returns the parent node id for nested floating elements, if available.
 * Returns `null` for top-level floating elements.
 */
if (false) {}
const useFloatingParentNodeId = () => /*#__PURE__*/ (react__rspack_import_0_namespace_cache || (react__rspack_import_0_namespace_cache = __webpack_require__.t(react__rspack_import_0, 2))).useContext(FloatingNodeContext)?.id || null;

/**
 * Returns the nearest floating tree context, if available.
 */
const useFloatingTree = externalTree => {
  const contextTree = react__rspack_import_0.useContext(FloatingTreeContext);
  return externalTree ?? contextTree;
};

/**
 * Registers a node into the `FloatingTree`, returning its id.
 * @see https://floating-ui.com/docs/FloatingTree
 */
function useFloatingNodeId(externalTree) {
  const id = useId();
  const tree = useFloatingTree(externalTree);
  const parentId = useFloatingParentNodeId();
  useIsoLayoutEffect(() => {
    if (!id) {
      return undefined;
    }
    const node = {
      id,
      parentId
    };
    tree?.addNode(node);
    return () => {
      tree?.removeNode(node);
    };
  }, [tree, id, parentId]);
  return id;
}
/**
 * Provides parent node context for nested floating elements.
 * @see https://floating-ui.com/docs/FloatingTree
 * @internal
 */
function FloatingNode(props) {
  const {
    children,
    id
  } = props;
  const parentId = useFloatingParentNodeId();
  return /*#__PURE__*/_jsx(FloatingNodeContext.Provider, {
    value: React.useMemo(() => ({
      id,
      parentId
    }), [id, parentId]),
    children: children
  });
}
/**
 * Provides context for nested floating elements when they are not children of
 * each other on the DOM.
 * This is not necessary in all cases, except when there must be explicit communication between parent and child floating elements. It is necessary for:
 * - The `bubbles` option in the `useDismiss()` Hook
 * - Nested virtual list navigation
 * - Nested floating elements that each open on hover
 * - Custom communication between parent and child floating elements
 * @see https://floating-ui.com/docs/FloatingTree
 * @internal
 */
function FloatingTree(props) {
  const {
    children,
    externalTree
  } = props;
  const tree = useRefWithInit(() => externalTree ?? new FloatingTreeStore()).current;
  return /*#__PURE__*/_jsx(FloatingTreeContext.Provider, {
    value: tree,
    children: children
  });
}
__webpack_require__.d(__webpack_exports__, {
}, {
  R1: useFloatingParentNodeId,
  cq: useFloatingTree
});


},
36265(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var _base_ui_utils_useAnimationFrame__rspack_import_2 = __webpack_require__(72055);
/* import */ var _base_ui_utils_useTimeout__rspack_import_3 = __webpack_require__(37227);
/* import */ var _base_ui_utils_empty__rspack_import_8 = __webpack_require__(11716);
/* import */ var _utils_element_mjs__rspack_import_6 = __webpack_require__(55638);
/* import */ var _utils_element_mjs__rspack_import_7 = __webpack_require__(97965);
/* import */ var _utils_event_mjs__rspack_import_5 = __webpack_require__(61489);
/* import */ var _internals_createBaseUIEventDetails_mjs__rspack_import_4 = __webpack_require__(93201);
/* import */ var _internals_reasons_mjs__rspack_import_1 = __webpack_require__(5355);
'use client';









/**
 * Opens or closes the floating element when clicking the reference element.
 * @see https://floating-ui.com/docs/useClick
 */
function useClick(context, props = {}) {
  const {
    enabled = true,
    event: eventOption = 'click',
    toggle = true,
    ignoreMouse = false,
    stickIfOpen = true,
    touchOpenDelay = 0,
    reason = _internals_reasons_mjs__rspack_import_1/* .triggerPress */.Ui
  } = props;
  const store = 'rootStore' in context ? context.rootStore : context;
  const dataRef = store.context.dataRef;
  const pointerTypeRef = react__rspack_import_0.useRef(undefined);
  const frame = (0,_base_ui_utils_useAnimationFrame__rspack_import_2/* .useAnimationFrame */.NR)();
  const touchOpenTimeout = (0,_base_ui_utils_useTimeout__rspack_import_3/* .useTimeout */.Z)();
  const reference = react__rspack_import_0.useMemo(() => {
    function setOpenWithTouchDelay(nextOpen, nativeEvent, target, pointerType) {
      const details = (0,_internals_createBaseUIEventDetails_mjs__rspack_import_4/* .createChangeEventDetails */.d)(reason, nativeEvent, target);
      if (nextOpen && pointerType === 'touch' && touchOpenDelay > 0) {
        touchOpenTimeout.start(touchOpenDelay, () => {
          store.setOpen(true, details);
        });
      } else {
        store.setOpen(nextOpen, details);
      }
    }
    function getNextOpen(open, currentTarget, isClickLikeOpenEvent) {
      const openEvent = dataRef.current.openEvent;
      const hasClickedOnInactiveTrigger = store.select('domReferenceElement') !== currentTarget;
      if (open && hasClickedOnInactiveTrigger) {
        // Moving between triggers should always open the newly active one.
        return true;
      }
      if (!open) {
        // A closed popup should open on the next press.
        return true;
      }
      if (!toggle) {
        // Non-toggle mode never closes on a repeated trigger press.
        return true;
      }
      if (openEvent && stickIfOpen) {
        // Preserve hover/focus-opened popups until the matching click-like event closes them.
        return !isClickLikeOpenEvent(openEvent.type);
      }

      // Otherwise, a repeated click toggles the popup closed.
      return false;
    }
    return {
      onPointerDown(event) {
        // Screen reader activations (Android TalkBack, desktop screen readers) report a
        // mouse-like `pointerType`, but `ignoreMouse` must not drop them: hover logic cannot
        // open for a virtual press since there is no real pointer movement to wait for.
        // Virtual `touch` presses (iOS VoiceOver) keep their type so `touchOpenDelay` applies.
        pointerTypeRef.current = (0,_utils_event_mjs__rspack_import_5/* .isMouseLikePointerType */.Go)(event.pointerType, true) && (0,_utils_event_mjs__rspack_import_5/* .isVirtualPointerEvent */.Pg)(event.nativeEvent) ? 'virtual' : event.pointerType;
      },
      onMouseDown(event) {
        const pointerType = pointerTypeRef.current;
        const nativeEvent = event.nativeEvent;
        const open = store.select('open');

        // Ignore all buttons except for the "main" button.
        // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
        if (event.button !== 0 || eventOption === 'click' || (0,_utils_event_mjs__rspack_import_5/* .isMouseLikePointerType */.Go)(pointerType, true) && ignoreMouse) {
          return;
        }
        const nextOpen = getNextOpen(open, event.currentTarget, openEventType => openEventType === 'click' || openEventType === 'mousedown');

        // Animations sometimes won't run on a typeable element if using a rAF.
        // Focus is always set on these elements. For touch, we may delay opening.
        const target = (0,_utils_element_mjs__rspack_import_6/* .getTarget */.EW)(nativeEvent);
        if ((0,_utils_element_mjs__rspack_import_7/* .isTypeableElement */.$u)(target)) {
          setOpenWithTouchDelay(nextOpen, nativeEvent, target, pointerType);
          return;
        }

        // Capture the currentTarget before the rAF.
        // as React sets it to null after the event handler completes.
        const eventCurrentTarget = event.currentTarget;

        // Wait until focus is set on the element. This is an alternative to
        // `event.preventDefault()` to avoid :focus-visible from appearing when using a pointer.
        frame.request(() => {
          setOpenWithTouchDelay(nextOpen, nativeEvent, eventCurrentTarget, pointerType);
        });
      },
      onClick(event) {
        if (eventOption === 'mousedown-only') {
          return;
        }
        const pointerType = pointerTypeRef.current;
        if (eventOption === 'mousedown' && pointerType) {
          pointerTypeRef.current = undefined;
          return;
        }
        if ((0,_utils_event_mjs__rspack_import_5/* .isMouseLikePointerType */.Go)(pointerType, true) && ignoreMouse) {
          return;
        }
        const open = store.select('open');
        const nextOpen = getNextOpen(open, event.currentTarget, openEventType => openEventType === 'click' || openEventType === 'mousedown' || openEventType === 'keydown' || openEventType === 'keyup');
        setOpenWithTouchDelay(nextOpen, event.nativeEvent, event.currentTarget, pointerType);
      },
      onKeyDown() {
        pointerTypeRef.current = undefined;
      }
    };
  }, [dataRef, eventOption, ignoreMouse, reason, store, stickIfOpen, toggle, frame, touchOpenTimeout, touchOpenDelay]);
  return react__rspack_import_0.useMemo(() => enabled ? {
    reference
  } : _base_ui_utils_empty__rspack_import_8/* .EMPTY_OBJECT */.t0, [enabled, reference]);
}
__webpack_require__.d(__webpack_exports__, {
  k: () => (useClick)
});


},
14280(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _floating_ui_utils__rspack_import_1 = __webpack_require__(51541);
/* import */ var _floating_ui_utils_dom__rspack_import_3 = __webpack_require__(54951);
/* import */ var _event_mjs__rspack_import_2 = __webpack_require__(61489);
/* import */ var _constants_mjs__rspack_import_0 = __webpack_require__(12526);




function isDifferentGridRow(index, cols, prevRow) {
  return Math.floor(index / cols) !== prevRow;
}
function isIndexOutOfListBounds(list, index) {
  return index < 0 || index >= list.length;
}
function getMinListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef.current, {
    disabledIndices
  });
}
function getMaxListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef.current, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledListIndex(list, {
  startingIndex = -1,
  decrement = false,
  disabledIndices,
  amount = 1
} = {}) {
  let index = startingIndex;
  do {
    index += decrement ? -amount : amount;
  } while (index >= 0 && index <= list.length - 1 && isListIndexDisabled(list, index, disabledIndices));
  return index;
}
function getGridNavigatedIndex(list, {
  event,
  orientation,
  loopFocus,
  onLoop,
  rtl,
  cols,
  disabledIndices,
  minIndex,
  maxIndex,
  prevIndex,
  stopEvent: stop = false
}) {
  let nextIndex = prevIndex;
  let verticalDirection;
  if (event.key === _constants_mjs__rspack_import_0/* .ARROW_UP */.il) {
    verticalDirection = 'up';
  } else if (event.key === _constants_mjs__rspack_import_0/* .ARROW_DOWN */.Jd) {
    verticalDirection = 'down';
  }
  if (verticalDirection) {
    // -------------------------------------------------------------------------
    // Detect row structure only when handling vertical navigation. This keeps
    // the non-vertical key paths free from row inference work.
    // -------------------------------------------------------------------------
    const rows = [];
    const rowIndexMap = [];
    let hasRoleRow = false;
    let visibleItemCount = 0;
    {
      let currentRowEl = null;
      let currentRowIndex = -1;
      list.forEach((el, idx) => {
        if (el == null) {
          return;
        }
        visibleItemCount += 1;
        const rowEl = el.closest('[role="row"]');
        if (rowEl) {
          hasRoleRow = true;
        }
        if (rowEl !== currentRowEl || currentRowIndex === -1) {
          currentRowEl = rowEl;
          currentRowIndex += 1;
          rows[currentRowIndex] = [];
        }
        rows[currentRowIndex].push(idx);
        rowIndexMap[idx] = currentRowIndex;
      });
    }
    let hasDomRows = false;
    let inferredDomCols = 0;
    if (hasRoleRow) {
      for (const row of rows) {
        const rowLength = row.length;
        if (rowLength > inferredDomCols) {
          inferredDomCols = rowLength;
        }
        if (rowLength !== cols) {
          hasDomRows = true;
        }
      }
    }
    const hasVirtualizedGaps = hasDomRows && visibleItemCount < list.length;
    const verticalCols = inferredDomCols || cols;
    const navigateVertically = direction => {
      if (!hasDomRows || prevIndex === -1) {
        return undefined;
      }
      const currentRow = rowIndexMap[prevIndex];
      if (currentRow == null) {
        return undefined;
      }
      const colInRow = rows[currentRow].indexOf(prevIndex);
      const step = direction === 'up' ? -1 : 1;
      for (let nextRow = currentRow + step, i = 0; i < rows.length; i += 1, nextRow += step) {
        if (nextRow < 0 || nextRow >= rows.length) {
          if (!loopFocus || hasVirtualizedGaps) {
            return undefined;
          }
          nextRow = nextRow < 0 ? rows.length - 1 : 0;
          if (onLoop) {
            const clampedCol = Math.min(colInRow, rows[nextRow].length - 1);
            const targetItemIndex = rows[nextRow][clampedCol] ?? rows[nextRow][0];
            const returnedItemIndex = onLoop(event, prevIndex, targetItemIndex);
            nextRow = rowIndexMap[returnedItemIndex] ?? nextRow;
          }
        }
        const targetRow = rows[nextRow];
        for (let col = Math.min(colInRow, targetRow.length - 1); col >= 0; col -= 1) {
          const candidate = targetRow[col];
          if (!isListIndexDisabled(list, candidate, disabledIndices)) {
            return candidate;
          }
        }
      }
      return undefined;
    };
    const navigateVerticallyWithInferredRows = direction => {
      if (!hasVirtualizedGaps || prevIndex === -1) {
        return undefined;
      }
      const colInRow = prevIndex % verticalCols;
      const rowStep = direction === 'up' ? -verticalCols : verticalCols;
      const lastRowStart = maxIndex - maxIndex % verticalCols;
      const rowCount = (0,_floating_ui_utils__rspack_import_1/* .floor */.RI)(maxIndex / verticalCols) + 1;
      for (let rowStart = prevIndex - colInRow + rowStep, i = 0; i < rowCount; i += 1, rowStart += rowStep) {
        if (rowStart < 0 || rowStart > maxIndex) {
          if (!loopFocus) {
            return undefined;
          }
          rowStart = rowStart < 0 ? lastRowStart : 0;
        }
        const rowEnd = Math.min(rowStart + verticalCols - 1, maxIndex);
        for (let candidate = Math.min(rowStart + colInRow, rowEnd); candidate >= rowStart; candidate -= 1) {
          if (!isListIndexDisabled(list, candidate, disabledIndices)) {
            return candidate;
          }
        }
      }
      return undefined;
    };
    if (stop) {
      (0,_event_mjs__rspack_import_2/* .stopEvent */.jo)(event);
    }
    const verticalCandidate = navigateVertically(verticalDirection) ?? navigateVerticallyWithInferredRows(verticalDirection);
    if (verticalCandidate !== undefined) {
      nextIndex = verticalCandidate;
    } else if (prevIndex === -1) {
      nextIndex = verticalDirection === 'up' ? maxIndex : minIndex;
    } else {
      nextIndex = findNonDisabledListIndex(list, {
        startingIndex: prevIndex,
        amount: verticalCols,
        decrement: verticalDirection === 'up',
        disabledIndices
      });
      if (loopFocus) {
        if (verticalDirection === 'up' && (prevIndex - verticalCols < minIndex || nextIndex < 0)) {
          const col = prevIndex % verticalCols;
          const maxCol = maxIndex % verticalCols;
          const offset = maxIndex - (maxCol - col);
          if (maxCol === col) {
            nextIndex = maxIndex;
          } else {
            nextIndex = maxCol > col ? offset : offset - verticalCols;
          }
          if (onLoop) {
            nextIndex = onLoop(event, prevIndex, nextIndex);
          }
        }
        if (verticalDirection === 'down' && prevIndex + verticalCols > maxIndex) {
          nextIndex = findNonDisabledListIndex(list, {
            startingIndex: prevIndex % verticalCols - verticalCols,
            amount: verticalCols,
            disabledIndices
          });
          if (onLoop) {
            nextIndex = onLoop(event, prevIndex, nextIndex);
          }
        }
      }
    }
    if (isIndexOutOfListBounds(list, nextIndex)) {
      nextIndex = prevIndex;
    }
  }

  // Remains on the same row/column.
  if (orientation === 'both') {
    const prevRow = (0,_floating_ui_utils__rspack_import_1/* .floor */.RI)(prevIndex / cols);
    if (event.key === (rtl ? _constants_mjs__rspack_import_0/* .ARROW_LEFT */.eR : _constants_mjs__rspack_import_0/* .ARROW_RIGHT */.RJ)) {
      if (stop) {
        (0,_event_mjs__rspack_import_2/* .stopEvent */.jo)(event);
      }
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledListIndex(list, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loopFocus && isDifferentGridRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledListIndex(list, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
          if (onLoop) {
            nextIndex = onLoop(event, prevIndex, nextIndex);
          }
        }
      } else if (loopFocus) {
        nextIndex = findNonDisabledListIndex(list, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
        if (onLoop) {
          nextIndex = onLoop(event, prevIndex, nextIndex);
        }
      }
      if (isDifferentGridRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === (rtl ? _constants_mjs__rspack_import_0/* .ARROW_RIGHT */.RJ : _constants_mjs__rspack_import_0/* .ARROW_LEFT */.eR)) {
      if (stop) {
        (0,_event_mjs__rspack_import_2/* .stopEvent */.jo)(event);
      }
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledListIndex(list, {
          startingIndex: prevIndex,
          decrement: true,
          disabledIndices
        });
        if (loopFocus && isDifferentGridRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledListIndex(list, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
          if (onLoop) {
            nextIndex = onLoop(event, prevIndex, nextIndex);
          }
        }
      } else if (loopFocus) {
        nextIndex = findNonDisabledListIndex(list, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
        if (onLoop) {
          nextIndex = onLoop(event, prevIndex, nextIndex);
        }
      }
      if (isDifferentGridRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = (0,_floating_ui_utils__rspack_import_1/* .floor */.RI)(maxIndex / cols) === prevRow;
    if (isIndexOutOfListBounds(list, nextIndex)) {
      if (loopFocus && lastRow) {
        nextIndex = event.key === (rtl ? _constants_mjs__rspack_import_0/* .ARROW_RIGHT */.RJ : _constants_mjs__rspack_import_0/* .ARROW_LEFT */.eR) ? maxIndex : findNonDisabledListIndex(list, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
        if (onLoop) {
          nextIndex = onLoop(event, prevIndex, nextIndex);
        }
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}

/** For each cell index, gets the item index that occupies that cell */
function createGridCellMap(sizes, cols, dense) {
  const cellMap = [];
  let startIndex = 0;
  sizes.forEach(({
    width,
    height
  }, index) => {
    if (width > cols) {
      if (false) {}
    }
    let itemPlaced = false;
    if (dense) {
      startIndex = 0;
    }
    while (!itemPlaced) {
      const targetCells = [];
      for (let i = 0; i < width; i += 1) {
        for (let j = 0; j < height; j += 1) {
          targetCells.push(startIndex + i + j * cols);
        }
      }
      if (startIndex % cols + width <= cols && targetCells.every(cell => cellMap[cell] == null)) {
        targetCells.forEach(cell => {
          cellMap[cell] = index;
        });
        itemPlaced = true;
      } else {
        startIndex += 1;
      }
    }
  });

  // convert into a non-sparse array
  return [...cellMap];
}

/** Gets cell index of an item's corner or -1 when index is -1. */
function getGridCellIndexOfCorner(index, sizes, cellMap, cols, corner) {
  if (index === -1) {
    return -1;
  }
  const firstCellIndex = cellMap.indexOf(index);
  const sizeItem = sizes[index];
  switch (corner) {
    case 'tl':
      return firstCellIndex;
    case 'tr':
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + sizeItem.width - 1;
    case 'bl':
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + (sizeItem.height - 1) * cols;
    case 'br':
      return cellMap.lastIndexOf(index);
    default:
      return -1;
  }
}

/** Gets all cell indices that correspond to the specified indices */
function getGridCellIndices(indices, cellMap) {
  return cellMap.flatMap((index, cellIndex) => indices.includes(index) ? [cellIndex] : []);
}
function isListIndexDisabled(list, index, disabledIndices) {
  const isExplicitlyDisabled = typeof disabledIndices === 'function' ? disabledIndices(index) : disabledIndices?.includes(index) ?? false;
  if (isExplicitlyDisabled) {
    return true;
  }
  const element = list[index];
  if (!element) {
    return false;
  }
  if (!isElementVisible(element)) {
    return true;
  }

  // A natively disabled element can never receive focus, so it must always be
  // skipped, even when `disabledIndices` marks it as enabled. Only
  // `aria-disabled` items can be focusable-while-disabled.
  if (element.matches(':disabled')) {
    return true;
  }
  return !disabledIndices && (element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true');
}
function isHiddenByStyles(styles) {
  return styles.visibility === 'hidden' || styles.visibility === 'collapse';
}
function isElementVisible(element, styles = element ? (0,_floating_ui_utils_dom__rspack_import_3/* .getComputedStyle */.L9)(element) : null) {
  if (!element || !element.isConnected || !styles || isHiddenByStyles(styles)) {
    return false;
  }
  if (typeof element.checkVisibility === 'function') {
    return element.checkVisibility();
  }
  return styles.display !== 'none' && styles.display !== 'contents';
}
__webpack_require__.d(__webpack_exports__, {
  BF: () => (findNonDisabledListIndex),
  FP: () => (isListIndexDisabled),
  J9: () => (isElementVisible),
  Kg: () => (getGridNavigatedIndex),
  Zb: () => (getMinListIndex),
  du: () => (isIndexOutOfListBounds),
  vB: () => (getMaxListIndex)
});


},
12526(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
const FOCUSABLE_ATTRIBUTE = 'data-base-ui-focusable';
const ACTIVE_KEY = 'active';
const SELECTED_KEY = 'selected';
const TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled])," + "[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
__webpack_require__.d(__webpack_exports__, {
}, {
  BT: TYPEABLE_SELECTOR,
  Ed: FOCUSABLE_ATTRIBUTE,
  Jd: ARROW_DOWN,
  RJ: ARROW_RIGHT,
  eR: ARROW_LEFT,
  il: ARROW_UP
});


},
3825(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
function createAttribute(name) {
  return `data-base-ui-${name}`;
}
__webpack_require__.d(__webpack_exports__, {
  F: () => (createAttribute)
});


},
97965(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _floating_ui_utils_dom__rspack_import_0 = __webpack_require__(54951);
/* import */ var _constants_mjs__rspack_import_1 = __webpack_require__(12526);





function isTargetInsideEnabledTrigger(target, triggerElements) {
  if (!isElement(target)) {
    return false;
  }
  const targetElement = target;
  if (triggerElements.hasElement(targetElement)) {
    return !targetElement.hasAttribute('data-trigger-disabled');
  }
  for (const [, trigger] of triggerElements.entries()) {
    if (contains(trigger, targetElement)) {
      return !trigger.hasAttribute('data-trigger-disabled');
    }
  }
  return false;
}
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ('composedPath' in event) {
    return event.composedPath().includes(node);
  }

  // TS thinks `event` is of type never as it assumes all browsers support composedPath, but browsers without shadow dom don't
  const eventAgain = event;
  return eventAgain.target != null && node.contains(eventAgain.target);
}
function isRootElement(element) {
  return element.matches('html,body');
}
function isTypeableElement(element) {
  return (0,_floating_ui_utils_dom__rspack_import_0/* .isHTMLElement */.sb)(element) && element.matches(_constants_mjs__rspack_import_1/* .TYPEABLE_SELECTOR */.BT);
}
function isInteractiveElement(element) {
  return element?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${TYPEABLE_SELECTOR}`) != null;
}
function isTypeableCombobox(element) {
  if (!element) {
    return false;
  }
  return element.getAttribute('role') === 'combobox' && isTypeableElement(element);
}
function matchesFocusVisible(element) {
  // We don't want to block focus from working with `visibleOnly`
  // (JSDOM doesn't match `:focus-visible` when the element has `:focus`)
  if (!element || platform.env.jsdom) {
    return true;
  }
  try {
    return element.matches(':focus-visible');
  } catch (_e) {
    return true;
  }
}
function getFloatingFocusElement(floatingElement) {
  if (!floatingElement) {
    return null;
  }
  // Try to find the element that has `{...getFloatingProps()}` spread on it.
  // This indicates the floating element is acting as a positioning wrapper, and
  // so focus should be managed on the child element with the event handlers and
  // aria props.
  return floatingElement.hasAttribute(_constants_mjs__rspack_import_1/* .FOCUSABLE_ATTRIBUTE */.Ed) ? floatingElement : floatingElement.querySelector(`[${_constants_mjs__rspack_import_1/* .FOCUSABLE_ATTRIBUTE */.Ed}]`) || floatingElement;
}
__webpack_require__.d(__webpack_exports__, {
  $u: () => (isTypeableElement),
  F2: () => (isEventTargetWithin),
  WZ: () => (isTypeableCombobox),
  nd: () => (getFloatingFocusElement),
  tZ: () => (isRootElement)
});


},
93597(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _base_ui_utils_empty__rspack_import_0 = __webpack_require__(11716);

let rafId = 0;
function enqueueFocus(el, options = {}) {
  const {
    preventScroll = false,
    sync = false,
    shouldFocus
  } = options;
  cancelAnimationFrame(rafId);
  function exec() {
    if (shouldFocus && !shouldFocus()) {
      return;
    }
    el?.focus({
      preventScroll
    });
  }
  if (sync) {
    exec();
    return _base_ui_utils_empty__rspack_import_0/* .NOOP */.tE;
  }
  const currentRafId = requestAnimationFrame(exec);
  rafId = currentRafId;
  return () => {
    if (rafId === currentRafId) {
      cancelAnimationFrame(currentRafId);
      rafId = 0;
    }
  };
}
__webpack_require__.d(__webpack_exports__, {
  p: () => (enqueueFocus)
});


},
61489(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _base_ui_utils_platform__rspack_import_0 = __webpack_require__(28229);
/* import */ var _base_ui_utils_platform__rspack_import_1 = __webpack_require__(56888);

function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
function isReactEvent(event) {
  return 'nativeEvent' in event;
}

// License: https://github.com/adobe/react-spectrum/blob/main/packages/@react-aria/utils/src/isVirtualEvent.ts
function isVirtualClick(event) {
  if (event.pointerType === '' && event.isTrusted) {
    return true;
  }
  if (_base_ui_utils_platform__rspack_import_0/* .android */.yA && event.pointerType) {
    return event.type === 'click' && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  if (_base_ui_utils_platform__rspack_import_1/* .jsdom */.I) {
    return false;
  }
  return !_base_ui_utils_platform__rspack_import_0/* .android */.yA && event.width === 0 && event.height === 0 || _base_ui_utils_platform__rspack_import_0/* .android */.yA && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse' ||
  // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'touch';
}
function isMouseLikePointerType(pointerType, strict) {
  // On some Linux machines with Chromium, mouse inputs return a `pointerType`
  // of "pen": https://github.com/floating-ui/floating-ui/issues/2015
  const values = ['mouse', 'pen'];
  if (!strict) {
    values.push('', undefined);
  }
  return values.includes(pointerType);
}
function isClickLikeEvent(event) {
  const type = event.type;
  return type === 'click' || type === 'mousedown' || type === 'keydown' || type === 'keyup';
}
__webpack_require__.d(__webpack_exports__, {
  Ev: () => (isClickLikeEvent),
  Go: () => (isMouseLikePointerType),
  O_: () => (isReactEvent),
  Pg: () => (isVirtualPointerEvent),
  YF: () => (isVirtualClick),
  jo: () => (stopEvent)
});


},
98642(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* eslint-disable @typescript-eslint/no-loop-func */

function getNodeChildren(nodes, id, onlyOpenChildren = true) {
  const directChildren = nodes.filter(node => node.parentId === id);
  return directChildren.flatMap(child => [...(!onlyOpenChildren || child.context?.open ? [child] : []), ...getNodeChildren(nodes, child.id, onlyOpenChildren)]);
}
function getDeepestNode(nodes, id) {
  let deepestNodeId;
  let maxDepth = -1;
  function findDeepest(nodeId, depth) {
    if (depth > maxDepth) {
      deepestNodeId = nodeId;
      maxDepth = depth;
    }
    const children = getNodeChildren(nodes, nodeId);
    children.forEach(child => {
      findDeepest(child.id, depth + 1);
    });
  }
  findDeepest(id, 0);
  return nodes.find(node => node.id === deepestNodeId);
}
function getNodeAncestors(nodes, id) {
  let allAncestors = [];
  let currentParentId = nodes.find(node => node.id === id)?.parentId;
  while (currentParentId) {
    const currentNode = nodes.find(node => node.id === currentParentId);
    currentParentId = currentNode?.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}
__webpack_require__.d(__webpack_exports__, {
  $4: () => (getNodeAncestors),
  CM: () => (getNodeChildren)
});


},
12914(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _floating_ui_utils_dom__rspack_import_0 = __webpack_require__(54951);
/* import */ var _base_ui_utils_owner__rspack_import_3 = __webpack_require__(61402);
/* import */ var _element_mjs__rspack_import_1 = __webpack_require__(55638);
/* import */ var _composite_mjs__rspack_import_2 = __webpack_require__(14280);




const CANDIDATE_SELECTOR = 'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';
function getParentElement(element) {
  const assignedSlot = element.assignedSlot;
  if (assignedSlot) {
    return assignedSlot;
  }
  if (element.parentElement) {
    return element.parentElement;
  }
  const rootNode = element.getRootNode();
  return (0,_floating_ui_utils_dom__rspack_import_0/* .isShadowRoot */.Ng)(rootNode) ? rootNode.host : null;
}
function getDetailsSummary(details) {
  for (const child of Array.from(details.children)) {
    if ((0,_floating_ui_utils_dom__rspack_import_0/* .getNodeName */.mq)(child) === 'summary') {
      return child;
    }
  }
  return null;
}
function isWithinOpenDetailsSummary(element, details) {
  const summary = getDetailsSummary(details);
  return !!summary && (element === summary || (0,_element_mjs__rspack_import_1/* .contains */.gR)(summary, element));
}
function isFocusableCandidate(element) {
  const nodeName = element ? (0,_floating_ui_utils_dom__rspack_import_0/* .getNodeName */.mq)(element) : '';
  return element != null && element.matches(CANDIDATE_SELECTOR) && (nodeName !== 'summary' || element.parentElement != null && (0,_floating_ui_utils_dom__rspack_import_0/* .getNodeName */.mq)(element.parentElement) === 'details' && getDetailsSummary(element.parentElement) === element) && (nodeName !== 'details' || getDetailsSummary(element) == null) && (nodeName !== 'input' || element.type !== 'hidden');
}
function isFocusableElement(element) {
  if (!isFocusableCandidate(element) || !element.isConnected || element.matches(':disabled')) {
    return false;
  }
  for (let current = element; current; current = getParentElement(current)) {
    const isAncestor = current !== element;
    const isSlot = (0,_floating_ui_utils_dom__rspack_import_0/* .getNodeName */.mq)(current) === 'slot';
    if (current.hasAttribute('inert')) {
      return false;
    }
    if (isAncestor && (0,_floating_ui_utils_dom__rspack_import_0/* .getNodeName */.mq)(current) === 'details' && !current.open && !isWithinOpenDetailsSummary(element, current) || current.hasAttribute('hidden') || !isSlot && !isVisibleInTabbableTree(current, isAncestor)) {
      return false;
    }
  }
  return true;
}
function isVisibleInTabbableTree(element, isAncestor) {
  const styles = (0,_floating_ui_utils_dom__rspack_import_0/* .getComputedStyle */.L9)(element);
  if (!isAncestor) {
    return (0,_composite_mjs__rspack_import_2/* .isElementVisible */.J9)(element, styles);
  }
  return styles.display !== 'none';
}
function getTabIndex(element) {
  const tabIndex = element.tabIndex;
  if (tabIndex < 0) {
    const nodeName = (0,_floating_ui_utils_dom__rspack_import_0/* .getNodeName */.mq)(element);
    if (nodeName === 'details' || nodeName === 'audio' || nodeName === 'video' || (0,_floating_ui_utils_dom__rspack_import_0/* .isHTMLElement */.sb)(element) && element.isContentEditable) {
      return 0;
    }
  }
  return tabIndex;
}
function getNamedRadioInput(element) {
  if ((0,_floating_ui_utils_dom__rspack_import_0/* .getNodeName */.mq)(element) !== 'input') {
    return null;
  }
  const input = element;
  return input.type === 'radio' && input.name !== '' ? input : null;
}
function isTabbableRadio(element, candidates) {
  const input = getNamedRadioInput(element);
  if (!input) {
    return true;
  }
  const checkedRadio = candidates.find(candidate => {
    const radio = getNamedRadioInput(candidate);
    return radio?.name === input.name && radio.form === input.form && radio.checked;
  });
  if (checkedRadio) {
    return checkedRadio === input;
  }
  return candidates.find(candidate => {
    const radio = getNamedRadioInput(candidate);
    return radio?.name === input.name && radio.form === input.form;
  }) === input;
}
function getComposedChildren(container) {
  if ((0,_floating_ui_utils_dom__rspack_import_0/* .isHTMLElement */.sb)(container) && (0,_floating_ui_utils_dom__rspack_import_0/* .getNodeName */.mq)(container) === 'slot') {
    const assignedElements = container.assignedElements({
      flatten: true
    });
    if (assignedElements.length > 0) {
      return assignedElements;
    }
  }
  if ((0,_floating_ui_utils_dom__rspack_import_0/* .isHTMLElement */.sb)(container) && container.shadowRoot) {
    return Array.from(container.shadowRoot.children);
  }
  return Array.from(container.children);
}
function appendCandidates(container, list) {
  getComposedChildren(container).forEach(child => {
    if (isFocusableCandidate(child)) {
      list.push(child);
    }
    appendCandidates(child, list);
  });
}
function appendMatchingElements(container, selector, list) {
  getComposedChildren(container).forEach(child => {
    if ((0,_floating_ui_utils_dom__rspack_import_0/* .isHTMLElement */.sb)(child) && child.matches(selector)) {
      list.push(child);
    }
    appendMatchingElements(child, selector, list);
  });
}
function isTabbable(element) {
  return isFocusableElement(element) && getTabIndex(element) >= 0;
}
function focusable(container) {
  const candidates = [];
  appendCandidates(container, candidates);
  return candidates.filter(isFocusableElement);
}
function tabbable(container) {
  const candidates = focusable(container);
  return candidates.filter(element => getTabIndex(element) >= 0 && isTabbableRadio(element, candidates));
}
function getTabbableIn(container, dir) {
  const list = tabbable(container);
  const len = list.length;
  if (len === 0) {
    return undefined;
  }
  const active = (0,_element_mjs__rspack_import_1/* .activeElement */.RS)((0,_base_ui_utils_owner__rspack_import_3/* .ownerDocument */.R)(container));
  const index = list.indexOf(active);
  // eslint-disable-next-line no-nested-ternary
  const nextIndex = index === -1 ? dir === 1 ? 0 : len - 1 : index + dir;
  return list[nextIndex];
}
function getNextTabbable(referenceElement) {
  return getTabbableIn((0,_base_ui_utils_owner__rspack_import_3/* .ownerDocument */.R)(referenceElement).body, 1) || referenceElement;
}
function getPreviousTabbable(referenceElement) {
  return getTabbableIn((0,_base_ui_utils_owner__rspack_import_3/* .ownerDocument */.R)(referenceElement).body, -1) || referenceElement;
}
function getTabbableNearElement(referenceElement, dir) {
  if (!referenceElement) {
    return null;
  }
  const list = tabbable(ownerDocument(referenceElement).body);
  const elementCount = list.length;
  if (elementCount === 0) {
    return null;
  }
  const index = list.indexOf(referenceElement);
  if (index === -1) {
    return null;
  }
  const nextIndex = (index + dir + elementCount) % elementCount;
  return list[nextIndex];
}
function getTabbableAfterElement(referenceElement) {
  return getTabbableNearElement(referenceElement, 1);
}
function getTabbableBeforeElement(referenceElement) {
  return getTabbableNearElement(referenceElement, -1);
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !(0,_element_mjs__rspack_import_1/* .contains */.gR)(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = tabbable(container);
  tabbableElements.forEach(element => {
    element.dataset.tabindex = element.getAttribute('tabindex') || '';
    element.setAttribute('tabindex', '-1');
  });
}
function enableFocusInside(container) {
  const elements = [];
  appendMatchingElements(container, '[data-tabindex]', elements);
  elements.forEach(element => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute('tabindex', tabindex);
    } else {
      element.removeAttribute('tabindex');
    }
  });
}
__webpack_require__.d(__webpack_exports__, {
  AO: () => (isTabbable),
  Kr: () => (tabbable),
  N: () => (disableFocusInside),
  Qp: () => (isOutsideEvent),
  XJ: () => (getPreviousTabbable),
  nq: () => (focusable),
  vF: () => (getNextTabbable),
  yV: () => (enableFocusInside)
});


},
72191(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
'use client';


const CompositeListContext = /*#__PURE__*/react__rspack_import_0.createContext({
  register: () => {},
  unregister: () => {},
  subscribeMapChange: () => () => {},
  nextIndexRef: {
    current: 0
  }
});
if (false) {}
function useCompositeListContext() {
  return react__rspack_import_0.useContext(CompositeListContext);
}
__webpack_require__.d(__webpack_exports__, {
  M: () => (useCompositeListContext)
}, {
  D: CompositeListContext
});


},
80617(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
const TYPEAHEAD_RESET_MS = 500;
const PATIENT_CLICK_THRESHOLD = 500;
const DISABLED_TRANSITIONS_STYLE = {
  style: {
    transition: 'none'
  }
};
const CLICK_TRIGGER_IDENTIFIER = 'data-base-ui-click-trigger';
const BASE_UI_SWIPE_IGNORE_ATTRIBUTE = 'data-base-ui-swipe-ignore';
const LEGACY_SWIPE_IGNORE_ATTRIBUTE = 'data-swipe-ignore';
const BASE_UI_SWIPE_IGNORE_SELECTOR = `[${BASE_UI_SWIPE_IGNORE_ATTRIBUTE}]`;
const LEGACY_SWIPE_IGNORE_SELECTOR = `[${LEGACY_SWIPE_IGNORE_ATTRIBUTE}]`;

/**
 * Used for dropdowns that usually strictly prefer top/bottom placements and
 * use `var(--available-height)` to limit their height.
 */
const DROPDOWN_COLLISION_AVOIDANCE = {
  fallbackAxisSide: 'none'
};

/**
 * Used by regular popups that usually aren't scrollable and are allowed to
 * freely flip to any axis of placement.
 */
const POPUP_COLLISION_AVOIDANCE = (/* unused pure expression or super */ null && ({
  fallbackAxisSide: 'end'
}));

/**
 * Special visually hidden styles for the aria-owns owner element to ensure owned element
 * accessibility in iOS/Safari/VoiceControl.
 * The owner element is an empty span, so most of the common visually hidden styles are not needed.
 * @see https://github.com/floating-ui/floating-ui/issues/3403
 */
const ownerVisuallyHidden = {
  clipPath: 'inset(50%)',
  position: 'fixed',
  top: 0,
  left: 0
};
__webpack_require__.d(__webpack_exports__, {
}, {
  K2: DISABLED_TRANSITIONS_STYLE,
  Kd: CLICK_TRIGGER_IDENTIFIER,
  uD: DROPDOWN_COLLISION_AVOIDANCE,
  z_: ownerVisuallyHidden
});


},
93201(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _base_ui_utils_empty__rspack_import_0 = __webpack_require__(11716);



/**
 * Maps a change `reason` string to the corresponding native event type.
 */

/**
 * Details of custom change events emitted by Base UI components.
 */

/**
 * Details of custom generic events emitted by Base UI components.
 */

/**
 * Creates a Base UI event details object with the given reason and utilities
 * for preventing Base UI's internal event handling.
 */
function createChangeEventDetails(reason, event, trigger, customProperties) {
  let canceled = false;
  let allowPropagation = false;
  const custom = customProperties ?? _base_ui_utils_empty__rspack_import_0/* .EMPTY_OBJECT */.t0;
  const details = {
    reason,
    event: event ?? new Event('base-ui'),
    cancel() {
      canceled = true;
    },
    allowPropagation() {
      allowPropagation = true;
    },
    get isCanceled() {
      return canceled;
    },
    get isPropagationAllowed() {
      return allowPropagation;
    },
    trigger,
    ...custom
  };
  return details;
}
function createGenericEventDetails(reason, event, customProperties) {
  const custom = customProperties ?? _base_ui_utils_empty__rspack_import_0/* .EMPTY_OBJECT */.t0;
  const details = {
    reason,
    event: event ?? new Event('base-ui'),
    ...custom
  };
  return details;
}
__webpack_require__.d(__webpack_exports__, {
  M: () => (createGenericEventDetails),
  d: () => (createChangeEventDetails)
});


},
26246(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
'use client';


const DirectionContext = /*#__PURE__*/react__rspack_import_0.createContext(undefined);
if (false) {}
function useDirection() {
  const context = react__rspack_import_0.useContext(DirectionContext);
  return context?.direction ?? 'ltr';
}
__webpack_require__.d(__webpack_exports__, {
  j: () => (useDirection)
});


},
43236(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
const DEFAULT_VALIDITY_STATE = {
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: null,
  valueMissing: false
};
const DEFAULT_FIELD_STATE_ATTRIBUTES = {
  valid: null,
  touched: false,
  dirty: false,
  filled: false,
  focused: false
};
const DEFAULT_FIELD_ROOT_STATE = {
  disabled: false,
  ...DEFAULT_FIELD_STATE_ATTRIBUTES
};
const fieldValidityMapping = {
  valid(value) {
    if (value === null) {
      return null;
    }
    if (value) {
      return {
        'data-valid': ''
      };
    }
    return {
      'data-invalid': ''
    };
  }
};
__webpack_require__.d(__webpack_exports__, {
}, {
  HH: DEFAULT_FIELD_STATE_ATTRIBUTES,
  ZV: DEFAULT_VALIDITY_STATE,
  dc: fieldValidityMapping,
  mk: DEFAULT_FIELD_ROOT_STATE
});


},
36649(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _base_ui_utils_formatErrorMessage__rspack_import_3 = __webpack_require__(98103);
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var _noop_mjs__rspack_import_2 = __webpack_require__(11716);
/* import */ var _field_constants_constants_mjs__rspack_import_1 = __webpack_require__(43236);
'use client';






const DEFAULT_FIELD_ROOT_CONTEXT = {
  invalid: undefined,
  name: undefined,
  validityData: {
    state: _field_constants_constants_mjs__rspack_import_1/* .DEFAULT_VALIDITY_STATE */.ZV,
    errors: [],
    error: '',
    value: '',
    initialValue: null
  },
  setValidityData: _noop_mjs__rspack_import_2/* .NOOP */.tE,
  disabled: undefined,
  setTouched: _noop_mjs__rspack_import_2/* .NOOP */.tE,
  setDirty: _noop_mjs__rspack_import_2/* .NOOP */.tE,
  setFilled: _noop_mjs__rspack_import_2/* .NOOP */.tE,
  setFocused: _noop_mjs__rspack_import_2/* .NOOP */.tE,
  validationMode: 'onSubmit',
  shouldValidateOnChange: () => false,
  state: _field_constants_constants_mjs__rspack_import_1/* .DEFAULT_FIELD_ROOT_STATE */.mk,
  registerFieldControl: _noop_mjs__rspack_import_2/* .NOOP */.tE,
  validation: {
    getValidationProps: (_disabled, props = _noop_mjs__rspack_import_2/* .EMPTY_OBJECT */.t0) => props,
    inputRef: {
      current: null
    },
    registeredInputs: new Map(),
    registerInput: _noop_mjs__rspack_import_2/* .NOOP */.tE,
    getInputControl: () => null,
    commit: async () => {},
    change: _noop_mjs__rspack_import_2/* .NOOP */.tE
  }
};
const FieldRootContext = /*#__PURE__*/react__rspack_import_0.createContext(DEFAULT_FIELD_ROOT_CONTEXT);
if (false) {}
function useFieldRootContext(optional = true) {
  const context = react__rspack_import_0.useContext(FieldRootContext);
  if (context.setValidityData === _noop_mjs__rspack_import_2/* .NOOP */.tE && !optional) {
    throw new Error( false ? 0 : (0,_base_ui_utils_formatErrorMessage__rspack_import_3/* ["default"] */.A)(28));
  }
  return context;
}
__webpack_require__.d(__webpack_exports__, {
  V$: () => (useFieldRootContext)
}, {
  eZ: FieldRootContext,
  er: DEFAULT_FIELD_ROOT_CONTEXT
});


},
21646(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _base_ui_utils_empty__rspack_import_1 = __webpack_require__(11716);
/* import */ var _constants_mjs__rspack_import_0 = __webpack_require__(80617);


function getDisabledMountTransitionStyles(transitionStatus) {
  return transitionStatus === 'starting' ? _constants_mjs__rspack_import_0/* .DISABLED_TRANSITIONS_STYLE */.K2 : _base_ui_utils_empty__rspack_import_1/* .EMPTY_OBJECT */.t0;
}
__webpack_require__.d(__webpack_exports__, {
  d: () => (getDisabledMountTransitionStyles)
});


},
5815(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
const defaultItemEquality = (itemValue, selectedValue) => Object.is(itemValue, selectedValue);
function compareItemEquality(itemValue, selectedValue, comparer) {
  if (itemValue == null || selectedValue == null) {
    return Object.is(itemValue, selectedValue);
  }
  return comparer(itemValue, selectedValue);
}
function selectedValueIncludes(selectedValues, itemValue, comparer) {
  if (!selectedValues || selectedValues.length === 0) {
    return false;
  }
  return selectedValues.some(selectedValue => {
    if (selectedValue === undefined) {
      return false;
    }
    return compareItemEquality(itemValue, selectedValue, comparer);
  });
}
function findItemIndex(itemValues, selectedValue, comparer) {
  if (!itemValues || itemValues.length === 0) {
    return -1;
  }
  return itemValues.findIndex(itemValue => {
    if (itemValue === undefined) {
      return false;
    }
    return compareItemEquality(itemValue, selectedValue, comparer);
  });
}
function findSelectionIndex(itemValues, selectedValue, comparer, multiple) {
  // Only unwrap in multiple mode: an array can itself be a valid single-select value.
  const lastValue = multiple && Array.isArray(selectedValue) ? selectedValue[selectedValue.length - 1] : selectedValue;
  const index = findItemIndex(itemValues, lastValue, comparer);
  return index === -1 ? null : index;
}
function removeItem(selectedValues, itemValue, comparer) {
  return selectedValues.filter(selectedValue => !compareItemEquality(itemValue, selectedValue, comparer));
}
__webpack_require__.d(__webpack_exports__, {
  Ai: () => (removeItem),
  Gu: () => (findSelectionIndex),
  Vz: () => (findItemIndex),
  kJ: () => (selectedValueIncludes),
  tl: () => (compareItemEquality)
}, {
  jd: defaultItemEquality
});


},
16742(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var _noop_mjs__rspack_import_1 = __webpack_require__(11716);
'use client';



/**
 * A context for providing [labelable elements](https://html.spec.whatwg.org/multipage/forms.html#category-label)\
 * with an accessible name (label) and description.
 */
const LabelableContext = /*#__PURE__*/react__rspack_import_0.createContext({
  controlId: undefined,
  registerControlId: _noop_mjs__rspack_import_1/* .NOOP */.tE,
  labelId: undefined,
  setLabelId: _noop_mjs__rspack_import_1/* .NOOP */.tE,
  messageIds: [],
  setMessageIds: _noop_mjs__rspack_import_1/* .NOOP */.tE,
  getDescriptionProps: externalProps => externalProps
});
if (false) {}
function useLabelableContext() {
  return react__rspack_import_0.useContext(LabelableContext);
}
__webpack_require__.d(__webpack_exports__, {
  H: () => (useLabelableContext)
});


},
39083(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var _base_ui_utils_useIsoLayoutEffect__rspack_import_6 = __webpack_require__(74732);
/* import */ var _base_ui_utils_useStableCallback__rspack_import_4 = __webpack_require__(77942);
/* import */ var _base_ui_utils_useRefWithInit__rspack_import_3 = __webpack_require__(24351);
/* import */ var _floating_ui_utils_dom__rspack_import_7 = __webpack_require__(54951);
/* import */ var _noop_mjs__rspack_import_5 = __webpack_require__(11716);
/* import */ var _useBaseUiId_mjs__rspack_import_2 = __webpack_require__(35641);
/* import */ var _LabelableContext_mjs__rspack_import_1 = __webpack_require__(16742);
'use client';









function useLabelableId(params = {}) {
  const {
    id,
    implicit = false,
    controlRef
  } = params;
  const {
    controlId,
    registerControlId
  } = (0,_LabelableContext_mjs__rspack_import_1/* .useLabelableContext */.H)();
  const defaultId = (0,_useBaseUiId_mjs__rspack_import_2/* .useBaseUiId */.e)(id);
  const controlIdForEffect = implicit ? controlId : undefined;
  const controlSourceRef = (0,_base_ui_utils_useRefWithInit__rspack_import_3/* .useRefWithInit */.j)(() => Symbol());
  const hasRegisteredRef = react__rspack_import_0.useRef(false);
  const hadExplicitIdRef = react__rspack_import_0.useRef(id != null);
  const unregisterControlId = (0,_base_ui_utils_useStableCallback__rspack_import_4/* .useStableCallback */.K)(() => {
    if (!hasRegisteredRef.current || registerControlId === _noop_mjs__rspack_import_5/* .NOOP */.tE) {
      return;
    }
    hasRegisteredRef.current = false;
    registerControlId(controlSourceRef.current, undefined);
  });
  (0,_base_ui_utils_useIsoLayoutEffect__rspack_import_6/* .useIsoLayoutEffect */.g)(() => {
    if (registerControlId === _noop_mjs__rspack_import_5/* .NOOP */.tE) {
      return undefined;
    }
    let nextId;
    if (implicit) {
      const elem = controlRef?.current;
      if ((0,_floating_ui_utils_dom__rspack_import_7/* .isElement */.vq)(elem) && elem.closest('label') != null) {
        nextId = id ?? null;
      } else {
        nextId = controlIdForEffect ?? defaultId;
      }
    } else if (id != null) {
      hadExplicitIdRef.current = true;
      nextId = id;
    } else if (hadExplicitIdRef.current) {
      nextId = defaultId;
    } else {
      unregisterControlId();
      return undefined;
    }
    if (nextId === undefined) {
      unregisterControlId();
      return undefined;
    }
    hasRegisteredRef.current = true;
    registerControlId(controlSourceRef.current, nextId);
    return undefined;
  }, [id, controlRef, controlIdForEffect, registerControlId, implicit, defaultId, controlSourceRef, unregisterControlId]);
  react__rspack_import_0.useEffect(() => {
    return unregisterControlId;
  }, [unregisterControlId]);
  return controlId ?? defaultId;
}
__webpack_require__.d(__webpack_exports__, {
  l: () => (useLabelableId)
});


},
5355(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
const none = 'none';
const triggerPress = 'trigger-press';
const triggerHover = 'trigger-hover';
const triggerFocus = 'trigger-focus';
const outsidePress = 'outside-press';
const itemPress = 'item-press';
const closePress = 'close-press';
const linkPress = 'link-press';
const clearPress = 'clear-press';
const chipRemovePress = 'chip-remove-press';
const trackPress = 'track-press';
const incrementPress = 'increment-press';
const decrementPress = 'decrement-press';
const inputChange = 'input-change';
const inputClear = 'input-clear';
const inputBlur = 'input-blur';
const inputPaste = 'input-paste';
const inputPress = 'input-press';
const focusOut = 'focus-out';
const escapeKey = 'escape-key';
const closeWatcher = 'close-watcher';
const listNavigation = 'list-navigation';
const keyboard = 'keyboard';
const pointer = 'pointer';
const drag = 'drag';
const wheel = 'wheel';
const scrub = 'scrub';
const cancelOpen = 'cancel-open';
const siblingOpen = 'sibling-open';
const disabled = 'disabled';
const missing = 'missing';
const initial = 'initial';
const imperativeAction = 'imperative-action';
const swipe = 'swipe';
const windowResize = 'window-resize';
__webpack_require__.d(__webpack_exports__, {
}, {
  Bo: itemPress,
  Dq: listNavigation,
  LO: cancelOpen,
  N7: triggerHover,
  Np: outsidePress,
  QJ: keyboard,
  R0: clearPress,
  SR: closePress,
  Ui: triggerPress,
  Wn: pointer,
  Xn: focusOut,
  _J: inputPress,
  jv: escapeKey,
  pf: inputChange,
  qs: inputClear
});


},
73241(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Dp: () => (/* binding */ hasNullItemLabel),
  Li: () => (/* binding */ isGroupedItems),
  yg: () => (/* binding */ stringifyAsLabel),
  T: () => (/* binding */ stringifyAsValue)
});

// UNUSED EXPORTS: resolveMultipleLabels, resolveSelectedLabel

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/internals/serializeValue.mjs
function serializeValue(value) {
  if (value == null) {
    return '';
  }
  if (typeof value === 'string') {
    return value;
  }
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/internals/resolveValueLabel.mjs
'use client';




function isGroupedItems(items) {
  return items != null && items.length > 0 && typeof items[0] === 'object' && items[0] != null && 'items' in items[0];
}

/**
 * Checks if the items array contains an item with a null value that has a non-null label.
 */
function hasNullItemLabel(items) {
  if (!Array.isArray(items)) {
    return items != null && 'null' in items;
  }
  const arrayItems = items;
  if (isGroupedItems(arrayItems)) {
    for (const group of arrayItems) {
      for (const item of group.items) {
        if (item && item.value == null && item.label != null) {
          return true;
        }
      }
    }
    return false;
  }
  for (const item of arrayItems) {
    if (item && item.value == null && item.label != null) {
      return true;
    }
  }
  return false;
}
function stringifyAsLabel(item, itemToStringLabel) {
  if (itemToStringLabel && item != null) {
    return itemToStringLabel(item) ?? '';
  }
  if (item && typeof item === 'object') {
    if ('label' in item && item.label != null) {
      return String(item.label);
    }
    if ('value' in item) {
      return String(item.value);
    }
  }
  return serializeValue(item);
}
function stringifyAsValue(item, itemToStringValue) {
  if (itemToStringValue && item != null) {
    return itemToStringValue(item) ?? '';
  }
  if (item && typeof item === 'object' && 'value' in item && 'label' in item) {
    return serializeValue(item.value);
  }
  return serializeValue(item);
}
function resolveSelectedLabel(value, items, itemToStringLabel) {
  function fallback() {
    return stringifyAsLabel(value, itemToStringLabel);
  }
  if (itemToStringLabel && value != null) {
    return itemToStringLabel(value);
  }

  // Custom object with explicit label takes precedence
  if (value && typeof value === 'object' && 'label' in value && value.label != null) {
    return value.label;
  }

  // Items provided as plain record map
  if (items && !Array.isArray(items)) {
    return items[value] ?? fallback();
  }

  // Items provided as array (flat or grouped)
  if (Array.isArray(items)) {
    const arrayItems = items;
    const flatItems = isGroupedItems(arrayItems) ? arrayItems.flatMap(group => group.items) : arrayItems;
    if (value == null || typeof value !== 'object') {
      const match = flatItems.find(item => item.value === value);
      if (match && match.label != null) {
        return match.label;
      }
      return fallback();
    }

    // Object without explicit label: try matching by its `value` property
    if ('value' in value) {
      const match = flatItems.find(item => item && item.value === value.value);
      if (match && match.label != null) {
        return match.label;
      }
    }
  }
  return fallback();
}
function resolveMultipleLabels(values, items, itemToStringLabel) {
  return values.reduce((acc, value, index) => {
    if (index > 0) {
      acc.push(', ');
    }
    acc.push(/*#__PURE__*/_jsx(React.Fragment, {
      children: resolveSelectedLabel(value, items, itemToStringLabel)
    }, index));
    return acc;
  }, []);
}

},
55638(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _floating_ui_utils_dom__rspack_import_0 = __webpack_require__(54951);

function activeElement(doc) {
  let element = doc.activeElement;
  while (element?.shadowRoot?.activeElement != null) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode?.();

  // First, attempt with the faster native method.
  if (parent.contains(child)) {
    return true;
  }

  // Then fall back to traversing out of shadow roots when needed.
  if (rootNode && (0,_floating_ui_utils_dom__rspack_import_0/* .isShadowRoot */.Ng)(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function getTarget(event) {
  if ('composedPath' in event) {
    return event.composedPath()[0];
  }

  // TS assumes `composedPath()` always exists, but older browsers without
  // shadow DOM support still fall back to `target`.
  return event.target;
}
__webpack_require__.d(__webpack_exports__, {
  EW: () => (getTarget),
  RS: () => (activeElement),
  gR: () => (contains)
});


},
55032(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
let TransitionStatusDataAttributes = /*#__PURE__*/function (TransitionStatusDataAttributes) {
  /**
   * Present when the component begins animating in.
   */
  TransitionStatusDataAttributes["startingStyle"] = "data-starting-style";
  /**
   * Present when the component is animating out.
   */
  TransitionStatusDataAttributes["endingStyle"] = "data-ending-style";
  return TransitionStatusDataAttributes;
}({});
const STARTING_HOOK = {
  'data-starting-style': ''
};
const ENDING_HOOK = {
  'data-ending-style': ''
};
const transitionStatusMapping = {
  transitionStatus(value) {
    if (value === 'starting') {
      return STARTING_HOOK;
    }
    if (value === 'ending') {
      return ENDING_HOOK;
    }
    return null;
  }
};
__webpack_require__.d(__webpack_exports__, {
  T: () => (TransitionStatusDataAttributes)
}, {
  G: transitionStatusMapping
});


},
78973(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ useButton)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
var floating_ui_utils_dom = __webpack_require__(54951);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useStableCallback.mjs
var useStableCallback = __webpack_require__(77942);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useIsoLayoutEffect.mjs
var useIsoLayoutEffect = __webpack_require__(74732);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/merge-props/mergeProps.mjs
var mergeProps = __webpack_require__(23057);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/formatErrorMessage.mjs
var formatErrorMessage = __webpack_require__(98103);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs
'use client';



const CompositeRootContext = /*#__PURE__*/react.createContext(undefined);
if (false) {}
function useCompositeRootContext(optional = false) {
  const context = react.useContext(CompositeRootContext);
  if (context === undefined && !optional) {
    throw new Error( false ? 0 : (0,formatErrorMessage/* ["default"] */.A)(16));
  }
  return context;
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs
'use client';


function useFocusableWhenDisabled(parameters) {
  const {
    focusableWhenDisabled,
    disabled,
    composite = false,
    tabIndex: tabIndexProp = 0,
    isNativeButton
  } = parameters;
  const isFocusableComposite = composite && focusableWhenDisabled !== false;
  const isNonFocusableComposite = composite && focusableWhenDisabled === false;

  // we can't explicitly assign `undefined` to any of these props because it
  // would otherwise prevent subsequently merged props from setting them
  const props = react.useMemo(() => {
    const additionalProps = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(event) {
        if (disabled && focusableWhenDisabled && event.key !== 'Tab') {
          event.preventDefault();
        }
      }
    };
    if (!composite) {
      additionalProps.tabIndex = tabIndexProp;
      if (!isNativeButton && disabled) {
        additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
      }
    }
    if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled) {
      additionalProps['aria-disabled'] = disabled;
    }
    if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
      additionalProps.disabled = disabled;
    }
    return additionalProps;
  }, [composite, disabled, focusableWhenDisabled, isFocusableComposite, isNonFocusableComposite, isNativeButton, tabIndexProp]);
  return {
    props
  };
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/dispatchClickWithModifiers.mjs

/**
 * Dispatches a constructed click on the target so it carries the source event's
 * modifier state, which `click()` always reports as unpressed. Like `click()`,
 * the untrusted click still runs native activation behavior (form submission,
 * link navigation).
 * `detail` defaults to 0 (the native convention for keyboard-generated clicks);
 * pass `detail: 1` when the click represents a mouse gesture so consumers keying
 * off `detail === 0` don't classify it as a keyboard activation.
 */
function dispatchClickWithModifiers(target, sourceEvent, {
  detail = 0
} = {}) {
  target.dispatchEvent(new ((0,floating_ui_utils_dom/* .getWindow */.zk)(target).PointerEvent)('click', {
    bubbles: true,
    cancelable: true,
    composed: true,
    detail,
    shiftKey: sourceEvent.shiftKey,
    ctrlKey: sourceEvent.ctrlKey,
    altKey: sourceEvent.altKey,
    metaKey: sourceEvent.metaKey
  }));
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/internals/use-button/useButton.mjs
'use client';











function useButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    tabIndex = 0,
    native: isNativeButton = true,
    composite: compositeProp
  } = parameters;
  const elementRef = react.useRef(null);
  const compositeRootContext = useCompositeRootContext(true);
  const isCompositeItem = compositeProp ?? compositeRootContext !== undefined;
  const {
    props: focusableWhenDisabledProps
  } = useFocusableWhenDisabled({
    focusableWhenDisabled,
    disabled,
    composite: isCompositeItem,
    tabIndex,
    isNativeButton
  });
  if (false) {}

  // handles a disabled composite button rendering another button, e.g.
  // <Toolbar.Button disabled render={<Menu.Trigger />} />
  // the `disabled` prop needs to pass through 2 `useButton`s then finally
  // delete the `disabled` attribute from DOM
  const updateDisabled = react.useCallback(() => {
    const element = elementRef.current;
    if (!isButtonElement(element)) {
      return;
    }
    if (isCompositeItem && disabled && focusableWhenDisabledProps.disabled === undefined && element.disabled) {
      element.disabled = false;
    }
  }, [disabled, focusableWhenDisabledProps.disabled, isCompositeItem]);
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(updateDisabled, [updateDisabled]);
  const getButtonProps = react.useCallback((externalProps = {}) => {
    const {
      onClick: externalOnClick,
      onMouseDown: externalOnMouseDown,
      onKeyUp: externalOnKeyUp,
      onKeyDown: externalOnKeyDown,
      onPointerDown: externalOnPointerDown,
      ...otherExternalProps
    } = externalProps;
    return (0,mergeProps/* .mergeProps */.v6)({
      onClick(event) {
        if (disabled) {
          event.preventDefault();
          return;
        }
        externalOnClick?.(event);
      },
      onMouseDown(event) {
        if (!disabled) {
          externalOnMouseDown?.(event);
        }
      },
      onKeyDown(event) {
        if (disabled) {
          return;
        }
        (0,mergeProps/* .makeEventPreventable */.PT)(event);
        externalOnKeyDown?.(event);
        if (event.baseUIHandlerPrevented) {
          return;
        }
        const isCurrentTarget = event.target === event.currentTarget;
        const currentTarget = event.currentTarget;
        const isButton = isButtonElement(currentTarget);
        const isLink = !isNativeButton && isValidLinkElement(currentTarget);
        const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
        const isEnterKey = event.key === 'Enter';
        const isSpaceKey = event.key === ' ';
        const role = currentTarget.getAttribute('role');
        const isTextNavigationRole = role?.startsWith('menuitem') || role === 'option' || role === 'gridcell';
        if (isCurrentTarget && isCompositeItem && isSpaceKey) {
          if (event.defaultPrevented && isTextNavigationRole) {
            return;
          }
          event.preventDefault();

          // Only a native-mode item that isn't a real <button> is excluded.
          if (!isNativeButton || isButton) {
            event.preventBaseUIHandler();
            dispatchClickWithModifiers(currentTarget, event);
          }
          return;
        }

        // Keyboard accessibility for native and non-native elements.
        if (!shouldClick || isNativeButton || !isSpaceKey && !isEnterKey) {
          // Space activates links on keyup (`role="button"` semantics, matching the
          // composite path); prevent the page scroll Space would otherwise trigger.
          // Enter is left to the browser's native link activation.
          if (isCurrentTarget && isLink && isSpaceKey) {
            event.preventDefault();
          }
          return;
        }

        // Match native buttons: preventing the keydown's default cancels activation.
        if (event.defaultPrevented) {
          return;
        }
        event.preventDefault();
        if (isEnterKey) {
          event.preventBaseUIHandler();
          dispatchClickWithModifiers(currentTarget, event);
        }
      },
      onKeyUp(event) {
        if (disabled) {
          return;
        }

        // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
        // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0
        (0,mergeProps/* .makeEventPreventable */.PT)(event);
        externalOnKeyUp?.(event);
        if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === ' ') {
          event.preventDefault();
          return;
        }
        if (event.baseUIHandlerPrevented) {
          return;
        }

        // Keyboard accessibility for non interactive elements.
        // Match native buttons: preventing the keyup's default cancels Space activation.
        // Limitation: unlike a native <button>, a prevented *keydown* cannot cancel the
        // activation — no state is kept between keydown and keyup, so we can't tell
        // whether the keydown was prevented or even happened on this element.
        if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && !event.defaultPrevented && event.key === ' ') {
          event.preventBaseUIHandler();
          dispatchClickWithModifiers(event.currentTarget, event);
        }
      },
      onPointerDown(event) {
        if (disabled) {
          event.preventDefault();
          return;
        }
        externalOnPointerDown?.(event);
      }
    }, isNativeButton ? {
      type: 'button'
    } : {
      role: 'button'
    }, focusableWhenDisabledProps, otherExternalProps);
  }, [disabled, focusableWhenDisabledProps, isCompositeItem, isNativeButton]);
  const buttonRef = (0,useStableCallback/* .useStableCallback */.K)(element => {
    elementRef.current = element;
    updateDisabled();
  });
  return {
    getButtonProps,
    buttonRef
  };
}
function isButtonElement(elem) {
  return (0,floating_ui_utils_dom/* .isHTMLElement */.sb)(elem) && elem.tagName === 'BUTTON';
}
function isValidLinkElement(elem) {
  return (0,floating_ui_utils_dom/* .isHTMLElement */.sb)(elem) && elem.tagName === 'A' && Boolean(elem.href);
}

},
35641(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _base_ui_utils_useId__rspack_import_0 = __webpack_require__(84941);
'use client';



/**
 * Wraps `useId` and prefixes generated `id`s with `base-ui-`
 * @param {string | undefined} idOverride overrides the generated id when provided
 * @returns {string | undefined}
 */
function useBaseUiId(idOverride) {
  return (0,_base_ui_utils_useId__rspack_import_0/* .useId */.B)(idOverride, 'base-ui');
}
__webpack_require__.d(__webpack_exports__, {
  e: () => (useBaseUiId)
});


},
83378(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ useOpenChangeComplete)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useStableCallback.mjs
var useStableCallback = __webpack_require__(77942);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(57947);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useAnimationFrame.mjs
var useAnimationFrame = __webpack_require__(72055);
// EXTERNAL MODULE: ./node_modules/@base-ui/react/utils/resolveRef.mjs
var resolveRef = __webpack_require__(77386);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
'use client';






/**
 * Executes a function once all animations have finished on the provided element.
 * If an animation is canceled, waits for any replacement animations before executing.
 * @param elementOrRef - The element to watch for animations.
 * @param waitForStartingStyleRemoved - Whether to wait for [data-starting-style] to be removed before checking for animations.
 * @returns A function that takes a callback to execute once all animations have finished, and an optional AbortSignal to abort the callback
 */
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false) {
  const frame = (0,useAnimationFrame/* .useAnimationFrame */.NR)();
  return (0,useStableCallback/* .useStableCallback */.K)((fnToExecute,
  /**
   * An optional [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that
   * can be used to abort `fnToExecute` before all the animations have finished.
   * @default null
   */
  signal = null) => {
    frame.cancel();
    const element = (0,resolveRef/* .resolveRef */.q)(elementOrRef);
    if (element == null) {
      return;
    }
    const resolvedElement = element;
    const done = () => {
      // Synchronously flush the unmounting of the component so that the browser doesn't
      // paint: https://github.com/mui/base-ui/issues/979
      react_dom.flushSync(fnToExecute);
    };
    if (typeof resolvedElement.getAnimations !== 'function' || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
      fnToExecute();
      return;
    }
    function exec() {
      Promise.all(resolvedElement.getAnimations().map(animation => animation.finished)).then(() => {
        if (!signal?.aborted) {
          done();
        }
      }, () => {
        if (signal?.aborted) {
          return;
        }
        const currentAnimations = resolvedElement.getAnimations();
        if (currentAnimations.some(animation => animation.pending || animation.playState !== 'finished')) {
          // Sometimes animations can be aborted because a property they depend on changes while the animation plays.
          // In such cases, we need to re-check if any new animations have started.
          exec();
          return;
        }
        done();
      });
    }
    if (waitForStartingStyleRemoved) {
      const startingStyleAttribute = 'data-starting-style';

      // If `[data-starting-style]` isn't present, fall back to waiting one more frame
      // to give "open" animations a chance to be registered.
      if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
        frame.request(exec);
        return;
      }

      // Wait for `[data-starting-style]` to have been removed.
      const attributeObserver = new MutationObserver(() => {
        if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
          attributeObserver.disconnect();
          exec();
        }
      });
      attributeObserver.observe(resolvedElement, {
        attributes: true,
        attributeFilter: [startingStyleAttribute]
      });
      signal?.addEventListener('abort', () => attributeObserver.disconnect(), {
        once: true
      });
      return;
    }
    frame.request(exec);
  });
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
'use client';





/**
 * Calls the provided function when the CSS open/close animation or transition completes.
 */
function useOpenChangeComplete(parameters) {
  const {
    enabled = true,
    open,
    ref,
    onComplete: onCompleteParam
  } = parameters;
  const onComplete = (0,useStableCallback/* .useStableCallback */.K)(onCompleteParam);
  const runOnceAnimationsFinish = useAnimationsFinished(ref, open);
  react.useEffect(() => {
    if (!enabled) {
      return undefined;
    }
    const abortController = new AbortController();
    runOnceAnimationsFinish(onComplete, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [enabled, open, onComplete, runOnceAnimationsFinish]);
}

},
21724(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ useRenderElement)
});

// EXTERNAL MODULE: ./node_modules/@base-ui/utils/formatErrorMessage.mjs
var formatErrorMessage = __webpack_require__(98103);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useMergedRefs.mjs
var useMergedRefs = __webpack_require__(34244);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/reactVersion.mjs
var reactVersion = __webpack_require__(15934);
;// CONCATENATED MODULE: ./node_modules/@base-ui/utils/getReactElementRef.mjs



/**
 * Extracts the `ref` from a React element, handling different React versions.
 */
function getReactElementRef(element) {
  if (! /*#__PURE__*/react.isValidElement(element)) {
    return null;
  }
  const reactElement = element;
  const propsWithRef = reactElement.props;
  return ((0,reactVersion/* .isReactVersionAtLeast */._)(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
}
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/mergeObjects.mjs
var mergeObjects = __webpack_require__(98673);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/empty.mjs
var empty = __webpack_require__(11716);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/internals/getStateAttributesProps.mjs
function getStateAttributesProps(state, customMapping) {
  const props = {};

  /* eslint-disable-next-line guard-for-in */
  for (const key in state) {
    const value = state[key];
    if (customMapping?.hasOwnProperty(key)) {
      const customProps = customMapping[key](value);
      if (customProps != null) {
        Object.assign(props, customProps);
      }
      continue;
    }
    if (value === true) {
      props[`data-${key.toLowerCase()}`] = '';
    } else if (value) {
      props[`data-${key.toLowerCase()}`] = value.toString();
    }
  }
  return props;
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/resolveClassName.mjs
/**
 * If the provided className is a string, it will be returned as is.
 * Otherwise, the function will call the className function with the state as the first argument.
 *
 * @param className
 * @param state
 */
function resolveClassName(className, state) {
  return typeof className === 'function' ? className(state) : className;
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/resolveStyle.mjs
/**
 * If the provided style is an object, it will be returned as is.
 * Otherwise, the function will call the style function with the state as the first argument.
 *
 * @param style
 * @param state
 */
function resolveStyle(style, state) {
  return typeof style === 'function' ? style(state) : style;
}
// EXTERNAL MODULE: ./node_modules/@base-ui/react/merge-props/mergeProps.mjs
var mergeProps = __webpack_require__(23057);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/internals/useRenderElement.mjs












/**
 * Renders a Base UI element.
 *
 * @param element The default HTML element to render. Can be overridden by the `render` prop.
 * @param componentProps An object containing the `render` and `className` props to be used for element customization. Other props are ignored.
 * @param params Additional parameters for rendering the element.
 */
function useRenderElement(element, componentProps, params = {}) {
  const renderProp = componentProps.render;
  const outProps = useRenderElementProps(componentProps, params);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? empty/* .EMPTY_OBJECT */.t0;
  return evaluateRenderProp(element, renderProp, outProps, state);
}

/**
 * Computes render element final props.
 */
function useRenderElementProps(componentProps, params = {}) {
  const {
    className: classNameProp,
    style: styleProp,
    render: renderProp
  } = componentProps;
  const {
    state = empty/* .EMPTY_OBJECT */.t0,
    ref,
    props,
    stateAttributesMapping,
    enabled = true
  } = params;
  const className = enabled ? resolveClassName(classNameProp, state) : undefined;
  const style = enabled ? resolveStyle(styleProp, state) : undefined;
  const stateProps = enabled ? getStateAttributesProps(state, stateAttributesMapping) : empty/* .EMPTY_OBJECT */.t0;
  const resolvedProps = enabled && props ? resolveRenderFunctionProps(props) : undefined;

  // Ensure outProps is always a new mutable object when enabled, never EMPTY_OBJECT.
  // This prevents potential TypeError when setting ref, className, or style properties,
  // since EMPTY_OBJECT is frozen and mutations would fail in strict mode.
  const outProps = enabled ? (0,mergeObjects/* .mergeObjects */.r)(stateProps, resolvedProps) ?? {} : empty/* .EMPTY_OBJECT */.t0;

  // SAFETY: The `useMergedRefs` functions use a single hook to store the same value,
  // switching between them at runtime is safe. If this assertion fails, React will
  // throw at runtime anyway.
  // This also skips the `useMergedRefs` call on the server, which is fine because
  // refs are not used on the server side.
  /* eslint-disable react-hooks/rules-of-hooks */
  if (typeof document !== 'undefined') {
    if (!enabled) {
      // Called only to keep the hook order stable when disabled; the merged ref is unused.
      void (0,useMergedRefs/* .useMergedRefs */.a)(null, null);
    } else if (Array.isArray(ref)) {
      outProps.ref = (0,useMergedRefs/* .useMergedRefsN */.U)([outProps.ref, getReactElementRef(renderProp), ...ref]);
    } else {
      outProps.ref = (0,useMergedRefs/* .useMergedRefs */.a)(outProps.ref, getReactElementRef(renderProp), ref);
    }
  }
  if (!enabled) {
    return empty/* .EMPTY_OBJECT */.t0;
  }
  if (className !== undefined) {
    outProps.className = (0,mergeProps/* .mergeClassNames */.VN)(outProps.className, className);
  }
  if (style !== undefined) {
    outProps.style = (0,mergeObjects/* .mergeObjects */.r)(outProps.style, style);
  }
  return outProps;
}
function resolveRenderFunctionProps(props) {
  if (Array.isArray(props)) {
    return (0,mergeProps/* .mergePropsN */.lZ)(props);
  }
  return (0,mergeProps/* .mergeProps */.v6)(undefined, props);
}

// The symbol React uses internally for lazy components
// https://github.com/react/react/blob/a0566250b210499b4c5677f5ac2eedbd71d51a1b/packages/shared/ReactSymbols.js#L31
//
// TODO delete once https://github.com/react/react/issues/32392 is fixed
const REACT_LAZY_TYPE = Symbol.for('react.lazy');
const COMPONENT_IDENTIFIER_PATTERN = /^[A-Z][A-Za-z0-9$]*$/;
const LOWERCASE_CHARACTER_PATTERN = /[a-z]/;
function evaluateRenderProp(element, render, props, state) {
  if (render) {
    if (typeof render === 'function') {
      if (false) {}
      return render(props, state);
    }
    const mergedProps = (0,mergeProps/* .mergeProps */.v6)(props, render.props);
    mergedProps.ref = props.ref;
    let newElement = render;
    // Workaround for https://github.com/react/react/issues/32392
    // This works because the toArray() logic unwrap lazy element type in
    // https://github.com/react/react/blob/a0566250b210499b4c5677f5ac2eedbd71d51a1b/packages/react/src/ReactChildren.js#L186
    if (newElement?.$$typeof === REACT_LAZY_TYPE) {
      const children = react.Children.toArray(render);
      newElement = children[0];
    }

    // There is a high number of indirections, the error message thrown by React.cloneElement() is
    // hard to use for developers, this logic provides a better context.
    //
    // Our general guideline is to never change the control flow depending on the environment.
    // However, React.cloneElement() throws if React.isValidElement() is false,
    // so we can throw before with custom message.
    if (false) {}
    return /*#__PURE__*/react.cloneElement(newElement, mergedProps);
  }
  if (element) {
    if (typeof element === 'string') {
      return renderTag(element, props);
    }
  }
  // Unreachable, but the typings on `useRenderElement` need to be reworked
  // to annotate it correctly.
  throw new Error( false ? 0 : (0,formatErrorMessage/* ["default"] */.A)(8));
}
function warnIfRenderPropLooksLikeComponent(renderFn) {
  const functionName = renderFn.name;
  if (functionName.length === 0) {
    return;
  }
  if (!COMPONENT_IDENTIFIER_PATTERN.test(functionName)) {
    return;
  }
  if (!LOWERCASE_CHARACTER_PATTERN.test(functionName)) {
    return;
  }
  warn(`The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`, 'This usually means a React component was passed directly as `render={Component}`.', 'Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.', 'If this is an intentional render callback, rename it to start with a lowercase letter.', 'Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.', 'https://base-ui.com/r/invalid-render-prop');
}
function renderTag(Tag, props) {
  if (Tag === 'button') {
    return /*#__PURE__*/(0,react.createElement)("button", {
      type: "button",
      ...props,
      key: props.key
    });
  }
  if (Tag === 'img') {
    return /*#__PURE__*/(0,react.createElement)("img", {
      alt: "",
      ...props,
      key: props.key
    });
  }
  return /*#__PURE__*/react.createElement(Tag, props);
}

},
11924(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var _base_ui_utils_useIsoLayoutEffect__rspack_import_1 = __webpack_require__(74732);
/* import */ var _base_ui_utils_useAnimationFrame__rspack_import_2 = __webpack_require__(72055);
'use client';




/**
 * Provides a status string for CSS animations.
 * @param open - a boolean that determines if the element is open.
 * @param enableIdleState - a boolean that enables the `'idle'` state between `'starting'` and `'ending'`
 */
function useTransitionStatus(open, enableIdleState = false, deferEndingState = false) {
  const [transitionStatus, setTransitionStatus] = react__rspack_import_0.useState(open && enableIdleState ? 'idle' : undefined);
  const [mounted, setMounted] = react__rspack_import_0.useState(open);
  if (open && !mounted) {
    setMounted(true);
    setTransitionStatus('starting');
  }
  if (!open && mounted && transitionStatus !== 'ending' && !deferEndingState) {
    setTransitionStatus('ending');
  }
  if (!open && !mounted && transitionStatus === 'ending') {
    setTransitionStatus(undefined);
  }
  (0,_base_ui_utils_useIsoLayoutEffect__rspack_import_1/* .useIsoLayoutEffect */.g)(() => {
    if (!open && mounted && transitionStatus !== 'ending' && deferEndingState) {
      const frame = _base_ui_utils_useAnimationFrame__rspack_import_2/* .AnimationFrame.request */.KP.request(() => {
        setTransitionStatus('ending');
      });
      return () => {
        _base_ui_utils_useAnimationFrame__rspack_import_2/* .AnimationFrame.cancel */.KP.cancel(frame);
      };
    }
    return undefined;
  }, [open, mounted, transitionStatus, deferEndingState]);
  (0,_base_ui_utils_useIsoLayoutEffect__rspack_import_1/* .useIsoLayoutEffect */.g)(() => {
    if (!open || enableIdleState) {
      return undefined;
    }
    const frame = _base_ui_utils_useAnimationFrame__rspack_import_2/* .AnimationFrame.request */.KP.request(() => {
      // Avoid `flushSync` here due to Firefox.
      // See https://github.com/mui/base-ui/pull/3424
      setTransitionStatus(undefined);
    });
    return () => {
      _base_ui_utils_useAnimationFrame__rspack_import_2/* .AnimationFrame.cancel */.KP.cancel(frame);
    };
  }, [enableIdleState, open]);
  (0,_base_ui_utils_useIsoLayoutEffect__rspack_import_1/* .useIsoLayoutEffect */.g)(() => {
    if (!open || !enableIdleState) {
      return undefined;
    }
    if (open && mounted && transitionStatus !== 'idle') {
      setTransitionStatus('starting');
    }
    const frame = _base_ui_utils_useAnimationFrame__rspack_import_2/* .AnimationFrame.request */.KP.request(() => {
      setTransitionStatus('idle');
    });
    return () => {
      _base_ui_utils_useAnimationFrame__rspack_import_2/* .AnimationFrame.cancel */.KP.cancel(frame);
    };
  }, [enableIdleState, open, mounted, transitionStatus]);
  return {
    mounted,
    setMounted,
    transitionStatus
  };
}
__webpack_require__.d(__webpack_exports__, {
  $: () => (useTransitionStatus)
});


},
23057(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _base_ui_utils_mergeObjects__rspack_import_0 = __webpack_require__(98673);

const EMPTY_PROPS = {};

/* eslint-disable id-denylist */
/**
 * Merges multiple sets of React props. It follows the Object.assign pattern where the rightmost object's fields overwrite
 * the conflicting ones from others. This doesn't apply to event handlers, `className` and `style` props.
 *
 * Event handlers are merged and called in right-to-left order (rightmost handler executes first, leftmost last).
 * For React synthetic events, the rightmost handler can prevent prior (left-positioned) handlers from executing
 * by calling `event.preventBaseUIHandler()`. For non-synthetic events (custom events with primitive/object values),
 * all handlers always execute without prevention capability.
 *
 * The `className` prop is merged by concatenating classes in right-to-left order (rightmost class appears first in the string).
 * The `style` prop is merged with rightmost styles overwriting the prior ones.
 *
 * Props can either be provided as objects or as functions that take the previous props as an argument.
 * The function will receive the merged props up to that point (going from left to right):
 * so in the case of `(obj1, obj2, fn, obj3)`, `fn` will receive the merged props of `obj1` and `obj2`.
 * The function is responsible for chaining event handlers if needed (that is, we don't run the merge logic).
 *
 * Event handlers returned by the functions are not automatically prevented when `preventBaseUIHandler` is called.
 * They must check `event.baseUIHandlerPrevented` themselves and bail out if it's true.
 *
 * @important **`ref` is not merged.**
 * @param a Props object to merge.
 * @param b Props object to merge. The function will overwrite conflicting props from `a`.
 * @param c Props object to merge. The function will overwrite conflicting props from previous parameters.
 * @param d Props object to merge. The function will overwrite conflicting props from previous parameters.
 * @param e Props object to merge. The function will overwrite conflicting props from previous parameters.
 * @returns The merged props.
 * @public
 */

function mergeProps(a, b, c, d, e) {
  if (!c && !d && !e && !a) {
    return createInitialMergedProps(b);
  }

  // We need to mutably own `merged`.
  let merged = createInitialMergedProps(a);
  if (b) {
    merged = mergeInto(merged, b);
  }
  if (c) {
    merged = mergeInto(merged, c);
  }
  if (d) {
    merged = mergeInto(merged, d);
  }
  if (e) {
    merged = mergeInto(merged, e);
  }
  return merged;
}
/* eslint-enable id-denylist */

/**
 * Merges an arbitrary number of React props using the same logic as {@link mergeProps}.
 * This function accepts an array of props instead of individual arguments.
 *
 * This has slightly lower performance than {@link mergeProps} due to accepting an array
 * instead of a fixed number of arguments. Prefer {@link mergeProps} when merging 5 or
 * fewer prop sets for better performance.
 *
 * @param props Array of props to merge.
 * @returns The merged props.
 * @see mergeProps
 * @public
 */
function mergePropsN(props) {
  if (props.length === 0) {
    return EMPTY_PROPS;
  }
  if (props.length === 1) {
    return createInitialMergedProps(props[0]);
  }

  // We need to mutably own `merged`.
  let merged = createInitialMergedProps(props[0]);
  for (let i = 1; i < props.length; i += 1) {
    merged = mergeInto(merged, props[i]);
  }
  return merged;
}
function createInitialMergedProps(inputProps) {
  if (isPropsGetter(inputProps)) {
    // Getter-returned handlers intentionally keep their existing semantics.
    return {
      ...resolvePropsGetter(inputProps, EMPTY_PROPS)
    };
  }
  return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
  if (isPropsGetter(inputProps)) {
    return resolvePropsGetter(inputProps, merged);
  }
  return mutablyMergeInto(merged, inputProps);
}
function copyInitialProps(inputProps) {
  const copiedProps = {
    ...inputProps
  };

  // `copiedProps` is our fresh own-object copy, so iterating with `for...in` is safe here.
  // eslint-disable-next-line guard-for-in
  for (const propName in copiedProps) {
    const propValue = copiedProps[propName];
    if (isEventHandler(propName, propValue)) {
      copiedProps[propName] = wrapEventHandler(propValue);
    }
  }
  return copiedProps;
}

/**
 * Merges two sets of props. In case of conflicts, the external props take precedence.
 */
function mutablyMergeInto(mergedProps, externalProps) {
  if (!externalProps) {
    return mergedProps;
  }

  // eslint-disable-next-line guard-for-in
  for (const propName in externalProps) {
    const externalPropValue = externalProps[propName];
    switch (propName) {
      case 'style':
        {
          mergedProps[propName] = (0,_base_ui_utils_mergeObjects__rspack_import_0/* .mergeObjects */.r)(mergedProps.style, externalPropValue);
          break;
        }
      case 'className':
        {
          mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
          break;
        }
      default:
        {
          if (isEventHandler(propName, externalPropValue)) {
            mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
          } else {
            mergedProps[propName] = externalPropValue;
          }
        }
    }
  }
  return mergedProps;
}
function isEventHandler(key, value) {
  // This approach is more efficient than using a regex.
  const code0 = key.charCodeAt(0);
  const code1 = key.charCodeAt(1);
  const code2 = key.charCodeAt(2);
  return code0 === 111 /* o */ && code1 === 110 /* n */ && code2 >= 65 /* A */ && code2 <= 90 /* Z */ && (typeof value === 'function' || typeof value === 'undefined');
}
function isPropsGetter(inputProps) {
  return typeof inputProps === 'function';
}
function resolvePropsGetter(inputProps, previousProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(previousProps);
  }
  return inputProps ?? EMPTY_PROPS;
}
function mergeEventHandlers(ourHandler, theirHandler) {
  if (!theirHandler) {
    return ourHandler;
  }
  if (!ourHandler) {
    return wrapEventHandler(theirHandler);
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      const baseUIEvent = event;
      makeEventPreventable(baseUIEvent);
      const result = theirHandler(...args);
      if (!baseUIEvent.baseUIHandlerPrevented) {
        ourHandler?.(...args);
      }
      return result;
    }
    const result = theirHandler(...args);
    ourHandler?.(...args);
    return result;
  };
}
function wrapEventHandler(handler) {
  if (!handler) {
    return handler;
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      makeEventPreventable(event);
    }
    return handler(...args);
  };
}
function makeEventPreventable(event) {
  event.preventBaseUIHandler = () => {
    event.baseUIHandlerPrevented = true;
  };
  return event;
}
function mergeClassNames(ourClassName, theirClassName) {
  if (theirClassName) {
    if (ourClassName) {
      // eslint-disable-next-line prefer-template
      return theirClassName + ' ' + ourClassName;
    }
    return theirClassName;
  }
  return ourClassName;
}
function isSyntheticEvent(event) {
  return event != null && typeof event === 'object' && 'nativeEvent' in event;
}
__webpack_require__.d(__webpack_exports__, {
  PT: () => (makeEventPreventable),
  VN: () => (mergeClassNames),
  lZ: () => (mergePropsN),
  v6: () => (mergeProps)
});


},
9492(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ FocusGuard_FocusGuard)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/useIsoLayoutEffect.mjs
var useIsoLayoutEffect = __webpack_require__(74732);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/platform/os.mjs
var os = __webpack_require__(28229);
;// CONCATENATED MODULE: ./node_modules/@base-ui/utils/platform/screen-reader.mjs


// Whether a screen reader is *actually* running cannot be detected. These flags
// identify platforms where a specific screen reader could be active. VoiceOver
// is the system screen reader on Apple platforms and works with every browser
// there, so the flag is purely an OS check; engine-specific quirks (e.g. the
// NSAccessibility virtual-cursor focus path) should be gated at the call site.
/**
 * The user *may* be using VoiceOver — actual activation is not detectable.
 * True on any Apple platform (macOS, iOS, iPadOS).
 */
const voiceOver = os/* .apple */.Bt;
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/platform/engine.mjs
var engine = __webpack_require__(6509);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/visuallyHidden.mjs
var visuallyHidden = __webpack_require__(30200);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
;// CONCATENATED MODULE: ./node_modules/@base-ui/react/utils/FocusGuard.mjs
'use client';






/**
 * @internal
 */

const FocusGuard_FocusGuard = /*#__PURE__*/react.forwardRef(function FocusGuard(props, ref) {
  const [role, setRole] = react.useState();
  (0,useIsoLayoutEffect/* .useIsoLayoutEffect */.g)(() => {
    // Unlike NVDA and JAWS, VoiceOver's virtual cursor triggers `onFocus` as
    // it moves — but only on focusable/role-button elements through WebKit's
    // NSAccessibility path. Setting `role="button"` lets the focus trap catch
    // the cursor.
    if (voiceOver && engine/* .webkit */.Fp) {
      setRole('button');
    }
  }, []);
  const restProps = {
    tabIndex: 0,
    // Role is only for VoiceOver
    role
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    ...props,
    ref: ref,
    style: visuallyHidden/* .visuallyHidden */.Q,
    "aria-hidden": role ? undefined : true,
    ...restProps,
    "data-base-ui-focus-guard": ""
  });
});
if (false) {}

},
7574(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _internals_stateAttributesMapping_mjs__rspack_import_0 = __webpack_require__(55032);

let CommonPopupDataAttributes = function (CommonPopupDataAttributes) {
  /**
   * Present when the popup is open.
   */
  CommonPopupDataAttributes["open"] = "data-open";
  /**
   * Present when the popup is closed.
   */
  CommonPopupDataAttributes["closed"] = "data-closed";
  /**
   * Present when the popup begins animating in.
   */
  CommonPopupDataAttributes[CommonPopupDataAttributes["startingStyle"] = _internals_stateAttributesMapping_mjs__rspack_import_0/* .TransitionStatusDataAttributes.startingStyle */.T.startingStyle] = "startingStyle";
  /**
   * Present when the popup is animating out.
   */
  CommonPopupDataAttributes[CommonPopupDataAttributes["endingStyle"] = _internals_stateAttributesMapping_mjs__rspack_import_0/* .TransitionStatusDataAttributes.endingStyle */.T.endingStyle] = "endingStyle";
  /**
   * Present when the anchor is hidden.
   */
  CommonPopupDataAttributes["anchorHidden"] = "data-anchor-hidden";
  /**
   * Indicates which side the popup is positioned relative to the trigger.
   * @type { 'top' | 'bottom' | 'left' | 'right' | 'inline-end' | 'inline-start'}
   */
  CommonPopupDataAttributes["side"] = "data-side";
  /**
   * Indicates how the popup is aligned relative to specified side.
   * @type {'start' | 'center' | 'end'}
   */
  CommonPopupDataAttributes["align"] = "data-align";
  return CommonPopupDataAttributes;
}({});
let CommonTriggerDataAttributes = /*#__PURE__*/(/* unused pure expression or super */ null && (function (CommonTriggerDataAttributes) {
  /**
   * Present when the popup is open.
   */
  CommonTriggerDataAttributes["popupOpen"] = "data-popup-open";
  /**
   * Present when a pressable trigger is pressed.
   */
  CommonTriggerDataAttributes["pressed"] = "data-pressed";
  return CommonTriggerDataAttributes;
}({})));

// Literal keys (instead of enum member references) keep the docs-only enums above
// tree-shakeable: a runtime reference would retain the whole enum IIFE in every bundle.
const TRIGGER_HOOK = {
  'data-popup-open': ''
};
const PRESSABLE_TRIGGER_HOOK = {
  'data-popup-open': '',
  'data-pressed': ''
};
const POPUP_OPEN_HOOK = {
  'data-open': ''
};
const POPUP_CLOSED_HOOK = {
  'data-closed': ''
};
const ANCHOR_HIDDEN_HOOK = {
  'data-anchor-hidden': ''
};
const triggerOpenStateMapping = {
  open(value) {
    if (value) {
      return TRIGGER_HOOK;
    }
    return null;
  }
};
const pressableTriggerOpenStateMapping = {
  open(value) {
    if (value) {
      return PRESSABLE_TRIGGER_HOOK;
    }
    return null;
  }
};
const popupStateMapping = {
  open(value) {
    if (value) {
      return POPUP_OPEN_HOOK;
    }
    return POPUP_CLOSED_HOOK;
  },
  anchorHidden(value) {
    if (value) {
      return ANCHOR_HIDDEN_HOOK;
    }
    return null;
  }
};
const popupTransitionStateMapping = {
  ...popupStateMapping,
  ..._internals_stateAttributesMapping_mjs__rspack_import_0/* .transitionStatusMapping */.G
};
__webpack_require__.d(__webpack_exports__, {
}, {
  GW: popupStateMapping,
  jL: pressableTriggerOpenStateMapping,
  qV: triggerOpenStateMapping
});


},
77386(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/**
 * If the provided argument is a ref object, returns its `current` value.
 * Otherwise, returns the argument itself.
 */
function resolveRef(maybeRef) {
  if (maybeRef == null) {
    return maybeRef;
  }
  return 'current' in maybeRef ? maybeRef.current : maybeRef;
}
__webpack_require__.d(__webpack_exports__, {
  q: () => (resolveRef)
});


},
89362(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/**
 * Adds an event listener and returns a cleanup function to remove it.
 */

function addEventListener(target, type, listener, options) {
  target.addEventListener(type, listener, options);
  return () => {
    target.removeEventListener(type, listener, options);
  };
}
__webpack_require__.d(__webpack_exports__, {
  q: () => (addEventListener)
});


},
11716(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
function NOOP() {}
const EMPTY_ARRAY = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});
__webpack_require__.d(__webpack_exports__, {
  tE: () => (NOOP)
}, {
  Ml: EMPTY_ARRAY,
  t0: EMPTY_OBJECT
});


},
98103(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/**
 * Creates a formatErrorMessage function with a custom URL and prefix.
 * @param baseUrl - The base URL for the error page (e.g., 'https://base-ui.com/production-error')
 * @param prefix - The prefix for the error message (e.g., 'Base UI')
 * @returns A function that formats error messages with the given URL and prefix
 */
function createFormatErrorMessage(baseUrl, prefix) {
  return function formatErrorMessage(code, ...args) {
    const url = new URL(baseUrl);
    url.searchParams.set('code', code.toString());
    args.forEach(arg => url.searchParams.append('args[]', arg));
    return `${prefix} error #${code}; visit ${url} for the full message.`;
  };
}

/**
 * WARNING: Don't import this directly. It's imported by the code generated by
 * `@mui/internal-babel-plugin-minify-errors`. Make sure to always use string literals in `Error`
 * constructors to ensure the plugin works as expected. Supported patterns include:
 *   throw new Error('My message');
 *   throw new Error(`My message: ${foo}`);
 *   throw new Error(`My message: ${foo}` + 'another string');
 *   ...
 */
const formatErrorMessage = createFormatErrorMessage('https://base-ui.com/production-error', 'Base UI');
/* export default */ const __rspack_default_export = (formatErrorMessage);
__webpack_require__.d(__webpack_exports__, {
}, {
  A: __rspack_default_export
});


},
17964(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/**
 * Combines multiple cleanup functions into a single cleanup function.
 */
function mergeCleanups(...cleanups) {
  return () => {
    for (let i = 0; i < cleanups.length; i += 1) {
      const cleanup = cleanups[i];
      if (cleanup) {
        cleanup();
      }
    }
  };
}
__webpack_require__.d(__webpack_exports__, {
  g: () => (mergeCleanups)
});


},
98673(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
function mergeObjects(a, b) {
  if (a && !b) {
    return a;
  }
  if (!a && b) {
    return b;
  }
  if (a || b) {
    return {
      ...a,
      ...b
    };
  }
  return undefined;
}
__webpack_require__.d(__webpack_exports__, {
  r: () => (mergeObjects)
});


},
61402(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

function ownerDocument(node) {
  return node?.ownerDocument || document;
}
__webpack_require__.d(__webpack_exports__, {
  R: () => (ownerDocument)
});


},
6509(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _shared_mjs__rspack_import_0 = __webpack_require__(36228);


// WebKit (Safari, all iOS browsers, GNOME Web). Distinguished from Blink by
// the legacy `-webkit-backdrop-filter` name — Blink forked from WebKit in 2013
// and only ships the unprefixed `backdrop-filter`.
/** WebKit: Safari, all iOS browsers, GNOME Web. Excludes Blink. */
const webkit = typeof CSS !== 'undefined' && !!CSS.supports?.('-webkit-backdrop-filter:none');

// Anchored to `!webkit` so engines are mutually exclusive by construction.
// Firefox-on-iOS uses WebKit (its UA marker is `FxiOS/`, not `Firefox/`); the
// `!webkit` prefix also defends against future iOS-browser UA changes that
// might inject `Firefox` into a WebKit-based UA.
/** Gecko: Firefox. */
const gecko = !webkit && _shared_mjs__rspack_import_0/* .lowerUserAgent.includes */.ST.includes('firefox');

// All Chromium-based browsers ship `Chrome/` or `Chromium/` in their UA — both
// share the `chrom` prefix, so a single substring check covers Chrome, Edge,
// Opera, Brave, etc. Chrome-on-iOS uses `CriOS/` and stays WebKit. The positive
// UA check also makes this SSR-safe — an empty UA matches nothing.
/** Blink: Chrome, Edge, Opera, Brave, and other Chromium-based browsers. */
const blink = !webkit && _shared_mjs__rspack_import_0/* .lowerUserAgent.includes */.ST.includes('chrom');
__webpack_require__.d(__webpack_exports__, {
}, {
  Fp: webkit,
  cn: gecko
});


},
56888(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _shared_mjs__rspack_import_0 = __webpack_require__(36228);


/** Running in jsdom or HappyDOM (used by unit tests). */
const jsdom = /jsdom|happydom/.test(_shared_mjs__rspack_import_0/* .lowerUserAgent */.ST);
__webpack_require__.d(__webpack_exports__, {
}, {
  I: jsdom
});


},
28229(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _shared_mjs__rspack_import_0 = __webpack_require__(36228);


// iPadOS 13+ reports `MacIntel` for `navigator.platform`; disambiguated via
// `maxTouchPoints` so iPad is classified as iOS, not macOS.
// https://github.com/mui/base-ui/issues/1309
/** iPhone, iPad (including iPadOS 13+ reporting as macOS), iPod. */
const ios = /^i(os$|p)/.test(_shared_mjs__rspack_import_0/* .lowerPlatform */.JG) || _shared_mjs__rspack_import_0/* .lowerPlatform */.JG === 'macintel' && _shared_mjs__rspack_import_0/* .maxTouchPoints */.RT > 1;

/** Android phones, tablets, and embedded Android browsers. */
const ANDROID_STRING = 'android';
const android = _shared_mjs__rspack_import_0/* .lowerPlatform */.JG === ANDROID_STRING || _shared_mjs__rspack_import_0/* .lowerUserAgent.includes */.ST.includes(ANDROID_STRING);

/** macOS desktop. Excludes iPadOS, which reports as `MacIntel`. */
const mac = !ios && _shared_mjs__rspack_import_0/* .lowerPlatform.startsWith */.JG.startsWith('mac');

/** Windows desktop. */
const windows = _shared_mjs__rspack_import_0/* .lowerPlatform.startsWith */.JG.startsWith('win');

/** Linux desktop (including Chrome OS). */
const linux = !android && /^(linux|chrome os)/.test(_shared_mjs__rspack_import_0/* .lowerPlatform */.JG);

/** Any Apple OS (`mac || ios`). */
const apple = mac || ios;
__webpack_require__.d(__webpack_exports__, {
}, {
  Bt: apple,
  s4: ios,
  yA: android
});


},
36228(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/**
 * Reads `navigator.userAgent` / `navigator.platform` (legacy but universally
 * supported) into a normalized shape. In development, prefers the modern
 * `navigator.userAgentData` API on Chromium to avoid DevTools warnings about
 * the deprecated reads; that branch is dead-code-eliminated in production
 * builds to keep the bundle small.
 *
 * Returns empty/zero values when `navigator` is undefined (SSR), so every
 * derived flag safely evaluates to `false`.
 */
function readRawData() {
  if (typeof navigator === 'undefined') {
    return {
      userAgent: '',
      platform: '',
      maxTouchPoints: 0
    };
  }
  if (false) {}
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform ?? '',
    maxTouchPoints: navigator.maxTouchPoints ?? 0
  };
}
const {
  userAgent,
  platform,
  maxTouchPoints
} = readRawData();
const lowerUserAgent = userAgent.toLowerCase();
const lowerPlatform = platform.toLowerCase();

__webpack_require__.d(__webpack_exports__, {
}, {
  JG: lowerPlatform,
  RT: maxTouchPoints,
  ST: lowerUserAgent
});


},
15934(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);

const majorVersion = parseInt(react__rspack_import_0.version, 10);
function isReactVersionAtLeast(reactVersionToCheck) {
  return majorVersion >= reactVersionToCheck;
}
__webpack_require__.d(__webpack_exports__, {
  _: () => (isReactVersionAtLeast)
});


},
8083(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
var react__rspack_import_0_namespace_cache;
/* import */ var react__rspack_import_0 = __webpack_require__(58186);


/**
 * A clone of the React namespace for reading APIs that may be missing in older
 * supported React versions. Bundlers can rewrite direct `React.someNewApi`
 * reads into named imports, which breaks React 17. Reading from this cloned
 * object keeps those lookups optional.
 *
 * @see https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379
 */
const SafeReact = {
  .../*#__PURE__*/ (react__rspack_import_0_namespace_cache || (react__rspack_import_0_namespace_cache = __webpack_require__.t(react__rspack_import_0, 2)))
};
__webpack_require__.d(__webpack_exports__, {
}, {
  X: SafeReact
});


},
92477(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ useStore)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./node_modules/use-sync-external-store/shim/index.js
var shim = __webpack_require__(334);
// EXTERNAL MODULE: ./node_modules/use-sync-external-store/shim/with-selector.js
var with_selector = __webpack_require__(42544);
// EXTERNAL MODULE: ./node_modules/@base-ui/utils/reactVersion.mjs
var reactVersion = __webpack_require__(15934);
;// CONCATENATED MODULE: ./node_modules/@base-ui/utils/fastHooks.mjs


const hooks = [];
let currentInstance = undefined;
function getInstance() {
  return currentInstance;
}
function setInstance(instance) {
  currentInstance = instance;
}
function register(hook) {
  hooks.push(hook);
}

/**
 * Wraps a component function to enable performance optimizations for internal hooks.
 *
 * **Performance Optimization:**
 * Components wrapped with `fastComponent` have access to a shared "instance" context that enables
 * specialized hook implementations to batch operations and reduce overhead. The wrapper creates a
 * stable instance object that persists across renders, sets it as the current context, calls
 * registered hooks before and after rendering, then clears the context. The primary benefit is
 * with `useStore`, where multiple store subscriptions within the same component are collapsed into
 * a single `useSyncExternalStore` subscription per store, significantly reducing re-render overhead.
 * This optimization is only active on React 19+; on earlier versions `useStore` falls back to a
 * separate subscription per call.
 *
 * **Requirements:**
 * - The component function should follow standard React component patterns
 * - `useStore` calls must keep a stable order and count across renders, as batched hooks are
 *   matched by call index
 * - Do not rely on the instance context outside of specialized hooks
 *
 * @param fn - The component function to wrap
 * @returns A wrapped component with the same signature as the input function
 *
 * @example
 * ```tsx
 * // Wrapping a component to enable optimized useStore batching
 * export const TooltipRoot = fastComponent(function TooltipRoot(props) {
 *   // These useStore calls share a single subscription
 *   const open = useStore(store, (state) => state.open);
 *   const disabled = useStore(store, (state) => state.disabled);
 *   const value = useStore(store, (state) => state.value);
 *   // ...
 * });
 * ```
 */
function fastComponent(fn) {
  const FastComponent = (props, forwardedRef) => {
    const instance = useRefWithInit(createInstance).current;
    let result;
    try {
      currentInstance = instance;
      for (const hook of hooks) {
        hook.before(instance);
      }
      result = fn(props, forwardedRef);
      for (const hook of hooks) {
        hook.after(instance);
      }
      instance.didInitialize = true;
    } finally {
      currentInstance = undefined;
    }
    return result;
  };
  FastComponent.displayName = fn.displayName || fn.name;
  return FastComponent;
}

/**
 * Wraps a component function with ref forwarding to enable performance optimizations for internal hooks.
 *
 * This is a convenience wrapper that combines `fastComponent` with `React.forwardRef`, enabling
 * both performance optimizations and proper ref forwarding. See `fastComponent` for details on
 * the performance benefits.
 *
 * @param fn - The component function that accepts props and a forwarded ref
 * @returns A wrapped component with ref forwarding enabled
 *
 * @example
 * ```tsx
 * // Wrapping a component with ref forwarding and optimized hooks
 * export const TooltipTrigger = fastComponentRef(function TooltipTrigger(
 *   props,
 *   forwardedRef
 * ) {
 *   const store = useContext(TooltipContext);
 *   const open = useStore(store, (state) => state.open);
 *   // ... component logic with ref
 *   return <button ref={forwardedRef} {...props} />;
 * });
 * ```
 */
function fastComponentRef(fn) {
  return /*#__PURE__*/React.forwardRef(fastComponent(fn));
}
function createInstance() {
  return {
    didInitialize: false
  };
}
;// CONCATENATED MODULE: ./node_modules/@base-ui/utils/store/useStore.mjs

/* We need to import the shim because React 17 does not support the `useSyncExternalStore` API.
 * More info: https://github.com/mui/mui-x/issues/18303#issuecomment-2958392341 */




/* Some tests fail in R18 with the raw useSyncExternalStore. It may be possible to make it work
 * but for now we only enable it for R19+. */
const canUseRawUseSyncExternalStore = (0,reactVersion/* .isReactVersionAtLeast */._)(19);
const useStoreImplementation = canUseRawUseSyncExternalStore ? useStoreFast : useStoreLegacy;
function useStore(store, selector, a1, a2, a3) {
  return useStoreImplementation(store, selector, a1, a2, a3);
}
function useStoreR19(store, selector, a1, a2, a3) {
  const getSelection = react.useCallback(() => selector(store.getSnapshot(), a1, a2, a3), [store, selector, a1, a2, a3]);
  return (0,shim.useSyncExternalStore)(store.subscribe, getSelection, getSelection);
}
register({
  before(instance) {
    instance.syncIndex = 0;
    if (!instance.didInitialize) {
      instance.syncTick = 1;
      instance.syncHooks = [];
      instance.didChangeStore = true;
      instance.getSnapshot = () => {
        let didChange = false;
        for (let i = 0; i < instance.syncHooks.length; i += 1) {
          const hook = instance.syncHooks[i];
          const value = hook.selector(hook.store.state, hook.a1, hook.a2, hook.a3);
          if (!Object.is(hook.value, value)) {
            didChange = true;
            hook.value = value;
          }
        }
        if (didChange) {
          instance.syncTick += 1;
        }
        return instance.syncTick;
      };
    }
  },
  after(instance) {
    if (instance.syncHooks.length > 0) {
      if (instance.didChangeStore) {
        instance.didChangeStore = false;
        instance.subscribe = onStoreChange => {
          const stores = new Set();
          for (const hook of instance.syncHooks) {
            stores.add(hook.store);
          }
          const unsubscribes = [];
          for (const store of stores) {
            unsubscribes.push(store.subscribe(onStoreChange));
          }
          return () => {
            for (const unsubscribe of unsubscribes) {
              unsubscribe();
            }
          };
        };
      }
      // eslint-disable-next-line react-hooks/rules-of-hooks
      (0,shim.useSyncExternalStore)(instance.subscribe, instance.getSnapshot, instance.getSnapshot);
    }
  }
});
function useStoreFast(store, selector, a1, a2, a3) {
  const instance = getInstance();
  if (!instance) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useStoreR19(store, selector, a1, a2, a3);
  }
  const index = instance.syncIndex;
  instance.syncIndex += 1;
  let hook;
  if (!instance.didInitialize) {
    hook = {
      store,
      selector,
      a1,
      a2,
      a3,
      value: selector(store.getSnapshot(), a1, a2, a3)
    };
    instance.syncHooks.push(hook);
  } else {
    hook = instance.syncHooks[index];
    if (hook.store !== store || hook.selector !== selector || !Object.is(hook.a1, a1) || !Object.is(hook.a2, a2) || !Object.is(hook.a3, a3)) {
      if (hook.store !== store) {
        instance.didChangeStore = true;
      }
      hook.store = store;
      hook.selector = selector;
      hook.a1 = a1;
      hook.a2 = a2;
      hook.a3 = a3;
      hook.value = selector(store.getSnapshot(), a1, a2, a3);
    }
  }
  return hook.value;
}
function useStoreLegacy(store, selector, a1, a2, a3) {
  return (0,with_selector.useSyncExternalStoreWithSelector)(store.subscribe, store.getSnapshot, store.getSnapshot, state => selector(state, a1, a2, a3));
}

},
72055(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _useRefWithInit_mjs__rspack_import_0 = __webpack_require__(24351);
/* import */ var _useOnMount_mjs__rspack_import_1 = __webpack_require__(58368);
'use client';



/** Unlike `setTimeout`, rAF doesn't guarantee a positive integer return value, so we can't have
 * a monomorphic `uint` type with `0` meaning empty.
 * See warning note at:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame#return_value */
const EMPTY = null;
let LAST_RAF = globalThis.requestAnimationFrame;
class Scheduler {
  /* This implementation uses an array as a backing data-structure for frame callbacks.
   * It allows `O(1)` callback cancelling by inserting a `null` in the array, though it
   * never calls the native `cancelAnimationFrame` if there are no frames left. This can
   * be much more efficient if there is a call pattern that alterns as
   * "request-cancel-request-cancel-…".
   * But in the case of "request-request-…-cancel-cancel-…", it leaves the final animation
   * frame to run anyway. We turn that frame into a `O(1)` no-op via `callbacksCount`. */

  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = false;
  tick = timestamp => {
    this.isScheduled = false;
    const currentCallbacks = this.callbacks;
    const currentCallbacksCount = this.callbacksCount;

    // Update these before iterating, callbacks could call `requestAnimationFrame` again.
    this.callbacks = [];
    this.callbacksCount = 0;
    this.startId = this.nextId;
    if (currentCallbacksCount > 0) {
      for (let i = 0; i < currentCallbacks.length; i += 1) {
        currentCallbacks[i]?.(timestamp);
      }
    }
  };
  request(fn) {
    const id = this.nextId;
    this.nextId += 1;
    this.callbacks.push(fn);
    this.callbacksCount += 1;

    /* In a test environment with fake timers, a fake `requestAnimationFrame` can be called
     * but there's no guarantee that the animation frame will actually run before the fake
     * timers are teared, which leaves `isScheduled` set, but won't run our `tick()`. */
    const didRAFChange =  false && (0);
    if (!this.isScheduled || didRAFChange) {
      requestAnimationFrame(this.tick);
      this.isScheduled = true;
    }
    return id;
  }
  cancel(id) {
    const index = id - this.startId;
    if (index < 0 || index >= this.callbacks.length) {
      return;
    }
    this.callbacks[index] = null;
    this.callbacksCount -= 1;
  }
}
let scheduler = new Scheduler();

/**
 * Replaces the shared scheduler and drops all pending animation frame callbacks.
 *
 * For test environments only. The scheduler is process-global, so a callback scheduled in one test
 * but never run (e.g. requested under fake timers that were torn down before the frame fired) would
 * otherwise survive into a later test and run there against stale state. Call between tests to drop
 * such leftovers.
 */
function resetAnimationFrameScheduler() {
  const previous = scheduler;
  scheduler = new Scheduler();
  // Continue the id sequence so `cancel()` calls from `AnimationFrame` instances created before the
  // reset cannot cancel callbacks scheduled after it.
  scheduler.nextId = previous.nextId;
  scheduler.startId = previous.nextId;
  // A frame requested before the reset may still be pending and holds the previous scheduler's
  // `tick`; empty its queue in place so that frame runs nothing when it eventually fires.
  previous.callbacks = [];
  previous.callbacksCount = 0;
}
class AnimationFrame {
  static create() {
    return new AnimationFrame();
  }
  static request(fn) {
    return scheduler.request(fn);
  }
  static cancel(id) {
    return scheduler.cancel(id);
  }
  currentId = EMPTY;

  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  request(fn) {
    this.cancel();
    this.currentId = scheduler.request(() => {
      this.currentId = EMPTY;
      fn();
    });
  }
  cancel = () => {
    if (this.currentId !== EMPTY) {
      scheduler.cancel(this.currentId);
      this.currentId = EMPTY;
    }
  };
  disposeEffect = () => {
    return this.cancel;
  };
}

/**
 * A `requestAnimationFrame` with automatic cleanup and guard.
 */
function useAnimationFrame() {
  const timeout = (0,_useRefWithInit_mjs__rspack_import_0/* .useRefWithInit */.j)(AnimationFrame.create).current;
  (0,_useOnMount_mjs__rspack_import_1/* .useOnMount */.y)(timeout.disposeEffect);
  return timeout;
}
__webpack_require__.d(__webpack_exports__, {
  KP: () => (AnimationFrame),
  NR: () => (useAnimationFrame)
});


},
84941(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var _safeReact_mjs__rspack_import_1 = __webpack_require__(8083);
'use client';



let globalId = 0;

// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride, prefix = 'mui') {
  const [defaultId, setDefaultId] = react__rspack_import_0.useState(idOverride);
  const id = idOverride || defaultId;
  react__rspack_import_0.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`${prefix}-${globalId}`);
    }
  }, [defaultId, prefix]);
  return id;
}
const maybeReactUseId = _safeReact_mjs__rspack_import_1/* .SafeReact.useId */.X.useId;

/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
function useId(idOverride, prefix) {
  // React.useId() is only available from React 17.0.0.
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
  }

  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride, prefix);
}
__webpack_require__.d(__webpack_exports__, {
  B: () => (useId)
});


},
74732(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
'use client';


const noop = () => {};
const useIsoLayoutEffect = typeof document !== 'undefined' ? react__rspack_import_0.useLayoutEffect : noop;
__webpack_require__.d(__webpack_exports__, {
}, {
  g: useIsoLayoutEffect
});


},
34244(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _useRefWithInit_mjs__rspack_import_0 = __webpack_require__(24351);


/**
 * Merges refs into a single memoized callback ref or `null`.
 * This makes sure multiple refs are updated together and have the same value.
 *
 * This function accepts up to four refs. If you need to merge more, or have an unspecified number of refs to merge,
 * use `useMergedRefsN` instead.
 */

function useMergedRefs(a, b, c, d) {
  const forkRef = (0,_useRefWithInit_mjs__rspack_import_0/* .useRefWithInit */.j)(createForkRef).current;
  if (didChange(forkRef, a, b, c, d)) {
    update(forkRef, [a, b, c, d]);
  }
  return forkRef.callback;
}

/**
 * Merges an array of refs into a single memoized callback ref or `null`.
 *
 * If you need to merge a fixed number (up to four) of refs, use `useMergedRefs` instead for better performance.
 */
function useMergedRefsN(refs) {
  const forkRef = (0,_useRefWithInit_mjs__rspack_import_0/* .useRefWithInit */.j)(createForkRef).current;
  if (didChangeN(forkRef, refs)) {
    update(forkRef, refs);
  }
  return forkRef.callback;
}
function createForkRef() {
  return {
    callback: null,
    cleanup: null,
    refs: []
  };
}
function didChange(forkRef, a, b, c, d) {
  // prettier-ignore
  return forkRef.refs[0] !== a || forkRef.refs[1] !== b || forkRef.refs[2] !== c || forkRef.refs[3] !== d;
}
function didChangeN(forkRef, newRefs) {
  return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index) => ref !== newRefs[index]);
}
function update(forkRef, refs) {
  forkRef.refs = refs;
  if (refs.every(ref => ref == null)) {
    forkRef.callback = null;
    return;
  }
  forkRef.callback = instance => {
    if (forkRef.cleanup) {
      forkRef.cleanup();
      forkRef.cleanup = null;
    }
    if (instance != null) {
      const cleanupCallbacks = Array(refs.length).fill(null);
      for (let i = 0; i < refs.length; i += 1) {
        const ref = refs[i];
        if (ref == null) {
          continue;
        }
        switch (typeof ref) {
          case 'function':
            {
              const refCleanup = ref(instance);
              if (typeof refCleanup === 'function') {
                cleanupCallbacks[i] = refCleanup;
              }
              break;
            }
          case 'object':
            {
              ref.current = instance;
              break;
            }
          default:
        }
      }
      forkRef.cleanup = () => {
        for (let i = 0; i < refs.length; i += 1) {
          const ref = refs[i];
          if (ref == null) {
            continue;
          }
          switch (typeof ref) {
            case 'function':
              {
                const cleanupCallback = cleanupCallbacks[i];
                if (typeof cleanupCallback === 'function') {
                  cleanupCallback();
                } else {
                  // Legacy ref with no attach-time cleanup: detach by calling it with `null`.
                  // It returns nothing; React 19 cleanups are handled in the branch above.
                  void ref(null);
                }
                break;
              }
            case 'object':
              {
                ref.current = null;
                break;
              }
            default:
          }
        }
      };
    }
  };
}
__webpack_require__.d(__webpack_exports__, {
  U: () => (useMergedRefsN),
  a: () => (useMergedRefs)
});


},
58368(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
/* import */ var _empty_mjs__rspack_import_1 = __webpack_require__(11716);
'use client';




/**
 * A React.useEffect equivalent that runs once, when the component is mounted.
 */
function useOnMount(fn) {
  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
  /* eslint-disable react-hooks/exhaustive-deps */
  react__rspack_import_0.useEffect(fn, _empty_mjs__rspack_import_1/* .EMPTY_ARRAY */.Ml);
  /* eslint-enable react-hooks/exhaustive-deps */
}
__webpack_require__.d(__webpack_exports__, {
  y: () => (useOnMount)
});


},
24351(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(58186);
'use client';


const UNINITIALIZED = {};

/**
 * A React.useRef() that is initialized with a function. Note that it accepts an optional
 * initialization argument, so the initialization function doesn't need to be an inline closure.
 *
 * @usage
 *   const ref = useRefWithInit(sortColumns, columns)
 */

function useRefWithInit(init, initArg) {
  const ref = react__rspack_import_0.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}
__webpack_require__.d(__webpack_exports__, {
  j: () => (useRefWithInit)
});


},
77942(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _safeReact_mjs__rspack_import_0 = __webpack_require__(8083);
/* import */ var _useRefWithInit_mjs__rspack_import_1 = __webpack_require__(24351);
'use client';



const useInsertionEffect = _safeReact_mjs__rspack_import_0/* .SafeReact.useInsertionEffect */.X.useInsertionEffect;
const useSafeInsertionEffect =
// React 17 doesn't have useInsertionEffect.
useInsertionEffect &&
// Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
useInsertionEffect !== _safeReact_mjs__rspack_import_0/* .SafeReact.useLayoutEffect */.X.useLayoutEffect ? useInsertionEffect : fn => fn();
/**
 * Stabilizes the function passed so it's always the same between renders.
 *
 * The function becomes non-reactive to any values it captures.
 * It can safely be passed as a dependency of `React.useMemo` and `React.useEffect` without re-triggering them if its captured values change.
 *
 * The function must only be called inside effects and event handlers, never during render (which throws an error).
 *
 * This hook is a more permissive version of React 19.2's `React.useEffectEvent` in that it can be passed through contexts and called in event handler props, not just effects.
 */
function useStableCallback(callback) {
  const stable = (0,_useRefWithInit_mjs__rspack_import_1/* .useRefWithInit */.j)(createStableCallback).current;
  stable.next = callback;
  useSafeInsertionEffect(stable.effect);
  return stable.trampoline;
}
function createStableCallback() {
  const stable = {
    next: undefined,
    callback: assertNotCalled,
    trampoline: (...args) => stable.callback?.(...args),
    effect: () => {
      stable.callback = stable.next;
    }
  };
  return stable;
}
function assertNotCalled() {
  if (false) {}
}
__webpack_require__.d(__webpack_exports__, {
  K: () => (useStableCallback)
});


},
37227(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _useRefWithInit_mjs__rspack_import_0 = __webpack_require__(24351);
/* import */ var _useOnMount_mjs__rspack_import_1 = __webpack_require__(58368);
'use client';



const EMPTY = 0;
class Timeout {
  static create() {
    return new Timeout();
  }
  currentId = EMPTY;

  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = EMPTY;
      fn();
    }, delay); /* Node.js types are enabled in development */
  }
  isStarted() {
    return this.currentId !== EMPTY;
  }
  clear = () => {
    if (this.currentId !== EMPTY) {
      clearTimeout(this.currentId);
      this.currentId = EMPTY;
    }
  };
  disposeEffect = () => {
    return this.clear;
  };
}

/**
 * A `setTimeout` with automatic cleanup and guard.
 */
function useTimeout() {
  const timeout = (0,_useRefWithInit_mjs__rspack_import_0/* .useRefWithInit */.j)(Timeout.create).current;
  (0,_useOnMount_mjs__rspack_import_1/* .useOnMount */.y)(timeout.disposeEffect);
  return timeout;
}
__webpack_require__.d(__webpack_exports__, {
  E: () => (Timeout),
  Z: () => (useTimeout)
});


},
77888(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _useIsoLayoutEffect_mjs__rspack_import_1 = __webpack_require__(74732);
/* import */ var _useRefWithInit_mjs__rspack_import_0 = __webpack_require__(24351);
'use client';




/**
 * Untracks the provided value by turning it into a ref to remove its reactivity.
 *
 * Used to access the passed value inside `React.useEffect` without causing the effect to re-run when the value changes.
 */
function useValueAsRef(value) {
  const latest = (0,_useRefWithInit_mjs__rspack_import_0/* .useRefWithInit */.j)(createLatestRef, value).current;
  latest.next = value;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  (0,_useIsoLayoutEffect_mjs__rspack_import_1/* .useIsoLayoutEffect */.g)(latest.effect);
  return latest;
}
function createLatestRef(value) {
  const latest = {
    current: value,
    next: value,
    effect: () => {
      latest.current = latest.next;
    }
  };
  return latest;
}
__webpack_require__.d(__webpack_exports__, {
  u: () => (useValueAsRef)
});


},
30200(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
const visuallyHiddenBase = {
  clipPath: 'inset(50%)',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  border: 0,
  padding: 0,
  width: 1,
  height: 1,
  margin: -1
};
const visuallyHidden = {
  ...visuallyHiddenBase,
  position: 'fixed',
  top: 0,
  left: 0
};
const visuallyHiddenInput = {
  ...visuallyHiddenBase,
  position: 'absolute'
};
__webpack_require__.d(__webpack_exports__, {
}, {
  Q: visuallyHidden,
  a: visuallyHiddenInput
});


},
35090(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(87622);
/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)("eye-off", __iconNode);


//# sourceMappingURL=eye-off.mjs.map

__webpack_require__.d(__webpack_exports__, {
}, {
  A: EyeOff
});


},

};
