export const __rspack_esm_id = 6618;
export const __rspack_esm_ids = [6618];
export const __webpack_modules__ = {
75057(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _constructFrom_js__rspack_import_0 = __webpack_require__(70861);


/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateArg<DateType>,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */
function constructNow(date) {
  return (0,_constructFrom_js__rspack_import_0/* .constructFrom */.w)(date, Date.now());
}

// Fallback for modularized imports:
/* unused export default */ var __rspack_default_export = ((/* unused pure expression or super */ null && (constructNow)));

__webpack_require__.d(__webpack_exports__, {
  A: () => (constructNow)
});


},

};
