import { computed, ref, getCurrentInstance } from 'vue';
import { ITreeProps } from '../src/tree.types';
import { buildTreeData, flatternTree } from '../utils/helper';

function useVModel(props: ITreeProps, key: string) {
  const emit = getCurrentInstance().emit;
  return computed({
    get() {
      return props[key]
    },
    set(newValue) {
      emit(`update:${key}`, newValue)
    }
  })
}

export function useTree(props: ITreeProps) {
  const selectedKey = typeof props.selectedKey === 'undefined' ? ref('') : useVModel(props, 'selectedKey')
  const checkedKeys = useVModel(props, 'checkedKeys')
  const data = buildTreeData(props)
  const flatternList = flatternTree(data.value)

  return {
    data,
    selectedKey,
    checkedKeys,
    flatternList,
  }
}
