export function isObject(value: any) {
  const valueType = typeof value
  return (value !== null) && (valueType === 'object' || valueType === 'function')
 }
