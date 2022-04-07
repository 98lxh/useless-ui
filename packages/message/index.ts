import { App } from "vue";
import Message from "./src/index";

type SFCWithInstall<T> = T & { install(app: App): void }

const withIntall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    app.config.globalProperties.$message = Message
  }
  return comp as SFCWithInstall<T>
}

const UMessage = withIntall(Message)

export default UMessage
