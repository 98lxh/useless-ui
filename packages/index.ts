import { App } from 'vue';
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from './button-group';
import Row from './row';
import Col from './col';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import CollapseTransition from './collapse-transition';
import Transfer from './transfer';
import Tree from "./tree"
import Message from "./message";
import Space from "./space"
import Popover from './popover';
import Tooltip from './tooltip'
import Input from './input'
import Modal from "./modal"
import DatePicker from "./date-picker";
import { UForm as Form, UFormItem as FormItem } from "./form"

const components = [
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
  Message,
  Space,
  Popover,
  Tooltip,
  Input,
  Modal,
  DatePicker,
  Form,
  FormItem
]


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
  Message,
  Space,
  Popover,
  Tooltip,
  Input,
  Modal,
  DatePicker,
  Form,
  install
}
