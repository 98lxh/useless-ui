import { defineComponent, inject } from "vue";
import { injectTableKey } from "./context";
import TableCell from "./table-cell";

const TableHeader = defineComponent({
  name: "UseTableHeader",
  setup() {
    const { columns } = inject(injectTableKey)

    return () => (
      <thead class="u-table__header">
        <tr>
          {
            columns.value.map((col, index) => {
              return (
                <TableCell
                  isHeader
                  key={index}
                  column={col}
                />
              )
            })
          }
        </tr>
      </thead>
    )
  }
})

export default TableHeader
