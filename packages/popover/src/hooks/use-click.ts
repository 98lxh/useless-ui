import { onUnmounted, Ref } from "vue"

export function useClick(props: any, contentRef: Ref<Element>) {
  function handleClickOutside(e) {
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
