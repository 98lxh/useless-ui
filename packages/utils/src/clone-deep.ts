import { isObject } from "./is-object"

/**
 * 深拷贝
 * @param {source} 拷贝数据源
 * @param {map} 避免循环引用
*/
export function cloneDeep(source: any, map = new WeakMap()): any {
  if (!isObject(source)) return source

  //symbol
  if (typeof source === 'symbol') {
    return Symbol(source.description)
  }

  //function
  if (typeof source === 'function') {
    return source
  }

  if (map.has(source)) { 
    return map.get(source)
  }

  let target: any = Array.isArray(source) ? [] : {}
  map.set(source, target)

  //set
  if (source instanceof Set) {
    target = new Set()
    source.forEach(v => target.add(cloneDeep(v)))
  }

  //map
  if (source instanceof Map) {
    target = new Map()
    source.forEach((k, v) => {
      target.set(cloneDeep(k), cloneDeep(v))
    })
  }

  for (const key in source) {
    target[key] = cloneDeep(source[key], map)
  }

  //symbol作为key特殊处理
  const symbolKeys = Object.getOwnPropertySymbols(source)

  for (let sKey of symbolKeys) {
    target[sKey] = cloneDeep(source)
  }

  return target
}
