
import { defineComponent } from "vue";
import { FiledPropsDefine } from "../src/form.types";
import Input from "./../../input"

const NumberField = defineComponent({
  name: 'UseNumberField',
  props: FiledPropsDefine,
  components: {
    Input
  },
  setup(props) {
    return () => <Input value={props.value} />
  }
})

export default NumberField
