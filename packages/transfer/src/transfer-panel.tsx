import { defineComponent, PropType, reactive } from "vue";
import { Props } from "./transfer.types";
import { useCheck } from "./hooks/use-check";
import UCheckboxGroup from "@useless-ui/checkbox-group";
import UCheckbox from "@useless-ui/checkbox";

const TransferPanel = defineComponent({
  name: 'UseTransferPanel',
  props: {
    data: {
      type: Array as PropType<any[]>,
      default: () => []
    },
    props: {
      type: Object as PropType<Props>
    },
    target: {
      type: Boolean
    }
  },
  emits: ['checkedChange'],
  components: {
    UCheckbox,
    UCheckboxGroup
  },
  setup(props) {
    const panelState = reactive({
      checked: [],
      allChecked: false,
      indeterminate: false
    })

    const { keyProps, disabledProps, labelProps, handleCheckedAllChange } = useCheck(props, panelState)


    return () => (
      <div class="u-transfer__panel">
        <div class="u-transfer__panel__header">
          <UCheckbox v-model={panelState.allChecked} indeterminate={panelState.indeterminate} onChange={handleCheckedAllChange}>
            <span>{props.target ? '目标项' : '源项'}</span>
          </UCheckbox>
          <span>{props.data.length + '/' + panelState.checked.length}</span>
        </div>
        <div class="u-transfer__panel__checkbox">
          <UCheckboxGroup v-model={panelState.checked}>
            {
              props.data.map((item) => (
                <UCheckbox key={item[keyProps.value]} label={item[keyProps.value]} disabled={item[disabledProps.value as any]}>
                  {item[labelProps.value]}
                </UCheckbox>
              ))
            }
          </UCheckboxGroup>
        </div>
      </div>
    )
  }
})

export default TransferPanel
