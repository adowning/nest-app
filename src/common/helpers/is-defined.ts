export function isDefined<T>(argument: T | undefined): argument is T {
  return argument !== undefined
}

export function isEmpty(val) {
  return val === NaN ||
    val === 'NaN' ||
    val === undefined ||
    val == null ||
    val.length <= 0
    ? true
    : false
}
