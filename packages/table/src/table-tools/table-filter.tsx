import { defineComponent, inject, nextTick, PropType, ref } from "vue"
import { ITableColumn } from "../table.types"
import Popover from "@useless-ui/popover"
import Checkbox from "@useless-ui/checkbox"
import CheckboxGroup from "@useless-ui/checkbox-group"
import Button from "@useless-ui/button"
import Icon from "@useless-ui/icon"
import { injectTableKey } from "../context"

const TableFilter = defineComponent({
  name: "UseTableFilter",
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
    const checkOptions = ref<Array<string>>([])
    const { filter } = inject(injectTableKey)

    function handleChecked(values) {
      const label = values[values.length - 1]
      nextTick(() => {
        checkOptions.value = [label]
      })
    }

    function handleFilter() {
      const { column } = props;
      const value = column.filterOption.filter(c => c.label === checkOptions.value[0])[0]?.value
      filter(column,value)
    }
    
    function handleReset() { 
      const { column } = props;
      checkOptions.value = []
      filter(column)
    }

    return () => (
      <Popover
        trigger="click"
        placement="br"
        v-slots={{
          content: () => (
            <div class="u-table-filter">
              <CheckboxGroup
                v-model={checkOptions.value}
                onChange={handleChecked}
              >
                {props.column.filterOption.map(opt => (
                  <Checkbox label={opt.label} />
                ))}
              </CheckboxGroup>
              <div class="u-table-filter__btns">
                <Button
                  size="small"
                  onClick={handleReset}
                >
                  重置
                </Button>
                <Button
                  size="small"
                  type="primary"
                  onClick={handleFilter}
                >
                  确认
                </Button>
              </div>
            </div>
          )
        }}
      >
        <Icon name="filter" />
      </Popover>
    )
  }
})

export default TableFilter
