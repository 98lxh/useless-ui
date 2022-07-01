import { computed, defineComponent, PropType, provide } from "vue";
import { ITableColumn, ITableData } from "./table.types";
import TableHeader from "./table-header";
import TableBody from "./table-body";
import { useTable } from "./hooks/use-table";
import { useTableSort } from "./hooks/use-table-sort";
import { injectTableKey } from "./context";
import { useTableFixed } from "./hooks/use-table-fixed";

const tableProps = {
    columns: {
        type: Array as PropType<ITableColumn[]>,
        default: () => ([])
    },
    data: {
        type: Array as PropType<ITableData[]>,
        default: () => ([])
    },
    maxHeight: {
        type: Number,
    },
    scrollX: {
        type: Number
    }
}

const Table = defineComponent({
    name: "UseTable",
    props: tableProps,
    emit: ['sortChange', 'selectChange'],
    setup(props, { expose }) {
        const { cloneData, cloneColumns, selectedItems, select, selectAll } = useTable(props)
        const { tableWrapperRef, tableInnerRef, tableRef, addTableFixedBoth, getFixedTableBothOffset, tableFixedBothRecord ,hiddenShadow} = useTableFixed(props)
        const { sort } = useTableSort({ cloneColumns, cloneData })


        provide(injectTableKey, {
            data: cloneData,
            columns: cloneColumns,
            hiddenShadow,
            addTableFixedBoth,
            getFixedTableBothOffset,
            tableFixedBothRecord,
            selectedItems,
            select,
            sort
        })

        expose({
            selectAll
        })

        return () => {
            const { maxHeight, scrollX } = props
            return (
                <div
                    class="u-table"
                    ref={tableWrapperRef}
                >
                    <div
                        class="u-table__inner"
                        style={{ height: maxHeight + 'px' }}
                        ref={tableInnerRef}
                    >
                        <table
                            ref={tableRef}
                            style={{ width: scrollX + 'px' }}
                        >
                            <TableHeader />
                            <TableBody />
                        </table>
                    </div>
                </div>
            )
        }
    }
})


export default Table
