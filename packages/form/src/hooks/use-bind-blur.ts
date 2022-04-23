import { VNode } from "vue";

export const useBindBlur = (slots:VNode[],state:any,listener:any) => {
  const scanSlots = (vnodes:VNode[]) => {
    vnodes.forEach(vnode => {
      const VnodeName = vnode.type &&(vnode.type as any).name 
      if( VnodeName === 'UseInput' || VnodeName === 'UseSelect') {
        vnode.props.error = state
        vnode.props.onBlur = listener
      }
      if(Array.isArray(vnode.children)) scanSlots(vnode.children as any)
    })
  }
  scanSlots(slots)
}
