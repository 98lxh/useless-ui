import { defineComponent, PropType, provide } from "vue";
import { ITableColumn, ITableData } from "./table.types";
import { useTable } from "./hooks/use-table";
import { useTableSort } from "./hooks/use-table-sort";
import { injectTableKey } from "./context";
import { useTableFixed } from "./hooks/use-table-fixed";
import { useTableSelection } from "./hooks/use-table-selection";
import TableHeader from "./table-header";
import TableBody from "./table-body";
import TableEmpty from "./table-tools/table-empty";

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
        const { cloneData, cloneColumns,isEmpty } = useTable(props)
        const { selectedItems, select, selectAll } = useTableSelection({ cloneData })
        const { tableWrapperRef, tableInnerRef, tableRef, addTableFixedBoth, getFixedTableBothOffset, tableFixedBothRecord, hiddenShadow } = useTableFixed(props)
        const { sort } = useTableSort({ cloneColumns, cloneData })

        provide(injectTableKey, {
            //数据
            data: cloneData,
            columns: cloneColumns,
            //固定
            addTableFixedBoth,
            getFixedTableBothOffset,
            tableFixedBothRecord,
            hiddenShadow,
            //选择
            selectedItems,
            select,
            sort
        })

        expose({
            selectAll
        })

        return () => {
            const { maxHeight, scrollX } = props;
            
            return (
                <div class="u-table" ref={tableWrapperRef}>
                    <div class="u-table__inner"
                        style={{ height: maxHeight + 'px' }}
                        ref={tableInnerRef}
                    >
                        <table ref={tableRef} style={{ width: scrollX + 'px' }} >
                            <TableHeader />
                            {!isEmpty.value && <TableBody />}
                        </table>
                        { isEmpty.value && <TableEmpty />}
                    </div>
                </div>
            )
        }
    }
})


export default Table
