
import { createVNode, render, VNode } from "vue"
import { IMessageParams } from "./message.types"
import MessageComonent from './message';

const instances: VNode[] = [];
let seed = 1
const Message = (options: IMessageParams) => {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  let offset = options.offset || 20;
  instances.forEach(inst => {
    offset += inst.el.offsetHeight + 20
  })

  let userClose = options.onClose
  let opts = {
    ...options,
    id: `message_${seed++}`,
    offset,
    onClose: () => {
      const removeIndex = instances.findIndex(inst => inst.props.id === opts.id)
      const removeHeight = instances[removeIndex].el.offsetHeight;
      instances.forEach(item => {
        item.props.offset = item.props.offset - 60
        item.el.style.top = item.props.offset - 60 + 'px'
      })
      instances.splice(removeIndex, 1)
      userClose?.()
    }
  }

  const container = document.createElement('div')
  const messageVnode = createVNode(MessageComonent, opts as any)
  messageVnode.props!.onDestroy = () => {
    render(null, container) //remove dom
  }
  render(messageVnode, container)
  document.body.appendChild(container.firstChild)
  instances.push(messageVnode)
}

export default Message
