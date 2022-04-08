import { App } from "vue";
import Space from "./src/space";

type SFCWithInstall<T> = T & { install(app: App): void }

const withIntall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    app.component(Space.name, Space)
  }
  return comp as SFCWithInstall<T>
}

const USpace = withIntall(Space)

export default USpace
