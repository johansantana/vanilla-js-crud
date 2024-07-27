export function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }

  return true
}

export function validateRow(obj) {
  if (!obj) {
    return false
  }

  if (
    obj.firstName === null ||
    obj.lastName === null ||
    obj.regNumber === null ||
    obj.grades === null
  ) {
    return false
  }

  return true
}
