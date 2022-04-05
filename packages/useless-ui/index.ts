import { App } from 'vue';
import Button from "@useless-ui/button";
import Icon from "@useless-ui/icon";
import ButtonGroup from '@useless-ui/button-group';
import Row from '@useless-ui/row';
import Col from '@useless-ui/col';


const components = [Button, Icon, ButtonGroup, Row, Col]
const install = (app: App): void => {
  components.forEach(comp => {
    app.component(comp.name, comp)
  })
}


export default {
  install
}
