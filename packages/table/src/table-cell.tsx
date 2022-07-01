import { defineComponent, PropType, computed, ref, inject, onMounted, reactive, watch } from "vue";
import { ITableColumn } from "./table.types";
import TableCheckbox from "./table-tools/table-checkbox";
import TableSort from "./table-tools/table-sort";
import { injectTableKey } from "./context";

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
    const tableCellRef = ref<HTMLTableCellElement | null>(null)
    const offset = reactive({ left: '', right: '' })
    const directCalcOffset = props.column.fixed === 'left' || props.column._last_fixed
    const { addTableFixedBoth, getFixedTableBothOffset, tableFixedBothRecord, hiddenShadow } = inject(injectTableKey)

    const classes = computed(() => {
      const { column, isHeader } = props;
      const { sortable, fixed, _has_shadow } = column
      const { left,right,both} = hiddenShadow.value
      return ({
        [`is-fixed-${fixed}`]: fixed,
        'u-table-cell': true,
        'is-sort': sortable && isHeader,
        'is-shadow': _has_shadow,
        'is-hidden-shadow': (fixed === 'left' && left) || (fixed === 'right' && right) || both
      })
    })

    function calculationOffset() {
      const { column } = props;
      offset[column.fixed] = getFixedTableBothOffset(column) + 'px'
    }

    function intialOffset() {
      const { column } = props;
      if (!column.fixed) return
      const { width } = tableCellRef.value.getBoundingClientRect()
      addTableFixedBoth(column, width)
      if (directCalcOffset) calculationOffset()
    }

    onMounted(() => intialOffset())

    if (!directCalcOffset) {
      watch(() => tableFixedBothRecord, () => calculationOffset(), {
        deep: true
      })
    }

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
          style={offset}
          ref={tableCellRef}
        >
          {renderColumn()}
          {Tool && (<Tool {...props} />)}
        </td>
      )
    }
  }
})

export default TableCell
