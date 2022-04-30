import { onUnmounted, Ref } from "vue"
export const useClick = (props: any, contentRef: Ref<Element>) => {
  const handleClickOutside = (e) => {
    if (!contentRef.value.contains(e.target) && !props.triggerEl.contains(e.target)) {
      props.triggerCtx.instance = null
      props.onClose()
    }
  }

  document.addEventListener('click', handleClickOutside)

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
}
