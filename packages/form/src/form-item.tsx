import { PropType } from 'vue';
import { defineComponent } from 'vue';
import NumberField from '../fields/number-field';
import StringField from '../fields/string-field';
import { Schema, SchemaTypes } from './form.types';
const formItemProps = {
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
const FormItem = defineComponent({
  name: 'UseFormItem',
  props: formItemProps,
  setup(props) {
    return () => {
      const schema = props.schema as Schema
      const type = schema.type
      let Component: any
      switch (type) {
        case SchemaTypes.STRING: {
          Component = StringField
          break
        }
        case SchemaTypes.NUMBER: {
          Component = NumberField
          break
        }
        default: {
          console.log(`${type} is not supported`)
        }
      }

      return <Component {...props} />
    }
  }
})

export default FormItem
