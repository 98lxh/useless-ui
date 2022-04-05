import { App } from 'vue';
import Checkbox from "./src/checkbox";

Checkbox.install = (app: App) => {
  app.component(Checkbox.name, Checkbox)
}

export default Checkbox
