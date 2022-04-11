import { App } from "vue";
import Tooltip from "./src/tooltip";

type SFCWithInstall<T> = T & { install(app: App): void }

const withIntall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    app.component(Tooltip.name, Tooltip)
  }
  return comp as SFCWithInstall<T>
}

const UTooltip = withIntall(Tooltip)

export default UTooltip
