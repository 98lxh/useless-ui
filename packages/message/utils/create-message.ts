
import { createVNode, nextTick, render, VNode } from "vue"
import { IMessageOptions, IMessageParams } from "../src/message.types"
import MessageComonent from '../src/message';

const instances: VNode[] = [];
let seed = 1
const message = (options: IMessageParams) => {
  if (typeof options === 'string') {
    options = {
      content: options
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
      nextTick(() => {
        const removeIndex = instances.findIndex(inst => inst.props.id === opts.id)
        instances.splice(removeIndex, 1)
        instances.forEach(item => {
          item.el.style.top = item.props.offset - 60 + 'px'
          item.props.offset = item.props.offset - 60
        })
      })
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

message.info = function (options: IMessageOptions) {
  message({
    ...options,
    type: 'info'
  })
}

message.success = function (options: IMessageOptions) {
  message({
    ...options,
    type: 'success'
  })
}


message.warning = function (options: IMessageOptions) {
  message({
    ...options,
    type: 'warning'
  })
}

message.error = function (options: IMessageOptions) {
  message({
    ...options,
    type: 'error'
  })
}


export default message
