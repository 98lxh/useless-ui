import { VNode } from "vue";

export const useBindBlur = (slots: VNode[], state: any, listener: any) => {
  const scanSlots = (vnodes: VNode[]) => {
    vnodes.forEach(vnode => {
      const VNodeName = vnode.type && (vnode.type as any).name
      if (VNodeName === 'UseInput' || VNodeName === 'UseSelect') {
        vnode.props.error = state
        vnode.props.onBlur = listener
      }
      if (Array.isArray(vnode.children)) scanSlots(vnode.children as any)
    })
  }
  scanSlots(slots)
}
