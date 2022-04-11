
import { defineComponent, h, Transition } from "vue";

const TransitionHook = (delay: number) => ({
  onBeforeEnter(el: HTMLElement) {
    el.style.transition = `${delay}s height ease-in-out`
    el.style.height = '0';
  },
  onEnter(el: HTMLElement) {
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`;
    } else {
      el.style.height = '';
    }
    el.style.overflow = 'hidden';
  },
  onAfterEnter(el: HTMLElement) {
    el.style.transition = '';
    el.style.height = '';
  },
  onBeforeLeave(el: HTMLElement) {
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = 'hidden';
  },
  onLeave(el: HTMLElement) {
    if (el.scrollHeight !== 0) {
      el.style.transition = `${delay}s height ease-in-out`
      el.style.height = '0';
    }
  },
  onAfterLeave(el: HTMLElement) {
    el.style.transition = '';
    el.style.height = '';
  }
})

const CollapseTransition = defineComponent({
  name: 'UseCollapseTransition',
  props: {
    delay: {
      type: Number,
      default: 0.3
    }
  },
  setup(props, { slots }) {
    return () => h(Transition, TransitionHook(props.delay), {
      default: () => slots.default()
    })
  }
})

export default CollapseTransition
