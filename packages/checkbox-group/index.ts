import { App } from "vue";
import CheckboxGroup from "../checkbox/src/checkbox-group";

type SFCWithInstall<T> = T & { install(app: App): void }

const withIntall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T>
}

const UCheckboxGroup = withIntall(CheckboxGroup)

export default UCheckboxGroup
