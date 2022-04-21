
import { defineComponent, PropType, ref, watch } from "vue";
import Popover from "./../../popover"
import Input from "./../../input"
import Icon from "./../../icon"
import { SelectOption } from "./select.types";

const SelectProps = {
  options:{
    type:Array as PropType<SelectOption[]>,
    default:()=>([])
  },
  placeholder:{
    type:String,
  },
  value:{
    type:String,
    default:""
  }
}

const Select = defineComponent({
  name:'UseSelect',
  props:SelectProps,
  emits:['update:value'],
  setup(props,{emit}){
    const popoverRef = ref()

    const selectValue = ref<SelectOption>(
      props.options.filter(opt => opt.value === props.value)[0] ||
      {label:'',value:''}
    )

    const handleSelect = (option:SelectOption) => {
     selectValue.value = option
     popoverRef.value.close()
    }

    const renderOptions = () => {
      return props.options.map((option)=>{
        return <div class="u-select-option" onClick={()=>handleSelect(option)}>
          {option.label}
        </div>
      })
    }

    watch(selectValue,(newValue)=>{
      emit('update:value',newValue.value)
    })

    return ()=>(
      <div class="u-select">
        <Popover 
        ref={popoverRef}
        trigger="click"
        showArrow={false}
        placement="bl"
        v-slots={{
          content:() => renderOptions()
        }}>
          <Input 
            value={selectValue.value.label}
            placeholder={props.placeholder}
            v-slots={{
             suffix:() => <Icon name='arrowdown' />
            }}
          />
        </Popover>
      </div>
    )
  }
})


export default Select
