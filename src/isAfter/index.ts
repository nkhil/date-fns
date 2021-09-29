import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param date - the date that should be after the other one to return true
 * @param dateToCompare - the date to compare with
 * @returns the first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
export default function isAfter(
  dirtyDate: Date | number,
  dirtyDateToCompare: Date | number
): boolean {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const dateToCompare = toDate(dirtyDateToCompare)
  return date.getTime() > dateToCompare.getTime()
}
