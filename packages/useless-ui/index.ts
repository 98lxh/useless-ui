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
import Input from "@useless-ui/input"
import Modal from "@useless-ui/modal"
import DatePicker from "@useless-ui/date-picker"
import Select from "@useless-ui/select"
import Pagionaction from '@useless-ui/pagination';
import Table from "@useless-ui/table"
import { UForm as Form, UFormItem as FormItem } from "@useless-ui/form"
import { UCarousel as Carousel, UCarouselItem as CarouselItem } from "@useless-ui/carousel"

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
  FormItem,
  Select,
  Carousel,
  CarouselItem,
  Pagionaction,
  Table
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
  Select,
  Carousel,
  CarouselItem,
  Pagionaction,
  Table
}

export default {
  install
}
