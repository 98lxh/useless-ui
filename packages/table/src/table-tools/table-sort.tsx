import { computed, defineComponent, inject, PropType } from 'vue';
import Icon from '@useless-ui/icon';
import { ITableColumn } from '../table.types';
import { injectTableKey } from '../context';

const TableSort = defineComponent({
  name: 'UseTableSort',
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
    const { sort } = inject(injectTableKey)

    return () => {
      const { column } = props;
      return (
        <span class="sort-wrapper">
          <Icon
            class={column.sortType === 'asc' && 'is-active'}
            onClick={() => sort(column, column.sortType === 'asc' ? 'normal' : 'asc')}
            name='arrow-up-filling'
          />
          <Icon
            class={column.sortType === 'desc' && 'is-active'}
            onClick={() => sort(column, column.sortType === 'desc' ? 'normal' : 'desc')}
            name='arrow-down-filling'
          />
        </span>
      )
    }
  }
})

export default TableSort
