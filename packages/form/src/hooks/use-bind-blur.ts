import { VNode } from "vue";

const bindVnodeNames = [
  'UseInput',
  'UseSelect',
  'UseDatePicker'
]

export const useBindBlur = (slots: VNode[], state: any, listener: Function) => {
  const scanSlots = (vnodes: VNode[]) => {
    vnodes.forEach(vnode => {
      const VNodeName = vnode.type && (vnode.type as any).name
      if (bindVnodeNames.includes(VNodeName)) {
        vnode.props.error = state
        vnode.props.onBlur = listener
      }
      if (Array.isArray(vnode.children)) scanSlots(vnode.children as any)
    })
  }
  scanSlots(slots)
}
