import { computed, defineComponent, inject, PropType } from "vue";
import Checkbox from "@useless-ui/checkbox";
import { injectTableKey } from "../context";
import { ITableColumn } from "../table.types";

const TableCheckbox = defineComponent({
  name: 'UseTableCheckbox',
  props: {
    column: {
      type: Object as PropType<ITableColumn>,
      required: true
    },
    row: {
      type: Object as PropType<any>,
    },
    isHeader: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { selectedItems, select, data } = inject(injectTableKey)

    const checked = computed(() => {
      const { isHeader, row } = props;
      if (isHeader && !row) return data.value.length === selectedItems.value.length;
      return selectedItems.value.includes(props.row._id)
    })

    const indeterminate = computed(() => {
      const { isHeader } = props;
      return selectedItems.value.length > 0 && isHeader
    })

    return () => {
      const { row } = props;
      return (
        <Checkbox
          modelValue={checked.value}
          indeterminate={indeterminate.value}
          onChange={() => select(row)}
        />
      )
    }
  }
})

export default TableCheckbox
