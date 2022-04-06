import { App } from "vue";
import CollapseTransition from "./src/collapse-transition";

type SFCWithInstall<T> = T & { install(app: App): void }

const withIntall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T>
}

const UCollapseTransition = withIntall(CollapseTransition)

export default UCollapseTransition
