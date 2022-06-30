import { defineComponent, inject } from "vue";
import { injectTableKey } from "./context";
import TableCell from "./table-cell";

const TableBody = defineComponent({
  name: 'UseTableBody',
  setup() {
    const { data, columns } = inject(injectTableKey)

    return () => (
      <tbody class="u-table__body">
        {
          data.value.map((row, index) => {

            return (
              <tr key={index}>
                {
                  columns.value.map((col, index) => (
                    <TableCell
                      key={index}
                      column={col}
                      row={row}
                    />
                  ))
                }
              </tr>
            )
          })
        }
      </tbody>
    )
  }
})

export default TableBody
