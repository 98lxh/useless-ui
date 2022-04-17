import { defineComponent, PropType } from "vue";
import { Schema } from "./form.types";
import FormItem from "./form-item";
const formProps = {
  schema: {
    type: Object as PropType<Schema>,
    required: true
  },
  value: {
    required: true
  },
  onChange: {
    type: Function as PropType<(v: any) => void>,
    required: true
  }
}
const Form = defineComponent({
  name: 'UseForm',
  props: formProps,
  setup(props) {
    const { schema, value } = props
    const handleChange = (v: any) => {
      props.onChange(v)
    }
    return () => <FormItem schema={schema} value={value} onChange={handleChange} />
  }
})

export default Form
