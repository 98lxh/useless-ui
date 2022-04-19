import { getCurrentInstance } from 'vue';
import { watch, computed } from 'vue';
import { ITransferPanelProps, IPanelState } from '../transfer.types';
export const useCheck = (props: ITransferPanelProps, panelState: IPanelState) => {
  const labelProps = computed(() => props.props.label)
  const keyProps = computed(() => props.props.key)
  const disabledProps = computed(() => props.props.disabled)
  const emit = getCurrentInstance().emit

  const checkableData = computed(() => {
    return props.data.filter(item => !item[disabledProps.value as any])
  })

  const handleCheckedAllChange = (val) => {
    if (panelState.indeterminate) return panelState.checked = []
    panelState.allChecked = val
    panelState.checked = val ? checkableData.value.map(item => item[keyProps.value]) : []
  }

  watch(() => panelState.checked, () => {
    const checkKeys = checkableData.value.map(item => item[keyProps.value])
    panelState.allChecked = checkKeys.every(item => panelState.checked.includes(item)) && checkableData.value.length > 0;
    panelState.indeterminate = checkKeys.some(item => panelState.checked.includes(item)) && !panelState.allChecked
    emit('checkedChange', panelState.checked)
  }, {
    deep: true
  })

  watch(() => props.data, () => {
    panelState.checked = []
  })

  return {
    labelProps,
    keyProps,
    disabledProps,
    handleCheckedAllChange
  }
}
