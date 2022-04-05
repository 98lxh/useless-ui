import { App } from 'vue';
import Button from "@useless-ui/button";
import Icon from "@useless-ui/icon";
import ButtonGroup from '@useless-ui/button-group';
import Row from '@useless-ui/row';
import Col from '@useless-ui/col';
import Checkbox from '@useless-ui/checkbox';
import CheckboxGroup from '@useless-ui/checkbox-group';


const components = [Button, Icon, ButtonGroup, Row, Col, Checkbox, CheckboxGroup]
const install = (app: App): void => {
  components.forEach(comp => {
    app.component(comp.name, comp)
  })
}


export default {
  install
}
