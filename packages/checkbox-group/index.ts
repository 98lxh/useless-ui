import { App } from 'vue';
import CheckboxGroup from "../checkbox/src/checkbox-group";

CheckboxGroup.install = function (app: App) {
  app.component(CheckboxGroup.name, CheckboxGroup)
}

export default CheckboxGroup
