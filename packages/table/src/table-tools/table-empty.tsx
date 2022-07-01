import { defineComponent } from "vue";
import Icon from "@useless-ui/icon"

const TableEmpty = defineComponent({
  name: 'UseTabelEmpty',
  setup() {

    return () => (
      <div class="u-table-empty">
        <div class="u-table-empty__content">
          <Icon name="nodata" />
          <div>无数据</div>
        </div>
      </div>
    )
  }
})


export default TableEmpty
