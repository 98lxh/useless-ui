import { App } from 'vue';
import Button from "@useless-ui/button";
import Icon from "@useless-ui/icon";

const components = [Button, Icon]

const install = (app: App): void => {
  components.forEach(comp => {
    app.component(comp.name, comp)
  })
}


export default {
  install
}
