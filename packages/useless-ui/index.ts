import { App } from 'vue';
import Button from "@useless-ui/button";
import Icon from "@useless-ui/icon";
import ButtonGroup from '@useless-ui/button-group';
import Row from '@useless-ui/row';
import Col from '@useless-ui/col';
import Checkbox from '@useless-ui/checkbox';
import CheckboxGroup from '@useless-ui/checkbox-group';
import CollapseTransition from '@useless-ui/collapse-transition';
import Transfer from '@useless-ui/transfer';
import Tree from "@useless-ui/tree"
import Message from "@useless-ui/message";
import Space from "@useless-ui/space"
import Popover from '@useless-ui/popover';
import Tooltip from "@useless-ui/tooltip"

const components = [Button, Icon, ButtonGroup,
  Row, Col, Checkbox, CheckboxGroup, Transfer, CollapseTransition, Tree, Message, Space, Popover, Tooltip]
const install = (app: App): void => {
  components.forEach(comp => {
    app.component(comp.name, comp)
  })
}

export {
  Button,
  Icon,
  ButtonGroup,
  Row,
  Col,
  Checkbox,
  CheckboxGroup,
  Transfer,
  CollapseTransition,
  Tree,
  Message
}

export default {
  install
}
