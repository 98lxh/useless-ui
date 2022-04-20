
import { defineComponent } from "vue";
import { FiledPropsDefine } from "../src/form.types";
import Input from "./../../input"

const StringField = defineComponent({
  name: 'UseStringField',
  props: FiledPropsDefine,
  components: {
    Input
  },
  setup(props) {
    const handleChange = (event) => {
      props.onChange(event.target.value)
    }

    return () => <Input value={props.value} onInput={handleChange} />
  }
})

export default StringField
