import { App } from "vue";
import Popover from "./src/popover";
import PopoverNode from "./src/popover-node";

type SFCWithInstall<T> = T & { install(app: App): void }

const withIntall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T>
}

const UPopover = withIntall(Popover)
const UPopoverNode = withIntall(PopoverNode)

export default UPopover
