import { App } from "vue";
import Form from "./src/form";
import FormItem from "./src/form-item"

type SFCWithInstall<T> = T & { install(app: App): void }

const withIntall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T>
}

const UForm = withIntall(Form)
const UFormItem = withIntall(FormItem)

export {
  UForm,
  UFormItem
}
