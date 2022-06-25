import message from './utils/create-message';
import { App } from "vue";

type SFCWithInstall<T> = T & { install(app: App): void }

const withIntall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    app.config.globalProperties.$message = message
  }
  return comp as SFCWithInstall<T>
}

const UMessage = withIntall(message)

export default UMessage
