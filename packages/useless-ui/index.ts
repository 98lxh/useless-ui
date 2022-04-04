import { App } from 'vue';
import Button from "@useless-ui/button";
import Icon from "@useless-ui/icon";
import ButtonGroup from '@useless-ui/button-group';

const components = [Button, Icon, ButtonGroup]
console.log(components)
const install = (app: App): void => {
  components.forEach(comp => {
    app.component(comp.name, comp)
  })
}


export default {
  install
}
