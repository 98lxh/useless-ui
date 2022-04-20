
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
    const handleChange = (event) => {
      const value = event.target.value
      props.onChange(Number(value))
    }

    return () => <Input value={props.value} type="number" onInput={handleChange} />
  }
})

export default NumberField
