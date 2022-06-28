import { defineComponent, PropType, reactive } from "vue";
import { DataItem, Key, Props } from "./transfer.types";
import { useComputedData } from "./hooks/use-computed-data";
import TransferPanel from "./transfer-panel";
import UButton from "@useless-ui/button";

const Transfer = defineComponent({
  name: 'UseTransfer',
  props: {
    data: {
      type: Array as PropType<DataItem[]>,
    },
    modelValue: {
      type: Array as PropType<Key[]>
    },
    props: {
      type: Object as PropType<Props>,
      default: () => ({
        label: 'label',
        key: 'key',
        disabled: 'disabled'
      })
    }
  },
  components: {
    TransferPanel,
    UButton
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    let { targetData, sourceData } = useComputedData(props)

    const checkedState = reactive({
      leftChecked: [],
      rightChecked: []
    })

    function onSourceChange(leftValue){
      checkedState.leftChecked = leftValue
    }

    function onTargetChange (rigthValue) {
      checkedState.rightChecked = rigthValue
    }

    function addToLeft () {
      const currentValue = props.modelValue.splice(0);
      checkedState.rightChecked.forEach(item => {
        let index = currentValue.indexOf(item);
        if (index > -1) {
          currentValue.splice(index, 1)
        }
      })
      emit("update:modelValue", currentValue)
    }
    
    function addToRight(){
      const leftChckedKeys = checkedState.leftChecked.map(key => key)
      let currentValue = [...props.modelValue, ...leftChckedKeys]
      emit("update:modelValue", currentValue)
    }

    return () => (
      <div class="u-transfer">
        <TransferPanel data={sourceData.value} props={props.props} onCheckedChange={onSourceChange} />
        <div class="u-transfer__buttons">
          <UButton icon="arrow-left" size="small" disabled={checkedState.rightChecked.length === 0} onClick={addToLeft} />
          <UButton icon="arrow-right" size="small" disabled={checkedState.leftChecked.length === 0} onClick={addToRight} />
        </div>
        <TransferPanel data={targetData.value} props={props.props} target onCheckedChange={onTargetChange} />
      </div>
    )
  }
})

export default Transfer
