import { defineComponent, PropType, computed } from "vue";
import { ITableColumn } from "./table.types";
import TableCheckbox from "./table-tools/table-checkbox";
import TableSort from "./table-tools/table-sort";

const TableCell = defineComponent({
  name: 'UseTableCell',
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
    const classes = computed(() => {
      const { column, isHeader } = props;
      return ({
        'u-table-cell': true,
        'is-sort': column.sortable && isHeader
      })
    })

    function renderColumn() {
      const { isHeader, column, row } = props;
      
      return (
        <span>
          {
            isHeader
              ? column.title
              : column.render ? column.render(row) : row[column.key]
          }
        </span>
      )
    }

    return () => {
      let Tool = null
      const { column, isHeader } = props;
      const { type, sortable } = column
      if (type === 'selection') Tool = TableCheckbox
      if (sortable && isHeader) Tool = TableSort

      return (
        <td
          class={classes.value}
        >
          {renderColumn()}
          { Tool && ( <Tool {...props} /> ) }
        </td>
      )
    }
  }
})

export default TableCell
