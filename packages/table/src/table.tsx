import { defineComponent, PropType, provide } from "vue";
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
    }
}

const Table = defineComponent({
    name: "UseTable",
    props: tableProps,
    emit: ['sortChange', 'selectChange'],
    setup(props, { expose }) {
        const { cloneData, cloneColumns, selectedItems, select, selectAll } = useTable(props)
        const { tableWrapperRef, tableInnerRef, tableRef } = useTableFixed(props)
        const { sort } = useTableSort({ cloneColumns, cloneData })

        provide(injectTableKey, {
            data: cloneData,
            columns: cloneColumns,
            selectedItems,
            select,
            sort
        })

        expose({
            selectAll
        })


        return () => (
            <div
                class="u-table"
                ref={tableWrapperRef}
            >
                <div
                    class="u-table__inner"
                    ref={tableInnerRef}
                    style={{ height: props.maxHeight + 'px' }}
                >
                    <table
                        ref={tableRef}
                    >
                        <TableHeader />
                        <TableBody />
                    </table>
                </div>
            </div>

        )
    }
})


export default Table
