export const __rspack_esm_id = 639;
export const __rspack_esm_ids = [639];
export const __webpack_modules__ = {
24992(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _lib_normalizeDates_js__rspack_import_0 = __webpack_require__(30269);
/* import */ var _startOfDay_js__rspack_import_1 = __webpack_require__(59339);



/**
 * The {@link isSameDay} function options.
 */

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = (0,_lib_normalizeDates_js__rspack_import_0/* .normalizeDates */.x)(
    options?.in,
    laterDate,
    earlierDate,
  );
  return +(0,_startOfDay_js__rspack_import_1/* .startOfDay */.o)(dateLeft_) === +(0,_startOfDay_js__rspack_import_1/* .startOfDay */.o)(dateRight_);
}

// Fallback for modularized imports:
/* unused export default */ var __rspack_default_export = ((/* unused pure expression or super */ null && (isSameDay)));

__webpack_require__.d(__webpack_exports__, {
  r: () => (isSameDay)
});


},
66117(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _constructFrom_js__rspack_import_1 = __webpack_require__(70861);
/* import */ var _constructNow_js__rspack_import_2 = __webpack_require__(75057);
/* import */ var _isSameDay_js__rspack_import_0 = __webpack_require__(24992);




/**
 * The {@link isToday} function options.
 */

/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date, options) {
  return (0,_isSameDay_js__rspack_import_0/* .isSameDay */.r)(
    (0,_constructFrom_js__rspack_import_1/* .constructFrom */.w)(options?.in || date, date),
    (0,_constructNow_js__rspack_import_2/* .constructNow */.A)(options?.in || date),
  );
}

// Fallback for modularized imports:
/* unused export default */ var __rspack_default_export = ((/* unused pure expression or super */ null && (isToday)));

__webpack_require__.d(__webpack_exports__, {
  c: () => (isToday)
});


},
89358(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(87622);
/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)("chevron-left", __iconNode);


//# sourceMappingURL=chevron-left.mjs.map

__webpack_require__.d(__webpack_exports__, {
}, {
  A: ChevronLeft
});


},

};
