export const __rspack_esm_id = 2921;
export const __rspack_esm_ids = [2921];
export const __webpack_modules__ = {
310(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ isYesterday)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/date-fns/constructFrom.js
var constructFrom = __webpack_require__(70861);
// EXTERNAL MODULE: ./node_modules/date-fns/constructNow.js
var constructNow = __webpack_require__(75057);
// EXTERNAL MODULE: ./node_modules/date-fns/isSameDay.js
var isSameDay = __webpack_require__(24992);
// EXTERNAL MODULE: ./node_modules/date-fns/toDate.js
var toDate = __webpack_require__(79067);
;// CONCATENATED MODULE: ./node_modules/date-fns/addDays.js



/**
 * The {@link addDays} function options.
 */

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * **You don't need date-fns\***:
 *
 * Temporal has a built-in `add` method on all its classes:
 *
 * - [`Temporal.Instant.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add)
 * - [`Temporal.PlainDate.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/add)
 * - [`Temporal.PlainDateTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/add)
 * - [`Temporal.PlainTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add)
 * - [`Temporal.PlainYearMonth.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/add)
 * - [`Temporal.ZonedDateTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add)
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 *
 * @example
 * // Using Temporal:
 * // Add 10 days to 1 September 2014:
 * Temporal.PlainDate.from("2014-09-01").add({ days: 10 }).toString();
 * //=> "2014-09-11"
 */
function addDays(date, amount, options) {
  const _date = (0,toDate/* .toDate */.a)(date, options?.in);
  if (isNaN(amount)) return (0,constructFrom/* .constructFrom */.w)(options?.in || date, NaN);

  // If 0 days, no-op to avoid changing times in the hour before end of DST
  if (!amount) return _date;

  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* export default */ const date_fns_addDays = ((/* unused pure expression or super */ null && (addDays)));

;// CONCATENATED MODULE: ./node_modules/date-fns/subDays.js


/**
 * The {@link subDays} function options.
 */

/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays(date, amount, options) {
  return addDays(date, -amount, options);
}

// Fallback for modularized imports:
/* export default */ const date_fns_subDays = ((/* unused pure expression or super */ null && (subDays)));

;// CONCATENATED MODULE: ./node_modules/date-fns/isYesterday.js





/**
 * The {@link isYesterday} function options.
 */

/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * const result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
function isYesterday(date, options) {
  return (0,isSameDay/* .isSameDay */.r)(
    (0,constructFrom/* .constructFrom */.w)(options?.in || date, date),
    subDays((0,constructNow/* .constructNow */.A)(options?.in || date), 1),
  );
}

// Fallback for modularized imports:
/* export default */ const date_fns_isYesterday = ((/* unused pure expression or super */ null && (isYesterday)));


},
34395(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(87622);
/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
const ChevronsLeft = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)("chevrons-left", __iconNode);


//# sourceMappingURL=chevrons-left.mjs.map

__webpack_require__.d(__webpack_exports__, {
}, {
  A: ChevronsLeft
});


},
30622(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(87622);
/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
const ChevronsRight = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)("chevrons-right", __iconNode);


//# sourceMappingURL=chevrons-right.mjs.map

__webpack_require__.d(__webpack_exports__, {
}, {
  A: ChevronsRight
});


},
14890(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(87622);
/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
];
const Ellipsis = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)("ellipsis", __iconNode);


//# sourceMappingURL=ellipsis.mjs.map

__webpack_require__.d(__webpack_exports__, {
}, {
  A: Ellipsis
});


},
26257(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(87622);
/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
];
const Inbox = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)("inbox", __iconNode);


//# sourceMappingURL=inbox.mjs.map

__webpack_require__.d(__webpack_exports__, {
}, {
  A: Inbox
});


},

};
