import { App } from "vue"

type SFCWithInstall<T> = T & { install(app: App): void }

export function withIntall<T>(comp: T) {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T>
}


