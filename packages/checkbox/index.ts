import { App } from "vue";
import Checkbox from "./src/checkbox";

type SFCWithInstall<T> = T & { install(app: App): void }

const withIntall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T>
}

const UCheckbox = withIntall(Checkbox)

export default UCheckbox
