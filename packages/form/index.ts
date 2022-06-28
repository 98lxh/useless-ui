import { withIntall } from "@useless-ui/utils/src/with-install";
import Form from "./src/form";
import FormItem from "./src/form-item"

const UForm = withIntall(Form)
const UFormItem = withIntall(FormItem)

export {
  UForm,
  UFormItem
}
