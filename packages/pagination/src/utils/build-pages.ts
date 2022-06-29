import { IPaginationProps } from "../pagination.types"

/**
 * 生成页码数组
 * @param {props} 组件props
 * @param {prev} 显示更多按钮(上翻)
 * @param {next} 显示更多按钮(下翻)
*/
export function buildPages(props: IPaginationProps, prev: boolean, next: boolean): Array<number> {
  const { total, pageCount, currentPage } = props;
  const pages: Array<number> = []
  let start = 2
  let end = total

  if (next && prev) {
    let val = Math.floor((pageCount - 2) / 2)
    start = currentPage - val
    end = currentPage + val
  } else if (next && !prev) {
    end = pageCount
  } else if (prev && !next) {
    start = total - (pageCount - 1)
  }

  for (let i = start; i < end; i++) {
    pages.push(i)
  }

  return pages
}
